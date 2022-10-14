import{B as w,a as T,C as o,r as F,u as A}from"./real-estate-report.cc13e670.js";import{_ as H,g as R,r as h,o as l,c as a,b as r,w as n,e as t,F as c,h as p,n as e,f as d,t as b}from"./index.e62c17d2.js";const N={components:{BarChart:w,BaseFilter:T},setup(){o.register(...F),o.defaults.color="#818d96",o.defaults.font.weight="600",o.defaults.scale.grid.color="rgba(0, 0, 0, .05)",o.defaults.scale.grid.zeroLineColor="rgba(0, 0, 0, .1)",o.defaults.scale.beginAtZero=!0,o.defaults.elements.line.borderWidth=2,o.defaults.elements.point.radius=4,o.defaults.elements.point.hoverRadius=6,o.defaults.plugins.tooltip.radius=3,o.defaults.plugins.legend.labels.boxWidth=15;const f=A(),m=R({labels:["19/09","20/09","21/09","22/09","23/09","24/09","25/09"],datasets:[{label:"S\u1ED1 ti\u1EC1n n\u1EA1p",fill:!0,backgroundColor:"rgba(14,123,232,0.5)",borderColor:"rgba(171, 227, 125, 1)",pointBackgroundColor:"rgba(171, 227, 125, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(171, 227, 125, 1)",data:[15,16,20,25,23,25,32]},{label:"S\u1ED1 ti\u1EC1n r\xFAt",fill:!0,backgroundColor:"rgb(234,89,11)",borderColor:"rgba(0, 0, 0, .3)",pointBackgroundColor:"rgba(0, 0, 0, .3)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(0, 0, 0, .3)",data:[30,32,40,45,43,38,55]}]});return{store:f,chartLinesBarsRadarData:m}},data(){return{aum:{}}},methods:{fetch(){this.store.fetchAum(),this.aum=this.store.aum,console.log("aum",Object.keys(this.aum).length)}}},S={class:"content"},L={class:"row"},O={class:"col-lg-12"},j={class:"py-3"},D={class:"table-responsive overflow-auto text-center"},M=t("div",{class:"d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2"},[t("div",{class:"flex-shrink-0"},[t("select",{class:"form-select form-select-sm me-sm-4"},[t("option",{selected:""},"\u0110\u01A1n v\u1ECB: t\u1EF7 \u0111\u1ED3ng")])]),t("div",{class:"flex-shrink-0 mt-3 mt-sm-0"},[t("button",{class:"btn btn-sm btn-light"},[t("i",{class:"fa fa-arrow-circle-down"})])])],-1),P={key:0,class:"table table-sm table-responsive border"},V={class:"text-decoration-underline"},z=t("th",{style:{width:"10%"},colspan:"3"},null,-1),E={colspan:"5"},W=d(" Tu\u1EA7n 39 (19/9- 25/9) "),q={colspan:"5"},K=d(" Tu\u1EA7n 38 (12/9- 18/9) "),Z={colspan:"5"},G=d(" Tu\u1EA7n 37 (5/9- 11/9) "),I={colspan:"5"},J=d(" Tu\u1EA7n 36 (1/9 - 4/9) "),Q=t("th",{colspan:"3"},null,-1),U=t("td",{colspan:"3",class:"fw-bold"},"T\u1ED5ng",-1),X={class:"text-decoration-underline",colspan:"3"},Y=t("span",{class:"text-success"},"(+5%)",-1),$=t("span",{class:"text-danger"},"(-5%)",-1),tt={key:1};function et(f,m,st,y,B,v){const C=h("BaseFilter"),x=h("BasePageHeading"),k=h("BarChart"),g=h("BaseBlock"),i=h("router-link");return l(),a(c,null,[r(x,{title:"Pldfgsdf"},{extra:n(()=>[r(C,{onFilterChange:v.fetch,"module-store":y.store},null,8,["onFilterChange","module-store"])]),_:1}),t("div",S,[r(g,{"content-full":""},{default:n(()=>[t("div",L,[t("div",O,[r(g,{title:"B\xE1o c\xE1o T\u1ED5ng quan S\u1ED1 ti\u1EC1n N\u1EA1p r\xFAt v\xE0 AuM s\u1EA3n ph\u1EA9m B\u1EA5t \u0111\u1ED9ng s\u1EA3n c\u1EE7a All user","content-full":"","content-class":"text-center",class:"text-center"},{default:n(()=>[t("div",j,[r(k,{"chart-data":y.chartLinesBarsRadarData},null,8,["chart-data"])])]),_:1}),r(g,null,{content:n(()=>[t("div",D,[M,Object.keys(this.aum).length?(l(),a("table",P,[t("thead",null,[t("tr",V,[z,t("th",E,[r(i,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:n(()=>[W]),_:1})]),t("th",q,[r(i,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:n(()=>[K]),_:1})]),t("th",Z,[r(i,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:n(()=>[G]),_:1})]),t("th",I,[r(i,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:n(()=>[J]),_:1})])]),t("tr",null,[Q,(l(),a(c,null,p(4,(_,s)=>(l(),a(c,null,[t("th",{class:e({"bg-body-light":!s})},"N\u1EA1p",2),t("th",{class:e({"bg-body-light":!s})},"R\xFAt",2),t("th",{class:e({"bg-body-light":!s})},"AuM",2),t("th",{class:e({"bg-body-light":!s})},"AuM l\u0169y k\u1EBF",2),t("th",{class:e({"bg-body-light":!s})},"% n\u1EAFm gi\u1EEF",2)],64))),64))])]),t("tbody",null,[t("tr",null,[U,(l(),a(c,null,p(4,(_,s)=>(l(),a(c,null,[t("td",{class:e({"bg-body-light":!s})},"123",2),t("td",{class:e({"bg-body-light":!s})},"456",2),t("td",{class:e({"bg-body-light":!s})},"789",2),t("td",{class:e({"bg-body-light":!s})},"123",2),t("td",{class:e({"bg-body-light":!s})},"456",2)],64))),64))]),(l(!0),a(c,null,p(B.aum,(_,s)=>(l(),a("tr",{key:s+"-aum"},[t("td",X,[r(i,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:n(()=>[d(b(s),1)]),_:2},1024)]),(l(),a(c,null,p(4,(ot,u)=>(l(),a(c,null,[t("td",{class:e({"bg-body-light":!u})},[d(b(_.old_user.deposit),1),Y],2),t("td",{class:e({"bg-body-light":!u})},[d(b(_.old_user.withdraw),1),$],2),t("td",{class:e({"bg-body-light":!u})},"123",2),t("td",{class:e({"bg-body-light":!u})},"456",2),t("td",{class:e({"bg-body-light":!u})},"789",2)],64))),64))]))),128))])])):(l(),a("span",tt,"Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"))])]),_:1})])])]),_:1})])],64)}const rt=H(N,[["render",et]]);export{rt as default};
