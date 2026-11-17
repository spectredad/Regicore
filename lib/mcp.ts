import {business,serviceCatalog,businessFaq} from './business';
const tools=[['business_info','Read Regicore business details'],['services','Read service scope and pricing'],['faq','Read frequently asked questions'],['projects','Read published project evidence'],['request_quote','Open the existing contact form. The user must review details and explicitly submit; this tool does not send a lead.']].map(([name,description])=>({name,description,inputSchema:{type:'object',properties:{},additionalProperties:false},annotations:{readOnlyHint:true,destructiveHint:false,idempotentHint:true,openWorldHint:false}}));
export async function handleMcp(request:Request){
 const origin=request.headers.get('origin'); if(origin&&!['https://www.regicore.com','https://regicore.com'].includes(origin))return new Response('Forbidden',{status:403});
 if(request.method!=='POST')return new Response(null,{status:405,headers:{Allow:'POST'}});
 if(!request.headers.get('content-type')?.includes('application/json'))return new Response('Expected JSON',{status:415});
 const text=await request.text();if(text.length>16384)return new Response('Too large',{status:413});
 let m;try{m=JSON.parse(text)}catch{return Response.json({jsonrpc:'2.0',id:null,error:{code:-32700,message:'Parse error'}},{status:400})}
 const reply=(result:unknown)=>Response.json({jsonrpc:'2.0',id:m.id,result},{headers:{'Cache-Control':'no-store'}});
 const error=(code:number,message:string)=>Response.json({jsonrpc:'2.0',id:m?.id??null,error:{code,message}});
 if(!m||Array.isArray(m)||m.jsonrpc!=='2.0'||typeof m.method!=='string')return error(-32600,'Invalid request');
 if(m.id===undefined)return new Response(null,{status:202});
 if(m.method==='initialize')return reply({protocolVersion:'2025-03-26',capabilities:{tools:{}},serverInfo:{name:'regicore',version:'1.0.0'},instructions:'Read business facts and services. Quote requests require the user to open the contact form, review details and explicitly submit.'});
 if(m.method==='ping')return reply({});
 if(m.method==='tools/list')return reply({tools});
 if(m.method==='tools/call'){
 const name=m.params?.name;if(!tools.some(t=>t.name===name))return error(-32602,'Unknown tool');
 const data:Record<string,unknown>={business_info:business,services:serviceCatalog,faq:businessFaq,projects:[{name:'Rising Sun Clocks and Gifts',url:'https://www.regicore.com/#rising-sun-heading',result:'Regicore reports top-3 visibility for clocks in Bangalore for over seven months.',evidenceNote:'Published screenshots show a search result and profile performance; they do not independently prove the full ranking duration.'}],request_quote:{url:'https://www.regicore.com/start',confirmationRequired:true,submitted:false,instructions:'Open this form, enter your name, email, business, service and city. Review the information and click Request my market check to submit.'}};
 return reply({content:[{type:'text',text:JSON.stringify(data[name])}]});}
 return error(-32601,'Method not found');
}
