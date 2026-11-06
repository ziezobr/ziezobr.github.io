import{c as t,e as o}from"./index-CJ0wLH6p.js";import{supabase as a}from"./client-DNw8QXZc.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h=t("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=t("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);function s(e){return Array.isArray(e)?e.flatMap(r=>{if(!r||typeof r!="object"||Array.isArray(r)||typeof r.name!="string")return[];const n=Number(r.price);return!Number.isFinite(n)||n<0?[]:[{name:r.name,price:n,description:typeof r.description=="string"?r.description:""}]}):[]}function u(e){return{...e,items:s(e.items)}}const c=e=>{if(!e)return"";const r="/deliveries/",n=e.indexOf(r);return n>=0?e.slice(n+r.length):e},g=async e=>{const r=c(e),{data:n,error:i}=await a.storage.from("deliveries").createSignedUrl(r,60);if(i||!(n!=null&&n.signedUrl)){o.error("Não foi possível abrir o arquivo");return}window.open(n.signedUrl,"_blank","noopener,noreferrer")};export{f as C,h as F,d as I,u as n,g as o};
