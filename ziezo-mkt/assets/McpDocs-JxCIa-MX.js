import{j as e,m as i}from"./motion-DgeOMO4W.js";import{B as n}from"./button-E0o5KEQ1.js";import{d as t,e as d}from"./index-CuuFQbMi.js";import{A as c}from"./arrow-left-DP8r17Bd.js";import"./supabase-f4bNl52y.js";/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l=t("KeyRound",[["path",{d:"M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",key:"1s6t7t"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m=t("Plug",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p=t("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=t("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x=t("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]),o="https://jfvoipmzjsssxptwrdwv.supabase.co/functions/v1/mcp",h=[{name:"list_services",auth:"público",description:"Lista serviços/planos ativos oferecidos pela ZIEZO.",input:"{}",output:`{
  "services": [
    { "id": "uuid", "name": "SEO", "category": "marketing", "price": 800 }
  ]
}`},{name:"list_my_orders",auth:"usuário",description:"Lista pedidos do usuário autenticado.",input:"{}",output:`{
  "orders": [
    { "id": "uuid", "order_code": "ZIEZO-ABC", "status": "pending", "total_amount": 800 }
  ]
}`},{name:"get_my_profile",auth:"usuário",description:"Retorna o perfil público do usuário logado.",input:"{}",output:'{ "profile": { "username": "joao", "avatar_url": null } }'},{name:"get_order",auth:"usuário",description:"Detalhes de um pedido pelo ID (apenas pedidos do usuário logado).",input:'{ "order_id": "00000000-0000-0000-0000-000000000000" }',output:`{
  "order": {
    "id": "uuid",
    "order_code": "ZIEZO-ABC",
    "status": "processing",
    "total_amount": 1200,
    "items": [{"name":"SEO","price":800}]
  }
}`},{name:"create_order",auth:"usuário",description:"Cria um pedido pendente. Preços são recalculados no servidor.",input:`{
  "service_names": ["SEO", "Social Media"],
  "recurrence_months": 3,
  "notes": "Contratado via agente MCP"
}`,output:`{
  "order": {
    "id": "uuid",
    "order_code": "ZIEZO-XYZ",
    "status": "pending",
    "total_amount": 1530
  }
}`}];function a({children:r}){return e.jsx("pre",{className:"text-[11px] font-mono bg-secondary/40 border border-border rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-all",children:r})}function N(){const r=d();return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"container mx-auto px-5 py-10 max-w-4xl",children:[e.jsxs(n,{variant:"ghost",size:"sm",onClick:()=>r(-1),className:"mb-6",children:[e.jsx(c,{size:14,className:"mr-2"})," Voltar"]}),e.jsxs(i.header,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.16,1,.3,1]},className:"mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center",children:e.jsx(m,{size:18,className:"text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-black text-foreground",children:"ZIEZO MCP"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Documentação do servidor Model Context Protocol."})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground max-w-2xl",children:"Este app expõe um servidor MCP oficial. Assistentes como ChatGPT, Claude, Cursor e Codex podem conectar-se, autenticar via OAuth 2.1 do Supabase e usar as ferramentas abaixo para consultar e criar pedidos em nome do usuário."})]}),e.jsxs("section",{className:"glass-card-premium rounded-2xl p-6 border border-border/50 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(x,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Endpoint"})]}),e.jsx(a,{children:o}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-3",children:["Transporte: HTTP Streamable (MCP 2025-06-18). Envie ",e.jsx("code",{children:"Accept: application/json, text/event-stream"}),"."]})]}),e.jsxs("section",{className:"glass-card-premium rounded-2xl p-6 border border-border/50 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(l,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Consentimento OAuth"})]}),e.jsxs("ol",{className:"text-sm text-muted-foreground space-y-2 list-decimal pl-5",children:[e.jsx("li",{children:"No cliente MCP (ex.: ChatGPT/Claude), adicione o conector e cole o endpoint acima."}),e.jsxs("li",{children:["O cliente descobre o servidor OAuth via",e.jsx("code",{className:"mx-1",children:"/.well-known/oauth-protected-resource"}),"e faz registro dinâmico automaticamente."]}),e.jsxs("li",{children:["Você é redirecionado para",e.jsx("code",{className:"mx-1",children:"/.lovable/oauth/consent"}),". Faça login se necessário."]}),e.jsx("li",{children:"Aprove ou recuse. Se aprovar, o cliente recebe um token de acesso vinculado à sua conta ZIEZO."}),e.jsx("li",{children:"A partir daí, o assistente pode chamar as ferramentas MCP em seu nome. Todas as chamadas são registradas no painel de auditoria (admin)."})]})]}),e.jsxs("section",{className:"glass-card-premium rounded-2xl p-6 border border-border/50 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(u,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Exemplo com curl"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mb-3",children:"Listar ferramentas disponíveis (requer token OAuth do MCP):"}),e.jsx(a,{children:`curl -X POST '${o}' \\
  -H 'Authorization: Bearer <mcp-oauth-token>' \\
  -H 'Content-Type: application/json' \\
  -H 'Accept: application/json, text/event-stream' \\
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list"
  }'`}),e.jsx("p",{className:"text-xs text-muted-foreground mt-4 mb-2",children:"Invocar uma ferramenta:"}),e.jsx(a,{children:`curl -X POST '${o}' \\
  -H 'Authorization: Bearer <mcp-oauth-token>' \\
  -H 'Content-Type: application/json' \\
  -H 'Accept: application/json, text/event-stream' \\
  -d '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/call",
    "params": {
      "name": "list_services",
      "arguments": {}
    }
  }'`})]}),e.jsxs("section",{className:"mb-10",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(p,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Ferramentas"})]}),e.jsx("div",{className:"space-y-4",children:h.map(s=>e.jsxs(i.div,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"glass-card-premium rounded-2xl p-5 border border-border/50",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"font-mono text-sm font-bold text-primary",children:s.name}),e.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${s.auth==="público"?"bg-green-500/10 text-green-500":"bg-amber-500/10 text-amber-500"}`,children:s.auth})]}),e.jsx("p",{className:"text-xs text-muted-foreground mb-3",children:s.description}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase font-bold text-muted-foreground mb-1",children:"Input"}),e.jsx(a,{children:s.input})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase font-bold text-muted-foreground mb-1",children:"Output"}),e.jsx(a,{children:s.output})]})]})]},s.name))})]})]})})}export{N as default};
