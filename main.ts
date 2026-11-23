import{mkdirSync,readdirSync,readFileSync,writeFileSync}from'node:fs';
import{join}from'node:path';
function R(p:Uint8Array,q:Uint8Array){
const D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),O=new Uint8Array(65536);
let t=0,j=0,c=0,pc=0,ip=0,l=0,n=p.length;
const F=(e:number)=>({o:O.slice(0,l),c:e});
for(;;){
if(t==1e6)return F(10);
if(pc<0||pc>=n)return F(9);
let o=p[pc];
if(!(o<8||o>=16&&o<=34||o>=48&&o<=52||o==64||o==65||o>=80&&o<=83))return F(5);
let m=o==1?1:o==2?4:o>=48&&o<=51?2:0;
let u=o==7?3:o==3||o==4||o==23||o==27||o==49||o==50||o==64||o==80||o==81||o==83?1:o==5||o==6||o>=16&&o<=34||o==65?2:0;
let v=o==1||o==2||o>=16&&o<=34||o==64||o==82?1:o==4||o==5?2:o==6||o==7?3:0;
if(pc+m>=n)return F(9);
t++;
let x=pc+1+m;
if(j<u)return F(2);
if(j-u+v>256)return F(3);
pc=x;
if(o==0)return F(0);
if(o==1){D[j++]=(p[x-1]<<24)>>24;continue}
if(o==2){D[j++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;continue}
if(o==3){j--;continue}
if(o==4){D[j]=D[j-1];j++;continue}
if(o==5){let a=D[j-1];D[j-1]=D[j-2];D[j-2]=a;continue}
if(o==6){D[j]=D[j-2];j++;continue}
if(o==7){let a=D[j-3];D[j-3]=D[j-2];D[j-2]=D[j-1];D[j-1]=a;continue}
if(o==23){D[j-1]=-D[j-1]|0;continue}
if(o==27){D[j-1]=~D[j-1];continue}
if(o>=16&&o<=34){
let b=D[j-1],a=D[j-2],r=0;
if(o==16)r=a+b|0;else if(o==17)r=a-b|0;else if(o==18)r=Math.imul(a,b);
else if(o==19){if(!b)return F(4);r=a==-2147483648&&b==-1?a:(a/b)|0}
else if(o==20){if(!b)return F(4);r=b==-1?0:a%b|0}
else if(o==21){if(!b)return F(4);r=Math.floor((a>>>0)/(b>>>0))|0}
else if(o==22){if(!b)return F(4);r=(a>>>0)%(b>>>0)|0}
else if(o==24)r=a&b;else if(o==25)r=a|b;else if(o==26)r=a^b;
else if(o==28)r=a<<(b&31);else if(o==29)r=a>>(b&31);else if(o==30)r=(a>>>(b&31))|0;
else if(o==32)r=a==b?1:0;else if(o==33)r=a<b?1:0;else r=a>>>0<b>>>0?1:0;
j-=2;D[j++]=r;continue}
if(o>=48&&o<=50){
let g=((p[x-2]|p[x-1]<<8)<<16)>>16,w=1;
if(o!=48){let z=D[--j];w=o==49?z==0:z!=0}
if(w)pc=x+g;continue}
if(o==51){if(c==64)return F(7);C[c++]=x;pc=p[x-2]|p[x-1]<<8;continue}
if(o==52){if(!c)return F(8);pc=C[--c];continue}
if(o==64){let a=D[j-1];if(a<0||a>255)return F(6);D[j-1]=M[a];continue}
if(o==65){let a=D[j-1],z=D[j-2];if(a<0||a>255)return F(6);j-=2;M[a]=z;continue}
if(o==80){let s=String(D[j-1]);if(l+s.length>65536)return F(11);j--;for(let k=0;k<s.length;k++)O[l++]=s.charCodeAt(k);continue}
if(o==81){if(l+1>65536)return F(11);O[l++]=D[--j]&255;continue}
if(o==82){D[j++]=ip<q.length?q[ip++]:-1;continue}
return F(D[--j]&255);
}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output';
for(const d of readdirSync(I).sort()){
const r=R(new Uint8Array(readFileSync(join(I,d,'program.bin'))),new Uint8Array(readFileSync(join(I,d,'input.bin'))));
mkdirSync(join(O,d),{recursive:true});
writeFileSync(join(O,d,'stdout.bin'),r.o);
writeFileSync(join(O,d,'exit.txt'),r.c+'\n');
}
