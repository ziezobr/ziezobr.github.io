import{d as i,j as e,m as o}from"./index-DbPPzELB.js";import{B as n}from"./button-BM1xscZ3.js";import{A as d}from"./arrow-left-BzVqMFYz.js";import{P as c,T as l}from"./terminal-Nmu_YklU.js";import{Z as m}from"./zap-CGX8mBiu.js";import{K as u}from"./key-round-BWJR51k2.js";import{S as p}from"./shield-Cb98bs1b.js";const a="https://jfvoipmzjsssxptwrdwv.supabase.co/functions/v1/mcp",x=[{name:"list_services",auth:"público",description:"Lista serviços/planos ativos oferecidos pela ZIEZO.",input:"{}",output:`{
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
}`}];function r({children:t}){return e.jsx("pre",{className:"text-[11px] font-mono bg-secondary/40 border border-border rounded-lg p-3 overflow-x-auto whitespace-pre-wrap break-all",children:t})}function y(){const t=i();return e.jsx("div",{className:"min-h-screen bg-background",children:e.jsxs("div",{className:"container mx-auto px-5 py-10 max-w-4xl",children:[e.jsxs(n,{variant:"ghost",size:"sm",onClick:()=>t(-1),className:"mb-6",children:[e.jsx(d,{size:14,className:"mr-2"})," Voltar"]}),e.jsxs(o.header,{initial:{opacity:0,y:12},animate:{opacity:1,y:0},transition:{duration:.5,ease:[.16,1,.3,1]},className:"mb-10",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center",children:e.jsx(c,{size:18,className:"text-primary"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-3xl font-black text-foreground",children:"ZIEZO MCP"}),e.jsx("p",{className:"text-sm text-muted-foreground",children:"Documentação do servidor Model Context Protocol."})]})]}),e.jsx("p",{className:"text-sm text-muted-foreground max-w-2xl",children:"Este app expõe um servidor MCP oficial. Assistentes como ChatGPT, Claude, Cursor e Codex podem conectar-se, autenticar via OAuth 2.1 do Supabase e usar as ferramentas abaixo para consultar e criar pedidos em nome do usuário."})]}),e.jsxs("section",{className:"glass-card-premium rounded-2xl p-6 border border-border/50 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(m,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Endpoint"})]}),e.jsx(r,{children:a}),e.jsxs("p",{className:"text-xs text-muted-foreground mt-3",children:["Transporte: HTTP Streamable (MCP 2025-06-18). Envie ",e.jsx("code",{children:"Accept: application/json, text/event-stream"}),"."]})]}),e.jsxs("section",{className:"glass-card-premium rounded-2xl p-6 border border-border/50 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(u,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Consentimento OAuth"})]}),e.jsxs("ol",{className:"text-sm text-muted-foreground space-y-2 list-decimal pl-5",children:[e.jsx("li",{children:"No cliente MCP (ex.: ChatGPT/Claude), adicione o conector e cole o endpoint acima."}),e.jsxs("li",{children:["O cliente descobre o servidor OAuth via",e.jsx("code",{className:"mx-1",children:"/.well-known/oauth-protected-resource"}),"e faz registro dinâmico automaticamente."]}),e.jsxs("li",{children:["Você é redirecionado para",e.jsx("code",{className:"mx-1",children:"/.lovable/oauth/consent"}),". Faça login se necessário."]}),e.jsx("li",{children:"Aprove ou recuse. Se aprovar, o cliente recebe um token de acesso vinculado à sua conta ZIEZO."}),e.jsx("li",{children:"A partir daí, o assistente pode chamar as ferramentas MCP em seu nome. Todas as chamadas são registradas no painel de auditoria (admin)."})]})]}),e.jsxs("section",{className:"glass-card-premium rounded-2xl p-6 border border-border/50 mb-8",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx(l,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Exemplo com curl"})]}),e.jsx("p",{className:"text-xs text-muted-foreground mb-3",children:"Listar ferramentas disponíveis (requer token OAuth do MCP):"}),e.jsx(r,{children:`curl -X POST '${a}' \\
  -H 'Authorization: Bearer <mcp-oauth-token>' \\
  -H 'Content-Type: application/json' \\
  -H 'Accept: application/json, text/event-stream' \\
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list"
  }'`}),e.jsx("p",{className:"text-xs text-muted-foreground mt-4 mb-2",children:"Invocar uma ferramenta:"}),e.jsx(r,{children:`curl -X POST '${a}' \\
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
  }'`})]}),e.jsxs("section",{className:"mb-10",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[e.jsx(p,{size:16,className:"text-primary"}),e.jsx("h2",{className:"text-lg font-bold text-foreground",children:"Ferramentas"})]}),e.jsx("div",{className:"space-y-4",children:x.map(s=>e.jsxs(o.div,{initial:{opacity:0,y:8},whileInView:{opacity:1,y:0},viewport:{once:!0},className:"glass-card-premium rounded-2xl p-5 border border-border/50",children:[e.jsxs("div",{className:"flex items-center justify-between mb-2",children:[e.jsx("h3",{className:"font-mono text-sm font-bold text-primary",children:s.name}),e.jsx("span",{className:`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${s.auth==="público"?"bg-green-500/10 text-green-500":"bg-amber-500/10 text-amber-500"}`,children:s.auth})]}),e.jsx("p",{className:"text-xs text-muted-foreground mb-3",children:s.description}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase font-bold text-muted-foreground mb-1",children:"Input"}),e.jsx(r,{children:s.input})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-[10px] uppercase font-bold text-muted-foreground mb-1",children:"Output"}),e.jsx(r,{children:s.output})]})]})]},s.name))})]})]})})}export{y as default};
