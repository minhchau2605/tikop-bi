import{B as C,a as k,C as t,r as y,u as D}from"./real-estate-report.70c50f66.js";import{_ as x,g as F,r,o,c as l,b as s,w as a,e,F as n,h,f as w,t as i}from"./index.b7cbec8b.js";const H={components:{BarChart:C,BaseFilter:k},setup(){t.register(...y),t.defaults.color="#818d96",t.defaults.font.weight="600",t.defaults.scale.grid.color="rgba(0, 0, 0, .05)",t.defaults.scale.grid.zeroLineColor="rgba(0, 0, 0, .1)",t.defaults.scale.beginAtZero=!0,t.defaults.elements.line.borderWidth=2,t.defaults.elements.point.radius=4,t.defaults.elements.point.hoverRadius=6,t.defaults.plugins.tooltip.radius=3,t.defaults.plugins.legend.labels.boxWidth=15;const d=D(),c=F({labels:["MON","TUE","WED","THU","FRI","SAT","SUN"],datasets:[{label:"Last Week",fill:!0,backgroundColor:"rgba(171, 227, 125, .5)",borderColor:"rgba(171, 227, 125, 1)",pointBackgroundColor:"rgba(171, 227, 125, 1)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(171, 227, 125, 1)",data:[15,16,20,25,23,25,32]},{label:"This Week",fill:!0,backgroundColor:"rgba(0, 0, 0, .1)",borderColor:"rgba(0, 0, 0, .3)",pointBackgroundColor:"rgba(0, 0, 0, .3)",pointBorderColor:"#fff",pointHoverBackgroundColor:"#fff",pointHoverBorderColor:"rgba(0, 0, 0, .3)",data:[30,32,40,45,43,38,55]}]});return{store:d,chartLinesBarsRadarData:c}},data(){return{movingDetail:{}}},methods:{fetch(){this.store.fetchMovingDetail(),this.movingDetail=this.store.movingDetail}}},N={class:"content"},T={class:"row"},R={class:"col-lg-12"},S={key:0,class:"table-responsive overflow-auto"},W={class:"table table-sm table-responsive border"},E=e("thead",null,[e("tr",null,[e("th",null,"Ng\xE0y"),e("th",null,"G\xF3i chuy\u1EC3n"),e("th",null,"G\xF3i nh\u1EADn"),e("th",null,"S\u1ED1 ti\u1EC1n")])],-1),L={colspan:"3"},U=e("td",null,"123",-1),V=e("td",null,"456",-1),A=e("td",null,"789",-1),G={key:1,class:"mt-sm-4"};function M(d,c,O,f,p,b){const m=r("BaseFilter"),v=r("BasePageHeading"),B=r("router-link"),u=r("BaseBlock");return o(),l(n,null,[s(v,null,{extra:a(()=>[s(m,{onFilterChange:b.fetch,"module-store":f.store},null,8,["onFilterChange","module-store"])]),_:1}),e("div",N,[s(u,{"content-full":""},{default:a(()=>[e("div",T,[e("div",R,[s(u,{title:"B\xE1o c\xE1o chi ti\u1EBFt chuy\u1EC3n \u0111\u1ED5i","content-class":"text-center",class:"text-center"},{content:a(()=>[Object.keys(this.movingDetail).length?(o(),l("div",S,[e("table",W,[E,e("tbody",null,[(o(!0),l(n,null,h(p.movingDetail,(_,g)=>(o(),l("tr",{key:g+"-moving"},[e("td",L,[s(B,{to:{path:"/real-estate-report/aum-detail",props:{filterType:"product"}}},{default:a(()=>[w(i(g),1)]),_:2},1024)]),(o(),l(n,null,h(4,(P,j)=>(o(),l(n,null,[e("td",null,i(_.old_user.deposit),1),e("td",null,i(_.old_user.withdraw),1),U,V,A],64))),64))]))),128))])])])):(o(),l("div",G,"Kh\xF4ng c\xF3 d\u1EEF li\u1EC7u"))]),_:1})])])]),_:1})])],64)}const K=x(H,[["render",M]]);export{K as default};
