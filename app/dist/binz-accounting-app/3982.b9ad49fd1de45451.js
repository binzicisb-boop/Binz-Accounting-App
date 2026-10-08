"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[3982],{3982:(X,S,i)=>{i.r(S),i.d(S,{CashBankTransferModule:()=>Zt});var F=i(60177),p=i(89417),E=i(99077),C=i(50074),O=i(61997),j=i(94609),k=i(92314),D=i(75263),B=i(14518),l=i(97463),g=i(34262),m=i(72882),h=i(75743),T=i(10467),f=i(98808),R=i(97586),V=i(75351),et=i(95331),d=i(72036),x=i(49671),b=i(66689),t=i(54438),K=i(26297),$=i(7004),P=i(93832),U=i(39866),I=i(7180);function nt(r,u){if(1&r&&(t.j41(0,"div",12),t.EFF(1),t.k0s()),2&r){const e=t.XpG().index,a=t.XpG();t.R7$(),t.JRh(a.getAccountTypeName(e))}}function at(r,u){if(1&r){const e=t.RV6();t.j41(0,"li",13),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.selectAccount(n))}),t.j41(1,"a",14)(2,"span"),t.EFF(3),t.j41(4,"span",15),t.nrm(5,"i",16),t.k0s()()()()}if(2&r){const e=u.$implicit;t.R7$(3),t.SpI(" ",e.nameOfAccount," ")}}function rt(r,u){if(1&r&&(t.j41(0,"span"),t.DNE(1,nt,2,1,"div",10)(2,at,6,1,"li",11),t.k0s()),2&r){const e=u.$implicit;t.R7$(),t.Y8G("ngIf",e),t.R7$(),t.Y8G("ngForOf",e)}}let st=(()=>{class r{constructor(e,a,n,s,c,o,A){this.accountData=e,this.dialogRef=a,this.notificationService=n,this.dataStoreService=s,this.syncApiService=c,this.commonService=o,this.translocoService=A,this.transferAccountList=[],this.cashBankAccountList=[],this.accountListTrranslatedKey=f.DH.accountListForTranslations(),this.fetchDBData()}fetchDBData(){var e=this;this.syncApiService.fetchDbData("account",function(){var a=(0,T.A)(function*(n){var s=yield n.data;200===n.status&&!(0,d.A)(s)&&(e.cashBankAccountList=s.filter(c=>[7,11].includes(c.accountType)),e.prepareAccountList())});return function(n){return a.apply(this,arguments)}}())}ngOnInit(){}prepareAccountList(){this.transferAccountList=[],(0,x.A)(this.cashBankAccountList,e=>{[7,11].includes(e.accountType)&&((0,d.A)(this.transferAccountList[e.accountType])?this.transferAccountList[e.accountType]=[e]:this.transferAccountList[e.accountType].push(e))}),(0,d.A)(this.transferAccountList)||this.transferAccountList.map(e=>{e.map(a=>{a.nameOfAccount=(0,d.A)(this.accountListTrranslatedKey.find(n=>n.title==a.nameOfAccount))?a.nameOfAccount:this.translocoService.translate(this.accountListTrranslatedKey.find(n=>n.title==a.nameOfAccount).translated_key)})})}selectAccount(e){(0,d.A)(e)?this.notificationService.error("PLEASE_SELECT_ACCOUNT",{},!0):this.dialogRef.close({success:!0,selectAccount:e})}addAccount(){this.commonService.showDialog(et.C,{accountType:"paymentAccount"},e=>{(0,b.A)(e,"account_added")&&e.account_added&&(0,b.A)(e,"new_account_data")&&!(0,d.A)(e.new_account_data)&&this.fetchDBData()})}getAccountTypeName(e){return"Bank"==f.DH.configItem(f.DH.accountTypeList(),"id",e)?this.translocoService.translate("BANK"):(f.DH.configItem(f.DH.accountTypeList(),"id",e),this.translocoService.translate("CASH"))}closeDialog(){this.dialogRef.close({success:!1,selectAccount:null})}ngOnDestroy(){}static#t=this.\u0275fac=function(a){return new(a||r)(t.rXU(V.Vh),t.rXU(V.CP),t.rXU(K.J),t.rXU($.V),t.rXU(P.P),t.rXU(U.h),t.rXU(I.JO))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-select-account"]],decls:19,vars:10,consts:[["form","ngForm"],["mat-dialog-title","",1,"mat-dialog-title"],["type","button",1,"btn-done",2,"margin-top","-4px","float","right",3,"click"],[1,"material-icons","custom-icons"],["novalidate",""],[1,"mat-typography","mat-dialog-content"],[1,"polistban",2,"padding","12px"],[4,"ngFor","ngForOf"],["align","end",1,"mat-dialog-actions"],["type","button",1,"btn-cancel",3,"click"],["class","docs-normal",4,"ngIf"],["class","cursor-pointer lw-default-account-name",3,"click",4,"ngFor","ngForOf"],[1,"docs-normal"],[1,"cursor-pointer","lw-default-account-name",3,"click"],[1,"jurnal-a","cursor-pointer"],[1,"paypl-arrow"],[1,"float-right","mdi","mdi-chevron-right"]],template:function(a,n){if(1&a){const s=t.RV6();t.j41(0,"h2",1),t.EFF(1),t.nI1(2,"transloco"),t.j41(3,"button",2),t.bIt("click",function(){return t.eBV(s),t.Njj(n.addAccount())}),t.j41(4,"span",3),t.EFF(5,"add_circle_outline"),t.k0s(),t.EFF(6),t.nI1(7,"transloco"),t.k0s()(),t.j41(8,"form",4,0)(10,"mat-dialog-content",5)(11,"ul",6),t.DNE(12,rt,3,2,"span",7),t.k0s()(),t.j41(13,"mat-dialog-actions",8)(14,"button",9),t.bIt("click",function(){return t.eBV(s),t.Njj(n.closeDialog())}),t.j41(15,"span",3),t.EFF(16,"cancel"),t.k0s(),t.EFF(17),t.nI1(18,"transloco"),t.k0s()()()}2&a&&(t.R7$(),t.SpI(" ",t.bMT(2,4,"ACCOUNTS")," "),t.R7$(5),t.SpI(" ",t.bMT(7,6,"ADD_ACC")," "),t.R7$(6),t.Y8G("ngForOf",n.transferAccountList),t.R7$(5),t.SpI(" ",t.bMT(18,8,"CLOSE")," "))},dependencies:[F.Sq,F.bT,p.qT,p.cb,p.cV,I.Kj],styles:[".lw-default-account-name[_ngcontent-%COMP%]:hover{color:#212529;background-color:#00000013}.jurnal-a[_ngcontent-%COMP%]{color:#000}"]})}return r})();var G=i(81817),Y=i(65113),it=i(39477),H=i(4300),W=i(73807),ot=i(60578),ct=i(4922),lt=i(30768),dt=i(36725),w=i(52953);const ut=["transferAddEditForm"];let J=(()=>{class r{constructor(e,a,n,s,c,o,A,v,y,N,_,L){this.dataStoreService=e,this.commonService=a,this.router=n,this.route=s,this.settingService=c,this.notificationService=o,this.syncDbService=A,this.syncApiService=v,this.transferService=y,this.translocoService=N,this.unsyncervice=_,this.authService=L,this.actionType=this.route.snapshot.data.actionType,this.pageType=this.route.snapshot.data.pageType,this.isLoading=!1,this.uniqueKeyTransfer=generateUUID("BankCashTransfer"),this.uniqueLeaderKey=generateUUID("LeaderEntity"),this.transferDefaultDate=new p.MJ(R().format("YYYY-MM-DD")),this.editFundTransferId=this.route.snapshot.params.editTransferId,this.accountList=[],this.fundTransferList=[],this.allLedgerList=[],this.editFundTransferData={},this.transferAddEditFormData={uniqueKeyTransfer:this.uniqueKeyTransfer,uniqueLeaderKey:this.uniqueLeaderKey,transferNo:"",note:"",transferDate:f.DH.dateToTimeStamp(R().format("YYYY-MM-DD")),selectedFromAccount:null,selectedFromAccName:"",selectedToAccount:null,selectedToAccName:"",rate:0},this.selectedFromAccName="",this.selectedToAccName="",this.accountListTrranslatedKey=f.DH.accountListForTranslations(),this.orgId=this.authService.authInfo("user").orgId,this.title="add-Transfer"==this.actionType?"Cash / Bank Transfer - Binz Accounting App":"Edit Cash / Bank Transfer - Binz Accounting App",this.commonService.setSEOInfo(this.title,[{name:"description",content:"Cash / Bank Fund Transfer"},{name:"keywords",content:"Cash, Bank, Fund, Transfer, Transaction No, From, To, Date, Account, Amount"},{name:"title",content:"Cash / Bank Fund Transfer"}]),this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(M=>{(0,b.A)(M,"syncProcessComplete")&&M.syncProcessComplete&&(0,G.A)(()=>{"add-edit-transfer"==this.pageType&&this.fetchDBData()})}),this.fetchDBData()}ngOnInit(){}fetchDBData(){var e=this;return(0,T.A)(function*(){e.syncApiService.fetchMultipleDbData(["filterSettingData","filterTransactionNo","account","fundTransfer","ledger"],function(){var a=(0,T.A)(function*(n){var s=yield n.data;200===n.status&&!(0,d.A)(s)&&((0,b.A)(s,"filterSettingData")&&!(0,d.A)(s.filterSettingData)&&(e.settingData=s.filterSettingData,e.transferMinDate=R(e.settingData.bookKeepingStartDate).toDate(),e.transferMinDate=new Date(e.transferMinDate.getTime()+6e4*e.transferMinDate.getTimezoneOffset()),e.transferAddEditFormData.transferDate=e.settingData.bookKeepingStartDate>R().valueOf()?f.DH.dateToTimeStamp(R.utc(e.settingData.bookKeepingStartDate).format("YYYY-MM-DD")):f.DH.dateToTimeStamp(R().format("YYYY-MM-DD"))),(0,b.A)(s,"filterTransactionNo")&&(e.formatNameSettings=s.filterTransactionNo,e.settingFormData=e.commonService.formatTransactionNumber(e.formatNameSettings,"transferFormatName","transferFormatNo",null,"add-Transfer"==e.actionType?"add":"edit"),e.transferAddEditFormData.transferNo=e.settingFormData.transactionNumber),(0,b.A)(s,"account")&&(e.accountList=s.account),(0,b.A)(s,"fundTransfer")&&(e.fundTransferList=s.fundTransfer),(0,b.A)(s,"ledger")&&(e.allLedgerList=s.ledger),"edit-Transfer"==e.actionType&&e.prepareEditData())});return function(n){return a.apply(this,arguments)}}())})()}prepareEditData(){if(this.editFundTransferData=this.fundTransferList.find(e=>e.uniqueKeyBankCashTransferEntity===this.editFundTransferId),!(0,d.A)(this.editFundTransferData)){let e=this.accountList.find(n=>n.uniqueKeyOfAccount===this.editFundTransferData.uniqueKeyFKAccountKeyCR),a=this.accountList.find(n=>n.uniqueKeyOfAccount===this.editFundTransferData.uniqueKeyFKAccountKeyDR);this.transferAddEditFormData={uniqueKeyTransfer:this.editFundTransferData.uniqueKeyBankCashTransferEntity,uniqueLeaderKey:this.editFundTransferData.uniqueKeyLedgerEntity,transferNo:this.editFundTransferData.formatNo,note:this.editFundTransferData.narration,transferDate:this.editFundTransferData.createdDate,selectedFromAccount:(0,d.A)(e)?null:e,selectedFromAccName:(0,d.A)(e)?"":e.nameOfAccount,selectedToAccount:(0,d.A)(a)?null:a,selectedToAccName:(0,d.A)(a)?"":a.nameOfAccount,rate:this.editFundTransferData.amount},this.selectedToAccName=(0,d.A)(this.accountListTrranslatedKey.find(n=>n.title==this.transferAddEditFormData.selectedToAccName))?this.transferAddEditFormData.selectedToAccName:this.translocoService.translate(this.accountListTrranslatedKey.find(n=>n.title==this.transferAddEditFormData.selectedToAccName).translated_key),this.selectedFromAccName=(0,d.A)(this.accountListTrranslatedKey.find(n=>n.title==this.transferAddEditFormData.selectedFromAccName))?this.transferAddEditFormData.selectedFromAccName:this.translocoService.translate(this.accountListTrranslatedKey.find(n=>n.title==this.transferAddEditFormData.selectedFromAccName).translated_key)}}submit(){if(this.transferAddEditForm.form.valid&&this.transferAddEditFormData.rate>0){this.isLoading=!0;let e={},a={};"add-Transfer"===this.actionType?(e=this.transferService.changeKeysForTransferApi(this.transferAddEditFormData,1),a=e.fundTransferList[0].ledgerEntity.ledgerDetailList):"edit-Transfer"===this.actionType&&(e=this.transferService.changeKeysForTransferApi(this.transferAddEditFormData,2,this.editFundTransferData),a=e.fundTransferList[0].ledgerEntity.ledgerDetailList);let n=this.transferService.checkIsValidLedger(a);if("add-Transfer"===this.actionType){let s=this.unsyncervice.validateData(e);if(!(0,d.A)(s.unsyncRecords)&&s.entityName.includes("fundTransferList")){let c=e.fundTransferList[0],o={createdDate:e.fundTransferList[0].createdDate,entityType:"fundTransfer",orgId:this.orgId,serverUpdatedTime:e.fundTransferList[0].serverUpdatedTime,syncFlag:3,isReported:!1,uniqueKeyEntity:null,uniqueUnsyncedEntity:generateUUID("UnsyncRec"),entityObject:c,rejectedFor:2,retryFixedNum:0};this.syncApiService.addDbData("unsyncRecords",o),this.router.navigateByUrl("cash-bank-transfer"),e={}}}n?this.syncDbService.storeMultipleDataToDB(e,s=>{var c=s;this.commonService.processResponse(s,o=>{200==s.status&&(0,b.A)(c,"fundTransferList")&&!(0,d.A)(c.fundTransferList)?(0,d.A)(this.formatNameSettings)||(this.formatNameSettings.transferFormatNo=this.settingFormData.transactionNo,this.formatNameSettings.transferFormatName=this.settingFormData.transactionName,this.settingService.addDBTransactionSetting(this.formatNameSettings,A=>{let v=A.data;200==A.status&&(0,b.A)(v,"formatNameSettings")&&v.formatNameSettings?(this.isLoading=!1,"add-Transfer "===this.actionType&&this.transferAddEditForm.form.reset(),this.router.navigateByUrl("cash-bank-transfer"),this.syncDbService.syncData()):(this.isLoading=!1,this.notificationService.error("NOTIFICATION_TXT_FIVE",{},!0))})):(this.isLoading=!1,this.notificationService.error("JOURNAL_CREATION_FAILED",{},!0))})}):(this.isLoading=!1,this.commonService.openConfirm({icon:"error",type:"error",title:this.translocoService.translate("PLEASE_BALANCE_CREDIT_OR_DEBIT_AMT")}))}else{const e=this.transferAddEditForm.controls;if(e.fromAccount.invalid&&(e.fromAccount.dirty||e.fromAccount.untouched)&&e.fromAccount?.errors.required)return this.notificationService.error("PLEASE_SELECT_FROM_ACCOUNT",{},!0),!1;if(e.toAccount.invalid&&(e.toAccount.dirty||e.toAccount.untouched)&&e.toAccount?.errors.required)return this.notificationService.error("PLEASE_SELECT_TO_ACCOUNT",{},!0),!1;if(this.transferAddEditFormData.rate<=0)return this.notificationService.error("AMOUNT_CANT_BE_ZERO",{},!0),!1}}selectFromOrToAccount(e){(0,d.A)(this.accountList)?this.notificationService.error("ACCOUNT_NOT_EXIST",{},!0):this.commonService.showDialog(st,{},a=>{if((0,b.A)(a,"success")&&a.success&&(0,b.A)(a,"selectAccount")){var n=a.selectAccount;if("from-account"==e){let s=(0,d.A)(this.transferAddEditFormData.selectedToAccount)?null:this.transferAddEditFormData.selectedToAccount.uniqueKeyOfAccount;if(!(0,d.A)(s)&&s==n.uniqueKeyOfAccount)return this.notificationService.error("CANT_SELECT_SAME_ACCOUNT_TO_FUND_TRANSFER",{},!0),!1;this.transferAddEditFormData.selectedFromAccount=n,this.transferAddEditFormData.selectedFromAccName=n.nameOfAccount,this.selectedFromAccName=(0,d.A)(this.accountListTrranslatedKey.find(c=>c.title==this.transferAddEditFormData.selectedFromAccName))?this.transferAddEditFormData.selectedFromAccName:this.translocoService.translate(this.accountListTrranslatedKey.find(c=>c.title==this.transferAddEditFormData.selectedFromAccName).translated_key)}else if("to-account"==e){let s=(0,d.A)(this.transferAddEditFormData.selectedFromAccount)?null:this.transferAddEditFormData.selectedFromAccount.uniqueKeyOfAccount;if(!(0,d.A)(s)&&s==n.uniqueKeyOfAccount)return this.notificationService.error("CANT_SELECT_SAME_ACCOUNT_TO_FUND_TRANSFER",{},!0),!1;this.transferAddEditFormData.selectedToAccount=n,this.transferAddEditFormData.selectedToAccName=n.nameOfAccount,this.selectedToAccName=(0,d.A)(this.accountListTrranslatedKey.find(c=>c.title==this.transferAddEditFormData.selectedToAccName))?this.transferAddEditFormData.selectedToAccName:this.translocoService.translate(this.accountListTrranslatedKey.find(c=>c.title==this.transferAddEditFormData.selectedToAccName).translated_key)}}},{panelClass:"ng-material-dialog"})}addDateEvent(e){this.transferAddEditFormData.transferDate=f.DH.dateToTimeStamp(R(new Date(e.value)).format("YYYY-MM-DD"))}ngOnDestroy(){(0,Y.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#t=this.\u0275fac=function(a){return new(a||r)(t.rXU($.V),t.rXU(U.h),t.rXU(h.Ix),t.rXU(h.nX),t.rXU(it.q),t.rXU(K.J),t.rXU(H.P),t.rXU(P.P),t.rXU(W.w),t.rXU(I.JO),t.rXU(ot.u),t.rXU(ct.y))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-add-edit"]],viewQuery:function(a,n){if(1&a&&t.GBs(ut,5),2&a){let s;t.mGM(s=t.lsd())&&(n.transferAddEditForm=s.first)}},decls:100,vars:72,consts:[["transferAddEditForm","ngForm"],["transferDatePicker",""],[1,"content"],[1,"container-fluid"],[1,"page-title-box"],[1,"row","align-items-center"],[1,"col-sm-6"],[1,"page-title"],[1,"breadcrumb","float-right"],[1,"breadcrumb-item"],["routerLink","/dashboard"],["routerLink","/cash-bank-transfer"],[1,"breadcrumb-item","active"],["novalidate","",1,""],[1,"payment-card","card","mt-3"],[1,"card-body","py-4"],[1,"row","mb-3"],[1,"col-sm-6","pay-Cust"],[1,"form-group"],[1,"base-date-input"],[1,""],[1,"vdp-datepicker__calendar-button"],["aria-hidden","true","focusable","false","data-prefix","fas","data-icon","calendar","role","img","xmlns","http://www.w3.org/2000/svg","viewBox","0 0 448 512",1,"svg-inline--fa","fa-calendar","fa-w-14"],["fill","currentColor","d","M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z",1,""],["type","text","readonly","readonly","autocomplete","off",1,"date-field","lw-shadow-dateInput",3,"click","dateInput","min","formControl","matDatepicker"],["name","transferDate","readonly","",1,"date-field",3,"click","value"],[1,"row"],[1,"col-md-6","input-group-btn","input-group-select","m-0"],[1,"form-label"],[1,"input-group","input-group-merge",3,"click"],["type","text","name","selectedFromAccName",1,"form-control",3,"ngModelChange","placeholder","ngModel"],[1,"input-group-append"],[1,"journal-right-arrow",2,"height","33px"],[1,"mdi","mdi-chevron-right"],["type","hidden","name","fromAccount","required","",3,"ngModelChange","ngModel"],[1,"col-md-6"],["type","text","name","selectedToAccName",1,"form-control",3,"ngModelChange","placeholder","ngModel"],["type","hidden","name","toAccount","required","",3,"ngModelChange","ngModel"],["type","number","name","purchaseRate","numeric","","name","amount","numeric","",1,"form-control",3,"ngModelChange","placeholder","ngModel"],["rows","2","spellcheck","false","name","note","name","note",1,"form-control","custom-scroll","border","text-area-field","base-text-area","mt-0",2,"min-height","60px","padding","4px 6px !important",3,"ngModelChange","placeholder","ngModel"],[1,"col-sm-12","mt-3"],["routerLink","/cash-bank-transfer",1,"btn-cancel"],[1,"material-icons","custom-icons"],["type","submit",1,"btn-done",3,"click","lwLoadingBtn","loadingText","defaultBtnText"]],template:function(a,n){if(1&a){const s=t.RV6();t.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"div",5)(4,"div",6)(5,"h4",7),t.EFF(6),t.nI1(7,"transloco"),t.k0s()(),t.j41(8,"div",6)(9,"ol",8)(10,"li",9)(11,"a",10),t.EFF(12),t.nI1(13,"transloco"),t.k0s()(),t.j41(14,"li",9)(15,"a",11),t.EFF(16),t.nI1(17,"transloco"),t.k0s()(),t.j41(18,"li",12),t.EFF(19),t.nI1(20,"transloco"),t.nI1(21,"transloco"),t.k0s()()()()(),t.j41(22,"form",13,0)(24,"div",14)(25,"div",15)(26,"div",16)(27,"div",17),t.EFF(28),t.nI1(29,"transloco"),t.nrm(30,"br"),t.j41(31,"span"),t.EFF(32),t.k0s()(),t.j41(33,"div",6)(34,"div",18)(35,"div",19)(36,"div",20)(37,"span",21)(38,"span",20),t.qSk(),t.j41(39,"svg",22),t.nrm(40,"path",23),t.k0s()()(),t.joV(),t.j41(41,"input",24),t.bIt("click",function(){t.eBV(s);const o=t.sdS(45);return t.Njj(o.open())})("dateInput",function(o){return t.eBV(s),t.Njj(n.addDateEvent(o))}),t.k0s(),t.j41(42,"input",25),t.nI1(43,"dateFormat"),t.bIt("click",function(){t.eBV(s);const o=t.sdS(45);return t.Njj(o.open())}),t.k0s(),t.nrm(44,"mat-datepicker",null,1),t.k0s()()()()(),t.j41(46,"div",26)(47,"div",27)(48,"label",28),t.EFF(49),t.nI1(50,"transloco"),t.k0s(),t.j41(51,"div",18)(52,"div",29),t.bIt("click",function(){return t.eBV(s),t.Njj(n.selectFromOrToAccount("from-account"))}),t.j41(53,"input",30),t.nI1(54,"transloco"),t.mxI("ngModelChange",function(o){return t.eBV(s),t.DH7(n.selectedFromAccName,o)||(n.selectedFromAccName=o),t.Njj(o)}),t.k0s(),t.j41(55,"div",31)(56,"span",32),t.nrm(57,"i",33),t.k0s()(),t.j41(58,"input",34),t.mxI("ngModelChange",function(o){return t.eBV(s),t.DH7(n.transferAddEditFormData.selectedFromAccount,o)||(n.transferAddEditFormData.selectedFromAccount=o),t.Njj(o)}),t.k0s()()()(),t.j41(59,"div",35)(60,"label",28),t.EFF(61),t.nI1(62,"transloco"),t.k0s(),t.j41(63,"div",18)(64,"div",29),t.bIt("click",function(){return t.eBV(s),t.Njj(n.selectFromOrToAccount("to-account"))}),t.j41(65,"input",36),t.nI1(66,"transloco"),t.mxI("ngModelChange",function(o){return t.eBV(s),t.DH7(n.selectedToAccName,o)||(n.selectedToAccName=o),t.Njj(o)}),t.k0s(),t.j41(67,"div",31)(68,"span",32),t.nrm(69,"i",33),t.k0s()(),t.j41(70,"input",37),t.mxI("ngModelChange",function(o){return t.eBV(s),t.DH7(n.transferAddEditFormData.selectedToAccount,o)||(n.transferAddEditFormData.selectedToAccount=o),t.Njj(o)}),t.k0s()()()()(),t.j41(71,"div",26)(72,"div",35)(73,"label",28),t.EFF(74),t.nI1(75,"transloco"),t.k0s(),t.j41(76,"span")(77,"input",38),t.nI1(78,"transloco"),t.mxI("ngModelChange",function(o){return t.eBV(s),t.DH7(n.transferAddEditFormData.rate,o)||(n.transferAddEditFormData.rate=o),t.Njj(o)}),t.k0s()()(),t.j41(79,"div",35)(80,"label",28),t.EFF(81),t.nI1(82,"transloco"),t.k0s(),t.j41(83,"textarea",39),t.nI1(84,"transloco"),t.mxI("ngModelChange",function(o){return t.eBV(s),t.DH7(n.transferAddEditFormData.note,o)||(n.transferAddEditFormData.note=o),t.Njj(o)}),t.k0s()()(),t.j41(85,"div",40)(86,"button",41)(87,"span",42),t.EFF(88,"cancel"),t.k0s(),t.EFF(89),t.nI1(90,"transloco"),t.k0s(),t.j41(91,"button",43),t.nI1(92,"transloco"),t.nI1(93,"transloco"),t.nI1(94,"transloco"),t.bIt("click",function(){return t.eBV(s),t.Njj(n.submit())}),t.j41(95,"span",42),t.EFF(96,"check_circle"),t.k0s(),t.EFF(97),t.nI1(98,"transloco"),t.nI1(99,"transloco"),t.k0s()()()()()()()}if(2&a){const s=t.sdS(45);t.R7$(6),t.JRh(t.bMT(7,29,"CASH_BANK_TRANSFER")),t.R7$(6),t.JRh(t.bMT(13,31,"DASHBOARD")),t.R7$(4),t.JRh(t.bMT(17,33,"BANK_CASH_TRANSFER")),t.R7$(3),t.JRh("add-Transfer"===n.actionType?t.bMT(20,35,"ADD_FUND_TRANSFER"):t.bMT(21,37,"EDIT_FUND_TRANSFER")),t.R7$(9),t.SpI(" ",t.bMT(29,39,"TRANSACTION_NO")," "),t.R7$(4),t.JRh(n.transferAddEditFormData.transferNo),t.R7$(9),t.Y8G("min",n.transferMinDate)("formControl",n.transferDefaultDate)("matDatepicker",s),t.R7$(),t.FS9("value",t.i5U(43,41,n.transferAddEditFormData.transferDate,n.settingData)),t.R7$(7),t.JRh(t.bMT(50,44,"FROM")),t.R7$(4),t.FS9("placeholder",t.bMT(54,46,"SELECT_ACC")),t.R50("ngModel",n.selectedFromAccName),t.R7$(5),t.R50("ngModel",n.transferAddEditFormData.selectedFromAccount),t.R7$(3),t.JRh(t.bMT(62,48,"TO")),t.R7$(4),t.FS9("placeholder",t.bMT(66,50,"SELECT_ACC")),t.R50("ngModel",n.selectedToAccName),t.R7$(5),t.R50("ngModel",n.transferAddEditFormData.selectedToAccount),t.R7$(4),t.JRh(t.bMT(75,52,"ENTER_AMT")),t.R7$(3),t.FS9("placeholder",t.bMT(78,54,"AMT_LABEL")),t.R50("ngModel",n.transferAddEditFormData.rate),t.R7$(4),t.JRh(t.bMT(82,56,"NOTES")),t.R7$(2),t.FS9("placeholder",t.bMT(84,58,"ENTER_NOTES")),t.R50("ngModel",n.transferAddEditFormData.note),t.R7$(6),t.SpI(" ",t.bMT(90,60,"CANCEL"),""),t.R7$(2),t.FS9("loadingText",t.bMT(92,62,"SAVING")),t.Y8G("lwLoadingBtn",n.isLoading)("defaultBtnText","add-Transfer"===n.actionType?t.bMT(93,64,"SAVE"):t.bMT(94,66,"UPDATE")),t.R7$(6),t.SpI(" ","add-Transfer"===n.actionType?t.bMT(98,68,"SAVE"):t.bMT(99,70,"UPDATE")," ")}},dependencies:[h.Wk,lt.Q,dt.T,p.qT,p.me,p.Q0,p.BC,p.cb,p.YS,p.vS,p.cV,p.l_,k.Vh,k.bZ,w.a,I.Kj],styles:[".payment-card[_ngcontent-%COMP%]{margin:0 auto;width:70%;box-shadow:0 .2rem .5rem #00000026!important}.payment-card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{width:100%}"]})}return r})();var ft=i(92061),z=i(87372),q=i(17640),ht=i(38139),mt=i(92887),pt=i(11869),Tt=i(10410),Q=i(35036),_t=i(46906),At=i(99639),Z=i(69748);const tt=r=>({"is-active":r});function gt(r,u){if(1&r){const e=t.RV6();t.j41(0,"button",41),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.clearSearchText())}),t.j41(1,"span",42),t.EFF(2,"clear"),t.k0s()()}}function bt(r,u){if(1&r){const e=t.RV6();t.j41(0,"div",36)(1,"div",37),t.nrm(2,"img",38),t.j41(3,"input",39),t.nI1(4,"transloco"),t.mxI("ngModelChange",function(n){t.eBV(e);const s=t.XpG();return t.DH7(s.searchTerm,n)||(s.searchTerm=n),t.Njj(n)}),t.bIt("keyup",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.searchOrFilterData())})("change",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.searchOrFilterData())}),t.k0s(),t.DNE(5,gt,3,0,"button",40),t.k0s()()}if(2&r){const e=t.XpG();t.R7$(3),t.Mz_("placeholder","",t.bMT(4,4,"SEARCH"),"..."),t.R50("ngModel",e.searchTerm),t.R7$(2),t.Y8G("ngIf",""!=e.searchTerm&&null!=e.searchTerm)}}function Et(r,u){if(1&r){const e=t.RV6();t.j41(0,"div",45)(1,"button",52),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.deleteTransfer(n.selectedTransfer))}),t.j41(2,"span",53),t.EFF(3,"delete_outline"),t.k0s(),t.EFF(4),t.nI1(5,"transloco"),t.k0s()()}2&r&&(t.R7$(4),t.SpI(" ",t.bMT(5,1,"DELETE_SELECTED")," "))}function vt(r,u){if(1&r&&(t.j41(0,"span",47),t.EFF(1),t.k0s()),2&r){const e=t.XpG(2);t.R7$(),t.SpI(" ",e.sortReverse?"arrow_upward":"arrow_downward"," ")}}function Ft(r,u){if(1&r&&(t.j41(0,"span",47),t.EFF(1),t.k0s()),2&r){const e=t.XpG(2);t.R7$(),t.SpI(" ",e.sortReverse?"arrow_upward":"arrow_downward"," ")}}function Dt(r,u){if(1&r){const e=t.RV6();t.j41(0,"div",45)(1,"button",54),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.showPreviewDialog(n.cashBankTransferList))}),t.j41(2,"span",47),t.EFF(3,"picture_as_pdf"),t.k0s(),t.EFF(4),t.nI1(5,"transloco"),t.k0s(),t.j41(6,"button",55),t.bIt("click",function(){t.eBV(e);const n=t.XpG(2);return t.Njj(n.generateToExcel())}),t.j41(7,"span",47),t.EFF(8,"download"),t.k0s(),t.EFF(9),t.nI1(10,"transloco"),t.k0s()()}2&r&&(t.R7$(4),t.SpI(" ",t.bMT(5,2,"PDF")," "),t.R7$(5),t.SpI(" ",t.bMT(10,4,"EXPORT_EXCEL")," "))}function yt(r,u){if(1&r){const e=t.RV6();t.j41(0,"div",43),t.DNE(1,Et,6,3,"div",44),t.j41(2,"div",45)(3,"button",46)(4,"span",47),t.EFF(5,"sort"),t.k0s(),t.EFF(6),t.nI1(7,"transloco"),t.k0s(),t.j41(8,"div",48)(9,"a",49),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.sortColumnList("amount","isNumber"))}),t.DNE(10,vt,2,1,"span",50),t.EFF(11),t.nI1(12,"transloco"),t.k0s(),t.j41(13,"a",49),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.sortColumnList("createdDate","isNumber"))}),t.DNE(14,Ft,2,1,"span",50),t.EFF(15),t.nI1(16,"transloco"),t.k0s()()(),t.DNE(17,Dt,11,6,"div",44),t.j41(18,"div",45)(19,"button",51)(20,"span",47),t.EFF(21,"add_circle_outline"),t.k0s(),t.EFF(22),t.nI1(23,"transloco"),t.k0s()()()}if(2&r){const e=t.XpG();t.R7$(),t.Y8G("ngIf",e.selectedTransfer.length>0),t.R7$(5),t.SpI(" ",t.bMT(7,8,"SORT_BY")," "),t.R7$(4),t.Y8G("ngIf","amount"==e.sortColumn),t.R7$(),t.SpI(" ",t.bMT(12,10,"AMT_LABEL")," "),t.R7$(3),t.Y8G("ngIf","createdDate"==e.sortColumn),t.R7$(),t.SpI(" ",t.bMT(16,12,"DATE")," "),t.R7$(2),t.Y8G("ngIf",e.cashBankTransferList.length>0),t.R7$(5),t.SpI(" ",t.bMT(23,14,"CREATE_NEW"),"")}}function Lt(r,u){if(1&r){const e=t.RV6();t.j41(0,"div",56)(1,"div",57)(2,"app-list-filter",58),t.bIt("newFilterEvent",function(n){t.eBV(e);const s=t.XpG();return t.Njj(s.applyFilter(n))})("clearFilterEvent",function(n){t.eBV(e);const s=t.XpG();return t.Njj(s.clearAll(n))}),t.k0s()()()}2&r&&(t.R7$(2),t.Y8G("showDurationList",!0))}function Ct(r,u){if(1&r){const e=t.RV6();t.j41(0,"li",60)(1,"span",61),t.bIt("click",function(){const n=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.changeTab(n.uniqueKeyOfAccount))}),t.EFF(2),t.j41(3,"span",62),t.EFF(4),t.k0s()()()}if(2&r){const e=u.$implicit,a=t.XpG(2);t.R7$(),t.Y8G("ngClass",t.eq3(4,tt,a.selectedTabId==e.uniqueKeyOfAccount)),t.R7$(),t.SpI(" ",e.accName," "),t.R7$(),t.Y8G("hidden",!0),t.R7$(),t.JRh(a.cashBankTransferList.length)}}function kt(r,u){if(1&r){const e=t.RV6();t.j41(0,"ul",59)(1,"li",60)(2,"span",61),t.bIt("click",function(){t.eBV(e);const n=t.XpG();return t.Njj(n.changeTab("transfer_tab_1"))}),t.EFF(3),t.nI1(4,"transloco"),t.j41(5,"span",62),t.EFF(6),t.k0s()()(),t.DNE(7,Ct,5,6,"li",63),t.k0s()}if(2&r){const e=t.XpG();t.R7$(2),t.Y8G("ngClass",t.eq3(7,tt,"transfer_tab_1"==e.selectedTabId)),t.R7$(),t.SpI(" ",t.bMT(4,5,"TRANSFER")," "),t.R7$(2),t.Y8G("hidden",!0),t.R7$(),t.JRh(e.cashBankTransferList.length),t.R7$(),t.Y8G("ngForOf",e.tabList)}}function Rt(r,u){if(1&r&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"transloco"),t.nI1(3,"transloco"),t.k0s()),2&r){const e=t.XpG(3);t.R7$(),t.E5c("(",t.bMT(2,3,"FILTERED_FROM")," ",e.allFundTransferCollection.length," ",t.bMT(3,5,"TOTAL_ENTRIES"),")")}}function It(r,u){if(1&r&&(t.j41(0,"div",66)(1,"span"),t.EFF(2),t.nI1(3,"transloco"),t.nI1(4,"transloco"),t.DNE(5,Rt,4,7,"span",67),t.k0s()()),2&r){const e=t.XpG(2);t.R7$(2),t.LHq("",t.bMT(3,5,"SHOWING")," ",e.cashBankTransferList.length," ",t.bMT(4,7,"OUT_OF")," ",e.allFundTransferCollection.length," "),t.R7$(3),t.Y8G("ngIf",1!=e.filterObject.duration)}}function St(r,u){if(1&r&&(t.j41(0,"div",16)(1,"div",64),t.DNE(2,It,6,9,"div",65),t.k0s()()),2&r){const e=t.XpG();t.R7$(2),t.Y8G("ngIf",0!=e.allFundTransferCollection.length)}}function Nt(r,u){1&r&&(t.j41(0,"div",68)(1,"div",14),t.nrm(2,"span",69),t.k0s()())}function Ot(r,u){if(1&r){const e=t.RV6();t.j41(0,"th",81)(1,"div",82)(2,"input",83),t.bIt("change",function(n){t.eBV(e);const s=t.XpG(2);return t.Njj(s.setParentCheckbox(n))}),t.k0s(),t.nrm(3,"label",84),t.k0s()()}if(2&r){const e=t.XpG(2);t.R7$(2),t.Y8G("checked",e.selectedTransfer.length>0&&e.selectedTransfer.length>=e.selectedTransfer.length)("indeterminate",e.showIndeterminate)}}function jt(r,u){1&r&&(t.j41(0,"th",85),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.bMT(2,1,"TRANSACTION_NO")))}function Mt(r,u){1&r&&(t.j41(0,"th",86),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.bMT(2,1,"STATUS")))}function Bt(r,u){1&r&&(t.j41(0,"th",87),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.SpI("",t.bMT(2,1,"ACTION")," "))}function xt(r,u){if(1&r&&(t.j41(0,"table",70)(1,"thead",71,1)(3,"tr",72),t.DNE(4,Ot,4,2,"th",73),t.j41(5,"th",74),t.EFF(6),t.nI1(7,"transloco"),t.k0s(),t.DNE(8,jt,3,3,"th",75),t.j41(9,"th",76),t.EFF(10),t.nI1(11,"transloco"),t.k0s(),t.j41(12,"th",77),t.EFF(13),t.nI1(14,"transloco"),t.k0s(),t.DNE(15,Mt,3,3,"th",78),t.j41(16,"th",79),t.EFF(17),t.nI1(18,"transloco"),t.k0s(),t.DNE(19,Bt,3,3,"th",80),t.k0s()()()),2&r){const e=t.XpG();t.R7$(4),t.Y8G("ngIf","transfer_tab_1"==e.selectedTabId),t.R7$(2),t.JRh(t.bMT(7,8,"DATE")),t.R7$(2),t.Y8G("ngIf","transfer_tab_1"==e.selectedTabId),t.R7$(2),t.JRh(t.bMT(11,10,"FROM_ACC")),t.R7$(3),t.JRh(t.bMT(14,12,"TO_ACC")),t.R7$(2),t.Y8G("ngIf","transfer_tab_1"!=e.selectedTabId),t.R7$(2),t.JRh(t.bMT(18,14,"AMT_LABEL")),t.R7$(2),t.Y8G("ngIf","transfer_tab_1"==e.selectedTabId)}}function Kt(r,u){if(1&r){const e=t.RV6();t.j41(0,"th",92)(1,"div",82)(2,"input",93),t.bIt("change",function(n){t.eBV(e);const s=t.XpG().$implicit,c=t.XpG(2);return t.Njj(c.setCheckboxState(null==s?null:s.uniqueKeyBankCashTransferEntity,n))}),t.k0s(),t.nrm(3,"label",94),t.k0s()()}if(2&r){const e=t.XpG().$implicit,a=t.XpG(2);t.R7$(2),t.Y8G("checked",a.checkInvoiceCheckbox(null==e?null:e.uniqueKeyBankCashTransferEntity))}}function $t(r,u){if(1&r&&(t.j41(0,"td",85),t.EFF(1),t.k0s()),2&r){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.transferNo," ")}}function Pt(r,u){1&r&&(t.j41(0,"span",97)(1,"a",98)(2,"span",47),t.EFF(3,"arrow_downward"),t.k0s(),t.EFF(4),t.nI1(5,"transloco"),t.k0s()()),2&r&&(t.R7$(4),t.SpI("",t.bMT(5,1,"PAID_LABEL")," "))}function Ut(r,u){1&r&&(t.j41(0,"span",99)(1,"a",100)(2,"span",47),t.EFF(3,"arrow_upward"),t.k0s(),t.EFF(4),t.nI1(5,"transloco"),t.k0s()()),2&r&&(t.R7$(4),t.SpI("",t.bMT(5,1,"RECEIVED")," "))}function Gt(r,u){1&r&&(t.j41(0,"span",97),t.EFF(1,"-"),t.k0s())}function wt(r,u){if(1&r&&(t.j41(0,"td",86),t.DNE(1,Pt,6,3,"span",95)(2,Ut,6,3,"span",96)(3,Gt,2,0,"span",95),t.k0s()),2&r){const e=t.XpG().$implicit;t.R7$(),t.Y8G("ngIf",null!=e.status&&2==e.status),t.R7$(),t.Y8G("ngIf",null!=e.status&&1==e.status),t.R7$(),t.Y8G("ngIf",null==e.status)}}function Xt(r,u){if(1&r){const e=t.RV6();t.j41(0,"td",87)(1,"div",101)(2,"button",102)(3,"div",103)(4,"span",104),t.EFF(5,"more_horiz"),t.k0s()()(),t.j41(6,"ul",105)(7,"li")(8,"a",106)(9,"span",107),t.EFF(10,"edit"),t.k0s(),t.EFF(11),t.nI1(12,"transloco"),t.k0s()(),t.j41(13,"li")(14,"a",108),t.bIt("click",function(){t.eBV(e);const n=t.XpG().$implicit,s=t.XpG(2);return t.Njj(s.showVoucherDialog(n))}),t.j41(15,"span",107),t.EFF(16,"description"),t.k0s(),t.EFF(17),t.nI1(18,"transloco"),t.k0s()(),t.nrm(19,"div",109),t.j41(20,"li")(21,"a",110),t.bIt("click",function(){t.eBV(e);const n=t.XpG().$implicit,s=t.XpG(2);return t.Njj(s.deleteTransfer([n.uniqueKeyBankCashTransferEntity]))}),t.j41(22,"span",53),t.EFF(23,"delete_outline"),t.k0s(),t.EFF(24),t.nI1(25,"transloco"),t.k0s()()()()()}if(2&r){const e=t.XpG().$implicit;t.R7$(8),t.Mz_("routerLink","/cash-bank-transfer/",e.uniqueKeyBankCashTransferEntity,"/edit"),t.R7$(3),t.SpI(" ",t.bMT(12,5,"EDIT")," "),t.R7$(6),t.SpI(" ",t.bMT(18,7,"SHOW_VOUCHER")," "),t.R7$(7),t.SpI(" ",t.bMT(25,9,"DELETE")," ")}}function Vt(r,u){if(1&r&&(t.j41(0,"tr",90),t.DNE(1,Kt,4,1,"th",91),t.j41(2,"td",74),t.EFF(3),t.nI1(4,"dateFormat"),t.k0s(),t.DNE(5,$t,2,1,"td",75),t.j41(6,"td",76),t.EFF(7),t.k0s(),t.j41(8,"td",77),t.EFF(9),t.k0s(),t.DNE(10,wt,4,3,"td",78),t.j41(11,"td",79),t.EFF(12),t.nI1(13,"CurrencyPipe"),t.k0s(),t.DNE(14,Xt,26,11,"td",80),t.k0s()),2&r){const e=u.$implicit,a=t.XpG(2);t.R7$(),t.Y8G("ngIf","transfer_tab_1"==a.selectedTabId),t.R7$(2),t.SpI(" ",t.i5U(4,8,e.createdDate,a.settingData)," "),t.R7$(2),t.Y8G("ngIf","transfer_tab_1"==a.selectedTabId),t.R7$(2),t.JRh(e.fromAccountTranslation),t.R7$(2),t.JRh(e.toAccountTranslation),t.R7$(),t.Y8G("ngIf","transfer_tab_1"!=a.selectedTabId),t.R7$(2),t.JRh(t.i5U(13,11,e.amount,a.settingData)),t.R7$(2),t.Y8G("ngIf","transfer_tab_1"==a.selectedTabId)}}function Yt(r,u){1&r&&(t.j41(0,"th",113)(1,"span"),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"NO_RECORD_FOUND")," "))}function Ht(r,u){1&r&&(t.j41(0,"th",114)(1,"span"),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"NO_RECORD_FOUND")," "))}function Wt(r,u){if(1&r&&(t.j41(0,"tr"),t.DNE(1,Yt,4,3,"th",111)(2,Ht,4,3,"th",112),t.k0s()),2&r){const e=t.XpG(2);t.R7$(),t.Y8G("ngIf","transfer_tab_1"==e.selectedTabId),t.R7$(),t.Y8G("ngIf","transfer_tab_1"!=e.selectedTabId)}}function Jt(r,u){if(1&r&&(t.j41(0,"table",88)(1,"tbody",null,2),t.DNE(3,Vt,15,14,"tr",89)(4,Wt,3,2,"tr",67),t.k0s()()),2&r){const e=t.XpG(),a=t.sdS(42);t.R7$(3),t.Y8G("ngForOf",a.viewPortItems),t.R7$(),t.Y8G("ngIf",0==e.cashBankTransferList.length)}}function zt(r,u){if(1&r){const e=t.RV6();t.j41(0,"div",115),t.bIt("click",function(){t.eBV(e);const n=t.XpG(),s=t.sdS(42);return t.Njj(n.scrollToTop(s))}),t.j41(1,"span",47),t.EFF(2,"arrow_upward"),t.k0s()()}}const qt=[{path:"",component:(()=>{class r{constructor(e,a,n,s,c,o,A,v,y,N,_,L,M,te,ee){this.dataStoreService=e,this.transferService=a,this.accountService=n,this.commonService=s,this.syncDbService=c,this.notificationService=o,this.router=A,this.syncApiService=v,this.dateFormatPipe=y,this.searchFilterPipe=N,this.cd=_,this.translocoService=L,this.currencyPipe=M,this.excelService=te,this.document=ee,this.windowScrolled=!1,this.showIndeterminate=!1,this.sortColumn="createdDate",this.sortReverse="createdDate"!=this.sortColumn,this.accountList=[],this.allLedgerList=[],this.fundTransferList=[],this.allFundTransferCollection=[],this.selectedTabId="transfer_tab_1",this.tabList=[],this.cashBankTransferList=[],this.allFundTransferList=[],this.selectedTransfer=[],this.isLastIteration=!1,this.showListLoader=!1,this.isPdfLoading=!1,this.fetchDataSuccess=!1,this.filterObject={formatDateValue:"",duration:1,minDate:"",maxDate:""},this.accountListTrranslatedKey=f.DH.accountListForTranslations(),this.commonService.setSEOInfo("Cash / Bank Transfer List - Binz Accounting App",[{name:"description",content:"Cash / Bank Fund Transfer List"},{name:"keywords",content:"Cash, Bank, Fund, Transfer, Transaction No, From, To, Date, Edit, Account, Amount"},{name:"title",content:"Cash / Bank Fund Transfer List"}])}ngOnInit(){this.commonService.broadcast("hideSidebar",!1);let e=JSON.parse(f.SE.getCache("filter_list_data"));(0,d.A)(e)||Object.assign(this.filterObject,e),this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(a=>{(0,b.A)(a,"syncProcessComplete")&&a.syncProcessComplete&&(0,G.A)(()=>{"/cash-bank-transfer"==this.router.url&&this.fetchDBData()})}),this.fetchDBData()}fetchDBData(){var e=this;return(0,T.A)(function*(){e.syncApiService.fetchMultipleDbData(["filterSettingData","account","ledger","fundTransfer"],function(){var a=(0,T.A)(function*(n){var s=yield n.data;e.fetchDataSuccess=!0,200===n.status&&!(0,d.A)(s)&&((0,b.A)(s,"filterSettingData")&&!(0,d.A)(s.filterSettingData)&&(e.settingData=s.filterSettingData),(0,b.A)(s,"account")&&(e.accountList=s.account,e.tabList=(0,z.A)(e.accountList.filter(c=>[7,11].includes(c.accountType)),["deviceCreateDate","nameOfAccount"],["asc","desc"]),e.tabList.map(c=>{c.accName=(0,d.A)(e.accountListTrranslatedKey.find(o=>o.title==c.nameOfAccount))?c.nameOfAccount:e.translocoService.translate(e.accountListTrranslatedKey.find(o=>o.title==c.nameOfAccount).translated_key)})),(0,b.A)(s,"ledger")&&(e.allLedgerList=s.ledger),(0,b.A)(s,"fundTransfer")&&(e.fundTransferList=s.fundTransfer),(0,G.A)(()=>{e.cashBankTransferList=[],e.allFundTransferList=[],e.prepareFundTransferList(e.selectedTabId)}))});return function(n){return a.apply(this,arguments)}}())})()}changeTab(e){this.selectedTabId=e,this.selectedTransfer=[],this.cashBankTransferList=[],this.allFundTransferList=[],this.showListLoader=!0,this.showIndeterminate=!1,this.prepareFundTransferList(this.selectedTabId)}prepareFundTransferList(e){if("transfer_tab_1"==e){this.allFundTransferCollection=this.fundTransferList;let a=(0,q.A)(this.fundTransferList,this.fundTransferList.length);(0,d.A)(a)?(this.cashBankTransferList=[],this.showListLoader=!1,this.cd.detectChanges()):this.pushPullWorker({"list-Type":"fund-transfer-list",chunkTrasnferData:a,accountList:this.accountList,selectedTabId:e})}else if(!(0,d.A)(e)){let a=this.allLedgerList.filter(n=>{let s=n.ledgerDetailList.find(c=>c.uniqueKeyAccount===e);if(!(0,d.A)(s))return n});this.allFundTransferCollection=a,(0,d.A)(a)?(this.cashBankTransferList=[],this.showListLoader=!1,this.cd.detectChanges()):this.pushPullWorker({"list-Type":"fund-transfer-list",chunkTrasnferData:(0,q.A)(a,a.length),accountList:this.accountList,selectedTabId:e})}}pushPullWorker(e){var a=this;this.intializeWorker(),this.fundTransferListWorker.postMessage(e),this.fundTransferListWorker.addEventListener("message",function(){var n=(0,T.A)(function*({data:s}){let c=yield s;(0,d.A)(c.fundTransferList)||(c.lastIteration&&(a.showListLoader=!1),(0,d.A)(a.allFundTransferList)?a.allFundTransferList=c.fundTransferList:(0,x.A)(c.fundTransferList,o=>{let A=a.allFundTransferList.find(v=>v.uniqueKey==o.uniqueKey);if((0,d.A)(A))a.allFundTransferList.push(o);else{let v=a.allFundTransferList.findIndex(y=>y.uniqueKey==o.uniqueKey);v>=0&&(a.allFundTransferList[v]=o)}}),a.allFundTransferList=a.allFundTransferList.filter(o=>o.createdDate>=a.settingData.bookKeepingStartDate),a.allFundTransferList.map(o=>{o.fromAccountTranslation=(0,d.A)(a.accountListTrranslatedKey.find(A=>A.title==o.fromAccount))?o.fromAccount:a.translocoService.translate(a.accountListTrranslatedKey.find(A=>A.title==o.fromAccount).translated_key),o.toAccountTranslation=(0,d.A)(a.accountListTrranslatedKey.find(A=>A.title==o.toAccount))?o.toAccount:a.translocoService.translate(a.accountListTrranslatedKey.find(A=>A.title==o.toAccount).translated_key)}),a.allFundTransferList=(0,z.A)(a.allFundTransferList,["createdDate","deviceCreatedDate"],["desc","desc"]),a.isLastIteration=c.lastIteration,a.searchOrFilterData())});return function(s){return n.apply(this,arguments)}}())}clearSearchText(){this.searchTerm="",this.searchOrFilterData()}searchOrFilterData(){this.cashBankTransferList=!(0,d.A)(this.allFundTransferList)&&!(0,d.A)(this.searchTerm)||isNumber(this.searchTerm)||!(0,d.A)(this.sortColumn)||this.sortReverse?this.searchFilterPipe.transform(this.allFundTransferList,this.searchTerm,["fromAccount","toAccount","amount","transferNo","formatDate"],!0,this.sortColumn,this.sortReverse):this.allFundTransferList,this.filterInvoiceList(this.cashBankTransferList)}filterInvoiceList(e){this.cashBankTransferList=1!=this.filterObject.duration?e.filter(a=>{if(1==this.filterObject.duration||(0,d.A)(this.filterObject.minDate)||(0,d.A)(this.filterObject.maxDate)||a.formatDate>=this.filterObject.minDate&&a.formatDate<=this.filterObject.maxDate)return a}):e,this.resetInvoice(),this.cd.detectChanges()}applyFilter(e){var a=this;return(0,T.A)(function*(){Object.assign(a.filterObject,e),a.prepareFundTransferList(a.selectedTabId)})()}clearAll(e){Object.assign(this.filterObject,e),this.prepareFundTransferList(this.selectedTabId)}showVoucherDialog(e){let a=[];(0,x.A)(e.editData.ledgerEntity.ledgerDetailList,n=>{let s=this.accountList.find(c=>c.uniqueKeyOfAccount===n.uniqueKeyAccount);(0,d.A)(s)||a.push({formatDate:e.editData.ledgerEntity.createDate,accountName:s.nameOfAccount,amount:n.amount,drCrType:n.drCrType})}),(0,d.A)(a)||this.commonService.showDialog(ft.p,{transactionNo:e.editData.formatNo,ledgerTypeUniqueKey:e.editData.uniqueKeyBankCashTransferEntity,ledgerType:e.editData.ledgerEntity.ledgerType,ledgerList:a,ledgerWithoutClient:!0,ledgerEditUrl:`cash-bank-transfer/${e.uniqueKeyBankCashTransferEntity}/edit`,comments:e.notes},n=>{(0,b.A)(n,"deleteLedger")&&n.deleteLedger&&this.fetchDBData()},{panelClass:"ng-material-dialog"})}deleteTransfer(e){this.transferService.deleteFundTransfer(e,a=>{(0,b.A)(a,"delete_successfully")&&a.delete_successfully&&this.fetchDBData()})}setParentCheckbox(e){e.target.checked||this.showIndeterminate?(e.target.checked=!0,this.showIndeterminate=!1,this.cashBankTransferList.map((a,n)=>{this.selectedTransfer.includes(a.uniqueKeyBankCashTransferEntity)||this.selectedTransfer.push(a.uniqueKeyBankCashTransferEntity)})):(e.target.checked=!1,this.showIndeterminate=!1,this.resetInvoice())}resetInvoice(){this.selectedTransfer=[]}checkInvoiceCheckbox(e){return this.selectedTransfer.includes(e)}setCheckboxState(e,a){if(a.target.checked&&!this.selectedTransfer.includes(e))this.selectedTransfer.push(e);else{let n=this.selectedTransfer.indexOf(e);this.selectedTransfer.splice(n,1)}this.showIndeterminate=0!=this.selectedTransfer.length&&this.selectedTransfer.length!=this.cashBankTransferList.length}sortColumnList(e,a){(this.sortColumn===e||"isNumber"==a)&&(this.sortReverse=!this.sortReverse),this.sortColumn=e,this.prepareFundTransferList(this.selectedTabId)}generatePdf(e){this.isPdfLoading=!0;let a=this.cashBankTransferList.map(o=>({invDate:this.dateFormatPipe.transform(o.createdDate,this.settingData),drAmount:o.toAccount,crAmount:o.fromAccount,invAmount:o.amount,notes:o.notes})),n=1==this.filterObject.duration?"Showing For All Time":"Showing For "+this.filterObject.formatDateValue,s=this.accountList.find(o=>o.uniqueKeyOfAccount===this.selectedTabId),c=(0,d.A)(s)?"":s.nameOfAccount;this.syncApiService.createListPdf("pdf/invoiceListPdf",{title:"transfer_tab_1"==this.selectedTabId?"Cash/Bank Fund Transfer":c+" Transfer",pdfType:"fundTransfer-list",subTitle:n,invoiceList:a},o=>{this.isPdfLoading=!1,this.resetInvoice(),this.cd.detectChanges(),(0,b.A)(o,"serialDataByte")&&("download"===e?downloadPDF(o.serialDataByte,"cashBankTransferList"):"preview"===e&&previewPDF(o.serialDataByte,"cashBankTransferList"))})}intializeWorker(){typeof Worker<"u"&&(this.fundTransferListWorker=new Worker(i.tu(new URL(i.p+i.u(6466),i.b)),{type:void 0}))}onScrollEvent(e){this.windowScrolled=document.body.scrollTop>20||document.documentElement.scrollTop>20}scrollToTop(e){e.scrollToIndex(-1),function a(){var n=document.documentElement.scrollTop||document.body.scrollTop;n>0&&(window.requestAnimationFrame(a),window.scrollTo(0,n-n/8))}()}showPreviewDialog(e){(0,d.A)(this.selectedTransfer)||(e=e.filter(a=>this.selectedTransfer.includes(a.uniqueKeyBankCashTransferEntity))),this.commonService.showDialog(ht.Q,{reportObject:e,reportType:"cash_bank_transfer_list",filterObj:this.filterObject,tabList:this.tabList,selectedTabb:this.selectedTabId},a=>{},{width:"1000px"})}generateToExcel(){if((0,d.A)(this.cashBankTransferList))this.notificationService.error("NO_DATA_TO_EXPORT",{},!0);else{const e=new mt.Workbook;let n,a=this.cashBankTransferList;(0,d.A)(this.selectedTransfer)||(a=a.filter(_=>this.selectedTransfer.includes(_.uniqueKeyBankCashTransferEntity))),this.tabList.forEach(_=>{this.selectedTabId==_.uniqueKeyOfAccount&&(n=_.accName)});const s=e.addWorksheet("Cash Bank Fund Transfer"),c=`${"transfer_tab_1"==this.selectedTabId?this.translocoService.translate("CASH_BANK_TRANSFER"):n}`,o=1==this.filterObject.duration?this.translocoService.translate("SHOWING_FOR_ALL_TIME"):`${this.translocoService.translate("SHOWING_FOR")} ${this.filterObject.formatDateValue}`,A=s.addRow([c]),v=s.addRow([o]),y={type:"pattern",pattern:"solid",fgColor:{argb:"1889E5"},bgColor:{argb:"1889E5"}};A.eachCell((_,L)=>{_.fill=y}),A.font={size:13,bold:!0},A.alignment={horizontal:"center",vertical:"middle"},v.eachCell((_,L)=>{_.fill=y}),v.font={size:13,bold:!0},v.alignment={horizontal:"center",vertical:"middle"},s.addRow([this.translocoService.translate("SR_NO"),this.translocoService.translate("DATE"),`${this.translocoService.translate("ACCOUNT")} ${this.translocoService.translate("DEBIT")}`,`${this.translocoService.translate("ACCOUNT")} ${this.translocoService.translate("CREDIT")}`,this.translocoService.translate("AMT_LABEL"),this.translocoService.translate("NOTE")]).eachCell((_,L)=>{_.fill=y});let N=0;for(let _ of a)N+=1,s.addRow([N,this.dateFormatPipe.transform(_.createdDate,this.settingData),_.toAccountTranslation,_.fromAccountTranslation,this.currencyPipe.transform(_.amount,this.settingData,!1,2,!1),_.notes?_.notes:"-"]).eachCell((L,M)=>{});s.getColumn(1).width=15,s.getColumn(2).width=30,s.getColumn(3).width=30,s.getColumn(4).width=30,s.getColumn(5).width=30,s.getColumn(6).width=40,s.getColumn(1).alignment={horizontal:"center",vertical:"middle"},s.getColumn(2).alignment={horizontal:"center",vertical:"middle"},s.getColumn(3).alignment={horizontal:"center",vertical:"middle"},s.getColumn(4).alignment={horizontal:"center",vertical:"middle"},s.getColumn(5).alignment={horizontal:"right",vertical:"middle"},s.getColumn(6).alignment={horizontal:"left",vertical:"top",wrapText:!0},s.getRow(1).alignment={horizontal:"center",vertical:"middle"},s.getRow(2).alignment={horizontal:"center",vertical:"middle"},s.getRow(3).alignment={horizontal:"center",vertical:"middle"},s.mergeCells("A1:F1"),s.mergeCells("A2:F2"),s.properties.defaultRowHeight=20,e.xlsx.writeBuffer().then(_=>{const L=new Blob([_],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;"});this.excelService.exportExcel(L,"Fund Transfer Report.xlsx")})}}ngOnDestroy(){(0,Y.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe(),this.fundTransferListWorker&&(this.fundTransferListWorker=this.fundTransferListWorker.terminate())}static#t=this.\u0275fac=function(a){return new(a||r)(t.rXU($.V),t.rXU(W.w),t.rXU(pt.D),t.rXU(U.h),t.rXU(H.P),t.rXU(K.J),t.rXU(h.Ix),t.rXU(P.P),t.rXU(w.a),t.rXU(Tt.r),t.rXU(t.gRc),t.rXU(I.JO),t.rXU(Q.o),t.rXU(_t.T),t.rXU(F.qQ))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-list"]],hostBindings:function(a,n){1&a&&t.bIt("scroll",function(c){return n.onScrollEvent(c)},!1,t.tSv)},decls:45,vars:23,consts:[["scroll",""],["header",""],["container",""],[1,"content"],[1,"container-fluid"],[1,"page-title-box"],[1,"row","align-items-center"],[1,"col-sm-6"],[1,"page-title"],[1,"breadcrumb","float-right"],[1,"breadcrumb-item"],["href","","routerLink","/dashboard"],[1,"breadcrumb-item","active"],[1,"text-center","list-loader",3,"hidden"],["role","status",1,"spinner-border","text-primary"],[1,"preparing-data"],[1,"row"],["class","col-lg-3 btns-three pull-right",4,"ngIf"],["class","col-lg-9 btns-three pull-right",4,"ngIf"],["id","collapseOne","aria-expanded","true","style","width: 100%",4,"ngIf"],[1,"invoice-list-tabs"],[1,"ac-nav--secondary"],["class","ac-nav__section",4,"ngIf"],[1,"invoice-list-table","tab-unpaid"],[1,"invoice-row-popover",2,"top","52px"],[1,"ac-popover__trigger"],["tabindex","0",1,"anchorSpan"],[1,"col-sm-12"],["class","row",4,"ngIf"],[1,"tab-content"],["class","block-loader-pl","style","width: 100% !important",4,"ngIf"],["id","Client","role","tabpanel",1,"tab-pane","active"],["class","table table-hover table-bordered dataTable no-footer mb-0",4,"ngIf"],[3,"items"],["id","datatable","class","table table-hover table-bordered dataTable no-footer","role","grid","aria-describedby","datatable_info","style","cursor: pointer;",4,"ngIf"],["id","toTop","class"," btop-btn",3,"click",4,"ngIf"],[1,"col-lg-3","btns-three","pull-right"],[1,"input-box-search"],["src","./assets/img/search.png","alt","user",1,"uil","uil-search","rounded-circle"],["type","text","name","searchTerm","autocomplete","off",3,"ngModelChange","keyup","change","placeholder","ngModel"],["class","button",3,"click",4,"ngIf"],[1,"button",3,"click"],[1,"material-icons","md-allicon"],[1,"col-lg-9","btns-three","pull-right"],["class","btn-group ms-1 mo-mb-2",4,"ngIf"],[1,"btn-group","ms-1","mo-mb-2"],["type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"sort-product","dropdown-toggle"],[1,"material-icons","custom-icons"],[1,"dropdown-menu"],[1,"dropdown-item","cursor-pointer",3,"click"],["class","material-icons custom-icons",4,"ngIf"],["type","button","routerLink","/cash-bank-transfer/add",1,"New_product"],["type","button",1,"sort-product",3,"click"],[1,"material-icons","custom-icons","md-delete"],["href","",1,"button-pdf","sort-product",3,"click"],[1,"button-pdf","sort-product",3,"click"],["id","collapseOne","aria-expanded","true",2,"width","100%"],[1,"col-md-12"],[3,"newFilterEvent","clearFilterEvent","showDurationList"],[1,"ac-nav__section"],[1,"ac-nav__item"],[1,"ac-nav__link",3,"click","ngClass"],[1,"ac-nav__link__count",3,"hidden"],["class","ac-nav__item",4,"ngFor","ngForOf"],[1,"col-12"],["class","lw-content-load alert-primary pull-left w-100",4,"ngIf"],[1,"lw-content-load","alert-primary","pull-left","w-100"],[4,"ngIf"],[1,"block-loader-pl",2,"width","100% !important"],[1,"sr-only"],[1,"table","table-hover","table-bordered","dataTable","no-footer","mb-0"],[1,"table-header"],["role","row",1,"mainsec-product"],["class","bs-checkbox checkb checkord-trsfer text-center",4,"ngIf"],[1,"date-trsfer"],["class","inv-no-trsfer",4,"ngIf"],[1,"client-trsfer"],[1,"invac-trsfer"],["class","status-trsfer",4,"ngIf"],[1,"grand-trsfer"],["class","action-trsfer text-center",4,"ngIf"],[1,"bs-checkbox","checkb","checkord-trsfer","text-center"],[1,"checkbox","main-check","checkbox-primary"],["id","lwSelectAllCheckbox","type","checkbox",3,"change","checked","indeterminate"],["for","lwSelectAllCheckbox"],[1,"inv-no-trsfer"],[1,"status-trsfer"],[1,"action-trsfer","text-center"],["id","datatable","role","grid","aria-describedby","datatable_info",1,"table","table-hover","table-bordered","dataTable","no-footer",2,"cursor","pointer"],["role","row","class","odd-product",4,"ngFor","ngForOf"],["role","row",1,"odd-product"],["class","bs-checkbox checkb-product checkord-trsfer text-center",4,"ngIf"],[1,"bs-checkbox","checkb-product","checkord-trsfer","text-center"],["id","checkbox2","type","checkbox",3,"change","checked"],["for","checkbox2"],["class","label-paid-cashtrasfer",4,"ngIf"],["class","label-received-cashtrasfer",4,"ngIf"],[1,"label-paid-cashtrasfer"],[1,""],[1,"label-received-cashtrasfer"],[1,"text-success"],[1,"dropdown"],["type","button","id","dropdownMenuButton1","data-bs-toggle","dropdown","aria-expanded","false",1,"btn","dot-menu","dropdown-toggle"],[1,"dot-icon"],[1,"material-icons","custom-icons","list-action-icon"],["aria-labelledby","dropdownMenuButton1",1,"dropdown-menu"],[1,"dropdown-item",3,"routerLink"],[1,"material-icons","custom-icons","md-allicon"],[1,"dropdown-item",3,"click"],[1,"divider"],[3,"click"],["colspan","7","class","text-center",4,"ngIf"],["colspan","5","class","text-center",4,"ngIf"],["colspan","7",1,"text-center"],["colspan","5",1,"text-center"],["id","toTop",1,"btop-btn",3,"click"]],template:function(a,n){if(1&a&&(t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"div",7)(5,"h4",8),t.EFF(6),t.nI1(7,"transloco"),t.k0s()(),t.j41(8,"div",7)(9,"ol",9)(10,"li",10)(11,"a",11),t.EFF(12),t.nI1(13,"transloco"),t.k0s()(),t.j41(14,"li",12),t.EFF(15),t.nI1(16,"transloco"),t.k0s()()()()(),t.j41(17,"div",13),t.nrm(18,"div",14),t.j41(19,"span",15),t.EFF(20),t.nI1(21,"transloco"),t.k0s()(),t.j41(22,"div",16),t.DNE(23,bt,6,6,"div",17)(24,yt,24,16,"div",18)(25,Lt,3,1,"div",19),t.k0s(),t.j41(26,"div",20)(27,"div",21),t.DNE(28,kt,8,9,"ul",22),t.j41(29,"span")(30,"div",23)(31,"div",24)(32,"div",25),t.nrm(33,"span",26),t.k0s()(),t.j41(34,"div",16)(35,"div",27),t.DNE(36,St,3,1,"div",28),t.j41(37,"div",29),t.DNE(38,Nt,3,0,"div",30),t.j41(39,"div",31),t.DNE(40,xt,20,16,"table",32),t.j41(41,"virtual-scroller",33,0),t.DNE(43,Jt,5,2,"table",34),t.k0s()()()()()()()()()()(),t.DNE(44,zt,3,0,"div",35)),2&a){const s=t.sdS(42);t.R7$(6),t.JRh(t.bMT(7,15,"CASH_BANK_TRANSFER")),t.R7$(6),t.JRh(t.bMT(13,17,"DASHBOARD")),t.R7$(3),t.JRh(t.bMT(16,19,"BANK_CASH_TRANSFER")),t.R7$(2),t.Y8G("hidden",n.fetchDataSuccess),t.R7$(3),t.SpI("",t.bMT(21,21,"PREPARING_DATA"),"... "),t.R7$(3),t.Y8G("ngIf",n.fetchDataSuccess),t.R7$(),t.Y8G("ngIf",n.fetchDataSuccess),t.R7$(),t.Y8G("ngIf",n.fetchDataSuccess),t.R7$(3),t.Y8G("ngIf",n.fetchDataSuccess),t.R7$(8),t.Y8G("ngIf",n.fetchDataSuccess),t.R7$(2),t.Y8G("ngIf",n.showListLoader),t.R7$(2),t.Y8G("ngIf",n.fetchDataSuccess),t.R7$(),t.Y8G("items",n.cashBankTransferList),t.R7$(2),t.Y8G("ngIf",n.fetchDataSuccess),t.R7$(),t.Y8G("ngIf",n.windowScrolled||n.allFundTransferCollection.length>0&&s.viewPortInfo.startIndex>0)}},dependencies:[F.YU,F.Sq,F.bT,h.Wk,p.me,p.BC,p.vS,At.i,Z.Bg,w.a,Q.o,I.Kj]})}return r})(),canActivate:[m.q]},{path:"add",component:J,canActivate:[m.q],data:{pageType:"add-edit-transfer",actionType:"add-Transfer"}},{path:":editTransferId/edit",component:J,canActivate:[m.q],data:{pageType:"add-edit-transfer",actionType:"edit-Transfer"}}];let Qt=(()=>{class r{static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275mod=t.$C({type:r});static#n=this.\u0275inj=t.G2t({imports:[h.iI.forChild(qt),h.iI]})}return r})(),Zt=(()=>{class r{static#t=this.\u0275fac=function(a){return new(a||r)};static#e=this.\u0275mod=t.$C({type:r});static#n=this.\u0275inj=t.G2t({imports:[F.MD,Qt,E.v,C.G,p.YN,p.X1,O.C,j.C,k.X6,D.ZG,B.jL,l.R,g.X,Z.y1,I.Q8]})}return r})()},34262:(X,S,i)=>{i.d(S,{X:()=>g});var F=i(60177),p=i(89417),E=i(61997),C=i(92314),O=i(75263),j=i(50074),k=i(75351),D=i(7180),B=i(82798),l=i(54438);let g=(()=>{class m{static#t=this.\u0275fac=function(f){return new(f||m)};static#e=this.\u0275mod=l.$C({type:m});static#n=this.\u0275inj=l.G2t({imports:[F.MD,p.YN,p.X1,E.C,C.X6,j.G,k.hM,O.ZG,D.Q8,B.Ve]})}return m})()},60578:(X,S,i)=>{i.d(S,{u:()=>k});var F=i(10467),p=i(98808),E=i(72036),C=i(54438),O=i(93832),j=i(7180);let k=(()=>{class D{constructor(l,g){var m=this;this.syncApiService=l,this.translocoService=g,this.entitityName=["capitalTransaction","estimate","expense","fundTransfer","journal","otherIncome","payment","purchase","purchaseOrder","purchaseReturn","sale","saleOrder","saleReturn","writeOff","receipt"],this.syncApiService.fetchDbData("account",function(){var h=(0,F.A)(function*(T){var f=yield T.data;200===T.status&&!(0,E.A)(f)&&(m.clientSupplierList=f)});return function(T){return h.apply(this,arguments)}}())}prepareDataForUnsyncRecords(l,g,m){let h=g.find(T=>T.dbStoreName==l.entityType);return{...l,rejectedReason:this.getReasonForRejection(l.rejectedFor),entitiesName:(0,E.A)(h)?"Other":"Account"!=h.name||!l.entityObject.accountType||12!=l.entityObject.accountType&&13!=l.entityObject.accountType?h.name:"Customer/Supplier",entityNo:this.getEntityNumber(l.entityType)&&l.entityObject[this.getEntityNumber(l.entityType)]?l.entityObject[this.getEntityNumber(l.entityType)]:"-",isEntityClientProduct:this.entitityName.includes(l.entityType)?0:1,entityClientProductHeading:this.entitityName.includes(l.entityType)?this.translocoService.translate("TRANSACTION_NUMBER"):"account"==l.entityType?12==l.entityObject.accountType||13==l.entityObject.accountType?this.translocoService.translate("CUSTOMER/SUPPLIER"):"Account Name":"product"==l.entityType||"reconcile"==l.entityType?this.translocoService.translate("PRODUCT_NAME"):"-",clientProductName:this.entitityName.includes(l.entityType)?"-":"account"==l.entityType?l.entityObject.nameOfAccount:"product"==l.entityType?l.entityObject.productName:"reconcile"==l.entityType?(0,E.A)(m)?"-":m.find(T=>T.uniqueKeyProduct==l.entityObject.uniqueKeyProductEntity).productName:"-"}}getClientName(l){return this.clientSupplierList.find(g=>g.unique_identifier==l).name}getReasonForRejection(l){switch(l){case 6:return this.translocoService.translate("PRODUCT_NAME_NULL");case 5:return this.translocoService.translate("CLIENT_NAME_NULL");case 3:return this.translocoService.translate("PRODUCT_FOREIGN_KEY_NULL");case 4:return this.translocoService.translate("CLIENT_FOREIGN_KEY_NULL");case 2:return this.translocoService.translate("UNIQUE_KEY_NULL");case 1:return this.translocoService.translate("ORGANIZATION_ID_DOES_NOT_MATCHED")}}removeDuplicates(l){return[...new Set(l.map(m=>JSON.stringify(m)))].map(m=>JSON.parse(m))}validateData(l){let g=p.DH.syncCollections(),m={unsyncRecords:[],entityName:[]};return!(0,E.A)(g)&&!(0,E.A)(l)&&Object.entries(l).map(h=>{if(!(0,E.A)(h[1])){let T=g.find(f=>f.entityName==h[0]);(0,E.A)(T)||Object.values(h[1]).map(f=>{(0,E.A)(f[T.uniquekeyColumn])&&(m.unsyncRecords.push(f),m.entityName.includes(h[0])||m.entityName.push(h[0]))})}}),m}getEntityNumber(l){switch(l){case"capitalTransaction":case"fundTransfer":case"otherIncome":return"formatNo";case"estimate":return"estimateNumber";case"expense":return"expenseFormatNo";case"journal":return"journalNo";case"payment":return"paymentNo";case"purchase":return"purchaseNo";case"purchaseOrder":return"purchaseOrderNumber";case"purchaseReturn":return"purchaseReturnFormatNumber";case"sale":return"salesFormatNumber";case"saleOrder":return"saleOrderNumber";case"saleReturn":return"salesReturnFormatNumber";case"writeOff":return"transactionNo";case"receipt":return"receiptNo";default:return"-"}}getUniqueKey(l){var g=this;return(0,F.A)(function*(){let m=p.DH.unsyncCollections(),h="";if((0,E.A)(m)||(h=m.find(f=>f.name==l.entitiesName).dbStoreName),!(0,E.A)(g.getObjectColumnKey(h))&&!(0,E.A)(g.getObjectKeyNameToSearch(h))){let T=l.entityObject[g.getObjectColumnKey(h)];if(!(0,E.A)(T))for(let f of T)if(!(0,E.A)(f[g.getObjectKeyNameToSearch(h)]))return yield f[g.getObjectKeyNameToSearch(h)]}return null})()}getObjectColumnKey(l){switch(l){case"estimate":return"productList";case"expense":return"expenseChildList";case"purchase":return"purchaseProductList:";case"purchaseOrder":return"purchaseOrderNumber";case"purchaseReturn":return"purchaseReturnProductList";case"sale":return"saleProductList";case"saleOrder":return"orderProductList";case"saleReturn":return"saleReturnProductList";default:return null}}getObjectKeyNameToSearch(l){switch(l){case"estimate":return"uniqueFKEstimate";case"expense":return"uniqueKeyExpensesEntity";case"purchase":return"uniqueKeyFKInvoice:";case"purchaseOrder":return"uniqueFKPurchaseOrder";case"purchaseReturn":return"uniqueKeyFKPurchaseReturn";case"sale":return"uniqueKeyFKInvoice";case"saleOrder":return"uniqueFKSaleOrder";case"saleReturn":return"uniqueKeyFKSaleReturn";default:return null}}translateValue(){return[{name:"Account",translated_title:"ACCOUNT"},{name:"Capital Transaction",translated_title:"CAPITAL_TRANSACTION"},{name:"Estimate",translated_title:"EST_LABEL"},{name:"Expense",translated_title:"EXPENSE"},{name:"Fund Transfer",translated_title:"FUND_TRANSFER"},{name:"Journal",translated_title:"JOURNAL"},{name:"Other Income",translated_title:"OTHER_INCOME"},{name:"Payment",translated_title:"PAYMENT"},{name:"Payment Link",translated_title:"PAYMENT_LINK"},{name:"Product",translated_title:"PRODUCT_LABEL"},{name:"Purchase",translated_title:"PURCHASE"},{name:"Purchase order",translated_title:"PURCHASE_ORDER"},{name:"Purchase Return",translated_title:"PURCHASE_RETURN"},{name:"Reconcile",translated_title:"RECONCILE"},{name:"Sale",translated_title:"SALE"},{name:"Sale Order",translated_title:"SALE_ORDER_TITLE"},{name:"Sale Return",translated_title:"SALE_RETURN"},{name:"Tax Transaction",translated_title:"TAX_TRANSACTION"},{name:"Write Off",translated_title:"WRITE_OFF"},{name:"Receipt",translated_title:"REC_LABEL"}]}static#t=this.\u0275fac=function(g){return new(g||D)(C.KVO(O.P),C.KVO(j.JO))};static#e=this.\u0275prov=C.jDH({token:D,factory:D.\u0275fac,providedIn:"root"})}return D})()}}]);(()=>{"use strict";var e,D={99162:(e,r,_)=>{_.d(r,{A:()=>a});const a=function u(n,E){for(var c=-1,s=null==n?0:n.length;++c<s&&!1!==E(n[c],c,n););return n}},76726:(e,r,_)=>{_.d(r,{A:()=>l});var n=_(66513),E=_(43744),c=_(39377),s=_(28606),A=_(28885),d=Object.prototype.hasOwnProperty;const l=function p(f,v){var P=(0,E.A)(f),O=!P&&(0,n.A)(f),T=!P&&!O&&(0,c.A)(f),L=!P&&!O&&!T&&(0,A.A)(f),B=P||O||T||L,b=B?function u(f,v){for(var P=-1,O=Array(f);++P<f;)O[P]=v(P);return O}(f.length,String):[],C=b.length;for(var o in f)(v||d.call(f,o))&&(!B||!("length"==o||T&&("offset"==o||"parent"==o)||L&&("buffer"==o||"byteLength"==o||"byteOffset"==o)||(0,s.A)(o,C)))&&b.push(o);return b}},36728:(e,r,_)=>{_.d(r,{A:()=>E});var u=_(74620);const E=(0,_(80816).A)(u.A)},72662:(e,r,_)=>{_.d(r,{A:()=>n});const n=(0,_(40318).A)()},74620:(e,r,_)=>{_.d(r,{A:()=>E});var u=_(72662),a=_(14429);const E=function n(c,s){return c&&(0,u.A)(c,s,a.A)}},79395:(e,r,_)=>{_.d(r,{A:()=>n});var u=_(57003);const n=function a(E){return"function"==typeof E?E:u.A}},80816:(e,r,_)=>{_.d(r,{A:()=>n});var u=_(31287);const n=function a(E,c){return function(s,A){if(null==s)return s;if(!(0,u.A)(s))return E(s,A);for(var i=s.length,d=c?i:-1,p=Object(s);(c?d--:++d<i)&&!1!==A(p[d],d,p););return s}}},40318:(e,r,_)=>{_.d(r,{A:()=>a});const a=function u(n){return function(E,c,s){for(var A=-1,i=Object(E),d=s(E),p=d.length;p--;){var l=d[n?p:++A];if(!1===c(i[l],l,i))break}return E}}},28606:(e,r,_)=>{_.d(r,{A:()=>E});var a=/^(?:0|[1-9]\d*)$/;const E=function n(c,s){var A=typeof c;return!!(s=s??9007199254740991)&&("number"==A||"symbol"!=A&&a.test(c))&&c>-1&&c%1==0&&c<s}},49671:(e,r,_)=>{_.d(r,{A:()=>s});var u=_(99162),a=_(36728),n=_(79395),E=_(43744);const s=function c(A,i){return((0,E.A)(A)?u.A:a.A)(A,(0,n.A)(i))}},57003:(e,r,_)=>{_.d(r,{A:()=>a});const a=function u(n){return n}},67640:(e,r,_)=>{_.d(r,{A:()=>a});const a=function u(n){return null===n}},14429:(e,r,_)=>{_.d(r,{A:()=>c});var u=_(76726),a=_(23660),n=_(31287);const c=function E(s){return(0,n.A)(s)?(0,u.A)(s):(0,a.A)(s)}}},h={};function t(e){var r=h[e];if(void 0!==r)return r.exports;var _=h[e]={id:e,loaded:!1,exports:{}};return D[e].call(_.exports,_,_.exports,t),_.loaded=!0,_.exports}t.m=D,t.x=()=>{var e=t.O(void 0,[2036,5358,7586,2076],()=>t(74417));return t.O(e)},e=[],t.O=(r,_,u,a)=>{if(!_){var E=1/0;for(n=0;n<e.length;n++){for(var[_,u,a]=e[n],c=!0,s=0;s<_.length;s++)(!1&a||E>=a)&&Object.keys(t.O).every(f=>t.O[f](_[s]))?_.splice(s--,1):(c=!1,a<E&&(E=a));if(c){e.splice(n--,1);var A=u();void 0!==A&&(r=A)}}return r}a=a||0;for(var n=e.length;n>0&&e[n-1][2]>a;n--)e[n]=e[n-1];e[n]=[_,u,a]},t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var _ in r)t.o(r,_)&&!t.o(e,_)&&Object.defineProperty(e,_,{enumerable:!0,get:r[_]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((r,_)=>(t.f[_](e,r),r),[])),t.u=e=>(2076===e?"common":e)+"."+{2036:"950ada20914cb115",2076:"15d1192bcd21d483",5358:"b07617e082274e68",7586:"368ceba96ee1b551"}[e]+".js",t.miniCssF=e=>{},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),t.j=3989,(()=>{var e;t.tt=()=>(void 0===e&&(e={createScriptURL:r=>r},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),t.tu=e=>t.tt().createScriptURL(e),t.p="",(()=>{var e={3989:1,6370:1};t.f.i=(a,n)=>{e[a]||importScripts(t.tu(t.p+t.u(a)))};var _=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],u=_.push.bind(_);_.push=a=>{var[n,E,c]=a;for(var s in E)t.o(E,s)&&(t.m[s]=E[s]);for(c&&c(t);n.length;)e[n.pop()]=1;u(a)}})(),(()=>{var e=t.x;t.x=()=>Promise.all([2036,5358,7586,2076].map(t.e,t)).then(e)})(),t.x()})();@abacritt/angularx-social-login
MIT
The MIT License

Copyright (c) 2014-2016 Google, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


@angular/animations
MIT

@angular/cdk
MIT
The MIT License

Copyright (c) 2024 Google LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


@angular/common
MIT

@angular/core
MIT

@angular/forms
MIT

@angular/material
MIT
The MIT License

Copyright (c) 2024 Google LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


@angular/material-moment-adapter
MIT
The MIT License

Copyright (c) 2024 Google LLC.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


@angular/platform-browser
MIT

@angular/router
MIT

@babel/runtime
MIT
MIT License

Copyright (c) 2014-present Sebastian McKenzie and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


@iharbeck/ngx-virtual-scroller
MIT

@kurkle/color
MIT
The MIT License (MIT)

Copyright (c) 2018-2021 Jukka Kurkela

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


@ngneat/transloco
MIT
MIT License

Copyright (c) 2019-2021 Netanel Basal, Shahar Kazaz, and Itay Oded.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.



@ngrx/store
MIT
The MIT License (MIT)

Copyright (c) 2017-2023 Brandon Roberts, Mike Ryan, Victor Savkin, Rob Wormald

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This repository includes a file "debounceSync.ts" originially copied from
https://github.com/cartant/rxjs-etc by Nicholas Jamieson, MIT licensed. See the
file header for details.


@ngrx/store-devtools
MIT
The MIT License (MIT)

Copyright (c) 2017-2023 Brandon Roberts, Mike Ryan, Victor Savkin, Rob Wormald

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

This repository includes a file "debounceSync.ts" originially copied from
https://github.com/cartant/rxjs-etc by Nicholas Jamieson, MIT licensed. See the
file header for details.


@ngx-loading-bar/core
MIT

@ngx-loading-bar/http-client
MIT

@tweenjs/tween.js
MIT
The MIT License

Copyright (c) 2010-2012 Tween.js authors.

Easing equations Copyright (c) 2001 Robert Penner http://robertpenner.com/easing/

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


angular2-hotkeys
MIT
The MIT License (MIT)

Copyright (c) 2016 Nick Richardson

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


bootstrap
MIT
The MIT License (MIT)

Copyright (c) 2011-2024 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


canvg
MIT
The MIT License (MIT)

Copyright (c) 2010 - present Gabe Lerner (gabelerner@gmail.com) - https://github.com/canvg/canvg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


chart.js
MIT
The MIT License (MIT)

Copyright (c) 2014-2024 Chart.js Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


core-js
MIT
Copyright (c) 2014-2024 Denis Pushkarev

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


cropperjs
MIT
The MIT License (MIT)

Copyright 2015-present Chen Fengyuan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


crypto-js
MIT
# License

[The MIT License (MIT)](http://opensource.org/licenses/MIT)

Copyright (c) 2009-2013 Jeff Mott  
Copyright (c) 2013-2016 Evan Vosberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


dexie
Apache-2.0
Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright {yyyy} {name of copyright owner}

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.



dompurify
(MPL-2.0 OR Apache-2.0)
DOMPurify
Copyright 2024 Dr.-Ing. Mario Heiderich, Cure53

DOMPurify is free software; you can redistribute it and/or modify it under the
terms of either:

a) the Apache License Version 2.0, or
b) the Mozilla Public License Version 2.0

-----------------------------------------------------------------------------

                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "[]"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright [yyyy] [name of copyright owner]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

-----------------------------------------------------------------------------
Mozilla Public License, version 2.0

1. Definitions

1.1. “Contributor”

     means each individual or legal entity that creates, contributes to the
     creation of, or owns Covered Software.

1.2. “Contributor Version”

     means the combination of the Contributions of others (if any) used by a
     Contributor and that particular Contributor’s Contribution.

1.3. “Contribution”

     means Covered Software of a particular Contributor.

1.4. “Covered Software”

     means Source Code Form to which the initial Contributor has attached the
     notice in Exhibit A, the Executable Form of such Source Code Form, and
     Modifications of such Source Code Form, in each case including portions
     thereof.

1.5. “Incompatible With Secondary Licenses”
     means

     a. that the initial Contributor has attached the notice described in
        Exhibit B to the Covered Software; or

     b. that the Covered Software was made available under the terms of version
        1.1 or earlier of the License, but not also under the terms of a
        Secondary License.

1.6. “Executable Form”

     means any form of the work other than Source Code Form.

1.7. “Larger Work”

     means a work that combines Covered Software with other material, in a separate
     file or files, that is not Covered Software.

1.8. “License”

     means this document.

1.9. “Licensable”

     means having the right to grant, to the maximum extent possible, whether at the
     time of the initial grant or subsequently, any and all of the rights conveyed by
     this License.

1.10. “Modifications”

     means any of the following:

     a. any file in Source Code Form that results from an addition to, deletion
        from, or modification of the contents of Covered Software; or

     b. any new file in Source Code Form that contains any Covered Software.

1.11. “Patent Claims” of a Contributor

      means any patent claim(s), including without limitation, method, process,
      and apparatus claims, in any patent Licensable by such Contributor that
      would be infringed, but for the grant of the License, by the making,
      using, selling, offering for sale, having made, import, or transfer of
      either its Contributions or its Contributor Version.

1.12. “Secondary License”

      means either the GNU General Public License, Version 2.0, the GNU Lesser
      General Public License, Version 2.1, the GNU Affero General Public
      License, Version 3.0, or any later versions of those licenses.

1.13. “Source Code Form”

      means the form of the work preferred for making modifications.

1.14. “You” (or “Your”)

      means an individual or a legal entity exercising rights under this
      License. For legal entities, “You” includes any entity that controls, is
      controlled by, or is under common control with You. For purposes of this
      definition, “control” means (a) the power, direct or indirect, to cause
      the direction or management of such entity, whether by contract or
      otherwise, or (b) ownership of more than fifty percent (50%) of the
      outstanding shares or beneficial ownership of such entity.


2. License Grants and Conditions

2.1. Grants

     Each Contributor hereby grants You a world-wide, royalty-free,
     non-exclusive license:

     a. under intellectual property rights (other than patent or trademark)
        Licensable by such Contributor to use, reproduce, make available,
        modify, display, perform, distribute, and otherwise exploit its
        Contributions, either on an unmodified basis, with Modifications, or as
        part of a Larger Work; and

     b. under Patent Claims of such Contributor to make, use, sell, offer for
        sale, have made, import, and otherwise transfer either its Contributions
        or its Contributor Version.

2.2. Effective Date

     The licenses granted in Section 2.1 with respect to any Contribution become
     effective for each Contribution on the date the Contributor first distributes
     such Contribution.

2.3. Limitations on Grant Scope

     The licenses granted in this Section 2 are the only rights granted under this
     License. No additional rights or licenses will be implied from the distribution
     or licensing of Covered Software under this License. Notwithstanding Section
     2.1(b) above, no patent license is granted by a Contributor:

     a. for any code that a Contributor has removed from Covered Software; or

     b. for infringements caused by: (i) Your and any other third party’s
        modifications of Covered Software, or (ii) the combination of its
        Contributions with other software (except as part of its Contributor
        Version); or

     c. under Patent Claims infringed by Covered Software in the absence of its
        Contributions.

     This License does not grant any rights in the trademarks, service marks, or
     logos of any Contributor (except as may be necessary to comply with the
     notice requirements in Section 3.4).

2.4. Subsequent Licenses

     No Contributor makes additional grants as a result of Your choice to
     distribute the Covered Software under a subsequent version of this License
     (see Section 10.2) or under the terms of a Secondary License (if permitted
     under the terms of Section 3.3).

2.5. Representation

     Each Contributor represents that the Contributor believes its Contributions
     are its original creation(s) or it has sufficient rights to grant the
     rights to its Contributions conveyed by this License.

2.6. Fair Use

     This License is not intended to limit any rights You have under applicable
     copyright doctrines of fair use, fair dealing, or other equivalents.

2.7. Conditions

     Sections 3.1, 3.2, 3.3, and 3.4 are conditions of the licenses granted in
     Section 2.1.


3. Responsibilities

3.1. Distribution of Source Form

     All distribution of Covered Software in Source Code Form, including any
     Modifications that You create or to which You contribute, must be under the
     terms of this License. You must inform recipients that the Source Code Form
     of the Covered Software is governed by the terms of this License, and how
     they can obtain a copy of this License. You may not attempt to alter or
     restrict the recipients’ rights in the Source Code Form.

3.2. Distribution of Executable Form

     If You distribute Covered Software in Executable Form then:

     a. such Covered Software must also be made available in Source Code Form,
        as described in Section 3.1, and You must inform recipients of the
        Executable Form how they can obtain a copy of such Source Code Form by
        reasonable means in a timely manner, at a charge no more than the cost
        of distribution to the recipient; and

     b. You may distribute such Executable Form under the terms of this License,
        or sublicense it under different terms, provided that the license for
        the Executable Form does not attempt to limit or alter the recipients’
        rights in the Source Code Form under this License.

3.3. Distribution of a Larger Work

     You may create and distribute a Larger Work under terms of Your choice,
     provided that You also comply with the requirements of this License for the
     Covered Software. If the Larger Work is a combination of Covered Software
     with a work governed by one or more Secondary Licenses, and the Covered
     Software is not Incompatible With Secondary Licenses, this License permits
     You to additionally distribute such Covered Software under the terms of
     such Secondary License(s), so that the recipient of the Larger Work may, at
     their option, further distribute the Covered Software under the terms of
     either this License or such Secondary License(s).

3.4. Notices

     You may not remove or alter the substance of any license notices (including
     copyright notices, patent notices, disclaimers of warranty, or limitations
     of liability) contained within the Source Code Form of the Covered
     Software, except that You may alter any license notices to the extent
     required to remedy known factual inaccuracies.

3.5. Application of Additional Terms

     You may choose to offer, and to charge a fee for, warranty, support,
     indemnity or liability obligations to one or more recipients of Covered
     Software. However, You may do so only on Your own behalf, and not on behalf
     of any Contributor. You must make it absolutely clear that any such
     warranty, support, indemnity, or liability obligation is offered by You
     alone, and You hereby agree to indemnify every Contributor for any
     liability incurred by such Contributor as a result of warranty, support,
     indemnity or liability terms You offer. You may include additional
     disclaimers of warranty and limitations of liability specific to any
     jurisdiction.

4. Inability to Comply Due to Statute or Regulation

   If it is impossible for You to comply with any of the terms of this License
   with respect to some or all of the Covered Software due to statute, judicial
   order, or regulation then You must: (a) comply with the terms of this License
   to the maximum extent possible; and (b) describe the limitations and the code
   they affect. Such description must be placed in a text file included with all
   distributions of the Covered Software under this License. Except to the
   extent prohibited by statute or regulation, such description must be
   sufficiently detailed for a recipient of ordinary skill to be able to
   understand it.

5. Termination

5.1. The rights granted under this License will terminate automatically if You
     fail to comply with any of its terms. However, if You become compliant,
     then the rights granted under this License from a particular Contributor
     are reinstated (a) provisionally, unless and until such Contributor
     explicitly and finally terminates Your grants, and (b) on an ongoing basis,
     if such Contributor fails to notify You of the non-compliance by some
     reasonable means prior to 60 days after You have come back into compliance.
     Moreover, Your grants from a particular Contributor are reinstated on an
     ongoing basis if such Contributor notifies You of the non-compliance by
     some reasonable means, this is the first time You have received notice of
     non-compliance with this License from such Contributor, and You become
     compliant prior to 30 days after Your receipt of the notice.

5.2. If You initiate litigation against any entity by asserting a patent
     infringement claim (excluding declaratory judgment actions, counter-claims,
     and cross-claims) alleging that a Contributor Version directly or
     indirectly infringes any patent, then the rights granted to You by any and
     all Contributors for the Covered Software under Section 2.1 of this License
     shall terminate.

5.3. In the event of termination under Sections 5.1 or 5.2 above, all end user
     license agreements (excluding distributors and resellers) which have been
     validly granted by You or Your distributors under this License prior to
     termination shall survive termination.

6. Disclaimer of Warranty

   Covered Software is provided under this License on an “as is” basis, without
   warranty of any kind, either expressed, implied, or statutory, including,
   without limitation, warranties that the Covered Software is free of defects,
   merchantable, fit for a particular purpose or non-infringing. The entire
   risk as to the quality and performance of the Covered Software is with You.
   Should any Covered Software prove defective in any respect, You (not any
   Contributor) assume the cost of any necessary servicing, repair, or
   correction. This disclaimer of warranty constitutes an essential part of this
   License. No use of  any Covered Software is authorized under this License
   except under this disclaimer.

7. Limitation of Liability

   Under no circumstances and under no legal theory, whether tort (including
   negligence), contract, or otherwise, shall any Contributor, or anyone who
   distributes Covered Software as permitted above, be liable to You for any
   direct, indirect, special, incidental, or consequential damages of any
   character including, without limitation, damages for lost profits, loss of
   goodwill, work stoppage, computer failure or malfunction, or any and all
   other commercial damages or losses, even if such party shall have been
   informed of the possibility of such damages. This limitation of liability
   shall not apply to liability for death or personal injury resulting from such
   party’s negligence to the extent applicable law prohibits such limitation.
   Some jurisdictions do not allow the exclusion or limitation of incidental or
   consequential damages, so this exclusion and limitation may not apply to You.

8. Litigation

   Any litigation relating to this License may be brought only in the courts of
   a jurisdiction where the defendant maintains its principal place of business
   and such litigation shall be governed by laws of that jurisdiction, without
   reference to its conflict-of-law provisions. Nothing in this Section shall
   prevent a party’s ability to bring cross-claims or counter-claims.

9. Miscellaneous

   This License represents the complete agreement concerning the subject matter
   hereof. If any provision of this License is held to be unenforceable, such
   provision shall be reformed only to the extent necessary to make it
   enforceable. Any law or regulation which provides that the language of a
   contract shall be construed against the drafter shall not be used to construe
   this License against a Contributor.


10. Versions of the License

10.1. New Versions

      Mozilla Foundation is the license steward. Except as provided in Section
      10.3, no one other than the license steward has the right to modify or
      publish new versions of this License. Each version will be given a
      distinguishing version number.

10.2. Effect of New Versions

      You may distribute the Covered Software under the terms of the version of
      the License under which You originally received the Covered Software, or
      under the terms of any subsequent version published by the license
      steward.

10.3. Modified Versions

      If you create software not governed by this License, and you want to
      create a new license for such software, you may create and use a modified
      version of this License if you rename the license and remove any
      references to the name of the license steward (except to note that such
      modified license differs from this License).

10.4. Distributing Source Code Form that is Incompatible With Secondary Licenses
      If You choose to distribute Source Code Form that is Incompatible With
      Secondary Licenses under the terms of this version of the License, the
      notice described in Exhibit B of this License must be attached.

Exhibit A - Source Code Form License Notice

      This Source Code Form is subject to the
      terms of the Mozilla Public License, v.
      2.0. If a copy of the MPL was not
      distributed with this file, You can
      obtain one at
      http://mozilla.org/MPL/2.0/.

If it is not possible or desirable to put the notice in a particular file, then
You may include the notice in a location (such as a LICENSE file in a relevant
directory) where a recipient would be likely to look for such a notice.

You may add additional accurate notices of copyright ownership.

Exhibit B - “Incompatible With Secondary Licenses” Notice

      This Source Code Form is “Incompatible
      With Secondary Licenses”, as defined by
      the Mozilla Public License, v. 2.0.



exceljs
MIT
The MIT License (MIT)

Copyright (c) 2014-2019 Guyon Roche

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



fflate
MIT
MIT License

Copyright (c) 2023 Arjun Barrett

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

file-saver
MIT
The MIT License

Copyright © 2016 [Eli Grey][1].

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

  [1]: http://eligrey.com


flat
BSD-3-Clause
Copyright (c) 2014, Hugh Kennedy
All rights reserved.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the  nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


html-to-pdfmake
MIT
MIT License

Copyright (c) 2019 Aymeric

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


html2canvas
MIT
Copyright (c) 2012 Niklas von Hertzen

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

jspdf
MIT
Copyright
(c) 2010-2021 James Hall, https://github.com/MrRio/jsPDF
(c) 2015-2021 yWorks GmbH, https://www.yworks.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


jszip
(MIT OR GPL-3.0-or-later)
JSZip is dual licensed. At your choice you may use it under the MIT license *or* the GPLv3
license.

The MIT License
===============

Copyright (c) 2009-2016 Stuart Knightley, David Duponchel, Franz Buchinger, António Afonso

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


GPL version 3
=============

                    GNU GENERAL PUBLIC LICENSE
                       Version 3, 29 June 2007

 Copyright (C) 2007 Free Software Foundation, Inc. <http://fsf.org/>
 Everyone is permitted to copy and distribute verbatim copies
 of this license document, but changing it is not allowed.

                            Preamble

  The GNU General Public License is a free, copyleft license for
software and other kinds of works.

  The licenses for most software and other practical works are designed
to take away your freedom to share and change the works.  By contrast,
the GNU General Public License is intended to guarantee your freedom to
share and change all versions of a program--to make sure it remains free
software for all its users.  We, the Free Software Foundation, use the
GNU General Public License for most of our software; it applies also to
any other work released this way by its authors.  You can apply it to
your programs, too.

  When we speak of free software, we are referring to freedom, not
price.  Our General Public Licenses are designed to make sure that you
have the freedom to distribute copies of free software (and charge for
them if you wish), that you receive source code or can get it if you
want it, that you can change the software or use pieces of it in new
free programs, and that you know you can do these things.

  To protect your rights, we need to prevent others from denying you
these rights or asking you to surrender the rights.  Therefore, you have
certain responsibilities if you distribute copies of the software, or if
you modify it: responsibilities to respect the freedom of others.

  For example, if you distribute copies of such a program, whether
gratis or for a fee, you must pass on to the recipients the same
freedoms that you received.  You must make sure that they, too, receive
or can get the source code.  And you must show them these terms so they
know their rights.

  Developers that use the GNU GPL protect your rights with two steps:
(1) assert copyright on the software, and (2) offer you this License
giving you legal permission to copy, distribute and/or modify it.

  For the developers' and authors' protection, the GPL clearly explains
that there is no warranty for this free software.  For both users' and
authors' sake, the GPL requires that modified versions be marked as
changed, so that their problems will not be attributed erroneously to
authors of previous versions.

  Some devices are designed to deny users access to install or run
modified versions of the software inside them, although the manufacturer
can do so.  This is fundamentally incompatible with the aim of
protecting users' freedom to change the software.  The systematic
pattern of such abuse occurs in the area of products for individuals to
use, which is precisely where it is most unacceptable.  Therefore, we
have designed this version of the GPL to prohibit the practice for those
products.  If such problems arise substantially in other domains, we
stand ready to extend this provision to those domains in future versions
of the GPL, as needed to protect the freedom of users.

  Finally, every program is threatened constantly by software patents.
States should not allow patents to restrict development and use of
software on general-purpose computers, but in those that do, we wish to
avoid the special danger that patents applied to a free program could
make it effectively proprietary.  To prevent this, the GPL assures that
patents cannot be used to render the program non-free.

  The precise terms and conditions for copying, distribution and
modification follow.

                       TERMS AND CONDITIONS

  0. Definitions.

  "This License" refers to version 3 of the GNU General Public License.

  "Copyright" also means copyright-like laws that apply to other kinds of
works, such as semiconductor masks.

  "The Program" refers to any copyrightable work licensed under this
License.  Each licensee is addressed as "you".  "Licensees" and
"recipients" may be individuals or organizations.

  To "modify" a work means to copy from or adapt all or part of the work
in a fashion requiring copyright permission, other than the making of an
exact copy.  The resulting work is called a "modified version" of the
earlier work or a work "based on" the earlier work.

  A "covered work" means either the unmodified Program or a work based
on the Program.

  To "propagate" a work means to do anything with it that, without
permission, would make you directly or secondarily liable for
infringement under applicable copyright law, except executing it on a
computer or modifying a private copy.  Propagation includes copying,
distribution (with or without modification), making available to the
public, and in some countries other activities as well.

  To "convey" a work means any kind of propagation that enables other
parties to make or receive copies.  Mere interaction with a user through
a computer network, with no transfer of a copy, is not conveying.

  An interactive user interface displays "Appropriate Legal Notices"
to the extent that it includes a convenient and prominently visible
feature that (1) displays an appropriate copyright notice, and (2)
tells the user that there is no warranty for the work (except to the
extent that warranties are provided), that licensees may convey the
work under this License, and how to view a copy of this License.  If
the interface presents a list of user commands or options, such as a
menu, a prominent item in the list meets this criterion.

  1. Source Code.

  The "source code" for a work means the preferred form of the work
for making modifications to it.  "Object code" means any non-source
form of a work.

  A "Standard Interface" means an interface that either is an official
standard defined by a recognized standards body, or, in the case of
interfaces specified for a particular programming language, one that
is widely used among developers working in that language.

  The "System Libraries" of an executable work include anything, other
than the work as a whole, that (a) is included in the normal form of
packaging a Major Component, but which is not part of that Major
Component, and (b) serves only to enable use of the work with that
Major Component, or to implement a Standard Interface for which an
implementation is available to the public in source code form.  A
"Major Component", in this context, means a major essential component
(kernel, window system, and so on) of the specific operating system
(if any) on which the executable work runs, or a compiler used to
produce the work, or an object code interpreter used to run it.

  The "Corresponding Source" for a work in object code form means all
the source code needed to generate, install, and (for an executable
work) run the object code and to modify the work, including scripts to
control those activities.  However, it does not include the work's
System Libraries, or general-purpose tools or generally available free
programs which are used unmodified in performing those activities but
which are not part of the work.  For example, Corresponding Source
includes interface definition files associated with source files for
the work, and the source code for shared libraries and dynamically
linked subprograms that the work is specifically designed to require,
such as by intimate data communication or control flow between those
subprograms and other parts of the work.

  The Corresponding Source need not include anything that users
can regenerate automatically from other parts of the Corresponding
Source.

  The Corresponding Source for a work in source code form is that
same work.

  2. Basic Permissions.

  All rights granted under this License are granted for the term of
copyright on the Program, and are irrevocable provided the stated
conditions are met.  This License explicitly affirms your unlimited
permission to run the unmodified Program.  The output from running a
covered work is covered by this License only if the output, given its
content, constitutes a covered work.  This License acknowledges your
rights of fair use or other equivalent, as provided by copyright law.

  You may make, run and propagate covered works that you do not
convey, without conditions so long as your license otherwise remains
in force.  You may convey covered works to others for the sole purpose
of having them make modifications exclusively for you, or provide you
with facilities for running those works, provided that you comply with
the terms of this License in conveying all material for which you do
not control copyright.  Those thus making or running the covered works
for you must do so exclusively on your behalf, under your direction
and control, on terms that prohibit them from making any copies of
your copyrighted material outside their relationship with you.

  Conveying under any other circumstances is permitted solely under
the conditions stated below.  Sublicensing is not allowed; section 10
makes it unnecessary.

  3. Protecting Users' Legal Rights From Anti-Circumvention Law.

  No covered work shall be deemed part of an effective technological
measure under any applicable law fulfilling obligations under article
11 of the WIPO copyright treaty adopted on 20 December 1996, or
similar laws prohibiting or restricting circumvention of such
measures.

  When you convey a covered work, you waive any legal power to forbid
circumvention of technological measures to the extent such circumvention
is effected by exercising rights under this License with respect to
the covered work, and you disclaim any intention to limit operation or
modification of the work as a means of enforcing, against the work's
users, your or third parties' legal rights to forbid circumvention of
technological measures.

  4. Conveying Verbatim Copies.

  You may convey verbatim copies of the Program's source code as you
receive it, in any medium, provided that you conspicuously and
appropriately publish on each copy an appropriate copyright notice;
keep intact all notices stating that this License and any
non-permissive terms added in accord with section 7 apply to the code;
keep intact all notices of the absence of any warranty; and give all
recipients a copy of this License along with the Program.

  You may charge any price or no price for each copy that you convey,
and you may offer support or warranty protection for a fee.

  5. Conveying Modified Source Versions.

  You may convey a work based on the Program, or the modifications to
produce it from the Program, in the form of source code under the
terms of section 4, provided that you also meet all of these conditions:

    a) The work must carry prominent notices stating that you modified
    it, and giving a relevant date.

    b) The work must carry prominent notices stating that it is
    released under this License and any conditions added under section
    7.  This requirement modifies the requirement in section 4 to
    "keep intact all notices".

    c) You must license the entire work, as a whole, under this
    License to anyone who comes into possession of a copy.  This
    License will therefore apply, along with any applicable section 7
    additional terms, to the whole of the work, and all its parts,
    regardless of how they are packaged.  This License gives no
    permission to license the work in any other way, but it does not
    invalidate such permission if you have separately received it.

    d) If the work has interactive user interfaces, each must display
    Appropriate Legal Notices; however, if the Program has interactive
    interfaces that do not display Appropriate Legal Notices, your
    work need not make them do so.

  A compilation of a covered work with other separate and independent
works, which are not by their nature extensions of the covered work,
and which are not combined with it such as to form a larger program,
in or on a volume of a storage or distribution medium, is called an
"aggregate" if the compilation and its resulting copyright are not
used to limit the access or legal rights of the compilation's users
beyond what the individual works permit.  Inclusion of a covered work
in an aggregate does not cause this License to apply to the other
parts of the aggregate.

  6. Conveying Non-Source Forms.

  You may convey a covered work in object code form under the terms
of sections 4 and 5, provided that you also convey the
machine-readable Corresponding Source under the terms of this License,
in one of these ways:

    a) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by the
    Corresponding Source fixed on a durable physical medium
    customarily used for software interchange.

    b) Convey the object code in, or embodied in, a physical product
    (including a physical distribution medium), accompanied by a
    written offer, valid for at least three years and valid for as
    long as you offer spare parts or customer support for that product
    model, to give anyone who possesses the object code either (1) a
    copy of the Corresponding Source for all the software in the
    product that is covered by this License, on a durable physical
    medium customarily used for software interchange, for a price no
    more than your reasonable cost of physically performing this
    conveying of source, or (2) access to copy the
    Corresponding Source from a network server at no charge.

    c) Convey individual copies of the object code with a copy of the
    written offer to provide the Corresponding Source.  This
    alternative is allowed only occasionally and noncommercially, and
    only if you received the object code with such an offer, in accord
    with subsection 6b.

    d) Convey the object code by offering access from a designated
    place (gratis or for a charge), and offer equivalent access to the
    Corresponding Source in the same way through the same place at no
    further charge.  You need not require recipients to copy the
    Corresponding Source along with the object code.  If the place to
    copy the object code is a network server, the Corresponding Source
    may be on a different server (operated by you or a third party)
    that supports equivalent copying facilities, provided you maintain
    clear directions next to the object code saying where to find the
    Corresponding Source.  Regardless of what server hosts the
    Corresponding Source, you remain obligated to ensure that it is
    available for as long as needed to satisfy these requirements.

    e) Convey the object code using peer-to-peer transmission, provided
    you inform other peers where the object code and Corresponding
    Source of the work are being offered to the general public at no
    charge under subsection 6d.

  A separable portion of the object code, whose source code is excluded
from the Corresponding Source as a System Library, need not be
included in conveying the object code work.

  A "User Product" is either (1) a "consumer product", which means any
tangible personal property which is normally used for personal, family,
or household purposes, or (2) anything designed or sold for incorporation
into a dwelling.  In determining whether a product is a consumer product,
doubtful cases shall be resolved in favor of coverage.  For a particular
product received by a particular user, "normally used" refers to a
typical or common use of that class of product, regardless of the status
of the particular user or of the way in which the particular user
actually uses, or expects or is expected to use, the product.  A product
is a consumer product regardless of whether the product has substantial
commercial, industrial or non-consumer uses, unless such uses represent
the only significant mode of use of the product.

  "Installation Information" for a User Product means any methods,
procedures, authorization keys, or other information required to install
and execute modified versions of a covered work in that User Product from
a modified version of its Corresponding Source.  The information must
suffice to ensure that the continued functioning of the modified object
code is in no case prevented or interfered with solely because
modification has been made.

  If you convey an object code work under this section in, or with, or
specifically for use in, a User Product, and the conveying occurs as
part of a transaction in which the right of possession and use of the
User Product is transferred to the recipient in perpetuity or for a
fixed term (regardless of how the transaction is characterized), the
Corresponding Source conveyed under this section must be accompanied
by the Installation Information.  But this requirement does not apply
if neither you nor any third party retains the ability to install
modified object code on the User Product (for example, the work has
been installed in ROM).

  The requirement to provide Installation Information does not include a
requirement to continue to provide support service, warranty, or updates
for a work that has been modified or installed by the recipient, or for
the User Product in which it has been modified or installed.  Access to a
network may be denied when the modification itself materially and
adversely affects the operation of the network or violates the rules and
protocols for communication across the network.

  Corresponding Source conveyed, and Installation Information provided,
in accord with this section must be in a format that is publicly
documented (and with an implementation available to the public in
source code form), and must require no special password or key for
unpacking, reading or copying.

  7. Additional Terms.

  "Additional permissions" are terms that supplement the terms of this
License by making exceptions from one or more of its conditions.
Additional permissions that are applicable to the entire Program shall
be treated as though they were included in this License, to the extent
that they are valid under applicable law.  If additional permissions
apply only to part of the Program, that part may be used separately
under those permissions, but the entire Program remains governed by
this License without regard to the additional permissions.

  When you convey a copy of a covered work, you may at your option
remove any additional permissions from that copy, or from any part of
it.  (Additional permissions may be written to require their own
removal in certain cases when you modify the work.)  You may place
additional permissions on material, added by you to a covered work,
for which you have or can give appropriate copyright permission.

  Notwithstanding any other provision of this License, for material you
add to a covered work, you may (if authorized by the copyright holders of
that material) supplement the terms of this License with terms:

    a) Disclaiming warranty or limiting liability differently from the
    terms of sections 15 and 16 of this License; or

    b) Requiring preservation of specified reasonable legal notices or
    author attributions in that material or in the Appropriate Legal
    Notices displayed by works containing it; or

    c) Prohibiting misrepresentation of the origin of that material, or
    requiring that modified versions of such material be marked in
    reasonable ways as different from the original version; or

    d) Limiting the use for publicity purposes of names of licensors or
    authors of the material; or

    e) Declining to grant rights under trademark law for use of some
    trade names, trademarks, or service marks; or

    f) Requiring indemnification of licensors and authors of that
    material by anyone who conveys the material (or modified versions of
    it) with contractual assumptions of liability to the recipient, for
    any liability that these contractual assumptions directly impose on
    those licensors and authors.

  All other non-permissive additional terms are considered "further
restrictions" within the meaning of section 10.  If the Program as you
received it, or any part of it, contains a notice stating that it is
governed by this License along with a term that is a further
restriction, you may remove that term.  If a license document contains
a further restriction but permits relicensing or conveying under this
License, you may add to a covered work material governed by the terms
of that license document, provided that the further restriction does
not survive such relicensing or conveying.

  If you add terms to a covered work in accord with this section, you
must place, in the relevant source files, a statement of the
additional terms that apply to those files, or a notice indicating
where to find the applicable terms.

  Additional terms, permissive or non-permissive, may be stated in the
form of a separately written license, or stated as exceptions;
the above requirements apply either way.

  8. Termination.

  You may not propagate or modify a covered work except as expressly
provided under this License.  Any attempt otherwise to propagate or
modify it is void, and will automatically terminate your rights under
this License (including any patent licenses granted under the third
paragraph of section 11).

  However, if you cease all violation of this License, then your
license from a particular copyright holder is reinstated (a)
provisionally, unless and until the copyright holder explicitly and
finally terminates your license, and (b) permanently, if the copyright
holder fails to notify you of the violation by some reasonable means
prior to 60 days after the cessation.

  Moreover, your license from a particular copyright holder is
reinstated permanently if the copyright holder notifies you of the
violation by some reasonable means, this is the first time you have
received notice of violation of this License (for any work) from that
copyright holder, and you cure the violation prior to 30 days after
your receipt of the notice.

  Termination of your rights under this section does not terminate the
licenses of parties who have received copies or rights from you under
this License.  If your rights have been terminated and not permanently
reinstated, you do not qualify to receive new licenses for the same
material under section 10.

  9. Acceptance Not Required for Having Copies.

  You are not required to accept this License in order to receive or
run a copy of the Program.  Ancillary propagation of a covered work
occurring solely as a consequence of using peer-to-peer transmission
to receive a copy likewise does not require acceptance.  However,
nothing other than this License grants you permission to propagate or
modify any covered work.  These actions infringe copyright if you do
not accept this License.  Therefore, by modifying or propagating a
covered work, you indicate your acceptance of this License to do so.

  10. Automatic Licensing of Downstream Recipients.

  Each time you convey a covered work, the recipient automatically
receives a license from the original licensors, to run, modify and
propagate that work, subject to this License.  You are not responsible
for enforcing compliance by third parties with this License.

  An "entity transaction" is a transaction transferring control of an
organization, or substantially all assets of one, or subdividing an
organization, or merging organizations.  If propagation of a covered
work results from an entity transaction, each party to that
transaction who receives a copy of the work also receives whatever
licenses to the work the party's predecessor in interest had or could
give under the previous paragraph, plus a right to possession of the
Corresponding Source of the work from the predecessor in interest, if
the predecessor has it or can get it with reasonable efforts.

  You may not impose any further restrictions on the exercise of the
rights granted or affirmed under this License.  For example, you may
not impose a license fee, royalty, or other charge for exercise of
rights granted under this License, and you may not initiate litigation
(including a cross-claim or counterclaim in a lawsuit) alleging that
any patent claim is infringed by making, using, selling, offering for
sale, or importing the Program or any portion of it.

  11. Patents.

  A "contributor" is a copyright holder who authorizes use under this
License of the Program or a work on which the Program is based.  The
work thus licensed is called the contributor's "contributor version".

  A contributor's "essential patent claims" are all patent claims
owned or controlled by the contributor, whether already acquired or
hereafter acquired, that would be infringed by some manner, permitted
by this License, of making, using, or selling its contributor version,
but do not include claims that would be infringed only as a
consequence of further modification of the contributor version.  For
purposes of this definition, "control" includes the right to grant
patent sublicenses in a manner consistent with the requirements of
this License.

  Each contributor grants you a non-exclusive, worldwide, royalty-free
patent license under the contributor's essential patent claims, to
make, use, sell, offer for sale, import and otherwise run, modify and
propagate the contents of its contributor version.

  In the following three paragraphs, a "patent license" is any express
agreement or commitment, however denominated, not to enforce a patent
(such as an express permission to practice a patent or covenant not to
sue for patent infringement).  To "grant" such a patent license to a
party means to make such an agreement or commitment not to enforce a
patent against the party.

  If you convey a covered work, knowingly relying on a patent license,
and the Corresponding Source of the work is not available for anyone
to copy, free of charge and under the terms of this License, through a
publicly available network server or other readily accessible means,
then you must either (1) cause the Corresponding Source to be so
available, or (2) arrange to deprive yourself of the benefit of the
patent license for this particular work, or (3) arrange, in a manner
consistent with the requirements of this License, to extend the patent
license to downstream recipients.  "Knowingly relying" means you have
actual knowledge that, but for the patent license, your conveying the
covered work in a country, or your recipient's use of the covered work
in a country, would infringe one or more identifiable patents in that
country that you have reason to believe are valid.

  If, pursuant to or in connection with a single transaction or
arrangement, you convey, or propagate by procuring conveyance of, a
covered work, and grant a patent license to some of the parties
receiving the covered work authorizing them to use, propagate, modify
or convey a specific copy of the covered work, then the patent license
you grant is automatically extended to all recipients of the covered
work and works based on it.

  A patent license is "discriminatory" if it does not include within
the scope of its coverage, prohibits the exercise of, or is
conditioned on the non-exercise of one or more of the rights that are
specifically granted under this License.  You may not convey a covered
work if you are a party to an arrangement with a third party that is
in the business of distributing software, under which you make payment
to the third party based on the extent of your activity of conveying
the work, and under which the third party grants, to any of the
parties who would receive the covered work from you, a discriminatory
patent license (a) in connection with copies of the covered work
conveyed by you (or copies made from those copies), or (b) primarily
for and in connection with specific products or compilations that
contain the covered work, unless you entered into that arrangement,
or that patent license was granted, prior to 28 March 2007.

  Nothing in this License shall be construed as excluding or limiting
any implied license or other defenses to infringement that may
otherwise be available to you under applicable patent law.

  12. No Surrender of Others' Freedom.

  If conditions are imposed on you (whether by court order, agreement or
otherwise) that contradict the conditions of this License, they do not
excuse you from the conditions of this License.  If you cannot convey a
covered work so as to satisfy simultaneously your obligations under this
License and any other pertinent obligations, then as a consequence you may
not convey it at all.  For example, if you agree to terms that obligate you
to collect a royalty for further conveying from those to whom you convey
the Program, the only way you could satisfy both those terms and this
License would be to refrain entirely from conveying the Program.

  13. Use with the GNU Affero General Public License.

  Notwithstanding any other provision of this License, you have
permission to link or combine any covered work with a work licensed
under version 3 of the GNU Affero General Public License into a single
combined work, and to convey the resulting work.  The terms of this
License will continue to apply to the part which is the covered work,
but the special requirements of the GNU Affero General Public License,
section 13, concerning interaction through a network will apply to the
combination as such.

  14. Revised Versions of this License.

  The Free Software Foundation may publish revised and/or new versions of
the GNU General Public License from time to time.  Such new versions will
be similar in spirit to the present version, but may differ in detail to
address new problems or concerns.

  Each version is given a distinguishing version number.  If the
Program specifies that a certain numbered version of the GNU General
Public License "or any later version" applies to it, you have the
option of following the terms and conditions either of that numbered
version or of any later version published by the Free Software
Foundation.  If the Program does not specify a version number of the
GNU General Public License, you may choose any version ever published
by the Free Software Foundation.

  If the Program specifies that a proxy can decide which future
versions of the GNU General Public License can be used, that proxy's
public statement of acceptance of a version permanently authorizes you
to choose that version for the Program.

  Later license versions may give you additional or different
permissions.  However, no additional obligations are imposed on any
author or copyright holder as a result of your choosing to follow a
later version.

  15. Disclaimer of Warranty.

  THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
APPLICABLE LAW.  EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT
HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM "AS IS" WITHOUT WARRANTY
OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE.  THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM
IS WITH YOU.  SHOULD THE PROGRAM PROVE DEFECTIVE, YOU ASSUME THE COST OF
ALL NECESSARY SERVICING, REPAIR OR CORRECTION.

  16. Limitation of Liability.

  IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING
WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS
THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY
GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE
USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF
DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD
PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS),
EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF
SUCH DAMAGES.

  17. Interpretation of Sections 15 and 16.

  If the disclaimer of warranty and limitation of liability provided
above cannot be given local legal effect according to their terms,
reviewing courts shall apply local law that most closely approximates
an absolute waiver of all civil liability in connection with the
Program, unless a warranty or assumption of liability accompanies a
copy of the Program in return for a fee.

                     END OF TERMS AND CONDITIONS


lodash
MIT
Copyright OpenJS Foundation and other contributors <https://openjsf.org/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code displayed within the prose of the
documentation.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====

Files located in the node_modules and vendor directories are externally
maintained libraries used by this software which have their own
licenses; we recommend you read them, as their terms may differ from the
terms above.


lodash-es
MIT
Copyright OpenJS Foundation and other contributors <https://openjsf.org/>

Based on Underscore.js, copyright Jeremy Ashkenas,
DocumentCloud and Investigative Reporters & Editors <http://underscorejs.org/>

This software consists of voluntary contributions made by many
individuals. For exact contribution history, see the revision history
available at https://github.com/lodash/lodash

The following license applies to all parts of this software except as
documented below:

====

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

====

Copyright and related rights for sample code are waived via CC0. Sample
code is defined as all source code displayed within the prose of the
documentation.

CC0: http://creativecommons.org/publicdomain/zero/1.0/

====

Files located in the node_modules and vendor directories are externally
maintained libraries used by this software which have their own
licenses; we recommend you read them, as their terms may differ from the
terms above.


metismenujs
MIT
MIT License

Copyright (c) 2018 Osman Nuri Okumuş

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


moment
MIT
Copyright (c) JS Foundation and other contributors

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


mousetrap
Apache-2.0 WITH LLVM-exception

                              Apache License
                        Version 2.0, January 2004
                     http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

   "License" shall mean the terms and conditions for use, reproduction,
   and distribution as defined by Sections 1 through 9 of this document.

   "Licensor" shall mean the copyright owner or entity authorized by
   the copyright owner that is granting the License.

   "Legal Entity" shall mean the union of the acting entity and all
   other entities that control, are controlled by, or are under common
   control with that entity. For the purposes of this definition,
   "control" means (i) the power, direct or indirect, to cause the
   direction or management of such entity, whether by contract or
   otherwise, or (ii) ownership of fifty percent (50%) or more of the
   outstanding shares, or (iii) beneficial ownership of such entity.

   "You" (or "Your") shall mean an individual or Legal Entity
   exercising permissions granted by this License.

   "Source" form shall mean the preferred form for making modifications,
   including but not limited to software source code, documentation
   source, and configuration files.

   "Object" form shall mean any form resulting from mechanical
   transformation or translation of a Source form, including but
   not limited to compiled object code, generated documentation,
   and conversions to other media types.

   "Work" shall mean the work of authorship, whether in Source or
   Object form, made available under the License, as indicated by a
   copyright notice that is included in or attached to the work
   (an example is provided in the Appendix below).

   "Derivative Works" shall mean any work, whether in Source or Object
   form, that is based on (or derived from) the Work and for which the
   editorial revisions, annotations, elaborations, or other modifications
   represent, as a whole, an original work of authorship. For the purposes
   of this License, Derivative Works shall not include works that remain
   separable from, or merely link (or bind by name) to the interfaces of,
   the Work and Derivative Works thereof.

   "Contribution" shall mean any work of authorship, including
   the original version of the Work and any modifications or additions
   to that Work or Derivative Works thereof, that is intentionally
   submitted to Licensor for inclusion in the Work by the copyright owner
   or by an individual or Legal Entity authorized to submit on behalf of
   the copyright owner. For the purposes of this definition, "submitted"
   means any form of electronic, verbal, or written communication sent
   to the Licensor or its representatives, including but not limited to
   communication on electronic mailing lists, source code control systems,
   and issue tracking systems that are managed by, or on behalf of, the
   Licensor for the purpose of discussing and improving the Work, but
   excluding communication that is conspicuously marked or otherwise
   designated in writing by the copyright owner as "Not a Contribution."

   "Contributor" shall mean Licensor and any individual or Legal Entity
   on behalf of whom a Contribution has been received by Licensor and
   subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of
   this License, each Contributor hereby grants to You a perpetual,
   worldwide, non-exclusive, no-charge, royalty-free, irrevocable
   copyright license to reproduce, prepare Derivative Works of,
   publicly display, publicly perform, sublicense, and distribute the
   Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of
   this License, each Contributor hereby grants to You a perpetual,
   worldwide, non-exclusive, no-charge, royalty-free, irrevocable
   (except as stated in this section) patent license to make, have made,
   use, offer to sell, sell, import, and otherwise transfer the Work,
   where such license applies only to those patent claims licensable
   by such Contributor that are necessarily infringed by their
   Contribution(s) alone or by combination of their Contribution(s)
   with the Work to which such Contribution(s) was submitted. If You
   institute patent litigation against any entity (including a
   cross-claim or counterclaim in a lawsuit) alleging that the Work
   or a Contribution incorporated within the Work constitutes direct
   or contributory patent infringement, then any patent licenses
   granted to You under this License for that Work shall terminate
   as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the
   Work or Derivative Works thereof in any medium, with or without
   modifications, and in Source or Object form, provided that You
   meet the following conditions:

   (a) You must give any other recipients of the Work or
       Derivative Works a copy of this License; and

   (b) You must cause any modified files to carry prominent notices
       stating that You changed the files; and

   (c) You must retain, in the Source form of any Derivative Works
       that You distribute, all copyright, patent, trademark, and
       attribution notices from the Source form of the Work,
       excluding those notices that do not pertain to any part of
       the Derivative Works; and

   (d) If the Work includes a "NOTICE" text file as part of its
       distribution, then any Derivative Works that You distribute must
       include a readable copy of the attribution notices contained
       within such NOTICE file, excluding those notices that do not
       pertain to any part of the Derivative Works, in at least one
       of the following places: within a NOTICE text file distributed
       as part of the Derivative Works; within the Source form or
       documentation, if provided along with the Derivative Works; or,
       within a display generated by the Derivative Works, if and
       wherever such third-party notices normally appear. The contents
       of the NOTICE file are for informational purposes only and
       do not modify the License. You may add Your own attribution
       notices within Derivative Works that You distribute, alongside
       or as an addendum to the NOTICE text from the Work, provided
       that such additional attribution notices cannot be construed
       as modifying the License.

   You may add Your own copyright statement to Your modifications and
   may provide additional or different license terms and conditions
   for use, reproduction, or distribution of Your modifications, or
   for any such Derivative Works as a whole, provided Your use,
   reproduction, and distribution of the Work otherwise complies with
   the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise,
   any Contribution intentionally submitted for inclusion in the Work
   by You to the Licensor shall be under the terms and conditions of
   this License, without any additional terms or conditions.
   Notwithstanding the above, nothing herein shall supersede or modify
   the terms of any separate license agreement you may have executed
   with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade
   names, trademarks, service marks, or product names of the Licensor,
   except as required for reasonable and customary use in describing the
   origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or
   agreed to in writing, Licensor provides the Work (and each
   Contributor provides its Contributions) on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
   implied, including, without limitation, any warranties or conditions
   of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
   PARTICULAR PURPOSE. You are solely responsible for determining the
   appropriateness of using or redistributing the Work and assume any
   risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory,
   whether in tort (including negligence), contract, or otherwise,
   unless required by applicable law (such as deliberate and grossly
   negligent acts) or agreed to in writing, shall any Contributor be
   liable to You for damages, including any direct, indirect, special,
   incidental, or consequential damages of any character arising as a
   result of this License or out of the use or inability to use the
   Work (including but not limited to damages for loss of goodwill,
   work stoppage, computer failure or malfunction, or any and all
   other commercial damages or losses), even if such Contributor
   has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing
   the Work or Derivative Works thereof, You may choose to offer,
   and charge a fee for, acceptance of support, warranty, indemnity,
   or other liability obligations and/or rights consistent with this
   License. However, in accepting such obligations, You may act only
   on Your own behalf and on Your sole responsibility, not on behalf
   of any other Contributor, and only if You agree to indemnify,
   defend, and hold each Contributor harmless for any liability
   incurred by, or claims asserted against, such Contributor by reason
   of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

--- Exceptions to the Apache 2.0 License ----

As an exception, if, as a result of your compiling your source code, portions
of this Software are embedded into an Object form of such source code, you
may redistribute such embedded portions in such Object form without complying
with the conditions of Sections 4(a), 4(b) and 4(d) of the License.

In addition, if you combine or link compiled forms of this Software with
software that is licensed under the GPLv2 ("Combined Software") and if a
court of competent jurisdiction determines that the patent provision (Section
3), the indemnity provision (Section 9) or other Section of the License
conflicts with the conditions of the GPLv2, you may retroactively and
prospectively choose to deem waived or otherwise exclude such Section(s) of
the License, but only in their entirety and only with respect to the Combined
Software.


ng-otp-input
MIT

ng2-charts
ISC

ngx-image-compress
MIT
MIT License

Copyright (c) 2019 David Faure

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


ngx-indexed-db
ISC
The MIT License (MIT)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

ngx-print
MIT
MIT License

Copyright (c) 2018 salem mnassri

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


ngx-toastr
MIT
The MIT License (MIT)

Copyright (c) Scott Cooper <scttcper@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.


pdfmake
MIT
The MIT License (MIT)

Copyright (c) 2014-2015 bpampuch
              2016-2024 liborm85

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


performance-now
MIT
Copyright (c) 2013 Braveg1rl

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

raf
MIT
Copyright 2013 Chris Dickinson <chris@neversaw.us>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


rgbcolor
MIT OR SEE LICENSE IN FEEL-FREE.md
Copyright (c) 2016 Stoyan Stefanov, http://phpied.com/

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


Exemptions
==========

Please either apply this, the MIT license, or the license in './FEEL-FREE.md'


rxjs
Apache-2.0
                               Apache License
                         Version 2.0, January 2004
                      http://www.apache.org/licenses/

 TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

 1. Definitions.

    "License" shall mean the terms and conditions for use, reproduction,
    and distribution as defined by Sections 1 through 9 of this document.

    "Licensor" shall mean the copyright owner or entity authorized by
    the copyright owner that is granting the License.

    "Legal Entity" shall mean the union of the acting entity and all
    other entities that control, are controlled by, or are under common
    control with that entity. For the purposes of this definition,
    "control" means (i) the power, direct or indirect, to cause the
    direction or management of such entity, whether by contract or
    otherwise, or (ii) ownership of fifty percent (50%) or more of the
    outstanding shares, or (iii) beneficial ownership of such entity.

    "You" (or "Your") shall mean an individual or Legal Entity
    exercising permissions granted by this License.

    "Source" form shall mean the preferred form for making modifications,
    including but not limited to software source code, documentation
    source, and configuration files.

    "Object" form shall mean any form resulting from mechanical
    transformation or translation of a Source form, including but
    not limited to compiled object code, generated documentation,
    and conversions to other media types.

    "Work" shall mean the work of authorship, whether in Source or
    Object form, made available under the License, as indicated by a
    copyright notice that is included in or attached to the work
    (an example is provided in the Appendix below).

    "Derivative Works" shall mean any work, whether in Source or Object
    form, that is based on (or derived from) the Work and for which the
    editorial revisions, annotations, elaborations, or other modifications
    represent, as a whole, an original work of authorship. For the purposes
    of this License, Derivative Works shall not include works that remain
    separable from, or merely link (or bind by name) to the interfaces of,
    the Work and Derivative Works thereof.

    "Contribution" shall mean any work of authorship, including
    the original version of the Work and any modifications or additions
    to that Work or Derivative Works thereof, that is intentionally
    submitted to Licensor for inclusion in the Work by the copyright owner
    or by an individual or Legal Entity authorized to submit on behalf of
    the copyright owner. For the purposes of this definition, "submitted"
    means any form of electronic, verbal, or written communication sent
    to the Licensor or its representatives, including but not limited to
    communication on electronic mailing lists, source code control systems,
    and issue tracking systems that are managed by, or on behalf of, the
    Licensor for the purpose of discussing and improving the Work, but
    excluding communication that is conspicuously marked or otherwise
    designated in writing by the copyright owner as "Not a Contribution."

    "Contributor" shall mean Licensor and any individual or Legal Entity
    on behalf of whom a Contribution has been received by Licensor and
    subsequently incorporated within the Work.

 2. Grant of Copyright License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    copyright license to reproduce, prepare Derivative Works of,
    publicly display, publicly perform, sublicense, and distribute the
    Work and such Derivative Works in Source or Object form.

 3. Grant of Patent License. Subject to the terms and conditions of
    this License, each Contributor hereby grants to You a perpetual,
    worldwide, non-exclusive, no-charge, royalty-free, irrevocable
    (except as stated in this section) patent license to make, have made,
    use, offer to sell, sell, import, and otherwise transfer the Work,
    where such license applies only to those patent claims licensable
    by such Contributor that are necessarily infringed by their
    Contribution(s) alone or by combination of their Contribution(s)
    with the Work to which such Contribution(s) was submitted. If You
    institute patent litigation against any entity (including a
    cross-claim or counterclaim in a lawsuit) alleging that the Work
    or a Contribution incorporated within the Work constitutes direct
    or contributory patent infringement, then any patent licenses
    granted to You under this License for that Work shall terminate
    as of the date such litigation is filed.

 4. Redistribution. You may reproduce and distribute copies of the
    Work or Derivative Works thereof in any medium, with or without
    modifications, and in Source or Object form, provided that You
    meet the following conditions:

    (a) You must give any other recipients of the Work or
        Derivative Works a copy of this License; and

    (b) You must cause any modified files to carry prominent notices
        stating that You changed the files; and

    (c) You must retain, in the Source form of any Derivative Works
        that You distribute, all copyright, patent, trademark, and
        attribution notices from the Source form of the Work,
        excluding those notices that do not pertain to any part of
        the Derivative Works; and

    (d) If the Work includes a "NOTICE" text file as part of its
        distribution, then any Derivative Works that You distribute must
        include a readable copy of the attribution notices contained
        within such NOTICE file, excluding those notices that do not
        pertain to any part of the Derivative Works, in at least one
        of the following places: within a NOTICE text file distributed
        as part of the Derivative Works; within the Source form or
        documentation, if provided along with the Derivative Works; or,
        within a display generated by the Derivative Works, if and
        wherever such third-party notices normally appear. The contents
        of the NOTICE file are for informational purposes only and
        do not modify the License. You may add Your own attribution
        notices within Derivative Works that You distribute, alongside
        or as an addendum to the NOTICE text from the Work, provided
        that such additional attribution notices cannot be construed
        as modifying the License.

    You may add Your own copyright statement to Your modifications and
    may provide additional or different license terms and conditions
    for use, reproduction, or distribution of Your modifications, or
    for any such Derivative Works as a whole, provided Your use,
    reproduction, and distribution of the Work otherwise complies with
    the conditions stated in this License.

 5. Submission of Contributions. Unless You explicitly state otherwise,
    any Contribution intentionally submitted for inclusion in the Work
    by You to the Licensor shall be under the terms and conditions of
    this License, without any additional terms or conditions.
    Notwithstanding the above, nothing herein shall supersede or modify
    the terms of any separate license agreement you may have executed
    with Licensor regarding such Contributions.

 6. Trademarks. This License does not grant permission to use the trade
    names, trademarks, service marks, or product names of the Licensor,
    except as required for reasonable and customary use in describing the
    origin of the Work and reproducing the content of the NOTICE file.

 7. Disclaimer of Warranty. Unless required by applicable law or
    agreed to in writing, Licensor provides the Work (and each
    Contributor provides its Contributions) on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
    implied, including, without limitation, any warranties or conditions
    of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
    PARTICULAR PURPOSE. You are solely responsible for determining the
    appropriateness of using or redistributing the Work and assume any
    risks associated with Your exercise of permissions under this License.

 8. Limitation of Liability. In no event and under no legal theory,
    whether in tort (including negligence), contract, or otherwise,
    unless required by applicable law (such as deliberate and grossly
    negligent acts) or agreed to in writing, shall any Contributor be
    liable to You for damages, including any direct, indirect, special,
    incidental, or consequential damages of any character arising as a
    result of this License or out of the use or inability to use the
    Work (including but not limited to damages for loss of goodwill,
    work stoppage, computer failure or malfunction, or any and all
    other commercial damages or losses), even if such Contributor
    has been advised of the possibility of such damages.

 9. Accepting Warranty or Additional Liability. While redistributing
    the Work or Derivative Works thereof, You may choose to offer,
    and charge a fee for, acceptance of support, warranty, indemnity,
    or other liability obligations and/or rights consistent with this
    License. However, in accepting such obligations, You may act only
    on Your own behalf and on Your sole responsibility, not on behalf
    of any other Contributor, and only if You agree to indemnify,
    defend, and hold each Contributor harmless for any liability
    incurred by, or claims asserted against, such Contributor by reason
    of your accepting any such warranty or additional liability.

 END OF TERMS AND CONDITIONS

 APPENDIX: How to apply the Apache License to your work.

    To apply the Apache License to your work, attach the following
    boilerplate notice, with the fields enclosed by brackets "[]"
    replaced with your own identifying information. (Don't include
    the brackets!)  The text should be enclosed in the appropriate
    comment syntax for the file format. We also recommend that a
    file or class name and description of purpose be included on the
    same "printed page" as the copyright notice for easier
    identification within third-party archives.

 Copyright (c) 2015-2018 Google, Inc., Netflix, Inc., Microsoft Corp. and contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 


stackblur-canvas
MIT
Copyright (c) 2010 Mario Klingemann

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.


svg-pathdata
MIT
The MIT License (MIT)
Copyright © 2017 Nicolas Froidure

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


sweetalert2
MIT
The MIT License (MIT)

Copyright (c) 2014 Tristan Edwards & Limon Monte

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.



tslib
0BSD
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.

xlsx
Apache-2.0
                                 Apache License
                           Version 2.0, January 2004
                        http://www.apache.org/licenses/

   TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

   1. Definitions.

      "License" shall mean the terms and conditions for use, reproduction,
      and distribution as defined by Sections 1 through 9 of this document.

      "Licensor" shall mean the copyright owner or entity authorized by
      the copyright owner that is granting the License.

      "Legal Entity" shall mean the union of the acting entity and all
      other entities that control, are controlled by, or are under common
      control with that entity. For the purposes of this definition,
      "control" means (i) the power, direct or indirect, to cause the
      direction or management of such entity, whether by contract or
      otherwise, or (ii) ownership of fifty percent (50%) or more of the
      outstanding shares, or (iii) beneficial ownership of such entity.

      "You" (or "Your") shall mean an individual or Legal Entity
      exercising permissions granted by this License.

      "Source" form shall mean the preferred form for making modifications,
      including but not limited to software source code, documentation
      source, and configuration files.

      "Object" form shall mean any form resulting from mechanical
      transformation or translation of a Source form, including but
      not limited to compiled object code, generated documentation,
      and conversions to other media types.

      "Work" shall mean the work of authorship, whether in Source or
      Object form, made available under the License, as indicated by a
      copyright notice that is included in or attached to the work
      (an example is provided in the Appendix below).

      "Derivative Works" shall mean any work, whether in Source or Object
      form, that is based on (or derived from) the Work and for which the
      editorial revisions, annotations, elaborations, or other modifications
      represent, as a whole, an original work of authorship. For the purposes
      of this License, Derivative Works shall not include works that remain
      separable from, or merely link (or bind by name) to the interfaces of,
      the Work and Derivative Works thereof.

      "Contribution" shall mean any work of authorship, including
      the original version of the Work and any modifications or additions
      to that Work or Derivative Works thereof, that is intentionally
      submitted to Licensor for inclusion in the Work by the copyright owner
      or by an individual or Legal Entity authorized to submit on behalf of
      the copyright owner. For the purposes of this definition, "submitted"
      means any form of electronic, verbal, or written communication sent
      to the Licensor or its representatives, including but not limited to
      communication on electronic mailing lists, source code control systems,
      and issue tracking systems that are managed by, or on behalf of, the
      Licensor for the purpose of discussing and improving the Work, but
      excluding communication that is conspicuously marked or otherwise
      designated in writing by the copyright owner as "Not a Contribution."

      "Contributor" shall mean Licensor and any individual or Legal Entity
      on behalf of whom a Contribution has been received by Licensor and
      subsequently incorporated within the Work.

   2. Grant of Copyright License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      copyright license to reproduce, prepare Derivative Works of,
      publicly display, publicly perform, sublicense, and distribute the
      Work and such Derivative Works in Source or Object form.

   3. Grant of Patent License. Subject to the terms and conditions of
      this License, each Contributor hereby grants to You a perpetual,
      worldwide, non-exclusive, no-charge, royalty-free, irrevocable
      (except as stated in this section) patent license to make, have made,
      use, offer to sell, sell, import, and otherwise transfer the Work,
      where such license applies only to those patent claims licensable
      by such Contributor that are necessarily infringed by their
      Contribution(s) alone or by combination of their Contribution(s)
      with the Work to which such Contribution(s) was submitted. If You
      institute patent litigation against any entity (including a
      cross-claim or counterclaim in a lawsuit) alleging that the Work
      or a Contribution incorporated within the Work constitutes direct
      or contributory patent infringement, then any patent licenses
      granted to You under this License for that Work shall terminate
      as of the date such litigation is filed.

   4. Redistribution. You may reproduce and distribute copies of the
      Work or Derivative Works thereof in any medium, with or without
      modifications, and in Source or Object form, provided that You
      meet the following conditions:

      (a) You must give any other recipients of the Work or
          Derivative Works a copy of this License; and

      (b) You must cause any modified files to carry prominent notices
          stating that You changed the files; and

      (c) You must retain, in the Source form of any Derivative Works
          that You distribute, all copyright, patent, trademark, and
          attribution notices from the Source form of the Work,
          excluding those notices that do not pertain to any part of
          the Derivative Works; and

      (d) If the Work includes a "NOTICE" text file as part of its
          distribution, then any Derivative Works that You distribute must
          include a readable copy of the attribution notices contained
          within such NOTICE file, excluding those notices that do not
          pertain to any part of the Derivative Works, in at least one
          of the following places: within a NOTICE text file distributed
          as part of the Derivative Works; within the Source form or
          documentation, if provided along with the Derivative Works; or,
          within a display generated by the Derivative Works, if and
          wherever such third-party notices normally appear. The contents
          of the NOTICE file are for informational purposes only and
          do not modify the License. You may add Your own attribution
          notices within Derivative Works that You distribute, alongside
          or as an addendum to the NOTICE text from the Work, provided
          that such additional attribution notices cannot be construed
          as modifying the License.

      You may add Your own copyright statement to Your modifications and
      may provide additional or different license terms and conditions
      for use, reproduction, or distribution of Your modifications, or
      for any such Derivative Works as a whole, provided Your use,
      reproduction, and distribution of the Work otherwise complies with
      the conditions stated in this License.

   5. Submission of Contributions. Unless You explicitly state otherwise,
      any Contribution intentionally submitted for inclusion in the Work
      by You to the Licensor shall be under the terms and conditions of
      this License, without any additional terms or conditions.
      Notwithstanding the above, nothing herein shall supersede or modify
      the terms of any separate license agreement you may have executed
      with Licensor regarding such Contributions.

   6. Trademarks. This License does not grant permission to use the trade
      names, trademarks, service marks, or product names of the Licensor,
      except as required for reasonable and customary use in describing the
      origin of the Work and reproducing the content of the NOTICE file.

   7. Disclaimer of Warranty. Unless required by applicable law or
      agreed to in writing, Licensor provides the Work (and each
      Contributor provides its Contributions) on an "AS IS" BASIS,
      WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
      implied, including, without limitation, any warranties or conditions
      of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
      PARTICULAR PURPOSE. You are solely responsible for determining the
      appropriateness of using or redistributing the Work and assume any
      risks associated with Your exercise of permissions under this License.

   8. Limitation of Liability. In no event and under no legal theory,
      whether in tort (including negligence), contract, or otherwise,
      unless required by applicable law (such as deliberate and grossly
      negligent acts) or agreed to in writing, shall any Contributor be
      liable to You for damages, including any direct, indirect, special,
      incidental, or consequential damages of any character arising as a
      result of this License or out of the use or inability to use the
      Work (including but not limited to damages for loss of goodwill,
      work stoppage, computer failure or malfunction, or any and all
      other commercial damages or losses), even if such Contributor
      has been advised of the possibility of such damages.

   9. Accepting Warranty or Additional Liability. While redistributing
      the Work or Derivative Works thereof, You may choose to offer,
      and charge a fee for, acceptance of support, warranty, indemnity,
      or other liability obligations and/or rights consistent with this
      License. However, in accepting such obligations, You may act only
      on Your own behalf and on Your sole responsibility, not on behalf
      of any other Contributor, and only if You agree to indemnify,
      defend, and hold each Contributor harmless for any liability
      incurred by, or claims asserted against, such Contributor by reason
      of your accepting any such warranty or additional liability.

   END OF TERMS AND CONDITIONS

   APPENDIX: How to apply the Apache License to your work.

      To apply the Apache License to your work, attach the following
      boilerplate notice, with the fields enclosed by brackets "{}"
      replaced with your own identifying information. (Don't include
      the brackets!)  The text should be enclosed in the appropriate
      comment syntax for the file format. We also recommend that a
      file or class name and description of purpose be included on the
      same "printed page" as the copyright notice for easier
      identification within third-party archives.

   Copyright (C) 2012-present   SheetJS LLC

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.


zone.js
MIT
The MIT License

Copyright (c) 2010-2024 Google LLC. https://angular.io/license

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[4041],{59294:(k,D,o)=>{o.d(D,{O:()=>L});var I=o(60177),a=o(94609),j=o(7180),_=o(54438);let L=(()=>{class u{static#t=this.\u0275fac=function(c){return new(c||u)};static#n=this.\u0275mod=_.$C({type:u});static#e=this.\u0275inj=_.G2t({imports:[I.MD,a.C,j.Q8]})}return u})()},64458:(k,D,o)=>{o.d(D,{X:()=>c});var I=o(60177),a=o(89417),j=o(94609),_=o(17551),L=o(50074),u=o(7180),p=o(75351),y=o(54438);let c=(()=>{class t{static#t=this.\u0275fac=function(f){return new(f||t)};static#n=this.\u0275mod=y.$C({type:t});static#e=this.\u0275inj=y.G2t({imports:[I.MD,a.YN,a.X1,j.C,_.U,L.G,u.Q8,p.hM]})}return t})()},80960:(k,D,o)=>{o.d(D,{S:()=>Q});var I=o(10467),a=o(98808),j=o(75351),_=o(97586),u=o(72036),p=o(66689),y=o(49671),c=o(83703),t=o(54438),B=o(39866),K=o(7004),f=o(75743),W=o(93832),F=o(7180),S=o(60177),R=o(89417),H=o(36725),x=o(35036),V=o(52953);const X=v=>({"lw-disabled-block":v});function Y(v,C){1&v&&(t.j41(0,"h5"),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&v&&(t.R7$(),t.JRh(t.bMT(2,1,"ADJUST_SALES_RETURN")))}function G(v,C){1&v&&(t.j41(0,"h5"),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&v&&(t.R7$(),t.JRh(t.bMT(2,1,"ADJUST_PURCHASE_RETURN")))}function z(v,C){if(1&v){const e=t.RV6();t.j41(0,"tr",34)(1,"th",35)(2,"div",36)(3,"div",37)(4,"label",38)(5,"input",39),t.mxI("ngModelChange",function(n){const i=t.eBV(e).$implicit;return t.DH7(i.isChecked,n)||(i.isChecked=n),t.Njj(n)}),t.bIt("change",function(){const n=t.eBV(e),i=n.$implicit,A=n.index,h=t.XpG();return t.Njj(h.selectItem(i,A))}),t.k0s(),t.nrm(6,"span",40),t.k0s()()()(),t.j41(7,"td",41)(8,"span"),t.EFF(9),t.k0s()(),t.j41(10,"td"),t.EFF(11),t.nI1(12,"dateFormat"),t.k0s(),t.j41(13,"td"),t.EFF(14),t.nI1(15,"CurrencyPipe"),t.k0s(),t.j41(16,"td")(17,"span")(18,"input",42),t.mxI("ngModelChange",function(n){const i=t.eBV(e).$implicit;return t.DH7(i.invoiceAdjustAmt,n)||(i.invoiceAdjustAmt=n),t.Njj(n)}),t.bIt("keyup",function(){const n=t.eBV(e),i=n.$implicit,A=n.index,h=t.XpG();return t.Njj(h.addLineItemAmount(i,A))})("change",function(){const n=t.eBV(e),i=n.$implicit,A=n.index,h=t.XpG();return t.Njj(h.addLineItemAmount(i,A))}),t.k0s()()()()}if(2&v){const e=C.$implicit,d=C.index,n=t.XpG();t.Y8G("ngClass",t.eq3(16,X,!e.isChecked&&n.invReturnAdjustFormObj.invoiceReturnAdjustAmt<=0)),t.R7$(5),t.Mz_("name","isChecked_",d,""),t.R50("ngModel",e.isChecked),t.R7$(4),t.JRh(e.invoiceNumber),t.R7$(2),t.JRh(t.i5U(12,10,e.invoiceDate,n.settingData)),t.R7$(3),t.JRh(t.i5U(15,13,e.invoiceBalanceAmt,n.settingData)),t.R7$(4),t.Mz_("name","paidNow_",d,""),t.R50("ngModel",e.invoiceAdjustAmt)}}let Q=(()=>{class v{constructor(e,d,n,i,A,h,r,l){this.invoiceData=e,this.dialogRef=d,this.commonService=n,this.dataStoreService=i,this.router=A,this.syncApiService=h,this.route=r,this.translocoService=l,this.saleInvoiceList=[],this.saleReturnList=[],this.purchaseInvoiceList=[],this.purchaseReturnList=[],this.allPaymentLinkList=[],this.clientAccountId=this.route.snapshot.params.clientAccountId,this.invFormAddEditObj={},this.invReturnAdjustFormObj={invReturnDate:null,formatReturnMonth:"",formatReturnDate:"",selectClient:null,invReturnNo:null,amount:0,balance:0,balanceTotalAmt:0,invAdjustAmt:0,invoiceReturnAdjustAmt:0,listOfUnpaidInvoices:null,uniqueInvoiceReturnKey:""},this.accountListTrranslatedKey=a.DH.accountListForTranslations()}ngOnInit(){this.fetchDBData(),JSON.parse(a.SE.getCache("sale_return_form_object")),this.clientAccountId=(0,u.A)(this.invoiceData)?"":this.invoiceData.uniqueKeyClientAccount,this.invFormAddEditObj=(0,u.A)(this.invoiceData)?{}:Object.assign({},this.invoiceData.invoiceFormObject)}fetchDBData(){var e=this;this.syncApiService.fetchMultipleDbData(["filterSettingData","sale","saleReturn","purchase","purchaseReturn","paymentLink"],function(){var d=(0,I.A)(function*(n){var i=yield n.data;200===n.status&&!(0,u.A)(i)&&((0,p.A)(i,"filterSettingData")&&!(0,u.A)(i.filterSettingData)&&(e.settingData=i.filterSettingData,e.invReturnAdjustFormObj.invReturnDate=e.settingData.bookKeepingStartDate>_().valueOf()?a.DH.dateToTimeStamp(_(e.settingData.bookKeepingStartDate).format("YYYY-MM-DD")):a.DH.dateToTimeStamp(_().format("YYYY-MM-DD"))),(0,p.A)(i,"sale")&&(e.saleInvoiceList=i.sale),(0,p.A)(i,"saleReturn")&&(e.saleReturnList=i.saleReturn),(0,p.A)(i,"purchase")&&(e.purchaseInvoiceList=i.purchase),(0,p.A)(i,"purchaseReturn")&&(e.purchaseReturnList=i.purchaseReturn),(0,p.A)(i,"paymentLink")&&(e.allPaymentLinkList=i.paymentLink),"sale-return"==e.invoiceData.invAdjustReturnType?e.prepareInvoiceAdjustData():"purchase-return"==e.invoiceData.invAdjustReturnType&&e.preparePurchaseInvoiceAdjustData())});return function(n){return d.apply(this,arguments)}}())}prepareInvoiceAdjustData(){if(!(0,u.A)(this.clientAccountId)&&!(0,u.A)(this.invFormAddEditObj)){let e=[],d=this.saleInvoiceList.filter(r=>r.uniqueKeyFKAccount===this.clientAccountId),n=this.invoiceData.invAlreadyAdjust,i=this.invoiceData.totalInvoiceAmount;(0,y.A)(d,r=>{let l=this.invoiceData.listOfAdjustPaidInvoice.find(s=>s.uniqueKeySales==r.uniqueKeySales),N=roundToEven((0,c.A)(this.allPaymentLinkList.filter(s=>(0,u.A)(s.uniqueKeyFKPaymentEntity)&&s.uniqueKeyLinkWithAccountEntity==r.uniqueKeySales&&1==s.linkType&&s.uniqueKeyClientAccountEntity==r.uniqueKeyFKAccount),"amount"),2),$=roundToEven((0,c.A)(this.allPaymentLinkList.filter(s=>!(0,u.A)(s.uniqueKeyFKPaymentEntity)&&s.uniqueKeyClientAccountEntity==r.uniqueKeyFKAccount&&s.uniqueKeyLinkWithAccountEntity==r.uniqueKeySales||2==s.transactionLinkType&&s.uniqueKeyLinkWithAccountEntity!=this.invFormAddEditObj.uniqueSaleReturnKey&&s.uniqueKeyFKPaymentEntity==r.uniqueKeySales&&5==s.linkType),"amount"),2),q=roundToEven((0,c.A)(this.allPaymentLinkList.filter(s=>!(0,u.A)(s.uniqueKeyFKPaymentEntity)&&s.uniqueKeyClientAccountEntity==r.uniqueKeyFKAccount&&2!=s.transactionLinkType&&5!=s.linkType),"amount"),2),b=a.DH.roundToEven(r.amount-$-N,2),P=this.allPaymentLinkList.filter(s=>s.uniqueKeyFKPaymentEntity===r.uniqueKeySales&&(!(0,u.A)(this.invoiceData.editInvAdjustLintList)&&this.invoiceData.editInvAdjustLintList.uniqueKeyLink!=s.uniqueKeyLink||(0,u.A)(this.invoiceData.editInvAdjustLintList))),m=P.filter(s=>s.uniqueKeyLinkWithAccountEntity===this.invFormAddEditObj.uniqueSaleReturnKey),M=a.DH.roundToEven((0,c.A)(P.filter(s=>s.uniqueKeyLinkWithAccountEntity!=this.invFormAddEditObj.uniqueSaleReturnKey),"amount"),2),J=(0,u.A)(l)&&!n||!(0,u.A)(m)||(0,u.A)(l)?0:l.invoiceAdjustAmt,E=!(0,u.A)(l)||n?(0,u.A)(l)?0:l.invoiceAdjustAmt:a.DH.roundToEven((0,c.A)(m,"amount"),2),T=!(0,u.A)(l)||!(0,u.A)(m)&&!n,g=a.DH.roundToEven(T?r.amount-M+J:r.amount-M-(0,c.A)(m,"amount"),2),U=!n||(0,u.A)(m)||(0,u.A)(l)||l.invoiceAdjustAmt==(0,c.A)(m,"amount")?q:Math.abs((0,c.A)(m,"amount")-l.invoiceAdjustAmt),O=0;i>=0&&i>=E?(O=E,i-=E):i>=0&&E>i?(O=i,i=0):O=0,b>0&&e.push({isChecked:T,invoiceNumber:r.salesFormatNumber,invoiceDate:r.createDate,invoiceAdjustAmt:T?O:E,uniqueKeySales:r.uniqueKeySales,invoiceData:r,unpaidInvBalance:g,invoiceBalanceAmt:b,isPaid:0==b,onEditOrExistLinkAmt:U,currentReturnLinkList:m,invoiceBalance:a.DH.roundToEven(g-U,2)})});let A=a.DH.roundToEven((0,c.A)(e.filter(r=>r.isChecked),"invoiceAdjustAmt"),2),h=a.DH.roundToEven(this.invFormAddEditObj.balanceAmount+A,2);this.invReturnAdjustFormObj={uniqueInvoiceReturnKey:this.invFormAddEditObj.uniqueSaleReturnKey,invReturnDate:this.invFormAddEditObj.invocieDate,formatReturnMonth:_(this.invFormAddEditObj.invocieDate).format("MMM"),formatReturnDate:_(this.invFormAddEditObj.invocieDate).format("DD"),selectClient:this.invFormAddEditObj.selectClient,invReturnNo:this.invFormAddEditObj.invocieNumber,amount:a.DH.roundToEven(this.invFormAddEditObj.invoiceAmount,2),balance:a.DH.roundToEven(this.invFormAddEditObj.balanceAmount,2),balanceTotalAmt:h,invAdjustAmt:A,invoiceReturnAdjustAmt:a.DH.roundToEven(h-A,2),listOfUnpaidInvoices:e}}(0,u.A)(this.invReturnAdjustFormObj.selectClient)||(this.invReturnAdjustFormObj.selectClient.nameOfAccount=(0,u.A)(this.accountListTrranslatedKey.find(e=>e.title==this.invReturnAdjustFormObj.selectClient?.nameOfAccount))?this.invReturnAdjustFormObj.selectClient?.nameOfAccount:this.translocoService.translate(this.accountListTrranslatedKey.find(e=>e.title==this.invReturnAdjustFormObj.selectClient?.nameOfAccount).translated_key))}preparePurchaseInvoiceAdjustData(){if(!(0,u.A)(this.clientAccountId)&&!(0,u.A)(this.invFormAddEditObj)){let e=[],d=this.purchaseInvoiceList.filter(r=>r.uniqueKeyFKAccount===this.clientAccountId),n=this.invoiceData.invAlreadyAdjust,i=this.invoiceData.totalInvoiceAmount;(0,y.A)(d,r=>{let l=this.invoiceData.listOfAdjustPaidInvoice.find(s=>s.uniqueKeyPurchase==r.uniqueKeyPurchase),N=roundToEven((0,c.A)(this.allPaymentLinkList.filter(s=>(0,u.A)(s.uniqueKeyFKPaymentEntity)&&s.uniqueKeyLinkWithAccountEntity==r.uniqueKeyPurchase&&2==s.linkType&&s.uniqueKeyClientAccountEntity==r.uniqueKeyFKAccount),"amount"),2),$=roundToEven((0,c.A)(this.allPaymentLinkList.filter(s=>!(0,u.A)(s.uniqueKeyFKPaymentEntity)&&s.uniqueKeyClientAccountEntity==r.uniqueKeyFKAccount&&s.uniqueKeyLinkWithAccountEntity==r.uniqueKeyPurchase||4==s.transactionLinkType&&s.uniqueKeyLinkWithAccountEntity!=this.invFormAddEditObj.uniquePurchaseReturnKey&&s.uniqueKeyFKPaymentEntity==r.uniqueKeyPurchase&&6==s.linkType),"amount"),2),q=roundToEven((0,c.A)(this.allPaymentLinkList.filter(s=>!(0,u.A)(s.uniqueKeyFKPaymentEntity)&&s.uniqueKeyClientAccountEntity==r.uniqueKeyFKAccount&&4==s.transactionLinkType&&6==s.linkType),"amount"),2),b=a.DH.roundToEven(r.amount-$-N,2),P=this.allPaymentLinkList.filter(s=>s.uniqueKeyFKPaymentEntity===r.uniqueKeyPurchase&&(!(0,u.A)(this.invoiceData.editInvAdjustLintList)&&this.invoiceData.editInvAdjustLintList.uniqueKeyLink!=s.uniqueKeyLink||(0,u.A)(this.invoiceData.editInvAdjustLintList))),m=P.filter(s=>s.uniqueKeyLinkWithAccountEntity===this.invFormAddEditObj.uniquePurchaseReturnKey),M=a.DH.roundToEven((0,c.A)(P.filter(s=>s.uniqueKeyLinkWithAccountEntity!=this.invFormAddEditObj.uniquePurchaseReturnKey),"amount"),2),J=(0,u.A)(l)&&!n||!(0,u.A)(m)||(0,u.A)(l)?0:l.invoiceAdjustAmt,E=!(0,u.A)(l)||n?(0,u.A)(l)?0:l.invoiceAdjustAmt:a.DH.roundToEven((0,c.A)(m,"amount"),2),T=!(0,u.A)(l)||!(0,u.A)(m)&&!n,g=a.DH.roundToEven(T?r.amount-M+J:r.amount-M-(0,c.A)(m,"amount"),2),U=!n||(0,u.A)(m)||(0,u.A)(l)||l.invoiceAdjustAmt==(0,c.A)(m,"amount")?q:Math.abs((0,c.A)(m,"amount")-l.invoiceAdjustAmt),O=0;i>=0&&i>=E?(O=E,i-=E):i>=0&&E>i?(O=i,i=0):O=0,b>0&&e.push({isChecked:T,invoiceNumber:r.purchaseNo,invoiceDate:r.createDate,invoiceAdjustAmt:T?O:E,uniqueKeyPurchase:r.uniqueKeyPurchase,invoiceBalanceAmt:b,isPaid:0==b,invoiceData:r,invoiceBalance:a.DH.roundToEven(g-U,2)})});let A=a.DH.roundToEven((0,c.A)(e.filter(r=>r.isChecked),"invoiceAdjustAmt"),2),h=a.DH.roundToEven(this.invFormAddEditObj.balanceAmount+A,2);this.invReturnAdjustFormObj={uniqueInvoiceReturnKey:this.invFormAddEditObj.uniquePurchaseReturnKey,invReturnDate:this.invFormAddEditObj.invocieDate,formatReturnMonth:_(this.invFormAddEditObj.invocieDate).format("MMM"),formatReturnDate:_(this.invFormAddEditObj.invocieDate).format("DD"),selectClient:this.invFormAddEditObj.selectSupplier,invReturnNo:this.invFormAddEditObj.invocieNumber,amount:a.DH.roundToEven(this.invFormAddEditObj.invoiceAmount,2),balance:a.DH.roundToEven(this.invFormAddEditObj.balanceAmount,2),balanceTotalAmt:h,invAdjustAmt:A,invoiceReturnAdjustAmt:a.DH.roundToEven(h-A,2),listOfUnpaidInvoices:e}}(0,u.A)(this.invReturnAdjustFormObj.selectClient)||(this.invReturnAdjustFormObj.selectClient.nameOfAccount=(0,u.A)(this.accountListTrranslatedKey.find(e=>e.title==this.invReturnAdjustFormObj.selectClient?.nameOfAccount))?this.invReturnAdjustFormObj.selectClient?.nameOfAccount:this.translocoService.translate(this.accountListTrranslatedKey.find(e=>e.title==this.invReturnAdjustFormObj.selectClient?.nameOfAccount).translated_key))}checkIsValidAmount(e,d,n){if(!(e<=this.invReturnAdjustFormObj.balanceTotalAmt)){const A=a.DH.roundToEven(a.DH.roundToEven(this.invReturnAdjustFormObj.balanceTotalAmt,2)-a.DH.roundToEven((0,c.A)(this.invReturnAdjustFormObj.listOfUnpaidInvoices.filter(h=>h.uniqueKeySales!=d.uniqueKeySales),"invoiceAdjustAmt"),2),2);return this.invReturnAdjustFormObj.listOfUnpaidInvoices[n].invoiceAdjustAmt=A,!1}return!0}addLineItemAmount(e,d){this.invReturnAdjustFormObj.listOfUnpaidInvoices[d].isChecked=e.invoiceAdjustAmt>0;let n=a.DH.roundToEven((0,c.A)(this.invReturnAdjustFormObj.listOfUnpaidInvoices.filter(i=>i.isChecked),"invoiceAdjustAmt"),2);this.checkIsValidAmount(n,e,d)&&(this.invReturnAdjustFormObj.invoiceReturnAdjustAmt=a.DH.roundToEven(this.invReturnAdjustFormObj.balanceTotalAmt-n,2),this.invReturnAdjustFormObj.invAdjustAmt=n)}selectItem(e,d){if(e.isChecked)this.invReturnAdjustFormObj.listOfUnpaidInvoices[d].invoiceAdjustAmt=e.invoiceBalanceAmt>=this.invReturnAdjustFormObj.invoiceReturnAdjustAmt?this.invReturnAdjustFormObj.invoiceReturnAdjustAmt:e.invoiceBalanceAmt,this.invReturnAdjustFormObj.invoiceReturnAdjustAmt=Math.abs(a.DH.roundToEven(this.invReturnAdjustFormObj.invoiceReturnAdjustAmt-e.invoiceAdjustAmt,2));else{this.invReturnAdjustFormObj.listOfUnpaidInvoices[d].invoiceAdjustAmt=0;let n=a.DH.roundToEven((0,c.A)(this.invReturnAdjustFormObj.listOfUnpaidInvoices.filter(i=>i.isChecked),"invoiceAdjustAmt"),2);this.invReturnAdjustFormObj.invoiceReturnAdjustAmt=a.DH.roundToEven(this.invReturnAdjustFormObj.balanceTotalAmt-n,2)}this.invReturnAdjustFormObj.invAdjustAmt=a.DH.roundToEven((0,c.A)(this.invReturnAdjustFormObj.listOfUnpaidInvoices.filter(n=>n.isChecked),"invoiceAdjustAmt"),2)}getAdjustSaleReturnAmt(e){let d=0,n=0,i=0;switch(e){case"balance":return d=this.invReturnAdjustFormObj.balance+(0,c.A)(this.invReturnAdjustFormObj.listOfUnpaidInvoices.filter(A=>A.isChecked),"invoiceAdjustAmt"),d;case"invoice-adjust":return n=(0,c.A)(this.invReturnAdjustFormObj.listOfUnpaidInvoices.filter(A=>A.isChecked),"invoiceAdjustAmt"),n;case"sale-return-balance":return i=this.invReturnAdjustFormObj.balance+(0,c.A)(this.invReturnAdjustFormObj.listOfUnpaidInvoices.filter(A=>A.isChecked),"invoiceAdjustAmt"),i}}submit(){this.dialogRef.close({inv_adjust_successfully:!0,listOfUnpaidInvoices:this.invReturnAdjustFormObj.listOfUnpaidInvoices})}closeDialog(){this.dialogRef.close({inv_adjust_successfully:!1})}ngOnDestroy(){}static#t=this.\u0275fac=function(d){return new(d||v)(t.rXU(j.Vh),t.rXU(j.CP),t.rXU(B.h),t.rXU(K.V),t.rXU(f.Ix),t.rXU(W.P),t.rXU(f.nX),t.rXU(F.JO))};static#n=this.\u0275cmp=t.VBU({type:v,selectors:[["app-inv-adjust-advance"]],decls:95,vars:59,consts:[["form","ngForm"],["mat-dialog-title","",1,"comon-modal-header","mb-1"],[4,"ngIf"],["novalidate",""],[1,"mat-typography","mat-dialog-content","p-0","m-0"],[1,"col-12","slaereturn-row","mb-2"],[1,"row","mx-0"],[1,"col-1",2,"margin-left","-12px"],[1,"blds"],[1,"date_month","sub_date"],[1,"inv_date"],[1,"col-5"],[1,"bld-c",2,"margin-right","-25px !important"],[1,"invoice-number",2,"font-size","14px"],[1,"col-6","text-end","p-r"],[2,"font-size","14px"],[2,"font-size","18px","font-weight","500"],[1,"col-md-12","p-l","p-r"],[1,"head-sale-return",2,"font-size","13px"],["id","datatable","role","grid","aria-describedby","datatable_info",1,"table","table-hover","table-bordered","mb-8",2,"cursor","pointer","margin-bottom","10%"],["role","row",1,"mainsec-product"],[1,"menu-arrow"],["role","row","class","odd-product payment-sec",3,"ngClass",4,"ngFor","ngForOf"],["align","end",1,"mt-2"],[1,"col-12","balance-row-modal"],[1,"col-6","text-start",2,"margin-left","-12px"],[1,"bld"],[1,"col-6","text-end"],[1,"bld",2,"margin-right","-25px !important"],[1,"divider-pay"],[1,"left","p-2"],["type","button","tabindex","0",1,"btn-cancel",3,"click"],[1,"material-icons","custom-icons"],["type","button",1,"btn-done",3,"click"],["role","row",1,"odd-product","payment-sec",3,"ngClass"],[1,"bs-checkbox","checkb-product"],["id","slaereturn-paid",1,"checkbox","checkbox-success","payment-paid"],[1,"checkbox","checkbox-primary"],[1,"container-checkbox"],["type","checkbox",3,"ngModelChange","change","name","ngModel"],[1,"checkmark"],[1,"sorting_1"],["type","number","placeholder","00.00","numeric","",1,"form-control","pay_form",3,"ngModelChange","keyup","change","name","ngModel"]],template:function(d,n){if(1&d){const i=t.RV6();t.j41(0,"div",1),t.DNE(1,Y,3,3,"h5",2)(2,G,3,3,"h5",2),t.k0s(),t.j41(3,"form",3,0)(5,"mat-dialog-content",4)(6,"div",5)(7,"div",6)(8,"div",7)(9,"span",8)(10,"span",9),t.EFF(11),t.k0s(),t.nrm(12,"br"),t.j41(13,"span",10),t.EFF(14),t.k0s()()(),t.j41(15,"div",11)(16,"span",12),t.EFF(17),t.k0s(),t.j41(18,"p",13),t.EFF(19),t.k0s()(),t.j41(20,"div",14)(21,"span",15),t.EFF(22),t.nI1(23,"transloco"),t.k0s(),t.nrm(24,"br"),t.j41(25,"span",16),t.EFF(26),t.nI1(27,"CurrencyPipe"),t.k0s()()()(),t.j41(28,"div",17)(29,"div",18),t.EFF(30),t.nI1(31,"transloco"),t.k0s(),t.j41(32,"table",19)(33,"thead")(34,"tr",20)(35,"th"),t.EFF(36),t.nI1(37,"transloco"),t.k0s(),t.j41(38,"th"),t.EFF(39),t.nI1(40,"transloco"),t.nrm(41,"span",21),t.k0s(),t.j41(42,"th"),t.EFF(43),t.nI1(44,"transloco"),t.nrm(45,"span",21),t.k0s(),t.j41(46,"th"),t.EFF(47),t.nI1(48,"transloco"),t.k0s(),t.j41(49,"th"),t.EFF(50),t.nI1(51,"transloco"),t.k0s()()(),t.j41(52,"tbody"),t.DNE(53,z,19,18,"tr",22),t.k0s()()()(),t.j41(54,"div",23)(55,"div",24)(56,"div",6)(57,"div",25)(58,"span",26),t.EFF(59),t.nI1(60,"transloco"),t.k0s()(),t.j41(61,"div",27)(62,"span",28),t.EFF(63),t.nI1(64,"CurrencyPipe"),t.k0s()()(),t.j41(65,"div",6)(66,"div",25)(67,"span",26),t.EFF(68),t.nI1(69,"transloco"),t.k0s()(),t.j41(70,"div",27)(71,"span",28),t.EFF(72),t.nI1(73,"CurrencyPipe"),t.k0s()()(),t.nrm(74,"div",29),t.j41(75,"div",6)(76,"div",25)(77,"span",26),t.EFF(78),t.nI1(79,"transloco"),t.k0s()(),t.j41(80,"div",27)(81,"span",28),t.EFF(82),t.nI1(83,"CurrencyPipe"),t.k0s()()()(),t.j41(84,"div",30)(85,"button",31),t.bIt("click",function(){return t.eBV(i),t.Njj(n.closeDialog())}),t.j41(86,"span",32),t.EFF(87,"cancel"),t.k0s(),t.EFF(88),t.nI1(89,"transloco"),t.k0s(),t.j41(90,"button",33),t.bIt("click",function(){return t.eBV(i),t.Njj(n.submit())}),t.j41(91,"span",32),t.EFF(92,"check_circle"),t.k0s(),t.EFF(93),t.nI1(94,"transloco"),t.k0s()()()()}2&d&&(t.R7$(),t.Y8G("ngIf","sale-return"==n.invoiceData.invAdjustReturnType),t.R7$(),t.Y8G("ngIf","purchase-return"==n.invoiceData.invAdjustReturnType),t.R7$(9),t.JRh(n.invReturnAdjustFormObj.formatReturnMonth),t.R7$(3),t.JRh(n.invReturnAdjustFormObj.formatReturnDate),t.R7$(3),t.SpI(" ",null==n.invReturnAdjustFormObj.selectClient?null:n.invReturnAdjustFormObj.selectClient.nameOfAccount," "),t.R7$(2),t.JRh(n.invReturnAdjustFormObj.invReturnNo),t.R7$(3),t.JRh(t.bMT(23,23,"BAL_LABEL")),t.R7$(4),t.JRh(t.i5U(27,25,n.invReturnAdjustFormObj.balance,n.settingData)),t.R7$(4),t.SpI(" ",t.bMT(31,28,"LIST_OF_UNPAID_INVS"),""),t.R7$(6),t.JRh(t.bMT(37,30,"STATUS")),t.R7$(3),t.JRh(t.bMT(40,32,"TRANSACTION_NO")),t.R7$(4),t.JRh(t.bMT(44,34,"DATE")),t.R7$(4),t.JRh(t.bMT(48,36,"INV_BAL")),t.R7$(3),t.JRh(t.bMT(51,38,"ADJUSTED_NOW")),t.R7$(3),t.Y8G("ngForOf",n.invReturnAdjustFormObj.listOfUnpaidInvoices),t.R7$(6),t.JRh(t.bMT(60,40,"BAL_LABEL")),t.R7$(4),t.JRh(t.i5U(64,42,n.invReturnAdjustFormObj.balanceTotalAmt,n.settingData)),t.R7$(5),t.JRh(t.bMT(69,45,"INVOICE_ADJUSTED")),t.R7$(4),t.JRh(t.i5U(73,47,n.invReturnAdjustFormObj.invAdjustAmt,n.settingData)),t.R7$(6),t.JRh(t.bMT(79,50,"SALES_RETURN_BAL")),t.R7$(4),t.JRh(t.i5U(83,52,n.invReturnAdjustFormObj.invoiceReturnAdjustAmt,n.settingData)),t.R7$(6),t.SpI(" ",t.bMT(89,55,"CANCEL")," "),t.R7$(5),t.SpI(" ",t.bMT(94,57,"SAVE")," "))},dependencies:[S.YU,S.Sq,S.bT,R.qT,R.me,R.Q0,R.Zm,R.BC,R.cb,R.vS,R.cV,H.T,j.BI,j.Yi,x.o,V.a,F.Kj]})}return v})()},33720:(k,D,o)=>{o.d(D,{B:()=>W});var I=o(60177),a=o(89417),j=o(97463),_=o(94609),L=o(61997),u=o(75743),p=o(69748),y=o(50074),c=o(7180),t=o(20800),B=o(96850),K=o(75351),f=o(54438);let W=(()=>{class F{static#t=this.\u0275fac=function(H){return new(H||F)};static#n=this.\u0275mod=f.$C({type:F});static#e=this.\u0275inj=f.G2t({imports:[I.MD,_.C,L.C,a.YN,j.R,a.X1,u.iI,p.y1,y.G,c.Q8,t.G,B.RI,K.hM]})}return F})()}}]);"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[4070,9250],{73502:(M,A,t)=>{t.d(A,{AB:()=>m,GY:()=>C,lk:()=>B,r2:()=>K,uh:()=>p,ut:()=>u,wk:()=>v});var d=t(49671),o=t(72036),r=t(87372),y=t(66689),E=t(83703),c=t(97586);function u(n,_){if(Number.isNaN(n)||Number.isNaN(_)||_<0||typeof _>"u")return n;var i=_||0,f=Math.pow(10,i),R=+(i?n*f:n).toFixed(8),O=Math.floor(R),l=R-O,s=l>.5-1e-8&&l<.5+1e-8?O%2==0?O:O+1:Math.round(R);return i?s/f:s}function p(n){var _=[];return(0,d.A)(n,i=>{(0,d.A)(i,f=>{_.push(f)})}),_}function K(n,_){let i={};return!(0,o.A)(n)&&!(0,o.A)(_)&&(0,d.A)(n,f=>{(0,o.A)(i[f[_]])?i[f[_]]=[{...f}]:i[f[_]].push(f)}),i}function m(n,_="YYYY-MM-DD",i){return!(0,o.A)(n)||function k(n){return null!=n&&""!==n&&"number"==typeof n&&("number"==typeof n||!isNaN(n-0))}(n)?parseInt(c(n).format("HH"))>12?i?c(n).add(1,"day").toDate().getTime():c(n).add(1,"day").format(_):i?c(n).toDate().getTime():c(n).format(_):""}function C(n,_){return(0,o.A)(n)||(0,o.A)(_)?[]:n.sort((i,f)=>{if("Not Mentioned"!=i[_]&&!(0,o.A)(i[_])&&!(0,o.A)(f[_]))return String.prototype.localeCompare.call(i[_].toLowerCase(),f[_].toLowerCase())})}function B(n){var _=(new Date).getTime(),i=new Date;typeof performance<"u"&&"function"==typeof performance.now&&(_+=performance.now());var f="yxxxxxxx".replace(/[xy]/g,function(R){var O=(_+16*Math.random())%16|0;return _=Math.floor(_/16),("x"===R?O:3&O|8).toString(16)});return n+"_"+i.getTime()+f+Math.random().toString(36).substr(2,9)}function v(n){let _=0,i=0,f=[],R=0;for(let O of n)"STOCK-OUT"==O.type&&!O.isProductReturned&&(i+=O.qty);if(!(0,o.A)(n)){let O=0;(0,d.A)(n,(l,h)=>{if(f=(0,r.A)(f,["batchNo","createdDate"],["asc","asc"]),"STOCK-IN"==l.type&&l.qty>0&&!l.isProductReturned)l.stockQty>=l.qty?(f.push({batchNo:R,stockRate:l.rate,stockQty:l.qty,createdDate:l.createdDate,batchIndex:h,saleReference:[],totalStockVal:l.rate*l.qty,uniqueKeyInvoiceProduct:l.uniqueKeyInvoiceProduct,isOpening:!0===l.isOpeniningBalance}),O+=l.qty):(f.push({batchNo:R,stockRate:l.rate,stockQty:l.stockQty>0?l.stockQty:0,createdDate:l.createdDate,batchIndex:h,saleReference:[],totalStockVal:l.rate*(l.stockQty>0?l.stockQty:0),uniqueKeyInvoiceProduct:l.uniqueKeyInvoiceProduct,isOpening:!0===l.isOpeniningBalance}),O+=l.qty),R++;else if("STOCK-OUT"!=l.type||l.isProductReturned){if("STOCK-IN"==l.type&&l.isProductReturned){let s=l.qty,a=0;a=O,O+=s;for(let e of f.reverse()){let g=e.saleReference.find(I=>I.uniqueKey==l.uniqueKey&&I.quantity>0),F=(0,o.A)(g)?0:g.quantity;if(!(0,o.A)(g)){if(g.quantity<=s){let I=e.saleReference.findIndex(D=>D.uniqueKey==l.uniqueKey);if(e.saleReference[I].extraSaleQty>e.stockQty)e.stockQty=0,e.saleReference[I].extraSaleQty=0,a<0&&(e.stockQty+=g.quantity),e.totalStockVal=u(e.stockQty*e.stockRate,2);else{e.stockQty+=g.quantity,a<0&&(e.stockQty+=a),e.totalStockVal=u(e.stockQty*e.stockRate,2);let D=e.saleReference.findIndex(b=>b.uniqueKey==l.uniqueKey);D>=0&&(e.saleReference[D].quantity=e.saleReference[D].quantity-s,e.saleReference[D].quantity<0&&(e.saleReference[D].quantity=0),e.saleReference[D].extraSaleQty>0&&(e.stockQty=u(e.stockQty-e.saleReference[D].extraSaleQty,2)>0?u(e.stockQty-e.saleReference[D].extraSaleQty,2):e.stockQty,e.saleReference[D].quantity=e.saleReference[D].quantity+e.saleReference[D].extraSaleQty,e.totalStockVal=u(e.stockQty*e.stockRate,2),e.saleReference[D].extraSaleQty=0)),s-=F}}else{let I=e.saleReference.findIndex(D=>D.uniqueKey==l.uniqueKey);if(e.saleReference[I].extraSaleQty>e.stockQty)e.stockQty=0,e.saleReference[I].extraSaleQty=0,a<0&&(e.stockQty+=s),e.totalStockVal=u(e.stockQty*e.stockRate,2);else{e.stockQty+=s,a<0&&(e.stockQty+=a),e.totalStockVal=e.stockQty*e.stockRate;let D=e.saleReference.findIndex(b=>b.uniqueKey==l.uniqueKey);D>=0&&(e.saleReference[D].quantity=e.saleReference[D].quantity-s,e.saleReference[D].quantity<0&&(e.saleReference[D].quantity=0),e.saleReference[D].extraSaleQty>0&&(e.stockQty=u(e.stockQty-e.saleReference[D].extraSaleQty,2)>0?u(e.stockQty-e.saleReference[D].extraSaleQty,2):e.stockQty,e.saleReference[D].quantity=e.saleReference[D].quantity+e.saleReference[D].extraSaleQty,e.totalStockVal=u(e.stockQty*e.stockRate,2),e.saleReference[D].extraSaleQty=0)),s=0}}if(s<=0)break}}f=(0,r.A)(f,"batchNo","asc")}else if("STOCK-OUT"==l.type&&l.isProductReturned){let s=l.qty;O-=s;for(let a of f)if((0,y.A)(a,"isOpening")&&!0!==a.isOpening||!(0,y.A)(a,"isOpening")){if(a.stockQty>=s){a.stockQty-=s,a.totalStockVal=a.stockQty*a.stockRate,s=0;break}s-=a.stockQty,a.stockQty=0,a.totalStockVal=a.stockQty*a.stockRate}if(s>0)for(let a of f){if(a.stockQty>=s){a.stockQty-=s,a.totalStockVal=u(a.stockQty*a.stockRate,2),s=0;break}s-=a.stockQty,a.stockQty=0,a.totalStockVal=u(a.stockQty*a.stockRate,2)}}else if("inventory-loss"==l.type){let s=l.qty;O-=s;for(let a of f){if(a.stockQty>=s){a.stockQty-=s,a.totalStockVal=u(a.stockQty*a.stockRate,2),s=0;break}s-=a.stockQty,a.stockQty=0,a.totalStockVal=u(a.stockQty*a.stockRate,2)}}}else{let s={};if(i=u(i,2),i>=l.qty&&!(0,o.A)(f)){let a=l.qty;O-=a;for(let e of f)if(e.stockQty>0&&a>e.stockQty)s.uniqueKey=l.uniqueKey,s.quantity=e.stockQty,a-=e.stockQty,e.stockQty=0,e.totalStockVal=u(e.stockQty*e.stockRate,2),s.extraSaleQty=(0,o.A)(f.filter(g=>g.stockQty>0))?a-e.stockQty:0,e.saleReference.push(s),s={};else{if(e.stockQty>0&&a==e.stockQty){s.uniqueKey=l.uniqueKey,s.quantity=e.stockQty,s.extraSaleQty=0,e.saleReference.push(s),s={},a-=e.stockQty,e.stockQty=0,0==a&&(i-=l.qty),e.totalStockVal=e.stockQty*e.stockRate;break}if(a<e.stockQty){s.uniqueKey=l.uniqueKey,s.quantity=a,s.extraSaleQty=0,e.saleReference.push(s),e.stockQty-=a,a=0,0==a&&(i-=l.qty),s={},e.totalStockVal=e.stockQty*e.stockRate;break}}}}})}return _=(0,E.A)(f,"totalStockVal"),_}},64982:(M,A,t)=>{t.d(A,{A:()=>o});const o=function d(r,y,E){switch(E.length){case 0:return r.call(y);case 1:return r.call(y,E[0]);case 2:return r.call(y,E[0],E[1]);case 3:return r.call(y,E[0],E[1],E[2])}return r.apply(y,E)}},24338:(M,A,t)=>{t.d(A,{A:()=>o});const o=function d(r,y,E,c){for(var P=-1,u=null==r?0:r.length;++P<u;){var k=r[P];y(c,k,E(k),r)}return c}},13854:(M,A,t)=>{t.d(A,{A:()=>r});var d=t(99888);const r=function o(y,E){return!(null==y||!y.length)&&(0,d.A)(y,E,0)>-1}},6106:(M,A,t)=>{t.d(A,{A:()=>o});const o=function d(r,y,E){for(var c=-1,P=null==r?0:r.length;++c<P;)if(E(y,r[c]))return!0;return!1}},12084:(M,A,t)=>{t.d(A,{A:()=>r});var d=t(36728);const r=function o(y,E,c,P){return(0,d.A)(y,function(u,k,T){E(P,u,c(u),T)}),P}},35038:(M,A,t)=>{t.d(A,{A:()=>k});var d=t(38587),o=t(13854),r=t(6106),y=t(56689),E=t(20778),c=t(25934);const k=function u(T,p,K,m){var W=-1,C=o.A,B=!0,S=T.length,L=[],w=p.length;if(!S)return L;K&&(p=(0,y.A)(p,(0,E.A)(K))),m?(C=r.A,B=!1):p.length>=200&&(C=c.A,B=!1,p=new d.A(p));e:for(;++W<S;){var Q=T[W],U=null==K?Q:K(Q);if(Q=m||0!==Q?Q:0,B&&U==U){for(var x=w;x--;)if(p[x]===U)continue e;L.push(Q)}else C(p,U,m)||L.push(Q)}return L}},8556:(M,A,t)=>{t.d(A,{A:()=>o});const o=function d(r,y,E,c){for(var P=r.length,u=E+(c?1:-1);c?u--:++u<P;)if(y(r[u],u,r))return u;return-1}},99888:(M,A,t)=>{t.d(A,{A:()=>E});var d=t(8556),o=t(36440),r=t(8488);const E=function y(c,P,u){return P==P?(0,r.A)(c,P,u):(0,d.A)(c,o.A,u)}},36440:(M,A,t)=>{t.d(A,{A:()=>o});const o=function d(r){return r!=r}},90363:(M,A,t)=>{t.d(A,{A:()=>E});var d=t(57003),o=t(59008),r=t(66322);const E=function y(c,P){return(0,r.A)((0,o.A)(c,P,d.A),c+"")}},48993:(M,A,t)=>{t.d(A,{A:()=>E});var d=t(21913),o=t(84746),r=t(57003);const E=o.A?function(c,P){return(0,o.A)(c,"toString",{configurable:!0,enumerable:!1,value:(0,d.A)(P),writable:!0})}:r.A},17365:(M,A,t)=>{t.d(A,{A:()=>c});var d=t(24338),o=t(12084),r=t(71981),y=t(43744);const c=function E(P,u){return function(k,T){var p=(0,y.A)(k)?d.A:o.A,K=u?u():{};return p(k,P,(0,r.A)(T,2),K)}}},59008:(M,A,t)=>{t.d(A,{A:()=>y});var d=t(64982),o=Math.max;const y=function r(E,c,P){return c=o(void 0===c?E.length-1:c,0),function(){for(var u=arguments,k=-1,T=o(u.length-c,0),p=Array(T);++k<T;)p[k]=u[c+k];k=-1;for(var K=Array(c+1);++k<c;)K[k]=u[k];return K[c]=P(p),(0,d.A)(E,this,K)}}},66322:(M,A,t)=>{t.d(A,{A:()=>y});var d=t(48993);const y=(0,t(59950).A)(d.A)},59950:(M,A,t)=>{t.d(A,{A:()=>E});var r=Date.now;const E=function y(c){var P=0,u=0;return function(){var k=r(),T=16-(k-u);if(u=k,T>0){if(++P>=800)return arguments[0]}else P=0;return c.apply(void 0,arguments)}}},8488:(M,A,t)=>{t.d(A,{A:()=>o});const o=function d(r,y,E){for(var c=E-1,P=r.length;++c<P;)if(r[c]===y)return c;return-1}},21913:(M,A,t)=>{t.d(A,{A:()=>o});const o=function d(r){return function(){return r}}},30335:(M,A,t)=>{t.d(A,{A:()=>c});var d=t(1827),o=t(17365),y=Object.prototype.hasOwnProperty;const c=(0,o.A)(function(P,u,k){y.call(P,k)?P[k].push(u):(0,d.A)(P,k,[u])})},98388:(M,A,t)=>{t.d(A,{A:()=>y});var d=t(31287),o=t(42661);const y=function r(E){return(0,o.A)(E)&&(0,d.A)(E)}},6327:(M,A,t)=>{t.d(A,{A:()=>c});var d=t(56689),o=t(71981),r=t(79103),y=t(43744);const c=function E(P,u){return((0,y.A)(P)?d.A:r.A)(P,(0,o.A)(u,3))}},42969:(M,A,t)=>{t.d(A,{A:()=>E});var d=t(35038),o=t(90363),r=t(98388);const E=(0,o.A)(function(c,P){return(0,r.A)(c)?(0,d.A)(c,P):[]})},10467:(M,A,t)=>{function d(r,y,E,c,P,u,k){try{var T=r[u](k),p=T.value}catch(K){return void E(K)}T.done?y(p):Promise.resolve(p).then(c,P)}function o(r){return function(){var y=this,E=arguments;return new Promise(function(c,P){var u=r.apply(y,E);function k(p){d(u,c,P,k,T,"next",p)}function T(p){d(u,c,P,k,T,"throw",p)}k(void 0)})}}t.d(A,{A:()=>o})}}]);(()=>{"use strict";var e,p={},l={};function r(e){var a=l[e];if(void 0!==a)return a.exports;var t=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,1838,4070,3279],()=>r(13279));return r.O(e)},e=[],r.O=(a,t,s,n)=>{if(!t){var u=1/0;for(c=0;c<e.length;c++){for(var[t,s,n]=e[c],i=!0,f=0;f<t.length;f++)(!1&n||u>=n)&&Object.keys(r.O).every(o=>r.O[o](t[f]))?t.splice(f--,1):(i=!1,n<u&&(u=n));if(i){e.splice(c--,1);var _=s();void 0!==_&&(a=_)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,s,n]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((a,t)=>(r.f[t](e,a),a),[])),r.u=e=>e+"."+{1838:"ff2d609baf81ac0c",1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",3279:"32bdf9e41f786b92",4070:"9f0662b54606bf0e",5358:"b07617e082274e68",7586:"368ceba96ee1b551"}[e]+".js",r.miniCssF=e=>{},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={4220:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var t=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=t.push.bind(t);t.push=n=>{var[c,u,i]=n;for(var f in u)r.o(u,f)&&(r.m[f]=u[f]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,1838,4070,3279].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,p={},l={};function r(e){var a=l[e];if(void 0!==a)return a.exports;var t=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,5205,9746,5540],()=>r(55540));return r.O(e)},e=[],r.O=(a,t,s,n)=>{if(!t){var u=1/0;for(c=0;c<e.length;c++){for(var[t,s,n]=e[c],i=!0,f=0;f<t.length;f++)(!1&n||u>=n)&&Object.keys(r.O).every(o=>r.O[o](t[f]))?t.splice(f--,1):(i=!1,n<u&&(u=n));if(i){e.splice(c--,1);var _=s();void 0!==_&&(a=_)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,s,n]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((a,t)=>(r.f[t](e,a),a),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5205:"d10efc9ae5058a53",5358:"b07617e082274e68",5540:"a71c0b46556311c1",9746:"301f49c69e8bb3ea"}[e]+".js",r.miniCssF=e=>{},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={4231:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var t=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=t.push.bind(t);t.push=n=>{var[c,u,i]=n;for(var f in u)r.o(u,f)&&(r.m[f]=u[f]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,5205,9746,5540].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,U={94254:(e,l,s)=>{function b(n,t,a,r,c,o,y){try{var p=n[o](y),f=p.value}catch(q){return void a(q)}p.done?t(f):Promise.resolve(f).then(r,c)}var u=s(72036),E=s(38587);const B=function W(n){return n!=n},Q=function J(n,t){return!(null==n||!n.length)&&function z(n,t,a){return t==t?function H(n,t,a){for(var r=a-1,c=n.length;++r<c;)if(n[r]===t)return r;return-1}(n,t,a):function T(n,t,a,r){for(var c=n.length,o=a+(r?1:-1);r?o--:++o<c;)if(t(n[o],o,n))return o;return-1}(n,B,a)}(n,t,0)>-1},X=function V(n,t,a){for(var r=-1,c=null==n?0:n.length;++r<c;)if(a(t,n[r]))return!0;return!1};var ee=s(25934),R=s(94226);var G=s(83998);const se=R.A&&1/(0,G.A)(new R.A([,-0]))[1]==1/0?function(n){return new R.A(n)}:function ne(){},N=function oe(n,t){return t="function"==typeof t?t:void 0,n&&n.length?function ue(n,t,a){var r=-1,c=Q,o=n.length,y=!0,p=[],f=p;if(a)y=!1,c=X;else if(o>=200){var q=t?null:se(n);if(q)return(0,G.A)(q);y=!1,c=ee.A,f=new E.A}else f=t?[]:p;e:for(;++r<o;){var g=n[r],d=t?t(g):g;if(g=a||0!==g?g:0,y&&d==d){for(var M=f.length;M--;)if(f[M]===d)continue e;t&&f.push(d),p.push(g)}else c(f,d,a)||(f!==p&&f.push(d),p.push(g))}return p}(n,void 0,t):[]};var le=s(56155);const D=function fe(n,t){return(0,le.A)(n,t)};var j=s(83703),Y=s(73502);self.addEventListener("message",function(){var n=function h(n){return function(){var t=this,a=arguments;return new Promise(function(r,c){var o=n.apply(t,a);function y(f){b(o,r,c,y,p,"next",f)}function p(f){b(o,r,c,y,p,"throw",f)}y(void 0)})}}(function*(t){const a=t.data;"payment"==a["list-Type"]&&pe(a).then(r=>{postMessage(r),self.close()}),"all-payment"==a["list-Type"]&&he(a).then(r=>{postMessage(r),self.close()})});return function(t){return n.apply(this,arguments)}}());const pe=function(n){return new Promise((t,a)=>{let r=n.currentPayment;const c=n.allMap,o=c.saleInvoiceMap,y=c.saleReturnMap,p=c.purchaseInvoiceMap,f=c.purchaseReturnMap,q=c.expenseMap,g=c.capitalTransactionWithUKAccTwoMap,d=c.clientWithEntityPaymentsMap,M=c.paymentLinkWithAccountEntityMap,S=c.paymentLinkWithClientAccountEntity;if((0,u.A)(r))t(r);else{const L=r.clientUniqueKey,A=r.client;let _=(0,u.A)(L)?[]:q.get(L)||[],v=!1;const k=(0,u.A)(A);if(1==r.paymentTypeCrDr){const w=[()=>!k&&P(o,"uniqueKeySales",L,A,d),()=>!k&&P(f,"uniqueKeyPurchaseReturn",L,A,d),()=>!k&&(g.get(A.uniqueKeyOfAccount)||[])];for(const m of w)if(!(0,u.A)(m())){v=!0;break}}else if(2==r.paymentTypeCrDr){const w=[()=>!k&&P(y,"uniqueKeySalesReturn",L,A,d),()=>!k&&P(p,"uniqueKeyPurchase",L,A,d),()=>!k&&(g.get(A.uniqueKeyOfAccount)||[]),()=>(0,u.A)(_)?[]:_.filter(m=>{let C=N([...M.get(m.uniqueKeyExpensesEntity)||[],...S.get(A.uniqueKeyOfAccount)||[]],D),K=(0,Y.ut)((0,j.A)(C.filter(I=>I.uniqueKeyLinkWithAccountEntity===m.uniqueKeyExpensesEntity||I.uniqueKeyClientAccountEntity===A.uniqueKeyOfAccount),"amount"),2);return m.amount>K})];for(const m of w)if(!(0,u.A)(m())){v=!0;break}}t({...r,clientInvoiceExist:v,isGoneThroughActionWorker:!0})}})},he=function(n){return new Promise((t,a)=>{let r=[],c=n.paymentList;const o=n.allMap,y=o.saleInvoiceMap,p=o.saleReturnMap,f=o.purchaseInvoiceMap,q=o.purchaseReturnMap,g=o.expenseMap,d=o.capitalTransactionWithUKAccTwoMap,M=o.clientWithEntityPaymentsMap,S=o.paymentLinkWithAccountEntityMap,L=o.paymentLinkWithClientAccountEntity;(0,u.A)(c)?t(c):(c.forEach(A=>{const _=A.clientUniqueKey,v=A.client;let k=(0,u.A)(_)?[]:g.get(_)||[],w=!1;const m=(0,u.A)(v);if(1==A.paymentTypeCrDr){const C=[()=>!m&&P(y,"uniqueKeySales",_,v,M),()=>!m&&P(q,"uniqueKeyPurchaseReturn",_,v,M),()=>!m&&(d.get(v.uniqueKeyOfAccount)||[])];for(const K of C)if(!(0,u.A)(K())){w=!0;break}}else if(2==A.paymentTypeCrDr){const C=[()=>!m&&P(p,"uniqueKeySalesReturn",_,v,M),()=>!m&&P(f,"uniqueKeyPurchase",_,v,M),()=>!m&&(d.get(v.uniqueKeyOfAccount)||[]),()=>(0,u.A)(k)?[]:k.filter(K=>{let I=N([...S.get(K.uniqueKeyExpensesEntity)||[],...L.get(v.uniqueKeyOfAccount)||[]],D),ye=(0,Y.ut)((0,j.A)(I.filter($=>$.uniqueKeyLinkWithAccountEntity===K.uniqueKeyExpensesEntity||$.uniqueKeyClientAccountEntity===v.uniqueKeyOfAccount),"amount"),2);return K.amount>ye})];for(const K of C)if(!(0,u.A)(K())){w=!0;break}}r.push({...A,clientInvoiceExist:w,isGoneThroughActionWorker:!0})}),t(r)),t([])})},P=function(n,t,a,r,c){return a?(n.get(a)||[]).filter(o=>o.amount>(c[`${o[t]}_${r.uniqueKeyOfAccount}`]||0)):[]}}},F={};function i(e){var l=F[e];if(void 0!==l)return l.exports;var s=F[e]={id:e,loaded:!1,exports:{}};return U[e].call(s.exports,s,s.exports,i),s.loaded=!0,s.exports}i.m=U,i.x=()=>{var e=i.O(void 0,[2036,5358,2359,1981,5205,3502],()=>i(94254));return i.O(e)},e=[],i.O=(l,s,b,h)=>{if(!s){var E=1/0;for(u=0;u<e.length;u++){for(var[s,b,h]=e[u],T=!0,x=0;x<s.length;x++)(!1&h||E>=h)&&Object.keys(i.O).every(O=>i.O[O](s[x]))?s.splice(x--,1):(T=!1,h<E&&(E=h));if(T){e.splice(u--,1);var W=b();void 0!==W&&(l=W)}}return l}h=h||0;for(var u=e.length;u>0&&e[u-1][2]>h;u--)e[u]=e[u-1];e[u]=[s,b,h]},i.n=e=>{var l=e&&e.__esModule?()=>e.default:()=>e;return i.d(l,{a:l}),l},i.d=(e,l)=>{for(var s in l)i.o(l,s)&&!i.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:l[s]})},i.f={},i.e=e=>Promise.all(Object.keys(i.f).reduce((l,s)=>(i.f[s](e,l),l),[])),i.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",3502:"3c878c97ff0a87d9",5205:"d10efc9ae5058a53",5358:"b07617e082274e68"}[e]+".js",i.miniCssF=e=>{},i.o=(e,l)=>Object.prototype.hasOwnProperty.call(e,l),i.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;i.tt=()=>(void 0===e&&(e={createScriptURL:l=>l},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),i.tu=e=>i.tt().createScriptURL(e),i.p="",(()=>{var e={4254:1};i.f.i=(h,u)=>{e[h]||importScripts(i.tu(i.p+i.u(h)))};var s=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],b=s.push.bind(s);s.push=h=>{var[u,E,T]=h;for(var x in E)i.o(E,x)&&(i.m[x]=E[x]);for(T&&T(i);u.length;)e[u.pop()]=1;b(h)}})(),(()=>{var e=i.x;i.x=()=>Promise.all([2036,5358,2359,1981,5205,3502].map(i.e,i)).then(e)})(),i.x()})();(()=>{"use strict";var e,p={},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,8182],()=>r(48182));return r.O(e)},e=[],r.O=(t,a,s,n)=>{if(!a){var f=1/0;for(c=0;c<e.length;c++){for(var[a,s,n]=e[c],i=!0,u=0;u<a.length;u++)(!1&n||f>=n)&&Object.keys(r.O).every(_=>r.O[_](a[u]))?a.splice(u--,1):(i=!1,n<f&&(f=n));if(i){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e,t),t),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5358:"b07617e082274e68",7586:"368ceba96ee1b551",8182:"e68a29daed05423c"}[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={4268:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var a=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=a.push.bind(a);a.push=n=>{var[c,f,i]=n;for(var u in f)r.o(f,u)&&(r.m[u]=f[u]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,8182].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,p={},l={};function r(e){var a=l[e];if(void 0!==a)return a.exports;var t=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,1838,4070,3279],()=>r(13279));return r.O(e)},e=[],r.O=(a,t,s,n)=>{if(!t){var u=1/0;for(c=0;c<e.length;c++){for(var[t,s,n]=e[c],i=!0,f=0;f<t.length;f++)(!1&n||u>=n)&&Object.keys(r.O).every(o=>r.O[o](t[f]))?t.splice(f--,1):(i=!1,n<u&&(u=n));if(i){e.splice(c--,1);var _=s();void 0!==_&&(a=_)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,s,n]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((a,t)=>(r.f[t](e,a),a),[])),r.u=e=>e+"."+{1838:"ff2d609baf81ac0c",1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",3279:"32bdf9e41f786b92",4070:"9f0662b54606bf0e",5358:"b07617e082274e68",7586:"368ceba96ee1b551"}[e]+".js",r.miniCssF=e=>{},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={434:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var t=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=t.push.bind(t);t.push=n=>{var[c,u,i]=n;for(var f in u)r.o(u,f)&&(r.m[f]=u[f]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,1838,4070,3279].map(r.e,r)).then(e)})(),r.x()})();"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[4340],{34262:(ce,V,g)=>{g.d(V,{X:()=>l});var S=g(60177),G=g(89417),C=g(61997),T=g(92314),h=g(75263),$=g(50074),u=g(75351),D=g(7180),z=g(82798),U=g(54438);let l=(()=>{class A{static#e=this.\u0275fac=function(y){return new(y||A)};static#t=this.\u0275mod=U.$C({type:A});static#i=this.\u0275inj=U.G2t({imports:[S.MD,G.YN,G.X1,C.C,T.X6,$.G,u.hM,h.ZG,D.Q8,z.Ve]})}return A})()},14340:(ce,V,g)=>{g.r(V),g.d(V,{SettingModule:()=>us});var S=g(60177),G=g(72882),C=g(75743),T=g(10467),h=g(98808),$=g(5964),u=g(66689),D=g(81817),z=g(6327),U=g(49671),l=g(72036),A=g(65113),f=g(75351),e=g(54438),y=g(39866);function W(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",3),e.bIt("click",function(){const i=e.eBV(t).index,o=e.XpG();return e.Njj(o.selectOptionType(i))}),e.j41(1,"div",4)(2,"div",5)(3,"div")(4,"div",6),e.EFF(5),e.k0s()()(),e.j41(6,"div")(7,"div",7)(8,"span",8),e.EFF(9,"arrow_forward"),e.k0s()()()()()}if(2&a){const t=c.$implicit;e.R7$(5),e.JRh(t)}}let le=(()=>{class a{constructor(t,n,i){this.selectOptionData=t,this.dialogRef=n,this.commonService=i,this.title=this.selectOptionData.title,this.optionList=this.selectOptionData.optionList,this.commonService.setSEOInfo("Manage Fields in Documents - Binz Accounting App",[{name:"description",content:"Manage Fields in Documents"},{name:"keywords",content:"Manage Fields in Documents, Setting, Invoice, Custom, Create, New, Field, Name, "},{name:"title",content:"Manage Fields in Documents"}])}ngOnInit(){}selectOptionType(t){this.dialogRef.close({select_option_type:t})}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.Vh),e.rXU(f.CP),e.rXU(y.h))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-select-option"]],decls:4,vars:2,consts:[["mat-dialog-title","",1,"mat-dialog-title","mb-0"],[1,"mat-typography","mat-dialog-content"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],[1,"d-flex","border-bottom","pt-2","pb-3","px-4","justify-content-between","align-items-center"],[1,"d-flex","justify-content-between","align-items-center"],[1,"po-head","m-0"],[1,"dropdown"],[1,"material-icons","custom-icons"]],template:function(n,i){1&n&&(e.j41(0,"h2",0),e.EFF(1),e.k0s(),e.j41(2,"mat-dialog-content",1),e.DNE(3,W,10,1,"div",2),e.k0s()),2&n&&(e.R7$(),e.SpI(" ",i.title,"\n"),e.R7$(2),e.Y8G("ngForOf",i.optionList))},dependencies:[S.Sq]})}return a})();var de=g(90265),w=g(7004),F=g(26297),P=g(39477),d=g(89417),ue=g(30768),v=g(7180);const ct=["forgotPasswordForm"];let lt=(()=>{class a{constructor(t,n,i,o,r){this.dialogRef=t,this.dataStoreService=n,this.notificationService=i,this.settingService=o,this.commonService=r,this.isLoading=!1,this.commonService.setSEOInfo("Forgot Password - Binz Accounting App",[{name:"description",content:"Forgot Password"},{name:"keywords",content:"Forgot Password, Setting, Registered, Email, New, Password"},{name:"title",content:"Forgot Password"}])}ngOnInit(){}submit(){if(navigator.onLine)if(this.forgotPasswordForm.form.valid)this.isLoading=!0,this.settingService.changePasswordRequest(this.userEmail,t=>{this.isLoading=!1,200==t.status?(this.notificationService.success("PASSWORD_SEND_TO_YOUR_EMAIL_ACCOUNT",{},!0),this.dialogRef.close({email_send_successfully:!0})):this.notificationService.error("INALID_EMAIL_ID",{},!0)});else{const t=this.forgotPasswordForm.controls;if(t.userEmail.invalid&&(t.userEmail.dirty||t.userEmail.untouched||t.userEmail.touched)&&t.userEmail?.errors.required)return this.notificationService.error("PLEASE_ENTER_YOUR_EMAIL",{},!0),!1;if(t.userEmail.invalid&&(t.userEmail.dirty||t.userEmail.untouched||t.userEmail.touched)&&t.userEmail?.errors.pattern)return this.notificationService.error("PLEASE_ENTER_VALID_EMAIL_ID",{},!0),!1}else this.notificationService.warn(h.DH.alertMessage(9))}closeDialog(){this.dialogRef.close({email_send_successfully:!1})}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.CP),e.rXU(w.V),e.rXU(F.J),e.rXU(P.q),e.rXU(y.h))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-forgot-password-dialog"]],viewQuery:function(n,i){if(1&n&&e.GBs(ct,5),2&n){let o;e.mGM(o=e.lsd())&&(i.forgotPasswordForm=o.first)}},decls:31,vars:21,consts:[["forgotPasswordForm","ngForm"],["novalidate","",1,"shadow"],["align","center",1,"custom-field-form"],[1,"pt-2","border-bottom"],[1,"row","col-12"],[1,"col-6",2,"text-align","left","margin-top","4px"],[1,"support-modal","text-center",2,"padding-top","13px"],[1,"material-icons","custom-icons","passsword-icon"],[1,"col-12","inp_mrg_btm"],[1,"form-group"],["type","email","name","userEmail","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$",1,"form-control",2,"margin-bottom","5px","padding","8px 8px !important",3,"ngModelChange","ngModel","required","placeholder"],[1,"modal-footer","pb-3","pe-3"],["type","button",1,"btn-cancel",3,"click"],[1,"material-icons","custom-icons"],["type","submit",1,"btn-done",3,"click","lwLoadingBtn","loadingText"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"form",1,0)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"h5"),e.EFF(7),e.nI1(8,"transloco"),e.k0s()()()(),e.j41(9,"div",6)(10,"span",7),e.EFF(11,"lock"),e.k0s(),e.j41(12,"p"),e.EFF(13),e.nI1(14,"transloco"),e.k0s(),e.j41(15,"div",8)(16,"div",9)(17,"input",10),e.nI1(18,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.userEmail,s)||(i.userEmail=s),e.Njj(s)}),e.k0s()()()(),e.j41(19,"div",11)(20,"button",12),e.bIt("click",function(){return e.eBV(o),e.Njj(i.closeDialog())}),e.j41(21,"span",13),e.EFF(22,"cancel"),e.k0s(),e.EFF(23),e.nI1(24,"transloco"),e.k0s(),e.j41(25,"button",14),e.nI1(26,"transloco"),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(27,"span",13),e.EFF(28,"check_circle"),e.k0s(),e.EFF(29),e.nI1(30,"transloco"),e.k0s()()()()}2&n&&(e.R7$(7),e.JRh(e.bMT(8,9,"PASSWORD_FORGOT")),e.R7$(6),e.JRh(e.bMT(14,11,"ENTER_YOUR_EMAIL_FOR_PASS")),e.R7$(4),e.FS9("placeholder",e.bMT(18,13,"PLEASE_ENTER_EMAIL")),e.R50("ngModel",i.userEmail),e.Y8G("required",!0),e.R7$(6),e.SpI(" ",e.bMT(24,15,"CLOSE")," "),e.R7$(2),e.FS9("loadingText",e.bMT(26,17,"DONE")),e.Y8G("lwLoadingBtn",i.isLoading),e.R7$(4),e.SpI(" ",e.bMT(30,19,"DONE")," "))},dependencies:[d.qT,d.me,d.BC,d.cb,d.YS,d.R_,d.vS,d.cV,ue.Q,v.Kj],styles:["[_ngcontent-%COMP%]::placeholder{color:#777!important;font-size:13px!important}"]})}return a})();var Y=g(45312),R=g(93832),ie=g(21413);let pe=(()=>{class a{constructor(){this.dataSignal=new ie.B}emitData(t){this.dataSignal.next(t)}subscribeData(t){this.dataSignal.subscribe(t)}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275prov=e.jDH({token:a,factory:a.\u0275fac,providedIn:"root"})}return a})();var dt=g(28573);let ut=(()=>{class a{constructor(t,n){this.el=t,this.renderer=n,this.setTitle=!1}ngOnChanges(t){if(this.content){if(this.setTitle&&this.renderer.setProperty(this.el.nativeElement,"title",this.content),!this.searchedWord||!this.searchedWord.length||!this.classToApply)return void this.renderer.setProperty(this.el.nativeElement,"innerHTML",this.content);this.renderer.setProperty(this.el.nativeElement,"innerHTML",this.getFormattedText())}}getFormattedText(){const t=new RegExp(`(${this.searchedWord})`,"gi");return this.content.replace(t,`<span class="${this.classToApply}">$1</span>`)}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(e.aKT),e.rXU(e.sFG))};static#t=this.\u0275dir=e.FsC({type:a,selectors:[["","appHighlight",""]],inputs:{searchedWord:"searchedWord",content:"content",classToApply:"classToApply",setTitle:"setTitle"},features:[e.OA$]})}return a})(),pt=(()=>{class a{transform(t,n){return t?n?(n=n.toLocaleLowerCase(),t.filter(i=>i.toLocaleLowerCase().includes(n))):t:[]}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275pipe=e.EJ8({name:"appFilter",type:a,pure:!0})}return a})();const gt=a=>({"setting-active":a});function mt(a,c){1&a&&(e.j41(0,"li",9)(1,"a",51)(2,"div",23)(3,"div",11)(4,"span",12),e.EFF(5,"account_tree"),e.k0s()(),e.j41(6,"div",13),e.EFF(7),e.nI1(8,"transloco"),e.k0s(),e.j41(9,"div",14)(10,"span",15),e.EFF(11,"chevron_right"),e.k0s()()()()()),2&a&&(e.R7$(7),e.SpI(" ",e.bMT(8,1,"PRODUCT_CATEGOTY_LABEL")," "))}function ht(a,c){if(1&a){const t=e.RV6();e.j41(0,"button",52),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.clearSearchText())}),e.j41(1,"span",53),e.EFF(2,"clear"),e.k0s()()}}function _t(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",64)(1,"p",65),e.bIt("click",function(){const i=e.eBV(t).$implicit,o=e.XpG(5);return e.Njj(o.redirect(i,2))}),e.EFF(2),e.k0s()()}if(2&a){const t=c.$implicit,n=e.XpG(5);e.Y8G("searchedWord",n.searchTerm)("content",t)("classToApply","setting-highlight")("setTitle","true"),e.R7$(2),e.JRh(t)}}function ft(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",62),e.bIt("click",function(){const i=e.eBV(t).$implicit,o=e.XpG(4);return e.Njj(o.redirect(i,2))}),e.DNE(1,_t,3,5,"div",63),e.nI1(2,"appFilter"),e.k0s()}if(2&a){const t=c.$implicit,n=e.XpG(4);e.R7$(),e.Y8G("ngForOf",e.i5U(2,1,t.transKeywords,n.searchTerm))}}function bt(a,c){if(1&a&&(e.j41(0,"div",60),e.DNE(1,ft,3,4,"div",61),e.k0s()),2&a){const t=e.XpG().$implicit;e.R7$(),e.Y8G("ngForOf",t.fiilerSubSettings)}}function St(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",57),e.bIt("click",function(){const i=e.eBV(t).$implicit,o=e.XpG(2);return e.Njj(o.redirect(i,1))}),e.j41(1,"div",58),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.DNE(4,bt,2,1,"div",59),e.k0s()}if(2&a){const t=c.$implicit;e.R7$(2),e.SpI(" ",e.bMT(3,2,t.translatedTitle)," "),e.R7$(2),e.Y8G("ngIf",null!=t.subSettings&&t.subSettings.length>0)}}function Tt(a,c){if(1&a&&(e.j41(0,"div",54)(1,"div",55),e.DNE(2,St,5,4,"div",56),e.k0s()()),2&a){const t=e.XpG();e.R7$(2),e.Y8G("ngForOf",t.searchFilterSettings)}}let vt=(()=>{class a{constructor(t,n,i,o,r,s,p,m){this.commonService=t,this.router=n,this.route=i,this.syncApiService=o,this.translocoService=r,this.settingService=s,this.searchFilterSetting=p,this.dashboardService=m,this.enabledFeatureList=[],this.pageType=this.route.snapshot.data.pageType,this.currentUrl=this.router.url,this.activeLink="",this.default=!0,this.searchFilterSettings=[],this.defaultSearchFilterSettings=[],this.buildType=Y.c&&"DESKTOP"==Y.c.buildType?"DESKTOP":"WEB",this.isPOSModeEnabled=!1,this.dashboardService.posModeSetting$.subscribe(_=>{this.isPOSModeEnabled=_})}ngOnInit(){this.orgId=this.commonService.getOrgId();let t=h.xL.getLocalCache("POS-mode-enabled_"+this.orgId);this.isPOSModeEnabled=h.xL.getLocalCache("POS-mode-enabled_"+this.orgId)?"true"==t:this.isPOSModeEnabled,this.currentUrl=this.router.url,this.commonService.broadcast("hideSidebar",!1),this.getActiveLink(this.router.url),this.browserSubscription=this.router.events.pipe((0,$.p)(n=>n instanceof C.wF)).subscribe(n=>{this.currentUrl=n.url,this.getActiveLink(n.url)}),this.router.events.pipe((0,$.p)(n=>n instanceof C.wF)).subscribe(n=>{1===n.id&&n.url===n.urlAfterRedirects&&this.prepareSearchFilter()}),this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(n=>{(0,u.A)(n,"syncProcessComplete")&&n.syncProcessComplete&&(0,D.A)(()=>{"add-edit-setting"==this.pageType&&this.fetchDBData()})}),this.fetchDBData()}ngAfterViewInit(){}prepareSearchFilter(){var t=this;this.searchFilterSettings=[];let n=h.DH.searchFilterSettings(),i=this.translocoService.getActiveLang();this.translocoService.selectTranslation("en").subscribe(o=>{if(this.defaultSearchFilterSettings=(0,z.A)(n,r=>(r.keywords&&(0,U.A)(r.keywords,function(){var s=(0,T.A)(function*(p){"en"!=i&&(yield r.transKeywords.push(o[p])),yield r.transKeywords.push(t.translocoService.translate(p))});return function(p){return s.apply(this,arguments)}}()),r.subSettings&&(0,U.A)(r.subSettings,s=>{s.keywords&&(0,U.A)(s.keywords,function(){var p=(0,T.A)(function*(m){"en"!=i&&(yield s.transKeywords.push(o[m])),yield s.transKeywords.push(t.translocoService.translate(m))});return function(m){return p.apply(this,arguments)}}())}),r)),!this.settingData?.fieldVisibility?.showTermsCondition){let r=this.defaultSearchFilterSettings.findIndex(s=>"Terms and Conditions"==s.title);r>=0&&this.defaultSearchFilterSettings.splice(r,1)}if(!this.checkRouteEnable("/purchases")){let r=this.defaultSearchFilterSettings.findIndex(s=>"Inventory Setting"==s.title);r>=0&&this.defaultSearchFilterSettings.splice(r,1)}})}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchDbData("filterSettingData",function(){var n=(0,T.A)(function*(i){var o=yield i.data;if(200===i.status&&!(0,l.A)(o)){t.settingData=o;const r=o.featureSetting;t.enabledFeatureList=[],(0,U.A)(h.DH.featureTitleList(),s=>{r.find(m=>m.widgetUniqueKey===s.id&&m.isShow)&&(t.enabledFeatureList.push(s.routes),t.checkRouteEnable(s.routes)),t.prepareSearchFilter()})}});return function(i){return n.apply(this,arguments)}}())})()}openForgotPassDialog(){this.clearSearchText(),this.commonService.showDialog(lt,{},t=>{},{width:"400px",panelClass:"ng-material-dialog"})}selectCustomFieldOption(){this.commonService.showDialog(le,{title:this.translocoService.translate("MANAGE_FIELDS_IN_DOCUMENTS"),optionList:[this.translocoService.translate("RENAME_FIELDS"),this.translocoService.translate("CREATE_NEW_FIELDS"),this.translocoService.translate("CREATE_NEW_FIELDS_FOR_YOUR_LIST_ITEM")]},t=>{(0,u.A)(t,"select_option_type")&&isNumber(t.select_option_type)&&(0==t.select_option_type?this.navigateToUrl("/settings/custom-fields"):1==t.select_option_type?this.commonService.showDialog(de.m,{formType:"DOCUMENT"},n=>{(0,u.A)(n,"custom_field_added")},{panelClass:"ng-material-dialog"}):this.commonService.showDialog(de.m,{formType:"LIST_ITEM"},n=>{(0,u.A)(n,"list_item_added")}))},{panelClass:"lw-dialog-payment-type"})}navigateToUrl(t){(0,l.A)(t)||this.router.navigateByUrl(t)}checkRouteEnable(t){return this.enabledFeatureList.includes(t)}getActiveLink(t){(0,D.A)(()=>{this.activeLink="",this.activeLink=t})}searchOrFilterSettings(){(0,l.A)(this.searchTerm)||""==this.searchTerm.trim()?(this.default=!0,this.searchFilterSettings=[...this.defaultSearchFilterSettings]):(this.default=!1,this.searchFilterSettings=this.settingService.search(this.searchTerm,this.defaultSearchFilterSettings))}clearSearchText(){this.searchTerm="",this.searchFilterSettings=[...this.defaultSearchFilterSettings]}redirect(t,n){1==n?"Forgot Password"==t.title?this.openForgotPassDialog():"Manage Fields in Documents"==t.title?(this.router.navigateByUrl(t.route),this.selectCustomFieldOption()):t.route&&this.router.navigateByUrl(t.route):2==n&&("Forgot Password"==t.title?this.openForgotPassDialog():"Manage Fields in Documents"==t.title?this.router.navigateByUrl(t.route):"Custom Field"==t.title?this.selectCustomFieldOption():!(0,l.A)(t)&&t.route&&(this.router.navigateByUrl(t.route),this.searchFilterSetting.emitData(t))),this.clearSearchText()}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(y.h),e.rXU(C.Ix),e.rXU(C.nX),e.rXU(R.P),e.rXU(v.JO),e.rXU(P.q),e.rXU(pe),e.rXU(dt.I))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-setting"]],decls:253,vars:72,consts:[[1,"content"],[1,"container-fluid","ps-0"],[1,"row"],[1,"",2,"display","block"],[1,"setting-heading"],[1,"no-padding","settings-main-list"],["role","navigation",1,"navbar","settings-main",2,"padding-left","12px !important"],[1,"setting-menu-list"],[1,"acc-nav__section-report"],[1,"acc-nav__item-report"],["routerLinkActive","setting-active","routerLink","/settings/primary",1,"setting-menu-title",3,"click"],[1,"col-md-1"],[1,"material-icons","custom-icons"],[1,"col-md-9","pe-0"],[1,"col-md-1","p-0"],[1,"material-icons","custom-icons","icon-custome-color"],["routerLinkActive","setting-active","routerLink","/settings/profile",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/discount-taxes",1,"setting-menu-title",3,"click"],[1,"acc-nav__item-report",3,"hidden"],["routerLinkActive","setting-active","routerLink","/settings/terms-condition",1,"setting-menu-title",3,"click"],["class","acc-nav__item-report",4,"ngIf"],["routerLink","/settings/invoice-theme-settings",1,"setting-menu-title",3,"click","ngClass"],["routerLinkActive","setting-active","routerLink","/settings/printer-settings",1,"setting-menu-title"],[1,"row","mr-0"],["routerLinkActive","setting-active","routerLink","/settings/balance-sheet-setting",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/customize-dashboard",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/enable-disable-feature",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/show-hide-fields",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/inventory",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/payments",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/banking-paypal.me",1,"setting-menu-title",3,"click"],[1,"acc-nav__item-report",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/custom-fields",1,"setting-menu-title",3,"click"],["routerLinkActive","setting-active","routerLink","/settings/merge-account/1",1,"setting-menu-title",3,"click"],[1,"material-icons","custom-icons","icon-custome-color",2,"padding-top","9px !important"],["routerLinkActive","setting-active","routerLink","/settings/language",1,"setting-menu-title",3,"click"],[1,"col-md-9","pr-0"],["routerLinkActive","setting-active","routerLink","/batch-upload/client",1,"setting-menu-title",3,"click"],[1,"material-icons-round","custom-icons"],["routerLinkActive","setting-active","routerLink","/settings/enable-store",1,"setting-menu-title",3,"click"],[1,"beta-tag"],["routerLinkActive","setting-active","routerLink","/settings/reset-account",1,"setting-menu-title",3,"click"],[1,"main-setting"],[1,"search-local"],[1,"icon"],["xmlns","http://www.w3.org/2000/svg","width","24","height","24","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-search","search-icon",2,"opacity","1"],["cx","11","cy","11","r","8"],["x1","21","y1","21","x2","16.65","y2","16.65"],["type","text","name","searchTerm","autocomplete","off",1,"dropdown-toggle",3,"ngModelChange","keyup","change","placeholder","ngModel"],["class","button",3,"click",4,"ngIf"],["class","suggest-search border",4,"ngIf"],["routerLinkActive","setting-active","routerLink","/settings/product-categorization",1,"setting-menu-title"],[1,"button",3,"click"],[1,"material-icons","md-allicon"],[1,"suggest-search","border"],[1,"search-setting"],["class","search-border",3,"click",4,"ngFor","ngForOf"],[1,"search-border",3,"click"],[1,"search-title"],["class","sub-setting-heading",4,"ngIf"],[1,"sub-setting-heading"],[3,"click",4,"ngFor","ngForOf"],[3,"click"],["appHighlight","",3,"searchedWord","content","classToApply","setTitle",4,"ngFor","ngForOf"],["appHighlight","",3,"searchedWord","content","classToApply","setTitle"],[1,"mb-0","p-space",3,"click"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.EFF(5),e.nI1(6,"transloco"),e.k0s(),e.j41(7,"div",5)(8,"div",6)(9,"div",7)(10,"ul",8)(11,"li",9)(12,"a",10),e.bIt("click",function(){return i.clearSearchText()}),e.j41(13,"div",2)(14,"div",11)(15,"span",12),e.EFF(16,"settings"),e.k0s()(),e.j41(17,"div",13),e.EFF(18),e.nI1(19,"transloco"),e.k0s(),e.j41(20,"div",14)(21,"span",15),e.EFF(22,"chevron_right"),e.k0s()()()()(),e.j41(23,"li",9)(24,"a",16),e.bIt("click",function(){return i.clearSearchText()}),e.j41(25,"div",2)(26,"div",11)(27,"span",12),e.EFF(28,"person"),e.k0s()(),e.j41(29,"div",13),e.EFF(30),e.nI1(31,"transloco"),e.k0s(),e.j41(32,"div",14)(33,"span",15),e.EFF(34,"chevron_right"),e.k0s()()()()(),e.j41(35,"li",9)(36,"a",17),e.bIt("click",function(){return i.clearSearchText()}),e.j41(37,"div",2)(38,"div",11)(39,"span",12),e.EFF(40,"percent"),e.k0s()(),e.j41(41,"div",13),e.EFF(42),e.nI1(43,"transloco"),e.k0s(),e.j41(44,"div",14)(45,"span",15),e.EFF(46,"chevron_right"),e.k0s()()()()(),e.j41(47,"li",18)(48,"a",19),e.bIt("click",function(){return i.clearSearchText()}),e.j41(49,"div",2)(50,"div",11)(51,"span",12),e.EFF(52,"gavel"),e.k0s()(),e.j41(53,"div",13),e.EFF(54),e.nI1(55,"transloco"),e.k0s(),e.j41(56,"div",14)(57,"span",15),e.EFF(58,"chevron_right"),e.k0s()()()()(),e.DNE(59,mt,12,3,"li",20),e.j41(60,"li",9)(61,"a",21),e.bIt("click",function(){return i.clearSearchText()}),e.j41(62,"div",2)(63,"div",11)(64,"span",12),e.EFF(65,"description"),e.k0s()(),e.j41(66,"div",13),e.EFF(67),e.nI1(68,"transloco"),e.k0s(),e.j41(69,"div",14)(70,"span",15),e.EFF(71,"chevron_right"),e.k0s()()()()(),e.j41(72,"li",9)(73,"a",22)(74,"div",23)(75,"div",11)(76,"span",12),e.EFF(77,"printer"),e.k0s()(),e.j41(78,"div",13),e.EFF(79),e.nI1(80,"transloco"),e.k0s(),e.j41(81,"div",14)(82,"span",15),e.EFF(83,"chevron_right"),e.k0s()()()()(),e.j41(84,"li",9)(85,"a",24),e.bIt("click",function(){return i.clearSearchText()}),e.j41(86,"div",2)(87,"div",11)(88,"span",12),e.EFF(89,"summarize"),e.k0s()(),e.j41(90,"div",13),e.EFF(91),e.nI1(92,"transloco"),e.k0s(),e.j41(93,"div",14)(94,"span",15),e.EFF(95,"chevron_right"),e.k0s()()()()(),e.j41(96,"li",9)(97,"a",25),e.bIt("click",function(){return i.clearSearchText()}),e.j41(98,"div",2)(99,"div",11)(100,"span",12),e.EFF(101,"dashboard_customize"),e.k0s()(),e.j41(102,"div",13),e.EFF(103),e.nI1(104,"transloco"),e.k0s(),e.j41(105,"div",14)(106,"span",15),e.EFF(107,"chevron_right"),e.k0s()()()()(),e.j41(108,"li",9)(109,"a",26),e.bIt("click",function(){return i.clearSearchText()}),e.j41(110,"div",2)(111,"div",11)(112,"span",12),e.EFF(113,"hide_source"),e.k0s()(),e.j41(114,"div",13),e.EFF(115),e.nI1(116,"transloco"),e.k0s(),e.j41(117,"div",14)(118,"span",15),e.EFF(119,"chevron_right"),e.k0s()()()()(),e.j41(120,"li",9)(121,"a",27),e.bIt("click",function(){return i.clearSearchText()}),e.j41(122,"div",2)(123,"div",11)(124,"span",12),e.EFF(125,"visibility_off"),e.k0s()(),e.j41(126,"div",13),e.EFF(127),e.nI1(128,"transloco"),e.k0s(),e.j41(129,"div",14)(130,"span",15),e.EFF(131,"chevron_right"),e.k0s()()()()(),e.j41(132,"li",18)(133,"a",28),e.bIt("click",function(){return i.clearSearchText()}),e.j41(134,"div",2)(135,"div",11)(136,"span",12),e.EFF(137,"inventory_2"),e.k0s()(),e.j41(138,"div",13),e.EFF(139),e.nI1(140,"transloco"),e.k0s(),e.j41(141,"div",14)(142,"span",15),e.EFF(143,"chevron_right"),e.k0s()()()()(),e.j41(144,"li",9)(145,"a",29),e.bIt("click",function(){return i.clearSearchText()}),e.j41(146,"div",2)(147,"div",11)(148,"span",12),e.EFF(149,"payment"),e.k0s()(),e.j41(150,"div",13),e.EFF(151),e.nI1(152,"transloco"),e.k0s(),e.j41(153,"div",14)(154,"span",15),e.EFF(155,"chevron_right"),e.k0s()()()()(),e.j41(156,"li",9)(157,"a",30),e.bIt("click",function(){return i.clearSearchText()}),e.j41(158,"div",2)(159,"div",11)(160,"span",12),e.EFF(161,"account_balance"),e.k0s()(),e.j41(162,"div",13),e.EFF(163),e.nI1(164,"transloco"),e.k0s(),e.j41(165,"div",14)(166,"span",15),e.EFF(167,"chevron_right"),e.k0s()()()()(),e.j41(168,"li",31),e.bIt("click",function(){return i.selectCustomFieldOption()}),e.j41(169,"a",32),e.bIt("click",function(){return i.clearSearchText()}),e.j41(170,"div",2)(171,"div",11)(172,"span",12),e.EFF(173,"article"),e.k0s()(),e.j41(174,"div",13),e.EFF(175),e.nI1(176,"transloco"),e.k0s(),e.j41(177,"div",14)(178,"span",15),e.EFF(179,"chevron_right"),e.k0s()()()()(),e.j41(180,"li",9)(181,"a",33),e.bIt("click",function(){return i.clearSearchText()}),e.j41(182,"div",2)(183,"div",11)(184,"span",12),e.EFF(185,"switch_account "),e.k0s()(),e.j41(186,"div",13),e.EFF(187),e.nI1(188,"transloco"),e.k0s(),e.j41(189,"div",14)(190,"span",34),e.EFF(191,"chevron_right"),e.k0s()()()()(),e.j41(192,"li",9)(193,"a",35),e.bIt("click",function(){return i.clearSearchText()}),e.j41(194,"div",2)(195,"div",11)(196,"span",12),e.EFF(197,"language"),e.k0s()(),e.j41(198,"div",36),e.EFF(199),e.nI1(200,"transloco"),e.k0s(),e.j41(201,"div",14)(202,"span",15),e.EFF(203,"chevron_right"),e.k0s()()()()(),e.j41(204,"li",9)(205,"a",37),e.bIt("click",function(){return i.clearSearchText()}),e.j41(206,"div",2)(207,"div",11)(208,"span",38),e.EFF(209," upload_file "),e.k0s()(),e.j41(210,"div",36),e.EFF(211),e.nI1(212,"transloco"),e.k0s(),e.j41(213,"div",14)(214,"span",15),e.EFF(215,"chevron_right"),e.k0s()()()()(),e.j41(216,"li",9)(217,"a",39),e.bIt("click",function(){return i.clearSearchText()}),e.j41(218,"div",2)(219,"div",11)(220,"span",12),e.EFF(221,"add_shopping_cart"),e.k0s()(),e.j41(222,"div",13),e.EFF(223),e.nI1(224,"transloco"),e.j41(225,"span",40),e.EFF(226,"Beta"),e.k0s()(),e.j41(227,"div",14)(228,"span",15),e.EFF(229,"chevron_right"),e.k0s()()()()(),e.j41(230,"li",9)(231,"a",41),e.bIt("click",function(){return i.clearSearchText()}),e.j41(232,"div",2)(233,"div",11)(234,"span",12),e.EFF(235,"restart_alt"),e.k0s()(),e.j41(236,"div",13),e.EFF(237),e.nI1(238,"transloco"),e.k0s(),e.j41(239,"div",14)(240,"span",15),e.EFF(241,"chevron_right"),e.k0s()()()()()()()()()(),e.j41(242,"div",42)(243,"div",43)(244,"div",44),e.qSk(),e.j41(245,"svg",45),e.nrm(246,"circle",46)(247,"line",47),e.k0s()(),e.joV(),e.j41(248,"input",48),e.nI1(249,"transloco"),e.mxI("ngModelChange",function(r){return e.DH7(i.searchTerm,r)||(i.searchTerm=r),r}),e.bIt("keyup",function(){return i.searchOrFilterSettings()})("change",function(){return i.searchOrFilterSettings()}),e.k0s(),e.DNE(250,ht,3,0,"button",49)(251,Tt,3,1,"div",50),e.k0s(),e.nrm(252,"router-outlet"),e.k0s()()()()),2&n&&(e.R7$(5),e.JRh(e.bMT(6,28,"SETTINGS")),e.R7$(13),e.SpI(" ",e.bMT(19,30,"PRIMARY_SETTINGS"),""),e.R7$(12),e.SpI(" ",e.bMT(31,32,"USER_PROFILE"),""),e.R7$(12),e.SpI(" ",e.bMT(43,34,"DISCOUNT_AND_TAXES"),""),e.R7$(5),e.Y8G("hidden",!(null!=i.settingData&&null!=i.settingData.fieldVisibility&&i.settingData.fieldVisibility.showTermsCondition)),e.R7$(7),e.SpI(" ",e.bMT(55,36,"TERMS_AND_CONDITIONS")," "),e.R7$(5),e.Y8G("ngIf",i.isPOSModeEnabled),e.R7$(2),e.Y8G("ngClass",e.eq3(70,gt,"/settings/invoice-theme-settings"===i.currentUrl||"/settings/invoice-theme"===i.currentUrl)),e.R7$(6),e.SpI(" ",e.bMT(68,38,"INVOICE_THEME")," "),e.R7$(12),e.SpI(" ",e.bMT(80,40,"PRINTER_SETTINGS")," "),e.R7$(12),e.JRh(e.bMT(92,42,"BALANCE_SHEET_SETTING")),e.R7$(12),e.JRh(e.bMT(104,44,"CUSTOMIZE_DASHBOARD")),e.R7$(12),e.SpI(" ",e.bMT(116,46,"ENABLE_DISABLE_FEATURE")," "),e.R7$(12),e.SpI(" ",e.bMT(128,48,"SHOW_HIDE_FIELDS")," "),e.R7$(5),e.Y8G("hidden",!i.checkRouteEnable("/purchases")),e.R7$(7),e.SpI(" ",e.bMT(140,50,"INVENTORY_SETTING")," "),e.R7$(12),e.SpI(" ",e.bMT(152,52,"PAYMENT_TRACKING"),""),e.R7$(12),e.SpI(" ",e.bMT(164,54,"BANKING_DETAILS_PAYPAL_ME")," "),e.R7$(12),e.SpI(" ",e.bMT(176,56,"MANAGE_FIELDS_IN_DOCUMENTS")," "),e.R7$(12),e.JRh(e.bMT(188,58,"FIX_DUPLICATE_ACCOUNT")),e.R7$(12),e.SpI(" ",e.bMT(200,60,"LANGUAGE_SETTINGS"),""),e.R7$(12),e.SpI(" ",e.bMT(212,62,"BATCH_UPLOAD"),""),e.R7$(12),e.SpI(" ",e.bMT(224,64,"ECOMMERCE_SETTING")," "),e.R7$(14),e.SpI(" ",e.bMT(238,66,"RESET_DATA"),""),e.R7$(11),e.FS9("placeholder",e.bMT(249,68,"SEARCH")),e.R50("ngModel",i.searchTerm),e.R7$(2),e.Y8G("ngIf",""!=i.searchTerm&&null!=i.searchTerm),e.R7$(),e.Y8G("ngIf",i.searchTerm))},dependencies:[S.YU,S.Sq,S.bT,C.n3,C.Wk,C.wQ,d.me,d.BC,d.vS,ut,pt,v.Kj],styles:[".search-setting[_ngcontent-%COMP%]{display:grid;grid-template-columns:auto;grid-gap:3px;cursor:pointer}.search-title[_ngcontent-%COMP%]{font-size:14px;font-weight:600;color:#000}.search-title[_ngcontent-%COMP%]:hover{color:#0c356a}.sub-setting-heading[_ngcontent-%COMP%]{margin-left:12px;font-size:13px;cursor:pointer;color:#4a4a4a}.sub-setting-heading[_ngcontent-%COMP%]   .p-space[_ngcontent-%COMP%]:hover{transition:.2s;padding-left:10px;color:#0c356a}.search-border[_ngcontent-%COMP%]{border:1px solid rgba(0,0,0,.0705882353);margin:3px;border-radius:4px;padding:6px;background:#eeeeee75}.search-border[_ngcontent-%COMP%]:hover{border:1px solid rgba(0,0,0,.0705882353);margin:3px;border-radius:4px;padding:6px;background:#d5ecff}"]})}return a})();var L=g(39274),E=g(97586),we=g(46238),Ct=g(84322),yt=g(28277),Et=g(36725);let It=(()=>{class a{constructor(t,n,i){this.editData=t,this.dialogRef=n,this.notificationService=i,this.editTransObject={transKeyNo:"",transKeyname:"",transNo:1,transTitle:"",transValue:"",nextTranNo:""}}ngOnInit(){Object.assign(this.editTransObject,this.editData.transactionData)}submit(){""!=this.editTransObject.transValue.trim()?(this.editTransObject.transValue=(0,yt.A)(this.editTransObject.transValue),!(0,l.A)(this.editTransObject.transValue)||isNumber(this.editTransObject.transNo)?(isNumber(this.editTransObject.transNo)||(this.editTransObject.transNo=1),this.dialogRef.close({add_edit_transaction_no:!0,editTransObject:this.editTransObject})):this.notificationService.error("PLEASE_ENTER_PROPER_TRANSACTION_NO",{},!0)):this.notificationService.error("PLZ_ENTER_REFIX",{},!0)}closeDialog(t){this.dialogRef.close({add_edit_transaction_no:!1})}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.Vh),e.rXU(f.CP),e.rXU(F.J))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-edit-transaction-setting"]],decls:36,vars:32,consts:[["form","ngForm"],["mat-dialog-title","",1,"mat-dialog-title"],["novalidate",""],[1,"mat-typography","mat-dialog-content","p-0"],[1,"p-2"],[1,"row","m-0"],[1,"col-6"],[1,"form-group"],["for","format_field"],["type","text","name","format_field","id","format_field","required","",1,"form-control",3,"ngModelChange","placeholder","ngModel"],["for","number_field"],["type","number","numeric","","decimals","0","min","0","name","number_field","id","number_field","numeric","","onKeyPress","if(this.value.length==18) return false","required","",1,"form-control",3,"ngModelChange","placeholder","ngModel"],[1,"text-primary","col-12","font-weight-500",2,"font-size","12px"],["align","end",1,"mat-dialog-actions"],["type","button",1,"btn-cancel",3,"click"],[1,"material-icons","custom-icons"],["type","submit","loadingText","Saving",1,"btn-done",3,"click"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"h2",1),e.EFF(1),e.nI1(2,"transloco"),e.k0s(),e.j41(3,"form",2,0)(5,"mat-dialog-content",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"div",7)(10,"label",8),e.EFF(11),e.nI1(12,"transloco"),e.k0s(),e.j41(13,"input",9),e.nI1(14,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.editTransObject.transValue,s)||(i.editTransObject.transValue=s),e.Njj(s)}),e.k0s()()(),e.j41(15,"div",6)(16,"div",7)(17,"label",10),e.EFF(18),e.nI1(19,"transloco"),e.k0s(),e.j41(20,"input",11),e.nI1(21,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.editTransObject.transNo,s)||(i.editTransObject.transNo=s),e.Njj(s)}),e.k0s()()(),e.j41(22,"div",12),e.EFF(23),e.nI1(24,"transloco"),e.k0s()()()(),e.j41(25,"mat-dialog-actions",13)(26,"button",14),e.bIt("click",function(){return e.eBV(o),e.Njj(i.closeDialog())}),e.j41(27,"span",15),e.EFF(28,"cancel"),e.k0s(),e.EFF(29),e.nI1(30,"transloco"),e.k0s(),e.j41(31,"button",16),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(32,"span",15),e.EFF(33,"check_circle"),e.k0s(),e.EFF(34),e.nI1(35,"transloco"),e.k0s()()()}2&n&&(e.R7$(),e.SpI(" ",e.bMT(2,16,"TRANSACTION_NO"),"\n"),e.R7$(10),e.JRh(e.bMT(12,18,"ENTER_PREFIX")),e.R7$(2),e.FS9("placeholder",e.bMT(14,20,"ENTER_PREFIX")),e.R50("ngModel",i.editTransObject.transValue),e.R7$(5),e.JRh(e.bMT(19,22,"STARTING_TRANSACTION_NUM")),e.R7$(2),e.FS9("placeholder",e.bMT(21,24,"STARTING_TRANSACTION_NUM")),e.R50("ngModel",i.editTransObject.transNo),e.R7$(3),e.SEQ(" ",e.bMT(24,26,"NEXT_TRANSACTION_NO"),": ",i.editTransObject.transValue," ",i.editTransObject.transNo>0?i.editTransObject.transNo:0==i.editTransObject.transNo?0:1,", ",i.editTransObject.transValue," ",(i.editTransObject.transNo>0?i.editTransObject.transNo:0==i.editTransObject.transNo?0:1)+1,", ",i.editTransObject.transValue," ",(i.editTransObject.transNo>0?i.editTransObject.transNo:0==i.editTransObject.transNo?0:1)+2,", ... "),e.R7$(6),e.SpI(" ",e.bMT(30,28,"CLOSE")," "),e.R7$(5),e.SpI(" ",e.bMT(35,30,"SAVE")," "))},dependencies:[d.qT,d.me,d.Q0,d.BC,d.cb,d.YS,d.VZ,d.vS,d.cV,Et.T,f.BI,f.E7,f.Yi,v.Kj]})}return a})();const Ft=["transactionNoEditForm"];function Dt(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",9)(1,"div",10),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"div",11)(5,"div",12)(6,"span",13),e.EFF(7),e.k0s(),e.j41(8,"span",13),e.EFF(9),e.k0s()()(),e.j41(10,"div",14),e.bIt("click",function(){const i=e.eBV(t),o=i.$implicit,r=i.index,s=e.XpG();return e.Njj(s.editTransactionNo(o,r))}),e.j41(11,"a")(12,"span",15),e.EFF(13,"edit"),e.k0s()()()()}if(2&a){const t=c.$implicit;e.R7$(2),e.SpI(" ",e.bMT(3,3,t.translateKey)," "),e.R7$(5),e.JRh(t.transValue),e.R7$(2),e.JRh(t.transNo)}}let Rt=(()=>{class a{constructor(t,n,i,o,r,s,p){this.transactionNoData=t,this.dialogRef=n,this.commonService=i,this.syncApiService=o,this.settingService=r,this.notificationService=s,this.translocoService=p,this.transactionNoFormObj=h.DH.transactionNoFormObj(),this.isLoading=!1,this.accountListTrranslatedKey=h.DH.accountListForTranslations()}ngOnInit(){this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchDbData("filterTransactionNo",function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&!(0,l.A)(o)&&(t.transactionNoSettings=o,t.transactionNoFormObj=t.transactionNoFormObj.map(r=>{let s=t.transactionNoSettings[r.transKeyname],p=t.transactionNoSettings[r.transKeyNo];return{...r,transValue:(0,l.A)(s)?"":s,transNo:isNumber(p)?p:1}}),t.transactionNoFormObj.map(r=>{r.transName=(0,l.A)(t.accountListTrranslatedKey.find(s=>s.title==r.transTitle))?r.transTitle:t.translocoService.translate(t.accountListTrranslatedKey.find(s=>s.title==r.transTitle).translated_key)}))});return function(i){return n.apply(this,arguments)}}())})()}submit(){this.transactionNoEditForm.form.valid?(this.isLoading=!0,this.settingService.addDBTransactionSetting(this.transactionNoSettings,t=>{let n=t.data;200==t.status&&(0,u.A)(n,"formatNameSettings")&&n.formatNameSettings&&(0,L.A)(()=>{this.isLoading=!1,this.notificationService.success("SETTING_SAVE_SUCCESSFULLY",{},!0),this.dialogRef.close({add_edit_transaction_success:!0})},500)})):this.notificationService.success("SOMETHING_WENT_WRONG",{},!0)}editTransactionNo(t,n){this.commonService.showDialog(It,{transactionData:t},i=>{if((0,u.A)(i,"add_edit_transaction_no")&&i.add_edit_transaction_no&&!(0,l.A)(i.editTransObject)){let o=i.editTransObject;this.transactionNoFormObj[n].transValue=o.transValue,this.transactionNoFormObj[n].transNo=o.transNo,this.transactionNoSettings[t.transKeyname]=o.transValue,this.transactionNoSettings[t.transKeyNo]=o.transNo}},{panelClass:"lw-dialog-payment-type"})}closeDialog(t){this.dialogRef.close({add_edit_transaction_success:!1})}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.Vh),e.rXU(f.CP),e.rXU(y.h),e.rXU(R.P),e.rXU(P.q),e.rXU(F.J),e.rXU(v.JO))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-transaction-no-setting"]],viewQuery:function(n,i){if(1&n&&e.GBs(Ft,5),2&n){let o;e.mGM(o=e.lsd())&&(i.transactionNoEditForm=o.first)}},decls:20,vars:17,consts:[["transactionNoEditForm","ngForm"],["mat-dialog-title","",1,"mat-dialog-title"],["novalidate",""],[1,"mat-typography","mat-dialog-content","p-0"],["class","row border-bottom mb-2 ","style","font-size: 15px;",4,"ngFor","ngForOf"],["align","end",1,"mat-dialog-actions"],["type","button",1,"btn-cancel",3,"click"],[1,"material-icons","custom-icons"],["type","submit",1,"btn-done",3,"click","loadingText","lwLoadingBtn"],[1,"row","border-bottom","mb-2",2,"font-size","15px"],[1,"col-md-5","pl-0","pt-2",2,"color","rgb(155, 155, 155)"],[1,"col-md-6","pr-0"],[1,"p-2","text-primary","text-end","text-break"],[1,""],[1,"col-md-1","pt-1",3,"click"],[1,"material-icons","custom-icons","md-allicon"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"h2",1),e.EFF(1),e.nI1(2,"transloco"),e.k0s(),e.j41(3,"form",2,0)(5,"mat-dialog-content",3),e.DNE(6,Dt,14,5,"div",4),e.k0s(),e.j41(7,"mat-dialog-actions",5)(8,"button",6),e.bIt("click",function(){return e.eBV(o),e.Njj(i.closeDialog())}),e.j41(9,"span",7),e.EFF(10,"cancel"),e.k0s(),e.EFF(11),e.nI1(12,"transloco"),e.k0s(),e.j41(13,"button",8),e.nI1(14,"transloco"),e.nI1(15,"transloco"),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(16,"span",7),e.EFF(17,"check_circle"),e.k0s(),e.EFF(18),e.nI1(19,"transloco"),e.k0s()()()}2&n&&(e.R7$(),e.SpI(" ",e.bMT(2,7,"TRANSACTION_PREFIX"),"\n"),e.R7$(5),e.Y8G("ngForOf",i.transactionNoFormObj),e.R7$(5),e.SpI(" ",e.bMT(12,9,"CLOSE")," "),e.R7$(2),e.FS9("loadingText",e.bMT(14,11,"SAVING")),e.FS9("loadingText",e.bMT(15,13,"SAVING")),e.Y8G("lwLoadingBtn",i.isLoading),e.R7$(5),e.SpI(" ",e.bMT(19,15,"SAVE")," "))},dependencies:[S.Sq,ue.Q,d.qT,d.cb,d.cV,f.BI,f.E7,f.Yi,v.Kj]})}return a})();var xe=g(31975),kt=g(44293),x=g(4922),O=g(4300),ge=g(92173),ne=g(39936),Ce=g(92314),Be=g(52953);const At=["primarySettingForm"],Q=a=>({"bg-highlight":a}),Mt=()=>({"lw-disabled-block":!0}),Ot=()=>({"lw-disabled-block":!1});function jt(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",95)(1,"div",32)(2,"label")(3,"input",96),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.settingAddObject.textSymbolFlag,i)||(o.settingAddObject.textSymbolFlag=i),e.Njj(i)}),e.bIt("change",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.setValue("textSymbolFlag",0,"country"))}),e.k0s(),e.j41(4,"span",34),e.EFF(5),e.k0s()(),e.j41(6,"label")(7,"input",97),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.settingAddObject.textSymbolFlag,i)||(o.settingAddObject.textSymbolFlag=i),e.Njj(i)}),e.bIt("change",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.setValue("textSymbolFlag",1,"country"))}),e.k0s(),e.j41(8,"span",34),e.EFF(9),e.k0s()()()()}if(2&a){const t=e.XpG();e.R7$(3),e.R50("ngModel",t.settingAddObject.textSymbolFlag),e.Y8G("checked",0==t.settingAddObject.textSymbolFlag)("value",0),e.R7$(2),e.JRh(t.settingAddObject.countryCurrencySymbol),e.R7$(2),e.R50("ngModel",t.settingAddObject.textSymbolFlag),e.Y8G("checked",1==t.settingAddObject.textSymbolFlag)("value",1),e.R7$(2),e.JRh(t.settingAddObject.countryCurrencyName)}}function Nt(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",98)(1,"label")(2,"div",99)(3,"input",100),e.nI1(4,"transloco"),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.settingAddObject.textSymbol,i)||(o.settingAddObject.textSymbol=i),e.Njj(i)}),e.bIt("keyup",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.setValue("textSymbol",i.target.value,"country"))})("change",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.setValue("textSymbol",i.target.value,"country"))}),e.k0s()()()()}if(2&a){const t=e.XpG();e.R7$(3),e.FS9("placeholder",e.bMT(4,3,"ENTER_SYMBOL")),e.R50("ngModel",t.settingAddObject.textSymbol),e.Y8G("maxlength",4)}}function Lt(a,c){if(1&a&&(e.j41(0,"option",101),e.EFF(1),e.k0s()),2&a){const t=c.$implicit;e.Y8G("value",c.index),e.R7$(),e.SpI(" ",t," ")}}function Pt(a,c){if(1&a&&(e.j41(0,"option",102),e.EFF(1),e.k0s()),2&a){const t=c.$implicit,n=e.XpG();e.Y8G("selected",t===n.settingAddObject.quantityRoundOff),e.R7$(),e.SpI(" ",t," ")}}function wt(a,c){if(1&a&&(e.j41(0,"option",102),e.EFF(1),e.k0s()),2&a){const t=c.$implicit,n=e.XpG();e.Y8G("selected",t===n.settingAddObject.rateRoundOff),e.R7$(),e.SpI(" ",t," ")}}function xt(a,c){if(1&a&&(e.j41(0,"option",102),e.EFF(1),e.k0s()),2&a){const t=c.$implicit,n=e.XpG();e.Y8G("selected",t===n.settingAddObject.percentRoundOff),e.R7$(),e.SpI(" ",t," ")}}function Bt(a,c){if(1&a&&(e.j41(0,"option",102),e.EFF(1),e.k0s()),2&a){const t=c.$implicit,n=e.XpG();e.Y8G("selected",t===n.settingAddObject.dashBoardRoundOff),e.R7$(),e.SpI(" ",t," ")}}function Ut(a,c){if(1&a&&(e.j41(0,"option",103),e.EFF(1),e.nI1(2,"transloco"),e.k0s()),2&a){const t=c.$implicit,n=e.XpG();e.Y8G("selected",n.settingAddObject.defaultOverdueTimePeriod==t.value)("value",t.value),e.R7$(),e.SpI(" ",e.bMT(2,3,t.translate_key)," ")}}function Gt(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",104)(1,"label")(2,"input",105),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.settingAddObject.optionDailyWeekly,i)||(o.settingAddObject.optionDailyWeekly=i),e.Njj(i)}),e.bIt("change",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.setValue("optionDailyWeekly",0,"default"))}),e.k0s(),e.j41(3,"span",34),e.EFF(4),e.nI1(5,"transloco"),e.k0s()(),e.j41(6,"label")(7,"input",105),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.settingAddObject.optionDailyWeekly,i)||(o.settingAddObject.optionDailyWeekly=i),e.Njj(i)}),e.bIt("change",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.setValue("optionDailyWeekly",1,"default"))}),e.k0s(),e.j41(8,"span",34),e.EFF(9),e.nI1(10,"transloco"),e.k0s()()()}if(2&a){const t=e.XpG();e.R7$(2),e.R50("ngModel",t.settingAddObject.optionDailyWeekly),e.Y8G("checked",0==t.settingAddObject.optionDailyWeekly)("value",0),e.R7$(2),e.JRh(e.bMT(5,8,"DAILY")),e.R7$(3),e.R50("ngModel",t.settingAddObject.optionDailyWeekly),e.Y8G("checked",1==t.settingAddObject.optionDailyWeekly)("value",1),e.R7$(2),e.JRh(e.bMT(10,10,"WEEKLY"))}}function $t(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",106)(1,"label",107),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"input",108),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.settingAddObject.defaultReminderTime,i)||(o.settingAddObject.defaultReminderTime=i),e.Njj(i)}),e.bIt("change",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.setReminderTime(i.target.value))}),e.k0s()()}if(2&a){const t=e.XpG();e.R7$(2),e.SpI("",e.bMT(3,2,"AT")," "),e.R7$(2),e.R50("ngModel",t.settingAddObject.defaultReminderTime)}}function Vt(a,c){if(1&a){const t=e.RV6();e.j41(0,"option",113),e.bIt("click",function(){const i=e.eBV(t).index,o=e.XpG(2);return e.Njj(o.addDateEvent("reminderDay",i))}),e.j41(1,"a"),e.EFF(2),e.k0s()()}if(2&a){const t=c.$implicit;e.R7$(2),e.JRh(t)}}function Xt(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",109)(1,"label",110),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"select",111),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.settingAddObject.selectEveryReminderDay,i)||(o.settingAddObject.selectEveryReminderDay=i),e.Njj(i)}),e.DNE(5,Vt,3,1,"option",112),e.k0s()()}if(2&a){const t=e.XpG();e.R7$(2),e.JRh(e.bMT(3,3,"EVERY")),e.R7$(2),e.R50("ngModel",t.settingAddObject.selectEveryReminderDay),e.R7$(),e.Y8G("ngForOf",t.daysList)}}function Yt(a,c){if(1&a&&(e.j41(0,"option",114),e.EFF(1),e.k0s()),2&a){const t=c.$implicit;e.R7$(),e.JRh(t)}}let Ht=(()=>{class a{constructor(t,n,i,o,r,s,p,m,_,b,I,j,M){this.countries=t,this.commonService=n,this.settingService=i,this.authService=o,this.route=r,this.notificationService=s,this.syncDbService=p,this.syncCommonService=m,this.dataStoreService=_,this.syncApiService=b,this.translocoService=I,this.searchFilterSettings=j,this.printerSettingsService=M,this.isLoading=!1,this.bookeepingDefaultDate=new d.MJ,this.pageType=this.route.snapshot.data.pageType,this.countryList=this.countries.COUNTRIESLIST,this.taxDiscountPercentOption=h.DH.settingOptions("percentage-tax-discount"),this.amountOnDashoardOption=h.DH.settingOptions("amount-on-dashboard"),this.qtyRateRoundOfoption=h.DH.settingOptions("qty-rate"),this.currencyFormatOption=h.DH.settingOptions("currencyFormat"),this.defaultOverDueTime=h.DH.settingOptions("default-overdue-period"),this.financialYearList=h.DH.settingOptions("finanical-year"),this.daysList=h.DH.settingOptions("weekly-days"),this.settingAddObject={countryId:5,countryName:"",countryCurrencySymbol:"",countryCurrencyName:"",textSymbolFlag:1,textSymbol:"RS",currencyCode:"INR",currencyFormat:1,dateFormat:0,quantityRoundOff:2,rateRoundOff:2,percentRoundOff:2,amountRoundOff:2,dashBoardRoundOff:0,taxId:"GSTIN",defaultOverdueTimePeriod:"",isReminderForOverdue:!1,optionDailyWeekly:0,defaultReminderTime:"10:00",selectEveryReminderDay:"",selectFinancialYear:""},this.settingsObject=this.printerSettingsService.DefaultWebSettings,this.commonService.setSEOInfo("Primary Settings - Binz Accounting App",[{name:"description",content:"Primary Settings"},{name:"keywords",content:"Primary Settings, Setting, Country, Currency, Date, Quantity, Date, Tax, Rate, Amount"},{name:"title",content:"Primary Settings"}])}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-primary-setting"==this.pageType&&this.fetchDBData()}),this.searchFilterSettings.subscribeData(n=>{n&&"Primary Settings"==n.mainTitle&&(setTimeout(()=>{this.scrollToFragment(n.elementId),this.backgroundId=n.elementId},550),setTimeout(()=>{this.backgroundId=" "},3e3))})}),this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchDbData("allSettings",function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&!(0,l.A)(o.allSettings)&&(t.deviceSettings=o.allSettings.deviceSettings,(0,u.A)(o.allSettings,"webSettings")&&(t.webSettings=(0,l.A)(o.allSettings.webSettings)?t.printerSettingsService.DefaultWebSettings:o.allSettings.webSettings,t.settingsObject=Object.assign({...t.printerSettingsService.DefaultWebSettings},h.DH.getObjectByKeys(t.webSettings,["printSetting","thermalPrinterType","printerSettingEntity","invoiceThemeSettings"]))),!(0,l.A)(t.deviceSettings.country)&&170==t.deviceSettings.country.id&&(t.deviceSettings.country.id=169),!(0,l.A)(t.deviceSettings.country)&&147==t.deviceSettings.country.id&&(t.deviceSettings.country.id=146),t.bookeepingDefaultDate=new d.MJ(E.utc(t.deviceSettings.bookKeepingStartDate).format("YYYY-MM-DD")),t.settingAddObject.defaultReminderTime=0!=t.deviceSettings.optionDateTime?E(t.deviceSettings.optionDateTime).format("HH:mm"):"10:00",t.prepareEditSettingData(t.deviceSettings))});return function(i){return n.apply(this,arguments)}}())})()}prepareEditSettingData(t){if(!(0,l.A)(t)){let n=this.countryList.find(s=>s.id==t.country.id),i=E(t.fyYearFromDate).format("DD MMM")+" - "+E(t.fyYearToDate).format("DD MMM"),o=this.financialYearList.findIndex(s=>s==i),r=h.DH.filterFormatDate(t.optionDateTime,"A");o<0&&(o=Number(E(t.fyYearFromDate).format("M"))-1),this.settingAddObject={countryId:t.country.id,countryName:n.countryName,countryCurrencySymbol:n.currencyCode,countryCurrencyName:n.currencyName,textSymbolFlag:t.country.textSymbolFlag,textSymbol:t.country.textSymbol,currencyCode:t.country.currencyCode,currencyFormat:t.currencyFormat,dateFormat:t.dateFormat,quantityRoundOff:t.quantityRoundOff,rateRoundOff:t.rateRoundOff,percentRoundOff:t.percentRoundOff,amountRoundOff:t.amountRoundOff,dashBoardRoundOff:t.dashBoardRoundOff,taxId:t.customFields.taxId,defaultOverdueTimePeriod:t.defaultOverdueTimePeriod,isReminderForOverdue:t.isReminderForOverdue,optionDailyWeekly:t.optionDailyWeekly,defaultReminderTime:"AM"==r?h.DH.filterFormatDate(t.optionDateTime,"hh:mm"):"PM"==r?h.DH.filterFormatDate(t.optionDateTime,"HH:mm"):"",selectEveryReminderDay:"",selectFinancialYear:o>=0?this.financialYearList[o]:"01 Mar - 29 Feb"==i?this.financialYearList[2]:i},this.prepareReminderDay()}}formatTime(t){}selectedCountry(t){if((0,u.A)(this.deviceSettings,"country")&&!(0,l.A)(this.deviceSettings.country)){let n=this.countryList.find(i=>i.id==t);0==t?(this.deviceSettings.country.textSymbolFlag=2,this.deviceSettings.country.currencyCode="",this.deviceSettings.country.textSymbol="",this.settingAddObject.textSymbolFlag=2,this.settingAddObject.currencyCode="",this.settingAddObject.textSymbol="",this.settingAddObject.countryCurrencySymbol="",this.settingAddObject.countryCurrencyName="",this.settingAddObject.countryName=n.countryName):(this.deviceSettings.country.textSymbolFlag=0,this.deviceSettings.country.currencyCode=n.currencyName,this.settingAddObject.countryName=n.countryName,this.deviceSettings.country.textSymbol=n.currencyName,this.deviceSettings.currencySymbol=n.currencyName,this.settingAddObject.textSymbolFlag=1,this.settingAddObject.currencyCode=n.currencyName,this.settingAddObject.textSymbol=n.currencyName,this.settingAddObject.countryCurrencySymbol=n.currencyCode,this.settingAddObject.countryCurrencyName=n.currencyName),this.deviceSettings.country.id=parseInt(t),this.deviceSettings.country.countryName=n.countryName,this.deviceSettings.country.textSymbolFlag=this.settingAddObject.textSymbolFlag,this.settingAddObject.countryId=parseInt(t)}}submit(){if(this.primarySettingForm.form.valid&&(0,u.A)(this.deviceSettings,"customFields")&&"object"==typeof this.deviceSettings)this.isLoading=!0,this.settingService.addUpdateAllSettings(this.deviceSettings,this.webSettings,t=>{this.commonService.processResponse(t,i=>{(0,L.A)(()=>{this.isLoading=!1},500),200==t.status?(this.fetchDBData(),this.syncDbService.syncData()):this.notificationService.error("SOMETHING_WENT_WRONG_IN_SETTING_API",{},!0)})});else{const t=this.primarySettingForm.controls;if(t.textSymbol.invalid&&(t.textSymbol.dirty||t.textSymbol.untouched)&&t.textSymbol?.errors.required)return void this.notificationService.error("PLEASE_ENTER_CURRENCY_SYMBOL_OR_NAME_OR_SELECT_OTHER_OPTION",{},!0)}}setValue(t,n,i){if(!(0,l.A)(t)&&(!(0,l.A)(n)&&!(0,l.A)(i)||"number"==typeof n))switch(i){case"country":if((0,u.A)(this.deviceSettings,"country")&&(0,u.A)(this.deviceSettings.country,t)){if("textSymbolFlag"!==t||0!==n&&1!==n||"country"!==i)"textSymbol"===t&&"country"===i&&(this.deviceSettings.currencySymbol=this.deviceSettings.country.textSymbol);else{let o=this.countryList.find(r=>r.id==this.settingAddObject.countryId);this.deviceSettings.country.textSymbol=0==n?o.currencyCode:o.currencyName,this.deviceSettings.currencySymbol=0==n?o.currencyCode:o.currencyName}this.deviceSettings.country[t]=n}break;case"number":(0,u.A)(this.deviceSettings,t)&&(("quantityRoundOff"===t||"rateRoundOff"===t||"percentRoundOff"===t)&&this.deviceSettings[t]>parseInt(String(n))?(0,D.A)(()=>{let o=this.translocoService.translate("DECIMAL_SETTING_TXT",{key:this.deviceSettings[t],value:parseInt(String(n))})+" <br><br> "+this.translocoService.translate("FOR_EXAMPLE")+" 17.57 --\x3e 18.00 <br><br> "+this.translocoService.translate("ARE_YOU_SURE_YOU_WANT_TO_CONTINUE");this.commonService.showDialog(we.r,{showAlert:!0,message:o},r=>{(0,u.A)(r,"apply_roundOff")&&r.apply_roundOff?(this.deviceSettings[t]=parseInt(String(n)),this.settingAddObject[t]=parseInt(String(n))):this.settingAddObject[t]=this.deviceSettings[t]},{panelClass:"ng-material-dialog"})}):this.deviceSettings[t]=parseInt(String(n)));break;case"customFields":(0,u.A)(this.deviceSettings,"customFields")&&(0,u.A)(this.deviceSettings.customFields,t)&&(this.deviceSettings.customFields[t]=n);break;case"default":(0,u.A)(this.deviceSettings,t)&&(this.deviceSettings[t]=n)}"customFields"===i&&(0,u.A)(this.deviceSettings,"customFields")&&(0,u.A)(this.deviceSettings.customFields,t)&&(this.deviceSettings.customFields[t]=n)}setReminderTime(t){if(!(0,l.A)(t))switch(this.settingAddObject.defaultReminderTime=t,this.settingAddObject.selectEveryReminderDay){case"Sunday":this.addDateEvent("reminderDay",0);break;case"Monday":this.addDateEvent("reminderDay",1);break;case"Tuesday":this.addDateEvent("reminderDay",2);break;case"Wednesday":this.addDateEvent("reminderDay",3);break;case"Thursday":this.addDateEvent("reminderDay",4);break;case"Friday":this.addDateEvent("reminderDay",5);break;case"Saturday":this.addDateEvent("reminderDay",6);break;default:this.settingAddObject.selectEveryReminderDay=""}}addDateEvent(t,n){switch(t){case"bookeepingDate":if(E(n.value).valueOf()>this.deviceSettings.fyYearToDate)return void this.notificationService.error("Bookkeeping Date must end earlier than financial year. Please choose correct date.");this.commonService.openConfirm({title:this.translocoService.translate("BOOK_OPENING_DATE"),text:this.translocoService.translate("CHANGING_BOOK_OPENING_DATE"),showCancelButton:!0},M=>{if(M.isConfirmed){this.deviceSettings.bookKeepingStartDate=Number(E.utc(new Date(n.value)).add(330,"minutes").format("x"));var q=E.utc(this.deviceSettings.bookKeepingStartDate).add(330,"minutes");q.startOf("day");var te=q.valueOf();this.deviceSettings.bookKeepingStartDate=te,h.xL.setLocalCache("toRefreshDashboard",!0)}});break;case"reminderDay":switch(this.settingAddObject.selectEveryReminderDay=this.daysList[n],n){case 0:var i=E().day(0).format("YYYY-MM-DD")+" "+this.settingAddObject.defaultReminderTime;this.deviceSettings.optionDateTime=Number(E(i).format("x"));break;case 1:var o=E().day(1).format("YYYY-MM-DD")+" "+this.settingAddObject.defaultReminderTime;this.deviceSettings.optionDateTime=Number(E(o).format("x"));break;case 2:var r=E().day(2).format("YYYY-MM-DD")+" "+this.settingAddObject.defaultReminderTime;this.deviceSettings.optionDateTime=Number(E(r).format("x"));break;case 3:var s=E().day(3).format("YYYY-MM-DD")+" "+this.settingAddObject.defaultReminderTime;this.deviceSettings.optionDateTime=Number(E(s).format("x"));break;case 4:var p=E().day(4).format("YYYY-MM-DD")+" "+this.settingAddObject.defaultReminderTime;this.deviceSettings.optionDateTime=Number(E(p).format("x"));break;case 5:var m=E().day(5).format("YYYY-MM-DD")+" "+this.settingAddObject.defaultReminderTime;this.deviceSettings.optionDateTime=Number(E(m).format("x"));break;case 6:var _=E().day(6).format("YYYY-MM-DD")+" "+this.settingAddObject.defaultReminderTime;this.deviceSettings.optionDateTime=Number(E(_).format("x"))}break;case"financialYear":this.settingAddObject.selectFinancialYear=this.financialYearList.find(M=>M==n);let b=this.financialYearList.findIndex(M=>M==n);this.deviceSettings.bookKeepingStartDate=E(this.deviceSettings.bookKeepingStartDate).month(b).valueOf();let I=E().utc().startOf("year"),j=E().utc().endOf("year").startOf("day");this.deviceSettings.fyYearFromDate=Number(I.add(Number(b),"months").format("x")),this.deviceSettings.fyYearToDate=Number(j.add(Number(b),"months").format("x")),this.deviceSettings.bookKeepingStartDate=Number(I.format("x")),this.bookeepingDefaultDate.reset(E(this.deviceSettings.bookKeepingStartDate).format("YYYY-MM-DD"))}}prepareReminderDay(){switch(E(this.deviceSettings.optionDateTime).format("dddd")){case"Sunday":this.settingAddObject.selectEveryReminderDay=this.daysList[0];break;case"Monday":this.settingAddObject.selectEveryReminderDay=this.daysList[1];break;case"Tuesday":this.settingAddObject.selectEveryReminderDay=this.daysList[2];break;case"Wednesday":this.settingAddObject.selectEveryReminderDay=this.daysList[3];break;case"Thursday":this.settingAddObject.selectEveryReminderDay=this.daysList[4];break;case"Friday":this.settingAddObject.selectEveryReminderDay=this.daysList[5];break;case"Saturday":this.settingAddObject.selectEveryReminderDay=this.daysList[6];break;default:this.settingAddObject.selectEveryReminderDay=""}}updateTransactionNoSetting(){this.commonService.showDialog(Rt,{},t=>{(0,u.A)(t,"add_edit_transaction_success")&&t.add_edit_transaction_success&&this.settingService.addEditDBSetting(this.deviceSettings,n=>{var i=n.data;this.commonService.processResponse(n,o=>{(0,L.A)(()=>{this.isLoading=!1},500),200==n.status&&(0,u.A)(i,"deviceSettings")&&!(0,l.A)(i.deviceSettings)?(this.fetchDBData(),this.syncDbService.syncData()):this.notificationService.error("Something went wrong in setting api.")})})})}helpDialog(){this.commonService.showDialog(we.r,{},t=>{},{})}selectCountryOption(){this.commonService.showDialog(Ct.O,{countryId:this.settingAddObject.countryId},t=>{(0,u.A)(t,"country_select_successfully")&&t.country_select_successfully&&(0,u.A)(t,"countryId")&&isNumber(t.countryId)&&this.selectedCountry(t.countryId),this.openDialog()},{panelClass:"ng-material-dialog"})}openDialog(){[3,6,8,9,11,10,10,13,15,16,17,18,19,20,21,23,22,24,25,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,46,47,48,49,51,53,54,55,56,57,58,59,60,62,64,65,66,67,68,70,71,73,74,75,76,77,80,81,83,84,85,87,90,93,94,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,134,137,139,143,145,146,147,148,151,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,203,204,205,206,207,209].includes(this.deviceSettings.country.id)?(this.commonService.showDialog(xe.F,{},n=>{}),this.deviceSettings.bankingDetails.addPayPalMe=!1):this.deviceSettings.bankingDetails.addPayPalMe=!0}scrollToFragment(t){(0,l.A)(t)||document.getElementById(t)&&document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(kt.r),e.rXU(y.h),e.rXU(P.q),e.rXU(x.y),e.rXU(C.nX),e.rXU(F.J),e.rXU(O.P),e.rXU(ge.E),e.rXU(w.V),e.rXU(R.P),e.rXU(v.JO),e.rXU(pe),e.rXU(ne.J))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-primary"]],viewQuery:function(n,i){if(1&n&&e.GBs(At,5),2&n){let o;e.mGM(o=e.lsd())&&(i.primarySettingForm=o.first)}},decls:208,vars:144,consts:[["primarySettingForm","ngForm"],["paymentDatePicker",""],[1,"row-fluid"],[1,"setting-header-main","ac-headertitle"],[1,"col-md-9"],[1,"ac-heading--title"],[1,"col-md-3","text-end"],["novalidate","",1,""],[1,"row","m-0"],[1,"col-lg-12","p-0"],[1,"setting-inner"],[1,"setting-card"],[1,"info"],["id","local",1,"mt-0","setting-title"],[3,"ngClass"],[1,"row"],[1,"col-12"],[1,"form-group","selectdiv"],[1,"form-group","row","pri-main"],[1,"col-md-3","col-form-label","num"],[1,"col-md-4"],[1,"col-form-label"],[1,"select-cnty","d-flex","justify-content-between",3,"click"],[1,"material-icons","custom-icons","pull-right"],["class","row col-md-4 discountradio ma-pad",4,"ngIf"],["class","col-md-4","id","","style"," padding-top: 32px !important;",4,"ngIf"],[1,"col-sm-3","col-form-label"],[1,"col-sm-6"],["name","numberFormat",1,"form-select","num-sel",3,"ngModelChange","change","ngModel"],[3,"value",4,"ngFor","ngForOf"],[1,"col-sm-3","col-form-label",2,"margin-top","9px"],[1,"col","col-md-6","dateradio","justify-content-md-right","align-self-end",2,"margin-top","9px"],["id",""],["id","","type","radio","name","dateFormat",3,"ngModelChange","change","ngModel","value","checked"],[1,"label"],["type","radio","name","dateFormat",3,"ngModelChange","change","ngModel","value","checked"],["id","transprefix",1,"col-sm-3","col-form-label",2,"margin-top","9px"],[1,"col-md-6","Update-transction-btn",2,"margin-top","9px",3,"click"],[1,"material-icons","custom-icons",2,"float","right"],[1,"setting-card","p-b"],["id","decimal",1,"mt-0","setting-title"],[2,"font-size","13px","margin","0","color","#848181"],[1,"col-lg-6"],[1,"m-b-30"],[1,"p-l"],[1,"col-sm-6","col-form-label"],["name","qtyRoundoff",1,"form-select","num-sel",3,"ngModelChange","change","ngModel"],[3,"selected",4,"ngFor","ngForOf"],["name","rateRoundoff",1,"form-select","num-sel",3,"ngModelChange","change","ngModel"],[1,"col-sm-6","col-form-label","p-l","p-r"],["name","percentRoundoff",1,"form-select","num-sel",3,"ngModelChange","change","ngModel"],["name","dashBoardRoundOff",1,"form-select","num-sel",3,"ngModelChange","change","ngModel"],[1,"setting-card","p-b","p-t"],["id","taxdetail",1,"mt-0","setting-title"],[1,"col-lg-9"],[1,"card-body","p-l"],[1,"form-group","row","tax-main","pri-main"],["for","example-text-input",1,"col-sm-4","col-form-label"],[1,"col-md-4","input-group-prepend"],["type","text","name","taxId","id","example-text-input",1,"form-control","mt-2",3,"ngModelChange","keyup","change","ngModel","placeholder"],[1,"col-md-1","input-group-prepend"],["id","editBtn","type","button",1,"p-r","edit-tax-btn",3,"click"],["data-bs-toggle","modal","data-target","#exampleModal",1,"material-icons","custom-icons","md-allicon",2,"margin-top","7px","font-size","30px !important"],["id","duedate",1,"mt-0","setting-title"],[1,"col-md-12"],[1,"form-group","row","pri-main","m-b"],["name","defaultOverdueTimePeriod",1,"form-select","num-sel",3,"ngModelChange","change","ngModel"],[3,"selected","value",4,"ngFor","ngForOf"],[1,"form-group","row","pri-main",3,"ngClass"],[1,"col-auto","pt-3"],[1,"col-form-label","p-r"],[1,"checkbox","checkbox-primary"],[1,"container-checkbox"],["type","checkbox","name","isReminderForOverdue",3,"ngModelChange","change","ngModel","checked"],[1,"checkmark"],[1,"col-auto","pt-4"],["class","dailyradio",4,"ngIf"],["class","col-md-3",4,"ngIf"],["class","col-auto",4,"ngIf"],[1,"setting-card","p-b",3,"ngClass"],["id","bookkeeping",1,"mt-0","setting-title"],[1,"row","pri-main","mb-2"],["for","financial-year",1,"col-sm-3","col-form-label"],["aria-label","Default select example","name","selectFinancialYear",1,"form-select",3,"ngModelChange","change","ngModel"],["class","lw-cursor-pointer",4,"ngFor","ngForOf"],[1,"row","pri-main"],[1,"col-md-3","col-form-label"],["placeholder","mm/dd/yyyy","autocomplete","off","name","paymentDate","readonly","",1,"form-control","mat-form-field-autofill-control","cdk-text-field-autofill-monitored",3,"click","value"],["readonly","","matInput","","name","end","bookeepingDefaultDate","",1,"due_date","lw-shadow-dateInput",3,"click","dateInput","matDatepicker","formControl"],[1,"mt-3"],[1,"text-justify","fs-12"],[1,"footer-settings"],[1,"fa-pull-right","pb-2"],["type","button","loadingText","Saving",1,"setting_save",3,"click"],[1,"material-icons","custom-icons"],[1,"row","col-md-4","discountradio","ma-pad"],["id","rad1","type","radio","name","textSymbolFlag",3,"ngModelChange","change","ngModel","checked","value"],["type","radio","name","textSymbolFlag",3,"ngModelChange","change","ngModel","checked","value"],["id","",1,"col-md-4",2,"padding-top","32px !important"],[1,""],["type","text","name","textSymbol","id","example-text-input","required","",1,"form-control",3,"ngModelChange","keyup","change","ngModel","placeholder","maxlength"],[3,"value"],[3,"selected"],[3,"selected","value"],[1,"dailyradio"],["type","radio","name","optionDailyWeekly",3,"ngModelChange","change","ngModel","checked","value"],[1,"col-md-3"],["for","appt",1,"date-label"],["type","time","id","appt","name","appt","min","09:00","max","18:00","name","defaultReminderTime",1,"time","w-100",3,"ngModelChange","change","ngModel"],[1,"col-auto"],["for","start",1,"date-label"],["name","optionDay","name","selectEveryReminderDay",1,"date","form-select",3,"ngModelChange","ngModel"],["class","cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"cursor-pointer",3,"click"],[1,"lw-cursor-pointer"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"div",2)(1,"div",3)(2,"div",4)(3,"h4",5),e.EFF(4),e.nI1(5,"transloco"),e.k0s(),e.j41(6,"p"),e.EFF(7),e.nI1(8,"transloco"),e.k0s()(),e.nrm(9,"div",6),e.k0s(),e.j41(10,"form",7,0)(12,"div",8)(13,"div",9)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h4",13)(18,"span",14),e.EFF(19),e.nI1(20,"transloco"),e.k0s()(),e.j41(21,"div",15)(22,"div",16)(23,"div",17)(24,"div",18)(25,"label",19),e.EFF(26),e.nI1(27,"transloco"),e.k0s(),e.j41(28,"div",20)(29,"label",21),e.EFF(30),e.nI1(31,"transloco"),e.k0s(),e.j41(32,"div",22),e.bIt("click",function(){return e.eBV(o),e.Njj(i.selectCountryOption())}),e.EFF(33),e.j41(34,"span",23),e.EFF(35,"expand_more"),e.k0s()()(),e.DNE(36,jt,10,8,"div",24)(37,Nt,5,5,"div",25),e.k0s()()()(),e.j41(38,"div",18)(39,"label",26),e.EFF(40),e.nI1(41,"transloco"),e.k0s(),e.j41(42,"div",27)(43,"select",28),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.currencyFormat,s)||(i.settingAddObject.currencyFormat=s),e.Njj(s)}),e.bIt("change",function(s){return e.eBV(o),e.Njj(i.setValue("currencyFormat",s.target.value,"number"))}),e.DNE(44,Lt,2,2,"option",29),e.k0s()()(),e.j41(45,"div",18)(46,"label",30),e.EFF(47),e.nI1(48,"transloco"),e.k0s(),e.j41(49,"div",31)(50,"div",32)(51,"label")(52,"input",33),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.dateFormat,s)||(i.settingAddObject.dateFormat=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.setValue("dateFormat",0,"number"))}),e.k0s(),e.j41(53,"span",34),e.EFF(54,"DD-MM-YYYY"),e.k0s()(),e.j41(55,"label")(56,"input",35),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.dateFormat,s)||(i.settingAddObject.dateFormat=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.setValue("dateFormat",1,"number"))}),e.k0s(),e.j41(57,"span",34),e.EFF(58,"MM-DD-YYYY"),e.k0s()()()(),e.j41(59,"div",18)(60,"label",36)(61,"span",14),e.EFF(62),e.nI1(63,"transloco"),e.k0s()(),e.j41(64,"div",37),e.bIt("click",function(){return e.eBV(o),e.Njj(i.updateTransactionNoSetting())}),e.EFF(65),e.nI1(66,"transloco"),e.j41(67,"span",38),e.EFF(68,"arrow_forward"),e.k0s()()()()()(),e.j41(69,"div",39)(70,"div",12)(71,"h4",40)(72,"span",14),e.EFF(73),e.nI1(74,"transloco"),e.k0s(),e.j41(75,"p",41),e.EFF(76),e.nI1(77,"transloco"),e.k0s()(),e.j41(78,"div",15)(79,"div",42)(80,"div",43)(81,"div",44)(82,"div",18)(83,"label",45),e.EFF(84),e.nI1(85,"transloco"),e.k0s(),e.j41(86,"div",27)(87,"select",46),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.quantityRoundOff,s)||(i.settingAddObject.quantityRoundOff=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.setValue("quantityRoundOff",i.settingAddObject.quantityRoundOff,"number"))}),e.DNE(88,Pt,2,2,"option",47),e.k0s()()(),e.j41(89,"div",18)(90,"label",45),e.EFF(91),e.nI1(92,"transloco"),e.j41(93,"p"),e.EFF(94),e.nI1(95,"transloco"),e.k0s()(),e.j41(96,"div",27)(97,"select",48),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.rateRoundOff,s)||(i.settingAddObject.rateRoundOff=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.setValue("rateRoundOff",i.settingAddObject.rateRoundOff,"number"))}),e.DNE(98,wt,2,2,"option",47),e.k0s()()()()()(),e.j41(99,"div",42)(100,"div",43)(101,"div",44)(102,"div",18)(103,"label",49),e.EFF(104),e.nI1(105,"transloco"),e.k0s(),e.j41(106,"div",27)(107,"select",50),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.percentRoundOff,s)||(i.settingAddObject.percentRoundOff=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.setValue("percentRoundOff",i.settingAddObject.percentRoundOff,"number"))}),e.DNE(108,xt,2,2,"option",47),e.k0s()()(),e.j41(109,"div",18)(110,"label",49),e.EFF(111),e.nI1(112,"transloco"),e.j41(113,"p"),e.EFF(114),e.nI1(115,"transloco"),e.k0s()(),e.j41(116,"div",27)(117,"select",51),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.dashBoardRoundOff,s)||(i.settingAddObject.dashBoardRoundOff=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.setValue("dashBoardRoundOff",i.settingAddObject.dashBoardRoundOff,"number"))}),e.DNE(118,Bt,2,2,"option",47),e.k0s()()()()()()()()(),e.j41(119,"div",52)(120,"div",12)(121,"h4",53)(122,"span",14),e.EFF(123),e.nI1(124,"transloco"),e.k0s()(),e.j41(125,"div",15)(126,"div",54)(127,"div",43)(128,"div",55)(129,"div",56)(130,"label",57),e.EFF(131),e.nI1(132,"transloco"),e.nrm(133,"br"),e.j41(134,"p"),e.EFF(135),e.nI1(136,"transloco"),e.k0s()(),e.j41(137,"div",58)(138,"input",59),e.nI1(139,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.taxId,s)||(i.settingAddObject.taxId=s),e.Njj(s)}),e.bIt("keyup",function(){return e.eBV(o),e.Njj(i.setValue("taxId",i.settingAddObject.taxId,"customFields"))})("change",function(){return e.eBV(o),e.Njj(i.setValue("taxId",i.settingAddObject.taxId,"customFields"))}),e.k0s()(),e.j41(140,"div",60)(141,"button",61),e.bIt("click",function(){return e.eBV(o),e.Njj(i.helpDialog())}),e.j41(142,"span",62),e.EFF(143,"help_outline"),e.k0s()()()()()()()()()(),e.j41(144,"div",52)(145,"div",12)(146,"h4",63)(147,"span",14),e.EFF(148),e.nI1(149,"transloco"),e.k0s()(),e.j41(150,"div",15)(151,"div",64)(152,"div",43)(153,"div",55)(154,"div",65)(155,"label",26),e.EFF(156),e.nI1(157,"transloco"),e.k0s(),e.j41(158,"div",27)(159,"select",66),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.defaultOverdueTimePeriod,s)||(i.settingAddObject.defaultOverdueTimePeriod=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.setValue("defaultOverdueTimePeriod",i.settingAddObject.defaultOverdueTimePeriod,"default"))}),e.DNE(160,Ut,3,5,"option",67),e.k0s()(),e.j41(161,"div",68)(162,"div",69)(163,"label",70)(164,"div",71)(165,"label",72),e.EFF(166),e.nI1(167,"transloco"),e.j41(168,"input",73),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.isReminderForOverdue,s)||(i.settingAddObject.isReminderForOverdue=s),e.Njj(s)}),e.bIt("change",function(s){return e.eBV(o),e.Njj(i.setValue("isReminderForOverdue",s.target.checked,"default"))}),e.k0s(),e.nrm(169,"span",74),e.k0s()()()(),e.j41(170,"div",75),e.DNE(171,Gt,11,12,"div",76),e.k0s(),e.DNE(172,$t,5,4,"div",77)(173,Xt,6,5,"div",78),e.k0s()()()()()()()(),e.j41(174,"div",79)(175,"div",12)(176,"h4",80)(177,"span",14),e.EFF(178),e.nI1(179,"transloco"),e.k0s()(),e.j41(180,"div",81)(181,"label",82),e.EFF(182),e.nI1(183,"transloco"),e.k0s(),e.j41(184,"div",20)(185,"select",83),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.settingAddObject.selectFinancialYear,s)||(i.settingAddObject.selectFinancialYear=s),e.Njj(s)}),e.bIt("change",function(){return e.eBV(o),e.Njj(i.addDateEvent("financialYear",i.settingAddObject.selectFinancialYear))}),e.DNE(186,Yt,2,1,"option",84),e.k0s()()(),e.j41(187,"div",85)(188,"label",86),e.EFF(189),e.nI1(190,"transloco"),e.k0s(),e.j41(191,"div",20)(192,"input",87),e.nI1(193,"dateFormat"),e.bIt("click",function(){e.eBV(o);const s=e.sdS(196);return e.Njj(s.open())}),e.k0s(),e.j41(194,"input",88),e.bIt("click",function(){e.eBV(o);const s=e.sdS(196);return e.Njj(s.open())})("dateInput",function(s){return e.eBV(o),e.Njj(i.addDateEvent("bookeepingDate",s))}),e.k0s(),e.nrm(195,"mat-datepicker",null,1),e.k0s()(),e.j41(197,"div",89)(198,"p",90),e.EFF(199),e.nI1(200,"transloco"),e.k0s()()()()()()(),e.j41(201,"div",91)(202,"div",92)(203,"button",93),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(204,"span",94),e.EFF(205,"save"),e.k0s(),e.EFF(206),e.nI1(207,"transloco"),e.k0s()()()()()}if(2&n){const o=e.sdS(196);e.R7$(4),e.SpI(" ",e.bMT(5,69,"PRIMARY_SETTINGS")," "),e.R7$(3),e.SpI(" ",e.bMT(8,71,"PRIMARY_TAGTILE")," "),e.R7$(11),e.Y8G("ngClass",e.eq3(130,Q,"local"==i.backgroundId)),e.R7$(),e.SpI(" ",e.bMT(20,73,"LOCALIZATION")," "),e.R7$(7),e.JRh(e.bMT(27,75,"CURRENCY_SYMBOL")),e.R7$(4),e.JRh(e.bMT(31,77,"SELECT_COUNTRY")),e.R7$(3),e.SpI(" ",i.settingAddObject.countryName," "),e.R7$(3),e.Y8G("ngIf",1==i.settingAddObject.textSymbolFlag||0==i.settingAddObject.textSymbolFlag&&0!=i.settingAddObject.countryId),e.R7$(),e.Y8G("ngIf",2===i.settingAddObject.textSymbolFlag&&0==i.settingAddObject.countryId),e.R7$(3),e.JRh(e.bMT(41,79,"SELECT_NUMBER_FORMAT")),e.R7$(3),e.R50("ngModel",i.settingAddObject.currencyFormat),e.R7$(),e.Y8G("ngForOf",i.currencyFormatOption),e.R7$(3),e.JRh(e.bMT(48,81,"SELECT_DATE_FORMAT")),e.R7$(5),e.R50("ngModel",i.settingAddObject.dateFormat),e.Y8G("value",0)("checked",0==i.settingAddObject.dateFormat),e.R7$(4),e.R50("ngModel",i.settingAddObject.dateFormat),e.Y8G("value",1)("checked",1==i.settingAddObject.dateFormat),e.R7$(5),e.Y8G("ngClass",e.eq3(132,Q,"transprefix"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(63,83,"TRANSACTION_NO_SETTING")),e.R7$(3),e.SpI(" ",e.bMT(66,85,"UPDATE_TRANSACTION_NO_SETTING")," "),e.R7$(7),e.Y8G("ngClass",e.eq3(134,Q,"decimal"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(74,87,"DECIMAL_MANAGEMENT")),e.R7$(3),e.SpI(" ",e.bMT(77,89,"DECIMAL_TXT"),""),e.R7$(8),e.JRh(e.bMT(85,91,"FOR_QUANTITY")),e.R7$(3),e.R50("ngModel",i.settingAddObject.quantityRoundOff),e.R7$(),e.Y8G("ngForOf",i.qtyRateRoundOfoption),e.R7$(3),e.SpI("",e.bMT(92,93,"FOR_RATE")," "),e.R7$(3),e.SpI("(",e.bMT(95,95,"PER_UNIT_QUANTITY"),")"),e.R7$(3),e.R50("ngModel",i.settingAddObject.rateRoundOff),e.R7$(),e.Y8G("ngForOf",i.qtyRateRoundOfoption),e.R7$(6),e.JRh(e.bMT(105,97,"FOR_PERCENTAGE_OF_TAX_AND_DISCOUNT")),e.R7$(3),e.R50("ngModel",i.settingAddObject.percentRoundOff),e.R7$(),e.Y8G("ngForOf",i.taxDiscountPercentOption),e.R7$(3),e.SpI("",e.bMT(112,99,"FOR_AMT_SHOWN_ON_DASHBOARD")," "),e.R7$(3),e.SpI(" (",e.bMT(115,101,"ONLY_FOR_DISPLAY"),")"),e.R7$(3),e.R50("ngModel",i.settingAddObject.dashBoardRoundOff),e.R7$(),e.Y8G("ngForOf",i.amountOnDashoardOption),e.R7$(4),e.Y8G("ngClass",e.eq3(136,Q,"taxdetail"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(124,103,"TAX_DETAILS")),e.R7$(8),e.SpI("",e.bMT(132,105,"NAME_OF_TAX_ID")," "),e.R7$(4),e.JRh(e.bMT(136,107,"DUNS_EIN_TIN")),e.R7$(3),e.FS9("placeholder",e.bMT(139,109,"TAX_ID")),e.R50("ngModel",i.settingAddObject.taxId),e.R7$(9),e.Y8G("ngClass",e.eq3(138,Q,"duedate"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(149,111,"DUE_DATE_LABEL")),e.R7$(8),e.JRh(e.bMT(157,113,"DEFAULT_OVERDUE_PERIOD")),e.R7$(3),e.R50("ngModel",i.settingAddObject.defaultOverdueTimePeriod),e.R7$(),e.Y8G("ngForOf",i.defaultOverDueTime),e.R7$(),e.Y8G("ngClass",e.lJ4(140,Mt)),e.R7$(5),e.SpI(" ",e.bMT(167,115,"REMINDER_FOR_OVERDUE")," "),e.R7$(2),e.R50("ngModel",i.settingAddObject.isReminderForOverdue),e.Y8G("checked",i.settingAddObject.isReminderForOverdue),e.R7$(3),e.Y8G("ngIf",i.settingAddObject.isReminderForOverdue),e.R7$(),e.Y8G("ngIf",i.settingAddObject.isReminderForOverdue),e.R7$(),e.Y8G("ngIf",i.settingAddObject.isReminderForOverdue&&1==i.settingAddObject.optionDailyWeekly),e.R7$(),e.Y8G("ngClass",e.lJ4(141,Ot)),e.R7$(3),e.Y8G("ngClass",e.eq3(142,Q,"bookkeeping"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(179,117,"BOOKKEEPING_DETAILS")),e.R7$(4),e.JRh(e.bMT(183,119,"SELECT_FINANIAL_YEAR")),e.R7$(3),e.R50("ngModel",i.settingAddObject.selectFinancialYear),e.R7$(),e.Y8G("ngForOf",i.financialYearList),e.R7$(3),e.JRh(e.bMT(190,121,"BOOK_OPENING_DATE")),e.R7$(3),e.FS9("value",e.i5U(193,123,null==i.deviceSettings?null:i.deviceSettings.bookKeepingStartDate,i.deviceSettings)),e.R7$(2),e.Y8G("matDatepicker",o)("formControl",i.bookeepingDefaultDate),e.R7$(5),e.JRh(e.bMT(200,126,"BOOKKEEPING_DETAILS_MSG")),e.R7$(7),e.SpI(" ",e.bMT(207,128,"SAVE")," ")}},dependencies:[S.YU,S.Sq,S.bT,d.qT,d.xH,d.y7,d.me,d.Zm,d.wz,d.Fm,d.BC,d.cb,d.YS,d.tU,d.vS,d.cV,d.l_,Ce.Vh,Ce.bZ,Be.a,v.Kj],styles:[".color-lb[_ngcontent-%COMP%]{color:#1889e5}.payLoader[_ngcontent-%COMP%]{position:relative;top:50%}.paymentLoader[_ngcontent-%COMP%]{width:110px;height:110px;border-radius:50%;border:14px solid #f3f3f3;border-top:14px solid #1889e5;border-bottom:14px solid #1889e5;animation:_ngcontent-%COMP%_spin 1s linear infinite}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.blink1[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker1 1s step-start infinite}@keyframes _ngcontent-%COMP%_blinker1{10%{opacity:0}}.blink2[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker2 1s step-start infinite}@keyframes _ngcontent-%COMP%_blinker2{20%{opacity:0}}.blink3[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_blinker3 1s step-start infinite}@keyframes _ngcontent-%COMP%_blinker3{30%{opacity:0}}"]})}return a})();var Z=g(34948),me=g(86541);const Kt=["termsConditionForm"];let Jt=(()=>{class a{constructor(t,n,i,o,r,s,p,m){this.taxData=t,this.dialogRef=n,this.authService=i,this.commonService=o,this.dataStoreService=r,this.notificationService=s,this.termConditionService=p,this.syncDbService=m,this.isLoading=!1,this.actionType=this.taxData.actiontype,this.editTermData=this.taxData.editData,this.termsAndConditionList=this.taxData.termsAndConditionList,this.addTermsConditionObject={termsCondition:"add-term"===this.actionType?"":this.editTermData.termsAndCondition,isDefault:"add-term"===this.actionType?"":this.editTermData.defaultTerms}}ngOnInit(){}submit(){if(""!=this.termsConditionForm.form.value.termsCondition.trim())if(this.addTermsConditionObject.termsCondition=this.addTermsConditionObject.termsCondition.trim(),this.termsConditionForm.form.valid&&!(0,l.A)(this.addTermsConditionObject)){let t={};t="add-term"===this.actionType?this.termConditionService.changeKeysForTermsApi(this.addTermsConditionObject,1):this.termConditionService.changeKeysForTermsApi(this.addTermsConditionObject,2,this.editTermData),this.isLoading=!0,this.syncDbService.storeMultipleDataToDB(t,n=>{var i=n;this.commonService.processResponse(n,o=>{200==n.status&&(0,u.A)(i,"termsAndConditionList")&&!(0,l.A)(i.termsAndConditionList)?(this.isLoading=!1,this.syncDbService.syncData(),this.dialogRef.close({term_condition_added:!0})):this.isLoading=!1})})}else{const t=this.termsConditionForm.controls;if(t.termsCondition.invalid&&t.termsCondition.touched&&t.termsCondition?.errors.required)return void this.notificationService.error("ADD_TERMS_AND_CONDITIONS",{},!0)}else this.notificationService.error("TANDC_SHOULD_NOT_BE_EMPTY",{},!0)}closeDialog(t){this.dialogRef.close({term_condition_added:!1})}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.Vh),e.rXU(f.CP),e.rXU(x.y),e.rXU(y.h),e.rXU(w.V),e.rXU(F.J),e.rXU(me.r),e.rXU(O.P))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-payment-tracking"]],viewQuery:function(n,i){if(1&n&&e.GBs(Kt,5),2&n){let o;e.mGM(o=e.lsd())&&(i.termsConditionForm=o.first)}},exportAs:["addTermsConditionObject"],decls:29,vars:18,consts:[["termsConditionForm","ngForm"],["mat-dialog-title","",1,"mat-dialog-title"],["novalidate","",1,""],[1,"mat-typography","mat-dialog-content"],[1,""],[1,"col-12","p-l","p-r"],[1,"form-group"],["elastic","","onfocus","this.select()","required","","name","termsCondition","required","true","spellcheck","false",1,"form-control","custom-scroll","style-3","border","p-4",2,"min-height","80px","padding","10px !important",3,"ngModelChange","placeholder","ngModel"],[1,"checkbox","checkbox-primary","inv-check"],[1,"container-checkbox","m-t-10"],["id","lwSelectDefault","type","checkbox","name","isDefault","checked","addTermsConditionObject.isDefault",3,"ngModelChange","ngModel"],[1,"checkmark"],["align","end",1,"mat-dialog-actions"],["type","button",1,"btn-cancel",3,"click"],[1,"material-icons","custom-icons"],["type","submit","loadingText","Add Terms",1,"btn-done",3,"click","lwLoadingBtn"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"h2",1),e.EFF(1),e.nI1(2,"transloco"),e.k0s(),e.j41(3,"form",2,0)(5,"mat-dialog-content",3)(6,"div",4)(7,"div",5)(8,"div",6)(9,"textarea",7),e.nI1(10,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.addTermsConditionObject.termsCondition,s)||(i.addTermsConditionObject.termsCondition=s),e.Njj(s)}),e.EFF(11,"                    "),e.k0s()()(),e.j41(12,"div",8)(13,"label",9),e.EFF(14),e.nI1(15,"transloco"),e.j41(16,"input",10),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.addTermsConditionObject.isDefault,s)||(i.addTermsConditionObject.isDefault=s),e.Njj(s)}),e.k0s(),e.nrm(17,"span",11),e.k0s()()()(),e.j41(18,"mat-dialog-actions",12)(19,"button",13),e.bIt("click",function(){return e.eBV(o),e.Njj(i.closeDialog())}),e.j41(20,"span",14),e.EFF(21,"cancel"),e.k0s(),e.EFF(22),e.nI1(23,"transloco"),e.k0s(),e.j41(24,"button",15),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(25,"span",14),e.EFF(26,"check_circle"),e.k0s(),e.EFF(27),e.nI1(28,"transloco"),e.k0s()()()}2&n&&(e.R7$(),e.SpI(" ",e.bMT(2,8,"ADD_TERMS_AND_CONDITIONS"),"\n"),e.R7$(8),e.FS9("placeholder",e.bMT(10,10,"ADD_TERMS_AND_CONDITIONS")),e.R50("ngModel",i.addTermsConditionObject.termsCondition),e.R7$(5),e.SpI("",e.bMT(15,12,"DEFAULT")," "),e.R7$(2),e.R50("ngModel",i.addTermsConditionObject.isDefault),e.R7$(6),e.SpI(" ",e.bMT(23,14,"CLOSE")," "),e.R7$(2),e.Y8G("lwLoadingBtn",i.isLoading),e.R7$(3),e.SpI(" ",e.bMT(28,16,"SAVE_CHANGES")," "))},dependencies:[ue.Q,d.qT,d.me,d.Zm,d.BC,d.cb,d.YS,d.vS,d.cV,f.BI,f.E7,f.Yi,v.Kj]})}return a})();function Wt(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",16)(1,"div",17)(2,"p",18),e.EFF(3),e.k0s()(),e.j41(4,"div",19)(5,"div",20),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.deleteTerms(i.uniqueKeyTermsAndCondition))}),e.j41(6,"span",21),e.EFF(7,"delete_outline"),e.k0s()(),e.j41(8,"div",20),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.addEditTerms("edit-term",i))}),e.j41(9,"span",22),e.EFF(10,"edit"),e.k0s()()(),e.j41(11,"span",23)(12,"a",24),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.makeDefaultTerm(i,!1))}),e.EFF(13),e.nI1(14,"transloco"),e.k0s()()()}if(2&a){const t=e.XpG().$implicit;e.R7$(3),e.JRh(t.termsAndCondition),e.R7$(10),e.JRh(e.bMT(14,2,"REMOVE_FROM_DEFAULT"))}}function qt(a,c){if(1&a&&(e.j41(0,"div"),e.DNE(1,Wt,15,4,"div",15),e.k0s()),2&a){const t=c.$implicit;e.R7$(),e.Y8G("ngIf",t.defaultTerms)}}function zt(a,c){if(1&a&&(e.j41(0,"div")(1,"div",12)(2,"h6"),e.EFF(3),e.nI1(4,"transloco"),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"transloco"),e.k0s()(),e.j41(8,"div",13),e.DNE(9,qt,2,1,"div",14),e.k0s()()),2&a){const t=e.XpG();e.R7$(3),e.JRh(e.bMT(4,3,"DEFAULT")),e.R7$(3),e.JRh(e.bMT(7,5,"TERMS_CONDITIONS_LABEL_DETAILS")),e.R7$(3),e.Y8G("ngForOf",t.termsAndConditionList)}}function Qt(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",16)(1,"div",17)(2,"p",18),e.EFF(3),e.k0s()(),e.j41(4,"div",19)(5,"div",20),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.deleteTerms(i.uniqueKeyTermsAndCondition))}),e.j41(6,"span",21),e.EFF(7,"delete_outline"),e.k0s()(),e.j41(8,"div",20),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.addEditTerms("edit-term",i))}),e.j41(9,"span",22),e.EFF(10,"edit"),e.k0s()()(),e.j41(11,"span",23)(12,"a",24),e.bIt("click",function(){e.eBV(t);const i=e.XpG().$implicit,o=e.XpG(2);return e.Njj(o.makeDefaultTerm(i,!0))}),e.EFF(13),e.nI1(14,"transloco"),e.k0s()()()}if(2&a){const t=e.XpG().$implicit;e.R7$(3),e.JRh(t.termsAndCondition),e.R7$(10),e.JRh(e.bMT(14,2,"MAKE_DEFAULT"))}}function Zt(a,c){if(1&a&&(e.j41(0,"div"),e.DNE(1,Qt,15,4,"div",15),e.k0s()),2&a){const t=c.$implicit;e.R7$(),e.Y8G("ngIf",!t.defaultTerms)}}function ei(a,c){if(1&a&&(e.j41(0,"div")(1,"div",12)(2,"h6"),e.EFF(3),e.nI1(4,"transloco"),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"transloco"),e.k0s()(),e.j41(8,"div",25)(9,"div",13),e.DNE(10,Zt,2,1,"div",14),e.k0s()()()),2&a){const t=e.XpG();e.R7$(3),e.JRh(e.bMT(4,3,"GENERAL")),e.R7$(3),e.JRh(e.bMT(7,5,"TERM_CONDITION_SUBDETAILS")),e.R7$(4),e.Y8G("ngForOf",t.termsAndConditionList)}}function ti(a,c){1&a&&(e.j41(0,"div",26)(1,"div",27),e.EFF(2),e.nI1(3,"transloco"),e.k0s()()),2&a&&(e.R7$(2),e.SpI(" ",e.bMT(3,1,"ADD_NEW_T_AND_C")," "))}let ii=(()=>{class a{constructor(t,n,i,o,r,s,p,m,_){this.commonService=t,this.dataStoreService=n,this.termConditionService=i,this.notificationService=o,this.syncDbService=r,this.route=s,this.syncApiService=p,this.translocoService=m,this.searchFilterSettings=_,this.pageType=this.route.snapshot.data.pageType,this.termsAndConditionList=[],this.selectedTermsAndCondition=[],this.isLoading=!1,this.commonService.setSEOInfo("Terms and Conditions - Binz Accounting App",[{name:"description",content:"Terms and Conditions"},{name:"keywords",content:"Terms and Conditions, Setting, Terms, Conditions, Default, Invoice, Add"},{name:"title",content:"Terms and Conditions"}])}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-terms-condition-setting"==this.pageType&&this.fetchDBData()})}),this.searchFilterSettings.subscribeData(t=>{t&&"Primary Settings"==t.mainTitle&&setTimeout(()=>{this.scrollToFragment(t.elementId)},100)}),this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchDbData("termsCondition",function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&(t.termsAndConditionList=o)});return function(i){return n.apply(this,arguments)}}())})()}addEditTerms(t,n){this.commonService.showDialog(Jt,{actiontype:t,editData:n,termsAndConditionList:this.termsAndConditionList},i=>{this.fetchDBData()})}makeDefaultTerm(t,n){if(!(0,l.A)(t)&&(0,u.A)(t,"defaultTerms")){let i=(0,Z.A)({},t);i.defaultTerms=n,i.syncFlag=2,this.syncDbService.storeMultipleDataToDB({termsAndConditionList:[i]},o=>{var r=o;this.commonService.processResponse(o,s=>{200==o.status&&(0,u.A)(r,"termsAndConditionList")&&!(0,l.A)(r.termsAndConditionList)?(this.fetchDBData(),this.syncDbService.syncData()):this.notificationService.error("SOMETHING_WENT_WRONG",{},!0)})})}else this.notificationService.error("SOMETHING_WENT_WRONG",{},!0)}deleteTerms(t){const n=this.translocoService.translate("DO_YOU_WANT_TO_DELETE_TERMS_CONDITIONS"),i=this.translocoService.translate("YES_DELETE_IT"),o=this.translocoService.translate("T_C_DELETED_SUCCESSFULLY"),r=this.translocoService.translate("T_C_NOT_DELETED");this.commonService.openConfirm({html:n,confirmButtonText:i},s=>{s.isConfirmed&&this.syncDbService.deleteMultipleDataToDB({termsAndConditionIdList:[t]},p=>{200==p.status?this.commonService.openConfirm({title:"Deleted!",text:o,icon:"success",showCancelButton:!1},_=>{this.fetchDBData(),this.syncDbService.syncData()}):this.commonService.openConfirm({title:"Deleted!",text:r,icon:"error",showCancelButton:!1})})})}checkisDefaultTerm(t){switch(t){case"default":return this.termsAndConditionList.some(n=>n.defaultTerms);case"nonDefault":return this.termsAndConditionList.some(n=>!n.defaultTerms);default:return!1}}scrollToFragment(t){(0,l.A)(t)||document.getElementById(t)&&document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(y.h),e.rXU(w.V),e.rXU(me.r),e.rXU(F.J),e.rXU(O.P),e.rXU(C.nX),e.rXU(R.P),e.rXU(v.JO),e.rXU(pe))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-terms-condition"]],decls:21,vars:12,consts:[[1,"setting-header-main","row","ac-headertitle"],[1,"col-md-9","p-0"],[1,"ac-heading--title"],[1,"col-md-3","ps-0","text-end"],["id","addterms",1,"add-line","change_bg","ssd",3,"click"],[1,"material-icons","custom-icons"],[1,"col-lg-12","setting-themes-temrs"],[1,"setting-inner"],[1,"setting-card"],[1,"info"],[4,"ngIf"],["class","me-3",4,"ngIf"],[1,"default-terms"],[1,"terms-body-setting"],[4,"ngFor","ngForOf"],["class","row divider-terms",4,"ngIf"],[1,"row","divider-terms"],[1,"col-lg-9","p-r"],[1,"pre-wrap"],[1,"col-lg-3","text-end",2,"padding-top","4px"],[1,"btn","mb-0","terms-btn",3,"click"],[1,"material-icons","custom-icons","md-delete"],[1,"material-icons","custom-icons","md-allicon",2,"color","#828b9a"],[1,"defalul-btn"],[1,"cursor-pointer","lw-default-term-link",3,"click"],["id","termstwo"],[1,"me-3"],[1,"alert","alert-info"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"h4",2),e.EFF(3),e.nI1(4,"transloco"),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"transloco"),e.k0s()(),e.j41(8,"div",3)(9,"button",4),e.bIt("click",function(){return i.addEditTerms("add-term")}),e.j41(10,"span",5),e.EFF(11,"add_circle_outline"),e.k0s(),e.EFF(12),e.nI1(13,"transloco"),e.k0s()()(),e.j41(14,"div",6)(15,"div",7)(16,"div",8)(17,"div",9),e.DNE(18,zt,10,7,"div",10)(19,ei,11,7,"div",10)(20,ti,4,3,"div",11),e.k0s()()()()),2&n&&(e.R7$(3),e.JRh(e.bMT(4,6,"TERMS_AND_CONDITIONS")),e.R7$(3),e.JRh(e.bMT(7,8,"MANAGE_T_and_C")),e.R7$(6),e.SpI(" ",e.bMT(13,10,"ADD_TERMS"),""),e.R7$(6),e.Y8G("ngIf",i.termsAndConditionList.length>0&&i.checkisDefaultTerm("default")),e.R7$(),e.Y8G("ngIf",i.termsAndConditionList.length>0&&i.checkisDefaultTerm("nonDefault")),e.R7$(),e.Y8G("ngIf",0==i.termsAndConditionList.length))},dependencies:[S.Sq,S.bT,v.Kj]})}return a})();var ni=g(80236),Ue=g(11869);const ee=a=>({"bg-highlight":a});function oi(a,c){if(1&a&&(e.j41(0,"label",39)(1,"span",18),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"transloco"),e.k0s()()),2&a){const t=e.XpG();e.R7$(),e.Y8G("ngClass",e.eq3(7,ee,"disc"==t.backgroundId)),e.R7$(),e.SpI(" ",e.bMT(3,3,"DIS_LABEL")," "),e.R7$(3),e.JRh(e.bMT(6,5,"TAX_APPLIED_ON_BILL_TEXT"))}}function ai(a,c){if(1&a&&(e.j41(0,"label",39)(1,"span",18),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"transloco"),e.k0s()()),2&a){const t=e.XpG();e.R7$(),e.Y8G("ngClass",e.eq3(7,ee,"disc"==t.backgroundId)),e.R7$(),e.SpI(" ",e.bMT(3,3,"DIS_LABEL")," "),e.R7$(3),e.JRh(e.bMT(6,5,"TAX_APPLIED_ON_ITEM_TXT"))}}function si(a,c){if(1&a&&(e.j41(0,"span",41),e.EFF(1),e.k0s()),2&a){const t=c.$implicit;e.R7$(),e.SpI(" ",t," \xa0 ")}}function ri(a,c){if(1&a&&(e.j41(0,"span"),e.DNE(1,si,2,1,"span",44),e.k0s()),2&a){const t=e.XpG().$implicit;e.R7$(),e.Y8G("ngForOf",t.taxRate)}}function ci(a,c){1&a&&(e.j41(0,"span"),e.EFF(1," - "),e.k0s())}function li(a,c){if(1&a){const t=e.RV6();e.j41(0,"tr",40)(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.k0s(),e.j41(11,"td"),e.DNE(12,ri,2,1,"span",32)(13,ci,2,0,"span",32),e.k0s(),e.j41(14,"td",41)(15,"a",42),e.bIt("click",function(){const i=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.addEditTax("edit-tax",i.editTaxData))}),e.j41(16,"span",43),e.EFF(17,"edit"),e.k0s()()()()}if(2&a){const t=c.$implicit;e.R7$(2),e.JRh(t.taxName),e.R7$(2),e.JRh(t.isChecked),e.R7$(2),e.JRh(t.taxOn),e.R7$(2),e.JRh(t.calCulateAs),e.R7$(2),e.JRh(t.status),e.R7$(2),e.Y8G("ngIf",t.taxRate.length>0),e.R7$(),e.Y8G("ngIf",0==t.taxRate.length)}}function di(a,c){1&a&&(e.j41(0,"tr")(1,"th",45)(2,"span"),e.EFF(3),e.nI1(4,"transloco"),e.k0s()()()),2&a&&(e.R7$(3),e.SpI(" ",e.bMT(4,1,"NO_RECORD_FOUND")," "))}function ui(a,c){if(1&a&&(e.j41(0,"span",41),e.EFF(1),e.k0s()),2&a){const t=c.$implicit;e.R7$(),e.SpI(" ",t," \xa0 ")}}function pi(a,c){if(1&a&&(e.j41(0,"span"),e.DNE(1,ui,2,1,"span",44),e.k0s()),2&a){const t=e.XpG().$implicit;e.R7$(),e.Y8G("ngForOf",t.taxRate)}}function gi(a,c){1&a&&(e.j41(0,"span"),e.EFF(1," - "),e.k0s())}function mi(a,c){if(1&a){const t=e.RV6();e.j41(0,"tr",40)(1,"td"),e.EFF(2),e.k0s(),e.j41(3,"td"),e.EFF(4),e.k0s(),e.j41(5,"td"),e.EFF(6),e.k0s(),e.j41(7,"td"),e.EFF(8),e.k0s(),e.j41(9,"td"),e.EFF(10),e.k0s(),e.j41(11,"td"),e.DNE(12,pi,2,1,"span",32)(13,gi,2,0,"span",32),e.k0s(),e.j41(14,"td",41)(15,"a",42),e.bIt("click",function(){const i=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.addEditTax("edit-tax",i.editTaxData))}),e.j41(16,"span",43),e.EFF(17,"edit"),e.k0s()()()()}if(2&a){const t=c.$implicit;e.R7$(2),e.JRh(t.taxName),e.R7$(2),e.JRh(t.isChecked),e.R7$(2),e.JRh(t.taxOn),e.R7$(2),e.JRh(t.calCulateAs),e.R7$(2),e.JRh(t.status),e.R7$(2),e.Y8G("ngIf",t.taxRate.length>0),e.R7$(),e.Y8G("ngIf",0==t.taxRate.length)}}function hi(a,c){1&a&&(e.j41(0,"tr")(1,"th",45)(2,"span"),e.EFF(3),e.nI1(4,"transloco"),e.k0s()()()),2&a&&(e.R7$(3),e.SpI(" ",e.bMT(4,1,"NO_RECORD_FOUND")," "))}let _i=(()=>{class a{constructor(t,n,i,o,r,s,p,m,_,b){this.dataStoreService=t,this.commonService=n,this.accountService=i,this.settingService=o,this.authService=r,this.notificationService=s,this.syncDbService=p,this.route=m,this.syncApiService=_,this.searchFilterSettings=b,this.pageType=this.route.snapshot.data.pageType,this.accountList=[],this.taxAccountList=[],this.saleTaxAccountList=[],this.purchaseTaxAccountList=[],this.discountAccountList=[],this.enabledFeatureList=[],this.isLoading=!1,this.commonService.setSEOInfo("Discount and Taxes - Binz Accounting App",[{name:"description",content:"Discount and Taxes"},{name:"keywords",content:"Discount and Taxes, Setting, Discount, Tax, Sale, Purchase, Name, New, Calculate"},{name:"title",content:"Discount and Taxes"}])}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-discount-taxes-setting"==this.pageType&&this.fetchDBData()})}),this.searchFilterSettings.subscribeData(t=>{t&&"Discount and Taxes"==t.mainTitle&&(setTimeout(()=>{this.scrollToFragment(t.elementId),this.backgroundId=t.elementId},550),setTimeout(()=>{this.backgroundId=" "},3e3))}),this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchMultipleDbData(["filterSettingData","account"],function(){var n=(0,T.A)(function*(i){var o=yield i.data;if(200===i.status&&!(0,l.A)(o)){if((0,u.A)(o,"filterSettingData")&&!(0,l.A)(o.filterSettingData)){t.settingData=o.filterSettingData,t.discountTypeSetting=t.settingData.discountTypeSetting;const r=t.settingData.featureSetting;t.enabledFeatureList=[],(0,U.A)(h.DH.featureTitleList(),s=>{r.find(m=>m.widgetUniqueKey===s.id&&m.isShow)&&(t.enabledFeatureList.push(s.routes),t.checkRouteEnable(s.routes))})}(0,u.A)(o,"account")&&(t.accountList=o.account,t.discountAccountList=pluckAccount(t.accountList,"AC_DISC",!0),t.taxAccountList=pluckAccount(t.accountList,8)),t.prepareTaxList()}});return function(i){return n.apply(this,arguments)}}())})()}submit(){this.isLoading=!0,(0,u.A)(this.settingData,"discountTypeSetting")&&"object"==typeof this.settingData?this.settingService.addEditDBSetting(this.settingData,t=>{var n=t.data;this.commonService.processResponse(t,i=>{200==t.status&&(0,u.A)(n,"deviceSettings")&&!(0,l.A)(n.deviceSettings)?(this.fetchDBData(),this.isLoading=!1,this.syncDbService.syncData()):(this.isLoading=!1,this.notificationService.error("SOMETHING_WENT_WRONG_IN_SETTING_API",{},!0))})}):this.notificationService.error("SOMETHING_WENT_WRONG",{},!0)}prepareTaxList(){this.saleTaxAccountList=[],this.purchaseTaxAccountList=[],(0,l.A)(this.taxAccountList)||(0,U.A)(this.taxAccountList,t=>{1==t.taxDetailEntity.taxType&&this.saleTaxAccountList.push({taxName:t.nameOfAccount,taxType:t.taxDetailEntity.taxType,isChecked:t.taxDetailEntity.initiallyChecked?"Checked":"Unchecked",taxOn:1==t.taxDetailEntity.taxApplicableOn?"On Item":"On Bill",taxRate:this.getTaxRateList(t.taxDetailEntity.defaultTaxes),calCulateAs:1==t.taxDetailEntity.taxInclExcl?"Inclusive":"Exclusive",status:0==t.enable?"Enabled":"Disabled",editTaxData:t}),2==t.taxDetailEntity.taxType&&this.purchaseTaxAccountList.push({taxName:t.nameOfAccount,taxType:t.taxDetailEntity.taxType,isChecked:t.taxDetailEntity.initiallyChecked?"Checked":"Unchecked",taxOn:1==t.taxDetailEntity.taxApplicableOn?"On Item":"On Bill",taxRate:this.getTaxRateList(t.taxDetailEntity.defaultTaxes),calCulateAs:1==t.taxDetailEntity.taxInclExcl?"Inclusive":"Exclusive",status:0==t.enable?"Enabled":"Disabled",editTaxData:t})})}getTaxRateList(t){if((0,l.A)(t)||"[]"==t)return[];let n=JSON.parse(t);return(0,l.A)(n)?void 0:n.map(i=>i.taxValue.toFixed(2)+"%")}checkRouteEnable(t){return this.enabledFeatureList.includes(t)}changeDiscountType(t){0==t||1==t&&(0,u.A)(this.settingData,"discountTypeSetting")?this.settingData.discountTypeSetting=t:this.notificationService.error("SOMETHING_WENT_WRONG",{},!0)}addEditTax(t,n,i){this.commonService.showDialog(ni._,{formType:t,taxType:i,accountList:this.accountList,taxAccountList:this.taxAccountList,editData:n},o=>{(0,u.A)(o,"tax_added")&&o.tax_added&&(this.fetchDBData(),this.syncDbService.syncData())},{width:"50%"})}scrollToFragment(t){(0,l.A)(t)||document.getElementById(t)&&document.getElementById(t).scrollIntoView({behavior:"smooth",block:"center",inline:"start"})}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(w.V),e.rXU(y.h),e.rXU(Ue.D),e.rXU(P.q),e.rXU(x.y),e.rXU(F.J),e.rXU(O.P),e.rXU(C.nX),e.rXU(R.P),e.rXU(pe))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-discount-taxes"]],decls:122,vars:93,consts:[[1,"setting-header-main","ac-headertitle"],[1,"col-md-9"],[1,"ac-heading--title"],["_ngcontent-xgh-c239",""],[1,"row"],[1,"col-lg-12","setting-themes-discount"],[1,"setting-inner"],[1,"setting-card"],[1,"info"],["id","disc",1,"form-group","border-bottom","row","m-0","pri-main"],["class","col-md-5 ps-0 col-form-label","style","font-size: 17px;",4,"ngIf"],[1,"text-end","pe-0","col-md-7","discountradio","d-flex","align-items-center","justify-content-end"],["type","radio","name","lwDiscount","value","0",3,"click","checked"],[1,"label"],["type","radio","name","lwDiscount","value","1",3,"click","checked"],[1,"col-sm-12","pt-2","pb-2","mb-4",3,"hidden"],["id","salestax",1,"lw-add-tax-header"],[1,"col-md-5","col-form-label"],[3,"ngClass"],[1,"badge","badge-secondary","ms-2"],[1,"pull-right","mt-2"],["id","taxsettings",1,"cursor-pointer","lw-tax-header-add-link",3,"click"],[1,"material-icons","custom-icons"],["id","table-tax",1,"bg_white",2,"padding","0"],[1,"table-responsive"],[1,"table","table-bordered","table-lg","mb-0"],[1,"table-head"],["width","12%"],["width","18%"],["width","14%"],["width","30%"],["class","clickable","data-bs-toggle","collapse","data-target","#group-of-rows-1","aria-expanded","false","aria-controls","group-of-rows-1",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-sm-12","mt-4",3,"hidden"],["id","purchasetax",1,"lw-add-tax-header"],[1,"table","table-bordered","table-lg"],[1,"footer-settings"],[1,"fa-pull-right","pb-2"],["type","button","loadingText","Saving",1,"setting_save",3,"click"],[1,"col-md-5","ps-0","col-form-label",2,"font-size","17px"],["data-bs-toggle","collapse","data-target","#group-of-rows-1","aria-expanded","false","aria-controls","group-of-rows-1",1,"clickable"],[1,""],[1,"on-default","remove-row","cursor-pointer",3,"click"],[1,"material-icons","custom-icons","md-allicon"],["class","",4,"ngFor","ngForOf"],["colspan","8",1,"text-center"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"h4",2),e.EFF(3),e.nI1(4,"transloco"),e.k0s(),e.j41(5,"p",3),e.EFF(6),e.nI1(7,"transloco"),e.k0s()()(),e.j41(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9),e.DNE(14,oi,7,9,"label",10)(15,ai,7,9,"label",10),e.j41(16,"div",11)(17,"label")(18,"input",12),e.bIt("click",function(){return i.changeDiscountType(0)}),e.k0s(),e.j41(19,"span",13),e.EFF(20),e.nI1(21,"transloco"),e.k0s()(),e.j41(22,"label")(23,"input",14),e.bIt("click",function(){return i.changeDiscountType(1)}),e.k0s(),e.j41(24,"span",13),e.EFF(25),e.nI1(26,"transloco"),e.k0s()()()(),e.j41(27,"div",15)(28,"div",16)(29,"label",17)(30,"span",18),e.EFF(31),e.nI1(32,"transloco"),e.k0s(),e.j41(33,"a",19),e.EFF(34),e.k0s()(),e.j41(35,"div",20)(36,"a",21),e.bIt("click",function(){return i.addEditTax("add-tax",null,1)}),e.j41(37,"span",22),e.EFF(38,"add_circle_outline"),e.k0s(),e.j41(39,"span",18),e.EFF(40),e.nI1(41,"transloco"),e.k0s()()()(),e.j41(42,"div",23)(43,"div",24)(44,"table",25)(45,"thead")(46,"tr",26)(47,"th",27),e.EFF(48),e.nI1(49,"transloco"),e.k0s(),e.j41(50,"th",28),e.EFF(51),e.nI1(52,"transloco"),e.k0s(),e.j41(53,"th",27),e.EFF(54),e.nI1(55,"transloco"),e.k0s(),e.j41(56,"th",29),e.EFF(57),e.nI1(58,"transloco"),e.k0s(),e.j41(59,"th",27),e.EFF(60),e.nI1(61,"transloco"),e.k0s(),e.j41(62,"th",30),e.EFF(63),e.nI1(64,"transloco"),e.k0s(),e.j41(65,"th",27),e.EFF(66),e.nI1(67,"transloco"),e.k0s()()(),e.j41(68,"tbody"),e.DNE(69,li,18,7,"tr",31)(70,di,5,3,"tr",32),e.k0s()()()()(),e.j41(71,"div",33)(72,"div",34)(73,"label",17)(74,"span",18),e.EFF(75),e.nI1(76,"transloco"),e.k0s(),e.j41(77,"a",19),e.EFF(78),e.k0s()(),e.j41(79,"div",20)(80,"a",21),e.bIt("click",function(){return i.addEditTax("add-tax",null,2)}),e.j41(81,"span",22),e.EFF(82,"add_circle_outline"),e.k0s(),e.j41(83,"span",18),e.EFF(84),e.nI1(85,"transloco"),e.k0s()()()(),e.j41(86,"div",23)(87,"div",24)(88,"table",35)(89,"thead")(90,"tr",26)(91,"th",27),e.EFF(92),e.nI1(93,"transloco"),e.k0s(),e.j41(94,"th",28),e.EFF(95),e.nI1(96,"transloco"),e.k0s(),e.j41(97,"th",27),e.EFF(98),e.nI1(99,"transloco"),e.k0s(),e.j41(100,"th",29),e.EFF(101),e.nI1(102,"transloco"),e.k0s(),e.j41(103,"th",27),e.EFF(104),e.nI1(105,"transloco"),e.k0s(),e.j41(106,"th",30),e.EFF(107),e.nI1(108,"transloco"),e.k0s(),e.j41(109,"th",27),e.EFF(110),e.nI1(111,"transloco"),e.k0s()()(),e.j41(112,"tbody"),e.DNE(113,mi,18,7,"tr",31)(114,hi,5,3,"tr",32),e.k0s()()()()()()()()()(),e.j41(115,"div",36)(116,"div",37)(117,"button",38),e.bIt("click",function(){return i.submit()}),e.j41(118,"span",22),e.EFF(119,"save"),e.k0s(),e.EFF(120),e.nI1(121,"transloco"),e.k0s()()()),2&n&&(e.R7$(3),e.JRh(e.bMT(4,39,"DISCOUNT_AND_TAXES")),e.R7$(3),e.JRh(e.bMT(7,41,"CONFIGURE_DISCOUNT_AND_TAX_SETTINGS")),e.R7$(8),e.Y8G("ngIf",0==(null==i.settingData?null:i.settingData.discountTypeSetting)),e.R7$(),e.Y8G("ngIf",1==(null==i.settingData?null:i.settingData.discountTypeSetting)),e.R7$(3),e.Y8G("checked",0==i.discountTypeSetting),e.R7$(2),e.JRh(e.bMT(21,43,"ON_OVERALL_INV")),e.R7$(3),e.Y8G("checked",1==i.discountTypeSetting),e.R7$(2),e.JRh(e.bMT(26,45,"ON_PER_ITEM")),e.R7$(2),e.Y8G("hidden",!i.checkRouteEnable("/accounts/tax-account")),e.R7$(3),e.Y8G("ngClass",e.eq3(85,ee,"salestax"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(32,47,"SALES_TAX")),e.R7$(3),e.JRh(i.saleTaxAccountList.length),e.R7$(5),e.Y8G("ngClass",e.eq3(87,ee,"taxsettings"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(41,49,"ADD_NEW_TAX")),e.R7$(8),e.JRh(e.bMT(49,51,"TAX_NAME")),e.R7$(3),e.JRh(e.bMT(52,53,"IS_CHECKED")),e.R7$(3),e.JRh(e.bMT(55,55,"TAX_ON")),e.R7$(3),e.JRh(e.bMT(58,57,"CALCULATE_AS")),e.R7$(3),e.JRh(e.bMT(61,59,"STATUS")),e.R7$(3),e.JRh(e.bMT(64,61,"TAX_RATE")),e.R7$(3),e.JRh(e.bMT(67,63,"ACTION")),e.R7$(3),e.Y8G("ngForOf",i.saleTaxAccountList),e.R7$(),e.Y8G("ngIf",0==i.saleTaxAccountList.length),e.R7$(),e.Y8G("hidden",!i.checkRouteEnable("/accounts/tax-account")),e.R7$(3),e.Y8G("ngClass",e.eq3(89,ee,"purchasetax"==i.backgroundId)),e.R7$(),e.JRh(e.bMT(76,65,"PURCHASE_TAX")),e.R7$(3),e.JRh(i.purchaseTaxAccountList.length),e.R7$(5),e.Y8G("ngClass",e.eq3(91,ee,"taxsettings"==i.backgroundId)),e.R7$(),e.SpI(" ",e.bMT(85,67,"ADD_NEW_TAX"),""),e.R7$(8),e.JRh(e.bMT(93,69,"TAX_NAME")),e.R7$(3),e.JRh(e.bMT(96,71,"IS_CHECKED")),e.R7$(3),e.JRh(e.bMT(99,73,"TAX_ON")),e.R7$(3),e.JRh(e.bMT(102,75,"CALCULATE_AS")),e.R7$(3),e.JRh(e.bMT(105,77,"STATUS")),e.R7$(3),e.JRh(e.bMT(108,79,"TAX_RATE")),e.R7$(3),e.JRh(e.bMT(111,81,"ACTION")),e.R7$(3),e.Y8G("ngForOf",i.purchaseTaxAccountList),e.R7$(),e.Y8G("ngIf",0==i.purchaseTaxAccountList.length),e.R7$(6),e.SpI(" ",e.bMT(121,83,"SAVE")," "))},dependencies:[S.YU,S.Sq,S.bT,v.Kj]})}return a})();const fi=["customFieldForm"],bi=a=>({"lw-add-item-btn":a});let Si=(()=>{class a{constructor(t,n,i,o,r,s,p,m){this.commonService=t,this.settingService=n,this.authService=i,this.notificationService=o,this.syncDbService=r,this.dataStoreService=s,this.route=p,this.syncApiService=m,this.pageType=this.route.snapshot.data.pageType,this.isLoading=!1,this.customFieldAddEditObject={amount:"",balance:"",bankingDetails:"",billTo:"",discount:"",dueDate:"",estimate:"",grandTotal:"",invoice:"",invoiceRefNo:"",otherDetails:"",paid:"",payableTo:"",productCode:"",productService:"",purchaseFrom:"",purchaseOrder:"",purchaseRecord:"",purchaseRefNo:"",quantity:"",rate:"",receipt:"",salesOrder:"",shipTo:"",signature:"",taxId:"",termsCondition:"",thankYouMessage:""},this.isSyncInProcess=!0,this.commonService.setSEOInfo("Custom Field - Binz Accounting App",[{name:"description",content:"Custom Field"},{name:"keywords",content:"Custom Field, Setting, Invoice, Custom, Create, New, Field, Name, "},{name:"title",content:"Custom Field"}]),this.loadSettingSubscription=this.settingService.loadSettings.subscribe(_=>{"fetchSettings"==_&&this.fetchDBData()})}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&!t.syncProcessComplete&&(this.isSyncInProcess=!0),(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-custom-fields-setting"==this.pageType&&this.fetchDBData()})}),this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.isSyncInProcess=!1,t.syncApiService.fetchDbData("filterSettingData",function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&!(0,l.A)(o)&&(t.settingData=o,(0,u.A)(t.settingData,"customFields")&&!(0,l.A)(t.settingData)&&(0,Z.A)(t.customFieldAddEditObject,t.settingData.customFields))});return function(i){return n.apply(this,arguments)}}())})()}setCustomFields(t,n){!(0,l.A)(t)&&(0,u.A)(this.settingData,"customFields")&&(0,u.A)(this.settingData.customFields,t)&&(this.settingData.customFields[t]=(0,l.A)(n)||/^ *$/.test(n)?"":n)}submit(){this.customFieldForm.form.valid&&(0,u.A)(this.settingData,"customFields")&&"object"==typeof this.settingData?(this.isLoading=!0,this.settingService.addEditDBSetting(this.settingData,t=>{var n=t.data;this.commonService.processResponse(t,i=>{200==t.status&&(0,u.A)(n,"deviceSettings")&&!(0,l.A)(n.deviceSettings)?(this.fetchDBData(),this.isLoading=!1,navigator.onLine&&this.syncDbService.syncData()):(this.isLoading=!1,this.notificationService.error("SOMETHING_WENT_WRONG_IN_SETTING_API",{},!0))})})):this.notificationService.error("SOMETHING_WENT_WRONG",{},!0)}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe(),this.loadSettingSubscription&&this.loadSettingSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(y.h),e.rXU(P.q),e.rXU(x.y),e.rXU(F.J),e.rXU(O.P),e.rXU(w.V),e.rXU(C.nX),e.rXU(R.P))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-custom-fields"]],viewQuery:function(n,i){if(1&n&&e.GBs(fi,5),2&n){let o;e.mGM(o=e.lsd())&&(i.customFieldForm=o.first)}},exportAs:["customFieldAddEditObject"],decls:231,vars:195,consts:[["customFieldForm","ngForm"],[1,"setting-header-main","ac-headertitle"],[1,"col-md-9"],[1,"ac-heading--title"],["novalidate","",1,""],[1,"col-lg-12","payment-themes"],[1,"setting-inner"],[1,"setting-card"],[1,"info"],[1,"row","m-0"],[1,"col-md-3","custome-heads",2,"width","240px !important"],[1,"col-md-4","custome-heads"],[1,"col-12","row","row_mrg_btm"],[1,"form-group","label_div_col_3"],[1,"set_label_span"],[1,"form-group","col-4","ps-0"],["name","invoice","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","productService","onfocus","this.select()","type","text",1,"form-control",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","estimate","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","purchaseRecord","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","salesOrder","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","purchaseOrder","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","invoiceRefNo","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","purchaseRefNo","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","quantity","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","rate","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","amount","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","signature","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","billTo","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","shipTo","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],[1,"col-12","row","row_mrg_btm",3,"hidden"],["name","purchaseFrom","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","discount","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","paid","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","balance","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","payableTo","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","bankingDetails","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","otherDetails","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","productCode","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","grandTotal","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","termsCondition","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],["name","thankYouMessage","onfocus","this.select()","type","text",1,"form-control",2,"height","35px !important",3,"ngModelChange","keyup","change","placeholder","ngModel"],[1,"footer-settings"],[1,"fa-pull-right","pb-2"],["type","button","loadingText","Saving",1,"setting_save",3,"click","disabled","ngClass"],[1,"material-icons","custom-icons"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"h4",3),e.EFF(3),e.nI1(4,"transloco"),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"transloco"),e.k0s()()(),e.j41(8,"form",4,0)(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"div",10)(16,"h6"),e.EFF(17),e.nI1(18,"transloco"),e.k0s()(),e.j41(19,"div",11)(20,"h6"),e.EFF(21),e.nI1(22,"transloco"),e.k0s()()(),e.j41(23,"div",9)(24,"div",12)(25,"div",13)(26,"span",14),e.EFF(27),e.nI1(28,"transloco"),e.k0s()(),e.j41(29,"div",15)(30,"input",16),e.nI1(31,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.invoice,s)||(i.customFieldAddEditObject.invoice=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("invoice",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("invoice",s.target.value))}),e.k0s()()(),e.j41(32,"div",12)(33,"div",13)(34,"span",14),e.EFF(35),e.nI1(36,"transloco"),e.k0s()(),e.j41(37,"div",15)(38,"input",17),e.nI1(39,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.productService,s)||(i.customFieldAddEditObject.productService=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("productService",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("productService",s.target.value))}),e.k0s()()(),e.j41(40,"div",12)(41,"div",13)(42,"span",14),e.EFF(43),e.nI1(44,"transloco"),e.k0s()(),e.j41(45,"div",15)(46,"input",18),e.nI1(47,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.estimate,s)||(i.customFieldAddEditObject.estimate=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("estimate",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("estimate",s.target.value))}),e.k0s()()(),e.j41(48,"div",12)(49,"div",13)(50,"span",14),e.EFF(51),e.nI1(52,"transloco"),e.k0s()(),e.j41(53,"div",15)(54,"input",19),e.nI1(55,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.purchaseRecord,s)||(i.customFieldAddEditObject.purchaseRecord=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseRecord",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseRecord",s.target.value))}),e.k0s()()(),e.j41(56,"div",12)(57,"div",13)(58,"span",14),e.EFF(59),e.nI1(60,"transloco"),e.k0s()(),e.j41(61,"div",15)(62,"input",20),e.nI1(63,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.salesOrder,s)||(i.customFieldAddEditObject.salesOrder=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("salesOrder",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("salesOrder",s.target.value))}),e.k0s()()(),e.j41(64,"div",12)(65,"div",13)(66,"span",14),e.EFF(67),e.nI1(68,"transloco"),e.k0s()(),e.j41(69,"div",15)(70,"input",21),e.nI1(71,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.purchaseOrder,s)||(i.customFieldAddEditObject.purchaseOrder=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseOrder",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseOrder",s.target.value))}),e.k0s()()(),e.j41(72,"div",12)(73,"div",13)(74,"span",14),e.EFF(75),e.nI1(76,"transloco"),e.k0s()(),e.j41(77,"div",15)(78,"input",22),e.nI1(79,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.invoiceRefNo,s)||(i.customFieldAddEditObject.invoiceRefNo=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("invoiceRefNo",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("invoiceRefNo",s.target.value))}),e.k0s()()(),e.j41(80,"div",12)(81,"div",13)(82,"span",14),e.EFF(83),e.nI1(84,"transloco"),e.k0s()(),e.j41(85,"div",15)(86,"input",23),e.nI1(87,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.purchaseRefNo,s)||(i.customFieldAddEditObject.purchaseRefNo=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseRefNo",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseRefNo",s.target.value))}),e.k0s()()(),e.j41(88,"div",12)(89,"div",13)(90,"span",14),e.EFF(91),e.nI1(92,"transloco"),e.k0s()(),e.j41(93,"div",15)(94,"input",24),e.nI1(95,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.quantity,s)||(i.customFieldAddEditObject.quantity=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("quantity",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("quantity",s.target.value))}),e.k0s()()(),e.j41(96,"div",12)(97,"div",13)(98,"span",14),e.EFF(99),e.nI1(100,"transloco"),e.k0s()(),e.j41(101,"div",15)(102,"input",25),e.nI1(103,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.rate,s)||(i.customFieldAddEditObject.rate=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("rate",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("rate",s.target.value))}),e.k0s()()(),e.j41(104,"div",12)(105,"div",13)(106,"span",14),e.EFF(107),e.nI1(108,"transloco"),e.k0s()(),e.j41(109,"div",15)(110,"input",26),e.nI1(111,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.amount,s)||(i.customFieldAddEditObject.amount=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("amount",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("amount",s.target.value))}),e.k0s()()(),e.j41(112,"div",12)(113,"div",13)(114,"span",14),e.EFF(115),e.nI1(116,"transloco"),e.k0s()(),e.j41(117,"div",15)(118,"input",27),e.nI1(119,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.signature,s)||(i.customFieldAddEditObject.signature=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("signature",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("signature",s.target.value))}),e.k0s()()(),e.j41(120,"div",12)(121,"div",13)(122,"span",14),e.EFF(123),e.nI1(124,"transloco"),e.k0s()(),e.j41(125,"div",15)(126,"input",28),e.nI1(127,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.billTo,s)||(i.customFieldAddEditObject.billTo=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("billTo",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("billTo",s.target.value))}),e.k0s()()(),e.j41(128,"div",12)(129,"div",13)(130,"span",14),e.EFF(131),e.nI1(132,"transloco"),e.k0s()(),e.j41(133,"div",15)(134,"input",29),e.nI1(135,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.shipTo,s)||(i.customFieldAddEditObject.shipTo=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("shipTo",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("shipTo",s.target.value))}),e.k0s()()(),e.j41(136,"div",30)(137,"div",13)(138,"span",14),e.EFF(139),e.nI1(140,"transloco"),e.k0s()(),e.j41(141,"div",15)(142,"input",31),e.nI1(143,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.purchaseFrom,s)||(i.customFieldAddEditObject.purchaseFrom=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseFrom",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("purchaseFrom",s.target.value))}),e.k0s()()(),e.j41(144,"div",12)(145,"div",13)(146,"span",14),e.EFF(147),e.nI1(148,"transloco"),e.k0s()(),e.j41(149,"div",15)(150,"input",32),e.nI1(151,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.discount,s)||(i.customFieldAddEditObject.discount=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("discount",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("discount",s.target.value))}),e.k0s()()(),e.j41(152,"div",12)(153,"div",13)(154,"span",14),e.EFF(155),e.nI1(156,"transloco"),e.k0s()(),e.j41(157,"div",15)(158,"input",33),e.nI1(159,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.paid,s)||(i.customFieldAddEditObject.paid=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("paid",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("paid",s.target.value))}),e.k0s()()(),e.j41(160,"div",12)(161,"div",13)(162,"span",14),e.EFF(163),e.nI1(164,"transloco"),e.k0s()(),e.j41(165,"div",15)(166,"input",34),e.nI1(167,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.balance,s)||(i.customFieldAddEditObject.balance=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("balance",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("balance",s.target.value))}),e.k0s()()(),e.j41(168,"div",12)(169,"div",13)(170,"span",14),e.EFF(171),e.nI1(172,"transloco"),e.k0s()(),e.j41(173,"div",15)(174,"input",35),e.nI1(175,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.payableTo,s)||(i.customFieldAddEditObject.payableTo=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("payableTo",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("payableTo",s.target.value))}),e.k0s()()(),e.j41(176,"div",12)(177,"div",13)(178,"span",14),e.EFF(179),e.nI1(180,"transloco"),e.k0s()(),e.j41(181,"div",15)(182,"input",36),e.nI1(183,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.bankingDetails,s)||(i.customFieldAddEditObject.bankingDetails=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("bankingDetails",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("bankingDetails",s.target.value))}),e.k0s()()(),e.j41(184,"div",12)(185,"div",13)(186,"span",14),e.EFF(187),e.nI1(188,"transloco"),e.k0s()(),e.j41(189,"div",15)(190,"input",37),e.nI1(191,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.otherDetails,s)||(i.customFieldAddEditObject.otherDetails=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("otherDetails",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("otherDetails",s.target.value))}),e.k0s()()(),e.j41(192,"div",12)(193,"div",13)(194,"span",14),e.EFF(195),e.nI1(196,"transloco"),e.k0s()(),e.j41(197,"div",15)(198,"input",38),e.nI1(199,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.productCode,s)||(i.customFieldAddEditObject.productCode=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("productCode",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("productCode",s.target.value))}),e.k0s()()(),e.j41(200,"div",12)(201,"div",13)(202,"span",14),e.EFF(203),e.nI1(204,"transloco"),e.k0s()(),e.j41(205,"div",15)(206,"input",39),e.nI1(207,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.grandTotal,s)||(i.customFieldAddEditObject.grandTotal=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("grandTotal",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("grandTotal",s.target.value))}),e.k0s()()(),e.j41(208,"div",12)(209,"div",13)(210,"span",14),e.EFF(211),e.nI1(212,"transloco"),e.k0s()(),e.j41(213,"div",15)(214,"input",40),e.nI1(215,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.termsCondition,s)||(i.customFieldAddEditObject.termsCondition=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("termsCondition",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("termsCondition",s.target.value))}),e.k0s()()(),e.j41(216,"div",12)(217,"div",13)(218,"span",14),e.EFF(219),e.nI1(220,"transloco"),e.k0s()(),e.j41(221,"div",15)(222,"input",41),e.nI1(223,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.customFieldAddEditObject.thankYouMessage,s)||(i.customFieldAddEditObject.thankYouMessage=s),e.Njj(s)}),e.bIt("keyup",function(s){return e.eBV(o),e.Njj(i.setCustomFields("thankYouMessage",s.target.value))})("change",function(s){return e.eBV(o),e.Njj(i.setCustomFields("thankYouMessage",s.target.value))}),e.k0s()()()()()()()()(),e.j41(224,"div",42)(225,"div",43)(226,"button",44),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(227,"span",45),e.EFF(228,"save"),e.k0s(),e.EFF(229),e.nI1(230,"transloco"),e.k0s()()()}2&n&&(e.R7$(3),e.JRh(e.bMT(4,83,"CUSTOM_FIELD_NAME")),e.R7$(3),e.JRh(e.bMT(7,85,"CUSTOM_FIELD_NAME_AS_PDF")),e.R7$(11),e.JRh(e.bMT(18,87,"DEFUALT_FIELD")),e.R7$(4),e.JRh(e.bMT(22,89,"CUSTOM_FIELD")),e.R7$(6),e.JRh(e.bMT(28,91,"INV_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(31,93,"INV_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.invoice),e.R7$(5),e.JRh(e.bMT(36,95,"PRODUCT_SERVICES")),e.R7$(3),e.FS9("placeholder",e.bMT(39,97,"PRODUCT_SERVICES")),e.R50("ngModel",i.customFieldAddEditObject.productService),e.R7$(5),e.JRh(e.bMT(44,99,"ESTIMATE_QUOTATIONS")),e.R7$(3),e.FS9("placeholder",e.bMT(47,101,"ESTIMATE_QUOTATIONS")),e.R50("ngModel",i.customFieldAddEditObject.estimate),e.R7$(5),e.JRh(e.bMT(52,103,"PURCHASE_RECORD")),e.R7$(3),e.FS9("placeholder",e.bMT(55,105,"PURCHASE_RECORD")),e.R50("ngModel",i.customFieldAddEditObject.purchaseRecord),e.R7$(5),e.JRh(e.bMT(60,107,"SALE_ORDER_TITLE")),e.R7$(3),e.FS9("placeholder",e.bMT(63,109,"SALE_ORDER_TITLE")),e.R50("ngModel",i.customFieldAddEditObject.salesOrder),e.R7$(5),e.JRh(e.bMT(68,111,"PURCHASE_ORDER")),e.R7$(3),e.FS9("placeholder",e.bMT(71,113,"PURCHASE_ORDER")),e.R50("ngModel",i.customFieldAddEditObject.purchaseOrder),e.R7$(5),e.JRh(e.bMT(76,115,"INVOICE_REF_NUM")),e.R7$(3),e.FS9("placeholder",e.bMT(79,117,"INVOICE_REF_NUM")),e.R50("ngModel",i.customFieldAddEditObject.invoiceRefNo),e.R7$(5),e.JRh(e.bMT(84,119,"PURCHASE_REF_NUM")),e.R7$(3),e.FS9("placeholder",e.bMT(87,121,"PURCHASE_REF_NUM")),e.R50("ngModel",i.customFieldAddEditObject.purchaseRefNo),e.R7$(5),e.JRh(e.bMT(92,123,"QUANTITY")),e.R7$(3),e.FS9("placeholder",e.bMT(95,125,"QUANTITY")),e.R50("ngModel",i.customFieldAddEditObject.quantity),e.R7$(5),e.JRh(e.bMT(100,127,"RATE_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(103,129,"RATE_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.rate),e.R7$(5),e.JRh(e.bMT(108,131,"AMT_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(111,133,"AMT_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.amount),e.R7$(5),e.JRh(e.bMT(116,135,"SIGN_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(119,137,"SIGN_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.signature),e.R7$(5),e.JRh(e.bMT(124,139,"BILL_TO_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(127,141,"BILL_TO_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.billTo),e.R7$(5),e.JRh(e.bMT(132,143,"SHIP_TO_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(135,145,"SHIP_TO_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.shipTo),e.R7$(2),e.Y8G("hidden",!0),e.R7$(3),e.JRh(e.bMT(140,147,"PURCHASE_FROM")),e.R7$(3),e.FS9("placeholder",e.bMT(143,149,"PURCHASE_FROM")),e.R50("ngModel",i.customFieldAddEditObject.purchaseFrom),e.R7$(5),e.JRh(e.bMT(148,151,"DIS_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(151,153,"DIS_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.discount),e.R7$(5),e.JRh(e.bMT(156,155,"PAID_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(159,157,"PAID_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.paid),e.R7$(5),e.JRh(e.bMT(164,159,"BAL_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(167,161,"BAL_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.balance),e.R7$(5),e.JRh(e.bMT(172,163,"PAY_TO_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(175,165,"PAY_TO_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.payableTo),e.R7$(5),e.JRh(e.bMT(180,167,"BANK_DETAIL_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(183,169,"BANK_DETAIL_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.bankingDetails),e.R7$(5),e.JRh(e.bMT(188,171,"OTHER_DETAILS")),e.R7$(3),e.FS9("placeholder",e.bMT(191,173,"OTHER_DETAILS")),e.R50("ngModel",i.customFieldAddEditObject.otherDetails),e.R7$(5),e.JRh(e.bMT(196,175,"PRO_CODE_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(199,177,"HSN_CODE")),e.R50("ngModel",i.customFieldAddEditObject.productCode),e.R7$(5),e.SpI("",e.bMT(204,179,"TOTAL_LABEL")," "),e.R7$(3),e.FS9("placeholder",e.bMT(207,181,"TOTAL_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.grandTotal),e.R7$(5),e.JRh(e.bMT(212,183,"TERM_LABEL")),e.R7$(3),e.FS9("placeholder",e.bMT(215,185,"TERM_LABEL")),e.R50("ngModel",i.customFieldAddEditObject.termsCondition),e.R7$(5),e.JRh(e.bMT(220,187,"THANK_YOU_FOR_YOUR_BUSINESS")),e.R7$(3),e.FS9("placeholder",e.bMT(223,189,"THANK_YOU_FOR_YOUR_BUSINESS")),e.R50("ngModel",i.customFieldAddEditObject.thankYouMessage),e.R7$(4),e.Y8G("disabled",i.isSyncInProcess)("ngClass",e.eq3(193,bi,i.isSyncInProcess)),e.R7$(3),e.SpI(" ",e.bMT(230,191,"SAVE")," "))},dependencies:[S.YU,d.qT,d.me,d.BC,d.cb,d.vS,d.cV,v.Kj],styles:["[_ngcontent-%COMP%]::placeholder{color:#777!important;font-size:13px!important}"]})}return a})(),Ti=(()=>{class a{constructor(t,n,i,o,r,s,p,m){this.dataStoreService=t,this.commonService=n,this.settingService=i,this.authService=o,this.notificationService=r,this.syncDbService=s,this.route=p,this.syncApiService=m,this.pageType=this.route.snapshot.data.pageType,this.isLoading=!1,this.paymentTracking=0,this.commonService.setSEOInfo("Payment Tracking - Binz Accounting App",[{name:"description",content:"Payment Tracking"},{name:"keywords",content:"Payment Tracking, Setting, Payment, Tracking, Invoices, Sales, Purchases, Expenses Amount, Paid, Unpaid, "},{name:"title",content:"Payment Tracking"}])}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-payments-setting"==this.pageType&&this.fetchDBData()})}),this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchDbData("filterSettingData",function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&!(0,l.A)(o)&&(t.settingData=o,t.paymentTracking=t.settingData.invoicePaymentTracking)});return function(i){return n.apply(this,arguments)}}())})()}changeTracking(t){(0,u.A)(this.settingData,"invoicePaymentTracking")&&(this.settingData.invoicePaymentTracking=t,this.paymentTracking=t)}submit(){(0,u.A)(this.settingData,"invoicePaymentTracking")?(this.isLoading=!0,this.settingService.addEditDBSetting(this.settingData,t=>{var n=t.data;this.commonService.processResponse(t,i=>{(0,L.A)(()=>{this.isLoading=!1},500),200==t.status&&(0,u.A)(n,"deviceSettings")&&!(0,l.A)(n.deviceSettings)?(this.fetchDBData(),this.syncDbService.syncData()):this.notificationService.error("SOMETHING_WENT_WRONG_IN_SETTING_API",{},!0)})})):this.notificationService.error("INVALID_DATA",{},!0)}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(w.V),e.rXU(y.h),e.rXU(P.q),e.rXU(x.y),e.rXU(F.J),e.rXU(O.P),e.rXU(C.nX),e.rXU(R.P))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-payment-tracking"]],decls:82,vars:60,consts:[[1,"setting-header-main","row","ac-headertitle"],[1,"col-md-9","p-0"],[1,"ac-heading--title"],[1,"col-md-3","ps-0","text-end"],[1,"col-lg-12","p-0",2,"background","#f5f5f5"],[1,"setting-inner"],[1,"setting-card"],[1,"info"],[2,"font-size","14px"],[1,"ms-3","dateradio","justify-content-md-right","align-self-end",2,"margin-top","9px"],["id","","type","radio","name","paymentTracking",3,"ngModelChange","click","checked","value","ngModel"],[1,"label"],["type","radio","name","paymentTracking",3,"ngModelChange","click","checked","value","ngModel"],[1,"col-md-12","pay-tracking"],[1,"m-0"],[1,"footer-settings"],[1,"fa-pull-right","pb-2"],["type","button","loadingText","Saving",1,"setting_save",3,"click"],[1,"material-icons","custom-icons"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"h4",2),e.EFF(3),e.nI1(4,"transloco"),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"transloco"),e.k0s()(),e.nrm(8,"div",3),e.k0s(),e.j41(9,"div",4)(10,"div",5)(11,"div",6)(12,"div",7)(13,"div")(14,"span",8),e.EFF(15),e.nI1(16,"transloco"),e.k0s(),e.j41(17,"span",9)(18,"label")(19,"input",10),e.mxI("ngModelChange",function(r){return e.DH7(i.paymentTracking,r)||(i.paymentTracking=r),r}),e.bIt("click",function(){return i.changeTracking(1)}),e.k0s(),e.j41(20,"span",11),e.EFF(21),e.nI1(22,"transloco"),e.k0s()(),e.j41(23,"label")(24,"input",12),e.mxI("ngModelChange",function(r){return e.DH7(i.paymentTracking,r)||(i.paymentTracking=r),r}),e.bIt("click",function(){return i.changeTracking(0)}),e.k0s(),e.j41(25,"span",11),e.EFF(26),e.nI1(27,"transloco"),e.k0s()()()()()(),e.j41(28,"div",6)(29,"div",7)(30,"div",13)(31,"h4",14),e.EFF(32),e.nI1(33,"transloco"),e.k0s(),e.j41(34,"p"),e.EFF(35),e.nI1(36,"transloco"),e.nrm(37,"br")(38,"br"),e.EFF(39),e.nI1(40,"transloco"),e.nrm(41,"br")(42,"br"),e.EFF(43),e.nI1(44,"transloco"),e.nrm(45,"br")(46,"br"),e.EFF(47),e.nI1(48,"transloco"),e.k0s()()()(),e.j41(49,"div",6)(50,"div",7)(51,"div",13)(52,"h4",14),e.EFF(53),e.nI1(54,"transloco"),e.k0s(),e.j41(55,"p"),e.EFF(56),e.nI1(57,"transloco"),e.nrm(58,"br")(59,"br"),e.EFF(60),e.nI1(61,"transloco"),e.nrm(62,"br"),e.EFF(63),e.nI1(64,"transloco"),e.nrm(65,"br"),e.EFF(66),e.nI1(67,"transloco"),e.k0s(),e.nrm(68,"br"),e.j41(69,"p"),e.EFF(70),e.nI1(71,"transloco"),e.k0s(),e.j41(72,"p"),e.EFF(73),e.nI1(74,"transloco"),e.k0s()()()()()(),e.j41(75,"div",15)(76,"div",16)(77,"button",17),e.bIt("click",function(){return i.submit()}),e.j41(78,"span",18),e.EFF(79,"save"),e.k0s(),e.EFF(80),e.nI1(81,"transloco"),e.k0s()()()),2&n&&(e.R7$(3),e.JRh(e.bMT(4,24,"PAYMENT_TRACKING")),e.R7$(3),e.JRh(e.bMT(7,26,"PAYMENT_TRACKING_TXT")),e.R7$(9),e.JRh(e.bMT(16,28,"INVOICE_WISE_PAYMENT_TRACKING")),e.R7$(4),e.FS9("checked",1===i.paymentTracking),e.Y8G("value",1),e.R50("ngModel",i.paymentTracking),e.R7$(2),e.JRh(e.bMT(22,30,"ENABLED")),e.R7$(3),e.FS9("checked",0===i.paymentTracking),e.Y8G("value",0),e.R50("ngModel",i.paymentTracking),e.R7$(2),e.JRh(e.bMT(27,32,"DISABLED")),e.R7$(6),e.JRh(e.bMT(33,34,"ENABLED")),e.R7$(3),e.SpI("",e.bMT(36,36,"PAYMENT_TRACKING_ENABLED_TXT_ONE")," "),e.R7$(4),e.SpI(" ",e.bMT(40,38,"PAYMENT_TRACKING_ENABLED_TXT_TWO")," "),e.R7$(4),e.SpI(" ",e.bMT(44,40,"PAYMENT_TRACKING_ENABLED_TXT_THREE"),""),e.R7$(4),e.SpI(" ",e.bMT(48,42,"PAYMENT_TRACKING_ENABLED_TXT_FOUR"),""),e.R7$(6),e.JRh(e.bMT(54,44,"DISABLED")),e.R7$(3),e.JRh(e.bMT(57,46,"PAYMENT_TRACKING_DISABLED_TXT_ONE")),e.R7$(4),e.SpI(" - ",e.bMT(61,48,"INVOICE_AGING_REPORT"),""),e.R7$(3),e.SpI("- ",e.bMT(64,50,"SHOWING_INVOICES_AS_PAID_AND_UNPAID"),""),e.R7$(3),e.SpI("- ",e.bMT(67,52,"AMOUNT_DISABLE_FOR_INDIVIDUAL_INV"),""),e.R7$(4),e.JRh(e.bMT(71,54,"PAYMENT_TRACKING_DISABLED_TXT_TWO")),e.R7$(3),e.JRh(e.bMT(74,56,"PAYMENT_TRACKING_DISABLED_TXT_THREE")),e.R7$(7),e.SpI(" ",e.bMT(81,58,"SAVE")," "))},dependencies:[d.me,d.Fm,d.BC,d.vS,v.Kj]})}return a})();var H=g(67018),Ge=g(97197),vi=g(345);const Ci=["userProfileForm"],yi=["logoImageRef"],Ei=["signImageRef"],$e=a=>({"lw-display-none":a}),Ve=a=>({"lw-display-block":a});let Ii=(()=>{class a{constructor(t,n,i,o,r,s,p,m,_,b){this.dataStoreService=t,this.settingService=n,this.commonService=i,this.authService=o,this.notificationService=r,this.syncDbService=s,this.route=p,this.syncApiService=m,this.domSanitizer=_,this.printerSettingsService=b,this.pageType=this.route.snapshot.data.pageType,this.editData=this.authService.authInfo("organization"),this.isLoading=!1,this.orgId=this.authService.authInfo("user").orgId,this.isAlertDialogOpen=null,this.profileFormData={org_name:"",contact_person_name:"",business_id:"",display_email:"",org_phone_no:"",website_link:"",org_address_1:""},this.buildType=Y.c&&"DESKTOP"==Y.c.buildType?"DESKTOP":"WEB",this.logo=this.settingService.defaultLogoOrSignature("logo"),this.signature=this.settingService.defaultLogoOrSignature("signature"),this.commonService.setSEOInfo("Profile - Binz Accounting App",[{name:"description",content:"Profile"},{name:"title",content:"Profile"}])}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-profile-setting"==this.pageType&&this.fetchDBData()})}),this.fetchDBData(),navigator.onLine&&(this.deleteAndUploadImages(),(0,L.A)(()=>{this.settingService.fetchUploadedImages(3,t=>{this.settingService.updateProfileImgs(t,n=>{200==n.status&&(0,u.A)(n,"profileImages")&&!(0,l.A)(n.profileImages)?this.setLogoAndSignature(n.profileImages,3):(this.logo=this.settingService.defaultLogoOrSignature("logo"),this.signature=this.settingService.defaultLogoOrSignature("signature"))})})},1e3))}ngAfterViewInit(){}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchMultipleDbData(["allSettings","filterOrganizationData","profileImages"],function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&!(0,l.A)(o)&&((0,l.A)(o.allSettings)||(t.deviceSettings=o.allSettings.deviceSettings,(0,u.A)(t.deviceSettings,"customFields")&&(t.customFields=t.deviceSettings.customFields),(0,u.A)(o.allSettings,"webSettings")&&(t.webSettings=(0,l.A)(o.allSettings.webSettings)?t.printerSettingsService.DefaultWebSettings:o.allSettings.webSettings)),(0,u.A)(o,"filterOrganizationData")&&!(0,l.A)(o.filterOrganizationData)&&(t.organizationData=o.filterOrganizationData,(0,l.A)(t.organizationData)||Object.assign(t.profileFormData,t.organizationData)),(0,u.A)(o,"profileImages")&&!(0,l.A)(o.profileImages)&&t.setLogoAndSignature(o.profileImages,3))});return function(i){return n.apply(this,arguments)}}())})()}setLogoAndSignature(t,n){switch(n){case 1:this.logo=(0,H.A)(t,{uniqueIdentifier:"logo-a3ed60b4-e6b7-4ee5-b98b-eb4aa753d516"});break;case 2:this.signature=(0,H.A)(t,{uniqueIdentifier:"sign-ef4cdc2f-f6f9-42d8-850f-8eb6784ed49f"});break;default:this.logo=(0,H.A)(t,{uniqueIdentifier:"logo-a3ed60b4-e6b7-4ee5-b98b-eb4aa753d516"}),this.signature=(0,H.A)(t,{uniqueIdentifier:"sign-ef4cdc2f-f6f9-42d8-850f-8eb6784ed49f"})}}uploadImage(t,n){if(n.files.length>0){const i=n.files[0],s=480,p=640;if(!["image/png","image/jpeg"].includes(i.type))return this.notificationService.error("PROFILE_INVALID_FILE_TYPE",{},!0),void this.clearFiles();const m=new FileReader;m.onload=_=>{const b=new Image;b.src=_.target.result,b.onload=I=>{I.currentTarget.height>s||I.currentTarget.width>p?(this.notificationService.error("IMAGE_CROP_WARNING_MESSAGE",{},!0),this.commonService.showDialog(Ge._,{type:t,image:b.src},k=>{(0,l.A)(k)?this.clearFiles():this.processUpload(t,new File([h.DH.base64ToBlob(k)],i.name),k,i.name)},{height:"90%",width:"70%"})):this.processUpload(t,i,m.result,i.name)}},m.readAsDataURL(i)}}deleteImage(t){this.clearFiles(),isNumber(t)&&(navigator.onLine?this.settingService.deleteUploadLogo(t,n=>{this.commonService.processResponse(n,i=>{200==n.status&&this.settingService.setDefaultLogoSignature(t,o=>{200==o.status&&this.setLogoAndSignature(o.profileImages,t)})})}):"DESKTOP"==this.buildType&&(1==t?h.SE.setCache("deleteLogo",t):2==t&&h.SE.setCache("deleteSign",t),this.settingService.setDefaultLogoSignature(t,n=>{200==n.status&&this.setLogoAndSignature(n.profileImages,t)})))}submit(){let t=this.userProfileForm.controls;if((0,l.A)(t.orgName.value)||""==t.orgName.value||""==t.orgName.value.trim())this.notificationService.error("PLEAS_ENTER_ORG_NAME",{},!0);else if((0,l.A)(t.emailID.errors)||!t.emailID?.errors.pattern)if(this.userProfileForm.form.valid&&!(0,l.A)(this.organizationData)){this.isLoading=!0;let n=this.settingService.changeKeysForProfileApi(this.profileFormData,this.organizationData);this.settingService.addDBOrganization(n.org,i=>{let o=i.data;this.commonService.processResponse(i,r=>{(0,L.A)(()=>{this.isLoading=!1},500),200!=i.status||(0,l.A)(o)?this.notificationService.error("SOMETHING_WENT_WRONG_IN_ORGANIZATION_API",{},!0):(this.fetchDBData(),this.syncDbService.syncData())})})}else{if(t.emailID.errors?.pattern)return void this.notificationService.error("Please enter valid email address");if((0,l.A)(this.organizationData))return void this.notificationService.error("PROFILE_DATA_NOT_EXIST",{},!0)}else this.notificationService.error("PLEASE_ENTER_VALID_EMAIL_ADDRESS",{},!0)}processUpload(t,n,i,o){var r=n.name.substring(n.name.lastIndexOf("."));if(".png"===r||".jpg"===r||".jpeg"===r)if(n.size>5e6)this.notificationService.error("Image size must be below 5 MB");else{let s=new FormData;if(s.append("file",n),navigator.onLine||"DESKTOP"!=this.buildType)this.settingService.imgUpload({type:t,fd:s},p=>{this.commonService.processResponse(p,m=>{if(200==p.status){var _=h.DH.getRandomInt(1,9999999);h.SE.setCache("image_flag",_),this.settingService.fetchUploadedImages(t,b=>{this.settingService.updateProfileImgs(b,I=>{200==I.status&&(0,u.A)(I,"profileImages")&&!(0,l.A)(I.profileImages)?this.setLogoAndSignature(I.profileImages,t):(this.logo=this.settingService.defaultLogoOrSignature("logo"),this.signature=this.settingService.defaultLogoOrSignature("signature"))})})}})});else{let p=[];1==t?(h.SE.setCache("imgToUpload",JSON.stringify({response:i,type:t,imgName:o})),p.push({...this.settingService.defaultLogoOrSignature("logo"),lastUpdatedAt:E().valueOf(),orgId:this.orgId,value:i})):2==t&&(h.SE.setCache("signToUpload",JSON.stringify({response:i,type:t,imgName:o})),p.push({...this.settingService.defaultLogoOrSignature("signature"),lastUpdatedAt:E().valueOf(),orgId:this.orgId,value:i})),(0,l.A)(p)||this.settingService.updateProfileImgs(p,m=>{200==m.status&&(0,u.A)(m,"profileImages")&&!(0,l.A)(m.profileImages)?this.setLogoAndSignature(m.profileImages,t):(this.logo=this.settingService.defaultLogoOrSignature("logo"),this.signature=this.settingService.defaultLogoOrSignature("signature"))})}}else this.notificationService.error("Invalid file type. Please use .png, .jpg, or .jpeg file.")}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}uploadImages(t){let n=new File([h.DH.base64ToBlob(t.response)],t.imgName),i=new FormData;i.append("file",n),this.settingService.imgUpload({type:t.type,fd:i},o=>{this.commonService.processResponse(o,r=>{if(200==o.status){2==t.type?h.SE.destroyCache("signToUpload"):1==t.type&&h.SE.destroyCache("imgToUpload");var s=h.DH.getRandomInt(1,9999999);h.SE.setCache("image_flag",s)}})})}deleteAndUploadImages(){if(navigator.onLine){let t=h.SE.getCache("deleteLogo"),n=h.SE.getCache("imgToUpload"),i=h.SE.getCache("signToUpload");if(!(0,l.A)(n)||!(0,l.A)(i))return(0,l.A)(n)||(this.uploadImages(JSON.parse(n)),h.SE.destroyCache("imgToUpload"),h.SE.destroyCache("deleteLogo")),void((0,l.A)(i)||(this.uploadImages(JSON.parse(i)),h.SE.destroyCache("signToUpload"),h.SE.destroyCache("deleteSign")));t&&"1"==t&&(0,l.A)(n)?this.settingService.deleteUploadLogo(1,r=>{200==r.status&&(h.SE.destroyCache("deleteLogo"),(0,l.A)(n)||(this.uploadImages(JSON.parse(n)),h.SE.destroyCache("imgToUpload")))}):(0,l.A)(n)||(h.SE.destroyCache("deleteLogo"),this.uploadImages(JSON.parse(n)),h.SE.destroyCache("imgToUpload"));let o=h.SE.getCache("deleteSign");o&&"2"==o&&(0,l.A)(i)?this.settingService.deleteUploadLogo(2,r=>{200==r.status&&(h.SE.destroyCache("deleteSign"),(0,l.A)(i)||(this.uploadImages(JSON.parse(i)),h.SE.destroyCache("deleteSign"),h.SE.destroyCache("signToUpload")))}):(0,l.A)(i)||(this.uploadImages(JSON.parse(i)),h.SE.destroyCache("signToUpload"))}}clearFiles(){this.logoImageRef.nativeElement.value=null,this.signImageRef.nativeElement.value=null}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(w.V),e.rXU(P.q),e.rXU(y.h),e.rXU(x.y),e.rXU(F.J),e.rXU(O.P),e.rXU(C.nX),e.rXU(R.P),e.rXU(vi.up),e.rXU(ne.J))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-profile"]],viewQuery:function(n,i){if(1&n&&(e.GBs(Ci,5),e.GBs(yi,5),e.GBs(Ei,5)),2&n){let o;e.mGM(o=e.lsd())&&(i.userProfileForm=o.first),e.mGM(o=e.lsd())&&(i.logoImageRef=o.first),e.mGM(o=e.lsd())&&(i.signImageRef=o.first)}},decls:114,vars:90,consts:[["userProfileForm","ngForm"],["logoImageRef",""],["signImageRef",""],[1,"row-fluid"],[1,"setting-header-main","ac-headertitle"],[1,"col-md-9"],[1,"ac-heading--title"],["novalidate","",1,""],[1,"col-lg-12"],[1,"setting-inner"],[1,"setting-card"],[1,"info"],[1,"row"],[1,"col-md-6"],[1,"file-upload"],[1,"logo-add-setting"],["id","logoImgCont",1,"image-upload-wrap","text-center",3,"ngClass"],[1,"material-icons","upload-icons"],["type","file","accept","image/*",1,"file-upload-input",3,"change"],[1,"drag-text"],[1,"file-upload-content",3,"ngClass"],[1,"file-upload-image",3,"src"],[1,"image-title-wrap"],["type","button",1,"remove-image",3,"click"],[1,"col-md-6","no-padding"],[1,"col-sm-6"],[1,"form-group"],[1,"form-label"],[1,"base-date-input"],["title","Email","type","text","name","orgName",1,"form-control","up",3,"ngModelChange","placeholder","ngModel"],["title","Email","type","text","name","taxID",1,"form-control","up",3,"ngModelChange","placeholder","ngModel"],["title","Email","type","text","name","contactNo","onkeypress","return event.charCode >= 48 && event.charCode <= 57","type","number",1,"form-control","up",3,"ngModelChange","placeholder","ngModel"],["rows","2","cols","10","spellcheck","false","name","address",1,"form-control","custom-scroll","style-3","border",2,"min-height","80px","padding","5px 11px !important",3,"ngModelChange","placeholder","ngModel"],["title","Email","type","text","name","personName",1,"form-control","up",3,"ngModelChange","placeholder","ngModel"],["title","Email","pattern","[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$","type","email","type","text","name","emailID",1,"form-control","up",3,"ngModelChange","placeholder","ngModel"],["title","Email","type","text","name","websiteLink",1,"form-control","up",3,"ngModelChange","placeholder","ngModel"],[1,"footer-settings"],[1,"fa-pull-right","pb-2"],["type","button","loadingText","Saving",1,"setting_save",3,"click"],[1,"material-icons","custom-icons"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"h4",6),e.EFF(4),e.nI1(5,"transloco"),e.k0s(),e.j41(6,"p"),e.EFF(7),e.nI1(8,"transloco"),e.k0s()()(),e.j41(9,"form",7,0)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"div",13)(17,"div",14)(18,"label",15),e.EFF(19),e.nI1(20,"transloco"),e.k0s(),e.j41(21,"div",16)(22,"span",17),e.EFF(23,"cloud_upload"),e.k0s(),e.j41(24,"input",18,1),e.bIt("change",function(s){return e.eBV(o),e.Njj(i.uploadImage(1,s.target))}),e.k0s(),e.j41(26,"div",19)(27,"h3"),e.EFF(28),e.nI1(29,"transloco"),e.k0s()()(),e.j41(30,"div",20),e.nrm(31,"img",21),e.j41(32,"div",22)(33,"button",23),e.bIt("click",function(){return e.eBV(o),e.Njj(i.deleteImage(1))}),e.EFF(34),e.nI1(35,"transloco"),e.k0s()()()()(),e.j41(36,"div",24)(37,"div",14)(38,"label",15),e.EFF(39),e.nI1(40,"transloco"),e.k0s(),e.j41(41,"div",16)(42,"span",17),e.EFF(43,"cloud_upload"),e.k0s(),e.j41(44,"input",18,2),e.bIt("change",function(s){return e.eBV(o),e.Njj(i.uploadImage(2,s.target))}),e.k0s(),e.j41(46,"div",19)(47,"h3"),e.EFF(48),e.nI1(49,"transloco"),e.k0s()()(),e.j41(50,"div",20),e.nrm(51,"img",21),e.j41(52,"div",22)(53,"button",23),e.bIt("click",function(){return e.eBV(o),e.Njj(i.deleteImage(2))}),e.EFF(54),e.nI1(55,"transloco"),e.k0s()()()()(),e.j41(56,"div",25)(57,"div",26)(58,"label",27),e.EFF(59),e.nI1(60,"transloco"),e.k0s(),e.j41(61,"div",28)(62,"input",29),e.nI1(63,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.profileFormData.org_name,s)||(i.profileFormData.org_name=s),e.Njj(s)}),e.k0s()()(),e.j41(64,"div",26)(65,"label",27),e.EFF(66),e.nI1(67,"transloco"),e.k0s(),e.j41(68,"div",28)(69,"input",30),e.nI1(70,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.profileFormData.business_id,s)||(i.profileFormData.business_id=s),e.Njj(s)}),e.k0s()()(),e.j41(71,"div",26)(72,"label",27),e.EFF(73),e.nI1(74,"transloco"),e.k0s(),e.j41(75,"div",28)(76,"input",31),e.nI1(77,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.profileFormData.org_phone_no,s)||(i.profileFormData.org_phone_no=s),e.Njj(s)}),e.k0s()()(),e.j41(78,"div",26)(79,"label",27),e.EFF(80),e.nI1(81,"transloco"),e.k0s(),e.j41(82,"div",28)(83,"textarea",32),e.nI1(84,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.profileFormData.org_address_1,s)||(i.profileFormData.org_address_1=s),e.Njj(s)}),e.k0s()()()(),e.j41(85,"div",13)(86,"div",26)(87,"label",27),e.EFF(88),e.nI1(89,"transloco"),e.k0s(),e.j41(90,"div",28)(91,"input",33),e.nI1(92,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.profileFormData.contact_person_name,s)||(i.profileFormData.contact_person_name=s),e.Njj(s)}),e.k0s()()(),e.j41(93,"div",26)(94,"label",27),e.EFF(95),e.nI1(96,"transloco"),e.k0s(),e.j41(97,"div",28)(98,"input",34),e.nI1(99,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.profileFormData.display_email,s)||(i.profileFormData.display_email=s),e.Njj(s)}),e.k0s()()(),e.j41(100,"div",26)(101,"label",27),e.EFF(102),e.nI1(103,"transloco"),e.k0s(),e.j41(104,"div",28)(105,"input",35),e.nI1(106,"transloco"),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.profileFormData.website_link,s)||(i.profileFormData.website_link=s),e.Njj(s)}),e.k0s()()()()()()()()(),e.j41(107,"div",36)(108,"div",37)(109,"button",38),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(110,"span",39),e.EFF(111,"save"),e.k0s(),e.EFF(112),e.nI1(113,"transloco"),e.k0s()()()()()}2&n&&(e.R7$(4),e.JRh(e.bMT(5,36,"ORGANIZATION")),e.R7$(3),e.JRh(e.bMT(8,38,"USER_TAGLINE")),e.R7$(12),e.JRh(e.bMT(20,40,"COMPANY_LOGO")),e.R7$(2),e.Y8G("ngClass",e.eq3(82,$e,""!=(null==i.logo?null:i.logo.value))),e.R7$(7),e.JRh(e.bMT(29,42,"SELECT_TO_ADD_LOGO")),e.R7$(2),e.Y8G("ngClass",e.eq3(84,Ve,""!=(null==i.logo?null:i.logo.value))),e.R7$(),e.Y8G("src",null==i.logo?null:i.logo.value,e.B4B),e.R7$(3),e.SpI("",e.bMT(35,44,"REMOVE")," "),e.R7$(5),e.JRh(e.bMT(40,46,"ADD_SIGNATURE")),e.R7$(2),e.Y8G("ngClass",e.eq3(86,$e,""!=(null==i.signature?null:i.signature.value))),e.R7$(7),e.JRh(e.bMT(49,48,"SIGNATURE_TAGLINE")),e.R7$(2),e.Y8G("ngClass",e.eq3(88,Ve,""!=(null==i.signature?null:i.signature.value))),e.R7$(),e.Y8G("src",null==i.signature?null:i.signature.value,e.B4B),e.R7$(3),e.SpI(" ",e.bMT(55,50,"REMOVE")," "),e.R7$(5),e.JRh(e.bMT(60,52,"ORGANIZATION_NAME")),e.R7$(3),e.FS9("placeholder",e.bMT(63,54,"ORGANIZATION_NAME")),e.R50("ngModel",i.profileFormData.org_name),e.R7$(4),e.JRh(null!=i.customFields&&i.customFields.taxId?null==i.customFields?null:i.customFields.taxId:e.bMT(67,56,"TAX_ID")),e.R7$(3),e.FS9("placeholder",null!=i.customFields&&i.customFields.taxId?null==i.customFields?null:i.customFields.taxId:e.bMT(70,58,"TAX_ID")),e.R50("ngModel",i.profileFormData.business_id),e.R7$(4),e.JRh(e.bMT(74,60,"CONTACT_NUMBER")),e.R7$(3),e.FS9("placeholder",e.bMT(77,62,"CONTACT_NUMBER")),e.R50("ngModel",i.profileFormData.org_phone_no),e.R7$(4),e.JRh(e.bMT(81,64,"ADDRESS")),e.R7$(3),e.FS9("placeholder",e.bMT(84,66,"ADDRESS")),e.R50("ngModel",i.profileFormData.org_address_1),e.R7$(5),e.JRh(e.bMT(89,68,"PERSON_NAME")),e.R7$(3),e.FS9("placeholder",e.bMT(92,70,"PERSON_NAME")),e.R50("ngModel",i.profileFormData.contact_person_name),e.R7$(4),e.SpI("",e.bMT(96,72,"EMAIL_ID")," "),e.R7$(3),e.FS9("placeholder",e.bMT(99,74,"EMAIL_ID")),e.R50("ngModel",i.profileFormData.display_email),e.R7$(4),e.JRh(e.bMT(103,76,"WEBSITE_LINK")),e.R7$(3),e.FS9("placeholder",e.bMT(106,78,"WEBSITE_LINK")),e.R50("ngModel",i.profileFormData.website_link),e.R7$(7),e.SpI(" ",e.bMT(113,80,"SAVE")," "))},dependencies:[S.YU,d.qT,d.me,d.Q0,d.BC,d.cb,d.R_,d.vS,d.cV,v.Kj],styles:[".lw-display-none[_ngcontent-%COMP%]{display:none}.lw-display-block[_ngcontent-%COMP%]{display:block}[_ngcontent-%COMP%]::placeholder{color:#777!important;font-size:13px!important}.setting-themes[_ngcontent-%COMP%]{margin-bottom:64px}.setting-inner[_ngcontent-%COMP%]{padding:16px;margin-bottom:64px}"]})}return a})();function Fi(a,c){if(1&a){const t=e.RV6();e.j41(0,"div")(1,"h5"),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"transloco"),e.k0s(),e.j41(7,"ul",11)(8,"li")(9,"a",12),e.bIt("click",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.navigate(i))}),e.j41(10,"span"),e.EFF(11),e.nI1(12,"transloco"),e.j41(13,"span",13),e.nrm(14,"i",14),e.k0s()()()()()()}2&a&&(e.R7$(2),e.JRh(e.bMT(3,3,"WHAT_IS_PAYPAL_ME")),e.R7$(3),e.SpI(" ",e.bMT(6,5,"PAYPAL_TXT_ONE")," "),e.R7$(6),e.JRh(e.bMT(12,7,"CLICK_FOR_MORE_INFO")))}function Di(a,c){if(1&a){const t=e.RV6();e.j41(0,"div")(1,"h5"),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"transloco"),e.k0s(),e.j41(7,"ul",11)(8,"li")(9,"a",15),e.bIt("click",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.navigate(i))}),e.j41(10,"span"),e.EFF(11),e.nI1(12,"transloco"),e.j41(13,"span",13),e.nrm(14,"i",14),e.k0s()()()()()()}2&a&&(e.R7$(2),e.JRh(e.bMT(3,3,"Is_it_safe")),e.R7$(3),e.SpI(" ",e.bMT(6,5,"PAYPAL_TXT_TWO")," "),e.R7$(6),e.SpI(" ",e.bMT(12,7,"PAYPAL_KEEP_INFO_SAFE_TXT")," "))}function Ri(a,c){if(1&a){const t=e.RV6();e.j41(0,"div")(1,"h5"),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"transloco"),e.k0s(),e.j41(7,"ul",11)(8,"li")(9,"a",16),e.bIt("click",function(i){e.eBV(t);const o=e.XpG();return e.Njj(o.navigate(i))}),e.j41(10,"span"),e.EFF(11),e.nI1(12,"transloco"),e.j41(13,"span",13),e.nrm(14,"i",14),e.k0s()()()()()()}2&a&&(e.R7$(2),e.JRh(e.bMT(3,3,"HOW_IS_IT_WORKING")),e.R7$(3),e.SpI(" ",e.bMT(6,5,"PAYPAL_TXT_THREE")," "),e.R7$(6),e.SpI(" ",e.bMT(12,7,"CHECK_OUT_VIDEO_FOR_MORE_DETAILS"),""))}function ki(a,c){if(1&a&&(e.j41(0,"li")(1,"span"),e.EFF(2),e.k0s(),e.EFF(3," - "),e.j41(4,"span"),e.EFF(5),e.k0s()()),2&a){const t=c.$implicit;e.R7$(2),e.SpI("",t.currencyName," "),e.R7$(3),e.SpI(" ",t.countryName," ")}}function Ai(a,c){if(1&a&&(e.j41(0,"div")(1,"h5"),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"p"),e.EFF(5),e.nI1(6,"transloco"),e.k0s(),e.j41(7,"ul",11),e.DNE(8,ki,6,2,"li",17),e.k0s()()),2&a){const t=e.XpG();e.R7$(2),e.JRh(e.bMT(3,3,"WHICH_CURRENCIES_DOS_PAYPAL_SUPPORTS")),e.R7$(3),e.SpI(" ",e.bMT(6,5,"FOLLOWING_LIST_PAYPAL_SUPPORTS_TXT")," "),e.R7$(3),e.Y8G("ngForOf",t.paypalSupportCurrency)}}let Mi=(()=>{class a{constructor(t,n,i){this.infoData=t,this.dialogRef=n,this.notificationService=i,this.paypalSupportCurrency=[{currencyName:"ARS",countryName:"Argentine peso"},{currencyName:"AUD",countryName:"Australian dollar"},{currencyName:"CAD",countryName:"Canadian dollar"},{currencyName:"CHF",countryName:"Swiss franc"},{currencyName:"CZK",countryName:"Czech koruna"},{currencyName:"DKK",countryName:"Danish krone"},{currencyName:"EUR",countryName:"Euro"},{currencyName:"GBP",countryName:"Pound sterling"},{currencyName:"HKD",countryName:"Hong Kong dollar"},{currencyName:"HUF",countryName:"Hungarian forint"},{currencyName:"INR",countryName:"Indian rupee"},{currencyName:"JPY",countryName:"Japanese yen"},{currencyName:"MXN",countryName:"Mexican peso"},{currencyName:"MYR",countryName:"Malaysian ringgit"},{currencyName:"NOK",countryName:"Norwegian krone"},{currencyName:"NZD",countryName:"New Zealand dollar"},{currencyName:"PHP",countryName:"Philippine peso"},{currencyName:"PLN",countryName:"Polish z\u0142oty"},{currencyName:"RUB",countryName:"Russian ruble"},{currencyName:"SEK",countryName:"Swedish krona/kronor"},{currencyName:"SGD",countryName:"Singapore dollar"},{currencyName:"THB",countryName:"Thai baht"},{currencyName:"TRY",countryName:"Turkish lira"},{currencyName:"TWD",countryName:"New Taiwan dollar"},{currencyName:"USD",countryName:"United States dollar"},{currencyName:"ZAR",countryName:"South African rand"}]}ngOnInit(){}navigate(t){navigator.onLine||(t.preventDefault(),this.notificationService.warn(h.DH.alertMessage(9)))}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.Vh),e.rXU(f.CP),e.rXU(F.J))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-link-info-dialog"]],decls:16,vars:4,consts:[["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"paylums-pop-hed"],[1,"row"],[1,"col-md-11"],["id","exampleModalLongTitle",1,"modal-title"],[1,"col-md-1"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body","p-4"],[4,"ngIf"],[2,"padding","0"],["href","https://www.paypal.me/pages/faqs?locale.x=en&country.x=GB","target","_blank",1,"waves-effect","poplink",3,"click"],[1,"float-right","menu-arrow"],[1,"mdi","mdi-chevron-right"],["href","https://www.paypal.com/gb/webapps/mpp/paypal-safety-and-security","target","_blank",1,"waves-effect","poplink",3,"click"],["href","https://www.youtube.com/watch?v=3EjDMDpRdok&feature=youtu.be","target","_blank",1,"waves-effect","poplink",3,"click"],[4,"ngFor","ngForOf"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h5",5),e.EFF(6,"PayPal.Me"),e.k0s()(),e.j41(7,"div",6)(8,"button",7),e.bIt("click",function(){return i.dialogRef.close()}),e.j41(9,"span",8),e.EFF(10,"\xd7"),e.k0s()()()()(),e.j41(11,"div",9),e.DNE(12,Fi,15,9,"div",10)(13,Di,15,9,"div",10)(14,Ri,15,9,"div",10)(15,Ai,9,7,"div",10),e.k0s()()()),2&n&&(e.R7$(12),e.Y8G("ngIf","what-is-paypal"===i.infoData.type),e.R7$(),e.Y8G("ngIf","is-it-safe"===i.infoData.type),e.R7$(),e.Y8G("ngIf","is-it-working"===i.infoData.type),e.R7$(),e.Y8G("ngIf","paypal-currency"===i.infoData.type))},dependencies:[S.Sq,S.bT,v.Kj]})}return a})();const Oi=["bankingSettingForm"];function ji(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",35)(1,"h6"),e.EFF(2),e.nI1(3,"transloco"),e.k0s(),e.j41(4,"div",36)(5,"label",37),e.EFF(6),e.nI1(7,"transloco"),e.k0s(),e.j41(8,"div",38)(9,"input",39),e.mxI("ngModelChange",function(i){e.eBV(t);const o=e.XpG();return e.DH7(o.bankDetailsObject.myPayPalMeName,i)||(o.bankDetailsObject.myPayPalMeName=i),e.Njj(i)}),e.k0s()()(),e.j41(10,"ul",22)(11,"li",40),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.infoDialog("what-is-paypal"))}),e.j41(12,"a",24)(13,"span"),e.EFF(14),e.nI1(15,"transloco"),e.j41(16,"span",25),e.nrm(17,"i",26),e.k0s()()()(),e.j41(18,"li",40),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.infoDialog("is-it-safe"))}),e.j41(19,"a",24)(20,"span"),e.EFF(21),e.nI1(22,"transloco"),e.j41(23,"span",25),e.nrm(24,"i",26),e.k0s()()()(),e.j41(25,"li",40),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.infoDialog("is-it-working"))}),e.j41(26,"a",24)(27,"span"),e.EFF(28),e.nI1(29,"transloco"),e.j41(30,"span",25),e.nrm(31,"i",26),e.k0s()()()(),e.j41(32,"li",40),e.bIt("click",function(){e.eBV(t);const i=e.XpG();return e.Njj(i.infoDialog("paypal-currency"))}),e.j41(33,"a",24)(34,"span"),e.EFF(35),e.nI1(36,"transloco"),e.j41(37,"span",25),e.nrm(38,"i",26),e.k0s()()()()()()}if(2&a){const t=e.XpG();e.R7$(2),e.JRh(e.bMT(3,8,"SET_YOUR_LINK_NOW")),e.R7$(4),e.SpI(" ",e.bMT(7,10,"PAYPAL_ME")," "),e.R7$(3),e.FS9("required",t.bankDetailsObject.addPayPalMe),e.R50("ngModel",t.bankDetailsObject.myPayPalMeName),e.R7$(5),e.SpI(" ",e.bMT(15,12,"WHAT_IS_PAYPAL_ME")," "),e.R7$(7),e.SpI(" ",e.bMT(22,14,"Is_it_safe")," "),e.R7$(7),e.SpI(" ",e.bMT(29,16,"HOW_IS_IT_WORKING")," "),e.R7$(7),e.SpI("",e.bMT(36,18,"WHICH_CURRENCIES_PAYPAL_SUPPORT")," ")}}let Ni=(()=>{class a{constructor(t,n,i,o,r,s,p,m){this.commonService=t,this.authService=n,this.settingService=i,this.route=o,this.notificationService=r,this.syncDbService=s,this.dataStoreService=p,this.syncApiService=m,this.isLoading=!1,this.countryID=[3,6,8,9,11,10,10,13,15,16,17,18,19,20,21,23,22,24,25,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,46,47,48,49,51,53,54,55,56,57,58,59,60,62,64,65,66,67,68,70,71,73,74,75,76,77,80,81,83,84,85,87,90,93,94,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,134,137,139,143,145,146,147,148,151,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,203,204,205,206,207],this.pageType=this.route.snapshot.data.pageType,this.marked=!1,this.bankDetailsObject={payableTo:"",bankingDetails:"",otherDetails:"",addPayPalMe:!1,displayInEstimate:!1,myPayPalMeName:""},this.commonService.setSEOInfo("Banking & Paypal.Me - Binz Accounting App",[{name:"description",content:"Banking & Paypal.Me"},{name:"keywords",content:"Banking & Paypal.Me, Setting, Organization, Name, Payable, Details, Amount, Paid, Unpaid, Banking, Paypal.Me, PayPal, Payable"},{name:"title",content:"Banking & Paypal.Me"}])}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-banking-paypal-setting"==this.pageType&&this.fetchDBData()})}),this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchDbData("filterSettingData",function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&!(0,l.A)(o)&&(t.settingData=o,t.customFields=t.settingData.customFields,t.marked=!t.countryID.includes(t.settingData.country.id)&&t.settingData.bankingDetails.addPayPalMe,!(0,l.A)(t.settingData)&&(0,u.A)(t.settingData,"bankingDetails")&&(0,Z.A)(t.bankDetailsObject,t.settingData.bankingDetails))});return function(i){return n.apply(this,arguments)}}())})()}submit(){if(this.bankingSettingForm.form.valid&&!(0,l.A)(this.settingData)&&(0,u.A)(this.settingData,"bankingDetails"))(0,Z.A)(this.settingData.bankingDetails,this.bankDetailsObject),this.isLoading=!0,this.settingService.addEditDBSetting(this.settingData,t=>{var n=t.data;this.commonService.processResponse(t,i=>{(0,L.A)(()=>{this.isLoading=!1},500),200==t.status&&(0,u.A)(n,"deviceSettings")&&!(0,l.A)(n.deviceSettings)?(this.fetchDBData(),this.syncDbService.syncData()):this.notificationService.error("SOMETHING_WENT_WRONG_IN_SETTING_API",{},!0)})});else{const t=this.bankingSettingForm.controls;if(t.myPayPalMeName.invalid&&(t.myPayPalMeName.dirty||t.myPayPalMeName.untouched)&&t.myPayPalMeName?.errors.required)return void this.notificationService.error("PLEASE_ENTER_YOU_NAME",{},!0);if((0,l.A)(this.settingData))return void this.notificationService.error("INVALID_SETTING_DATA",{},!0)}}infoDialog(t){this.commonService.showDialog(Mi,{type:t},n=>{},{panelClass:"ng-material-dialog"})}payPalDialog(t){[3,6,8,9,11,10,10,13,15,16,17,18,19,20,21,23,22,24,25,27,28,29,30,31,33,34,35,36,37,38,39,40,41,42,43,46,47,48,49,51,53,54,55,56,57,58,59,60,62,64,65,66,67,68,70,71,73,74,75,76,77,80,81,83,84,85,87,90,93,94,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,134,137,139,143,145,146,147,148,151,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,203,204,205,206,207].includes(this.settingData.country.id)?(t.target.checked=!1,this.commonService.showDialog(xe.F,{},i=>{}),this.settingData.bankingDetails.addPayPalMe=!1):this.marked=t.target.checked}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(y.h),e.rXU(x.y),e.rXU(P.q),e.rXU(C.nX),e.rXU(F.J),e.rXU(O.P),e.rXU(w.V),e.rXU(R.P))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-banking-paypal"]],viewQuery:function(n,i){if(1&n&&e.GBs(Oi,5),2&n){let o;e.mGM(o=e.lsd())&&(i.bankingSettingForm=o.first)}},decls:87,vars:42,consts:[["bankingSettingForm","ngForm"],[1,"row-fluid"],[1,"setting-header-main","ac-headertitle"],[1,"col-md-9"],[1,"ac-heading--title"],["novalidate",""],[1,"col-lg-12","p-0",2,"background","#f5f5f5"],[1,"setting-inner"],[1,"setting-card","p-b"],[1,"info"],[1,"row"],[1,"col-md-6"],[1,"checkbox","checkbox-primary"],[1,"container-checkbox",2,"font-size","14px","font-weight","500","padding-top","0px","padding-left","27px"],["type","checkbox","name","displayInEstimate",3,"ngModelChange","ngModel"],[1,"checkmark"],[1,"form-group"],[1,"form-label"],[1,"base-date-input"],["title","Payable To","placeholder","Organisation Name","type","text","name","payableTo",1,"form-control","up",3,"ngModelChange","ngModel"],["rows","2","cols","10","placeholder","","spellcheck","false","name","bankingDetails",1,"form-control","custom-scroll","style-3","border",2,"min-height","80px","padding","8px !important",3,"ngModelChange","ngModel"],["rows","2","cols","10","placeholder","","spellcheck","false","name","otherDetails",1,"form-control","custom-scroll","style-3","border",2,"min-height","80px","padding","8px !important",3,"ngModelChange","ngModel"],["id","",1,""],[1,"cursor-pointer",3,"click"],[1,"waves-effect"],[1,"float-right","menu-arrow"],[1,"mdi","mdi-chevron-right"],[1,"col-sm-6"],["data-toggle","collapse","data-target","#demo",1,"checkbox","checkbox-primary"],["type","checkbox","name","addPayPalMe",3,"ngModelChange","change","ngModel"],["class","collapse col-md-12 paypal-pay show rounded",4,"ngIf"],[1,"footer-settings"],[1,"fa-pull-right","pb-2"],["type","button","loadingText","Saving",1,"setting_save",3,"click"],[1,"material-icons","custom-icons"],[1,"collapse","col-md-12","paypal-pay","show","rounded"],[1,"form-group","row","m-0"],["for","example-text-input",1,"col-sm-4","col-form-label",2,"margin-top","5px"],[1,"col-sm-8","p-l"],["type","text","name","myPayPalMeName",1,"PayPalfo",3,"ngModelChange","ngModel","required"],[1,"lw-cursor-pointer",3,"click"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"div",1)(1,"div",2)(2,"div",3)(3,"h4",4),e.EFF(4),e.nI1(5,"transloco"),e.k0s(),e.j41(6,"p"),e.EFF(7),e.nI1(8,"transloco"),e.k0s()()(),e.j41(9,"form",5,0)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",12)(18,"label",13),e.EFF(19),e.nI1(20,"transloco"),e.j41(21,"input",14),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.bankDetailsObject.displayInEstimate,s)||(i.bankDetailsObject.displayInEstimate=s),e.Njj(s)}),e.k0s(),e.nrm(22,"span",15),e.k0s()(),e.nrm(23,"br"),e.j41(24,"div",16)(25,"label",17),e.EFF(26),e.nI1(27,"transloco"),e.k0s(),e.j41(28,"div",18)(29,"input",19),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.bankDetailsObject.payableTo,s)||(i.bankDetailsObject.payableTo=s),e.Njj(s)}),e.k0s()()(),e.j41(30,"div",16)(31,"label",17),e.EFF(32),e.nI1(33,"transloco"),e.k0s(),e.j41(34,"div",18)(35,"textarea",20),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.bankDetailsObject.bankingDetails,s)||(i.bankDetailsObject.bankingDetails=s),e.Njj(s)}),e.k0s()()(),e.j41(36,"div",16)(37,"label",17),e.EFF(38),e.nI1(39,"transloco"),e.k0s(),e.j41(40,"div",18)(41,"textarea",21),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.bankDetailsObject.otherDetails,s)||(i.bankDetailsObject.otherDetails=s),e.Njj(s)}),e.k0s()()(),e.j41(42,"ul",22)(43,"li",23),e.bIt("click",function(){return e.eBV(o),e.Njj(i.infoDialog("what-is-paypal"))}),e.j41(44,"a",24)(45,"span"),e.EFF(46),e.nI1(47,"transloco"),e.j41(48,"span",25),e.nrm(49,"i",26),e.k0s()()()(),e.j41(50,"li",23),e.bIt("click",function(){return e.eBV(o),e.Njj(i.infoDialog("is-it-safe"))}),e.j41(51,"a",24)(52,"span"),e.EFF(53),e.nI1(54,"transloco"),e.j41(55,"span",25),e.nrm(56,"i",26),e.k0s()()()(),e.j41(57,"li",23),e.bIt("click",function(){return e.eBV(o),e.Njj(i.infoDialog("is-it-working"))}),e.j41(58,"a",24)(59,"span"),e.EFF(60),e.nI1(61,"transloco"),e.j41(62,"span",25),e.nrm(63,"i",26),e.k0s()()()(),e.j41(64,"li",23),e.bIt("click",function(){return e.eBV(o),e.Njj(i.infoDialog("paypal-currency"))}),e.j41(65,"a",24)(66,"span"),e.EFF(67),e.nI1(68,"transloco"),e.j41(69,"span",25),e.nrm(70,"i",26),e.k0s()()()()()(),e.j41(71,"div",27)(72,"div",28)(73,"label",13),e.EFF(74),e.nI1(75,"transloco"),e.j41(76,"input",29),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.bankDetailsObject.addPayPalMe,s)||(i.bankDetailsObject.addPayPalMe=s),e.Njj(s)}),e.bIt("change",function(s){return e.eBV(o),e.Njj(i.payPalDialog(s))}),e.k0s(),e.nrm(77,"span",15),e.k0s()(),e.nrm(78,"br"),e.DNE(79,ji,39,20,"div",30),e.k0s()()()()()()()(),e.j41(80,"div",31)(81,"div",32)(82,"button",33),e.bIt("click",function(){return e.eBV(o),e.Njj(i.submit())}),e.j41(83,"span",34),e.EFF(84,"save"),e.k0s(),e.EFF(85),e.nI1(86,"transloco"),e.k0s()()()}2&n&&(e.R7$(4),e.JRh(e.bMT(5,18,"BANKING_DETAILS_PAYPAL_ME")),e.R7$(3),e.JRh(e.bMT(8,20,"BANCKING_DETAILS_DESCRIPTION")),e.R7$(12),e.SpI(" ",e.bMT(20,22,"DISPLAY_BANKING_DETAILS_IN_ESTIMATE")," "),e.R7$(2),e.R50("ngModel",i.bankDetailsObject.displayInEstimate),e.R7$(5),e.JRh(e.bMT(27,24,"PAY_TO_LABEL")),e.R7$(3),e.R50("ngModel",i.bankDetailsObject.payableTo),e.R7$(3),e.JRh(e.bMT(33,26,"BANK_DETAIL_LABEL")),e.R7$(3),e.R50("ngModel",i.bankDetailsObject.bankingDetails),e.R7$(3),e.JRh(null!=i.customFields&&i.customFields.otherDetails?null==i.customFields?null:i.customFields.otherDetails:e.bMT(39,28,"OTHER_DETAILS")),e.R7$(3),e.R50("ngModel",i.bankDetailsObject.otherDetails),e.R7$(5),e.SpI(" ",e.bMT(47,30,"WHAT_IS_PAYPAL_ME")," "),e.R7$(7),e.SpI(" ",e.bMT(54,32,"Is_it_safe")," "),e.R7$(7),e.SpI(" ",e.bMT(61,34,"HOW_IS_IT_WORKING")," "),e.R7$(7),e.SpI("",e.bMT(68,36,"WHICH_CURRENCIES_PAYPAL_SUPPORT")," "),e.R7$(7),e.SpI(" ",e.bMT(75,38,"ADD_PAY_NOW_BUTTON_USING_PAYPAL_ME")," "),e.R7$(2),e.R50("ngModel",i.bankDetailsObject.addPayPalMe),e.R7$(3),e.Y8G("ngIf",1==i.marked),e.R7$(6),e.SpI(" ",e.bMT(86,40,"SAVE")," "))},dependencies:[S.bT,d.qT,d.me,d.Zm,d.BC,d.cb,d.YS,d.vS,d.cV,v.Kj],styles:[".setting-themes[_ngcontent-%COMP%]{margin-bottom:8%;height:100%}"]})}return a})();var Li=g(20404),Pi=g(42969);let wi=(()=>{class a{constructor(t){this.dialogRef=t}ngOnInit(){}submit(){this.dialogRef.close({purchase_disabled:!0})}closeDialog(){this.dialogRef.close({purchase_disabled:!1})}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.CP))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-disable-purchase-alert"]],decls:9,vars:0,consts:[["mat-dialog-title","",1,"mat-dialog-title"],[1,"p-2"],[1,"modal-footer","mod_footer","p-1"],["type","button",1,"btn","btn-sm","btn-cancel",3,"click"],["type","button",1,"btn","btn-sm","btn-done",3,"click"]],template:function(n,i){1&n&&(e.j41(0,"h2",0),e.EFF(1," Alert\n"),e.k0s(),e.j41(2,"P",1),e.EFF(3," If you disable Purchase feature, Inventory Settings get disabled. Do you want to continue ?\n"),e.k0s(),e.j41(4,"div",2)(5,"button",3),e.bIt("click",function(){return i.closeDialog()}),e.EFF(6,"No"),e.k0s(),e.j41(7,"button",4),e.bIt("click",function(){return i.submit()}),e.EFF(8,"Yes"),e.k0s()())}})}return a})();var B=g(81391);let xi=(()=>{class a{transform(t,n){return(0,l.A)(t)?[]:t.filter(i=>i.isShow===n)}static#e=this.\u0275fac=function(n){return new(n||a)};static#t=this.\u0275pipe=e.EJ8({name:"sortList",type:a,pure:!1})}return a})();const Bi=a=>({"lw-disabled-block":a});function Ui(a,c){if(1&a){const t=e.RV6();e.j41(0,"div",21)(1,"div",7)(2,"div",22),e.EFF(3),e.k0s(),e.j41(4,"div",23)(5,"label",24),e.EFF(6),e.j41(7,"input",25),e.mxI("ngModelChange",function(i){const o=e.eBV(t).$implicit;return e.DH7(o.isShow,i)||(o.isShow=i),e.Njj(i)}),e.bIt("change",function(){const i=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.changeSetting(!1,i.widgetUniqueKey))}),e.k0s(),e.nrm(8,"span",26),e.k0s()()()()}if(2&a){const t=c.$implicit,n=c.index;e.Y8G("ngClass",e.eq3(6,Bi,101===t.widgetUniqueKey||103===t.widgetUniqueKey)),e.R7$(3),e.SpI(" ",n+1," "),e.R7$(3),e.SpI(" ",t.translatedTitle," "),e.R7$(),e.Mz_("name","feature_",n,""),e.R50("ngModel",t.isShow)}}function Gi(a,c){if(1&a){const t=e.RV6();e.j41(0,"div")(1,"div",27)(2,"div",28)(3,"label",24),e.EFF(4),e.j41(5,"input",25),e.mxI("ngModelChange",function(i){const o=e.eBV(t).$implicit;return e.DH7(o.isShow,i)||(o.isShow=i),e.Njj(i)}),e.bIt("change",function(){const i=e.eBV(t).$implicit,o=e.XpG();return e.Njj(o.changeSetting(!0,i.widgetUniqueKey))}),e.k0s(),e.nrm(6,"span",26),e.k0s()()()()}if(2&a){const t=c.$implicit,n=c.index;e.R7$(4),e.SpI(" ",t.translatedTitle," "),e.R7$(),e.Mz_("name","feature_",n,""),e.R50("ngModel",t.isShow)}}let $i=(()=>{class a{constructor(t,n,i,o,r,s,p,m,_){this.commonService=t,this.authService=n,this.settingService=i,this.notificationService=o,this.syncDbService=r,this.dataStoreService=s,this.route=p,this.syncApiService=m,this.translocoService=_,this.isLoading=!1,this.enableDisableList=[],this.pageType=this.route.snapshot.data.pageType,this.isPurchaseDisabled=!1,this.accountListTrranslatedKey=h.DH.accountListForTranslations(),this.commonService.setSEOInfo("Enable / Disable Feature - Binz Accounting App",[{name:"description",content:"Enable / Disable Feature"},{name:"keywords",content:"Enable / Disable Feature, Setting, Enable, Disable, Sale, Purchase, Expense, Tax, Order, Estimate, Accounts"},{name:"title",content:"Enable / Disable Feature"}])}ngOnInit(){this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(t=>{(0,u.A)(t,"syncProcessComplete")&&t.syncProcessComplete&&(0,D.A)(()=>{"update-enable-disable-feature-setting"==this.pageType&&this.fetchDBData()})}),this.fetchDBData()}fetchDBData(){var t=this;return(0,T.A)(function*(){t.syncApiService.fetchDbData("filterSettingData",function(){var n=(0,T.A)(function*(i){var o=yield i.data;200===i.status&&!(0,l.A)(o)&&(t.settingData=o,t.enableDisableList=t.settingData.featureSetting,t.prepareFeatureList())});return function(i){return n.apply(this,arguments)}}()),t.prepareFeatureList()})()}submit(){if(!(0,l.A)(this.enableDisableList)){let t=[];if(this.enableDisableList.map(n=>{if(110==n.widgetUniqueKey&&!(0,l.A)(this.settingData.dashboardWidgetSetting)){let i=this.settingData.dashboardWidgetSetting.findIndex(o=>6==o.widgetUniqueKey);i>=0&&(0==n.isShow?(this.settingData.dashboardWidgetSetting[i].isEnabled=!1,this.settingData.dashboardWidgetSetting[i].isShow=!1):(this.settingData.dashboardWidgetSetting[i].isEnabled=!0,this.settingData.dashboardWidgetSetting[i].isShow=!0))}if(108==n.widgetUniqueKey&&!(0,l.A)(this.settingData.dashboardWidgetSetting)){let i=this.settingData.dashboardWidgetSetting.findIndex(o=>9==o.widgetUniqueKey);i>=0&&(0==n.isShow?(this.settingData.dashboardWidgetSetting[i].isEnabled=!1,this.settingData.dashboardWidgetSetting[i].isShow=!1):(this.settingData.dashboardWidgetSetting[i].isEnabled=!0,this.settingData.dashboardWidgetSetting[i].isShow=!0))}(107==n.widgetUniqueKey||106==n.widgetUniqueKey)&&t.push(n)}),!(0,l.A)(t)){let n=t.find(r=>106==r.widgetUniqueKey),i=t.find(r=>107==r.widgetUniqueKey),o=this.settingData.dashboardWidgetSetting.findIndex(r=>8==r.widgetUniqueKey);o>=0&&((0,l.A)(n)||(0,l.A)(i)||0!=n.isShow||0!=i.isShow?(this.settingData.dashboardWidgetSetting[o].isEnabled=!0,this.settingData.dashboardWidgetSetting[o].isShow=!0):(this.settingData.dashboardWidgetSetting[o].isEnabled=!1,this.settingData.dashboardWidgetSetting[o].isShow=!1))}}if(this.isPurchaseDisabled)this.commonService.showDialog(wi,{},t=>{t.purchase_disabled?!(0,l.A)(this.settingData)&&!(0,l.A)(this.enableDisableList)&&(this.isLoading=!0,this.settingService.addEditDBSetting(this.settingData,n=>{var i=n.data;this.commonService.processResponse(n,o=>{(0,L.A)(()=>{this.isLoading=!1},500),200==n.status&&(0,u.A)(i,"deviceSettings")&&!(0,l.A)(i.deviceSettings)?(this.fetchDBData(),this.syncDbService.syncData(),this.isPurchaseDisabled=!1):200!=n.status&&this.notificationService.error("SOMETHING_WENT_WRONG_IN_SETTING_API",{},!0)})})):(this.changeSetting(!0,102),this.isPurchaseDisabled=!1)},{width:"30%"});else if((0,l.A)(this.settingData)||(0,l.A)(this.enableDisableList)){if((0,l.A)(this.settingData))return void this.notificationService.error("INVALID_SETTING_DATA",{},!0);if((0,l.A)(this.enableDisableList))return void this.notificationService.error("INVALID_DATA",{},!0)}else this.isLoading=!0,this.settingService.addEditDBSetting(this.settingData,t=>{var n=t.data;this.commonService.processResponse(t,i=>{(0,L.A)(()=>{this.isLoading=!1},500),200==t.status&&(0,u.A)(n,"deviceSettings")&&!(0,l.A)(n.deviceSettings)?(this.fetchDBData(),this.syncDbService.syncData()):200!=t.status&&this.notificationService.error("SOMETHING_WENT_WRONG_IN_SETTING_API",{},!0)})})}changeSetting(t,n){this.settingData&&(0,u.A)(this.settingData,"featureSetting")&&(this.settingData.featureSetting=this.settingData.featureSetting.map(i=>{let o=this.settingData.featureSetting.some(r=>107==i.widgetUniqueKey&&102==r.widgetUniqueKey&&!r.isShow);return 102==n&&!t&&(this.isPurchaseDisabled=!0,this.updateInventorySettingValue("inventoryEnable",!1)),102==n&&!t&&107==i.widgetUniqueKey&&i.isShow?(this.updateInventorySettingValue("inventoryEnable",!1),{...i,isShow:!1}):107==i.widgetUniqueKey&&107==n&&t&&o?(this.notificationService.error("PLEASE_ENABLE_PURCHASE_FEATURE",{},!0),{...i,isShow:!1}):{...i,isShow:i.widgetUniqueKey===n?t:i.isShow}}),this.enableDisableList=this.settingData.featureSetting,this.prepareFeatureList())}updateInventorySettingValue(t,n){"inventoryEnable"===t&&(n?this.settingData.negativeInvStockAlert=!0:(this.settingData.inventoryStockAlert=!1,this.settingData.negativeInvStockAlert=!1)),!(0,l.A)(t)&&(0,u.A)(this.settingData,t)&&(this.settingData[t]=n)}filterList(t){let n=[];return(0,U.A)(t,(i,o)=>{n.push((0,Li.A)(i,"title"))}),n}prepareFeatureList(){let t=this.enableDisableList.map(n=>{if([101,102,103,108,105,106,107,109,110].includes(n.widgetUniqueKey))return{...n,title:h.DH.configItem(h.DH.featureTitleList(),"id",n.widgetUniqueKey)}});t.map(n=>{n.translatedTitle=(0,l.A)(this.accountListTrranslatedKey.find(i=>i.title==n.title))?n.title:this.translocoService.translate(this.accountListTrranslatedKey.find(i=>i.title==n.title).translated_key)}),this.enableDisableList=(0,Pi.A)(t,void 0)}ngOnDestroy(){(0,A.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(y.h),e.rXU(x.y),e.rXU(P.q),e.rXU(F.J),e.rXU(O.P),e.rXU(w.V),e.rXU(C.nX),e.rXU(R.P),e.rXU(v.JO))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-enable-disable"]],decls:40,vars:26,consts:[[1,"setting-header-main","row","ac-headertitle"],[1,"col-md-9","p-0"],[1,"ac-heading--title"],[1,"col-md-12","setting-themes"],[1,"setting-inner"],[1,"setting-card"],[1,"info"],[1,"row"],[1,"col-md-6","ps-4","ena-head"],["cdkDropList","",1,"example-list"],["class","example-box checkbox checkbox-primary ena-check",3,"ngClass",4,"ngFor","ngForOf"],[1,"col-md-6","ena-head"],[2,"margin","28px"],[1,"checkbox","checkbox-primary","ena-check"],[1,"hiddenWidget","px-2"],[1,"hiddenWidgetList","py-0"],[4,"ngFor","ngForOf"],[1,"footer-settings"],[1,"fa-pull-right","pb-2"],["type","button","loadingText","Saving",1,"setting_save",3,"click"],[1,"material-icons","custom-icons"],[1,"example-box","checkbox","checkbox-primary","ena-check",3,"ngClass"],[1,"border-end","border-dark","col-md-2","text-center","align-middle"],[1,"col-md-10"],[1,"container-checkbox"],["type","checkbox",3,"ngModelChange","change","name","ngModel"],[1,"checkmark"],[1,"row","border","hiddenWidgetList",2,"padding","18px 3px"],[1,"col-md-12"]],template:function(n,i){1&n&&(e.j41(0,"div",0)(1,"div",1)(2,"h4",2),e.EFF(3),e.nI1(4,"transloco"),e.k0s(),e.j41(5,"p"),e.EFF(6),e.nI1(7,"transloco"),e.k0s()()(),e.j41(8,"div",3)(9,"div",4)(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"h6"),e.EFF(15),e.nI1(16,"transloco"),e.k0s(),e.j41(17,"p"),e.EFF(18),e.nI1(19,"transloco"),e.k0s(),e.j41(20,"div",9),e.DNE(21,Ui,9,8,"div",10),e.nI1(22,"sortList"),e.k0s()(),e.j41(23,"div",11)(24,"h6"),e.EFF(25),e.nI1(26,"transloco"),e.k0s(),e.nrm(27,"p",12),e.j41(28,"div",13)(29,"div",14)(30,"div",15),e.DNE(31,Gi,7,4,"div",16),e.nI1(32,"sortList"),e.k0s()()()()()()()()(),e.j41(33,"div",17)(34,"div",18)(35,"button",19),e.bIt("click",function(){return i.submit()}),e.j41(36,"span",20),e.EFF(37,"save"),e.k0s(),e.EFF(38),e.nI1(39,"transloco"),e.k0s()()()),2&n&&(e.R7$(3),e.JRh(e.bMT(4,8,"ENABLE_DISABLE_APPLICATION_FEATURE")),e.R7$(3),e.JRh(e.bMT(7,10,"CUSTOMIZE_YOUR_APPLICATION")),e.R7$(9),e.JRh(e.bMT(16,12,"ENABLE_FEATURE")),e.R7$(3),e.JRh(e.bMT(19,14,"PLEASE_SELECT_THE_WIDGET_TXT")),e.R7$(3),e.Y8G("ngForOf",e.i5U(22,16,i.enableDisableList,!0)),e.R7$(4),e.JRh(e.bMT(26,19,"DISABLE_FEATURE")),e.R7$(6),e.Y8G("ngForOf",e.i5U(32,21,i.enableDisableList,!1)),e.R7$(7),e.SpI(" ",e.bMT(39,24,"SAVE")," "))},dependencies:[S.YU,S.Sq,d.Zm,d.BC,d.vS,B.O7,xi,v.Kj],styles:[".example-list[_ngcontent-%COMP%]{max-width:100%;border:solid 1px #ccc;min-height:60px;display:block;background:#fff;border-radius:4px;overflow:hidden}.example-box[_ngcontent-%COMP%]{padding:18px 10px;border-bottom:solid 1px #ccc;color:#000000de;flex-direction:row;align-items:center;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.example-box-hidden[_ngcontent-%COMP%]{padding:18px 10px;border-bottom:solid 1px #ccc;color:#000000de;flex-direction:row;align-items:center;box-sizing:border-box;background:#fff;font-size:14px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-box[_ngcontent-%COMP%]:last-child{border:none}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.hiddenWidgetList[_ngcontent-%COMP%]{padding:19px 3px;background:#f5f5f57a}.faded[_ngcontent-%COMP%]{opacity:.5;z-index:1}.setting-themes[_ngcontent-%COMP%]{margin-bottom:6%;height:100%}"]})}return a})(),Vi=(()=>{class a{constructor(t,n){this.inventoryData=t,this.dialogRef=n}static#e=this.\u0275fac=function(n){return new(n||a)(e.rXU(f.Vh),e.rXU(f.CP))};static#t=this.\u0275cmp=e.VBU({type:a,selectors:[["app-inventory-valuation-method"]],decls:53,vars:34,consts:[["form","ngForm"],["mat-dialog-title","",1,"mat-dialog-title"],[1,"inventory-manage-pop","m-0","row"],[1,"col-md-11"],["id","exampleModalLongTitle",1,"modal-title"],[1,"col-md-1","text-end"],["type","button","aria-label","Close",1,"close",2,"border","none","background","none",3,"click"],["aria-hidden","true",2,"font-size","26px"],["novalidate",""],[1,"mat-typography","mat-dialog-content"],[1,"container-radio"],["type","radio","name","inventoryValuationMethod",3,"ngModelChange","click","ngModel","value"],[1,"checkmark"],[1,"mute-text"],["src","assets/img/formula.png","width","100%"],[1,"divider"],[1,"col-md-12","text-end"],["data-bs-toggle","collapse","href","#fifoexample","role","button","aria-expanded","false","aria-controls","fifoexample",1,"btn-fifo"],[1,"material-icons","custom-icons"],["id","fifoexample",1,"collapse","multi-collapse"],["src","./assets/img/fifo-example.svg","alt","",2,"width","100%"]],template:function(n,i){if(1&n){const o=e.RV6();e.j41(0,"h2",1)(1,"div",2)(2,"div",3)(3,"h5",4),e.EFF(4),e.nI1(5,"transloco"),e.nrm(6,"br")(7,"br"),e.j41(8,"span"),e.EFF(9),e.nI1(10,"transloco"),e.k0s()(),e.j41(11,"p"),e.EFF(12),e.nI1(13,"transloco"),e.k0s(),e.j41(14,"p"),e.EFF(15),e.nI1(16,"transloco"),e.k0s(),e.j41(17,"p"),e.EFF(18),e.nI1(19,"transloco"),e.k0s()(),e.j41(20,"div",5)(21,"button",6),e.bIt("click",function(){return e.eBV(o),e.Njj(i.dialogRef.close({select_successfully:!1}))}),e.j41(22,"span",7),e.EFF(23,"\xd7"),e.k0s()()()()(),e.j41(24,"form",8,0)(26,"mat-dialog-content",9)(27,"label",10),e.EFF(28),e.nI1(29,"transloco"),e.j41(30,"input",11),e.mxI("ngModelChange",function(s){return e.eBV(o),e.DH7(i.inventoryData.inventoryValuationMethod,s)||(i.inventoryData.inventor