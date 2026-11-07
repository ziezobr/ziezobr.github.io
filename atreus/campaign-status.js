async function loadCampaignStatus(){
 try{
  const response=await fetch('./campaign.json?t='+Date.now(),{cache:'no-store'});if(!response.ok)throw Error('fetch');
  const data=await response.json();
  if(!Number.isFinite(data.arrecadado)||data.arrecadado<0||!Number.isFinite(data.meta)||data.meta<=0||!Number.isSafeInteger(data.apoiadores)||data.apoiadores<0)return;
  const card=document.getElementById('doar');const money=new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'});
  card.querySelector('.raised').textContent=money.format(data.arrecadado);
  const subtitle=card.querySelector('.muted');subtitle.replaceChildren(document.createTextNode('arrecadados de '));const strong=document.createElement('b');strong.textContent=money.format(data.meta);subtitle.append(strong);
  const bar=card.querySelector('progress');bar.max=data.meta;bar.value=Math.min(data.arrecadado,data.meta);bar.setAttribute('aria-valuetext',money.format(data.arrecadado)+' de '+money.format(data.meta));
  const stats=card.querySelector('.stats');stats.children[0].querySelector('b').textContent=(data.arrecadado/data.meta*100).toLocaleString('pt-BR',{maximumFractionDigits:1})+'%';stats.children[1].querySelector('b').textContent=data.apoiadores;
  let date='';if(/^\d{4}-\d{2}-\d{2}$/.test(data.atualizado_em||'')){const parts=data.atualizado_em.split('-');date=' em '+parts[2]+'/'+parts[1]+'/'+parts[0];}
  card.querySelector('small').textContent='Registro do total informado pelo organizador'+date+'. Consulte as atualizações na campanha original.';
 }catch{ /* Preserve the last successfully loaded public values when offline. */ }
}
loadCampaignStatus();setInterval(loadCampaignStatus,60000);

