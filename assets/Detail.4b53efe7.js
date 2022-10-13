import{B as C,a as v,C as e,r as k,u as D}from"./real-estate-report.70c50f66.js";import{_ as w,g as x,r,o as d,c as i,b as l,w as s,e as t,F as p,h as F,t as a}from"./index.b7cbec8b.js";const S={components:{BarChart:C,BaseFilter:v},setup(){e.register(...k),e.defaults.color="#818d96",e.defaults.font.weight="600",e.defaults.scale.grid.color="rgba(0, 0, 0, .05)",e.defaults.scale.grid.zeroLineColor="rgba(0, 0, 0, .1)",e.defaults.scale.beginAtZero=!0,e.defaults.elements.line.borderWidth=2,e.defaults.elements.point.radius=4,e.defaults.elements.point.hoverRadius=6,e.defaults.plugins.tooltip.radius=3,e.defaults.plugins.legend.labels.boxWidth=15;const u=D(),c=x({labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{label:"Last Week",fill:!0,backgroundColor:"rgba(171, 227, 125, .5)",borderColor:"rgba(171, 227, 125, 1)",pointBackgroundColor:"rgba(171, 227, 125, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(171, 227, 125, 1)",data:[15,16,20,25,23,25,32]},{label:"This Week",fill:!0,backgroundColor:"rgba(0, 0, 0, .1)",borderColor:"rgba(0, 0, 0, .3)",pointBackgroundColor:"rgba(0, 0, 0, .3)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(0, 0, 0, .3)",data:[30,32,40,45,43,38,55]}]});return{store:u,chartLinesBarsRadarData:c}},data(){return{aumDetail:{}}},methods:{fetch(){this.store.fetchAumDetail(),this.aumDetail=this.store.aumDetail}}},H={class:"content"},L={class:"row"},R={class:"col-lg-12"},N={class:"py-3"},W={class:"table-responsive overflow-auto"},y={class:"table table-sm table-responsive border text-center"},A=t("thead",null,[t("tr",null,[t("th",null,"Ng\xE0y"),t("th",null,"Lo\u1EA1i s\u1EA3n ph\u1EA9m"),t("th",null,"S\u1ED1 ti\u1EC1n n\u1EA1p"),t("th",null,"S\u1ED1 ti\u1EC1n r\xFAt"),t("th",null,"Aum"),t("th",null,"S\u1ED1 l\u1EA7n n\u1EA1p"),t("th",null,"S\u1ED1 l\u1EA7n r\xFAt")])],-1);function E(u,c,T,h,g,_){const b=r("BaseFilter"),m=r("BasePageHeading"),B=r("BarChart"),n=r("BaseBlock");return d(),i(p,null,[l(m,null,{extra:s(()=>[l(b,{onFilterChange:_.fetch,"module-store":h.store},null,8,["onFilterChange","module-store"])]),_:1}),t("div",H,[l(n,{"content-full":""},{default:s(()=>[t("div",L,[t("div",R,[l(n,{title:"B\xE1o c\xE1o chi ti\u1EBFt s\u1ED1 ti\u1EC1n n\u1EA1p r\xFAt v\xE0 aum s\u1EA3n ph\u1EA9m b\u1EA5t \u0111\u1ED9ng s\u1EA3n","content-full":"","content-class":"text-center",class:"text-center"},{default:s(()=>[t("div",N,[l(B,{"chart-data":h.chartLinesBarsRadarData},null,8,["chart-data"])])]),_:1}),l(n,null,{content:s(()=>[t("div",W,[t("table",y,[A,t("tbody",null,[(d(!0),i(p,null,F(g.aumDetail,(o,f)=>(d(),i("tr",{key:f+"-aum"},[t("td",null,a(o.date),1),t("td",null,a(f),1),t("td",null,a(o.deposit),1),t("td",null,a(o.withdraw),1),t("td",null,a(o.aum),1),t("td",null,a(o.deposit_number),1),t("td",null,a(o.withdraw_number),1)]))),128))])])])]),_:1})])])]),_:1})])],64)}const V=w(S,[["render",E]]);export{V as default};
