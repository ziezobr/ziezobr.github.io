import{c as n,a as s,s as i}from"./index-XOhxfXAX.js";import{u}from"./useQuery-t3D1XKK2.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=n("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]),m=()=>{const{user:r,loading:o}=s(),e=u({queryKey:["admin-role",r==null?void 0:r.id],enabled:!!r,staleTime:3e4,retry:1,queryFn:async()=>{const{data:t,error:a}=await i.rpc("has_role",{_user_id:r.id,_role:"admin"}).abortSignal(AbortSignal.timeout(8e3));if(a)throw a;return t===!0}});return{isAdmin:!!r&&e.data===!0,loading:o||!!r&&e.isPending,error:e.error,retry:e.refetch,user:r}};export{l as C,m as u};
