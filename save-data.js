function IsaacGameState(dv,checker){
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

    function read_uint64(){
        /* 小心精度损失 */
        let r = dv.getUint32(cursor,true) + dv.getUint32(cursor+4,true) * 0x100000000
        cursor += 8
        return r
    }
    function S8B20A0(){
this.L13 = read_uint32()
if(this.L13 == - 0x80000000 ){
this.L23 = read_uint32()
this.L26 = read_uint16()
this.L30 = read_uint16()
}
else {
this.L36 = read_uint32()
this.L39 = read_uint32()

}

}
function SL853(){
this.L858 = read_uint32()
this.L862 = read_uint32()
this.L869 = read_uint32()
if(VER >= 0x64 ){
this.L879 = read_uint32()
}
if(VER >= 0x6C ){
this.L890 = read_uint32()
}

}
function SL957(){
this.L961 = read_byte()
this.L967 = read_uint32()

}
function S8BF750(){
this.L21 = read_uint32()
this.L47 = []
for(let i=0;i<this.L21 ;i++){
this.L47[i]= read_uint32();
}

}
function S8B8DE0(){
this.L8s = []
for(let i=0;i<8 ;i++){
this.L8s[i]= read_uint16();
}
this.L32 = read_uint32()
this.L35 = read_uint32()

}
function SL1967(){
this.L1971 = read_byte()
this.L1977 = read_uint32()

}
function SL2011(){
this.L2015 = read_byte()
this.L2021 = read_uint32()

}
function S8B93D0(){
this.L485 = read_uint32()
this.L488 = read_uint32()
this.L495 = read_uint32()
this.L502 = read_uint32()
this.L509 = read_uint32()
this.L513 = read_uint32()
this.L520 = read_uint32()
this.L527 = read_uint32()
this.L534 = read_uint32()
this.L541 = read_uint32()
this.L547 = read_uint32()
this.L554 = read_byte()
this.L561 = read_byte()
if(VER < 0x82 ){
this.L571 = read_uint32()
}
else {
this.L579 = read_uint16()
this.L582 = read_uint16()

}
if(VER < 0x79 ){
this.L593 = read_byte()
}
else {
this.L599 = read_byte()

}
if(VER < 0x4D ){
if(VER > 0x23 ){
this.L612 = read_uint32()
}
if(VER >= 0x3A ){
this.L620 = read_uint32()
}
}
else {
this.L629 = read_uint16()
this.L636 = read_uint16()
this.L643 = read_uint16()

}
if(VER > 0x24 ){
this.L658 = read_uint32()
}
if(VER >= 0x2D ){
this.L671 = read_uint32()
}
if(VER >= 0x3E ){
this.L690 = read_uint32()
this.L699 = read_uint32()
}
else if(VER >= 0x3B ){
this.L699 = read_uint32()
}
this.L707 = read_uint32()
this.L714 = read_uint32()
this.L721 = read_uint32()
this.L728 = read_uint32()
this.L735 = read_uint32()
this.L741 = read_uint32()
this.L748 = read_uint32()
if(VER >= 0x28 ){
this.L758 = read_uint32()
}
this.L779 = read_uint32()
this.L786 = read_uint32()
this.L793 = read_uint32()
this.L800 = read_uint32()
this.L807 = read_uint32()
this.L813 = read_uint32()
this.L820 = read_uint32()
if(VER >= 0x38 ){
this.L830 = read_uint32()
}
if(VER >= 0x71 ){
this.L853 = []
for(let i=0;i<4 ;i++){
this.L853[i]= new SL853()
}
}
else if(VER >= 0x66 ){
this.L853 = []
for(let i=0;i<3 ;i++){
this.L853[i]= new SL853()
}
}
else if(VER >= 0x3C ){
this.L853 = []
for(let i=0;i<2 ;i++){
this.L853[i]= new SL853()
}
}
else {
this.L853 = []
for(let i=0;i<1 ;i++){
this.L853[i]= new SL853()
}

}
this.L903 = read_uint32()
this.L910 = read_uint32()
this.L917 = read_uint32()
this.L924 = read_uint32()
if(VER >= 0x29 ){
this.L934 = read_uint32()
this.L941 = read_uint32()
}
if(VER >= 0x71 ){
this.L957 = []
for(let i=0;i<4 ;i++){
this.L957[i]= new SL957()
}
}
else if(VER >= 0x66 ){
this.L957 = []
for(let i=0;i<3 ;i++){
this.L957[i]= new SL957()
}
}
else {
this.L957 = []
for(let i=0;i<2 ;i++){
this.L957[i]= new SL957()
}

}
this.L979 = []
for(let i=0;i<0x3C ;i++){
this.L979[i]= read_byte();
}
if(VER >= 0x4C ){
this.L991 = read_uint32()
}
if(VER >= 0x2F ){
this.L1000 = new S8BF750()
}
if(VER >= 0x27 ){
this.L1017 = new S8BF750()
}
if(VER >= 0x8B ){
this.L1021 = new S8BF750()
}
this.L1024 = read_uint64()
if(VER >= 0x2F ){
this.L1033 = read_uint32()
this.L1067 = []
for(let i=0;i<this.L1033 ;i++){
this.L1067[i]= read_byte();
}
}
this.L1080 = read_uint32()
this.L1088 = []
for(let i=0;i<this.L1080 ;i++){
this.L1088[i]= new (function(){
this.L1098 = read_uint32()
this.L1105 = read_uint32()

})()
}
if(VER >= 0x30 ){
this.L1116 = new S8BF750()
this.L1117 = new S8BF750()
this.L1118 = new S8BF750()
this.L1119 = new S8BF750()
}
if(VER >= 0x2F ){
this.L1123 = new S8BF750()
}
this.L1127 = read_uint32()
this.L1132 = read_uint32()
this.L1142 = []
for(let i=0;i<5 ;i++){
this.L1142[i]= read_uint32();
}
this.L1154 = read_uint32()
if(VER < 0x4D ){
this.L1164 = read_uint32()
}
else {
this.L1171 = read_uint16()
this.L1175 = read_uint16()

}
this.L1181 = read_uint32()
this.L1188 = read_uint32()
this.L1195 = read_uint32()
if(VER >= 0x1F ){
this.L1205s = []
for(let i=0;i<3 ;i++){
this.L1205s[i]= read_uint32();
}
}
if(VER >= 0x1E ){
this.L1233 = read_uint32()
this.L1246 = []
for(let i=0;i<this.L1233 ;i++){
this.L1246[i]= new (function(){
this.L1251s = []
for(let i=0;i<6 ;i++){
this.L1251s[i]= read_uint32();
}
if(VER >= 0x74 ){
this.L1297 = read_byte()
}

})()
}
}
if(VER >= 0x39 ){
this.L1312 = read_uint32()
this.L1328 = []
for(let i=0;i<this.L1312 ;i++){
this.L1328[i]= new (function(){
if(VER >= 0x67 ){
this.BLALA = new S8B4540()
}
else {

}

})()
}
}
this.L1424s = []
for(let i=0;i<9 ;i++){
this.L1424s[i]= read_uint32();
}
if(VER < 0x8C ){
this.L1490 = read_uint32()
}
else {
this.L1497 = read_uint32()

}
if(VER >= 0x23 ){
this.L1507 = read_uint32()
}
if(VER >= 0x20 ){
this.familiar_count = read_uint32()
this.L2643 = []
for(let i=0;i<this.familiar_count ;i++){
this.L2643[i]= new (function(){
this.L2648s = []
for(let i=0;i<8 ;i++){
this.L2648s[i]= read_uint32();
}
if(VER >= 0x55 ){
this.L2707 = read_uint32()
this.L2714 = read_uint32()
}
if(VER >= 0x5A ){
this.L2725 = read_uint32()
}
if(VER >= 0x8F ){
this.L2742 = read_uint32()
}

})()
}
}
if(VER >= 0x40 ){
this.co_player_count = read_byte()
this.L1529 = []
for(let i=0;i<this.co_player_count ;i++){
this.L1529[i]= new S8B8DE0()
}
this.L1541 = read_byte()
if(this.L1541 ){
this.L1544 = new S8B8DE0()
}
if(VER >= 0x41 ){
this.L1558 = read_uint16()
if(VER >= 0x58 ){
this.L1571 = read_uint32()
}
if(VER >= 0x72 ){
this.L1582 = read_uint16()
this.L1589 = read_uint16()
}
if(VER >= 4 ){
this.L1605 = read_uint32()
}
if(VER >= 0x50 ){
this.L1616 = read_uint32()
this.L1625 = read_uint32()
}
if(VER >= 0x52 ){
this.L1638 = read_uint32()
}
if(VER >= 0x5B ){
this.L1648 = []
for(let i=0;i<0xC ;i++){
this.L1648[i]= read_byte();
}
this.L1654 = []
for(let i=0;i<0xC ;i++){
this.L1654[i]= read_byte();
}
this.L1663 = read_uint32()
}
if(VER >= 0x5D ){
this.L1673 = read_byte()
this.L1680 = read_byte()
}
if(VER != 0x5C ){
if(VER >= 0x63 ){
this.L1694 = read_byte()
}
if(VER >= 0x5F ){
this.L1704s = []
for(let i=0;i<6 ;i++){
this.L1704s[i]= read_uint32();
}
}
if(VER >= 96 ){
this.L1752 = read_uint32()
this.costume_count = read_uint16()
this.L1794 = []
for(let i=0;i<this.costume_count ;i++){
this.L1794[i]= new (function(){
this.L1803 = read_uint32()
this.L1809 = read_uint32()
this.L1815 = read_uint32()
this.L1824 = read_uint32()

})()
}
}
if(VER >= 0x61 ){
this.L1852 = read_uint32()
}
if(VER >= 0x62 ){
this.L1862 = read_uint32()
}
if(VER >= 0x64 ){
this.L1877 = read_uint16()
if(VER >= 0x6A ){
this.L1887s = []
for(let i=0;i<4 ;i++){
this.L1887s[i]= read_uint32();
}
}
if(VER >= 0x6C ){
this.L2340 = read_uint32()
if(VER >= 0x90 ){
this.L2344 = read_byte()
this.L2345 = []
for(let i=0;i<this.L2344 ;i++){
this.L2345[i]= new (function(){
this.L2349 = read_byte()
this.L2352 = read_uint32()

})()
}
}
this.L2509 = []
for(let i=0;i<8 ;i++){
this.L2509[i]= read_byte();
}
this.L2519 = read_uint32()
this.L2533 = []
for(let i=0;i<6 ;i++){
this.L2533[i]= read_byte();
}
this.L2540 = read_byte()
this.L2554 = []
for(let i=0;i<this.L2540 ;i++){
this.L2554[i]= read_byte();
}
this.L2564 = read_byte()
this.L2571s = []
for(let i=0;i<4 ;i++){
this.L2571s[i]= read_uint32();
}
}
if(VER >= 0x75 ){
this.L1925 = read_uint32()
}
if(VER >= 0x76 ){
this.L1938 = read_uint32()
}
if(VER >= 0x78 ){
this.L1950 = read_uint32()
}
if(VER >= 0x7E ){
this.S8B90C0 = new (function(){
this.L13s = []
for(let i=0;i<3 ;i++){
this.L13s[i]= read_uint16();
}
this.L25 = read_byte()
this.L31s = []
for(let i=0;i<4 ;i++){
this.L31s[i]= read_uint16();
}

})()
}
if(VER >= 0x80 ){
if(VER >= 0x71 ){
this.L1967 = []
for(let i=0;i<4 ;i++){
this.L1967[i]= new SL1967()
}
}
else if(VER >= 0x66 ){
this.L1967 = []
for(let i=0;i<3 ;i++){
this.L1967[i]= new SL1967()
}
}
else {
this.L1967 = []
for(let i=0;i<2 ;i++){
this.L1967[i]= new SL1967()
}

}
this.L1989 = read_uint64()
}
if(VER >= 0x82 ){
this.L2007 = read_byte()
if(VER >= 0x71 ){
this.L2011 = []
for(let i=0;i<4 ;i++){
this.L2011[i]= new SL2011()
}
}
else if(VER >= 0x66 ){
this.L2011 = []
for(let i=0;i<3 ;i++){
this.L2011[i]= new SL2011()
}
}
else {
this.L2011 = []
for(let i=0;i<2 ;i++){
this.L2011[i]= new SL2011()
}

}
this.L2033 = read_uint64()
}
if(VER >= 0x81 ){
this.L2044 = read_uint32()
}
if(VER >= 0x82 ){
this.L2055 = read_uint32()
}
if(VER >= 0x83 ){
this.L2072 = read_uint32()
}
if(VER >= 0x6E ){
this.L2079 = read_byte()
this.L2094 = []
for(let i=0;i<this.L2079 ;i++){
this.L2094[i]= read_uint32();
}
}
if(VER >= 0x6F ){
this.L2114 = read_uint32()
}
if(VER >= 0x73 ){
this.L2127 = read_uint32()
}
if(VER >= 0x7F ){
this.L2138 = read_byte()
if(this.L2138 != 0xFF ){
this.L2151 = read_uint32()
this.L2160 = read_uint32()
}
}
if(VER >= 0x43 ){
this.history_count = read_uint32()
this.history = []
for(let i=0;i<this.history_count ;i++){
this.history[i]= new (function(){
this.L2184s = []
for(let i=0;i<6 ;i++){
this.L2184s[i]= read_uint32();
}

})()
}
}
if(VER >= 0x65 ){
this.L2250 = read_byte()
this.L2258 = []
for(let i=0;i<this.L2250 ;i++){
this.L2258[i]= read_uint16();
}
}
if(VER >= 0x51 ){
this.L2271 = read_byte()
this.L2290 = []
for(let i=0;i<this.L2271 ;i++){
this.L2290[i]= read_uint32();
}
}
if(VER >= 0x8A ){
this.L2312 = read_uint32()
this.L2317 = []
for(let i=0;i<this.L2312 ;i++){
this.L2317[i]= new (function(){
this.L2321 = read_uint16()
this.L2324 = read_uint16()

})()
}
}
}
else {

}
}
}
}

}
function S8B4540(){
this.L46s = []
for(let i=0;i<6 ;i++){
this.L46s[i]= read_uint32();
}
if(VER >= 59 ){
this.L72 = read_byte()
}
this.L77 = read_uint32()
if(VER >= 0x47 ){
this.L83 = read_uint32()
}
this.L89 = read_byte()
if(VER >= 0x88 ){
this.L95 = read_uint32()
}
this.L100 = read_uint32()
this.L104 = read_uint32()
if(VER < 0x5B ){
this.L111 = read_byte()
}
else {
this.L118 = read_uint32()

}
this.L123 = read_uint32()
this.L127 = read_uint32()
if(VER >= 0x47 ){
}
else {
this.L137 = []
for(let i=0;i<8 ;i++){
this.L137[i]= read_byte();
}

}
this.L151 = read_uint32()
this.L155 = read_uint32()
this.L159 = read_byte()
this.L163 = read_uint32()
this.L167 = read_uint32()
if(VER >= 0x46 ){
this.L174 = read_uint16()
}
if(VER >= 0x6C ){
this.L182 = read_uint32()
}
if(VER >= 0x67 ){
this.L189 = read_byte()
if(this.L189 & 1 ){
this.L198 = []
for(let i=0;i<0x20 ;i++){
this.L198[i]= read_byte();
}
}
if(this.L189 & 2 ){
this.inner = new S8B4540()
}
}

}
function SRoomData(){
this.L81 = new S8B20A0()
if(VER < 125 ){
this.L88 = read_uint32()
this.L91 = read_uint32()
this.L95 = read_uint32()
}
else {
this.L103 = read_uint16()
this.L108 = read_uint16()
this.L112 = read_uint16()
this.L116 = read_byte()

}
this.L122 = read_uint32()
this.L130 = []
for(let i=0;i<8 ;i++){
this.L130[i]= read_uint32();
}
this.L136 = read_uint32()
this.L142 = read_uint32()
if(VER < 63 ){
this.L152 = read_byte()
this.L158 = read_uint32()
this.L161 = read_byte()
this.L167 = read_byte()
this.L172 = read_byte()
this.L177 = read_byte()
if(VER >= 61 ){
this.L185 = read_uint32()
}
this.L189 = read_byte()
}
else {
this.L197 = read_uint32()
if(VER < 130 ){
this.L205 = read_uint32()
}
else {
this.L213 = read_uint16()
this.L216 = read_uint16()

}
this.L221 = read_uint32()

}
this.L226 = read_uint32()
this.L230 = read_uint32()
this.L234 = read_uint32()
this.L238 = read_uint32()
if(VER >= 75 ){
this.L259 = read_uint32()
}
this.L264 = []
for(let i=0;i<448 ;i++){
this.L264[i]= new (function(){
if(VER >= 123 ){
this.L275 = read_uint16()
if(this.L275 != 0 ){
this.L284 = read_uint32()
this.L288 = read_uint32()
this.L291 = read_uint16()
this.L297 = read_uint32()
this.L303 = read_uint32()
this.L308 = read_uint32()
}
}
else {
this.L313 = read_uint32()
this.L317 = read_uint32()
this.L319 = read_uint32()
this.L321 = read_uint32()
this.L323 = read_uint32()
this.L325 = read_uint32()
this.L327 = read_uint32()
this.L329 = read_uint32()
this.L331 = read_uint32()
this.L333 = read_byte()
this.L335 = read_byte()
this.L337 = read_byte()
this.L339 = read_uint32()
if(VER >= 0x21 ){
this.L306 = read_uint32()
this.L308 = read_uint32()
}

}

})()
}
this.entityCount = read_uint32()
this.roomEntityList = []
for(let i=0;i<this.entityCount ;i++){
this.roomEntityList[i]= new S8B4540()
}
this.L373 = read_uint32()
this.L390 = []
for(let i=0;i<this.L373 ;i++){
this.L390[i]= read_uint32();
}
this.L400 = read_uint32()
this.inner = []
for(let i=0;i<this.L400 ;i++){
this.inner[i]= new S8B4540()
}
if(VER < 0x49 ){
this.L424 = read_uint32()
this.L428 = read_uint32()
this.L436 = []
for(let i=0;i<8 ;i++){
this.L436[i]= read_uint32();
}
}
else {
this.L447 = read_uint16()
this.L450 = read_uint16()
this.L453 = []
for(let i=0;i<16 ;i++){
this.L453[i]= read_byte();
}
if(VER > 0x55 ){
this.L458 = read_uint64()
}
this.L463 = read_uint32()
if(VER >= 0x68 ){
this.L469 = read_uint16()
}

}

}
function S8B76A0_inner(){
this.L82 = read_uint32()
this.L109 = []
for(let i=0;i<this.L82 ;i++){
this.L109[i]= read_uint32();
}

}
function S8B4A00(){
this.L81 = new S8B20A0()
if(VER < 0x7D ){
this.L88s = []
for(let i=0;i<3 ;i++){
this.L88s[i]= read_uint32();
}
}
else {
this.L103s = []
for(let i=0;i<3 ;i++){
this.L103s[i]= read_uint16();
}
this.L116 = read_byte()

}
this.L122 = read_uint32()
this.L130 = []
for(let i=0;i<0x20 ;i++){
this.L130[i]= read_byte();
}
this.L136 = read_uint32()
this.L142 = read_uint32()
if(VER < 0x3F ){
this.L152 = read_byte()
this.L158 = read_uint32()
this.L161 = read_byte()
this.L167 = read_byte()
this.L171 = read_byte()
this.L177 = read_byte()
if(VER >= 0x3D ){
this.L185 = read_uint32()
}
this.L189 = read_byte()
}
else {
this.L197 = read_uint32()
if(VER < 0x82 ){
this.L205 = read_uint32()
}
else {
this.L213 = read_uint16()
this.L216 = read_uint16()

}
this.L221 = read_uint32()

}
this.L226s = []
for(let i=0;i<4 ;i++){
this.L226s[i]= read_uint32();
}
if(VER >= 0x4B ){
this.L259 = read_uint32()
}
this.L264 = []
for(let i=0;i<0x3800 / 32 ;i++){
this.L264[i]= new (function(){
if(VER >= 0x7B ){
this.L275 = read_uint16()
if(this.L275 ){
this.L284 = read_uint32()
this.L288 = read_uint32()
this.L291 = read_uint16()
this.L297 = read_uint32()
this.L303 = read_uint32()
this.L308 = read_uint32()
}
}
else {
this.L313 = read_uint32()
this.L319 = read_uint32()
this.L323 = read_uint32()
this.L327 = read_uint32()
this.L331 = read_uint32()
this.L335 = read_byte()
this.L339 = read_uint32()
if(VER >= 0x21 ){
this.L308 = read_uint32()
}

}

})()
}
this.L351 = read_uint32()
this.L361 = []
for(let i=0;i<this.L351 ;i++){
this.L361[i]= new S8B4540()
}
this.L373 = read_uint32()
this.L390 = []
for(let i=0;i<this.L373 ;i++){
this.L390[i]= read_uint32();
}
this.L400 = read_uint32()
this.L411 = []
for(let i=0;i<this.L400 ;i++){
this.L411[i]= new S8B4540()
}
if(VER < 0x49 ){
this.L424 = read_uint32()
this.L428 = read_uint32()
this.L436 = []
for(let i=0;i<8 ;i++){
this.L436[i]= read_uint32();
}
}
else {
this.L447 = read_uint16()
this.L450 = read_uint16()
this.L453 = []
for(let i=0;i<0x10 ;i++){
this.L453[i]= read_byte();
}
if(VER >= 0x55 ){
this.L458 = read_uint64()
}
this.L463 = read_uint32()
if(VER >= 0x68 ){
this.L469 = read_uint16()
}

}

}

    const VER=144;
this.magic = []
for(let i=0;i<16 ;i++){
this.magic[i]= read_byte();
}
this.L217 = read_uint32()
if(VER >= 51 ){
this.L219 = read_byte()
}
this.L220 = read_byte()
this.L223 = read_byte()
this.L224 = read_uint32()
this.L225 = read_uint16()
this.L233 = []
for(let i=0;i<this.L225 ;i++){
this.L233[i]= read_byte();
}
this.L234 = read_uint32()
this.L235 = read_uint32()
if(VER >= 87 ){
this.L237 = read_uint32()
}
this.L238s = []
for(let i=0;i<3 ;i++){
this.L238s[i]= read_uint32();
}
if(VER >= 64 ){
this.L242 = read_uint32()
}
this.L243s = []
for(let i=0;i<5 ;i++){
this.L243s[i]= read_uint32();
}
if(VER >= 52 ){
this.game_update_tick = read_uint32()
}
if(VER < 67 ){
this.L254 = read_uint32()
}
if(VER >= 67 || this.L254 == 0 ){
this.L267 = read_uint32()
if(VER >= 43 ){
this.L271 = read_uint32()
}
if(VER >= 46 ){
this.L275 = read_uint32()
}
this.L278 = read_byte()
this.L281 = read_uint32()
this.L282 = new (function(){
this.N1 = []
for(let i=0;i<6 ;i++){
this.N1[i]= read_uint32();
}
this.L282_INNER = []
for(let i=0;i<30 ;i++){
this.L282_INNER[i]= new (function(){
this.N1 = read_uint32()
this.N2 = read_uint32()

})()
}
this.N2 = read_uint32()
this.N3 = read_uint32()

})()
this.L285s = []
for(let i=0;i<7 ;i++){
this.L285s[i]= read_uint32();
}
if(VER >= 33 ){
this.L305 = read_uint32()
}
this.L308 = read_byte()
this.L311 = read_byte()
this.L314 = read_byte()
this.L317 = read_byte()
this.L318 = read_uint16()
this.L329 = []
for(let i=0;i<this.L318 ;i++){
this.L329[i]= read_byte();
}
this.L336 = read_uint32()
this.L338 = []
for(let i=0;i<48 ;i++){
this.L338[i]= read_byte();
}
this.L341 = read_uint32()
this.L344 = read_uint32()
this.L347 = read_uint32()
if(VER > 80 ){
this.L358 = []
for(let i=0;i<14 ;i++){
this.L358[i]= read_uint32();
}
}
else {
this.L358 = []
for(let i=0;i<13 ;i++){
this.L358[i]= read_uint32();
}

}
if(VER >= 86 ){
this.L368 = read_uint32()
this.NEXT_L368 = []
for(let i=0;i<this.L368 ;i++){
this.NEXT_L368[i]= new S8B20A0()
}
}
this.room_count = read_uint32()
this.room_data = []
for(let i=0;i<this.room_count ;i++){
this.room_data[i]= new SRoomData()
}
this.extra_room_data = []
for(let i=0;i<525 - 507 ;i++){
this.extra_room_data[i]= new SRoomData()
}
if(VER < 0x7B ){
this.L500 = []
for(let i=0;i<0x2A4 ;i++){
this.L500[i]= read_byte();
}
}
else {
this.L1087 = read_uint16()
this.L1094 = []
for(let i=0;i<this.L1087 ;i++){
this.L1094[i]= read_uint16();
}

}
this.L504 = read_uint32()
if(VER >= 0x7B ){
this.L511 = read_byte()
}
if(VER >= 0x7C ){
this.L519 = read_byte()
}
this.L523s = []
for(let i=0;i<4 ;i++){
this.L523s[i]= read_uint32();
}
if(VER >= 0x86 ){
this.L537 = read_uint32()
this.L540 = read_uint32()
this.L543 = read_uint32()
this.L546 = read_byte()
this.L549 = read_byte()
}
this.L553 = read_uint32()
if(VER >= 0x47 ){
this.L559s = []
for(let i=0;i<4 ;i++){
this.L559s[i]= read_uint32();
}
}
if(VER >= 0x87 ){
this.L575 = read_byte()
this.L578 = read_byte()
}
if(VER >= 0x48 ){
this.L585 = read_uint32()
}
this.L589 = read_uint32()
if(VER >= 0x33 ){
this.L595 = read_byte()
}
if(VER >= 0x44 ){
this.player_count = read_byte()
this.player_info = []
for(let i=0;i<this.player_count ;i++){
this.player_info[i]= new S8B93D0()
}
}
else {
this.L623 = new S8B93D0()

}
if(VER >= 0x8D ){
this.L622 = read_byte()
this.L628 = []
for(let i=0;i<this.L622 ;i++){
this.L628[i]= new (function(){
this.L639 = read_byte()
if(this.L639 ){
this.L679 = new S8B93D0()
}

})()
}
}
this.S8B76A0 = new (function(){
if(VER >= 0x7A ){
this.L78 = []
for(let i=0;i<31 ;i++){
this.L78[i]= new S8B76A0_inner()
}
this.L122 = []
for(let i=0;i<31 ;i++){
this.L122[i]= read_uint32();
}
}
else if(VER >= 0x70 ){
this.L78 = []
for(let i=0;i<29 ;i++){
this.L78[i]= new S8B76A0_inner()
}
this.L122 = []
for(let i=0;i<29 ;i++){
this.L122[i]= read_uint32();
}
}
else if(VER >= 0x69 ){
this.L78 = []
for(let i=0;i<28 ;i++){
this.L78[i]= new S8B76A0_inner()
}
this.L122 = []
for(let i=0;i<28 ;i++){
this.L122[i]= read_uint32();
}
}
else if(VER >= 0x57 ){
this.L78 = []
for(let i=0;i<27 ;i++){
this.L78[i]= new S8B76A0_inner()
}
this.L122 = []
for(let i=0;i<27 ;i++){
this.L122[i]= read_uint32();
}
}
else {
this.L78 = []
for(let i=0;i<26 ;i++){
this.L78[i]= new S8B76A0_inner()
}
this.L122 = []
for(let i=0;i<26 ;i++){
this.L122[i]= read_uint32();
}

}
this.L126 = read_uint32()
this.L130 = read_uint32()
this.L134 = read_uint32()
this.L138 = read_uint32()
this.L142 = read_uint32()
if(VER >= 0x4A ){
this.L149 = read_uint32()
}
if(VER >= 0x37 ){
this.L160 = read_uint32()
this.L187 = []
for(let i=0;i<this.L160 ;i++){
this.L187[i]= read_byte();
}
}
else {
if(VER >= 0x35 ){
this.L187 = []
for(let i=0;i<733 ;i++){
this.L187[i]= read_byte();
}
}
else {
this.L187 = []
for(let i=0;i<511 ;i++){
this.L187[i]= read_byte();
}

}

}
if(VER >= 0x37 ){
this.L208 = read_uint32()
this.L242 = []
for(let i=0;i<this.L208 ;i++){
this.L242[i]= read_byte();
}
}
else {
if(VER >= 0x35 ){
this.L242 = []
for(let i=0;i<190 ;i++){
this.L242[i]= read_byte();
}
}
else {
this.L242 = []
for(let i=0;i<120 ;i++){
this.L242[i]= read_byte();
}

}

}
if(VER < 0x37 ){
this.L258 = read_uint32()
}
if(VER >= 0x77 ){
this.L264 = []
for(let i=0;i<15 ;i++){
this.L264[i]= read_uint32();
}
this.L269 = []
for(let i=0;i<15 ;i++){
this.L269[i]= read_byte();
}
}
else {
this.L264 = []
for(let i=0;i<14 ;i++){
this.L264[i]= read_uint32();
}
this.L269 = []
for(let i=0;i<14 ;i++){
this.L269[i]= read_byte();
}

}
if(VER >= 0x4E ){
if(VER >= 0x7A ){
this.L276 = []
for(let i=0;i<31 ;i++){
this.L276[i]= read_uint16();
}
}
else if(VER >= 0x70 ){
this.L276 = []
for(let i=0;i<29 ;i++){
this.L276[i]= read_uint16();
}
}
else if(VER >= 0x69 ){
this.L276 = []
for(let i=0;i<28 ;i++){
this.L276[i]= read_uint16();
}
}
else if(VER >= 0x57 ){
this.L276 = []
for(let i=0;i<27 ;i++){
this.L276[i]= read_uint16();
}
}
else {
this.L276 = []
for(let i=0;i<26 ;i++){
this.L276[i]= read_uint16();
}

}
}

})()
this.game_seed_str = []
for(let i=0;i<9 ;i++){
this.game_seed_str[i]= read_byte();
}
if(VER < 0x54 ){
this.seed_effect = []
for(let i=0;i<0x4D ;i++){
this.seed_effect[i]= read_byte();
}
}
else {
this.seed_effect_count = read_byte()
this.seed_effect = []
for(let i=0;i<this.seed_effect_count ;i++){
this.seed_effect[i]= read_byte();
}

}
this.L783 = read_uint32()
this.L786 = read_uint32()
this.L789 = read_uint32()
if(VER >= 0x2F ){
this.L989 = read_uint32()
this.L1031 = []
for(let i=0;i<this.L989 ;i++){
this.L1031[i]= new (function(){
this.L1037 = read_uint32()
if(VER >= 0x30 ){
this.L1048 = read_uint32()
}

})()
}
}
if(VER >= 0x42 ){
this.L802 = read_uint16()
this.L802_inner = []
for(let i=0;i<this.L802 / 8 ;i++){
this.L802_inner[i]= read_byte();
}
this.L805 = read_uint16()
this.L814 = []
for(let i=0;i<this.L805 ;i++){
this.L814[i]= read_uint32();
}
}
if(VER >= 0x50 ){
this.L832 = read_uint32()
}
if(VER >= 0x59 ){
this.L842 = read_byte()
this.L853 = []
for(let i=0;i<this.L842 ;i++){
this.L853[i]= new (function(){
this.L859 = read_uint32()
this.L864 = read_uint32()
this.L869 = read_uint32()

})()
}
}
if(VER >= 0x53 ){
this.L885 = read_uint16()
this.L889 = read_uint16()
}
if(VER >= 0x81 ){
this.L898 = read_byte()
this.L903 = []
for(let i=0;i<7 ;i++){
this.L903[i]= new (function(){
this.L906 = read_byte()
if(VER >= 0x89 ){
this.L913 = read_byte()
this.L923 = []
for(let i=0;i<this.L913 ;i++){
this.L923[i]= new S8B4A00()
}
this.L932 = read_byte()
this.L942 = []
for(let i=0;i<this.L932 ;i++){
this.L942[i]= new S8B4A00()
}
this.L952 = read_byte()
}

})()
}
}
if(VER >= 0x85 ){
this.L964 = read_uint16()
}
if(VER >= 0x8A ){
this.INNER_L21 = read_uint32()
this.INNER_L47 = []
for(let i=0;i<this.INNER_L21 ;i++){
this.INNER_L47[i]= read_uint32();
}
}
this.L975 = read_uint32()
}

    if(checker){
        checker(cursor)
    }
}

if(module){
    module.exports = {
        IsaacGameState:IsaacGameState
    }
}
