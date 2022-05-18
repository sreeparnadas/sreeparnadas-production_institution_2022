"use strict";(self.webpackChunkadminDesign=self.webpackChunkadminDesign||[]).push([[388],{4388:(P,f,i)=>{i.r(f),i.d(f,{StudentCourseRegistrationModule:()=>z});var Z=i(9808),p=i(2653),T=i(845),A=i(7773),h=i(4376),n=i(3075),C=i(7531),g=i(6856),S=i(508),v=i(9114),q=i(5315),b=i(4036),_=i(4521),d=i(9783),t=i(5e3),x=i(2316),I=i(4339),R=i(5620),m=i(7322);function U(e,s){1&e&&(t.TgZ(0,"mat-error",44),t._uU(1,"Joinig is required"),t.qZA())}function N(e,s){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,U,2,0,"mat-error",43),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.studentToCourseFormGroup.controls.joining_date.errors.required)}}function D(e,s){1&e&&(t.TgZ(0,"mat-error",44),t._uU(1,"Effective is required"),t.qZA())}function y(e,s){if(1&e&&(t.TgZ(0,"div"),t.YNc(1,D,2,0,"mat-error",43),t.qZA()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngIf",o.studentToCourseFormGroup.controls.effective_date.errors.required)}}function F(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){return t.CHM(o),t.oxw().saveStudentToCourse()}),t.TgZ(1,"i",45),t._uU(2," Save "),t.qZA(),t.qZA()}}function w(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"button",27),t.NdJ("click",function(){return t.CHM(o),t.oxw().updateStudentToCourse()}),t.TgZ(1,"i",45),t._uU(2," Update "),t.qZA(),t.qZA()}}function J(e,s){1&e&&(t.TgZ(0,"h3"),t._uU(1,"Header Content"),t.qZA())}function M(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"button",46),t.NdJ("click",function(){return t.CHM(o),t.oxw(),t.MAs(63).reject()}),t.qZA(),t.TgZ(1,"button",47),t.NdJ("click",function(){return t.CHM(o),t.oxw(),t.MAs(63).accept()}),t.qZA()}}function k(e,s){1&e&&(t.TgZ(0,"tr"),t.TgZ(1,"th"),t._uU(2,"ID"),t.qZA(),t.TgZ(3,"th",48),t._uU(4,"Student Name "),t._UZ(5,"p-sortIcon",49),t.qZA(),t.TgZ(6,"th",50),t._uU(7,"Course Name "),t._UZ(8,"p-sortIcon",51),t.qZA(),t.TgZ(9,"th",52),t._uU(10,"Base Fee "),t._UZ(11,"p-sortIcon",53),t.qZA(),t.TgZ(12,"th",54),t._uU(13,"Edit "),t._UZ(14,"p-sortIcon",55),t.qZA(),t.TgZ(15,"th",56),t._uU(16,"Delete "),t._UZ(17,"p-sortIcon",57),t.qZA(),t.qZA())}function j(e,s){if(1&e){const o=t.EpF();t.TgZ(0,"tr"),t.TgZ(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t.TgZ(10,"p-button",58),t.NdJ("click",function(){return t.CHM(o),t.oxw().editStudentToCourse()}),t.qZA(),t.qZA(),t.TgZ(11,"td"),t.TgZ(12,"p-button",59),t.NdJ("click",function(){return t.CHM(o),t.oxw().deleteStudentToCourse()}),t.qZA(),t.qZA(),t.qZA()}if(2&e){const o=s.$implicit;t.xp6(2),t.Oqu(o.id),t.xp6(2),t.Oqu(o.ledger_name),t.xp6(2),t.Oqu(o.full_name),t.xp6(2),t.Oqu(o.base_fee)}}function Q(e,s){1&e&&t._UZ(0,"p-button",60)}function Y(e,s){if(1&e&&(t.TgZ(0,"div",61),t.TgZ(1,"pre"),t._uU(2),t.ALo(3,"json"),t.qZA(),t.TgZ(4,"pre"),t._uU(5),t.ALo(6,"json"),t.qZA(),t.TgZ(7,"pre"),t._uU(8),t.ALo(9,"json"),t.qZA(),t.TgZ(10,"pre"),t._uU(11),t.ALo(12,"json"),t.qZA(),t.qZA()),2&e){const o=t.oxw();t.xp6(2),t.hij("    students = ",t.lcZ(3,4,o.students),"\n  "),t.xp6(3),t.hij("    durationTypes = ",t.lcZ(6,6,o.durationTypes),"\n  "),t.xp6(3),t.hij("    courses = ",t.lcZ(9,8,o.courses),"\n  "),t.xp6(3),t.hij("    save code = ",t.lcZ(12,10,o.studentTocourseData),"\n  ")}}const G=function(){return{width:"30vw"}},E=function(){return[5,10,25,50]},L=function(){return["id","ledger_id","course_id","base_fee"]},H=[{path:"",component:(()=>{class e{constructor(o,r,u,a,l,B){this.studentToCourseService=o,this.studentService=r,this.activatedRoute=u,this.confirmationService=a,this.messageService=l,this.commonService=B,this.isShown=!1,this.students=[],this.courses=[],this.durationTypes=[],this.studentTocourses=[],this.ledger_id=[],this.course_id=[],this.studentTocourseData={},this.studentToCourseFormGroup=new n.cw({ledger_id:new n.NI(1,[n.kI.required]),course_id:new n.NI(1,[n.kI.required]),base_fee:new n.NI(null,[n.kI.required]),discount_allowed:new n.NI(null,[n.kI.required]),joining_date:new n.NI(null,[n.kI.required]),effective_date:new n.NI(null,[n.kI.required]),actual_course_duration:new n.NI(null,[n.kI.required]),duration_type_id:new n.NI(1,[n.kI.required])}),this.cols=[{field:"id",header:"Student To Course ID",customExportHeader:"Student To Course ID"},{field:"ledger_id"},{field:"course_id"},{field:"base_fee"}],this.activatedRoute.data.subscribe(c=>{console.log(c),this.students=c.studentCourseRegistrationResolverData.students.data,this.durationTypes=c.studentCourseRegistrationResolverData.durationTypes.data,this.courses=c.studentCourseRegistrationResolverData.courses.data,this.studentTocourses=c.studentCourseRegistrationResolverData.studentTocourses.data,console.log("studentToCourse:",this.studentTocourses)})}ngOnInit(){this.studentService.getStudentUpdateListener().subscribe(o=>{this.students=o,console.log("Student list:",this.students)}),this.ledger_id=[{value:1,name:"Nanda Gopal Sutradhar"},{value:2,name:"Sukanta HUi"}],this.course_id=[{value:1,name:"CCIT"},{value:2,name:"DCA"}]}setEffectiveSQL(o){this.studentToCourseFormGroup.patchValue({effective_date:this.commonService.getSQLDate(o)})}setJoiningSQL(o){this.studentToCourseFormGroup.patchValue({joining_date:this.commonService.getSQLDate(o)})}saveStudentToCourse(){this.confirmationService.confirm({message:"Do you want to Save this record?",header:"Delete Confirmation",icon:"pi pi-info-circle",accept:()=>{this.studentTocourseData.studentId=this.studentToCourseFormGroup.value.ledger_id,this.studentTocourseData.courseId=this.studentToCourseFormGroup.value.course_id,this.studentTocourseData.baseFee=this.studentToCourseFormGroup.value.base_fee,this.studentTocourseData.discountAllowed=this.studentToCourseFormGroup.value.discount_allowed,this.studentTocourseData.joiningDate=this.studentToCourseFormGroup.value.joining_date,this.studentTocourseData.effectiveDate=this.studentToCourseFormGroup.value.effective_date,this.studentTocourseData.actual_course_duration=this.studentToCourseFormGroup.value.actual_course_duration,this.studentTocourseData.duration_type_id=this.studentToCourseFormGroup.value.duration_type_id,this.studentTocourseData.isStarted=1,this.studentToCourseService.saveStudentToCourse(this.studentTocourseData).subscribe(o=>{!0===o.status&&this.showSuccess("Record added successfully")},o=>{this.showErrorMessage=!0,this.errorMessage=o.message,setTimeout(()=>{this.showErrorMessage=!1},2e4),this.showError(o.statusText)})},reject:()=>{this.msgs=[{severity:"info",summary:"Rejected",detail:"You have rejected"}]}})}editStudentToCourse(){}deleteStudentToCourse(){}showError(o){throw new Error("Method not implemented.")}showSuccess(o){throw new Error("Method not implemented.")}updateStudentToCourse(){}clearStudentToCourse(){}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(x.p),t.Y36(I.V),t.Y36(_.gz),t.Y36(d.YP),t.Y36(d.ez),t.Y36(R.v))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-student-course-registration"]],features:[t._Bn([d.YP,d.ez])],decls:87,vars:28,consts:[[1,"d-flex","bd-highlight","mb-3",2,"height","200vh"],[1,"p-2","bd-highlight"],[1,"card"],[1,"card-header","p-3","mt-2"],[2,"color","#1e293b","font-size","16px"],[1,"card-body","student-to-course-form"],[3,"formGroup"],[1,"form-group"],[1,"p-2","col-8","bd-highlight"],["fxFlex","100","bindLabel","studentName","bindValue","studentId","appendTo","body","formControlName","ledger_id","placeholder","Student Name",1,"custom",3,"items"],["fxFlex","100","bindLabel","fullName","bindValue","courseId","appendTo","body","formControlName","course_id","placeholder","Course Name",1,"custom",3,"items"],[1,"d-flex","flex-row","bd-highlight","mb-3"],[2,"width","100%"],["matInput","","formControlName","base_fee","placeholder","Fees","required",""],[1,"p-2","col-4","bd-highlight"],["matInput","","formControlName","discount_allowed","placeholder","Discount","required",""],["matInput","","formControlName","joining_date",1,"col-9",3,"matDatepicker","dateInput"],["ref",""],[4,"ngIf"],["matSuffix","",3,"for"],["joining_date",""],["matInput","","formControlName","effective_date",1,"col-9",3,"matDatepicker","dateInput"],["effective_date",""],["matInput","","formControlName","actual_course_duration","placeholder","100","required",""],[1,"p-2","col-4","bd-highlight",2,"height","40%"],["bindLabel","durationName","bindValue","durationTypeId","formControlName","duration_type_id","autofocus","","appendTo","body","placeholder","Duration Type",1,"custom",3,"items"],["align","right"],["pButton","",3,"click"],[1,"bi","bi-clear",2,"font-size","1rem"],["pButton","",3,"click",4,"ngIf"],["header","Confirmation","icon","pi pi-exclamation-triangle",3,"transitionOptions"],["cd",""],["pTemplate","header"],["pTemplate","footer"],[1,"card-header"],[1,"d-flex","bd-highlight","mb-3"],[2,"color","#1e293b"],["dataKey","id","responsiveLayout","scroll","currentPageReportTemplate","Showing {first} to {last} of {totalRecords} entries","styleClass","p-datatable-striped",3,"value","columns","paginator","rows","showCurrentPageReport","rowsPerPageOptions","globalFilterFields"],["dt",""],["pTemplate","body"],["pTemplate","paginatorleft"],[1,"p-2","bd-highlight","col-3",2,"background-color","#e7e709"],["id","developer-div",4,"ngIf"],["class","text-right",4,"ngIf"],[1,"text-right"],[1,"bi","bi-save",2,"font-size","1rem"],["type","button","pButton","","icon","pi pi-times","label","No",3,"click"],["type","button","pButton","","icon","pi pi-check","label","Yes",3,"click"],["pSortableColumn","ledger_id"],["field","ledger_name"],["pSortableColumn","course_id"],["field","full_name"],["pSortableColumn","base_fee"],["field","base_fee"],["pSortableColumn","edit"],["field","edit"],["pSortableColumn","delete"],["field","delete"],["type","button","icon","pi pi-pencil","styleClass","p-button-text",3,"click"],["type","button","icon","pi pi-trash","styleClass","p-button-text",3,"click"],["type","button","icon","pi pi-plus","styleClass","p-button-text"],["id","developer-div"]],template:function(o,r){if(1&o){const u=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div",1),t.TgZ(2,"div",2),t.TgZ(3,"div",3),t.TgZ(4,"p",4),t._uU(5,"Student To Course Entry Form "),t.qZA(),t.qZA(),t.TgZ(6,"div",5),t.TgZ(7,"div"),t.TgZ(8,"form",6),t.TgZ(9,"div",7),t.TgZ(10,"div",8),t._UZ(11,"ng-select",9),t.qZA(),t.TgZ(12,"div",8),t._UZ(13,"ng-select",10),t.qZA(),t.qZA(),t.TgZ(14,"div",11),t.TgZ(15,"div",8),t.TgZ(16,"mat-form-field",12),t.TgZ(17,"mat-label"),t._uU(18,"Fees"),t.qZA(),t._UZ(19,"input",13),t.qZA(),t.qZA(),t.TgZ(20,"div",14),t.TgZ(21,"mat-form-field",12),t.TgZ(22,"mat-label"),t._uU(23,"Discount Allowed"),t.qZA(),t._UZ(24,"input",15),t.qZA(),t.qZA(),t.qZA(),t.TgZ(25,"div",11),t.TgZ(26,"div",8),t.TgZ(27,"mat-form-field",12),t.TgZ(28,"mat-label"),t._uU(29,"Joinig Date"),t.qZA(),t.TgZ(30,"input",16,17),t.NdJ("dateInput",function(){t.CHM(u);const l=t.MAs(31);return r.setJoiningSQL(l.value)}),t.qZA(),t.YNc(32,N,2,1,"div",18),t._UZ(33,"mat-datepicker-toggle",19),t._UZ(34,"mat-datepicker",null,20),t.qZA(),t.qZA(),t.TgZ(36,"div",14),t.TgZ(37,"mat-form-field",12),t.TgZ(38,"mat-label"),t._uU(39,"Effective Date"),t.qZA(),t.TgZ(40,"input",21,17),t.NdJ("dateInput",function(){t.CHM(u);const l=t.MAs(31);return r.setEffectiveSQL(l.value)}),t.qZA(),t.YNc(42,y,2,1,"div",18),t._UZ(43,"mat-datepicker-toggle",19),t._UZ(44,"mat-datepicker",null,22),t.qZA(),t.qZA(),t.qZA(),t.TgZ(46,"div",7),t.TgZ(47,"div",11),t.TgZ(48,"div",8),t.TgZ(49,"mat-form-field",12),t.TgZ(50,"mat-label"),t._uU(51,"Duration:"),t.qZA(),t._UZ(52,"input",23),t.qZA(),t.qZA(),t.TgZ(53,"div",24),t._UZ(54,"ng-select",25),t.qZA(),t.qZA(),t.qZA(),t.TgZ(55,"div",26),t.TgZ(56,"button",27),t.NdJ("click",function(){return r.clearStudentToCourse()}),t.TgZ(57,"i",28),t._uU(58," Clear "),t.qZA(),t.qZA(),t._uU(59,"\xa0\xa0\xa0 "),t.YNc(60,F,3,0,"button",29),t.YNc(61,w,3,0,"button",29),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(62,"p-confirmDialog",30,31),t.YNc(64,J,2,0,"ng-template",32),t.YNc(65,M,2,0,"ng-template",33),t.qZA(),t.qZA(),t.TgZ(66,"div",1),t.TgZ(67,"div",2),t.TgZ(68,"div",34),t.TgZ(69,"div",35),t._UZ(70,"div",1),t.TgZ(71,"div",1),t.TgZ(72,"h3",36),t._uU(73,"Student To Course Details"),t.qZA(),t.TgZ(74,"p-table",37,38),t.YNc(76,k,18,0,"ng-template",32),t.YNc(77,j,13,4,"ng-template",39),t.YNc(78,Q,1,0,"ng-template",40),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(79,"div",2),t.TgZ(80,"h1"),t._uU(81,"Student List"),t.qZA(),t.TgZ(82,"div",41),t.TgZ(83,"pre"),t._uU(84,"                  "),t._uU(85,"\n                "),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.YNc(86,Y,13,12,"div",42)}if(2&o){const u=t.MAs(35),a=t.MAs(45);t.ekj("flex-column",r.commonService.getDeviceXs()),t.xp6(8),t.Q6J("formGroup",r.studentToCourseFormGroup),t.xp6(3),t.Q6J("items",r.students),t.xp6(2),t.Q6J("items",r.courses),t.xp6(17),t.Q6J("matDatepicker",u),t.xp6(2),t.Q6J("ngIf",r.studentToCourseFormGroup.controls.joining_date.errors&&r.studentToCourseFormGroup.controls.joining_date.touched),t.xp6(1),t.Q6J("for",u),t.xp6(7),t.Q6J("matDatepicker",a),t.xp6(2),t.Q6J("ngIf",r.studentToCourseFormGroup.controls.effective_date.errors&&r.studentToCourseFormGroup.controls.effective_date.touched),t.xp6(1),t.Q6J("for",a),t.xp6(11),t.Q6J("items",r.durationTypes),t.xp6(6),t.Q6J("ngIf",!r.isShown),t.xp6(1),t.Q6J("ngIf",r.isShown),t.xp6(1),t.Akn(t.DdM(25,G)),t.Q6J("transitionOptions","0.8ms"),t.xp6(12),t.Q6J("value",r.studentTocourses)("columns",r.cols)("paginator",!0)("rows",5)("showCurrentPageReport",!0)("rowsPerPageOptions",t.DdM(26,E))("globalFilterFields",t.DdM(27,L)),t.xp6(12),t.Q6J("ngIf",!0)}},directives:[n._Y,n.JL,n.sg,h.w9,n.JJ,n.u,m.KE,m.hX,C.Nt,n.Fj,n.Q7,g.hl,Z.O5,m.TO,g.nW,m.R9,g.Mq,T.Hq,v.Q,d.jx,p.iA,p.lQ,p.fz,T.zx],pipes:[Z.Ts],styles:[".student-to-course-form[_ngcontent-%COMP%]{min-height:50vh;min-width:50vh;background-color:#504e4e;background-image:linear-gradient(to right,#3d3a3a,#939391);border-radius:25px;box-shadow:0 10px 6px -6px #777}"]}),e})()}];let O=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[_.Bz.forChild(H)],_.Bz]}),e})(),z=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[Z.ez,O,h.A0,n.u5,n.UX,C.c,g.FA,S.XK,v.D,q.S,b.kW,p.U$,T.hJ,A.EV]]}),e})()}}]);