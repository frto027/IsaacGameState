const fs = require('fs')

TEMPLATE = fs.readFileSync('save-data.bt').toString('utf-8')
let cursor = 0
let var_whitelist = ['VER']

function skipSpace() {
    while (true) {
        while (cursor < TEMPLATE.length && /[ \n\r\t]/.exec(TEMPLATE[cursor])) {
            cursor++
        }
        if (TEMPLATE.substr(cursor, 2) == '/*') {
            cursor += 2
            while (cursor < TEMPLATE.length && TEMPLATE.substr(cursor - 2, 2) != '*/') {
                cursor++
            }
            continue
        }
        if (TEMPLATE.substr(cursor, 2) == '//') {
            cursor += 2
            while (cursor < TEMPLATE.length && TEMPLATE[cursor - 1] != '\n') {
                cursor++
            }
            continue
        }
        return
    }

}
function peekKeyword() {
    skipSpace()
    let begin = cursor
    let mcursor = begin
    while (mcursor < TEMPLATE.length && /[#a-zA-Z0-9_]/.exec(TEMPLATE[mcursor])) {
        mcursor++
    }
    if (mcursor != begin) {
        return TEMPLATE.substr(begin, mcursor - begin)
    }
    if (['/*', '*/', '//', '!=', '==', '||','>=','<='].indexOf(TEMPLATE.substr(mcursor, 2)) != -1) {
        mcursor += 2
    } else if ('<>={}[];()-+*/,&'.indexOf(TEMPLATE[mcursor]) != -1) {
        mcursor++
    }
    if (mcursor != begin) {
        return TEMPLATE.substr(begin, mcursor - begin)
    }
    if (mcursor == TEMPLATE.length)
        return undefined
    console.error('unknown str "' + TEMPLATE[begin] + '" at:\n--------\n' + TEMPLATE.substr(begin, 100) + "\n-------")
    throw new Error('unknwon str')
}
function readKeyword() {
    skipSpace()
    let begin = cursor
    while (cursor < TEMPLATE.length && /[#a-zA-Z0-9_]/.exec(TEMPLATE[cursor])) {
        cursor++
    }
    if (cursor != begin) {
        return TEMPLATE.substr(begin, cursor - begin)
    }
    if (['/*', '*/', '//', '!=', '==', '||','>=','<='].indexOf(TEMPLATE.substr(cursor, 2)) != -1) {
        cursor += 2
    } else if ('<>={}[];()-+*/,&'.indexOf(TEMPLATE[cursor]) != -1) {
        cursor++
    }
    if (cursor != begin) {
        return TEMPLATE.substr(begin, cursor - begin)
    }

    console.error('unknown str "' + TEMPLATE[begin] + '" at:\n--------\n' + TEMPLATE.substr(begin, 100) + "\n-------")
    throw new Error('unknwon str')
}
function skipOpt() {
    skipSpace()
    if (TEMPLATE[cursor] == '<' && cursor + 1 < TEMPLATE.length) {
        cursor++
        while (cursor < TEMPLATE.length && TEMPLATE[cursor - 1] != '>') {
            cursor++
        }
    }
}
function readAssert(x) {
    let keyword = readKeyword()
    if (keyword != x) {
        console.error('"' + keyword + '" not "' + x + '" at:\n--------\n' + TEMPLATE.substr(cursor, 100) + "\n-------")

        throw new Error('not ' + x)
    }
}
function readExpr() {
    let level = 0
    let levelF = 0

    let ret = ''
    while (true) {
        let keyword = peekKeyword()
        if (keyword == '(') {
            level++
            ret += keyword + ' '
            readAssert(keyword)
        } else if (keyword == ')') {
            level--
            if (level < 0) {
                if (levelF != 0) {
                    throw new Error()
                }
                return ret
            } else {
                ret += keyword + ' '
                readAssert(keyword)
            }

        } else if (keyword == '[') {
            levelF++
            ret += keyword + ' '
            readAssert(keyword)

        } else if (keyword == ']') {
            levelF--
            if (levelF < 0) {
                if (level != 0) {
                    throw new Error()
                }
                return ret
            } else {
                ret += keyword + ' '
                readAssert(keyword)
            }
        } else if (/[a-zA-Z_]/.exec(keyword[0]) && var_whitelist.indexOf(keyword) == -1) {
            ret += 'this.' + keyword + ' '
            readAssert(keyword)
        } else {
            ret += keyword + ' '
            readAssert(keyword)
        }
    }
}
let STRUCTURES_DECL = ''

function parseTemplate() {
    let GEN = ''
    while (cursor < TEMPLATE.length) {
        let w = peekKeyword()
        if (w.startsWith('//')) {
            readKeyword()
            while (cursor < TEMPLATE.length && TEMPLATE[cursor] != '\n') {
                cursor++
            }
        } else if (w.startsWith('/*')) {
            readKeyword()
            while (cursor < TEMPLATE.length && TEMPLATE.substr(cursor - 2, 2) != '*/') {
                cursor++
            }
        } else if (w == '#define') {
            readAssert('#define')
            GEN += 'const ' + readKeyword() + '=' + readKeyword() + ';\n'
        } else if (w == 'struct') {
            readAssert('struct')
            if (peekKeyword() == '{') {
                readAssert('{')
                //匿名结构体
                let body = parseTemplate()
                readAssert('}')
                //var decl
                let varname = readKeyword();
                if (peekKeyword() == '[') {
                    readAssert('[')
                    let count = readExpr();
                    readAssert(']')
                    skipOpt();
                    readAssert(';')

                    GEN += `this.${varname} = []\n`
                    GEN += `for(let i=0;i<${count};i++){\n`;
                    GEN += `this.${varname}[i]= ` + 'new (function(){\n' + body + '\n})()\n'
                    GEN += "}\n"

                } else {
                    readAssert(';')
                    GEN += `this.${varname} = ` + 'new (function(){\n' + body + '\n})()\n'
                }
            } else {
                let name = readKeyword()
                if (peekKeyword() == '{') {
                    readAssert('{')
                    let body = parseTemplate()
                    readAssert('}')
                    readAssert(';')
                    STRUCTURES_DECL += 'function ' + name + '(){\n' + body + '\n}\n'
                } else {
                    //var decl
                    while (true) {
                        let varname = readKeyword()
                        if (peekKeyword() == '[') {
                            readAssert('[')
                            let count = readExpr();
                            readAssert(']')
                            skipOpt();

                            GEN += `this.${varname} = []\n`
                            GEN += `for(let i=0;i<${count};i++){\n`;
                            GEN += `this.${varname}[i]= new ${name}()\n`
                            GEN += "}\n"
                        } else {
                            GEN += `this.${varname} = new ${name}()\n`
                        }
                        if (peekKeyword() == ',') {
                            readAssert(',')
                        } else {
                            readAssert(';')
                            break
                        }
                    }
                }
            }
        } else if (w == 'int64' || w == 'uint64') {
            readAssert(w);
            while (true) {
                let varname = readKeyword()
                if (peekKeyword() == '[') {
                    readAssert('[');
                    let count = readExpr()
                    readAssert(']')

                    GEN += `this.${varname} = []\n`
                    GEN += `for(let i=0;i<${count};i++){\n`;
                    GEN += `this.${varname}[i]= read_uint64();\n`
                    GEN += "}\n"
                } else {
                    GEN += `this.${varname} = read_uint64()\n`
                }
                if (peekKeyword() == ',') {
                    readAssert(',')
                } else {
                    skipOpt();
                    readAssert(';')
                    break
                }
            }
        } else if (w == 'int32' || w == 'int') {
            readAssert(w);
            while (true) {
                let varname = readKeyword()
                if (peekKeyword() == '[') {
                    readAssert('[');
                    let count = readExpr()
                    readAssert(']')

                    GEN += `this.${varname} = []\n`
                    GEN += `for(let i=0;i<${count};i++){\n`;
                    GEN += `this.${varname}[i]= read_uint32();\n`
                    GEN += "}\n"
                } else {
                    GEN += `this.${varname} = read_uint32()\n`
                }
                if (peekKeyword() == ',') {
                    readAssert(',')
                } else {
                    skipOpt();
                    readAssert(';')
                    break
                }
            }
        } else if (w == 'float') {
            readAssert(w);
            while (true) {
                let varname = readKeyword()
                if (peekKeyword() == '[') {
                    readAssert('[');
                    let count = readExpr()
                    readAssert(']')

                    GEN += `this.${varname} = []\n`
                    GEN += `for(let i=0;i<${count};i++){\n`;
                    GEN += `this.${varname}[i]= read_float();\n`
                    GEN += "}\n"
                } else {
                    GEN += `this.${varname} = read_float()\n`
                }
                if (peekKeyword() == ',') {
                    readAssert(',')
                } else {
                    skipOpt();
                    readAssert(';')
                    break
                }
            }
        } else if (w == 'uint16' || w == 'int16') {
            readAssert(w);
            while (true) {
                let varname = readKeyword()
                if (peekKeyword() == '[') {
                    readAssert('[');
                    let count = readExpr()
                    readAssert(']')

                    GEN += `this.${varname} = []\n`
                    GEN += `for(let i=0;i<${count};i++){\n`;
                    GEN += `this.${varname}[i]= read_uint16();\n`
                    GEN += "}\n"
                } else {
                    GEN += `this.${varname} = read_uint16()\n`
                }
                if (peekKeyword() == ',') {
                    readAssert(',')
                } else {
                    skipOpt();
                    readAssert(';')
                    break
                }
            }
        } else if (w == 'byte' || w == 'char' || w == 'ubyte') {
            readAssert(w);
            while (true) {
                let varname = readKeyword()
                if (peekKeyword() == '[') {
                    readAssert('[');
                    let count = readExpr()
                    readAssert(']')

                    GEN += `this.${varname} = []\n`
                    GEN += `for(let i=0;i<${count};i++){\n`;
                    GEN += `this.${varname}[i]= read_byte();\n`
                    GEN += "}\n"
                } else {
                    GEN += `this.${varname} = read_byte()\n`
                }
                if (peekKeyword() == ',') {
                    readAssert(',')
                } else {
                    skipOpt();
                    readAssert(';')
                    break
                }
            }
        } else if (w == 'if') {
            while (true) {
                readAssert('if')
                readAssert('(')
                let expr = readExpr()
                readAssert(')')
                readAssert('{')
                GEN += `if(${expr})` + '{\n'
                GEN += parseTemplate()
                GEN += '}\n'

                readAssert('}')
                if (peekKeyword() == 'else') {
                    readAssert('else')
                    GEN += 'else '
                    if (peekKeyword() != 'if') {
                        break
                    }
                } else {
                    break
                }
            }
        } else if (w == '{') {
            readAssert('{')
            GEN += "{\n" + parseTemplate() + "\n}\n"
            readAssert('}')
        } else if (w == '}') {
            return GEN
        } else {
            console.error('unknwon keyword "' + w + '" at:\n--------\n' + TEMPLATE.substr(cursor, 100) + "\n-------")
            throw new Error('unknown keyword')
        }
    }
    return GEN
}



let GEN = parseTemplate()
fs.writeFileSync('save-data.js',
    `function IsaacGameState(dv,checker){
    let cursor = 0
    function read_uint32(){
        let r = dv.getUint32(cursor, true)
        cursor += 4
        return r
    }
    function read_uint16(){
        let r = dv.getUint16(cursor, true)
        cursor += 2
        return r
    }
    function read_byte(){
        let r = dv.getUint8(cursor)
        cursor += 1
        return r
    }
    function read_float(){
        let r = dv.getFloat32(cursor,true)
        cursor += 4
        return r
    }
    function read_uint64(){
        /* 小心精度损失 */
        let r = dv.getUint32(cursor,true) + dv.getUint32(cursor+4,true) * 0x100000000
        cursor += 8
        return r
    }
    ${STRUCTURES_DECL}
    ${GEN}
    if(checker){
        checker(cursor)
    }
}

if(module){
    module.exports = {
        IsaacGameState:IsaacGameState
    }
}
`
)

