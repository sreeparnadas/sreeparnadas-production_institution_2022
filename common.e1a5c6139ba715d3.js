"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[592],{3842:(T,p,n)=>{n.d(p,{P:()=>t});var e=n(9646),a=n(5e3),c=n(520);let t=(()=>{class l{constructor(d){this.http=d,this.arc="false",this.setting={element:{dynamicDownload:null}},this.http.get("assets/projectDetails.json").subscribe(o=>{this.projectDetails=o,this.projectHeading=this.projectDetails.projectHeading,this.contact=this.projectDetails.contact})}ngOnInit(){}toggleBounce(){this.arc="false"===this.arc?"true":"false"}fakeValidateUserData(){return(0,e.of)({userDate1:1,userData2:2})}dyanmicDownloadByHtmlTag(d){this.setting.element.dynamicDownload||(this.setting.element.dynamicDownload=document.createElement("a"));const o=this.setting.element.dynamicDownload,g=d.fileName.indexOf(".json")>-1?"text/json":"text/plain";o.setAttribute("href",`data:${g};charset=utf-8,${encodeURIComponent(d.text)}`),o.setAttribute("download",d.fileName);const h=new MouseEvent("click");o.dispatchEvent(h)}dynamicDownloadTxt(){this.fakeValidateUserData().subscribe(d=>{this.dyanmicDownloadByHtmlTag({fileName:"My Report",text:JSON.stringify(d)})})}dynamicDownloadJson(){this.fakeValidateUserData().subscribe(d=>{this.dyanmicDownloadByHtmlTag({fileName:"My Report.json",text:JSON.stringify(d)})})}}return l.\u0275fac=function(d){return new(d||l)(a.Y36(c.eN))},l.\u0275cmp=a.Xpm({type:l,selectors:[["app-top"]],decls:14,vars:2,consts:[[1,"masthead","d-flex","align-items-center"],[1,"container","px-4","px-lg-5","text-center"],["data-aos","fade-up","data-aos-duration","3000",1,"mb-1"],[1,"m-5"],[1,"mb-5"],["href","#about",1,"btn","btn-primary","btn-xl"],["data-aos","fade-up","data-aos-once","true"]],template:function(d,o){1&d&&(a.TgZ(0,"header",0),a.TgZ(1,"div",1),a.TgZ(2,"h1",2),a.TgZ(3,"div",3),a._uU(4),a.qZA(),a.TgZ(5,"div",3),a._uU(6),a.qZA(),a.qZA(),a.TgZ(7,"h3",4),a.TgZ(8,"em"),a._uU(9,"We are developing it"),a.qZA(),a.qZA(),a.TgZ(10,"a",5),a._uU(11,"Find Out More"),a.qZA(),a.TgZ(12,"div",6),a._uU(13," the content "),a.qZA(),a.qZA(),a.qZA()),2&d&&(a.xp6(4),a.hij(" ",o.projectHeading," "),a.xp6(2),a.hij(" ",o.contact," "))},styles:[".ball[_ngcontent-%COMP%]{position:relative;background-color:#000;border-radius:50%;height:25px;width:25px}.masthead[_ngcontent-%COMP%]{min-height:30rem;position:relative;display:table;width:100%;height:auto;padding-top:8rem;padding-bottom:8rem;background-image:url(gold_background2.5899940047426bdb.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover}.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .masthead[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:4rem;margin:0;padding:0}@media (min-width: 992px){.masthead[_ngcontent-%COMP%]{height:100vh}.masthead[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .masthead[_ngcontent-%COMP%]   .h1[_ngcontent-%COMP%]{font-size:5.5rem}}"]}),l})()},2953:(T,p,n)=>{n.r(p),n.d(p,{TopModule:()=>d});var e=n(9808),a=n(4521),c=n(3842),t=n(5e3);const l=[{path:"",component:c.P}];let Z=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[e.ez,Z]]}),o})()},5272:(T,p,n)=>{n.d(p,{I:()=>a});var e=n(5e3);let a=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-trainer"]],decls:2,vars:0,consts:[[1,"d-flex","align-items-center",2,"width","100vh"],["src","https://t.me/sukantahuiphotography/2","alt","",1,"img-fluid"]],template:function(l,Z){1&l&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.qZA())},styles:[""]}),c})()},2122:(T,p,n)=>{n.r(p),n.d(p,{TrainerModule:()=>d});var e=n(9808),a=n(4521),c=n(5272),t=n(5e3);const l=[{path:"",component:c.I}];let Z=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[e.ez,Z]]}),o})()},5932:(T,p,n)=>{n.r(p),n.d(p,{MsexcelBasicLookupFunctionModule:()=>q});var e=n(9808),a=n(4521),c=n(9783),t=n(5e3),l=n(7773),Z=n(3787);function d(i,f){if(1&i&&(t.TgZ(0,"div",6),t.TgZ(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.qZA()),2&i){const u=f.$implicit;t.xp6(2),t.Oqu(u.summary),t.xp6(2),t.Oqu(u.detail)}}function o(i,f){1&i&&(t.TgZ(0,"div",7),t._uU(1,"VLOOKUP"),t.qZA())}function g(i,f){1&i&&(t.TgZ(0,"div",8),t.TgZ(1,"h2"),t._uU(2,"Summary"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"VLOOKUP is an Excel function to ook up data in a table organized vertically. VLOOKUP supports approximate and exact matching, and wildcards (* ?) for partial matches. Lookup values must appear in the first column of the table passed into VLOOKUP."),t.qZA(),t.TgZ(5,"h2"),t._uU(6,"Purpose"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"Lookup a value in a table by matching on the first column"),t.qZA(),t.TgZ(9,"h2"),t._uU(10,"Return value "),t.qZA(),t.TgZ(11,"p"),t._uU(12,"The matched value from a table."),t.qZA(),t.TgZ(13,"h2"),t._uU(14,"Syntax"),t.qZA(),t.TgZ(15,"h3",9),t._uU(16," = "),t.TgZ(17,"span",10),t._uU(18,"VLOOKUP"),t.qZA(),t.TgZ(19,"span",11),t._uU(20,"("),t.qZA(),t.TgZ(21,"span",12),t._uU(22,"lookup_value"),t.qZA(),t._uU(23,", "),t.TgZ(24,"span",12),t._uU(25,"table_array"),t.qZA(),t._uU(26,", "),t.TgZ(27,"span",12),t._uU(28,"column_index_num"),t.qZA(),t._uU(29,", [range_lookup] "),t.TgZ(30,"span",11),t._uU(31,")"),t.qZA(),t.qZA(),t.TgZ(32,"h2"),t._uU(33,"Arguments "),t.qZA(),t.TgZ(34,"dl"),t.TgZ(35,"dt"),t._uU(36,"lookup_value "),t.qZA(),t.TgZ(37,"dd"),t._uU(38,"- The value to look for in the first column of a table."),t.qZA(),t.TgZ(39,"dt"),t._uU(40,"table_array "),t.qZA(),t.TgZ(41,"dd"),t._uU(42,"- The table from which to retrieve a value."),t.qZA(),t.TgZ(43,"dt"),t._uU(44,"column_index_num "),t.qZA(),t.TgZ(45,"dd"),t._uU(46,"- The column in the table from which to retrieve a value."),t.qZA(),t.TgZ(47,"dt"),t._uU(48,"range_lookup"),t.qZA(),t.TgZ(49,"dd"),t._uU(50,"-[optional] TRUE = approximate match (default). FALSE = exact match."),t.qZA(),t.qZA(),t.qZA())}function h(i,f){1&i&&(t.TgZ(0,"div",7),t._uU(1,"MATCH"),t.qZA())}function v(i,f){1&i&&(t.TgZ(0,"div",8),t.TgZ(1,"h2"),t._uU(2,"Summary"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"MATCH is an Excel function used to locate the position of a lookup value in a row, column, or table. MATCH supports approximate and exact matching, and wildcards (* ?) for partial matches. Often, MATCH is combined with the INDEX function to retrieve a value at a matched position."),t.qZA(),t.TgZ(5,"h2"),t._uU(6,"Purpose"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"Get the position of an item in an array"),t.qZA(),t.TgZ(9,"h2"),t._uU(10,"Return value "),t.qZA(),t.TgZ(11,"p"),t._uU(12,"A number representing a position in lookup_array."),t.qZA(),t.TgZ(13,"h2"),t._uU(14,"Syntax"),t.qZA(),t.TgZ(15,"h3",9),t._uU(16," = "),t.TgZ(17,"span",10),t._uU(18,"MATCH"),t.qZA(),t.TgZ(19,"span",11),t._uU(20,"("),t.qZA(),t.TgZ(21,"span",12),t._uU(22,"lookup_value"),t.qZA(),t._uU(23,", "),t.TgZ(24,"span",12),t._uU(25,"lookup_array"),t.qZA(),t._uU(26,", [match_lookup] "),t.TgZ(27,"span",11),t._uU(28,")"),t.qZA(),t.qZA(),t.TgZ(29,"h2"),t._uU(30,"Arguments "),t.qZA(),t.TgZ(31,"dl"),t.TgZ(32,"dt"),t._uU(33,"lookup_value "),t.qZA(),t.TgZ(34,"dd"),t._uU(35,"- The value to match in lookup_array."),t.qZA(),t.TgZ(36,"dt"),t._uU(37,"lookup_array "),t.qZA(),t.TgZ(38,"dd"),t._uU(39,"- A range of cells or an array reference."),t.qZA(),t.TgZ(40,"dt"),t._uU(41,"match_type - "),t.qZA(),t.TgZ(42,"dd"),t._uU(43,"- The column in the table from which to retrieve a value."),t.qZA(),t.TgZ(44,"dt"),t._uU(45,"range_lookup"),t.qZA(),t.TgZ(46,"dd"),t._uU(47,"-[optional] TRUE = exact or next smallest (default), 0 = exact match, -1 = exact or next largest"),t.qZA(),t.qZA(),t.qZA())}const y=[{path:"",component:(()=>{class i{constructor(u){this.messageService=u}ngOnInit(){}onTabOpen(u){this.messageService.add({key:"myKey1",severity:"info",summary:"VENV Explaining",detail:"Function: "+["VLOOKUP","MATCH"][u.index]})}onReject(){this.messageService.clear()}}return i.\u0275fac=function(u){return new(u||i)(t.Y36(c.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-msexcel-basic-lookup-function"]],features:[t._Bn([c.ez])],decls:10,vars:1,consts:[["position","top-center","key","myKey1",3,"baseZIndex","onClose"],["pTemplate","message"],["data-aos","fade-right"],[3,"onOpen"],["pTemplate","header"],["pTemplate","content"],[2,"text-align","center"],[2,"color","#3804a0"],[1,"accordion-body"],[1,"function-prototype"],[1,"function-name"],[1,"bracket"],[1,"required-parameter"]],template:function(u,M){1&u&&(t.TgZ(0,"p-toast",0),t.NdJ("onClose",function(){return M.onReject()}),t.YNc(1,d,5,2,"ng-template",1),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"p-accordion",3),t.NdJ("onOpen",function(r){return M.onTabOpen(r)}),t.TgZ(4,"p-accordionTab"),t.YNc(5,o,2,0,"ng-template",4),t.YNc(6,g,51,0,"ng-template",5),t.qZA(),t.TgZ(7,"p-accordionTab"),t.YNc(8,h,2,0,"ng-template",4),t.YNc(9,v,48,0,"ng-template",5),t.qZA(),t.qZA(),t.qZA()),2&u&&t.Q6J("baseZIndex",5e3)},directives:[l.FN,c.jx,Z.UQ,Z.US],styles:[".function-prototype[_ngcontent-%COMP%]{color:gray}.required-parameter[_ngcontent-%COMP%]{color:#015987}.function-name[_ngcontent-%COMP%]{color:#8a2be2}.bracket[_ngcontent-%COMP%]{color:#191970}.accordion-body[_ngcontent-%COMP%]{background-color:#e9ecef;padding:5px;max-width:30vw;border-radius:20px}.p-accordion[_ngcontent-%COMP%]   .p-accordion-header[_ngcontent-%COMP%]   .p-accordion-header-link[_ngcontent-%COMP%]{padding:1rem;border:1px solid #dee2e6;color:#495057;background:#13497e!important;font-weight:600;border-radius:3px;transition:box-shadow .2s}"]}),i})()}];let F=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),i})();var _=n(4297),C=n(7376),b=n(422),U=n(845);let q=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[e.ez,F,Z.fx,l.EV,U.hJ,b.L,C.x,_.d]]}),i})()},1815:(T,p,n)=>{n.r(p),n.d(p,{MsexcelGeneralFunctionModule:()=>q});var e=n(9808),a=n(4521),c=n(9783),t=n(5e3),l=n(7773),Z=n(3787);function d(i,f){if(1&i&&(t.TgZ(0,"div",6),t.TgZ(1,"h3"),t._uU(2),t.qZA(),t.TgZ(3,"p"),t._uU(4),t.qZA(),t.qZA()),2&i){const u=f.$implicit;t.xp6(2),t.Oqu(u.summary),t.xp6(2),t.Oqu(u.detail)}}function o(i,f){1&i&&(t.TgZ(0,"div",7),t._uU(1,"IF Function"),t.qZA())}function g(i,f){1&i&&(t.TgZ(0,"div",8),t.TgZ(1,"h2"),t._uU(2,"Summary"),t.qZA(),t.TgZ(3,"p"),t._uU(4,'The IF function runs a logical test and returns one value for a TRUE result, and another for a FALSE result. For example, to "pass" scores above 70: =IF(A1>70,"Pass","Fail"). More than one condition can be tested by nesting IF functions. The IF function can be combined with logical functions like AND and OR to extend the logical test.'),t.qZA(),t.TgZ(5,"h2"),t._uU(6,"Purpose"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"Test for a specific condition"),t.qZA(),t.TgZ(9,"h2"),t._uU(10,"Return value "),t.qZA(),t.TgZ(11,"p"),t._uU(12,"The values you supply for TRUE or FALSE"),t.qZA(),t.TgZ(13,"h2"),t._uU(14,"Syntax"),t.qZA(),t.TgZ(15,"h3",9),t._uU(16," = "),t.TgZ(17,"span",10),t._uU(18,"IF"),t.qZA(),t.TgZ(19,"span",11),t._uU(20,"("),t.qZA(),t.TgZ(21,"span",12),t._uU(22,"logical_test"),t.qZA(),t._uU(23,", [value_if_true], [value_if_false] "),t.TgZ(24,"span",11),t._uU(25,")"),t.qZA(),t.qZA(),t.TgZ(26,"h2"),t._uU(27,"Arguments "),t.qZA(),t.TgZ(28,"dl"),t.TgZ(29,"dt"),t._uU(30,"logical_test"),t.qZA(),t.TgZ(31,"dd"),t._uU(32,"-A value or logical expression that can be evaluated as TRUE or FALSE."),t.qZA(),t.TgZ(33,"dt"),t._uU(34,"value_if_true"),t.qZA(),t.TgZ(35,"dd"),t._uU(36,"- [optional] The value to return when logical_test evaluates to TRUE."),t.qZA(),t.TgZ(37,"dt"),t._uU(38,"value_if_false "),t.qZA(),t.TgZ(39,"dd"),t._uU(40,"- [optional] The value to return when logical_test evaluates to FALSE."),t.qZA(),t.qZA(),t.qZA())}function h(i,f){1&i&&(t.TgZ(0,"div",7),t._uU(1,"COUNTIF Function"),t.qZA())}function v(i,f){1&i&&(t.TgZ(0,"div",8),t.TgZ(1,"h2"),t._uU(2,"Summary"),t.qZA(),t.TgZ(3,"p"),t._uU(4,"COUNTIF is an Excel function to count cells in a range that meet a single condition. COUNTIF can be used to count cells that contain dates, numbers, and text. The criteria used in COUNTIF supports logical operators (>,<,<>,=) and wildcards (*,?) for partial matching."),t.qZA(),t.TgZ(5,"h2"),t._uU(6,"Purpose"),t.qZA(),t.TgZ(7,"p"),t._uU(8,"Count cells that match criteria"),t.qZA(),t.TgZ(9,"h2"),t._uU(10,"Return value "),t.qZA(),t.TgZ(11,"p"),t._uU(12,"A number representing cells counted."),t.qZA(),t.TgZ(13,"h2"),t._uU(14,"Syntax"),t.qZA(),t.TgZ(15,"h3",9),t._uU(16," = "),t.TgZ(17,"span",10),t._uU(18,"COUNTIF"),t.qZA(),t.TgZ(19,"span",11),t._uU(20,"("),t.qZA(),t.TgZ(21,"span",12),t._uU(22,"range"),t.qZA(),t._uU(23,", "),t.TgZ(24,"span",12),t._uU(25,"criteria"),t.qZA(),t.TgZ(26,"span",11),t._uU(27,")"),t.qZA(),t.qZA(),t.TgZ(28,"h2"),t._uU(29,"Arguments "),t.qZA(),t.TgZ(30,"dl"),t.TgZ(31,"dt"),t._uU(32,"range"),t.qZA(),t.TgZ(33,"dd"),t._uU(34,"-The range of cells to count."),t.qZA(),t.TgZ(35,"dt"),t._uU(36,"criteria "),t.qZA(),t.TgZ(37,"dd"),t._uU(38,"- The criteria that controls which cells should be counted."),t.qZA(),t.qZA(),t.qZA())}const y=[{path:"",component:(()=>{class i{constructor(u){this.messageService=u}ngOnInit(){}onTabOpen(u){this.messageService.add({key:"myKey1",severity:"info",summary:"VENV Explaining",detail:"Function: "+["IF Function","COUNTIF Function"][u.index]})}onReject(){this.messageService.clear()}}return i.\u0275fac=function(u){return new(u||i)(t.Y36(c.ez))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-msexcel-general-function"]],features:[t._Bn([c.ez])],decls:10,vars:1,consts:[["position","top-center","key","myKey1",3,"baseZIndex","onClose"],["pTemplate","message"],["data-aos","fade-right"],[3,"onOpen"],["pTemplate","header"],["pTemplate","content"],[2,"text-align","center"],[2,"color","#3804a0"],[1,"accordion-body"],[1,"function-prototype"],[1,"function-name"],[1,"bracket"],[1,"required-parameter"]],template:function(u,M){1&u&&(t.TgZ(0,"p-toast",0),t.NdJ("onClose",function(){return M.onReject()}),t.YNc(1,d,5,2,"ng-template",1),t.qZA(),t.TgZ(2,"div",2),t.TgZ(3,"p-accordion",3),t.NdJ("onOpen",function(r){return M.onTabOpen(r)}),t.TgZ(4,"p-accordionTab"),t.YNc(5,o,2,0,"ng-template",4),t.YNc(6,g,41,0,"ng-template",5),t.qZA(),t.TgZ(7,"p-accordionTab"),t.YNc(8,h,2,0,"ng-template",4),t.YNc(9,v,39,0,"ng-template",5),t.qZA(),t.qZA(),t.qZA()),2&u&&t.Q6J("baseZIndex",5e3)},directives:[l.FN,c.jx,Z.UQ,Z.US],styles:[".function-prototype[_ngcontent-%COMP%]{color:gray}.required-parameter[_ngcontent-%COMP%]{color:#015987}.function-name[_ngcontent-%COMP%]{color:#8a2be2}.bracket[_ngcontent-%COMP%]{color:#191970}.accordion-body[_ngcontent-%COMP%]{background-color:#e9ecef;padding:5px;max-width:30vw;border-radius:20px}.p-accordion[_ngcontent-%COMP%]   .p-accordion-header[_ngcontent-%COMP%]   .p-accordion-header-link[_ngcontent-%COMP%]{padding:1rem;border:1px solid #dee2e6;color:#495057;background:#13497e!important;font-weight:600;border-radius:3px;transition:box-shadow .2s}"]}),i})()}];let F=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[a.Bz.forChild(y)],a.Bz]}),i})();var _=n(845),C=n(422),b=n(7376),U=n(4297);let q=(()=>{class i{}return i.\u0275fac=function(u){return new(u||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[e.ez,F,Z.fx,l.EV,_.hJ,C.L,b.x,U.d]]}),i})()},4238:(T,p,n)=>{n.r(p),n.d(p,{CourseContentExcelRoutingModule:()=>Z});var e=n(4521),a=n(5e3),c=n(3787);const l=[{path:"",component:(()=>{class d{constructor(){this.activeState=[!0,!1,!1]}ngOnInit(){}}return d.\u0275fac=function(g){return new(g||d)},d.\u0275cmp=a.Xpm({type:d,selectors:[["app-course-content-excel"]],decls:11,vars:1,consts:[["data-aos","fade-right"],["header","Header I",3,"selected"],["header","Header II"],["header","Header III"]],template:function(g,h){1&g&&(a.TgZ(0,"div",0),a.TgZ(1,"p-accordion"),a.TgZ(2,"p-accordionTab",1),a.TgZ(3,"p"),a._uU(4,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."),a.qZA(),a.qZA(),a.TgZ(5,"p-accordionTab",2),a.TgZ(6,"p"),a._uU(7,"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Consectetur, adipisci velit, sed quia non numquam eius modi."),a.qZA(),a.qZA(),a.TgZ(8,"p-accordionTab",3),a.TgZ(9,"p"),a._uU(10,"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus."),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&g&&(a.xp6(2),a.Q6J("selected",!0))},directives:[c.UQ,c.US],styles:[".ui-accordion[_ngcontent-%COMP%]   .ui-accordion-content[_ngcontent-%COMP%]{background:#de8282!important}"]}),d})()}];let Z=(()=>{class d{}return d.\u0275fac=function(g){return new(g||d)},d.\u0275mod=a.oAB({type:d}),d.\u0275inj=a.cJS({imports:[[e.Bz.forChild(l)],e.Bz]}),d})()},5866:(T,p,n)=>{n.d(p,{F:()=>a});var e=n(5e3);let a=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-nor-based-flip-flop"]],decls:29,vars:0,consts:[[1,"d-flex","flex-row","bd-highlight","mb-3"],["data-aos","fade-left","data-aos-duration","4000",1,"card",2,"background-color","#d9d8d8"],["src","assets/tutorial/flipflop/nor-based-flip-flop.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"],[1,"card-body"],[1,"card-text","text-black"],["src","assets/tutorial/flipflop/nor-based-flip-flop-table.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"],[2,"background-color","#0081c2","align-self","center"],["src","assets/tutorial/flipflop/nor-based-clocked-flip-flop.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"]],template:function(l,Z){1&l&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._UZ(3,"img",2),e.TgZ(4,"div",3),e.TgZ(5,"p",4),e._uU(6," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"div",1),e._UZ(9,"img",5),e.TgZ(10,"div",3),e.TgZ(11,"p",4),e._uU(12," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(13,"hr"),e.TgZ(14,"div",0),e.TgZ(15,"div"),e.TgZ(16,"div",1),e.TgZ(17,"h1",6),e._uU(18,"Nor Based Clocked Flip-Flop"),e.qZA(),e._UZ(19,"img",7),e.TgZ(20,"div",3),e.TgZ(21,"p",4),e._uU(22," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(23,"div"),e.TgZ(24,"div",1),e._UZ(25,"img",5),e.TgZ(26,"div",3),e.TgZ(27,"p",4),e._uU(28," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())},styles:[".filter-black[_ngcontent-%COMP%]{filter:brightness(20%)}@keyframes haunted{0%{filter:brightness(20%)}48%{filter:brightness(20%)}50%{filter:sepia(1) contrast(2) brightness(200%)}96%{filter:brightness(400%)}}"]}),c})()},1845:(T,p,n)=>{n.r(p),n.d(p,{NorBasedFlipFlopModule:()=>d});var e=n(9808),a=n(4521),c=n(5866),t=n(5e3);const l=[{path:"",component:c.F}];let Z=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[e.ez,Z]]}),o})()},4148:(T,p,n)=>{n.d(p,{U:()=>a});var e=n(5e3);let a=(()=>{class c{constructor(){}ngOnInit(){}}return c.\u0275fac=function(l){return new(l||c)},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-nor-based-jkflip-flop"]],decls:13,vars:0,consts:[[1,"d-flex","flex-row","bd-highlight","mb-3"],["data-aos","fade-left","data-aos-duration","4000",1,"card",2,"background-color","#d9d8d8"],["src","assets/tutorial/flipflop/nor-based-clocked-jk-flip-flop.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"],[1,"card-body"],[1,"card-text","text-black"],["src","assets/tutorial/flipflop/nor-based-clocked-jk-flip-flop-table.svg","alt","...",1,"card-img-top","filter-black",2,"margin-left","10px","width","40vw"]],template:function(l,Z){1&l&&(e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"div",1),e._UZ(3,"img",2),e.TgZ(4,"div",3),e.TgZ(5,"p",4),e._uU(6," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(7,"div"),e.TgZ(8,"div",1),e._UZ(9,"img",5),e.TgZ(10,"div",3),e.TgZ(11,"p",4),e._uU(12," Flip Flop is a memory element which is capable of storing one bit of information and it is used in clocked sequential circuits. "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA())},styles:[".filter-black[_ngcontent-%COMP%]{filter:brightness(20%)}"]}),c})()},6509:(T,p,n)=>{n.r(p),n.d(p,{NorBasedJKFlipFlopModule:()=>d});var e=n(9808),a=n(4521),c=n(4148),t=n(5e3);const l=[{path:"",component:c.U}];let Z=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[a.Bz.forChild(l)],a.Bz]}),o})(),d=(()=>{class o{}return o.\u0275fac=function(h){return new(h||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[e.ez,Z]]}),o})()},9224:(T,p,n)=>{n.d(p,{a8:()=>f,dn:()=>h,QW:()=>A,vP:()=>C,$j:()=>O,n5:()=>v,C1:()=>M});var e=n(5e3),a=n(6360),c=n(508);const t=["*",[["mat-card-footer"]]],l=["*","mat-card-footer"],o=[[["mat-card-title"],["mat-card-subtitle"],["","mat-card-title",""],["","mat-card-subtitle",""],["","matCardTitle",""],["","matCardSubtitle",""]],[["img"]],"*"],g=["mat-card-title, mat-card-subtitle,\n      [mat-card-title], [mat-card-subtitle],\n      [matCardTitle], [matCardSubtitle]","img","*"];let h=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275dir=e.lG2({type:r,selectors:[["mat-card-content"],["","mat-card-content",""],["","matCardContent",""]],hostAttrs:[1,"mat-card-content"]}),r})(),v=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275dir=e.lG2({type:r,selectors:[["mat-card-title"],["","mat-card-title",""],["","matCardTitle",""]],hostAttrs:[1,"mat-card-title"]}),r})(),O=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275dir=e.lG2({type:r,selectors:[["mat-card-subtitle"],["","mat-card-subtitle",""],["","matCardSubtitle",""]],hostAttrs:[1,"mat-card-subtitle"]}),r})(),C=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275dir=e.lG2({type:r,selectors:[["","mat-card-sm-image",""],["","matCardImageSmall",""]],hostAttrs:[1,"mat-card-sm-image"]}),r})(),f=(()=>{class r{constructor(m){this._animationMode=m}}return r.\u0275fac=function(m){return new(m||r)(e.Y36(a.Qb,8))},r.\u0275cmp=e.Xpm({type:r,selectors:[["mat-card"]],hostAttrs:[1,"mat-card","mat-focus-indicator"],hostVars:2,hostBindings:function(m,x){2&m&&e.ekj("_mat-animation-noopable","NoopAnimations"===x._animationMode)},exportAs:["matCard"],ngContentSelectors:l,decls:2,vars:0,template:function(m,x){1&m&&(e.F$t(t),e.Hsn(0),e.Hsn(1,1))},styles:[".mat-card{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);display:block;position:relative;padding:16px;border-radius:4px}._mat-animation-noopable.mat-card{transition:none;animation:none}.mat-card .mat-divider-horizontal{position:absolute;left:0;width:100%}[dir=rtl] .mat-card .mat-divider-horizontal{left:auto;right:0}.mat-card .mat-divider-horizontal.mat-divider-inset{position:static;margin:0}[dir=rtl] .mat-card .mat-divider-horizontal.mat-divider-inset{margin-right:0}.cdk-high-contrast-active .mat-card{outline:solid 1px}.mat-card-actions,.mat-card-subtitle,.mat-card-content{display:block;margin-bottom:16px}.mat-card-title{display:block;margin-bottom:8px}.mat-card-actions{margin-left:-8px;margin-right:-8px;padding:8px 0}.mat-card-actions-align-end{display:flex;justify-content:flex-end}.mat-card-image{width:calc(100% + 32px);margin:0 -16px 16px -16px;display:block;overflow:hidden}.mat-card-image img{width:100%}.mat-card-footer{display:block;margin:0 -16px -16px -16px}.mat-card-actions .mat-button,.mat-card-actions .mat-raised-button,.mat-card-actions .mat-stroked-button{margin:0 8px}.mat-card-header{display:flex;flex-direction:row}.mat-card-header .mat-card-title{margin-bottom:12px}.mat-card-header-text{margin:0 16px}.mat-card-avatar{height:40px;width:40px;border-radius:50%;flex-shrink:0;object-fit:cover}.mat-card-title-group{display:flex;justify-content:space-between}.mat-card-sm-image{width:80px;height:80px}.mat-card-md-image{width:112px;height:112px}.mat-card-lg-image{width:152px;height:152px}.mat-card-xl-image{width:240px;height:240px;margin:-8px}.mat-card-title-group>.mat-card-xl-image{margin:-8px 0 8px}@media(max-width: 599px){.mat-card-title-group{margin:0}.mat-card-xl-image{margin-left:0;margin-right:0}}.mat-card>:first-child,.mat-card-content>:first-child{margin-top:0}.mat-card>:last-child:not(.mat-card-footer),.mat-card-content>:last-child:not(.mat-card-footer){margin-bottom:0}.mat-card-image:first-child{margin-top:-16px;border-top-left-radius:inherit;border-top-right-radius:inherit}.mat-card>.mat-card-actions:last-child{margin-bottom:-8px;padding-bottom:0}.mat-card-actions:not(.mat-card-actions-align-end) .mat-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-raised-button:first-child,.mat-card-actions:not(.mat-card-actions-align-end) .mat-stroked-button:first-child{margin-left:0;margin-right:0}.mat-card-actions-align-end .mat-button:last-child,.mat-card-actions-align-end .mat-raised-button:last-child,.mat-card-actions-align-end .mat-stroked-button:last-child{margin-left:0;margin-right:0}.mat-card-title:not(:first-child),.mat-card-subtitle:not(:first-child){margin-top:-4px}.mat-card-header .mat-card-subtitle:not(:first-child){margin-top:-8px}.mat-card>.mat-card-xl-image:first-child{margin-top:-8px}.mat-card>.mat-card-xl-image:last-child{margin-bottom:-8px}\n"],encapsulation:2,changeDetection:0}),r})(),M=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275cmp=e.Xpm({type:r,selectors:[["mat-card-title-group"]],hostAttrs:[1,"mat-card-title-group"],ngContentSelectors:g,decls:4,vars:0,template:function(m,x){1&m&&(e.F$t(o),e.TgZ(0,"div"),e.Hsn(1),e.qZA(),e.Hsn(2,1),e.Hsn(3,2))},encapsulation:2,changeDetection:0}),r})(),A=(()=>{class r{}return r.\u0275fac=function(m){return new(m||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[[c.BQ],c.BQ]}),r})()}}]);