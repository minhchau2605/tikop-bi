import{B as k,a as y,C as s,r as w,u as T}from"./real-estate-report.9a34bef7.js";import{_ as F,g as R,r as i,o,c as l,b as n,w as r,e as t,F as a,h as _,f as e,t as h}from"./index.37b6aa41.js";const U={components:{BarChart:k,BaseFilter:y},setup(){s.register(...w),s.defaults.color="#818d96",s.defaults.font.weight="600",s.defaults.scale.grid.color="rgba(0, 0, 0, .05)",s.defaults.scale.grid.zeroLineColor="rgba(0, 0, 0, .1)",s.defaults.scale.beginAtZero=!0,s.defaults.elements.line.borderWidth=2,s.defaults.elements.point.radius=4,s.defaults.elements.point.hoverRadius=6,s.defaults.plugins.tooltip.radius=3,s.defaults.plugins.legend.labels.boxWidth=15;const g=T(),m=R({labels:["19/09","20/09","21/09","22/09","23/09","24/09","25/09"],datasets:[{label:"S\u1ED1 ti\u1EC1n n\u1EA1p",fill:!0,backgroundColor:"rgba(9,237,55,0.5)",borderColor:"rgba(171, 227, 125, 1)",pointBackgroundColor:"rgba(171, 227, 125, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(171, 227, 125, 1)",data:[15,16,20,25,23,25,32]},{label:"S\u1ED1 ti\u1EC1n r\xFAt",fill:!0,backgroundColor:"rgb(234,14,48)",borderColor:"rgba(0, 0, 0, .3)",pointBackgroundColor:"rgba(0, 0, 0, .3)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(0, 0, 0, .3)",data:[30,32,40,45,43,38,55]}]});return{store:g,chartLinesBarsRadarData:m}},data(){return{aum:{}}},methods:{fetch(){this.store.fetchAumUserCollection(),this.aum=this.store.aumUserCollection,console.log("this",this.store.aumUserCollection)}}},H={class:"content"},A={class:"row"},L={class:"col-lg-12"},N={class:"row"},S={class:"col-md-6"},D={class:"col-md-6"},M={class:"table-responsive overflow-auto text-center"},V=t("select",{style:{width:"200px","margin-bottom":"10px"},class:"form-select me-sm-4"},[t("option",{selected:""},"\u0110\u01A1n v\u1ECB: t\u1EF7 \u0111\u1ED3ng")],-1),E={key:0,class:"table table-sm table-responsive border"},O={class:"text-decoration-underline"},P=t("th",{style:{width:"10%"},colspan:"3"},null,-1),W={colspan:"5"},j=e(" Tu\u1EA7n 39 (19/9- 25/9) "),q={colspan:"5"},z=e(" Tu\u1EA7n 38 (12/9- 18/9) "),K={colspan:"5"},Z=e(" Tu\u1EA7n 37 (5/9- 11/9) "),G={colspan:"5"},I=e(" Tu\u1EA7n 36 (1/9 - 4/9) "),J=t("th",{class:"text-center",colspan:"3"},null,-1),Q=t("th",null,"N\u1EA1p",-1),X=t("th",null,"R\xFAt",-1),Y=t("th",null,"AuM",-1),$=t("th",null,"AuM l\u0169y k\u1EBF",-1),tt=t("th",null,"% n\u1EAFm gi\u1EEF",-1),et=t("td",{colspan:"3",class:"fw-bold"},"S\u1EA3n ph\u1EA9m 1",-1),st=t("td",null,"123",-1),ot=t("td",null,"456",-1),lt=t("td",null,"789",-1),nt=t("td",null,"123",-1),at=t("td",null,"456",-1),rt=t("td",{colspan:"3",class:"text-decoration-underline"},[t("a",{href:"#"},"Old User")],-1),ct=t("span",{class:"text-success"},"(+5%)",-1),dt=t("span",{class:"text-success"},"(+5%)",-1),it=t("td",null,[e("123"),t("span",{class:"text-success"},"(-5%)")],-1),ut=t("td",null,[e("456"),t("span",{class:"text-danger"},"(-5%)")],-1),_t=t("td",null,[e("789"),t("span",{class:"text-danger"},"(-5%)")],-1),ht=t("td",{colspan:"3",class:"text-decoration-underline"},[t("a",{href:"#"},"New User")],-1),pt=t("span",{class:"text-success"},"(+5%)",-1),ft=t("span",{class:"text-success"},"(+5%)",-1),gt=t("td",null,[e("123"),t("span",{class:"text-success"},"(+5%)")],-1),mt=t("td",null,[e("456"),t("span",{class:"text-danger"},"(-5%)")],-1),bt=t("td",null,[e("789"),t("span",{class:"text-danger"},"(-5%)")],-1),Bt={key:1};function xt(g,m,Ct,p,b,x){const C=i("BaseFilter"),v=i("BasePageHeading"),B=i("BarChart"),f=i("BaseBlock"),u=i("router-link");return o(),l(a,null,[n(v,null,{extra:r(()=>[n(C,{onFilterChange:x.fetch,"module-store":p.store},null,8,["onFilterChange","module-store"])]),_:1}),t("div",H,[n(f,{"content-full":""},{default:r(()=>[t("div",A,[t("div",L,[n(f,{title:"B\xE1o c\xE1o t\u1ED5ng quan s\u1ED1 ti\u1EC1n n\u1EA1p r\xFAt v\xE0 AuM s\u1EA3n ph\u1EA9m b\u1EA5t \u0111\u1ED9ng s\u1EA3n theo t\u1EADp user","content-full":"","content-class":"text-center",class:"text-center"},{default:r(()=>[t("div",N,[t("div",S,[n(B,{"chart-data":p.chartLinesBarsRadarData},null,8,["chart-data"])]),t("div",D,[n(B,{"chart-data":p.chartLinesBarsRadarData},null,8,["chart-data"])])])]),_:1}),n(f,null,{content:r(()=>[t("div",M,[V,Object.keys(this.aum).length?(o(),l("table",E,[t("thead",null,[t("tr",O,[P,t("th",W,[n(u,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:r(()=>[j]),_:1})]),t("th",q,[n(u,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:r(()=>[z]),_:1})]),t("th",K,[n(u,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:r(()=>[Z]),_:1})]),t("th",G,[n(u,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:r(()=>[I]),_:1})])]),t("tr",null,[J,(o(),l(a,null,_(4,(c,d)=>(o(),l(a,null,[Q,X,Y,$,tt],64))),64))])]),t("tbody",null,[t("tr",null,[et,(o(),l(a,null,_(4,(c,d)=>(o(),l(a,null,[st,ot,lt,nt,at],64))),64))]),t("tr",null,[rt,(o(!0),l(a,null,_(b.aum,(c,d)=>(o(),l(a,{key:d+"-aum"},[t("td",null,[e(h(c.old_user.deposit),1),ct]),t("td",null,[e(h(c.old_user.withdraw),1),dt]),it,ut,_t],64))),128))]),t("tr",null,[ht,(o(!0),l(a,null,_(b.aum,(c,d)=>(o(),l(a,{key:d+"-aum"},[t("td",null,[e(h(c.old_user.deposit),1),pt]),t("td",null,[e(h(c.old_user.withdraw),1),ft]),gt,mt,bt],64))),128))])])])):(o(),l("span",Bt,"Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"))])]),_:1})])])]),_:1})])],64)}const yt=F(U,[["render",xt]]);export{yt as default};
