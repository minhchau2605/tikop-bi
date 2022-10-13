import{B as g,a as b,C as e,r as B,u as m}from"./real-estate-report.8a1a3049.js";import{_ as C,g as v,r as a,o as n,c as l,b as o,w as s,e as t,F as c,h as k}from"./index.09205f33.js";const x={components:{BarChart:g,BaseFilter:b},setup(){e.register(...B),e.defaults.color="#818d96",e.defaults.font.weight="600",e.defaults.scale.grid.color="rgba(0, 0, 0, .05)",e.defaults.scale.grid.zeroLineColor="rgba(0, 0, 0, .1)",e.defaults.scale.beginAtZero=!0,e.defaults.elements.line.borderWidth=2,e.defaults.elements.point.radius=4,e.defaults.elements.point.hoverRadius=6,e.defaults.plugins.tooltip.radius=3,e.defaults.plugins.legend.labels.boxWidth=15;const d=m(),i=v({labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{label:"Last Week",fill:!0,backgroundColor:"rgba(171, 227, 125, .5)",borderColor:"rgba(171, 227, 125, 1)",pointBackgroundColor:"rgba(171, 227, 125, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(171, 227, 125, 1)",data:[15,16,20,25,23,25,32]},{label:"This Week",fill:!0,backgroundColor:"rgba(0, 0, 0, .1)",borderColor:"rgba(0, 0, 0, .3)",pointBackgroundColor:"rgba(0, 0, 0, .3)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(0, 0, 0, .3)",data:[30,32,40,45,43,38,55]}]});return{store:d,chartLinesBarsRadarData:i}},data(){return{transaction:{}}},methods:{fetch(){this.store.fetchTransaction(),this.transaction=this.store.transaction}}},T={class:"content"},F={class:"row"},H={class:"col-lg-12"},S={class:"py-3"},w={class:"table-responsive overflow-auto"},R={class:"table table-sm table-responsive border text-center"},L=t("tr",null,[t("th",{style:{width:"10%"},class:"text-center",colspan:"3"}),t("th",{colspan:"2"},"Tu\u1EA7n 38"),t("th",{colspan:"2"},"Tu\u1EA7n 39"),t("th",{colspan:"2"},"Tu\u1EA7n 40"),t("th",{colspan:"2"},"Tu\u1EA7n 41")],-1),W=t("td",{colspan:"3"},"S\u1EA3n ph\u1EA9m",-1),E=t("th",null,"S\u1ED1 l\u1EA7n n\u1EA1p",-1),N=t("th",null,"S\u1ED1 l\u1EA7n r\xFAt",-1),y=t("tbody",null,null,-1);function D(d,i,U,u,A,h){const _=a("BaseFilter"),f=a("BasePageHeading"),p=a("BarChart"),r=a("BaseBlock");return n(),l(c,null,[o(f,null,{extra:s(()=>[o(_,{onFilterChange:h.fetch,"module-store":u.store},null,8,["onFilterChange","module-store"])]),_:1}),t("div",T,[o(r,{"content-full":""},{default:s(()=>[t("div",F,[t("div",H,[o(r,{title:"B\xE1o c\xE1o t\u1ED5ng quan s\u1ED1 l\u1EA7n n\u1EA1p v\xE0 r\xFAt c\u1EE7a s\u1EA3n ph\u1EA9m B\u0110S","content-full":"","content-class":"text-center",class:"text-center"},{default:s(()=>[t("div",S,[o(p,{"chart-data":u.chartLinesBarsRadarData},null,8,["chart-data"])])]),_:1}),o(r,null,{content:s(()=>[t("div",w,[t("table",R,[t("thead",null,[L,t("tr",null,[W,(n(),l(c,null,k(4,(P,V)=>(n(),l(c,null,[E,N],64))),64))])]),y])])]),_:1})])])]),_:1})])],64)}const I=C(x,[["render",D]]);export{I as default};
