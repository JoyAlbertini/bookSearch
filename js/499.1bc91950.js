"use strict";(self["webpackChunkbook_search"]=self["webpackChunkbook_search"]||[]).push([[499],{1499:(e,o,a)=>{a.r(o),a.d(o,{default:()=>po});var r=a(3673);const l={class:"full-width"};function t(e,o,a,t,i,n){const s=(0,r.up)("books"),d=(0,r.up)("q-page");return(0,r.wg)(),(0,r.j4)(d,{class:"flex"},{default:(0,r.w5)((()=>[(0,r._)("div",l,[(0,r.Wm)(s)])])),_:1})}a(246);var i=a(8880),n=a(2323);const s=e=>((0,r.dD)("data-v-dcd78328"),e=e(),(0,r.Cn)(),e),d={class:"q-pa-md"},c={class:"row justify-between no-wrap full-width"},u={class:"row q-gutter-sm no-wrap"},m={class:"column justify-center"},p={class:"row q-gutter-xs"},g={key:0,class:"column justify-center"},w=(0,r.Uk)(" && "),f=(0,r.Uk)(" || "),y=s((()=>(0,r._)("h4",null,"(",-1))),k={key:1,class:"column justify-center"},h=s((()=>(0,r._)("h4",null,")",-1))),v={key:2},_=(0,r.Uk)(" && "),b=(0,r.Uk)(" || "),q={key:2},x={key:3},W={key:3},D=(0,r.Uk)(" && "),U=(0,r.Uk)(" || "),O={class:"row q-gutter-sm no-wrap"},C={class:"column justify-center q-pr-md"},j={key:0},z={style:{color:"blue"}},Z=(0,r.Uk)(" results "),N={key:1},M={style:{color:"blue"}},R=(0,r.Uk)(" results "),A={class:"q-pa-sm col-xs-12 col-sm-6 col-md-3"},L={class:"column justify-center"},P=["href"],Q={class:"q-pb-sm"},S={id:"#scroll",class:"row q-gutter-xs no-wrap"},V=s((()=>(0,r._)("p",null,null,-1))),B={key:0},Y={style:{color:"red"}},I={class:"row reverse q-pt-sm justify-between no-wrap"},H={key:0};function K(e,o,a,l,t,s){const K=(0,r.up)("q-btn"),F=(0,r.up)("q-avatar"),T=(0,r.up)("q-input"),E=(0,r.up)("q-icon"),G=(0,r.up)("q-chip"),J=(0,r.up)("WordHighLighter"),X=(0,r.up)("q-card-section"),$=(0,r.up)("q-separator"),ee=(0,r.up)("q-scroll-area"),oe=(0,r.up)("q-card"),ae=(0,r.up)("q-expansion-item"),re=(0,r.up)("q-table"),le=(0,r.up)("overlay-page"),te=(0,r.up)("add-modifier");return(0,r.wg)(),(0,r.iD)("div",d,[(0,r.Wm)(re,{grid:"","card-container-class":e.cardContainerClass,rows:e.books,"row-key":"name","hide-bottom":"","hide-header":"",pagination:e.pagination,"onUpdate:pagination":o[3]||(o[3]=o=>e.pagination=o),"no-data-label":"No data"},{top:(0,r.w5)((a=>[(0,r._)("div",c,[(0,r._)("div",u,[(0,r.Wm)(T,{color:"primary",style:{width:"400px"},outlined:"",onKeyup:(0,i.D2)(e.querySolr,["enter"]),modelValue:e.query,"onUpdate:modelValue":o[1]||(o[1]=o=>e.query=o),label:"Search a book"},{before:(0,r.w5)((()=>[(0,r.Wm)(F,null,{default:(0,r.w5)((()=>[(0,r.Wm)(K,{icon:"search",onClick:o[0]||(o[0]=o=>e.querySolr()),color:"primary"})])),_:1})])),_:1},8,["onKeyup","modelValue"]),(0,r.Wm)(K,{dense:"",flat:"",icon:"add",onClick:o[2]||(o[2]=o=>e.addModifier()),color:"primary"}),(0,r._)("div",m,[(0,r._)("div",p,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.operators,((o,a)=>((0,r.wg)(),(0,r.iD)("div",{key:o,class:"column justify-center"},["("===o.type?((0,r.wg)(),(0,r.iD)("div",g,[(0,r.Wm)(G,{dense:"",color:"white",class:"no-margin",removable:"",onRemove:o=>e.operators.splice(a,1)},{append:(0,r.w5)((()=>[(0,r.Wm)(E,{name:"cancel",size:"xs"})])),default:(0,r.w5)((()=>["AND"===o.operator?((0,r.wg)(),(0,r.j4)(F,{key:0,style:{"font-size":"20px"},color:"red","text-color":"white"},{default:(0,r.w5)((()=>[w])),_:1})):(0,r.kq)("",!0),"OR"===o.operator?((0,r.wg)(),(0,r.j4)(F,{key:1,style:{"font-size":"20px"},color:"blue","text-color":"white"},{default:(0,r.w5)((()=>[f])),_:1})):(0,r.kq)("",!0),y])),_:2},1032,["onRemove"])])):")"===o.type?((0,r.wg)(),(0,r.iD)("div",k,[(0,r.Wm)(G,{dense:"",color:"white",class:"no-margin",removable:"",onRemove:o=>e.operators.splice(a,1)},{default:(0,r.w5)((()=>[h])),_:2},1032,["onRemove"])])):"Year"===o.type?((0,r.wg)(),(0,r.iD)("div",v,[(0,r.Wm)(G,{class:"no-margin",removable:"",onRemove:o=>e.removeModifier(a)},{default:(0,r.w5)((()=>["AND"===o.operator?((0,r.wg)(),(0,r.j4)(F,{key:0,style:{"font-size":"24px"},color:"red","text-color":"white"},{default:(0,r.w5)((()=>[_])),_:1})):(0,r.kq)("",!0),"OR"===o.operator?((0,r.wg)(),(0,r.j4)(F,{key:1,style:{"font-size":"24px"},color:"blue","text-color":"white"},{default:(0,r.w5)((()=>[b])),_:1})):(0,r.kq)("",!0),o.min!==o.max?((0,r.wg)(),(0,r.iD)("div",q,(0,n.zw)(o.label),1)):((0,r.wg)(),(0,r.iD)("div",x,(0,n.zw)("year:"+o.min),1))])),_:2},1032,["onRemove"])])):((0,r.wg)(),(0,r.iD)("div",W,[(0,r.Wm)(G,{class:"no-margin",removable:"",onRemove:o=>e.removeModifier(a)},{default:(0,r.w5)((()=>["AND"===o.operator?((0,r.wg)(),(0,r.j4)(F,{key:0,style:{"font-size":"24px"},color:"red","text-color":"white"},{default:(0,r.w5)((()=>[D])),_:1})):(0,r.kq)("",!0),"OR"===o.operator?((0,r.wg)(),(0,r.j4)(F,{key:1,style:{"font-size":"24px"},color:"blue","text-color":"white"},{default:(0,r.w5)((()=>[U])),_:1})):(0,r.kq)("",!0),(0,r.Uk)(" "+(0,n.zw)(o.label),1)])),_:2},1032,["onRemove"])]))])))),128))])])]),(0,r._)("div",O,[(0,r._)("div",C,[a.pagination.page*a.pagination.rowsPerPage<e.lengthBooks?((0,r.wg)(),(0,r.iD)("caption",j,[(0,r.Uk)((0,n.zw)(a.pagination.page*a.pagination.rowsPerPage)+" - ",1),(0,r._)("strong",z,(0,n.zw)(e.lengthBooks),1),Z])):((0,r.wg)(),(0,r.iD)("caption",N,[(0,r.Uk)((0,n.zw)(e.lengthBooks)+" - ",1),(0,r._)("strong",M,(0,n.zw)(e.lengthBooks),1),R]))]),(0,r.Wm)(K,{style:{color:"blue",height:"50px"},icon:"chevron_left",disable:a.isFirstPage,onClick:a.prevPage},null,8,["disable","onClick"]),(0,r.Wm)(K,{style:{color:"blue",height:"50px"},icon:"chevron_right",disable:a.isLastPage,onClick:a.nextPage},null,8,["disable","onClick"])])])])),item:(0,r.w5)((o=>[(0,r._)("div",A,[(0,r.Wm)(oe,null,{default:(0,r.w5)((()=>[(0,r.Wm)(X,{class:"q-pt-sm q-pb-sm"},{default:(0,r.w5)((()=>[(0,r._)("div",L,[(0,r._)("a",{class:"text-primary",href:o.row.link,style:{"text-decoration":"none"}},[(0,r._)("strong",null,[(0,r.Wm)(J,{splitBySpace:!0,query:e.query},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o.row.title[0]),1)])),_:2},1032,["query"])])],8,P)])])),_:2},1024),(0,r.Wm)($),(0,r.Wm)(X,null,{default:(0,r.w5)((()=>[(0,r._)("div",Q,[(0,r.Wm)(ee,{id:"scroll",style:{height:"31px"}},{default:(0,r.w5)((()=>[(0,r._)("div",S,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.row.authors,(o=>((0,r.wg)(),(0,r.iD)("div",{class:"col-auto",key:o},[-1===e.authors.indexOf(o)?((0,r.wg)(),(0,r.j4)(G,{key:0,color:"secondary","text-color":"white",class:"no-margin"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o),1)])),_:2},1024)):(0,r.kq)("",!0),-1!==e.authors.indexOf(o)?((0,r.wg)(),(0,r.j4)(G,{key:1,color:"orange","text-color":"white",class:"no-margin"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o),1)])),_:2},1024)):(0,r.kq)("",!0)])))),128))])])),_:2},1024)]),(0,r.Wm)(ee,{class:"q-pb-sm",style:{height:"90px"}},{default:(0,r.w5)((()=>[(0,r.Wm)(J,{splitBySpace:!0,query:e.query},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o.row.description[0]),1)])),_:2},1032,["query"])])),_:2},1024),(0,r.Wm)(ae,{class:"no-padding",style:{color:"blue"},label:"Subjects"},{default:(0,r.w5)((()=>[(0,r.Wm)(oe,null,{default:(0,r.w5)((()=>[(0,r.Wm)(X,null,{default:(0,r.w5)((()=>[(0,r.Wm)(J,{splitBySpace:!0,query:e.query},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)("Subjects: "+o.row.subjects[0]),1)])),_:2},1032,["query"]),V,(0,r.Wm)(J,{splitBySpace:!0,query:e.query,style:{color:"green"}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)("Other data: "+o.row.allOtherData[0]),1)])),_:2},1032,["query"]),e.debug?((0,r.wg)(),(0,r.iD)("div",B,[(0,r._)("caption",Y,(0,n.zw)("Score:"+o.row.score),1)])):(0,r.kq)("",!0)])),_:2},1024)])),_:2},1024)])),_:2},1024),(0,r._)("div",I,[-1===e.years.indexOf(o.row.yearOfPublication[0])?((0,r.wg)(),(0,r.j4)(G,{key:0,class:"no-margin",outline:"",color:"primary","text-color":"white"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o.row.yearOfPublication[0]),1)])),_:2},1024)):(0,r.kq)("",!0),-1!==e.years.indexOf(o.row.yearOfPublication[0])?((0,r.wg)(),(0,r.j4)(G,{key:1,class:"no-margin",outline:"",color:"orange","text-color":"white"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o.row.yearOfPublication[0]),1)])),_:2},1024)):(0,r.kq)("",!0),-1===e.languages.indexOf(o.row.language[0])?((0,r.wg)(),(0,r.j4)(G,{key:2,class:"no-margin"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o.row.language[0]),1)])),_:2},1024)):(0,r.kq)("",!0),-1!==e.languages.indexOf(o.row.language[0])?((0,r.wg)(),(0,r.j4)(G,{key:3,color:"orange",class:"no-margin"},{default:(0,r.w5)((()=>[(0,r.Uk)((0,n.zw)(o.row.language[0]),1)])),_:2},1024)):(0,r.kq)("",!0)])])),_:2},1024)])),_:2},1024)])])),_:1},8,["card-container-class","rows","pagination"]),e.renderModify?((0,r.wg)(),(0,r.iD)("div",H,[(0,r.Wm)(le),(0,r.Wm)(te,{onSetRenderModify:e.setRenderModify,onAddOperator:e.addOperator},null,8,["onSetRenderModify","onAddOperator"])])):(0,r.kq)("",!0)])}var F=a(3617),T=a(1959),E=a(8825);const G=e=>((0,r.dD)("data-v-6addb616"),e=e(),(0,r.Cn)(),e),J={class:"overlay full-width full-height"},X=G((()=>(0,r._)("p",null,"text",-1))),$=[X];function ee(e,o,a,l,t,i){return(0,r.wg)(),(0,r.iD)("div",J,$)}const oe={name:"overlayPage"};var ae=a(4260);const re=(0,ae.Z)(oe,[["render",ee],["__scopeId","data-v-6addb616"]]),le=re,te={id:"floating-panel",style:{width:"560px"}},ie={class:"q-pa-md"},ne={class:"row q-pb-md"},se={key:0},de=(0,r.Uk)("Author"),ce={key:1},ue=(0,r.Uk)("Author"),me={key:2},pe=(0,r.Uk)("Year"),ge={key:3},we=(0,r.Uk)("Year"),fe={key:4},ye=(0,r.Uk)("Language"),ke={key:5},he=(0,r.Uk)("Language"),ve={key:6},_e=(0,r.Uk)("("),be={key:7},qe=(0,r.Uk)("("),xe={key:8},We=(0,r.Uk)(")"),De={key:9},Ue=(0,r.Uk)(")"),Oe={class:"row q-gutter-sm"},Ce={key:1,class:"col-grow",style:{"margin-right":"20px","margin-left":"18px"}},je={key:2,class:"col-grow"},ze={key:3,class:"col-grow"},Ze={class:"row q-gutter-sm no-wrap"},Ne={key:4,class:"col-grow"},Me=(0,r.Uk)("("),Re={key:5,class:"col-grow"},Ae=(0,r.Uk)(")"),Le={class:"row no-wrap"};function Pe(e,o,a,l,t,i){const n=(0,r.up)("q-btn"),s=(0,r.up)("q-select"),d=(0,r.up)("q-range"),c=(0,r.up)("q-input"),u=(0,r.up)("q-chip");return(0,r.wg)(),(0,r.iD)("div",te,[(0,r._)("div",ie,[(0,r._)("div",ne,["Author"===e.modifier?((0,r.wg)(),(0,r.iD)("div",se,[(0,r.Wm)(n,{outline:"",color:"primary",onClick:o[0]||(o[0]=o=>e.modifier="Author"),class:"col-grow"},{default:(0,r.w5)((()=>[de])),_:1})])):((0,r.wg)(),(0,r.iD)("div",ce,[(0,r.Wm)(n,{flat:"",color:"primary",onClick:o[1]||(o[1]=o=>e.modifier="Author"),class:"col-grow"},{default:(0,r.w5)((()=>[ue])),_:1})])),"Year"===e.modifier?((0,r.wg)(),(0,r.iD)("div",me,[(0,r.Wm)(n,{outline:"",color:"primary",onClick:o[2]||(o[2]=o=>e.modifier="Year"),class:"col-grow"},{default:(0,r.w5)((()=>[pe])),_:1})])):((0,r.wg)(),(0,r.iD)("div",ge,[(0,r.Wm)(n,{flat:"",color:"primary",onClick:o[3]||(o[3]=o=>e.modifier="Year"),class:"col-grow"},{default:(0,r.w5)((()=>[we])),_:1})])),"Language"===e.modifier?((0,r.wg)(),(0,r.iD)("div",fe,[(0,r.Wm)(n,{outline:"",color:"primary",onClick:o[4]||(o[4]=o=>e.modifier="Language"),class:"col-grow"},{default:(0,r.w5)((()=>[ye])),_:1})])):((0,r.wg)(),(0,r.iD)("div",ke,[(0,r.Wm)(n,{flat:"",color:"primary",onClick:o[5]||(o[5]=o=>e.modifier="Language"),class:"col-grow"},{default:(0,r.w5)((()=>[he])),_:1})])),"("===e.modifier?((0,r.wg)(),(0,r.iD)("div",ve,[(0,r.Wm)(n,{outline:"",color:"primary",onClick:o[6]||(o[6]=o=>e.modifier="("),class:"col-grow"},{default:(0,r.w5)((()=>[_e])),_:1})])):((0,r.wg)(),(0,r.iD)("div",be,[(0,r.Wm)(n,{flat:"",color:"primary",onClick:o[7]||(o[7]=o=>e.modifier="("),class:"col-grow"},{default:(0,r.w5)((()=>[qe])),_:1})])),")"===e.modifier?((0,r.wg)(),(0,r.iD)("div",xe,[(0,r.Wm)(n,{outline:"",color:"primary",onClick:o[8]||(o[8]=o=>e.modifier=")"),class:"col-grow"},{default:(0,r.w5)((()=>[We])),_:1})])):((0,r.wg)(),(0,r.iD)("div",De,[(0,r.Wm)(n,{flat:"",color:"primary",onClick:o[9]||(o[9]=o=>e.modifier=")"),class:"col-grow"},{default:(0,r.w5)((()=>[Ue])),_:1})]))]),(0,r._)("div",Oe,[")"!==e.modifier?((0,r.wg)(),(0,r.j4)(s,{key:0,class:"col-3",rounded:"",outlined:"",modelValue:e.booleanOperator,"onUpdate:modelValue":o[10]||(o[10]=o=>e.booleanOperator=o),options:["None","AND","OR"],color:"secondary"},null,8,["modelValue"])):(0,r.kq)("",!0),"Year"===e.modifier?((0,r.wg)(),(0,r.iD)("div",Ce,[(0,r.Wm)(d,{modelValue:e.range,"onUpdate:modelValue":o[11]||(o[11]=o=>e.range=o),label:"",color:"secondary",min:2017,max:2021,step:1,markers:""},null,8,["modelValue"])])):"Language"===e.modifier?((0,r.wg)(),(0,r.iD)("div",je,[(0,r.Wm)(s,{filled:"",modelValue:e.language,"onUpdate:modelValue":o[12]||(o[12]=o=>e.language=o),options:e.options,label:"Language",color:"primary"},null,8,["modelValue","options"])])):"Author"===e.modifier?((0,r.wg)(),(0,r.iD)("div",ze,[(0,r._)("div",Ze,[(0,r.Wm)(c,{class:"col-grow",outlined:"",modelValue:e.authorName,"onUpdate:modelValue":o[13]||(o[13]=o=>e.authorName=o),label:"Name"},null,8,["modelValue"]),(0,r.Wm)(c,{class:"col-grow",outlined:"",modelValue:e.authorLastName,"onUpdate:modelValue":o[14]||(o[14]=o=>e.authorLastName=o),label:"Last name"},null,8,["modelValue"])])])):"("===e.modifier?((0,r.wg)(),(0,r.iD)("div",Ne,[(0,r.Wm)(u,{square:"",size:"xl"},{default:(0,r.w5)((()=>[Me])),_:1})])):")"===e.modifier?((0,r.wg)(),(0,r.iD)("div",Re,[(0,r.Wm)(u,{square:"",size:"xl"},{default:(0,r.w5)((()=>[Ae])),_:1})])):(0,r.kq)("",!0)])]),(0,r._)("div",Le,[(0,r.Wm)(n,{style:{"border-radius":"0px 0px 0px 8px"},outline:"",class:"col-6",icon:"done",onClick:e.saveModifier,color:"positive"},null,8,["onClick"]),(0,r.Wm)(n,{style:{"border-radius":"0px 0px 8px 0px"},outline:"",class:"col-6",icon:"clear",onClick:e.resetModifier,color:"negative"},null,8,["onClick"])])])}a(6801);const Qe=["arabic","english","german","spanish","finnish","french","italian","dutch","norwegian","portuguese"],Se={name:"addModifier",components:{},emits:["setRenderModify","addOperator"],setup(e,{emit:o}){const a=function(){o("setRenderModify",!1)},r=function(){if("Author"===l.modifier){const e={label:"author: "+l.authorName.trim()+" "+l.authorLastName.trim(),type:"Author",operator:l.booleanOperator,name:l.authorName.trim(),lastName:l.authorLastName.trim()};o("addOperator",e)}else if("Year"===l.modifier){const e={label:"year: "+l.range.min+"-"+l.range.max,type:"Year",operator:l.booleanOperator,min:l.range.min,max:l.range.max};o("addOperator",e)}else if("Language"===l.modifier){const e={label:"lang: "+l.language,type:"Language",operator:l.booleanOperator,language:l.language};o("addOperator",e)}else if("Title"===l.modifier){const e={label:"title: "+l.title,type:"Title",operator:l.booleanOperator,title:l.title};o("addOperator",e)}else if("("===l.modifier){const e={label:"(",type:"(",operator:l.booleanOperator};o("addOperator",e)}else if(")"===l.modifier){const e={label:")",type:")",operator:"None"};o("addOperator",e)}o("setRenderModify",!1)};let l=(0,T.qj)({counter:0,range:(0,T.iH)({min:2017,max:2021}),language:"",title:"",authorName:"",authorLastName:"",booleanOperator:"None",modifier:"Year",options:Qe,resetModifier:a,saveModifier:r});return(0,T.BK)(l)}};var Ve=a(4607),Be=a(2081),Ye=a(1391),Ie=a(4842),He=a(7030),Ke=a(7518),Fe=a.n(Ke);const Te=(0,ae.Z)(Se,[["render",Pe]]),Ee=Te;Fe()(Se,"components",{QBtn:Ve.Z,QSelect:Be.Z,QRange:Ye.Z,QInput:Ie.Z,QChip:He.Z});var Ge=a(3769);const Je={name:"Books",components:{AddModifier:Ee,OverlayPage:le,WordHighLighter:Ge.Z},setup(){const e=(0,E.Z)(),o=(0,F.oR)(),a=async function(){await o.dispatch("solr/fetchContents",{query:p.query,operators:p.operators}).catch((e=>{throw e}))};(0,r.bv)((async()=>{await o.dispatch("solr/fetchAll").catch((e=>{throw e}))}));const l=(0,T.Fl)((()=>o.getters["solr/retrievedData"])),t=(0,T.Fl)((()=>o.getters["solr/lengthData"])),i=(0,T.Fl)((()=>e.screen.gt.xs?"grid-masonry grid-masonry--"+(e.screen.gt.sm?"3":"2"):null)),n=function(e){p.operators.push(e),p.authors=[],p.years=[],p.languages=[],p.operators.forEach((function(e){if("Language"===e.type&&p.languages.push(e.language),"Year"===e.type)for(let o=e.min;o<=e.max;o++)p.years.push(o);else"Author"===e.type&&p.authors.push(e.name+" "+e.lastName)}))},s=function(e){const o=p.operators[e];if("Language"===o.type){const e=p.languages.findIndex((e=>e===o.language));p.languages.splice(e,1)}else if("Author"===o.type){const e=p.authors.findIndex((e=>e===o.name+" "+o.lastName));p.authors.splice(e,1)}else if("Year"===o.type)for(let a=o.min;a<=o.max;a++){const e=p.years.findIndex((e=>e===a));p.years.splice(e,1)}p.operators.splice(e,1)},d=function(){c(!0)},c=function(e){p.renderModify=e},u=function(){return e.screen.lt.sm?4:e.screen.lt.md?8:12},m=(0,T.iH)({page:1,rowsPerPage:u()});let p=(0,T.qj)({removeModifier:s,querySolr:a,addOperator:n,setRenderModify:c,addModifier:d,query:"",operators:[],authors:[],years:[],languages:[],renderModify:!1,debug:!0,lengthBooks:t,books:l,cardContainerClass:i,pagination:m,tableScope:null});return(0,T.BK)(p)}};var Xe=a(34),$e=a(5096),eo=a(4554),oo=a(151),ao=a(5589),ro=a(5869),lo=a(7704),to=a(4615),io=a(3414);const no=(0,ae.Z)(Je,[["render",K],["__scopeId","data-v-dcd78328"]]),so=no;Fe()(Je,"components",{QTable:Xe.Z,QInput:Ie.Z,QAvatar:$e.Z,QBtn:Ve.Z,QChip:He.Z,QIcon:eo.Z,QCard:oo.Z,QCardSection:ao.Z,QSeparator:ro.Z,QScrollArea:lo.Z,QExpansionItem:to.Z,QItem:io.Z});const co=(0,r.aZ)({name:"PageIndex",components:{Books:so}});var uo=a(4379);const mo=(0,ae.Z)(co,[["render",t]]),po=mo;Fe()(co,"components",{QPage:uo.Z})}}]);