const fs = require("fs")
f = fs.readFileSync('C:\\Program Files (x86)\\Steam\\userdata\\301487357\\250900\\remote\\rep_gamestate1.dat')
dv = new DataView(new ArrayBuffer(f.length))
for(let i=0;i<f.length;i++){
    dv.setUint8(i,f[i])
}

const sd = require('./save-data')

console.log(sd.IsaacGameState)

let x = new sd.IsaacGameState(dv,(cursor)=>{
    if(f.length == cursor){
        console.log("check passed")
    }else{
        console.log(cursor, f.length)
    }
})

