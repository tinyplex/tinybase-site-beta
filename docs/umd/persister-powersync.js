var a,t;a=this,t=function(a){"use strict";const t=a=>typeof a,e="tinybase",n="",s=",",i=t(n),r=(a,t)=>a.repeat(t),o=Promise,c=clearInterval,l=a=>null==a,y=(a,t,e)=>l(a)?e?.():t(a),w=a=>t(a)==i,d=a=>Array.isArray(a),u=(a,t,e)=>a.slice(t,e),E=a=>a.length,g=async a=>o.all(a),f=(a,t="")=>a.join(t),p=(a,t)=>a.map(t),v=a=>0==E(a),m=(a,t)=>a.filter(t),T=(a,...t)=>a.push(...t),h=(a,t)=>a?.has(t)??!1,C=a=>[...a?.values()??[]],A=(a,t)=>a?.delete(t),O=Object,b=a=>O.getPrototypeOf(a),N=O.entries,R=O.keys,S=O.freeze,L=(a=[])=>O.fromEntries(a),I=(...a)=>O.assign({},...a),D=(a,t)=>t in a,P=(a,t)=>p(N(a),(([a,e])=>t(e,a))),M=a=>O.values(a),_=a=>E(R(a)),$=a=>(a=>!l(a)&&y(b(a),(a=>a==O.prototype||l(b(a))),(()=>!0)))(a)&&0==_(a),F=a=>new Map(a),x=a=>[...a?.keys()??[]],j=(a,t)=>a?.get(t),B=(a,t)=>p([...a?.entries()??[]],(([a,e])=>t(e,a))),H=(a,t,e)=>l(e)?(A(a,t),a):a?.set(t,e),J=(a,t,e,n)=>(h(a,t)||H(a,t,e()),j(a,t)),Y=(a,t,e,n=H)=>(P(t,((t,n)=>e(a,n,t))),((a,t)=>{((a,t)=>{a?.forEach(t)})(a,((a,e)=>t(e)))})(a,(e=>D(t,e)?0:n(a,e))),a),k="_",G="_id",U=a=>`"${a.replace(/"/g,'""')}"`,W="SELECT",z=a=>new Set(d(a)||l(a)?a:[a]),K=(a,t)=>a?.add(t),V="TABLE",q="ALTER "+V,Q="DELETE FROM",X=W+"*FROM",Z="FROM pragma_table_",aa="WHERE",ta=(a,t,e,i)=>{const r=F();return[async()=>Y(r,L(await g(p(await a("SELECT name "+Z+"list WHERE schema='main'AND(type='table'OR type='view')AND name IN("+na(t)+")ORDER BY name",t),(async({name:t})=>[t,L(p(await a(W+" name,type "+Z+"info(?)",[t]),(({name:a,type:t})=>[a,t])))])))),((a,t,e)=>H(r,t,Y(J(r,t,F),e,((a,t,e)=>{e!=j(a,t)&&H(a,t,e)}),((a,t)=>H(a,t))))),((a,t)=>H(r,t))),async(t,e)=>((a,t)=>!l(j(j(r,a),t)))(t,e)?L(m(p(await a(X+U(t)),(a=>{return[a[e],(t={...a},n=e,delete t[n],t)];var t,n})),(([a,t])=>!l(a)&&!$(t)))):{},async(t,e,o,c,y,w=!1)=>{const d=z();P(o??{},(a=>p(R(a??{}),(a=>K(d,a)))));const u=C(d);if(!w&&y&&v(u)&&h(r,t))return await a("DROP "+V+U(t)),void H(r,t);if(v(u)||h(r,t)){const s=j(r,t),i=z(x(s));await g([...p(u,(async e=>{A(i,e)||(await a(q+U(t)+"ADD"+U(e)),H(s,e,n))})),...!w&&c?p(C(i),(async n=>{n!=e&&(await a(q+U(t)+"DROP"+U(n)),H(s,n))})):[]])}else await a("CREATE "+V+U(t)+"("+U(e)+` PRIMARY KEY ON CONFLICT REPLACE${f(p(u,(a=>s+U(a))))});`),H(r,t,F([[e,n],...p(u,(a=>[a,n]))]));if(w)l(o)?await a(Q+U(t)+aa+" 1"):await g(P(o,(async(n,s)=>{l(n)?await a(Q+U(t)+aa+U(e)+"=?",[s]):v(u)||await ea(a,t,e,R(n),[s,...M(n)],i)})));else if(v(u))h(r,t)&&await a(Q+U(t)+aa+" 1");else{const n=m(x(j(r,t)),(a=>a!=e)),s=[],c=[];P(o??{},((a,t)=>{T(s,t,...p(n,(t=>a?.[t]))),T(c,t)})),await ea(a,t,e,n,s,i),await a(Q+U(t)+aa+U(e)+"NOT IN("+na(c)+")",c)}},async t=>{let n;await a("BEGIN");try{n=await t()}catch(a){e?.(a)}return await a("END"),n}]},ea=async(a,t,e,i,o,c=!0)=>await a("INSERT "+(c?n:"OR REPLACE ")+"INTO"+U(t)+"("+U(e)+f(p(i,(a=>s+U(a))))+")VALUES"+u(r(`,(?${r(",?",E(i))})`,E(o)/(E(i)+1)),1)+(c?"ON CONFLICT("+U(e)+")DO UPDATE SET"+f(p(i,(a=>U(a)+"=excluded."+U(a))),s):n),p(o,(a=>a??null))),na=a=>f(p(a,(()=>"?")),s),sa=F(),ia=F(),ra=(a,t,e,n,s,i,r,o={},c=[])=>{let w,u,E,g=0;J(sa,c,(()=>0)),J(ia,c,(()=>[]));const[f,p,v,m,h]=((a=1,t)=>a>1&&"merge"in t?[1,t.getMergeableContent,t.getTransactionMergeableChanges,([[a],[t]])=>!$(a)||!$(t),t.setDefaultContent]:2!=a?[0,t.getContent,t.getTransactionChanges,([a,t])=>!$(a)||!$(t),t.setContent]:0)(r,a),C=t=>{(f&&d(t?.[0])?1===t?.[2]?a.applyMergeableChanges:a.setMergeableContent:1===t?.[2]?a.applyChanges:a.setContent)(t)},A=async a=>(2!=g&&(g=1,await R((async()=>{try{C(await t())}catch(t){i?.(t),a&&h(a)}g=0}))),L),O=()=>(u&&(s(u),u=void 0),L),b=async a=>(1!=g&&(g=2,await R((async()=>{try{await e(p,a)}catch(a){i?.(a)}g=0}))),L),N=()=>(y(E,a.delListener),E=void 0,L),R=async(...a)=>(T(j(ia,c),...a),await(async()=>{if(!j(sa,c)){for(H(sa,c,1);!l((a=j(ia,c),w=a.shift()));)try{await w()}catch(a){i?.(a)}H(sa,c,0)}var a})(),L),L={load:A,startAutoLoad:async a=>(await O().load(a),u=n((async(a,t)=>{t||a?2!=g&&(g=1,C(t??a),g=0):await A()})),L),stopAutoLoad:O,isAutoLoading:()=>!l(u),save:b,startAutoSave:async()=>(await N().save(),E=a.addDidFinishTransactionListener((()=>{const a=v();m(a)&&b(a)})),L),stopAutoSave:N,isAutoSaving:()=>!l(E),schedule:R,getStore:()=>a,destroy:()=>O().stopAutoSave(),getStats:()=>({}),...o};return S(L)},oa=(a,t,e,n,s,i,[r,o,c],l,y,w,d)=>{const[u,E,g,f]=ta(t,l,s,d);return ra(a,(async()=>await f((async()=>{return await u(),a=(await E(r,o))[k]?.[c]??"null",JSON.parse(a,((a,t)=>"￼"===t?void 0:t));var a}))),(async a=>await f((async()=>{var t;await u(),await g(r,o,{[k]:{[c]:(t=a()??null,JSON.stringify(t,((a,t)=>void 0===t?"￼":t)))}},!0,!0)}))),e,n,s,i,{[w]:()=>y},y)},ca=(a,t,e,n,s,i,[r,o,[c,y,w]],d,u,E,f)=>{const[p,v,T,h]=ta(t,d,s,f),C=async(a,t)=>await g(B(o,(async([e,n,s,i],r)=>{t&&!D(a,r)||await T(e,n,a[r],s,i,t)}))),A=async(a,t)=>y?await T(w,G,{[k]:a},!0,!0,t):null;return ra(a,(async()=>await h((async()=>{await p();const a=await(async()=>L(m(await g(B(r,(async([a,t],e)=>[a,await v(e,t)]))),(a=>!$(a[1])))))(),t=await(async()=>c?(await v(w,G))[k]:{})();return $(a)&&l(t)?void 0:[a,t]}))),(async(a,t)=>await h((async()=>{if(await p(),l(t)){const[t,e]=a();await C(t),await A(e)}else await C(t[0],!0),await A(t[1],!0)}))),e,n,s,i,{[E]:()=>u},u)},la="ColumnName",ya="store",wa="json",da=ya+"TableName",ua=ya+"Id"+la,Ea=ya+la,ga="autoLoadIntervalSeconds",fa="rowId"+la,pa="tableId",va="tableName",ma={mode:wa,[ga]:1},Ta={load:0,save:0,[va]:e+"_values"},ha=(a,t,e,n,s)=>{const i=F();return P(a,((a,r)=>{const o=u(M(I(t,w(a)?{[e]:a}:a)),0,_(t));l(o[0])||n(r,o[0])||(s(r,o[0]),H(i,r,o))})),i},Ca="pragma_",Aa="data_version",Oa="schema_version";a.createPowerSyncPersister=(a,t,n,s,i,r=!1)=>((a,t,n,s,i,r,o,l,y,d="getDb",E)=>{let g,f,p;const[v,m,T,A]=(a=>{const t=(a=>I(ma,w(a)?{[da]:a}:a??{}))(a),n=t[ga];if(t.mode==wa){const a=t[da]??e;return[1,n,[a,t[ua]??G,t[Ea]??ya],z(a)]}const{tables:{load:s={},save:i={}}={},values:r={}}=t,o=u(M(I(Ta,r)),0,_(Ta)),c=o[2],l=z(c),y=z(c);return[0,n,[ha(s,{[pa]:null,[fa]:G},pa,(a=>h(y,a)),(a=>K(l,a))),ha(i,{[va]:null,[fa]:G,deleteEmptyColumns:0,deleteEmptyTable:0},va,((a,t)=>h(y,t)),((a,t)=>K(l,t))),o],l]})(t);return(v?oa:ca)(a,r?async(a,t)=>(r(a,t),await n(a,t)):n,(a=>{return[(t=async()=>{try{const[{d:t,s:e,c:s}]=await n(`SELECT ${Aa} d,${Oa} s,TOTAL_CHANGES() c FROM ${Ca}${Aa} JOIN ${Ca}${Oa}`);t==(g??=t)&&e==(f??=e)&&s==(p??=s)||(a(),g=t,f=e)}catch{}},e=m,t(),setInterval(t,1e3*e)),s((t=>A.has(t)?a():0))];var t,e}),(([a,t])=>{c(a),g=f=p=null,i(t)}),o,l,T,C(A),y,d,E)})(a,n,(async(a,e=[])=>t.execute(a,e).then((a=>a.rows?._array??[]))),(a=>{const e=new AbortController,n=t.onChange({rawTableNames:!0,signal:e.signal});return(async()=>{for await(const t of n)p(t.changedTables,a)})(),e}),(a=>a.abort()),s,i,1,t,"getPowerSync",r)},"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((a="undefined"!=typeof globalThis?globalThis:a||self).TinyBasePersisterPowersync={});