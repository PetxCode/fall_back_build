import{b8 as m,j as e,C as c,a as h,cq as j}from"./index-Dr9ZTIop.js";import{B as o}from"./Button-DHzYgftV.js";import{L as v}from"./LittleHeader-BOV1o-nT.js";document.title="view teacher subject";const d=({props:a,quiz:r,test:i,ass:n})=>{var l,t,x;const{subjectInfo:s}=j(a);return e.jsxs("div",{children:[i&&e.jsx("div",{children:s!=null&&s.test?(l=s==null?void 0:s.test)==null?void 0:l.length:0}),r&&e.jsx("div",{children:s!=null&&s.quiz?(t=s==null?void 0:s.quiz)==null?void 0:t.length:0}),n&&e.jsx("div",{children:s!=null&&s.assignment?(x=s==null?void 0:s.assignment)==null?void 0:x.length:0})]})},N=()=>{var r;const{teacherInfo:a}=m();return console.log(a==null?void 0:a.subjectAssigned),e.jsxs("div",{className:"",children:[e.jsx(v,{name:"Class Teacher Subject"}),e.jsx("div",{className:"avatar",children:e.jsx("div",{className:"mask mask-squircle w-12 h-12",children:e.jsx("img",{src:c,...a!=null&&a.avatar?a==null?void 0:a.avatar:c,alt:"Avatar"})})}),e.jsxs("div",{children:[e.jsx("div",{className:"font-bold",children:"Teacher subjects"}),e.jsx("div",{className:"text-[12px] opacity-50 ",children:"Subject teacher taking"})]}),e.jsx("div",{className:" w-full overflow-x-auto",children:e.jsxs("div",{className:"py-6 px-2 border rounded-md min-w-[600px] overflow-y-hidden mt-9",children:[e.jsxs("div",{className:"w-[1200px] text-[gray] flex gap-9 text-[12px] font-medium uppercase mb-10 px-4",children:[e.jsx("div",{className:"w-[150px] border-r",children:"Teacher Subject"}),e.jsx("div",{className:"w-[100px] border-r",children:"No of Quiz"}),e.jsx("div",{className:"w-[100px] border-r",children:"No Of Test"}),e.jsx("div",{className:"w-[100px] border-r",children:"No Of Assignment"}),e.jsx("div",{className:"w-[250px] border-r",children:"Description"}),e.jsx("div",{className:"w-[200px] border-r",children:"View Details"})]}),e.jsx("div",{children:(r=a==null?void 0:a.subjectAssigned)==null?void 0:r.map(i=>e.jsxs("div",{className:"w-[1200px] flex items-center gap-9 text-[12px] font-medium  h-16 px-4 my-2 overflow-hidden",children:[e.jsxs("div",{className:"w-[150px] border-r text-black",children:[i.title,":",e.jsx("span",{className:"text-[10px] ml-2",children:i==null?void 0:i.classMeant})]}),e.jsx("div",{className:"w-[100px] border-r text-black font-bold",children:e.jsx(d,{props:i.id,quiz:!0})}),e.jsx("div",{className:"w-[100px] border-r text-black font-bold",children:e.jsx(d,{props:i.id,test:!0})}),e.jsx("div",{className:"w-[100px] border-r text-black font-bold",children:e.jsx(d,{props:i.id,ass:!0})}),e.jsx("div",{className:"w-[250px] border-r text-black",children:"no caption yet"}),e.jsx(h,{to:`/subjects/${i.id}`,children:e.jsx(o,{name:"view all subject",className:"py-4 px-0 bg-black text-white hover:bg-neutral-800 transition-all duration-300 w-[200px]"})})]},i.id))})]})})]})};export{N as default};
