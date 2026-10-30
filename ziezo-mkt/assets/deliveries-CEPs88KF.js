import{c as t,f as n}from"./index-DbPPzELB.js";import{supabase as i}from"./client-DNw8QXZc.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g=t("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]),s=r=>{if(!r)return"";const o="/deliveries/",e=r.indexOf(o);return e>=0?r.slice(e+o.length):r},h=async r=>{const o=s(r),{data:e,error:a}=await i.storage.from("deliveries").createSignedUrl(o,60);if(a||!(e!=null&&e.signedUrl)){n.error("Não foi possível abrir o arquivo");return}window.open(e.signedUrl,"_blank","noopener,noreferrer")};export{g as F,p as I,h as o};
