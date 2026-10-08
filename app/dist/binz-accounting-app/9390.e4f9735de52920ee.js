"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[9390],{34262:(j,F,r)=>{r.d(F,{X:()=>p});var T=r(60177),v=r(89417),_=r(61997),K=r(92314),I=r(75263),A=r(50074),C=r(75351),b=r(7180),f=r(82798),o=r(54438);let p=(()=>{class R{static#t=this.\u0275fac=function($){return new($||R)};static#e=this.\u0275mod=o.$C({type:R});static#n=this.\u0275inj=o.G2t({imports:[T.MD,v.YN,v.X1,_.C,K.X6,A.G,C.hM,I.ZG,b.Q8,f.Ve]})}return R})()},86541:(j,F,r)=>{r.d(F,{r:()=>A});var T=r(97586),_=r(54438),K=r(7004),I=r(4922);let A=(()=>{class C{constructor(f,o){this.dataStoreService=f,this.authService=o,this.accessToken=this.authService.authInfo("access_token"),this.orgId=this.authService.authInfo("user").orgId}changeKeysForTermsApi(f,o=1,p){return this.accessToken=this.authService.authInfo("access_token"),this.orgId=this.authService.authInfo("user").orgId,{termsAndConditionList:[{serverUpdatedTime:1===o?0:p.serverUpdatedTime,deviceCreatedDate:1===o?T().toDate().getTime():p.deviceCreatedDate,defaultTerms:f.isDefault,termsAndCondition:f.termsCondition,createdDate:0,uniqueKeyTermsAndCondition:1===o?generateUUID("TermsAndCondition"):p.uniqueKeyTermsAndCondition,orgId:this.orgId,syncFlag:1==o?1:2}]}}static#t=this.\u0275fac=function(o){return new(o||C)(_.KVO(K.V),_.KVO(I.y))};static#e=this.\u0275prov=_.jDH({token:C,factory:C.\u0275fac,providedIn:"root"})}return C})()},9390:(j,F,r)=>{r.r(F),r.d(F,{ViewLedgerModule:()=>Et});var T=r(60177),v=r(7180),_=r(94609),K=r(61997),I=r(34262),A=r(75743),C=r(72882),b=r(10467),f=r(98808),o=r(72036),p=r(66689),R=r(81817),M=r(49671),B=r(87372),$=r(32661),G=r(75351),t=r(54438),U=r(52953);function w(n,d){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.amount," ")}}function N(n,d){1&n&&(t.j41(0,"span"),t.EFF(1," -- "),t.k0s())}function V(n,d){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.amount," ")}}function X(n,d){1&n&&(t.j41(0,"span"),t.EFF(1," -- "),t.k0s())}function q(n,d){if(1&n&&(t.j41(0,"tr",17)(1,"td"),t.EFF(2),t.nI1(3,"dateFormat"),t.nrm(4,"br"),t.k0s(),t.j41(5,"td"),t.EFF(6),t.k0s(),t.j41(7,"td"),t.DNE(8,w,2,1,"span",18)(9,N,2,0,"span",18),t.k0s(),t.j41(10,"td"),t.DNE(11,V,2,1,"span",18)(12,X,2,0,"span",18),t.k0s()()),2&n){const e=d.$implicit,i=t.XpG();t.R7$(2),t.JRh(t.i5U(3,6,e.formatDate,i.settingData)),t.R7$(4),t.JRh(e.translatedName),t.R7$(2),t.Y8G("ngIf",1==e.drCrType),t.R7$(),t.Y8G("ngIf",2==e.drCrType),t.R7$(2),t.Y8G("ngIf",2==e.drCrType),t.R7$(),t.Y8G("ngIf",1==e.drCrType)}}function J(n,d){if(1&n&&(t.j41(0,"div",19)(1,"div")(2,"h5"),t.EFF(3),t.nI1(4,"transloco"),t.k0s()(),t.j41(5,"div")(6,"span"),t.EFF(7),t.k0s()()()),2&n){const e=t.XpG();t.R7$(3),t.JRh(t.bMT(4,2,"COMMENTS")),t.R7$(4),t.JRh(e.ledgerData.comments)}}let Y=(()=>{class n{constructor(e,i,s,a){this.ledgerData=e,this.router=i,this.dialogRef=s,this.translocoService=a,this.accountListTrranslatedKey=f.DH.accountListForTranslations()}ngOnInit(){this.ledgerData.ledgerList.map(e=>{e.translatedName=(0,o.A)(this.accountListTrranslatedKey.find(i=>i.title==e.accountName))?e.accountName:this.translocoService.translate(this.accountListTrranslatedKey.find(i=>i.title==e.accountName).translated_key)})}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(G.Vh),t.rXU(A.Ix),t.rXU(G.CP),t.rXU(v.JO))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-show-ledger"]],decls:39,vars:24,consts:[["mat-dialog-title","",1,"header-common","p-2","mat-dialog-title"],[1,"row","col-md-12","pe-0","m-0"],[1,"col-md-6"],["id","exampleModalLongTitle",1,"modal-title"],[1,"col-md-6","trasst","text-end"],[2,"font-size","14px","font-weight","400"],[1,"mat-typography","mat-dialog-content","p-3"],[1,""],["id","datatable","role","grid","aria-describedby","datatable_info",1,"table","table-hover","table-bordered","no-footer",2,"cursor","pointer"],[1,"table-header"],["role","row",1,"mainsec-product"],[1,"ledger-account"],["role","row","class","odd-product","data-bs-toggle","modal","data-target","#exampleModalCenter2",4,"ngFor","ngForOf"],["class","col-md-12 bg-legder",4,"ngIf"],["align","end",1,"mat-dialog-actions"],["type","button",1,"btn-cancel",3,"click"],[1,"material-icons","custom-icons"],["role","row","data-bs-toggle","modal","data-target","#exampleModalCenter2",1,"odd-product"],[4,"ngIf"],[1,"col-md-12","bg-legder"]],template:function(i,s){1&i&&(t.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"h5",3),t.EFF(4),t.nI1(5,"transloco"),t.k0s()(),t.j41(6,"div",4)(7,"span",5),t.EFF(8),t.nI1(9,"transloco"),t.j41(10,"h5"),t.EFF(11),t.k0s()()()()(),t.j41(12,"form")(13,"mat-dialog-content",6)(14,"div",7)(15,"table",8)(16,"thead",9)(17,"tr",10)(18,"th",11),t.EFF(19),t.nI1(20,"transloco"),t.k0s(),t.j41(21,"th",11),t.EFF(22),t.nI1(23,"transloco"),t.k0s(),t.j41(24,"th",11),t.EFF(25),t.nI1(26,"transloco"),t.k0s(),t.j41(27,"th",11),t.EFF(28),t.nI1(29,"transloco"),t.k0s()()(),t.j41(30,"tbody"),t.DNE(31,q,13,9,"tr",12),t.k0s()(),t.DNE(32,J,8,4,"div",13),t.k0s()(),t.j41(33,"mat-dialog-actions",14)(34,"button",15),t.bIt("click",function(){return s.dialogRef.close()}),t.j41(35,"span",16),t.EFF(36,"cancel"),t.k0s(),t.EFF(37),t.nI1(38,"transloco"),t.k0s()()()),2&i&&(t.R7$(4),t.JRh(t.bMT(5,10,"LEDGER")),t.R7$(4),t.SpI(" ",t.bMT(9,12,"TRANSACTION_NO")," "),t.R7$(3),t.SpI(" ",s.ledgerData.transactionNo," "),t.R7$(8),t.SpI("",t.bMT(20,14,"DATE")," "),t.R7$(3),t.JRh(t.bMT(23,16,"PARTICULAR")),t.R7$(3),t.JRh(t.bMT(26,18,"DR_LABEL")),t.R7$(3),t.JRh(t.bMT(29,20,"CR_LABEL")),t.R7$(3),t.Y8G("ngForOf",s.ledgerData.ledgerList),t.R7$(),t.Y8G("ngIf",s.ledgerData.comments&&"-"!=s.ledgerData.comments),t.R7$(5),t.SpI(" ",t.bMT(38,22,"CLOSE")," "))},dependencies:[T.Sq,T.bT,v.Kj,U.a],styles:[".table[_ngcontent-%COMP%] > tbody[_ngcontent-%COMP%] > tr[_ngcontent-%COMP%] > td[_ngcontent-%COMP%]{padding:4px 12px}"]})}return n})();var W=r(39866),H=r(7004),z=r(86541),Q=r(26297),Z=r(4300),tt=r(93832),et=r(11869),nt=r(52861),it=r(56765),at=r(99639),k=r(69748),rt=r(35036);const S=(n,d,e)=>[n,d,!1,e,!1];function st(n,d){1&n&&(t.j41(0,"div",34)(1,"div",35)(2,"div",36),t.nrm(3,"span",37),t.k0s()()())}function ot(n,d){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const e=t.XpG();t.R7$(),t.JRh(e.openingBalanceType)}}function ct(n,d){if(1&n&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&n){const e=t.XpG();t.R7$(),t.JRh(e.balanceType)}}function lt(n,d){if(1&n&&(t.j41(0,"b"),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.accountName," ")}}function dt(n,d){if(1&n&&(t.j41(0,"span"),t.DNE(1,lt,2,1,"b",19),t.k0s()),2&n){const e=d.$implicit,i=t.XpG().$implicit;t.R7$(),t.Y8G("ngIf",i.transactionParticular.length>0&&i.transactionParticular.length<3&&!e.selectAccount)}}function ut(n,d){1&n&&(t.j41(0,"b"),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&n&&(t.R7$(),t.SpI(" ",t.bMT(2,1,"MULTIPLE_ACC")," "))}function pt(n,d){if(1&n&&(t.j41(0,"td",57),t.EFF(1),t.k0s()),2&n){const e=t.XpG().$implicit;t.R7$(),t.SpI(" ",e.accountName," ")}}function ht(n,d){if(1&n&&(t.j41(0,"td",58),t.EFF(1),t.nI1(2,"CurrencyPipe"),t.nI1(3,"transloco"),t.nI1(4,"transloco"),t.k0s()),2&n){const e=t.XpG().$implicit,i=t.XpG(3);t.R7$(),t.Lme(" ",t.iJd(2,2,t.sMw(12,S,e.ledgerAmount,i.settingData,i.settingData.amountRoundOff))," ",1==e.drCrType?t.bMT(3,8,"DR_LABEL"):t.bMT(4,10,"CR_LABEL")," ")}}function ft(n,d){if(1&n&&(t.j41(0,"tr",54),t.DNE(1,pt,2,1,"td",55)(2,ht,5,16,"td",56),t.k0s()),2&n){const e=d.$implicit,i=t.XpG(2).$implicit;t.R7$(),t.Y8G("ngIf",i.transactionParticular.length>2&&!e.selectAccount),t.R7$(),t.Y8G("ngIf",i.transactionParticular.length>2&&!e.selectAccount)}}function gt(n,d){if(1&n&&(t.j41(0,"div",43)(1,"div",44)(2,"span",45),t.EFF(3,"expand_more"),t.k0s(),t.DNE(4,ut,3,3,"b",19),t.k0s(),t.j41(5,"div",46)(6,"div",47)(7,"div",48)(8,"table",49)(9,"thead")(10,"tr",50)(11,"th",51),t.EFF(12),t.nI1(13,"transloco"),t.nrm(14,"span",52),t.k0s(),t.j41(15,"th",51),t.EFF(16),t.nI1(17,"transloco"),t.k0s()()(),t.j41(18,"tbody"),t.DNE(19,ft,3,2,"tr",53),t.k0s()()()()()()),2&n){const e=t.XpG().$implicit;t.R7$(4),t.Y8G("ngIf",e.transactionParticular.length>2),t.R7$(8),t.SpI("",t.bMT(13,4,"ACCOUNT")," "),t.R7$(4),t.JRh(t.bMT(17,6,"AMT_LABEL")),t.R7$(3),t.Y8G("ngForOf",e.transactionParticular)}}function mt(n,d){if(1&n&&(t.j41(0,"td",30),t.EFF(1),t.nI1(2,"CurrencyPipe"),t.k0s()),2&n){const e=t.XpG().$implicit,i=t.XpG();t.R7$(),t.SpI(" ",t.iJd(2,1,t.sMw(7,S,e.drAmount,i.settingData,i.settingData.amountRoundOff))," ")}}function yt(n,d){1&n&&(t.j41(0,"td",30),t.EFF(1,"--"),t.k0s())}function Lt(n,d){if(1&n&&(t.j41(0,"td",30),t.EFF(1),t.nI1(2,"CurrencyPipe"),t.k0s()),2&n){const e=t.XpG().$implicit,i=t.XpG();t.R7$(),t.SpI(" ",t.iJd(2,1,t.sMw(7,S,e.crAmount,i.settingData,i.settingData.amountRoundOff))," ")}}function Tt(n,d){1&n&&(t.j41(0,"td",30),t.EFF(1,"--"),t.k0s())}function _t(n,d){if(1&n){const e=t.RV6();t.j41(0,"tr",38)(1,"td",39),t.bIt("click",function(){const s=t.eBV(e).$implicit,a=t.XpG();return t.Njj(a.showLedgerDialog(s))}),t.EFF(2),t.nI1(3,"dateFormat"),t.nrm(4,"br"),t.EFF(5),t.nrm(6,"br"),t.EFF(7),t.k0s(),t.j41(8,"td",29),t.DNE(9,dt,2,1,"span",40)(10,gt,20,8,"div",41),t.k0s(),t.DNE(11,mt,3,11,"td",42)(12,yt,2,0,"td",42)(13,Lt,3,11,"td",42)(14,Tt,2,0,"td",42),t.k0s()}if(2&n){const e=d.$implicit,i=t.XpG();t.R7$(2),t.SpI(" ",t.i5U(3,9,e.createDate,i.settingData)," "),t.R7$(3),t.SpI(" ",e.transactionTitle," "),t.R7$(2),t.SpI(" (",e.transactionNo,") "),t.R7$(2),t.Y8G("ngForOf",e.transactionParticular),t.R7$(),t.Y8G("ngIf",e.transactionParticular.length>2),t.R7$(),t.Y8G("ngIf",null!=e.drAmount),t.R7$(),t.Y8G("ngIf",null==e.drAmount),t.R7$(),t.Y8G("ngIf",null!=e.crAmount),t.R7$(),t.Y8G("ngIf",null==e.crAmount)}}function vt(n,d){1&n&&(t.j41(0,"tr")(1,"th",59),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&n&&(t.R7$(2),t.SpI(" ",t.bMT(3,1,"NO_TRANSACTION_AVAILABLE")," "))}const At=[{path:"",component:(()=>{class n{constructor(e,i,s,a,g,l,D,E,m,L,c,h){this.commonService=e,this.dataStoreService=i,this.termConditionService=s,this.notificationService=a,this.syncDbService=g,this.route=l,this.syncApiService=D,this.translocoService=E,this.router=m,this.accountService=L,this.saleService=c,this.purchaseService=h,this.transactionList=[],this.filterObject={duration:1,minDate:"",maxDate:"",formatDateValue:""},this.accountListTrranslatedKey=f.DH.accountListForTranslations();let y=JSON.parse(f.SE.getCache("filter_list_data"));(0,o.A)(y)||Object.assign(this.filterObject,y),this.route.queryParams.subscribe(u=>{this.accountKey=u.accountKey}),this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(u=>{(0,p.A)(u,"syncProcessComplete"),this.fetchDBData()})}ngOnInit(){}fetchDBData(){var e=this;return(0,b.A)(function*(){e.syncApiService.fetchMultipleDbData(["product","account","ledger","filterSettingData","sale","purchase","expense","payment","paymentLink","journal","capitalTransaction","otherIncome","fundTransfer","saleReturn","purchaseReturn","taxTransaction","writeOff","receipt"],function(){var i=(0,b.A)(function*(s){var a=yield s.data;200===s.status&&(e.productList=a.product.filter(g=>0==g.enable),e.accountList=a.account,e.selectedAccount=a.account.find(g=>g.uniqueKey==e.accountKey),(0,p.A)(a,"filterSettingData")&&!(0,o.A)(a.filterSettingData)&&(e.settingData=a.filterSettingData),(0,p.A)(a,"ledger")&&(e.allLedgerList=a.ledger,e.allLedgerList=e.allLedgerList.filter(g=>g.createDate>=e.settingData.bookKeepingStartDate)),(0,p.A)(a,"sale")&&(e.saleInvoiceCollection=a.sale),(0,p.A)(a,"purchase")&&(e.purchaseInvoiceCollection=a.purchase),(0,p.A)(a,"expense")&&(e.expenseListCollection=a.expense),(0,p.A)(a,"payment")&&(e.paymentListCollection=a.payment),(0,p.A)(a,"paymentLink")&&(e.allPaymentLinkList=a.paymentLink),(0,p.A)(a,"journal")&&(e.journalCollectionList=a.journal),(0,p.A)(a,"capitalTransaction")&&(e.capitalTransactionList=a.capitalTransaction),(0,p.A)(a,"otherIncome")&&(e.otherIncomeList=a.otherIncome),(0,p.A)(a,"fundTransfer")&&(e.fundTransferList=a.fundTransfer),(0,p.A)(a,"saleReturn")&&(e.saleReturnList=a.saleReturn),(0,p.A)(a,"purchaseReturn")&&(e.purchaseReturnList=a.purchaseReturn),(0,p.A)(a,"taxTransaction")&&(e.taxTransactionCollection=a.taxTransaction),(0,p.A)(a,"writeOff")&&(e.allWriteOffList=a.writeOff),(0,p.A)(a,"receipt")&&(e.receiptCollection=a.receipt),e.prepareTransactionList(e.accountKey))});return function(s){return i.apply(this,arguments)}}())})()}prepareTransactionList(e){this.selectedAccount=e,this.openingBalance=0,this.closingBalance=0,this.balanceType="",this.openingBalanceType="",this.transactionList=[],this.showTransactionListLoader=!0,(0,R.A)(()=>{let i=this.accountList.find(a=>a.uniqueKeyOfAccount===this.selectedAccount),s=[];if((0,o.A)(i))this.showTransactionListLoader=!1;else{this.selectedAccountTitle=(0,o.A)(i)?"Account":i.nameOfAccount,(0,o.A)(this.allLedgerList)||(0,M.A)(this.allLedgerList,(l,D)=>{if(l.ledgerDetailList.some(m=>m.uniqueKeyAccount===this.selectedAccount)){let m=0,L=null,c=[],h=this.prepareLedgerTypeData(l.ledgerType,l.uniqueKeyLedger);(0,M.A)(l.ledgerDetailList,(y,u)=>{let O=this.accountList.find(P=>P.uniqueKeyOfAccount===y.uniqueKeyAccount);if((0,o.A)(O)||c.push({formatDate:f.DH.filterFormatDate(l.createDate),accountName:O.nameOfAccount,amount:y.amount,ledgerAmount:y.amount,drCrType:y.drCrType,clientAccountKey:O.uniqueKeyOfAccount,selectAccount:this.selectedAccount===y.uniqueKeyAccount,enable:O.enable}),this.selectedAccount===y.uniqueKeyAccount&&(m=this.selectedAccount===y.uniqueKeyAccount?y.amount:0,L=y.drCrType,!(0,o.A)(c)&&null!=L)){let P="";if(5==l.ledgerType||6==l.ledgerType){let x=c.find(Ct=>!Ct.selectAccount);(0,o.A)(x)||(P=x.clientAccountKey)}s.push({createDate:l.createDate,formatDate:f.DH.filterFormatDate(l.createDate),deviceCreateDate:l.deviceCreateDate,transactionNo:l.transactionNo,ledgerTypeUniqueKey:h,uniqueKeyOfAccount:this.selectedAccount,paymentClientAccountKey:P,ledgerType:l.ledgerType,title:f.DH.configItem(f.DH.ledgerAccountList(),"id",l.ledgerType),ledgerAmount:m,crAmount:2===L?m:null,drAmount:1===L?m:null,particular:c,transactionParticular:c,particularLength:c.length,uniqueKeyLedger:l.uniqueKeyLedger,crDr:L,narration:l.narration})}})}}),this.showTransactionListLoader=!1,s=(0,B.A)(s.map(l=>({...l,transactionParticular:(0,$.A)(l.transactionParticular,"clientAccountKey")})),["createDate","deviceCreateDate"],["asc","asc"]);let a=this.accountService.getOpeningBalanceData(i,this.allLedgerList,this.filterObject),g=this.accountService.getClosingBalanceData(i,this.allLedgerList,this.filterObject);this.openingBalance=a.openingBalanceAmt,this.closingBalance=g.closingBalanceAmt,this.openingBalanceType=a.crDrType,this.balanceType=g.crDrType,this.transactionList=s.filter(l=>{if(1==this.filterObject.duration||(0,o.A)(this.filterObject.minDate)||(0,o.A)(this.filterObject.maxDate)||l.formatDate>=this.filterObject.minDate&&l.formatDate<=this.filterObject.maxDate)return l}),this.transactionList.map(l=>{l.transactionTitle=(0,o.A)(this.accountListTrranslatedKey.find(D=>D.title==l.title))?l.title:this.translocoService.translate(this.accountListTrranslatedKey.find(D=>D.title==l.title).translated_key)})}})}applyFilter(e){var i=this;return(0,b.A)(function*(){Object.assign(i.filterObject,e),i.prepareTransactionList(i.accountKey)})()}clearAll(e){Object.assign(this.filterObject,e),this.prepareTransactionList(this.accountKey)}prepareLedgerTypeData(e,i){let s=null;switch(e){case 1:var a=this.saleInvoiceCollection.find(u=>u.uniqueKeyFKLedger===i);s=(0,o.A)(a)?null:a.uniqueKeySales;break;case 26:var g=this.saleReturnList.find(u=>u.uniqueKeyFKLedger===i);s=(0,o.A)(g)?null:g.uniqueKeySalesReturn;break;case 2:var l=this.purchaseInvoiceCollection.find(u=>u.uniqueKeyFKLedger===i);s=(0,o.A)(l)?null:l.uniqueKeyPurchase;break;case 27:var D=this.purchaseReturnList.find(u=>u.uniqueKeyFKLedger===i);s=(0,o.A)(D)?null:D.uniqueKeyPurchaseReturn;break;case 3:var E=this.expenseListCollection.find(u=>u.uniqueKeyFkLedgerEntity===i);s=(0,o.A)(E)?null:E.uniqueKeyExpensesEntity;break;case 5:var m=this.paymentListCollection.find(u=>u.uniqueKeyFKLedger===i);s=(0,o.A)(m)?null:m.uniqueKeyPayment;break;case 6:var L=this.paymentListCollection.find(u=>u.uniqueKeyFKLedger===i);s=(0,o.A)(L)?null:L.uniqueKeyPayment;break;case 10:var c=this.journalCollectionList.find(u=>u.uniqueKeyLedgerEntity===i);s=(0,o.A)(c)?null:c.uniqueKeyJournal;break;case 11:case 12:case 14:var h=this.taxTransactionCollection.find(u=>u.uniqueKeyLedgerEntry===i);s=(0,o.A)(h)?null:h.uniqueKeyTaxTransaction;break;case 28:var y=this.allWriteOffList.find(u=>u.uniqueKeyFKLedger===i);s=(0,o.A)(y)?null:y.uniqueKeyWriteOff}return s}showLedgerDialog(e){let i=!1,s="",a=!1,g="",l=!1,E="",m=[],L=[];if([7,8,15,16,17,18,19,20,21,22,23,24,25,29,30,31,32,33,34,35,36,37,38].includes(e.ledgerType)){if(i=!0,22!=e.ledgerType){let c=this.capitalTransactionList.find(h=>h.uniqueKeyLedgerEntry==e.uniqueKeyLedger);(0,o.A)(c)||(s="/capital-transaction/edit-transaction/"+f.DH.configItem(f.DH.fetchTransactionList(),"id",c.capitalTransactionType,"key")+"/"+c.uniqueKeyCapitalTransaction,E=c.uniqueKeyCapitalTransaction)}else if(22==e.ledgerType){let c=this.otherIncomeList.find(h=>h.uniqueKeyLedgerEntry==e.uniqueKeyLedger);(0,o.A)(c)||(s="/capital-transaction/edit-transaction/"+f.DH.configItem(f.DH.fetchTransactionList(),"id",c.otherIncomeTransactionType,"key")+"/"+c.uniqueKeyOtherIncomeTransaction,E=c.uniqueKeyOtherIncomeTransaction)}}else if(4==e.ledgerType){a=!0;let c=this.fundTransferList.find(h=>h.uniqueKeyLedgerEntity==e.uniqueKeyLedger);(0,o.A)(c)||(g=`cash-bank-transfer/${c.uniqueKeyBankCashTransferEntity}/edit`,E=c.uniqueKeyBankCashTransferEntity)}else if([5,6].includes(e.ledgerType))l=!0,this.paymentListCollection.find(h=>h.uniqueKeyFKLedger==e.uniqueKeyLedger);else if([1].includes(e.ledgerType)){if(this.saleData=this.saleInvoiceCollection.find(c=>c.uniqueKeyFKLedger===e.uniqueKeyLedger),!(0,o.A)(this.saleData)){let c=this.saleReturnList.filter(h=>!h.invoiceProductAvailable&&h.uniqueFKSaleEntity==this.saleData.uniqueKeySales&&h.uniqueKeyFKAccount==this.saleData.uniqueKeyFKAccount);m=this.saleData.invoiceGenerated?this.saleService.getSaleReturnProducts(this.saleData.uniqueKeyFKAccount,this.saleReturnList,this.saleData.uniqueKeySales):c}}else if([26].includes(e.ledgerType))this.saleReturnData=this.saleReturnList.find(c=>c.uniqueKeyFKLedger===e.uniqueKeyLedger);else if([2].includes(e.ledgerType)){if(this.purchaseData=this.purchaseInvoiceCollection.find(c=>c.uniqueKeyFKLedger===e.uniqueKeyLedger),!(0,o.A)(this.purchaseData)){let c=this.purchaseReturnList.filter(h=>!h.invoiceProductAvailable&&h.uniqueFKPurchaseEntity==this.purchaseData.uniqueKeyPurchase&&h.uniqueKeyFKAccount==this.purchaseData.uniqueKeyFKAccount);L=this.purchaseData.invoiceGenerated?this.purchaseService.getPurchaseReturnProducts(this.purchaseData.uniqueKeyFKAccount,this.purchaseReturnList,this.purchaseData.uniqueKeyPurchase):c}}else[27].includes(e.ledgerType)?this.purchaseReturnData=this.purchaseReturnList.find(c=>c.uniqueKeyFKLedger===e.uniqueKeyLedger):[9].includes(e.ledgerType)&&(this.depreciationData=this.capitalTransactionList.find(c=>c.uniqueKeyLedgerEntry==e.uniqueKeyLedger));this.commonService.showDialog(Y,{editType:"account-list",transactionNo:e.transactionNo,ledgerTypeUniqueKey:i||a?E:e.ledgerTypeUniqueKey,ledgerType:e.ledgerType,ledgerList:e.particular,paymentClientAccountKey:l?"":e.paymentClientAccountKey,isCapitalTransaction:i,isEditDeleteTransaction:i,ledgerWithoutClient:a,editTransactionUrl:s,ledgerEditUrl:g,isSaleEditedDeleted:!!(0,o.A)(m),isSaleInvDeleted:!!(0,o.A)(m),isPurchaseEditedDeleted:!!(0,o.A)(L),isPurchaseInvDeleted:!!(0,o.A)(L),isPaymentEditedDeleted:!0,isExpenseEditOrDeleted:!0},c=>{(0,p.A)(c,"deleteLedger")&&c.deleteLedger&&this.fetchDBData()},{panelClass:"ng-material-dialog"})}static#t=this.\u0275fac=function(i){return new(i||n)(t.rXU(W.h),t.rXU(H.V),t.rXU(z.r),t.rXU(Q.J),t.rXU(Z.P),t.rXU(A.nX),t.rXU(tt.P),t.rXU(v.JO),t.rXU(A.Ix),t.rXU(et.D),t.rXU(nt.x),t.rXU(it.z))};static#e=this.\u0275cmp=t.VBU({type:n,selectors:[["app-view-ledger"]],decls:57,vars:35,consts:[["header",""],["scroll",""],["container",""],[1,"container","content"],[1,"lw-account-headline-color"],[1,"row","m-0"],[1,"col-6","ps-0"],[1,"mb-0"],[1,"mb-2"],[3,"newFilterEvent","clearFilterEvent","entityType","showDurationList"],["class","block-loader-pl",4,"ngIf"],[1,""],[1,"list-acc-main"],[1,"ac-nav--secondary"],[1,"invoice-list-table","tab-unpaid"],[1,"row","pro_row_2"],[1,"col-6"],[1,"lightText"],[1,"product_heading_2"],[4,"ngIf"],[1,"col-6","text-end"],[1,"lightText",2,"text-align","right"],[1,"product_heading_2",2,"text-align","right"],[1,"ng-star-inserted"],[1,"bg_white",2,"padding-bottom","7%"],[1,"tab-content"],[1,"table","table-bordered","table-lg","mb-0"],[1,"table-head"],[1,"account-date"],[1,"account-particular"],[1,"account-dr"],[3,"items"],[1,"table","table-bordered","table-lg","mb-4"],["class","clickable",4,"ngFor","ngForOf"],[1,"block-loader-pl"],[1,"load-report-main"],["role","status",1,"spinner-border","text-primary"],[1,"sr-only"],[1,"clickable"],[1,"account-date",3,"click"],[4,"ngFor","ngForOf"],["id","exp-list-lost","class","dropdown dropdown_drop",4,"ngIf"],["class","account-dr",4,"ngIf"],["id","exp-list-lost",1,"dropdown","dropdown_drop"],["type","button","id","dropdownMenuButton","data-bs-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle"],[1,"material-icons","custom-icons","list-details-icon"],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu"],[1,"row"],[1,"col-sm-4","drop-table"],["id","datatable","role","grid","aria-describedby","datatable_info",1,"table-drop",2,"cursor","pointer"],["role","row",1,"mainsec-product-drop"],[1,"exp-type"],[1,"menu-arrow"],["role","row",4,"ngFor","ngForOf"],["role","row"],["class","sorting_1 exp-product-drop",4,"ngIf"],["class","exp-product-drop",4,"ngIf"],[1,"sorting_1","exp-product-drop"],[1,"exp-product-drop"],["colspan","5",1,"text-center"]],template:function(i,s){if(1&i){const a=t.RV6();t.j41(0,"div",3)(1,"div",4)(2,"div",5)(3,"div",6)(4,"h4",7),t.EFF(5),t.k0s()()(),t.j41(6,"div",8)(7,"app-list-filter",9),t.bIt("newFilterEvent",function(l){return t.eBV(a),t.Njj(s.applyFilter(l))})("clearFilterEvent",function(l){return t.eBV(a),t.Njj(s.clearAll(l))}),t.k0s()(),t.DNE(8,st,4,0,"div",10),t.j41(9,"div",11)(10,"div",12)(11,"div",13)(12,"div",14)(13,"div",15)(14,"div",16)(15,"div")(16,"div",17),t.EFF(17),t.nI1(18,"transloco"),t.k0s(),t.j41(19,"div",18),t.EFF(20),t.nI1(21,"CurrencyPipe"),t.DNE(22,ot,2,1,"span",19),t.k0s()()(),t.j41(23,"div",20)(24,"div",21),t.EFF(25),t.nI1(26,"transloco"),t.k0s(),t.j41(27,"div",22)(28,"span",23),t.EFF(29),t.nI1(30,"CurrencyPipe"),t.DNE(31,ct,2,1,"span",19),t.k0s()()()(),t.j41(32,"div",24)(33,"div",25)(34,"table",26)(35,"thead",27,0)(37,"tr")(38,"th",28),t.EFF(39),t.nI1(40,"transloco"),t.k0s(),t.j41(41,"th",29),t.EFF(42),t.nI1(43,"transloco"),t.k0s(),t.j41(44,"th",30),t.EFF(45),t.nI1(46,"transloco"),t.k0s(),t.j41(47,"th",30),t.EFF(48),t.nI1(49,"transloco"),t.k0s()()()(),t.j41(50,"virtual-scroller",31,1)(52,"table",32)(53,"tbody",null,2),t.DNE(55,_t,15,12,"tr",33)(56,vt,4,3,"tr",19),t.k0s()()()()()()()()()()()}if(2&i){const a=t.sdS(51);t.R7$(5),t.SpI(" ",s.selectedAccountTitle," "),t.R7$(2),t.Y8G("entityType","accounts")("showDurationList",!0),t.R7$(),t.Y8G("ngIf",s.showTransactionListLoader),t.R7$(9),t.JRh(t.bMT(18,17,"OPENING_BALANCE")),t.R7$(3),t.SpI(" ",t.i5U(21,19,s.openingBalance,s.settingData)," "),t.R7$(2),t.Y8G("ngIf",0!=s.openingBalance),t.R7$(3),t.JRh(t.bMT(26,22,"CLOSING_BALANCE")),t.R7$(4),t.SpI(" ",t.i5U(30,24,s.closingBalance,s.settingData)," "),t.R7$(2),t.Y8G("ngIf",0!=s.closingBalance),t.R7$(8),t.JRh(t.bMT(40,27,"DATE")),t.R7$(3),t.JRh(t.bMT(43,29,"PARTICULAR")),t.R7$(3),t.JRh(t.bMT(46,31,"DR_LABEL")),t.R7$(3),t.JRh(t.bMT(49,33,"CR_LABEL")),t.R7$(2),t.Y8G("items",s.transactionList),t.R7$(5),t.Y8G("ngForOf",a.viewPortItems),t.R7$(),t.Y8G("ngIf",0==s.transactionList.length)}},dependencies:[T.Sq,T.bT,at.i,k.Bg,rt.o,v.Kj,U.a],styles:[".exp-type[_ngcontent-%COMP%]{background:#717c91!important;color:#fff!important;font-size:12px}@media screen and (min-width: 1200px){.container[_ngcontent-%COMP%]{max-width:1283px}}"]})}return n})(),canActivate:[C.q]}];let Dt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[A.iI.forChild(At),A.iI]})}return n})(),Et=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.$C({type:n});static#n=this.\u0275inj=t.G2t({imports:[T.MD,_.C,v.Q8,K.C,I.X,k.y1,Dt]})}return n})()},50074:(j,F,r)=>{r.d(F,{G:()=>v});var T=r(54438);let v=(()=>{class _{static#t=this.\u0275fac=function(A){return new(A||_)};static#e=this.\u0275mod=T.$C({type:_});static#n=this.\u0275inj=T.G2t({})}return _})()}}]);"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[9414],{34262:(d,c,t)=>{t.d(c,{X:()=>m});var s=t(60177),a=t(89417),e=t(61997),i=t(92314),o=t(75263),_=t(50074),r=t(75351),n=t(7180),l=t(82798),u=t(54438);let m=(()=>{class E{static#t=this.\u0275fac=function(D){return new(D||E)};static#_=this.\u0275mod=u.$C({type:E});static#n=this.\u0275inj=u.G2t({imports:[s.MD,a.YN,a.X1,e.C,i.X6,_.G,r.hM,o.ZG,n.Q8,l.Ve]})}return E})()},36725:(d,c,t)=>{t.d(c,{T:()=>e});var s=t(65113),a=t(54438);let e=(()=>{class i{check(_,r){let n=(0,s.A)(r)?r:parseInt(String(r));if((0,s.A)(n))return String(_).match(new RegExp(/^\d*\.?\d*$/));if(isNumber(n)&&n<=0)return String(_).match(new RegExp(/^-?\d+$/));if(isNumber(n)&&n>0){var l="^\\s*((\\d+(\\.\\d{0,"+n+"})?)|((\\d*(\\.\\d{1,"+n+"}))))\\s*$";return String(_).match(new RegExp(l))}return String(_)}constructor(_){this.el=_,this.specialKeys=["Backspace","Tab","End","Home","ArrowLeft","ArrowRight","Delete"]}onKeyDown(_){if(-1!==this.specialKeys.indexOf(_.key))return;let n=this.el.nativeElement.value.concat(_.key);n&&!this.check(n,this.decimals)&&_.preventDefault()}static#t=this.\u0275fac=function(r){return new(r||i)(a.rXU(a.aKT))};static#_=this.\u0275dir=a.FsC({type:i,selectors:[["","numeric",""]],hostBindings:function(r,n){1&r&&a.bIt("keydown",function(u){return n.onKeyDown(u)})},inputs:{decimals:"decimals"}})}return i})()},50074:(d,c,t)=>{t.d(c,{G:()=>a});var s=t(54438);let a=(()=>{class e{static#t=this.\u0275fac=function(_){return new(_||e)};static#_=this.\u0275mod=s.$C({type:e});static#n=this.\u0275inj=s.G2t({})}return e})()},97463:(d,c,t)=>{t.d(c,{R:()=>i});var s=t(60177),a=t(7180),e=t(54438);let i=(()=>{class o{static#t=this.\u0275fac=function(n){return new(n||o)};static#_=this.\u0275mod=e.$C({type:o});static#n=this.\u0275inj=e.G2t({imports:[s.MD,a.Q8]})}return o})()}}]);(()=>{"use strict";var e,p={},l={};function r(e){var a=l[e];if(void 0!==a)return a.exports;var t=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,1838,1436],()=>r(51436));return r.O(e)},e=[],r.O=(a,t,s,n)=>{if(!t){var u=1/0;for(c=0;c<e.length;c++){for(var[t,s,n]=e[c],i=!0,f=0;f<t.length;f++)(!1&n||u>=n)&&Object.keys(r.O).every(_=>r.O[_](t[f]))?t.splice(f--,1):(i=!1,n<u&&(u=n));if(i){e.splice(c--,1);var o=s();void 0!==o&&(a=o)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,s,n]},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((a,t)=>(r.f[t](e,a),a),[])),r.u=e=>e+"."+{1436:"2639f534b6b97756",1838:"ff2d609baf81ac0c",1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5358:"b07617e082274e68",7586:"368ceba96ee1b551"}[e]+".js",r.miniCssF=e=>{},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={9458:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var t=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=t.push.bind(t);t.push=n=>{var[c,u,i]=n;for(var f in u)r.o(u,f)&&(r.m[f]=u[f]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,1838,1436].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,p={},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,8182],()=>r(48182));return r.O(e)},e=[],r.O=(t,a,s,n)=>{if(!a){var f=1/0;for(c=0;c<e.length;c++){for(var[a,s,n]=e[c],i=!0,u=0;u<a.length;u++)(!1&n||f>=n)&&Object.keys(r.O).every(_=>r.O[_](a[u]))?a.splice(u--,1):(i=!1,n<f&&(f=n));if(i){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e,t),t),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5358:"b07617e082274e68",7586:"368ceba96ee1b551",8182:"e68a29daed05423c"}[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={9469:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var a=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=a.push.bind(a);a.push=n=>{var[c,f,i]=n;for(var u in f)r.o(f,u)&&(r.m[u]=f[u]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,8182].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,p={},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,8182],()=>r(48182));return r.O(e)},e=[],r.O=(t,a,s,n)=>{if(!a){var f=1/0;for(c=0;c<e.length;c++){for(var[a,s,n]=e[c],i=!0,u=0;u<a.length;u++)(!1&n||f>=n)&&Object.keys(r.O).every(_=>r.O[_](a[u]))?a.splice(u--,1):(i=!1,n<f&&(f=n));if(i){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e,t),t),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5358:"b07617e082274e68",7586:"368ceba96ee1b551",8182:"e68a29daed05423c"}[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={9506:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var a=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=a.push.bind(a);a.push=n=>{var[c,f,i]=n;for(var u in f)r.o(f,u)&&(r.m[u]=f[u]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,8182].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,p={},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,8182],()=>r(48182));return r.O(e)},e=[],r.O=(t,a,s,n)=>{if(!a){var f=1/0;for(c=0;c<e.length;c++){for(var[a,s,n]=e[c],i=!0,u=0;u<a.length;u++)(!1&n||f>=n)&&Object.keys(r.O).every(_=>r.O[_](a[u]))?a.splice(u--,1):(i=!1,n<f&&(f=n));if(i){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e,t),t),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5358:"b07617e082274e68",7586:"368ceba96ee1b551",8182:"e68a29daed05423c"}[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={958:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var a=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=a.push.bind(a);a.push=n=>{var[c,f,i]=n;for(var u in f)r.o(f,u)&&(r.m[u]=f[u]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,8182].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,b={89632:(e,a,r)=>{function _(s,f,A,c,v,m,h){try{var y=s[m](h),i=y.value}catch(x){return void A(x)}y.done?f(i):Promise.resolve(i).then(c,v)}var t=r(72036),p=r(83703),l=r(73502);self.addEventListener("message",function(){var s=function u(s){return function(){var f=this,A=arguments;return new Promise(function(c,v){var m=s.apply(f,A);function h(i){_(m,c,v,h,y,"next",i)}function y(i){_(m,c,v,h,y,"throw",i)}h(void 0)})}}(function*(f){o(f.data).then(c=>{postMessage(c),self.close()})});return function(f){return s.apply(this,arguments)}}());const o=function(s){return new Promise((f,A)=>{const c=s.expense,v=s.clientPaymentMap,m=s.paymentLinkMap,h=s.accountCollection;if((0,t.A)(c))f(c);else{const y=c.editData,i=c.supplier;let x=!!(0,t.A)(i)||h.some(d=>(0,t.A)(y.uniqueKeyClientEntity)||!(0,t.A)(d.clientEntity)&&d.clientEntity.uniqueKeyClient==y.uniqueKeyClientEntity&&13==d.accountType);const O=(0,t.A)(i)||(0,t.A)(i.accountOpeningBalance)||1!=i.accountOpeningBalance.crDrType?null:i.accountOpeningBalance.openingBalance,g=(0,t.A)(i)?[]:m.get(i.uniqueKeyOfAccount)||[],w=(0,t.A)(g)?0:(0,l.ut)((0,p.A)(g.filter(d=>!(0,t.A)(i)&&(0,t.A)(d.uniqueKeyFKPaymentEntity)&&d.uniqueKeyLinkWithAccountEntity!=y.uniqueKeyExpensesEntity&&2==d.linkType),"amount"),2),P=(0,t.A)(i)||(0,t.A)(i.clientEntity)?[]:v.get(i.uniqueKeyFKOtherTable)||[],K=!!(((0,t.A)(P)?0:(0,l.ut)((0,p.A)(P,"amount"),2))>((0,t.A)(g)?0:(0,l.ut)((0,p.A)(g.filter(d=>!(0,t.A)(i)&&!(0,t.A)(d.uniqueKeyFKPaymentEntity)),"amount"),2))||O>c.isOpenBalLinkAmt+w&&x);f({...c,supplierAdvancePaymentExist:K,isActionWorker:!0})}})}}},k={};function n(e){var a=k[e];if(void 0!==a)return a.exports;var r=k[e]={id:e,loaded:!1,exports:{}};return b[e].call(r.exports,r,r.exports,n),r.loaded=!0,r.exports}n.m=b,n.x=()=>{var e=n.O(void 0,[2036,5358,2359,1981,5205,3502],()=>n(89632));return n.O(e)},e=[],n.O=(a,r,_,u)=>{if(!r){var p=1/0;for(t=0;t<e.length;t++){for(var[r,_,u]=e[t],l=!0,o=0;o<r.length;o++)(!1&u||p>=u)&&Object.keys(n.O).every(m=>n.O[m](r[o]))?r.splice(o--,1):(l=!1,u<p&&(p=u));if(l){e.splice(t--,1);var s=_();void 0!==s&&(a=s)}}return a}u=u||0;for(var t=e.length;t>0&&e[t-1][2]>u;t--)e[t]=e[t-1];e[t]=[r,_,u]},n.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return n.d(a,{a}),a},n.d=(e,a)=>{for(var r in a)n.o(a,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce((a,r)=>(n.f[r](e,a),a),[])),n.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",3502:"3c878c97ff0a87d9",5205:"d10efc9ae5058a53",5358:"b07617e082274e68"}[e]+".js",n.miniCssF=e=>{},n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;n.tt=()=>(void 0===e&&(e={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),n.tu=e=>n.tt().createScriptURL(e),n.p="",(()=>{var e={9632:1};n.f.i=(u,t)=>{e[u]||importScripts(n.tu(n.p+n.u(u)))};var r=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],_=r.push.bind(r);r.push=u=>{var[t,p,l]=u;for(var o in p)n.o(p,o)&&(n.m[o]=p[o]);for(l&&l(n);t.length;)e[t.pop()]=1;_(u)}})(),(()=>{var e=n.x;n.x=()=>Promise.all([2036,5358,2359,1981,5205,3502].map(n.e,n)).then(e)})(),n.x()})();"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[9651],{73502:(D,h,k)=>{k.d(h,{GY:()=>g,ut:()=>i});var _=k(72036);function i(t,a){if(Number.isNaN(t)||Number.isNaN(a)||a<0||typeof a>"u")return t;var o=a||0,l=Math.pow(10,o),f=+(o?t*l:t).toFixed(8),c=Math.floor(f),n=f-c,s=n>.5-1e-8&&n<.5+1e-8?c%2==0?c:c+1:Math.round(f);return o?s/l:s}function g(t,a){return(0,_.A)(t)||(0,_.A)(a)?[]:t.sort((o,l)=>{if("Not Mentioned"!=o[a]&&!(0,_.A)(o[a])&&!(0,_.A)(l[a]))return String.prototype.localeCompare.call(o[a].toLowerCase(),l[a].toLowerCase())})}k(97586)},36728:(D,h,k)=>{k.d(h,{A:()=>i});var _=k(74620);const i=(0,k(80816).A)(_.A)},72662:(D,h,k)=>{k.d(h,{A:()=>R});const R=(0,k(40318).A)()},74620:(D,h,k)=>{k.d(h,{A:()=>i});var _=k(72662),Q=k(14429);const i=function R(E,p){return E&&(0,_.A)(E,p,Q.A)}},80816:(D,h,k)=>{k.d(h,{A:()=>R});var _=k(31287);const R=function Q(i,E){return function(p,S){if(null==p)return p;if(!(0,_.A)(p))return i(p,S);for(var q=p.length,m=E?q:-1,P=Object(p);(E?m--:++m<q)&&!1!==S(P[m],m,P););return p}}},40318:(D,h,k)=>{k.d(h,{A:()=>Q});const Q=function _(R){return function(i,E,p){for(var S=-1,q=Object(i),m=p(i),P=m.length;P--;){var g=m[R?P:++S];if(!1===E(q[g],g,q))break}return i}}}}]);(()=>{"use strict";var e,p={},l={};function r(e){var a=l[e];if(void 0!==a)return a.exports;var t=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(t.exports,t,t.exports,r),t.loaded=!0,t.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,5205,3502,8304],()=>r(28304));return r.O(e)},e=[],r.O=(a,t,s,n)=>{if(!t){var u=1/0;for(c=0;c<e.length;c++){for(var[t,s,n]=e[c],i=!0,f=0;f<t.length;f++)(!1&n||u>=n)&&Object.keys(r.O).every(d=>r.O[d](t[f]))?t.splice(f--,1):(i=!1,n<u&&(u=n));if(i){e.splice(c--,1);var _=s();void 0!==_&&(a=_)}}return a}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[t,s,n]},r.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return r.d(a,{a}),a},r.d=(e,a)=>{for(var t in a)r.o(a,t)&&!r.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((a,t)=>(r.f[t](e,a),a),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",3502:"3c878c97ff0a87d9",5205:"d10efc9ae5058a53",5358:"b07617e082274e68",8304:"52be89bfdd058d0d"}[e]+".js",r.miniCssF=e=>{},r.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={9682:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var t=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=t.push.bind(t);t.push=n=>{var[c,u,i]=n;for(var f in u)r.o(u,f)&&(r.m[f]=u[f]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,5205,3502,8304].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,I={79690:(e,a,n)=>{var h=n(10467),u=n(72036),i=n(83703),o=n(73502);self.addEventListener("message",function(){var s=(0,h.A)(function*(c){let d=c.data;if("sale-order"==d["list-Type"])if((0,u.A)(d.chunkInvOrderData))self.close();else{let y=0;for(var _=0;_<=d.chunkInvOrderData.length;_++){let l=d.chunkInvOrderData[_],O=y===d.chunkInvOrderData.length-1;y++,(0,u.A)(l)||b(l,d).then(S=>{postMessage({saleOrderList:S,lastIteration:O}),self.close()})}}else self.close()});return function(c){return s.apply(this,arguments)}}());const b=function(s,c){return new Promise((d,_)=>{if((0,u.A)(s))return void d([]);const y=new Map(c.productCollection.map(r=>[r.uniqueKeyProduct,r])),l=new Map,O=new Map,S=new Map;c.saleMapOrderCollection.forEach(r=>{l.has(r.uniqueOrderLineItemId)||l.set(r.uniqueOrderLineItemId,[]),l.get(r.uniqueOrderLineItemId).push(r),O.has(r.uniqueSaleOrderId)||O.set(r.uniqueSaleOrderId,[]),O.get(r.uniqueSaleOrderId).push(r)}),c.accountCollection.forEach(r=>{(0,u.A)(r.uniqueKeyFKOtherTable)||(S.has(r.uniqueKeyFKOtherTable)||S.set(r.uniqueKeyFKOtherTable,[]),S.get(r.uniqueKeyFKOtherTable).push(r))}),d(s.map(r=>{const D=r.orderProductList.map(p=>{const g=y.get(p.uniqueFKProduct),E=l.get(p.uniqueKeySOProdEntity)||[],K=(0,i.A)(E,"soldQuantity");return{uniqueKeySOProdEntity:p.uniqueKeySOProdEntity,productName:g?g.productName:"",productUnit:g?g.unit:"",order:p.qty,pending:(0,o.ut)(p.qty-K,2),isCompleteSold:K>=p.qty}}),C=O.get(r.uniqueSaleOrderId),k=(0,u.A)(C)?0:(0,i.A)(C,"soldQuantity");let m,v=D.some(p=>!p.isCompleteSold)?1:2;if(4===r.orderStatus?v=2:5===r.orderStatus&&(v=3),1===c.saleOrderTabId&&1===v?m=0===k?1:2:2===c.saleOrderTabId&&2===v?m=4===r.orderStatus?r.orderStatus:3:3===c.saleOrderTabId&&(1===v?m=0===k?1:2:2===v?m=4===r.orderStatus?r.orderStatus:3:3===v&&(m=5===r.orderStatus?r.orderStatus:0)),void 0!==m)return f({...r,productDetails:D,updateStatus:m},c,S)}).filter(Boolean))})},f=function(s,c,d){const _=d.get(s.uniqueFKClient)||[],y=0==c.settingData.dateFormat?"DD-MM-YYYY":"MM-DD-YYYY";return{uniqueSaleOrderId:s.uniqueSaleOrderId,saleOrderNumber:s.saleOrderNumber,customerName:(0,u.A)(_)?"":_[0].nameOfAccount,uniqueKeyOfAccount:(0,u.A)(_)?"":_[0].uniqueKeyOfAccount,orderStatus:s.updateStatus,formatStatus:(0,o.OO)(s.updateStatus),createDate:s.createDate,formattedDate:(0,o.AB)(s.createDate,y),deviceCreatedDate:s.deviceCreatedDate,formatDate:(0,o.AB)(s.createDate),productDetails:s.productDetails,amount:s.amount,notes:s.notes,isEdited:!0,isSoldQtyIsGreater:s.productDetails.some(l=>!(0,o.RL)(l.pending))}}}},M={};function t(e){var a=M[e];if(void 0!==a)return a.exports;var n=M[e]={id:e,loaded:!1,exports:{}};return I[e].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}t.m=I,t.x=()=>{var e=t.O(void 0,[2036,5358,2359,1981,7586,6869],()=>t(79690));return t.O(e)},e=[],t.O=(a,n,h,u)=>{if(!n){var o=1/0;for(i=0;i<e.length;i++){for(var[n,h,u]=e[i],b=!0,f=0;f<n.length;f++)(!1&u||o>=u)&&Object.keys(t.O).every(l=>t.O[l](n[f]))?n.splice(f--,1):(b=!1,u<o&&(o=u));if(b){e.splice(i--,1);var s=h();void 0!==s&&(a=s)}}return a}u=u||0;for(var i=e.length;i>0&&e[i-1][2]>u;i--)e[i]=e[i-1];e[i]=[n,h,u]},t.n=e=>{var a=e&&e.__esModule?()=>e.default:()=>e;return t.d(a,{a}),a},t.d=(e,a)=>{for(var n in a)t.o(a,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:a[n]})},t.f={},t.e=e=>Promise.all(Object.keys(t.f).reduce((a,n)=>(t.f[n](e,a),a),[])),t.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5358:"b07617e082274e68",6869:"ef8a4aa1d586347d",7586:"368ceba96ee1b551"}[e]+".js",t.miniCssF=e=>{},t.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),t.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;t.tt=()=>(void 0===e&&(e={createScriptURL:a=>a},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),t.tu=e=>t.tt().createScriptURL(e),t.p="",(()=>{var e={9690:1};t.f.i=(u,i)=>{e[u]||importScripts(t.tu(t.p+t.u(u)))};var n=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],h=n.push.bind(n);n.push=u=>{var[i,o,b]=u;for(var f in o)t.o(o,f)&&(t.m[f]=o[f]);for(b&&b(t);i.length;)e[i.pop()]=1;h(u)}})(),(()=>{var e=t.x;t.x=()=>Promise.all([2036,5358,2359,1981,7586,6869].map(t.e,t)).then(e)})(),t.x()})();"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[971],{20971:(Ci,G,A)=>{A.r(G),A.d(G,{PurchaseReturnModule:()=>Pi});var j=A(60177),S=A(75743),O=A(10467),l=A(98808),T=A(89417),H=A(99172),K=A(96354),D=A(97586),et=A(57774),it=A(77185),nt=A(80236),at=A(49045),ot=A(90265),st=A(56871),Y=A(80960),E=A(66689),B=A(81817),d=A(72036),F=A(49671),b=A(87372),P=A(42969),ct=A(33446),L=A(83703),R=A(65113),U=A(25221),_=A(67640),dt=A(6165),rt=A(20404),ut=A(39274),V=A(96058),lt=A(12180),mt=A(76475),X=A(20595),pt=A(94523),ht=A(30978),t=A(54438),At=A(7004),ft=A(11869),vt=A(56765),yt=A(95289),Et=A(52237),Dt=A(26297),gt=A(39866),It=A(4922),Ft=A(39477),Tt=A(19993),_t=A(93832),xt=A(4300),q=A(7180),Lt=A(60578),bt=A(30768),Rt=A(36725),w=A(92314),M=A(14518),Pt=A(86600),Ct=A(35036),Ot=A(52953),kt=A(31079);const jt=["invoiceAddEditForm"],J=()=>({}),W=r=>({show:r}),Q=r=>({active:r}),St=r=>({"sale-return-bg":r}),z=(r,h,e)=>[r,h,!0,e,!1],Kt=()=>({standalone:!0}),N=r=>({"lw-disabled-block":r}),Nt=r=>({"me-0":r}),qt=r=>({"mb-1":r});function wt(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",192)(1,"select",193),t.bIt("change",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.updateDiscountSetting(i.target.value))}),t.j41(2,"option",194),t.EFF(3),t.nI1(4,"transloco"),t.nI1(5,"transloco"),t.k0s(),t.j41(6,"option",194),t.EFF(7),t.nI1(8,"transloco"),t.nI1(9,"transloco"),t.k0s()()()}if(2&r){const e=t.XpG();t.R7$(2),t.Y8G("selected",1==e.discountTypeSetting)("value",1),t.R7$(),t.Lme(" ",t.bMT(4,8,"DIS_LABEL")," (",t.bMT(5,10,"ON_ITEM"),")"),t.R7$(3),t.Y8G("selected",0==e.discountTypeSetting)("value",0),t.R7$(),t.Lme(" ",t.bMT(8,12,"DIS_LABEL")," (",t.bMT(9,14,"ON_BILL"),") ")}}function Mt(r,h){1&r&&(t.j41(0,"div")(1,"p",195),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.JRh(t.bMT(3,1,"NO_DISCOUNT_FOUND")))}function $t(r,h){1&r&&t.nrm(0,"span",216)}function Gt(r,h){1&r&&(t.j41(0,"span",217),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.SpI(" ",t.bMT(2,1,"DISABLED")," "))}function Ht(r,h){if(1&r&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&r){const e=h.$implicit;t.R7$(),t.SpI(" ",e.taxValue," % ")}}function Yt(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",202)(1,"div",203)(2,"div",204),t.EFF(3),t.k0s(),t.j41(4,"div",205)(5,"button",206),t.bIt("click",function(){const i=t.eBV(e).$implicit,o=t.XpG(2);return t.Njj(o.editTaxDiscount(i))}),t.j41(6,"span",207),t.EFF(7,"edit"),t.k0s(),t.EFF(8," Edit "),t.k0s()()(),t.j41(9,"div",61),t.nrm(10,"span",208),t.j41(11,"span",209),t.EFF(12),t.nI1(13,"transloco"),t.nI1(14,"transloco"),t.k0s(),t.nrm(15,"span",210),t.j41(16,"span",211),t.EFF(17),t.nI1(18,"transloco"),t.nI1(19,"transloco"),t.k0s(),t.DNE(20,$t,1,0,"span",212)(21,Gt,3,3,"span",213),t.k0s(),t.j41(22,"div",214),t.DNE(23,Ht,2,1,"span",215),t.nI1(24,"jsonParse"),t.k0s()()}if(2&r){const e=h.$implicit;t.R7$(3),t.SpI(" ",e.nameOfAccount," "),t.R7$(9),t.SpI(" ",0==e.taxDetailEntity.taxInclExcl?t.bMT(13,6,"EXCLUSIVE"):t.bMT(14,8,"INCLUSIVE")," "),t.R7$(5),t.SpI(" ",0==e.taxDetailEntity.taxApplicableOn?t.bMT(18,10,"ON_BILL"):t.bMT(19,12,"ON_ITEM")," "),t.R7$(3),t.Y8G("ngIf",1==e.enable),t.R7$(),t.Y8G("ngIf",1==e.enable),t.R7$(2),t.Y8G("ngForOf",t.bMT(24,14,e.taxDetailEntity.defaultTaxes))}}function Bt(r,h){1&r&&(t.j41(0,"div",218),t.nrm(1,"img",219),t.j41(2,"h6"),t.EFF(3),t.nI1(4,"transloco"),t.k0s()()),2&r&&(t.R7$(3),t.SpI("",t.bMT(4,1,"NOT_ADDED_ANY_TAXES"),"."))}function Ut(r,h){if(1&r&&(t.j41(0,"div",35)(1,"div",196)(2,"h4",25)(3,"a",197),t.EFF(4),t.nI1(5,"transloco"),t.j41(6,"span",27),t.EFF(7,"expand_more"),t.k0s()()()(),t.j41(8,"div",198)(9,"div",199),t.DNE(10,Yt,25,16,"div",200)(11,Bt,5,3,"div",201),t.k0s()()()),2&r){const e=t.XpG();t.R7$(4),t.SpI(" ",t.bMT(5,3,"TAX_LIST_SETTING")," "),t.R7$(6),t.Y8G("ngForOf",e.taxAccountList),t.R7$(),t.Y8G("ngIf",0==e.taxAccountList.length)}}function Vt(r,h){1&r&&(t.j41(0,"span",234)(1,"a",235),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.JRh(t.bMT(3,1,"PURCHASE_RETURN")))}function Xt(r,h){1&r&&t.nrm(0,"br")}function Jt(r,h){1&r&&(t.j41(0,"span",236)(1,"a",235),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.JRh(t.bMT(3,1,"WITHOUT_LINE_ITEMS")))}function Wt(r,h){1&r&&t.nrm(0,"br")}function Qt(r,h){1&r&&(t.j41(0,"span",237)(1,"a"),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.JRh(t.bMT(3,1,"PARTIAL_PAID")))}function zt(r,h){1&r&&(t.j41(0,"span",238)(1,"a"),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.JRh(t.bMT(3,1,"PAID_LABEL")))}function Zt(r,h){1&r&&(t.j41(0,"span",239)(1,"a"),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r&&(t.R7$(2),t.JRh(t.bMT(3,1,"UNPAID_LABEL")))}function te(r,h){1&r&&t.nrm(0,"br")}function ee(r,h){if(1&r&&(t.j41(0,"span",240)(1,"a"),t.EFF(2),t.nI1(3,"transloco"),t.k0s()()),2&r){const e=t.XpG().$implicit;t.R7$(2),t.Lme("",t.bMT(3,2,"OVERDUE")," ",e.purchaseDueDate,"")}}function ie(r,h){1&r&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.bMT(2,1,"DUE")))}function ne(r,h){1&r&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.JRh(t.bMT(2,1,"OUT_OF")))}function ae(r,h){if(1&r&&(t.j41(0,"div",241)(1,"p",226),t.DNE(2,ie,3,3,"span",33),t.j41(3,"b"),t.EFF(4),t.nI1(5,"CurrencyPipe"),t.k0s()(),t.j41(6,"p",226),t.DNE(7,ne,3,3,"span",33),t.j41(8,"b"),t.EFF(9),t.nI1(10,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG().$implicit,n=t.XpG();t.R7$(2),t.Y8G("ngIf",e.balance>0),t.R7$(2),t.JRh(t.i5U(5,4,e.balance,n.settingData)),t.R7$(3),t.Y8G("ngIf",e.balance>0),t.R7$(2),t.JRh(t.i5U(10,7,e.amount,n.settingData))}}function oe(r,h){if(1&r&&(t.j41(0,"div",241)(1,"p",226)(2,"b"),t.EFF(3),t.nI1(4,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG().$implicit,n=t.XpG();t.R7$(3),t.JRh(t.i5U(4,1,e.amount,n.settingData))}}function se(r,h){if(1&r&&(t.j41(0,"li",220)(1,"div",221)(2,"div",222)(3,"div",223),t.DNE(4,Vt,4,3,"span",224)(5,Xt,1,0,"br",33)(6,Jt,4,3,"span",225)(7,Wt,1,0,"br",33),t.j41(8,"p",226),t.EFF(9),t.k0s(),t.j41(10,"span",227),t.EFF(11),t.nI1(12,"dateFormat"),t.DNE(13,Qt,4,3,"span",228)(14,zt,4,3,"span",229)(15,Zt,4,3,"span",230)(16,te,1,0,"br",33)(17,ee,4,4,"span",231),t.k0s(),t.j41(18,"p",232),t.EFF(19),t.nI1(20,"transloco"),t.k0s()(),t.DNE(21,ae,11,10,"div",233)(22,oe,5,4,"div",233),t.k0s()()()),2&r){const e=h.$implicit,n=t.XpG();t.R7$(),t.Mz_("routerLink","/purchases/",e.uniqueKeyPurchase,"/viewTodayInvoices"),t.Y8G("ngClass",t.eq3(23,St,e.isPurchaseReturn)),t.R7$(3),t.Y8G("ngIf",e.isPurchaseReturn),t.R7$(),t.Y8G("ngIf",e.isPurchaseReturn),t.R7$(),t.Y8G("ngIf",!e.invoiceGenerated),t.R7$(),t.Y8G("ngIf",!e.invoiceGenerated),t.R7$(2),t.SpI(" ",e.supplierName," "),t.R7$(2),t.SpI(" ",t.i5U(12,18,e.invocieDate,n.settingData)," "),t.R7$(2),t.Y8G("ngIf",1==e.status&&!e.isOverdue&&1==(null==n.settingData?null:n.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("ngIf",2==e.status&&!e.isOverdue&&1==(null==n.settingData?null:n.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("ngIf",3==e.status&&!e.isOverdue&&1==(null==n.settingData?null:n.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("ngIf",4==e.status&&e.isOverdue&&1==(null==n.settingData?null:n.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("ngIf",4==e.status&&e.isOverdue&&1==(null==n.settingData?null:n.settingData.invoicePaymentTracking)),t.R7$(2),t.Lme(" ",t.bMT(20,21,"PURCHASE")," #",e.purchaseFormatNumber," "),t.R7$(2),t.Y8G("ngIf",1==(null==n.settingData?null:n.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("ngIf",0==(null==n.settingData?null:n.settingData.invoicePaymentTracking))}}function ce(r,h){1&r&&(t.j41(0,"li",242),t.nrm(1,"img",243),t.j41(2,"h6"),t.EFF(3),t.nI1(4,"transloco"),t.k0s(),t.j41(5,"p",244),t.EFF(6),t.nI1(7,"transloco"),t.k0s()()),2&r&&(t.R7$(3),t.JRh(t.bMT(4,2,"NO_PURCHASE_RETURN_TXT")),t.R7$(3),t.JRh(t.bMT(7,4,"CREATE_NEW_PURCHASE_RETURN_TXT")))}function de(r,h){if(1&r&&(t.j41(0,"p",245),t.EFF(1),t.k0s()),2&r){const e=t.XpG();t.R7$(),t.SpI(" ",null==e.invocieAddEditFormData.selectSupplier.clientEntity?null:e.invocieAddEditFormData.selectSupplier.clientEntity.email," ")}}function re(r,h){if(1&r&&(t.j41(0,"p",245),t.EFF(1),t.k0s()),2&r){const e=t.XpG();t.R7$(),t.SpI(" ",null==e.invocieAddEditFormData.selectSupplier.clientEntity?null:e.invocieAddEditFormData.selectSupplier.clientEntity.address," ")}}function ue(r,h){if(1&r&&(t.j41(0,"p",245),t.EFF(1),t.k0s()),2&r){const e=t.XpG();t.R7$(),t.SpI(" ",null==e.invocieAddEditFormData.selectSupplier.clientEntity?null:e.invocieAddEditFormData.selectSupplier.clientEntity.number," ")}}function le(r,h){1&r&&(t.j41(0,"p"),t.EFF(1," N/A "),t.k0s())}function me(r,h){if(1&r&&(t.j41(0,"p",245),t.EFF(1),t.k0s()),2&r){const e=t.XpG();t.R7$(),t.SpI(" ",null==e.invocieAddEditFormData.selectSupplier.clientEntity?null:e.invocieAddEditFormData.selectSupplier.clientEntity.email," ")}}function pe(r,h){if(1&r&&(t.j41(0,"p",245),t.EFF(1),t.k0s()),2&r){const e=t.XpG();t.R7$(),t.SpI(" ",null==e.invocieAddEditFormData.selectSupplier.clientEntity?null:e.invocieAddEditFormData.selectSupplier.clientEntity.shippingAddress," ")}}function he(r,h){1&r&&(t.j41(0,"p"),t.EFF(1," N/A "),t.k0s())}function Ae(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",246)(1,"div",247)(2,"label",248),t.EFF(3),t.nI1(4,"transloco"),t.k0s(),t.j41(5,"span",249),t.EFF(6," *"),t.k0s(),t.j41(7,"div",60)(8,"input",250),t.mxI("ngModelChange",function(i){t.eBV(e);const o=t.XpG();return t.DH7(o.invocieAddEditFormData.invoiceAmountNonProduct,i)||(o.invocieAddEditFormData.invoiceAmountNonProduct=i),t.Njj(i)}),t.bIt("keyup",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.calInvoiceAmt(i.invocieAddEditFormData.purchaseProductList))})("change",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.calInvoiceAmt(i.invocieAddEditFormData.purchaseProductList))}),t.k0s()()()()}if(2&r){const e=t.XpG();t.R7$(3),t.JRh(t.bMT(4,3,"AMT_LABEL")),t.R7$(5),t.FS9("required",e.invocieAddEditFormData.invoiceGenerated),t.R50("ngModel",e.invocieAddEditFormData.invoiceAmountNonProduct)}}function fe(r,h){if(1&r&&(t.j41(0,"th"),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r){const e=t.XpG(2);t.R7$(),t.SpI(" ",null!=e.customFields&&e.customFields.discount?null==e.customFields?null:e.customFields.discount:t.bMT(2,1,"DIS_LABEL")," ")}}function ve(r,h){1&r&&(t.j41(0,"th",261),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.SpI(" ",t.bMT(2,1,"TAX"),""))}function ye(r,h){if(1&r&&(t.j41(0,"span"),t.EFF(1),t.k0s()),2&r){const e=t.XpG().$implicit;t.R7$(),t.SpI("",e.key,": ")}}function Ee(r,h){if(1&r&&(t.j41(0,"div"),t.DNE(1,ye,2,1,"span",33),t.EFF(2),t.k0s()),2&r){const e=h.$implicit;t.R7$(),t.Y8G("ngIf",e.value),t.R7$(),t.SpI("",e.value," ")}}function De(r,h){if(1&r&&(t.j41(0,"p"),t.EFF(1),t.nI1(2,"CurrencyPipe"),t.k0s()),2&r){const e=t.XpG(2).$implicit,n=t.XpG(2);t.R7$(),t.SpI("",t.ii3(2,1,e.discountPercentage,n.settingData,!0,null==n.settingData?null:n.settingData.percentRoundOff)," %")}}function ge(r,h){if(1&r&&(t.j41(0,"td")(1,"span",262),t.EFF(2),t.nI1(3,"CurrencyPipe"),t.k0s(),t.DNE(4,De,3,6,"p",33),t.k0s()),2&r){const e=t.XpG().$implicit,n=t.XpG(2);t.R7$(2),t.JRh(t.ii3(3,2,e.discountAmount,n.settingData,!0,null==n.settingData?null:n.settingData.amountRoundOff)),t.R7$(2),t.Y8G("ngIf",0==e.discountFlag)}}function Ie(r,h){1&r&&t.nrm(0,"span",268)}function Fe(r,h){1&r&&(t.j41(0,"span",211),t.EFF(1,"Inc"),t.k0s())}function Te(r,h){if(1&r&&(t.j41(0,"div")(1,"span",262),t.EFF(2),t.nI1(3,"CurrencyPipe"),t.k0s(),t.DNE(4,Ie,1,0,"span",266)(5,Fe,2,0,"span",267),t.j41(6,"p"),t.EFF(7),t.nI1(8,"CurrencyPipe"),t.k0s()()),2&r){const e=h.$implicit,n=t.XpG(5);t.R7$(2),t.JRh(t.ii3(3,5,e.calculateTax,n.settingData,!0,null==n.settingData?null:n.settingData.amountRoundOff)),t.R7$(2),t.Y8G("ngIf",1==e.taxInclExcl),t.R7$(),t.Y8G("ngIf",1==e.taxInclExcl),t.R7$(2),t.Lme("",n.commonService.getAccountName(n.taxAccountList,e.uniqueKeyTaxAccountEntry)," - ",t.iJd(8,10,t.sMw(16,z,e.percentage,n.settingData,null==n.settingData?null:n.settingData.percentRoundOff))," %")}}function _e(r,h){if(1&r&&(t.j41(0,"div"),t.DNE(1,Te,9,20,"div",215),t.k0s()),2&r){const e=t.XpG(2).$implicit,n=t.XpG(2);t.R7$(),t.Y8G("ngForOf",n.jsonParse(e.appliedTax))}}function xe(r,h){if(1&r&&(t.j41(0,"td"),t.DNE(1,_e,2,1,"div",33),t.k0s()),2&r){const e=t.XpG().$implicit,n=t.XpG(2);t.R7$(),t.Y8G("ngIf",n.jsonParse(e.appliedTax).length>0)}}function Le(r,h){if(1&r){const e=t.RV6();t.j41(0,"tr")(1,"td")(2,"span",262),t.EFF(3),t.k0s(),t.nrm(4,"br"),t.j41(5,"p",61),t.EFF(6),t.k0s(),t.DNE(7,Ee,3,2,"div",215),t.k0s(),t.j41(8,"td")(9,"span",262),t.EFF(10),t.nI1(11,"CurrencyPipe"),t.k0s(),t.nrm(12,"br"),t.EFF(13),t.k0s(),t.j41(14,"td",262),t.EFF(15),t.nI1(16,"CurrencyPipe"),t.k0s(),t.DNE(17,ge,5,7,"td",33)(18,xe,2,1,"td",33),t.j41(19,"td",262),t.EFF(20),t.nI1(21,"CurrencyPipe"),t.k0s(),t.j41(22,"td")(23,"a",263),t.bIt("click",function(i){const o=t.eBV(e).$implicit,s=t.XpG(2);return t.Njj(s.editItems(o,i))}),t.j41(24,"span",264),t.EFF(25,"edit"),t.k0s()(),t.j41(26,"a",263),t.bIt("click",function(i){const o=t.eBV(e).index,s=t.XpG(2);return t.Njj(s.removeItems(o,i))}),t.j41(27,"span",265),t.EFF(28,"delete_outline"),t.k0s()()()()}if(2&r){const e=h.$implicit,n=t.XpG(2);t.R7$(3),t.JRh(e.productName),t.R7$(3),t.JRh(e.description),t.R7$(),t.Y8G("ngForOf",n.commonService.getListItemCustomFields(e.listItemCustomField)),t.R7$(3),t.JRh(t.iJd(11,9,t.sMw(23,z,e.qty,n.settingData,null==n.settingData?null:n.settingData.quantityRoundOff))),t.R7$(3),t.SpI(" ",e.unit," "),t.R7$(2),t.SpI(" ",t.ii3(16,15,e.rate,n.settingData,!0,null==n.settingData?null:n.settingData.rateRoundOff)," "),t.R7$(2),t.Y8G("ngIf",1==n.discountTypeSetting),t.R7$(),t.Y8G("ngIf",n.taxAccountList.length>0&&n.checkTaxExistinOnItem(n.taxAccountList)&&("add-Invoice"==n.actionType&&1==n.hideTax||"add-Invoice"!=n.actionType&&n.checkTaxExist())),t.R7$(2),t.SpI(" ",t.i5U(21,20,e.total,n.settingData)," ")}}function be(r,h){if(1&r&&(t.j41(0,"div",251)(1,"table",252)(2,"thead",253)(3,"th",254),t.EFF(4),t.nI1(5,"transloco"),t.k0s(),t.j41(6,"th",255),t.EFF(7),t.nI1(8,"transloco"),t.k0s(),t.j41(9,"th",256),t.EFF(10),t.nI1(11,"transloco"),t.k0s(),t.DNE(12,fe,3,3,"th",33)(13,ve,3,3,"th",257),t.j41(14,"th",258),t.EFF(15),t.nI1(16,"transloco"),t.k0s(),t.j41(17,"th",259),t.EFF(18),t.nI1(19,"transloco"),t.k0s()(),t.j41(20,"tbody",260),t.DNE(21,Le,29,27,"tr",215),t.k0s()()()),2&r){const e=t.XpG();t.R7$(4),t.SpI(" ",null!=e.customFields&&e.customFields.productService?null==e.customFields?null:e.customFields.productService:t.bMT(5,8,"PRODUCT_SERVICES")," "),t.R7$(3),t.SpI(" ",null!=e.customFields&&e.customFields.quantity?null==e.customFields?null:e.customFields.quantity:t.bMT(8,10,"QTY_LABEL")," "),t.R7$(3),t.SpI(" ",null!=e.customFields&&e.customFields.rate?null==e.customFields?null:e.customFields.rate:t.bMT(11,12,"RATE_LABEL")," "),t.R7$(2),t.Y8G("ngIf",1==e.discountTypeSetting),t.R7$(),t.Y8G("ngIf",e.taxAccountList.length>0&&e.checkTaxExistinOnItem(e.taxAccountList)&&("add-Invoice"==e.actionType&&1==e.hideTax||"add-Invoice"!=e.actionType&&e.checkTaxExist())),t.R7$(2),t.SpI(" ",null!=e.customFields&&e.customFields.amount?null==e.customFields?null:e.customFields.amount:t.bMT(16,14,"AMT_LABEL")," "),t.R7$(3),t.JRh(t.bMT(19,16,"ACTION")),t.R7$(3),t.Y8G("ngForOf",e.invocieAddEditFormData.purchaseProductList)}}function Re(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",269)(1,"div",270)(2,"span",271),t.EFF(3),t.k0s()(),t.j41(4,"div",272)(5,"a",273),t.bIt("click",function(){const i=t.eBV(e),o=i.$implicit,s=i.index,a=t.XpG();return t.Njj(a.removeTermsAndCondition(s,o))}),t.nrm(6,"img",274),t.k0s()()()}if(2&r){const e=h.$implicit;t.R7$(3),t.SpI(" ",e," ")}}function Pe(r,h){1&r&&(t.j41(0,"div",244),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.SpI(" ",t.bMT(2,1,"NO_RECORD_EXIST")," "))}function Ce(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",275)(1,"div",276)(2,"b"),t.EFF(3),t.k0s()(),t.j41(4,"div",277)(5,"input",278),t.mxI("ngModelChange",function(i){const o=t.eBV(e).index,s=t.XpG();return t.DH7(s.invocieAddEditFormData.userCustomFields[o].value,i)||(s.invocieAddEditFormData.userCustomFields[o].value=i),t.Njj(i)}),t.bIt("ngModelChange",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.isCustomFieldEdited(!0))}),t.k0s()()()}if(2&r){const e=h.$implicit,n=h.index,i=t.XpG();t.R7$(3),t.JRh(e.key),t.R7$(2),t.Mz_("name","csFieldValue_",n,""),t.R50("ngModel",i.invocieAddEditFormData.userCustomFields[n].value)}}function Oe(r,h){1&r&&(t.j41(0,"div",244),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.SpI(" ",t.bMT(2,1,"NO_RECORD_EXIST")," "))}function ke(r,h){if(1&r&&(t.j41(0,"span",292),t.EFF(1),t.k0s()),2&r){const e=t.XpG(3);t.R7$(),t.SpI(" (",e.currencySymbol,") ")}}function je(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",280)(1,"div",281)(2,"span",99),t.EFF(3),t.nI1(4,"transloco"),t.k0s(),t.j41(5,"span",61),t.EFF(6),t.k0s(),t.j41(7,"span",282)(8,"span",283)(9,"span",72),t.EFF(10,"expand_more"),t.k0s()(),t.j41(11,"ul",284)(12,"li",285)(13,"a",77),t.bIt("click",function(i){t.eBV(e);const o=t.XpG(2);return t.Njj(o.changeDiscountCurrency(i,"percent","onBill"))}),t.EFF(14),t.nI1(15,"transloco"),t.k0s()(),t.j41(16,"li",61)(17,"a",77),t.bIt("click",function(i){t.eBV(e);const o=t.XpG(2);return t.Njj(o.changeDiscountCurrency(i,"rupay","onBill"))}),t.EFF(18),t.nI1(19,"transloco"),t.DNE(20,ke,2,1,"span",286),t.k0s()()()()(),t.j41(21,"div",287)(22,"div",288)(23,"input",289),t.mxI("ngModelChange",function(i){const o=t.eBV(e).$implicit;return t.DH7(o.percentage,i)||(o.percentage=i),t.Njj(i)}),t.bIt("keyup",function(){const i=t.eBV(e).$implicit,o=t.XpG(2);return t.Njj(o.calculateDiscount(i.percentage,i.uniqueKeyOfAccount))})("change",function(){const i=t.eBV(e).$implicit,o=t.XpG(2);return t.Njj(o.calculateDiscount(i.percentage,i.uniqueKeyOfAccount))}),t.k0s(),t.j41(24,"div",290),t.EFF(25),t.k0s()()(),t.j41(26,"div",291)(27,"span"),t.EFF(28),t.nI1(29,"CurrencyPipe"),t.k0s()()()}if(2&r){const e=h.$implicit,n=h.index,i=t.XpG(2);t.R7$(3),t.SpI(" ",null!=i.customFields&&i.customFields.discount?null==i.customFields?null:i.customFields.discount:t.bMT(4,13,"DIS_LABEL")," "),t.R7$(3),t.SpI(" (","percent"==i.discountSymbol?"%":i.currencySymbol?i.currencySymbol:"",") "),t.R7$(8),t.SpI(" ",t.bMT(15,15,"PERCENT")," (%) "),t.R7$(4),t.SpI(" ",t.bMT(19,17,"FLAT")," "),t.R7$(2),t.Y8G("ngIf",i.currencySymbol),t.R7$(3),t.Mz_("name","invocieDiscount_",n,""),t.R50("ngModel",e.percentage),t.BMQ("data-discountType",i.discountSymbol)("data-bill-proudct-amt",i.invocieAddEditFormData.subTotalProductAmt),t.R7$(2),t.SpI(" ","percent"==i.discountSymbol?"%":i.currencySymbol?i.currencySymbol:""," "),t.R7$(3),t.Lme("",t.i5U(29,19,i.discountAmount,i.settingData)," ",e.type,"")}}function Se(r,h){if(1&r&&(t.j41(0,"div",79),t.DNE(1,je,30,22,"div",279),t.k0s()),2&r){const e=t.XpG();t.R7$(),t.Y8G("ngForOf",e.discountAccountList)}}function Ke(r,h){1&r&&t.nrm(0,"span",268)}function Ne(r,h){1&r&&(t.j41(0,"span",211),t.EFF(1,"Inc"),t.k0s())}function qe(r,h){if(1&r&&(t.j41(0,"div",306),t.EFF(1," % "),t.j41(2,"span",72),t.EFF(3,"expand_more"),t.k0s()()),2&r){const e=t.XpG(2).$implicit;t.Y8G("ngClass",t.eq3(1,N,!e.isChecked))}}function we(r,h){if(1&r&&(t.j41(0,"div",307),t.EFF(1," % "),t.j41(2,"span",72),t.EFF(3,"expand_more"),t.k0s()()),2&r){const e=t.XpG(2).$implicit;t.Y8G("ngClass",t.eq3(1,N,!e.isChecked))}}function Me(r,h){if(1&r){const e=t.RV6();t.j41(0,"li",61)(1,"a",308),t.bIt("click",function(){const i=t.eBV(e).$implicit,o=t.XpG(2).$implicit,s=t.XpG();return t.Njj(s.applyTaxOnSelectPercent(o.uniqueKeyOfAccount,i.taxValue,o.taxDetailEntity.taxInclExcl))}),t.EFF(2),t.k0s()()}if(2&r){const e=h.$implicit;t.R7$(2),t.SpI(" ",e.taxValue," ")}}function $e(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",294)(1,"div",295)(2,"div",296)(3,"label",297),t.EFF(4),t.DNE(5,Ke,1,0,"span",266)(6,Ne,2,0,"span",267),t.j41(7,"input",298),t.mxI("ngModelChange",function(i){t.eBV(e);const o=t.XpG().$implicit;return t.DH7(o.isChecked,i)||(o.isChecked=i),t.Njj(i)}),t.bIt("change",function(){t.eBV(e);const i=t.XpG(),o=i.$implicit,s=i.index,a=t.XpG();return t.Njj(a.selectedTax(o,s))}),t.k0s(),t.nrm(8,"span",299),t.k0s()()(),t.j41(9,"div",287)(10,"div",288)(11,"input",300),t.mxI("ngModelChange",function(i){t.eBV(e);const o=t.XpG().$implicit;return t.DH7(o.percentage,i)||(o.percentage=i),t.Njj(i)}),t.bIt("keyup",function(){t.eBV(e);const i=t.XpG().$implicit,o=t.XpG();return t.Njj(o.applyTaxOnSelectPercent(i.uniqueKeyOfAccount,i.percentage,i.taxDetailEntity.taxInclExcl))})("change",function(){t.eBV(e);const i=t.XpG().$implicit,o=t.XpG();return t.Njj(o.applyTaxOnSelectPercent(i.uniqueKeyOfAccount,i.percentage,i.taxDetailEntity.taxInclExcl))}),t.k0s(),t.DNE(12,qe,4,3,"div",301)(13,we,4,3,"div",302),t.j41(14,"ul",303),t.DNE(15,Me,3,1,"li",304),t.nI1(16,"jsonParse"),t.k0s()()(),t.j41(17,"div",305)(18,"span"),t.EFF(19),t.nI1(20,"CurrencyPipe"),t.k0s()()()}if(2&r){const e=t.XpG(),n=e.$implicit,i=e.index,o=t.XpG();t.R7$(4),t.SpI(" ",n.nameOfAccount," "),t.R7$(),t.Y8G("ngIf",1==n.taxDetailEntity.taxInclExcl),t.R7$(),t.Y8G("ngIf",1==n.taxDetailEntity.taxInclExcl),t.R7$(),t.Mz_("id","checkbox_",i,""),t.R50("ngModel",n.isChecked),t.Y8G("ngModelOptions",t.lJ4(22,Kt)),t.R7$(4),t.FCK("name","",n.nameOfAccount,"_taxPercentag_",i,""),t.Y8G("ngClass",t.eq3(23,N,!n.isChecked)),t.R50("ngModel",n.percentage),t.R7$(),t.Y8G("ngIf",0==n.taxDetailEntity.defaultTaxes.length),t.R7$(),t.Y8G("ngIf",n.taxDetailEntity.defaultTaxes.length>0),t.R7$(),t.Y8G("ngClass",t.eq3(25,N,!n.isChecked)),t.R7$(),t.Y8G("ngForOf",t.bMT(16,17,n.taxDetailEntity.defaultTaxes)),t.R7$(4),t.JRh(t.i5U(20,19,n.total,o.settingData))}}function Ge(r,h){if(1&r&&(t.j41(0,"div",79),t.DNE(1,$e,21,27,"div",293),t.k0s()),2&r){const e=h.$implicit,n=t.XpG();t.R7$(),t.Y8G("ngIf","add-Return"==n.actionType&&n.checkTaxExist()&&0==e.taxDetailEntity.taxApplicableOn&&n.checkTaxExistOnItemOrBill(e,"on-bill")||"add-Return"!=n.actionType&&n.checkTaxExist()&&0==e.taxDetailEntity.taxApplicableOn&&n.checkTaxExistOnItemOrBill(e,"on-bill"))}}function He(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",309)(1,"div",310)(2,"span",99),t.EFF(3),t.nI1(4,"transloco"),t.k0s()(),t.j41(5,"div",129)(6,"div",101)(7,"input",311),t.mxI("ngModelChange",function(i){const o=t.eBV(e).$implicit;return t.DH7(o.amount,i)||(o.amount=i),t.Njj(i)}),t.bIt("keyup",function(){const i=t.eBV(e).$implicit,o=t.XpG();return t.Njj(o.applyOtherChargeByAmt(i.uniqueKeyOfAccount,i.amount))})("change",function(){const i=t.eBV(e).$implicit,o=t.XpG();return t.Njj(o.applyOtherChargeByAmt(i.uniqueKeyOfAccount,i.amount))}),t.k0s()()()()}if(2&r){const e=h.$implicit,n=h.index;t.R7$(3),t.SpI(" ",t.bMT(4,4,e.otherChargeName)," "),t.R7$(4),t.Mz_("name","otherCharge_",n,""),t.R50("ngModel",e.amount)}}function Ye(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",49)(1,"div",312)(2,"button",313),t.bIt("click",function(){t.eBV(e);const i=t.XpG();return t.Njj(i.adjustAgainstInv())}),t.EFF(3),t.nI1(4,"transloco"),t.qSk(),t.j41(5,"svg",314),t.nrm(6,"line",122)(7,"polyline",123),t.k0s()()()()}2&r&&(t.R7$(3),t.SpI(" ",t.bMT(4,1,"ADJUST_AGAINST_INV")," "))}function Be(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",61)(1,"div",325)(2,"div",326)(3,"span",110)(4,"b"),t.EFF(5),t.k0s()(),t.nrm(6,"br"),t.j41(7,"span",110),t.EFF(8),t.k0s(),t.j41(9,"p"),t.EFF(10),t.k0s()(),t.j41(11,"div",327)(12,"span",319),t.EFF(13),t.nI1(14,"CurrencyPipe"),t.k0s()(),t.j41(15,"div",328)(16,"a",329),t.qSk(),t.j41(17,"svg",330),t.nrm(18,"path",331),t.k0s()(),t.joV(),t.j41(19,"div",332),t.bIt("click",function(){t.eBV(e);const i=t.XpG(),o=i.$implicit,s=i.index,a=t.XpG(2);return t.Njj(a.unlinkPayment(s,o))}),t.EFF(20),t.nI1(21,"transloco"),t.k0s()()()()}if(2&r){const e=t.XpG().$implicit,n=t.XpG(2);t.R7$(5),t.SpI(" ",e.accountName," "),t.R7$(3),t.SpI(" ",e.paymentDate," "),t.R7$(2),t.JRh(e.paymentNo),t.R7$(3),t.SpI(" ",t.i5U(14,5,e.paidAmount,n.settingData)," "),t.R7$(7),t.SpI(" ",t.bMT(21,8,"UNLINK_PAYMENT")," ")}}function Ue(r,h){1&r&&t.nrm(0,"hr")}function Ve(r,h){if(1&r&&(t.j41(0,"div",323),t.DNE(1,Be,22,10,"div",324)(2,Ue,1,0,"hr",33),t.k0s()),2&r){const e=h.$implicit;t.R7$(),t.Y8G("ngIf",e.paidAmount>0),t.R7$(),t.Y8G("ngIf",e.paidAmount>0)}}function Xe(r,h){if(1&r&&(t.j41(0,"div",315)(1,"div",104)(2,"div",316)(3,"span",317),t.EFF(4,"expand_more"),t.k0s(),t.j41(5,"span",144),t.EFF(6),t.nI1(7,"transloco"),t.k0s()(),t.j41(8,"div",318)(9,"span",319),t.EFF(10),t.nI1(11,"CurrencyPipe"),t.k0s()(),t.j41(12,"div",320)(13,"div",321),t.DNE(14,Ve,3,2,"div",322),t.k0s()()()()),2&r){const e=t.XpG();t.R7$(6),t.JRh(t.bMT(7,3,"ALREADY_PAID_AMOUNT")),t.R7$(4),t.SpI(" ",t.i5U(11,5,e.alreadyPaidLinkAmount,e.settingData)," "),t.R7$(4),t.Y8G("ngForOf",e.clientPaymentLinkList)}}function Je(r,h){if(1&r&&(t.j41(0,"div",333)(1,"div",334)(2,"span",335),t.EFF(3,"expand_more"),t.k0s(),t.j41(4,"span",144),t.EFF(5),t.nI1(6,"transloco"),t.k0s()(),t.j41(7,"div",336)(8,"span",110),t.EFF(9),t.nI1(10,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG();t.R7$(5),t.SpI("",t.bMT(6,2,"INVOICE_ADJUSTED")," "),t.R7$(4),t.SpI(" ",t.i5U(10,4,e.invAdjustPaidLinkAmount,e.settingData)," ")}}function We(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",339),t.bIt("click",function(){const i=t.eBV(e).$implicit,o=t.XpG(2);return t.Njj(o.adjustAgainstInv(i))}),t.j41(1,"div",61)(2,"div",325)(3,"div",326)(4,"span",110)(5,"b"),t.EFF(6),t.k0s()(),t.nrm(7,"br"),t.j41(8,"span",110),t.EFF(9),t.k0s(),t.j41(10,"p"),t.EFF(11),t.nI1(12,"transloco"),t.k0s()(),t.j41(13,"div",340)(14,"span",319),t.EFF(15),t.nrm(16,"br"),t.EFF(17),t.nI1(18,"CurrencyPipe"),t.k0s()()()(),t.nrm(19,"hr"),t.k0s()}if(2&r){const e=h.$implicit,n=t.XpG(2);t.R7$(6),t.SpI(" ",e.accountName," "),t.R7$(3),t.SpI(" ",e.paymentDate," "),t.R7$(2),t.JRh(t.bMT(12,5,"INVOICE_ADJUSTED")),t.R7$(4),t.SpI(" ",e.invoiceNumber,""),t.R7$(2),t.SpI(" ",t.i5U(18,7,e.paidAmount,n.settingData)," ")}}function Qe(r,h){if(1&r&&(t.j41(0,"div",61)(1,"div",337),t.DNE(2,We,20,10,"div",338),t.k0s()()),2&r){const e=t.XpG();t.R7$(2),t.Y8G("ngForOf",e.invAdjustPaymentAvailableList)}}function ze(r,h){if(1&r){const e=t.RV6();t.j41(0,"div",325)(1,"div",341)(2,"span",110)(3,"b"),t.EFF(4),t.k0s()(),t.nrm(5,"br"),t.j41(6,"span",110),t.EFF(7),t.k0s(),t.j41(8,"p"),t.EFF(9),t.nI1(10,"transloco"),t.k0s(),t.j41(11,"p")(12,"b"),t.EFF(13),t.nI1(14,"transloco"),t.k0s(),t.EFF(15),t.k0s()(),t.j41(16,"div",327)(17,"span",110)(18,"b"),t.EFF(19),t.k0s()(),t.nrm(20,"br"),t.j41(21,"span",319),t.EFF(22),t.nI1(23,"CurrencyPipe"),t.k0s()(),t.j41(24,"div",342)(25,"img",343),t.bIt("click",function(){const i=t.eBV(e),o=i.$implicit,s=i.index,a=t.XpG();return t.Njj(a.editPayments(o,s))}),t.k0s(),t.j41(26,"img",344),t.bIt("click",function(){const i=t.eBV(e).index,o=t.XpG();return t.Njj(o.removePayments(i))}),t.k0s()()()}if(2&r){const e=h.$implicit,n=t.XpG();t.R7$(4),t.JRh(e.selectAccountName),t.R7$(3),t.SpI(" ",e.formattedDate," "),t.R7$(2),t.JRh(t.bMT(10,7,"PAYMENT_REFUND")),t.R7$(4),t.SpI("",t.bMT(14,9,"NOTES"),":"),t.R7$(2),t.SpI(" ",e.note," "),t.R7$(4),t.JRh(e.paymentNumber),t.R7$(3),t.JRh(t.i5U(23,11,e.paidAmount,n.settingData))}}function Ze(r,h){if(1&r&&(t.j41(0,"mat-option",345),t.EFF(1),t.k0s()),2&r){const e=h.$implicit;t.Y8G("value",e),t.R7$(),t.SpI(" ",e.nameOfAccount," ")}}function ti(r,h){if(1&r){const e=t.RV6();t.j41(0,"a",77),t.bIt("click",function(i){t.eBV(e);const o=t.XpG();return t.Njj(o.removeAccount("payment",i))}),t.j41(1,"span",346),t.EFF(2,"clear"),t.k0s()()}}function ei(r,h){if(1&r&&(t.j41(0,"div",349)(1,"div",350)(2,"span",351),t.EFF(3),t.nI1(4,"transloco"),t.k0s()(),t.j41(5,"div",134)(6,"span",352),t.EFF(7),t.nI1(8,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,2,"AVAILABLE_ADAVNCE")),t.R7$(4),t.SpI(" ",t.i5U(8,4,e.advanceAvailableAmt,e.settingData)," (-) ")}}function ii(r,h){if(1&r&&(t.j41(0,"div",349)(1,"div",350)(2,"span",351),t.EFF(3),t.nI1(4,"transloco"),t.k0s()(),t.j41(5,"div",134)(6,"span",352),t.EFF(7),t.nI1(8,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG(2);t.R7$(3),t.SpI("",t.bMT(4,2,"PREVIOUS_OUTSTANDING")," "),t.R7$(4),t.SpI(" ",t.i5U(8,4,e.previousOutStandingAmt,e.settingData)," (+) ")}}function ni(r,h){1&r&&t.nrm(0,"br")}function ai(r,h){1&r&&(t.j41(0,"span"),t.EFF(1),t.nI1(2,"transloco"),t.k0s()),2&r&&(t.R7$(),t.SpI(" ",t.bMT(2,1,"PAYABLE")," "))}function oi(r,h){if(1&r&&(t.j41(0,"div",349)(1,"div",350)(2,"span",351)(3,"b"),t.EFF(4),t.nI1(5,"transloco"),t.k0s()()(),t.j41(6,"div",134)(7,"span",354),t.EFF(8),t.nI1(9,"CurrencyPipe"),t.k0s(),t.DNE(10,ni,1,0,"br",33),t.j41(11,"small",355),t.DNE(12,ai,3,3,"span",33),t.k0s()()()),2&r){const e=t.XpG(2);t.R7$(4),t.JRh(t.bMT(5,5,"CURRENT_OUTSTANDING")),t.R7$(3),t.Y8G("ngClass",t.eq3(10,Nt,0==e.currentOutStandingAmt)),t.R7$(),t.SpI(" ",t.i5U(9,7,e.currentOutStandingAmt,e.settingData)," "),t.R7$(2),t.Y8G("ngIf",e.currentOutStandingAmt>0&&0==e.advCarryFwdAmt),t.R7$(2),t.Y8G("ngIf",e.currentOutStandingAmt>0&&0==e.advCarryFwdAmt)}}function si(r,h){if(1&r&&(t.j41(0,"div",347),t.DNE(1,ei,9,7,"div",348)(2,ii,9,7,"div",348),t.j41(3,"div",349)(4,"div",350)(5,"span",351),t.EFF(6),t.nI1(7,"transloco"),t.k0s()(),t.j41(8,"div",134)(9,"span",352),t.EFF(10),t.nI1(11,"CurrencyPipe"),t.k0s()()(),t.j41(12,"div",349)(13,"div",350)(14,"span",351),t.EFF(15),t.nI1(16,"transloco"),t.k0s()(),t.j41(17,"div",134)(18,"span",352),t.EFF(19),t.nI1(20,"CurrencyPipe"),t.k0s()()(),t.nrm(21,"div",353),t.DNE(22,oi,13,12,"div",348),t.k0s()),2&r){const e=t.XpG();t.R7$(),t.Y8G("ngIf",e.previousOutStandingAmt<=0&&e.advanceAvailableAmt>0),t.R7$(),t.Y8G("ngIf",e.previousOutStandingAmt>=0&&0==e.advanceAvailableAmt),t.R7$(4),t.SpI(" ",t.bMT(7,7,"PURCHASE_RETURN_VALUE"),""),t.R7$(4),t.SpI(" ",t.i5U(11,9,e.totalInvoiceAmount,e.settingData)," (+) "),t.R7$(5),t.JRh(t.bMT(16,12,"REFUND_NOW")),t.R7$(4),t.SpI(" ",t.i5U(20,14,e.totalPaidAmt,e.settingData)," (-) "),t.R7$(3),t.Y8G("ngIf",e.currentOutStandingAmt>0||0==e.advCarryFwdAmt)}}function ci(r,h){if(1&r&&(t.j41(0,"div",349)(1,"div",350)(2,"span",351),t.EFF(3),t.nI1(4,"transloco"),t.k0s()(),t.j41(5,"div",134)(6,"span",352),t.EFF(7),t.nI1(8,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG(2);t.R7$(3),t.SpI("",t.bMT(4,2,"PAID_EARLIER")," (-)"),t.R7$(4),t.SpI(" ",t.i5U(8,4,e.alreadyPaidLinkAmount,e.settingData)," ")}}function di(r,h){if(1&r&&(t.j41(0,"div",349)(1,"div",350)(2,"span",351),t.EFF(3),t.nI1(4,"transloco"),t.k0s()(),t.j41(5,"div",134)(6,"span",352),t.EFF(7),t.nI1(8,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG(2);t.R7$(3),t.JRh(t.bMT(4,2,"PAYMENT_PURCHASE_RETURN")),t.R7$(4),t.SpI(" ",t.i5U(8,4,e.paymentAgainstAmt,e.settingData)," ")}}function ri(r,h){if(1&r&&(t.j41(0,"div",349)(1,"div",350)(2,"span",351)(3,"b"),t.EFF(4),t.nI1(5,"transloco"),t.k0s()()(),t.j41(6,"div",134)(7,"span",352),t.EFF(8),t.nI1(9,"CurrencyPipe"),t.k0s()()()),2&r){const e=t.XpG(2);t.R7$(4),t.JRh(t.bMT(5,2,"ADJ_AGAINST_RETURN")),t.R7$(4),t.SpI(" ",t.i5U(9,4,e.invAdjustPaidLinkAmount,e.settingData)," ")}}function ui(r,h){if(1&r&&(t.j41(0,"div",356)(1,"div",349)(2,"div",350)(3,"span",351),t.EFF(4),t.nI1(5,"transloco"),t.k0s()(),t.j41(6,"div",134)(7,"span",352),t.EFF(8),t.nI1(9,"CurrencyPipe"),t.k0s()()(),t.DNE(10,ci,9,7,"div",348),t.j41(11,"div",349)(12,"div",350)(13,"span",351),t.EFF(14),t.nI1(15,"transloco"),t.k0s()(),t.j41(16,"div",134)(17,"span",352),t.EFF(18),t.nI1(19,"CurrencyPipe"),t.k0s()()(),t.DNE(20,di,9,7,"div",348)(21,ri,10,7,"div",348),t.nrm(22,"div",353),t.j41(23,"div",349)(24,"div",350)(25,"span",351),t.EFF(26),t.nI1(27,"transloco"),t.k0s()(),t.j41(28,"div",134)(29,"span",352),t.EFF(30),t.nI1(31,"CurrencyPipe"),t.k0s()()()()),2&r){const e=t.XpG();t.Y8G("ngClass",t.eq3(25,qt,e.totalPaidAmt>e.totalInvoiceAmount)),t.R7$(4),t.JRh(t.bMT(5,10,"PURCHASE_RETURN_VALUE")),t.R7$(4),t.SpI(" ",t.i5U(9,12,e.totalInvoiceAmount,e.settingData)," "),t.R7$(2),t.Y8G("ngIf",e.clientPaymentLinkList.length>0),t.R7$(4),t.JRh(t.bMT(15,15,"WRITE_OFF")),t.R7$(4),t.SpI(" ",t.i5U(19,17,e.totalWriteOffAmount,e.settingData)," "),t.R7$(2),t.Y8G("ngIf",e.invoiceAddedPaymentList.length>=0||e.paymentAgainstAmt>0),t.R7$(),t.Y8G("ngIf",e.invAdjustPaidLinkAmount>=0),t.R7$(5),t.SpI(" ",null!=e.customFields&&e.customFields.balance?null==e.customFields?null:e.customFields.balance:t.bMT(27,20,"BAL_LABEL")," "),t.R7$(4),t.SpI(" ",t.i5U(31,22,e.totalBalanceAmount,e.settingData)," ")}}let $=(()=>{class r{constructor(e,n,i,o,s,a,u,c,m,p,v,y,f,g,I,x){this.dataStoreService=e,this.accountService=n,this.purchaseService=i,this.purchaseReturnService=o,this.productService=s,this.notificationService=a,this.commonService=u,this.router=c,this.authService=m,this.route=p,this.settingService=v,this.paymentService=y,this.syncApiService=f,this.syncDbService=g,this.translocoService=I,this.unsyncervice=x,this.discountTypeSetting=0,this.uniquePurchaseReturnKey=generateUUID("PurchaseReturnEntity"),this.uniqueLeaderKey=generateUUID("LeaderEntity"),this.clientAccountId=this.route.snapshot.params.clientAccountId,this.editInvoiceReturnId=this.route.snapshot.params.editPurchaseReturnId,this.redirectType=this.route.snapshot.data.redirectType,this.actionType=this.route.snapshot.data.actionType,this.pageType=this.route.snapshot.data.pageType,this.purchaseReturnLineItemData=null,this.invoiceDefaultDate=new T.MJ(D().format("YYYY-MM-DD")),this.accountList=[],this.allClientList=[],this.recordPurchaseList=[],this.roundOffAccountList=[],this.productList=[],this.selectedProduct=[],this.taxAccountList=[],this.discountAccountList=[],this.purchaseInvoiceList=[],this.purchaseReturnList=[],this.allLedgerList=[],this.allWriteOffList=[],this.termsAndConditionList=[],this.invoiceTermList=[],this.totalInclusiveTaxRate=0,this.totalInvoiceAmount=0,this.actualInvoiceAmount=0,this.totalBalanceAmount=0,this.productDiscountAmt=0,this.isProductExist=!1,this.isValidLedger=!1,this.disabledAddItemBtn=!0,this.isValidQty=!0,this.discountPercent=0,this.discountAmount=0,this.discountSymbol="percent",this.disabledPerItemTaxDiscount=!0,this.showHideNewLineItem=!0,this.showDiscountOnBill=!0,this.isLoading=!1,this.recordPurchaseControl=new T.MJ,this.selectSupplierControl=new T.MJ,this.clientGroupList=l.DH.customerSupplierGroupObj("supplier"),this.selectProductControl=new T.MJ,this.todayInvoiceList=[],this.showOnItemTaxDiscount=!0,this.editInvoiceData={},this.cancelUrl="/purchases",this.otherIncomeAccountList=[],this.invoiceAddedPaymentList=[],this.paymentDefaultDate=new T.MJ(D().format("YYYY-MM-DD")),this.paymentAccountList=[],this.allPaymentList=[],this.allPaymentLinkList=[],this.allPaymentLinkListData=[],this.clientPaymentLinkList=[],this.invAdjustPaymentAvailableList=[],this.paymentControl=new T.MJ,this.receivePaymentNo=0,this.advanceAvailableAmt=0,this.previousOutStandingAmt=0,this.currentOutStandingAmt=0,this.advCarryFwdAmt=0,this.totalPaidAmt=0,this.paymentEditSaleAmt=0,this.paymentAgainstAmt=0,this.alreadyPaidLinkAmount=0,this.invAdjustPaidLinkAmount=0,this.invoiceAdjustAmt=0,this.allowAdvancePayment=!1,this.isLessPaymentLinkAmt=!1,this.deletePaymentIds=[],this.deleteAdjustPaymentIds=[],this.advPaymentlinkList=[],this.paymentMapUnlinkList=[],this.updateAdvacePaymentLinklist=[],this.listOfAdjustPaidInvoice=[],this.invAdjustSuccess=!1,this.invoiceDueDateOption=l.DH.invoiceDueDateOption(),this.newItemAddObject={productName:"",description:"",unit:"",itemQty:0,itemAmount:0,discountAmount:0,itemDiscountAmt:0,discountPercent:0,originalAmt:0,taxEntity:[],discountEntity:null,productCode:"",total:0},this.accountListTrranslatedKey=l.DH.accountListForTranslations(),this.invocieAddEditFormData={uniquePurchaseReturnKey:this.uniquePurchaseReturnKey,uniqueLeaderKey:this.uniqueLeaderKey,uniquePurchaseReturnAccountKey:"",uniqueKeyPurchase:null,selectSupplier:null,invocieDate:l.DH.dateToTimeStamp(D().format("YYYY-MM-DD")),invocieNumber:"",invocieHeader:"",invocieFooter:"",invocieNotes:"",purchaseProductList:[],subTotalProductAmt:0,originalProductAmount:0,invoiceAmountNonProduct:0,invoiceAmount:this.totalInvoiceAmount,balanceAmount:this.totalBalanceAmount,roundOffAmount:0,roundOffAmtIspositive:!1,discountEntity:null,taxList:[],discountOnFlag:0,discountAccount:[],roundOffAccountKey:"",termsAndConditions:"",userCustomFields:[],invoicePaymentList:this.invoiceAddedPaymentList,allowAdvancePayment:this.allowAdvancePayment,advPaymentlinkList:this.advPaymentlinkList,paymentAgainstAmt:this.paymentAgainstAmt,invoiceGenerated:!1,updateAdvacePaymentLinklist:this.updateAdvacePaymentLinklist,updateAdjustPaymentLinklist:[],listOfAdjustInvPaidLinklist:[],otherChargeList:[]},this.invoicePaymentObject={paymentAccount:null,paymentDate:l.DH.dateToTimeStamp(D().format("YYYY-MM-DD")),paymentNumber:"",paidAmount:null,note:""},this.isSyncingFirstTime=!0,this.hideTax=!0,this.orgId=this.authService.authInfo("user").orgId,this.isTaxEdited=!1,this.taxEditData=[],this.taxCheckedList=[],this.trackCheckedRecords=[],this.incExcTaxList=[],this.listItemCustomFields=[],this.isEditedCustomField=!1,this.previousTaxAccountList=[],this.prevUncheckedTaxList=[],this.prevDiscountExist=[],this.totalWriteOffAmount=0,this.title="add-Return"==this.actionType?"Create Purchase Return - Binz Accounting App":"Edit Purchase Return  - Binz Accounting App",this.commonService.setSEOInfo(this.title,[{name:"description",content:"Purchase Return"},{name:"keywords",content:"Invoice, Sale, Bill To, Ship To, Product, Services, Add Customer, Invoice Date, Due Date, Purchase Return Number, Purchase Return Date, Round Off, Terms and Condition, Custom Field, Note, Tax, Discount, Qty, Rate, Amount, Sub Total, Grand Total, Paid"},{name:"title",content:"Purchase Return"}])}ngOnInit(){this.commonService.broadcast("hideSidebar",!0),l.SE.destroyCache("purchase_return_form_object"),"add-Return"==this.actionType&&(this.purchaseReturnLineItemData=JSON.parse(l.SE.getCache("purchase_return_line_item_data"))),this.broadcastSubscription=this.commonService.receiveBroadcast().subscribe(e=>{(0,E.A)(e,"syncProcessComplete")&&e.syncProcessComplete&&(0,B.A)(()=>{"add-edit-purchase-return"==this.pageType&&((0,d.A)(this.taxAccountList)||(this.fetchPreviousData("tax"),this.fetchPreviousData("discount")),this.fetchDBData())})}),this.fetchDBData()}fetchDBData(){var e=this;return(0,O.A)(function*(){e.syncApiService.fetchMultipleDbData(["filterSettingData","filterTransactionNo","account","product","purchase","purchaseReturn","payment","paymentLink","writeOff","estimate","saleOrder","termsCondition","writeOff"],function(){var n=(0,O.A)(function*(i){var o=yield i.data;if(200===i.status&&!(0,d.A)(o)){if((0,E.A)(o,"filterSettingData")&&!(0,d.A)(o.filterSettingData)){e.settingData=o.filterSettingData;const s=e.settingData.featureSetting;e.enabledFeatureList=[],(0,F.A)(l.DH.featureTitleList(),c=>{s.find(p=>p.widgetUniqueKey===c.id&&p.isShow)&&e.enabledFeatureList.push(c.routes)}),e.hideTax=!!e.enabledFeatureList.includes("/accounts/tax-account"),e.customFields=e.settingData.customFields,(0,E.A)(e.settingData,"listItemCustomField")&&(e.listItemCustomFields=l.DH.prepareInvoiceCustomFields(e.settingData.listItemCustomField)),e.discountTypeSetting=e.settingData.discountTypeSetting,e.invocieAddEditFormData.discountOnFlag=e.discountTypeSetting,e.isSyncingFirstTime&&(e.invocieAddEditFormData.invocieDate=e.settingData.bookKeepingStartDate>D().valueOf()?l.DH.dateToTimeStamp(D.utc(e.settingData.bookKeepingStartDate).format("YYYY-MM-DD")):l.DH.dateToTimeStamp(D().format("YYYY-MM-DD")),e.invoicePaymentObject.paymentDate=e.settingData.bookKeepingStartDate>D().valueOf()?l.DH.dateToTimeStamp(D.utc(e.settingData.bookKeepingStartDate).format("YYYY-MM-DD")):l.DH.dateToTimeStamp(D().format("YYYY-MM-DD"))),e.currencySymbol=e.settingData.currencySymbol;let a=(0,d.A)(e.settingData.userCustomFields)?[]:Object.assign([],e.settingData.userCustomFields),u=e.invocieAddEditFormData.userCustomFields;e.invocieAddEditFormData.userCustomFields=(0,b.A)(e.commonService.convertToKeyValuePair(a.map((c,m)=>{let p={};return p[c]="",p})),"key","asc"),e.setPreviousCustomFieldData(u)}if((0,E.A)(o,"filterTransactionNo")&&(e.formatNameSettings=o.filterTransactionNo,!(0,d.A)(e.formatNameSettings))){e.settingFormData=e.commonService.formatTransactionNumber(e.formatNameSettings,"purchaseReturnFormatName","purchaseReturnFormatNo",null,"add-Return"==e.actionType?"add":"edit");let s=l.SE.getCache("transactionNo");e.invocieAddEditFormData.invocieNumber="add-Return"==e.actionType?e.settingFormData.transactionNumber:s,e.paymentFormatNo=e.commonService.paymentFormatNo(e.formatNameSettings,"receive",e.invoiceAddedPaymentList.length),e.invoicePaymentObject.paymentNumber=e.paymentFormatNo.transactionNumber}if((0,E.A)(o,"account")){e.accountList=o.account;let s=o.account.find(a=>"AC_PURCHASE_RET"==a.systemAccountKey);e.invocieAddEditFormData.uniquePurchaseReturnAccountKey=(0,d.A)(s)?"":s.uniqueKeyOfAccount,e.allClientList=l.DH.sortClientList(pluckClient(o.account,[1,2],!0)).filter(a=>"AC_WLK_CST"!=a.systemAccountKey),(0,d.A)(e.allClientList)||(e.allClientList=e.allClientList.filter(a=>0==a.enable)),e.roundOffAccountList=pluckAccount(o.account,"AC_RNF",!0),e.discountAccountList=pluckAccount(o.account,"AC_DISC",!0).map((a,u)=>({...a,total:0,percentage:null})),e.invocieAddEditFormData.discountAccount=e.discountAccountList,e.otherIncomeAccountList=(0,b.A)((0,P.A)(pluckAccount(o.account,9).map((a,u)=>{if(null==a.systemAccountKey&&22==a.defaultAccount){let c=(0,d.A)(e.invocieAddEditFormData.otherChargeList)?null:e.invocieAddEditFormData.otherChargeList.find(m=>m.uniqueKeyOtherChargeAccountEntry===a.uniqueKeyOfAccount);return{...a,amount:(0,d.A)(c)?0:c.chargeAmount}}}),void 0),["deviceCreateDate"],["asc"]),e.otherIncomeAccountListWithDirectExpense=(0,b.A)((0,P.A)(pluckAccount(o.account,5).map((a,u)=>{if(null==a.systemAccountKey){let c=(0,d.A)(e.invocieAddEditFormData.otherChargeList)?null:e.invocieAddEditFormData.otherChargeList.find(m=>m.uniqueKeyOtherChargeAccountEntry===a.uniqueKeyOfAccount);return{...a,amount:(0,d.A)(c)?0:c.chargeAmount}}}),void 0),["deviceCreateDate"],["asc"]);for(let a of e.otherIncomeAccountListWithDirectExpense)!(0,d.A)(a)&&22==a.defaultAccount&&e.otherIncomeAccountList.push(a);e.otherIncomeAccountList.map(a=>{a.otherChargeName=(0,d.A)(e.accountListTrranslatedKey.find(u=>u.title==a.nameOfAccount))?a.nameOfAccount:e.translocoService.translate(e.accountListTrranslatedKey.find(u=>u.title==a.nameOfAccount).translated_key)}),e.taxAccountList=(0,b.A)((0,P.A)(pluckAccount(o.account,8).map((a,u)=>{if(2==a.taxDetailEntity.taxType)return{...a,isChecked:!1,total:0,percentage:null}}),void 0),["deviceCreateDate"],["asc"]),"add-Return"==e.actionType&&1!=e.hideTax&&((0,d.A)(e.taxAccountList)||e.taxAccountList.map(a=>{a.isChecked=!1,a.taxDetailEntity&&(a.taxDetailEntity.initiallyChecked=!1)})),"add-Return"==e.actionType&&(!(0,d.A)(e.taxAccountList)||!(0,d.A)(e.discountAccountList))&&e.filterTaxDiscountAccountList(),e.paymentAccountList=pluckAccount(o.account,[7,11]),e.filterPaymentList=e.paymentControl.valueChanges.pipe((0,H.Z)(""),(0,K.T)(a=>"string"==typeof a?a:(0,d.A)(a)?"":a.nameOfAccount),(0,K.T)(a=>a?e._filterCli(a,"payment"):e.paymentAccountList.slice())),e.filterPaymentList.subscribe(a=>{a.map(u=>{u.nameOfAccount=(0,d.A)(e.accountListTrranslatedKey.find(c=>c.title==u.nameOfAccount))?u.nameOfAccount:e.translocoService.translate(e.accountListTrranslatedKey.find(c=>c.title==u.nameOfAccount).translated_key)})})}if((0,E.A)(o,"product")&&(e.productList=(0,d.A)(o.product)?[]:(0,ct.A)(o.product),e.filterProductList=e.selectProductControl.valueChanges.pipe((0,H.Z)(""),(0,K.T)(s=>"string"==typeof s?s:(0,d.A)(s)?"":s.productName),(0,K.T)(s=>s?e._filterProduct(s):l.DH.sortListAlphaBetically(e.productList,"productName").filter(a=>0==a.enable).slice()))),(0,E.A)(o,"purchaseReturn")&&(e.purchaseReturnList=o.purchaseReturn),(0,E.A)(o,"purchase")&&(e.purchaseInvoiceList=o.purchase),(0,E.A)(o,"ledger")&&(e.allLedgerList=o.ledger),(0,E.A)(o,"payment")&&(e.allPaymentList=o.payment),(0,E.A)(o,"paymentLink")&&(e.allPaymentLinkList=o.paymentLink,e.allPaymentLinkListData=o.paymentLink),(0,E.A)(o,"writeOff")&&(e.allWriteOffList=o.writeOff,!(0,d.A)(o.writeOff)&&(0,E.A)(e.settingData,"invoicePaymentTracking")&&1==e.settingData.invoicePaymentTracking&&(e.totalWriteOffAmount=l.DH.roundToEven((0,L.A)(o.writeOff.filter(s=>s.uniqueKeyOtherFK==e.editInvoiceReturnId),"amount"),2),e.calInvoicePaymentAndRoundOffAmt(e.invocieAddEditFormData.roundOffAmount))),(0,E.A)(o,"termsCondition")&&(e.termsAndConditionList=o.termsCondition,!(0,d.A)(o.termsCondition)))if("add-Return"==e.actionType){let s=o.termsCondition.filter(u=>u.defaultTerms);(0,d.A)(s)||s.map(u=>u.termsAndCondition),e.invoiceTermList=s}else"edit-Return"==e.actionType&&(e.prepareEditData(),e.isSyncingFirstTime=!1);e.isSyncingFirstTime&&("add-Return"==e.actionType&&e.preparePurchaseReturnMakeInvocieData(),"edit-Return"==e.actionType&&e.prepareEditData(),e.isSyncingFirstTime=!1),e.fetchTodayInvoiceList(e.purchaseReturnList),e.isLoading||e.fetchPaymentAmount(),e.isLoading||e.calInvoicePaymentAndRoundOffAmt(e.invocieAddEditFormData.roundOffAmount)}});return function(i){return n.apply(this,arguments)}}())})()}filterTaxDiscountAccountList(e){(0,d.A)(this.taxAccountList)||(this.taxAccountList=this.taxAccountList.map((n,i)=>{let o=this.invocieAddEditFormData.taxList.find(a=>a.uniqueKeyTaxAccountEntry===n.uniqueKeyOfAccount);if((0,R.A)(o)&&0===n.taxDetailEntity.taxApplicableOn&&n.isChecked){if("edit-Return"===this.actionType&&0==n.enable){let a=Object.assign({},n.taxDetailEntity);return a.initiallyChecked=!1,{...n,isChecked:!1,taxDetailEntity:a,enable:0}}}else{if(!(0,R.A)(o)&&0===n.taxDetailEntity.taxApplicableOn&&!n.isChecked){let a=this.invocieAddEditFormData.taxList.findIndex(u=>u.uniqueKeyTaxAccountEntry==n.uniqueKeyOfAccount);return a>=0&&(this.invocieAddEditFormData.taxList=this.invocieAddEditFormData.taxList.map((u,c)=>c!==a?u:{...u,taxInclExcl:n.taxDetailEntity.taxInclExcl,percentage:l.DH.roundToEven(o.percentage,this.settingData.percentRoundOff),enable:0})),{...n,isChecked:!0,percentage:l.DH.roundToEven(o.percentage,this.settingData.percentRoundOff),enable:0}}if(!(0,R.A)(o)&&0===n.taxDetailEntity.taxApplicableOn&&n.isChecked){let a=this.invocieAddEditFormData.taxList.findIndex(u=>u.uniqueKeyTaxAccountEntry==n.uniqueKeyOfAccount);return a>=0&&(this.invocieAddEditFormData.taxList=this.invocieAddEditFormData.taxList.map((u,c)=>c!==a?u:{...u,taxInclExcl:n.taxDetailEntity.taxInclExcl,percentage:l.DH.roundToEven(o.percentage,this.settingData.percentRoundOff),enable:0})),{...n,percentage:l.DH.roundToEven(o.percentage,this.settingData.percentRoundOff),enable:0}}if(!(0,R.A)(o)&&1===n.taxDetailEntity.taxApplicableOn)if("add-Return"===this.actionType){let a=this.invocieAddEditFormData.taxList.findIndex(u=>u.uniqueKeyTaxAccountEntry==n.uniqueKeyOfAccount);a>=0&&this.invocieAddEditFormData.taxList.splice(a,1)}else if("edit-Return"===this.actionType&&!(0,d.A)(this.editInvoiceData)){let a=Object.assign({},n.taxDetailEntity);return a.taxApplicableOn=0,{...n,isChecked:!0,percentage:l.DH.roundToEven(o.percentage,this.settingData.percentRoundOff),taxDetailEntity:a,enable:0}}}let s=this.newItemAddObject.taxEntity.find(a=>a.uniqueKeyTaxAccountEntry===n.uniqueKeyOfAccount);if((0,R.A)(s)&&1===n.taxDetailEntity.taxApplicableOn&&n.isChecked){if("add-Return"===this.actionType)this.selectedNewItemTax(n,i);else if("edit-Return"===this.actionType&&0==n.enable){let a=Object.assign({},n.taxDetailEntity);return a.initiallyChecked=!1,{...n,isChecked:!1,taxDetailEntity:a,enable:0}}}else{if(!(0,R.A)(s)&&1===n.taxDetailEntity.taxApplicableOn&&!n.isChecked){let a=this.newItemAddObject.taxEntity.findIndex(u=>u.uniqueKeyTaxAccountEntry===s.uniqueKeyTaxAccountEntry);return a>=0&&(this.newItemAddObject.taxEntity=this.newItemAddObject.taxEntity.map((u,c)=>c!==a?u:{...u,taxInclExcl:n.taxDetailEntity.taxInclExcl,percentage:l.DH.roundToEven(s.percentage,this.settingData.percentRoundOff),enable:0})),{...n,isChecked:!0,percentage:l.DH.roundToEven(s.percentage,this.settingData.percentRoundOff),enable:0}}if(!(0,R.A)(s)&&1===n.taxDetailEntity.taxApplicableOn&&n.isChecked){let a=this.newItemAddObject.taxEntity.findIndex(u=>u.uniqueKeyTaxAccountEntry===s.uniqueKeyTaxAccountEntry);return a>=0&&(this.newItemAddObject.taxEntity=this.newItemAddObject.taxEntity.map((u,c)=>c!==a?u:{...u,taxInclExcl:n.taxDetailEntity.taxInclExcl,percentage:l.DH.roundToEven(s.percentage,this.settingData.percentRoundOff),enable:0})),{...n,percentage:l.DH.roundToEven(s.percentage,this.settingData.percentRoundOff),enable:0}}if(!(0,R.A)(s)&&0===n.taxDetailEntity.taxApplicableOn){let a=this.newItemAddObject.taxEntity.findIndex(u=>u.uniqueKeyTaxAccountEntry===s.uniqueKeyTaxAccountEntry);a>=0&&this.newItemAddObject.taxEntity.splice(a,1)}}if(!("add-Return"!==this.actionType&&"edit-Return"!==this.actionType||this.invocieAddEditFormData.invoiceGenerated||(0,d.A)(this.invocieAddEditFormData.purchaseProductList)))for(const a in this.invocieAddEditFormData.purchaseProductList){const u=this.invocieAddEditFormData.purchaseProductList[a];if(!(0,d.A)(u.appliedTax)){let m=this.jsonParse(u.appliedTax).find(p=>p.uniqueKeyTaxAccountEntry===n.uniqueKeyOfAccount);if(!(0,d.A)(m)){let p=Object.assign({},n.taxDetailEntity);return p.taxApplicableOn=1,p.taxInclExcl=m.taxInclExcl,{...n,taxDetailEntity:p,enable:0}}}}return{...n}}),this.calculateTax(),this.calculateNewItemTax()),(0,d.A)(this.discountAccountList)||(this.discountAccountList=this.discountAccountList.map((n,i)=>{if("edit-Return"===this.actionType)!(0,d.A)(this.invocieAddEditFormData.discountEntity)&&1==this.discountTypeSetting&&(0,d.A)(e)?(this.discountTypeSetting=0,this.calculateDiscount(this.discountPercent,this.invocieAddEditFormData.discountEntity.uniqueKeyAccountEntity)):parseInt(e)>0&&!(0,d.A)(this.invocieAddEditFormData.discountEntity)&&(this.discountTypeSetting=parseInt(e),this.calculateDiscount(null,null)),0==this.discountTypeSetting&&((0,d.A)(this.newItemAddObject.discountEntity)||this.getNewItemDiscount(null,null),(0,F.A)(this.invocieAddEditFormData.purchaseProductList,(o,s)=>{(o.discountAmount>0||o.discountPercentage>0)&&(this.discountTypeSetting=1)}));else if("add-Return"===this.actionType)if(!(0,d.A)(this.invocieAddEditFormData.discountEntity)&&1==this.discountTypeSetting&&(0,d.A)(e))this.calculateDiscount(null,null);else if((0,d.A)(this.invocieAddEditFormData.discountEntity)&&1==this.discountTypeSetting&&(0,d.A)(e)){if((0,E.A)(this.newItemAddObject,"discountEntity")&&!(0,d.A)(this.newItemAddObject.discountEntity))return{...n,percentage:l.DH.roundToEven(this.newItemAddObject.discountEntity.percentage,this.settingData.percentRoundOff)}}else{if(!(0,d.A)(this.invocieAddEditFormData.discountEntity)&&0==this.discountTypeSetting&&(0,d.A)(e)){let o=0;return 0==this.invocieAddEditFormData.discountEntity.discountFlag?o=this.invocieAddEditFormData.discountEntity.percentage:1==this.invocieAddEditFormData.discountEntity.discountFlag&&(o=this.invocieAddEditFormData.discountEntity.discountAmount),{...n,percentage:l.DH.roundToEven(o,this.settingData.percentRoundOff)}}0==this.discountTypeSetting&&this.getNewItemDiscount(null,null)}return{...n}}),this.invocieAddEditFormData.discountOnFlag=this.discountTypeSetting)}prepareEditData(){if(this.editInvoiceData=this.purchaseReturnList.find(e=>e.uniqueKeyPurchaseReturn===this.editInvoiceReturnId),!(0,d.A)(this.editInvoiceData)){const e=(0,d.A)(this.invocieAddEditFormData.selectSupplier)?this.allClientList.find(c=>c.uniqueKeyFKOtherTable==String(this.editInvoiceData.uniqueKeyFKClient)):this.invocieAddEditFormData.selectSupplier,n=this.jsonParse(this.editInvoiceData.userCustomFields);let i=(0,d.A)(this.invocieAddEditFormData.purchaseProductList)?[]:this.invocieAddEditFormData.purchaseProductList,o=(0,d.A)(n)?[]:n,s=[];if(this.totalInvoiceAmount=this.editInvoiceData.amount,this.actualInvoiceAmount=this.editInvoiceData.amount,this.paymentEditSaleAmt=this.editInvoiceData.amount,this.editInvoiceData.invoiceProductAvailable||(0,d.A)(this.editInvoiceData.uniqueFKPurchaseEntity)){if(this.editInvoiceData.invoiceProductAvailable){let c=this.purchaseInvoiceList.filter(m=>this.editInvoiceData.purchaseReturnMappingList.map(p=>p.uniqueKeyPurchase).includes(m.uniqueKeyPurchase)).map(m=>m.createDate);this.invoiceMinDate=(0,U.A)(c)>0?this.settingData.bookKeepingStartDate>D().valueOf()?D(this.settingData.bookKeepingStartDate).toDate():D((0,U.A)(c)).toDate():D(this.editInvoiceData.createDate).toDate(),this.invoiceMinDate=new Date(this.invoiceMinDate.getTime()+6e4*this.invoiceMinDate.getTimezoneOffset())}}else{let c=this.purchaseInvoiceList.find(m=>m.uniqueKeyPurchase==this.editInvoiceData.uniqueFKPurchaseEntity);this.invoiceMinDate=(0,d.A)(c)?D(this.editInvoiceData.createDate).toDate():this.settingData.bookKeepingStartDate>D().valueOf()?D(this.settingData.bookKeepingStartDate).toDate():D(c.createDate).toDate(),this.invoiceMinDate=new Date(this.invoiceMinDate.getTime()+6e4*this.invoiceMinDate.getTimezoneOffset())}let a=this.invocieAddEditFormData.otherChargeList;if(!(0,d.A)(this.invocieAddEditFormData.otherChargeList)&&this.editInvoiceData.otherChargeList&&this.editInvoiceData.otherChargeList.length==this.invocieAddEditFormData.otherChargeList.length)for(let c=0;c<this.editInvoiceData.otherChargeList.length;c++){const m=this.editInvoiceData.otherChargeList[c],p=this.invocieAddEditFormData.otherChargeList.find(v=>v.uniqueKeyOtherChargeAccountEntry===m.uniqueKeyOtherChargeAccountEntry);s=p&&m.chargeAmount!==p.chargeAmount?(0,d.A)(this.editInvoiceData.otherChargeList)?this.invocieAddEditFormData.otherChargeList:this.editInvoiceData.otherChargeList:(0,d.A)(s)?this.invocieAddEditFormData.otherChargeList:s}else s=(0,d.A)(this.editInvoiceData.otherChargeList)?null:this.editInvoiceData.otherChargeList;if((0,d.A)(a)||(s=a),(0,E.A)(this.settingData,"userCustomFields")&&!(0,d.A)(this.settingData.userCustomFields)&&(0,F.A)(this.settingData.userCustomFields,c=>{let m=o.find((p,v)=>Object.keys(p).includes(c));if((0,d.A)(m)){let p={};p[c]="",o.push(p)}}),(0,d.A)(this.invocieAddEditFormData.purchaseProductList)&&!(0,d.A)(this.editInvoiceData.purchaseReturnProductList)&&(i=this.editInvoiceData.purchaseReturnProductList.map(c=>{let m=this.productList.find(x=>x.uniqueKeyProduct==c.uniqueKeyFKProduct),p=this.editInvoiceData.purchaseReturnMappingList.find(x=>x.uniquePurchaseReturnLineItemId==c.uniqueKeyPurchaseReturnProduct),v=l.DH.roundToEven(c.qty,this.settingData.quantityRoundOff),y=l.DH.roundToEven(c.rate,this.settingData.rateRoundOff),f=0,g=0,I=0;if((0==c.discountFlag||1==c.discountFlag)&&(f=c.discountAmount),!(0,d.A)(c.appliedTax)&&!(0,d.A)(this.jsonParse(c.appliedTax))){let x=this.jsonParse(c.appliedTax);g=(0,L.A)(x.filter(C=>0==C.taxInclExcl),"calculateTax")}return I=v*y-f+g,{...c,productName:(0,d.A)(m)?c.productName:m.productName,qty:v,rate:y,total:l.DH.roundToEven(I,this.settingData.amountRoundOff),isPurchaseInvProduct:!0,uniqueKeyPurchase:(0,d.A)(p)?"":p.uniqueKeyPurchase,uniqueKeyInvoiceProduct:(0,d.A)(p)?"":p.uniquePurchaseLineItemId}})),this.invocieAddEditFormData={uniquePurchaseReturnKey:this.editInvoiceData.uniqueKeyPurchaseReturn,uniqueLeaderKey:this.editInvoiceData.ledgerEntity.uniqueKeyLedger,uniquePurchaseReturnAccountKey:(0,d.A)(this.editInvoiceData.uniqueKeyFKPurchaseReturnAccountKey)?"":this.editInvoiceData.uniqueKeyFKPurchaseReturnAccountKey,uniqueKeyPurchase:this.editInvoiceData.uniqueFKPurchaseEntity,selectSupplier:e,invocieDate:this.editInvoiceData.createDate,invocieNumber:this.editInvoiceData.purchaseReturnFormatNumber,invocieHeader:this.invocieAddEditFormData.invocieHeader?this.invocieAddEditFormData.invocieHeader:this.editInvoiceData.headerInvoice,invocieFooter:this.invocieAddEditFormData.invocieFooter?this.invocieAddEditFormData.invocieFooter:this.editInvoiceData.footerInvoice,invocieNotes:this.invocieAddEditFormData.invocieNotes?this.invocieAddEditFormData.invocieNotes:this.editInvoiceData.notes,purchaseProductList:(0,d.A)(i)?[]:i,subTotalProductAmt:0,originalProductAmount:this.editInvoiceData.productAmount,invoiceAmount:this.editInvoiceData.amount,balanceAmount:this.editInvoiceData.balance,roundOffAmount:(0,d.A)(this.editInvoiceData.roundOffEntity)?0:this.editInvoiceData.roundOffEntity.amount,roundOffAmtIspositive:!(0,d.A)(this.editInvoiceData.roundOffEntity)&&2==this.editInvoiceData.roundOffEntity.crDrType,termsAndConditions:this.editInvoiceData.termsAndConditions,userCustomFields:(0,b.A)(this.commonService.convertToKeyValuePair(o),"key","asc"),invoiceAmountNonProduct:this.editInvoiceData.invoiceProductAvailable?0:this.editInvoiceData.productAmount,discountEntity:(0,d.A)(this.editInvoiceData.discountEntity)?null:this.editInvoiceData.discountEntity,taxList:(0,d.A)(this.editInvoiceData.taxList)?[]:0==this.isTaxEdited?this.editInvoiceData.taxList:this.taxEditData,discountOnFlag:this.editInvoiceData.discountOnFlag,roundOffAccountKey:(0,d.A)(this.editInvoiceData.roundOffEntity)?"":this.editInvoiceData.roundOffEntity.uniqueKeyAccountEntity,discountAccount:this.discountAccountList,invoicePaymentList:this.invoiceAddedPaymentList,allowAdvancePayment:this.allowAdvancePayment,advPaymentlinkList:this.advPaymentlinkList,paymentAgainstAmt:this.paymentAgainstAmt,invoiceGenerated:!this.editInvoiceData.invoiceProductAvailable,updateAdvacePaymentLinklist:this.updateAdvacePaymentLinklist,updateAdjustPaymentLinklist:[],listOfAdjustInvPaidLinklist:[],otherChargeList:s},this.invoiceTermList=[],!(0,d.A)(this.editInvoiceData.termAndCondition)){let c=JSON.parse(this.editInvoiceData.termAndCondition);(0,F.A)(c,m=>{let p=this.termsAndConditionList.find(v=>v.termsAndCondition.toLowerCase().replace(/ /g,"")===m.toLowerCase().replace(/ /g,""));(0,d.A)(p)||this.invoiceTermList.push(p)})}(0,d.A)(this.editInvoiceData.taxList)||(this.taxAccountList=this.taxAccountList.map((c,m)=>{let p=this.editInvoiceData.taxList.find(g=>g.uniqueKeyTaxAccountEntry===c.uniqueKeyOfAccount&&0==c.taxDetailEntity.taxApplicableOn);if((0,d.A)(p))return c;let v=Object.assign({},c.taxDetailEntity);if(v.taxInclExcl=p.taxInclExcl,1==this.isTaxEdited&&!(0,d.A)(this.incExcTaxList)){let g=this.incExcTaxList.findIndex(I=>I.uniqueKeyOfAccount==c.uniqueKeyOfAccount);g>=0&&(v.taxInclExcl=this.incExcTaxList[g].taxDetailEntity.taxInclExcl,this.incExcTaxList.splice(g,1))}let y=!0,f=!1;if(1==this.isTaxEdited&&!(0,d.A)(this.taxEditData)){let g=this.taxEditData.find(x=>x.uniqueKeyTaxAccountEntry==c.uniqueKeyOfAccount);if((0,d.A)(g)||(v.taxInclExcl=g.taxInclExcl),this.trackCheckedRecords.findIndex(x=>x.uniqueKeyOfAccount==c.uniqueKeyOfAccount)>=0&&(f=!0),!(0,d.A)(this.taxCheckedList)){let x=this.taxCheckedList.findIndex(C=>C.uniqueKeyOfAccount==c.uniqueKeyOfAccount);x>=0&&(y=this.taxCheckedList[x].isChecked,this.taxCheckedList.splice(x,1))}}return{...c,isChecked:y,percentage:f?null:l.DH.roundToEven(p.percentage,this.settingData.percentRoundOff),total:f?0:p.calculateTax,taxDetailEntity:v}})),!(0,d.A)(this.prevUncheckedTaxList)&&!(0,d.A)(this.invocieAddEditFormData.taxList)&&this.prevUncheckedTaxList.map(c=>{let m=this.invocieAddEditFormData.taxList.findIndex(p=>p.uniqueKeyTaxAccountEntry==c.uniqueKeyTaxAccountEntry);if(m>=0){let p=this.taxAccountList.findIndex(v=>v.uniqueKeyOfAccount==c.uniqueKeyTaxAccountEntry);this.taxAccountList[p].isChecked=!1,this.taxAccountList[p].percentage=null,this.taxAccountList[p].total=0,this.invocieAddEditFormData.taxList.splice(m,1)}}),(0,d.A)(this.previousTaxAccountList)||(this.previousTaxAccountList.map(c=>{if((0,d.A)(this.invocieAddEditFormData.taxList))this.invocieAddEditFormData.taxList.push(c);else{let m=this.invocieAddEditFormData.taxList.findIndex(p=>p.uniqueKeyTaxAccountEntry==c.uniqueKeyTaxAccountEntry);m>=0?this.invocieAddEditFormData.taxList[m]={...this.invocieAddEditFormData.taxList[m],percentage:c.percentage,isChecked:c.isChecked}:this.invocieAddEditFormData.taxList.push(c)}}),this.previousTaxAccountList=[]),(0,d.A)(this.editInvoiceData.otherChargeList)||(this.otherIncomeAccountList=this.otherIncomeAccountList.map((c,m)=>{let p=this.editInvoiceData.otherChargeList.find(v=>v.uniqueKeyOtherChargeAccountEntry===c.uniqueKeyOfAccount);return(0,d.A)(p)?{...c,amount:0}:{...c,amount:p.chargeAmount}})),this.otherIncomeAccountList.map(c=>{if(!(0,d.A)(s)){let m=s.find(p=>p.uniqueKeyOtherChargeAccountEntry===c.uniqueKeyOfAccount);(0,d.A)(m)||(c.amount=m.chargeAmount)}}),(0,d.A)(s)&&((0,d.A)(this.otherIncomeAccountList)||this.otherIncomeAccountList.map(c=>{c.amount=0})),(0,d.A)(this.editInvoiceData.discountEntity)?this.discountAccountList.map(c=>{(0,d.A)(this.prevDiscountEntity)?(0,d.A)(this.prevDiscountExist)||(this.discountPercent=0,this.prevDiscountExist=null,c.percentage=0,c.total=0):(this.discountPercent=this.prevDiscountEntity.percentage,c.percentage=this.prevDiscountEntity.percentage,c.total=this.prevDiscountEntity.calculatedDiscount)}):this.discountAccountList=this.discountAccountList.map(c=>{if(this.editInvoiceData.discountEntity.uniqueKeyAccountEntity===c.uniqueKeyOfAccount){let m=null;return 0==this.editInvoiceData.discountEntity.discountFlag?(this.discountSymbol="percent",m=this.editInvoiceData.discountEntity.percentage):1==this.editInvoiceData.discountEntity.discountFlag&&(this.discountSymbol="rupay",m=this.editInvoiceData.discountEntity.discountAmount),this.discountPercent=m,(0,d.A)(this.prevDiscountEntity)||this.prevDiscountEntity.uniqueKeyAccountEntity!=c.uniqueKeyOfAccount?(0,d.A)(this.prevDiscountExist)?{...c,percentage:l.DH.roundToEven(m,this.settingData.percentRoundOff),total:this.editInvoiceData.discountEntity.calculatedDiscount}:(this.discountPercent=0,this.prevDiscountExist=null,{...c,percentage:0,total:0}):(this.discountPercent=this.prevDiscountEntity.percentage,{...c,percentage:this.prevDiscountEntity.percentage,total:this.prevDiscountEntity.calculatedDiscount})}}),(0,d.A)(this.prevDiscountEntity)||(this.invocieAddEditFormData.discountEntity=this.prevDiscountEntity,this.prevDiscountEntity=null),this.calInvoiceAmt(this.invocieAddEditFormData.purchaseProductList),(!(0,d.A)(this.taxAccountList)||!(0,d.A)(this.discountAccountList))&&this.filterTaxDiscountAccountList()}}preparePurchaseReturnMakeInvocieData(){if(!(0,_.A)(this.purchaseReturnLineItemData)&&!(0,d.A)(this.settingData)){const e=(0,d.A)(this.invocieAddEditFormData.selectSupplier)?this.allClientList.find(o=>o.uniqueKeyOfAccount==this.clientAccountId):this.invocieAddEditFormData.selectSupplier;let n=[],i=(0,d.A)(this.invocieAddEditFormData.otherChargeList)?[]:this.invocieAddEditFormData.otherChargeList;if(this.purchaseReturnLineItemData.invoiceGenerated||(0,d.A)(this.purchaseReturnLineItemData.withoutLineItemData)){let o=this.purchaseReturnLineItemData.selectedLineItemList.map(a=>a.uniqueKeyPurchase);n=this.purchaseInvoiceList.filter(a=>o.includes(a.uniqueKeyPurchase)),this.invoiceMinDate=(0,d.A)(this.purchaseReturnLineItemData.selectedLineItemList)?D().toDate():D(this.purchaseReturnLineItemData.selectedLineItemList[0].invoiceDate).toDate(),this.invoiceMinDate=new Date(this.invoiceMinDate.getTime()+6e4*this.invoiceMinDate.getTimezoneOffset());let s=(0,d.A)(this.invocieAddEditFormData.purchaseProductList)?[]:this.invocieAddEditFormData.purchaseProductList;(0,d.A)(this.invocieAddEditFormData.purchaseProductList)&&!(0,d.A)(this.purchaseReturnLineItemData.selectedLineItemList)&&(s=this.purchaseReturnLineItemData.selectedLineItemList.map(a=>{let u=this.productList.find(g=>g.uniqueKeyProduct==a.uniqueKeyFKProduct),c=l.DH.roundToEven(a.qty,this.settingData.quantityRoundOff),m=l.DH.roundToEven(a.rate,this.settingData.rateRoundOff),v=0,y=[],f=l.DH.roundToEven(c*m,2);return 0==a.discountFlag?v=l.DH.roundToEven(f*a.discountPercentage/100,2):1==a.discountFlag&&(v=a.discountAmount),f-=l.DH.roundToEven(v,2),0==this.discountTypeSetting&&v>0&&(this.discountTypeSetting=1),(0,F.A)(this.jsonParse(a.appliedTax),g=>{let I=0;if(0==g.taxInclExcl)I=l.DH.roundToEven(f*g.percentage/100,2);else if(1==g.taxInclExcl){let x=l.DH.roundToEven((0,L.A)(this.jsonParse(a.appliedTax).filter(C=>1==C.taxInclExcl),"percentage"),2);I=l.DH.roundToEven(f*g.percentage/(100+x),2)}y.push({calculateTax:I,percentage:g.percentage,taxInclExcl:g.taxInclExcl,uniqueKeyTaxAccountEntry:g.uniqueKeyTaxAccountEntry})}),f+=l.DH.roundToEven((0,L.A)(y.filter(g=>0==g.taxInclExcl),"calculateTax"),2),this.purchaseReturnService.createPurchaseReturnProductObj({productName:(0,d.A)(u)?a.productName:u.productName,qty:a.qty,baseRate:a.baseRate,rate:a.rate,description:a.description,discountAmount:a.discountAmount,discountFlag:a.discountFlag,discountPercentage:a.discountPercentage,productCode:a.productCode,appliedTax:JSON.stringify(y),total:f,uniqueKeyPurchaseReturn:this.invocieAddEditFormData.uniquePurchaseReturnKey,uniqueKeyProduct:a.uniqueKeyFKProduct,unit:a.unit,isPurchaseInvProduct:!0,uniqueKeyPurchase:a.uniqueKeyPurchase,uniqueKeyInvoiceProduct:a.uniqueKeyInvoiceProduct,listItemCustomField:a.listItemCustomField})})),this.invocieAddEditFormData.purchaseProductList=Object.assign([],s)}else{n=this.purchaseInvoiceList.filter(u=>this.purchaseReturnLineItemData.withoutLineItemData.uniqueKeyPurchase==u.uniqueKeyPurchase),this.invoiceMinDate=(0,d.A)(this.purchaseReturnLineItemData.withoutLineItemData)?D().toDate():D(this.purchaseReturnLineItemData.withoutLineItemData.createDate).toDate(),this.invoiceMinDate=new Date(this.invoiceMinDate.getTime()+6e4*this.invoiceMinDate.getTimezoneOffset()),this.invocieAddEditFormData.invoiceGenerated=!0,this.invocieAddEditFormData.uniqueKeyPurchase=(0,d.A)(this.purchaseReturnLineItemData.withoutLineItemData)||(0,d.A)(this.purchaseReturnLineItemData.withoutLineItemData.editData.uniqueKeyPurchase)?null:this.purchaseReturnLineItemData.withoutLineItemData.editData.uniqueKeyPurchase;let o=this.purchaseReturnList.filter(u=>u.uniqueFKPurchaseEntity===this.purchaseReturnLineItemData.withoutLineItemData.editData.uniqueKeyPurchase),s=l.DH.roundToEven((0,L.A)(o,"productAmount"),2),a=this.purchaseReturnLineItemData.withoutLineItemData.editData.productAmount;this.invocieAddEditFormData.invoiceAmountNonProduct=(0,d.A)(o)?a:Math.abs(a-s)}e.nameOfAccount=(0,d.A)(this.accountListTrranslatedKey.find(o=>o.title==e.nameOfAccount))?e.nameOfAccount:this.translocoService.translate(this.accountListTrranslatedKey.find(o=>o.title==e.nameOfAccount).translated_key),this.invocieAddEditFormData.selectSupplier=Object.assign({},e),this.invocieAddEditFormData.taxList=[],this.taxAccountList=(0,P.A)(this.taxAccountList.map((o,s)=>{let a=[];(0,F.A)(n,p=>{let v=(0,d.A)(p.taxList)?null:p.taxList.find(y=>y.uniqueKeyTaxAccountEntry==o.uniqueKeyOfAccount);a.push({uniqueKeyOfAccount:o.uniqueKeyOfAccount,uniqueKeyPurchase:p.uniqueKeyPurchase,percentage:(0,d.A)(v)?null:v.percentage,taxInclExcl:(0,d.A)(v)?null:v.taxInclExcl,calculateTax:(0,d.A)(v)?null:v.calculateTax,taxName:o.nameOfAccount,taxExist:!(0,d.A)(v)})});let u=!(0,d.A)(a)&&a.some(p=>!p.taxExist),c=a.map(p=>p.percentage),m=!(0,d.A)(c)&&c.every(p=>p===c[0]);if(u||(0,d.A)(c)||!m)return o;{let p=Object.assign({},o.taxDetailEntity);return p.taxInclExcl=a[0].taxInclExcl,p.taxApplicableOn=0,this.invocieAddEditFormData.taxList.push(this.purchaseReturnService.createPurchaseReturnTaxObj(this.settingData,{calculateTax:l.DH.roundToEven(a[0].calculateTax,2),percentage:l.DH.roundToEven(a[0].percentage,this.settingData.percentRoundOff),taxInclExcl:p.taxInclExcl,uniqueKeySalesReturn:this.invocieAddEditFormData.uniquePurchaseReturnKey,uniqueLeaderKey:this.invocieAddEditFormData.uniqueLeaderKey,uniqueKeyTaxAccountEntry:o.uniqueKeyOfAccount})),{...o,isChecked:!0,percentage:l.DH.roundToEven(a[0].percentage,this.settingData.percentRoundOff),total:l.DH.roundToEven(a[0].calculateTax,2),taxDetailEntity:p}}}),void 0),this.otherIncomeAccountList=this.otherIncomeAccountList.map((o,s)=>{let a=[];(0,F.A)(n,p=>{if(!(0,d.A)(p.otherChargeList)){let v=(0,d.A)(p.otherChargeList)?null:p.otherChargeList.find(y=>y.uniqueKeyOtherChargeAccountEntry==o.uniqueKeyOfAccount);(0,d.A)(v)||a.push({uniqueKeyOfAccount:o.uniqueKeyOfAccount,uniqueKeySales:p.uniqueKeySales,chargeAmount:(0,d.A)(v)?null:v.chargeAmount,otherChargeName:o.nameOfAccount,otherIncExist:!(0,d.A)(v)})}});let u=!(0,d.A)(a)&&a.some(p=>!p.otherIncExist),c=a.map(1==a.length?p=>p.chargeAmount:p=>p.chargeAmount=0),m=!(0,d.A)(c)&&c.every(p=>p===c[0]);if(u||(0,d.A)(c)||!m)return o;if((0,d.A)(this.invocieAddEditFormData.otherChargeList)){let p=1==a.length?a[0]:null;(0,d.A)(p)||i.push(this.purchaseReturnService.createPurchaseReturnOtherChargeObj({amount:l.DH.roundToEven(p.chargeAmount,2),name:p.otherChargeName,uniqueKeyOfAccount:p.uniqueKeyOfAccount,uniqueKeyPurchaseReturn:this.invocieAddEditFormData.uniquePurchaseReturnKey,uniqueLeaderKey:this.invocieAddEditFormData.uniqueLeaderKey}))}return{...o,amount:c[0]}}),this.invocieAddEditFormData.otherChargeList=Object.assign([],i),this.discountAccountList=this.discountAccountList.map(o=>{if(0==this.discountTypeSetting){let s=[];(0,F.A)(n,f=>{s.push({uniqueKeyOfAccount:o.uniqueKeyOfAccount,uniqueKeyPurchase:f.uniqueKeyPurchase,discountEntity:(0,d.A)(f.discountEntity)?null:f.discountEntity,percentage:(0,d.A)(f.discountEntity)?null:f.discountEntity.percentage,discountAmount:(0,d.A)(f.discountEntity)?null:f.discountEntity.discountAmount,discountFlag:(0,d.A)(f.discountEntity)?null:f.discountEntity.discountFlag,disExist:!(0,d.A)(f.discountEntity)})});let a=!(0,d.A)(s)&&s.some(f=>!f.disExist),u=s.map(f=>f.percentage),c=s.map(f=>f.discountFlag),m=s.map(f=>f.discountAmount),p=!(0,d.A)(u)&&u.every(f=>f===u[0]),v=!(0,d.A)(c)&&c.every(f=>f===c[0]),y=!(0,d.A)(m)&&m.every(f=>f===m[0]);if(!a&&p&&v&&y){let f=null;return 0==c[0]?(this.discountSymbol="percent",f=u[0]):1==c[0]&&(this.discountSymbol="rupay",f=m[0]),this.discountPercent=f,this.discountTypeSetting=0,this.calculateDiscount(this.discountPercent,o.uniqueKeyOfAccount),{...o,percentage:l.DH.roundToEven(f,this.settingData.percentRoundOff)}}return o}return o}),this.roundOffAccountList.map((o,s)=>{let a=[];(0,F.A)(n,y=>{a.push({uniqueKeyOfAccount:o.uniqueKeyOfAccount,uniqueKeyPurchase:y.uniqueKeyPurchase,crDrType:(0,d.A)(y.roundOffEntity)?null:y.roundOffEntity.crDrType,amount:(0,d.A)(y.roundOffEntity)?null:y.roundOffEntity.amount,rounfOffAccExist:!(0,d.A)(y.roundOffEntity)})}),a=1==a.filter(y=>!(0,d.A)(y)&&y.amount>0).length?[a.find(y=>!(0,d.A)(y)&&y.amount>0)]:a;let u=!(0,d.A)(a)&&a.some(y=>!y.rounfOffAccExist),c=a.map(y=>y.amount),m=a.map(y=>y.crDrType),p=!(0,d.A)(m)&&m.every(y=>y===m[0]),v=!(0,d.A)(c)&&c.every(y=>y===c[0]);!u&&!(0,d.A)(c)&&!(0,d.A)(m)&&p&&v&&(this.invocieAddEditFormData.roundOffAccountKey=o.uniqueKeyOfAccount,this.invocieAddEditFormData.roundOffAmount=c[0],this.invocieAddEditFormData.roundOffAmtIspositive=1==m[0])}),(0,d.A)(this.termsAndConditionList)||(this.invocieAddEditFormData.termsAndConditions=JSON.stringify((0,P.A)(this.termsAndConditionList.map((o,s)=>{let a=[];if((0,F.A)(n,c=>{let m=(0,d.A)(this.jsonParse(c.termAndCondition))?null:this.jsonParse(c.termAndCondition).find(p=>p.toLowerCase().replace(/ /g,"")===o.termsAndCondition.toLowerCase().replace(/ /g,""));a.push({termName:m,termExist:!(0,d.A)(m)})}),(0,d.A)(a)||!a.some(c=>!c.termExist))return o.termsAndCondition}),void 0))),this.invocieAddEditFormData.userCustomFields=(0,P.A)(this.invocieAddEditFormData.userCustomFields.map(o=>{let s=[];(0,F.A)(n,c=>{let m=this.commonService.convertToKeyValuePair(this.jsonParse(c.userCustomFields)),p=(0,d.A)(this.jsonParse(c.userCustomFields))?null:m.find(v=>v.key.toLowerCase().replace(/ /g,"")===o.key.toLowerCase().replace(/ /g,""));(0,d.A)(p)||s.push({fieldKey:p.key,fieldValue:p.value,fieldExist:!0}),(0,d.A)(p)&&!(0,d.A)(s)&&!s.find(v=>v.fieldKey==o.key)&&s.push({fieldKey:o.key,fieldValue:o.value,fieldExist:!0})});let a=!(0,d.A)(s)&&s.some(c=>!c.fieldExist),u=(0,dt.A)(s.map(c=>c.fieldValue));if(!a)return{key:o.key,value:u}}),void 0),this.calInvoiceAmt(this.invocieAddEditFormData.purchaseProductList),(!(0,d.A)(this.taxAccountList)||!(0,d.A)(this.discountAccountList))&&this.filterTaxDiscountAccountList()}}selectedAccount(e,n){"payment"===e&&((0,d.A)(n.option.value)||(this.invoicePaymentObject.paymentAccount=n.option.value,this.paymentControl.reset(n.option.value.nameOfAccount)))}removeAccount(e,n){"payment"===e&&(0,B.A)(()=>{(0,d.A)(n)||"keydown"!=n.type||8!==n.keyCode?"click"==n.type&&(this.invoicePaymentObject.paymentAccount=null,this.paymentControl.reset()):(this.invoicePaymentObject.paymentAccount=null,this.paymentControl.reset())})}submit(){(0,d.A)(this.invocieAddEditFormData.taxList)||(this.invocieAddEditFormData.taxList=this.invocieAddEditFormData.taxList.filter(n=>0!==n.percentage));let e=/.*?([0-9]+)$/g;if((0,d.A)(this.invocieAddEditFormData.invocieNumber)||!e.test(this.invocieAddEditFormData.invocieNumber)){if((0,d.A)(this.invocieAddEditFormData.invocieNumber))return void this.notificationService.error("Please Enter Purchase Return Number");e.test(this.invocieAddEditFormData.invocieNumber)||(this.invocieAddEditFormData.invocieNumber=this.invocieAddEditFormData.invocieNumber+1)}if("edit-Return"===this.actionType&&D(this.invocieAddEditFormData.invocieDate).valueOf()<this.settingData.bookKeepingStartDate)this.router.navigate(["transaction-list"]);else if(this.invoiceAddEditForm.form.valid&&(this.invocieAddEditFormData.invoiceGenerated&&this.invocieAddEditFormData.originalProductAmount>0||!this.invocieAddEditFormData.invoiceGenerated&&!(0,d.A)(this.invocieAddEditFormData.purchaseProductList))){if(this.invocieAddEditFormData.discountEntity&&1==this.invocieAddEditFormData.discountEntity.discountFlag&&this.invocieAddEditFormData.discountEntity.discountAmount>this.invocieAddEditFormData.invoiceAmount&&0!=this.invocieAddEditFormData.discountEntity.discountAmount&&this.invocieAddEditFormData.invoiceAmount<0)return void this.notificationService.error("NEGATIVE_BALANCE_VALIDATION_1",{},!0);if(this.invocieAddEditFormData.roundOffAmount&&this.invocieAddEditFormData.roundOffAmount>this.invocieAddEditFormData.subTotalProductAmt&&0==this.invocieAddEditFormData.roundOffAmtIspositive&&this.invocieAddEditFormData.invoiceAmount<0)return void this.notificationService.error("NEGATIVE_BALANCE_VALIDATION_2",{},!0);this.invocieAddEditFormData.discountTypeSetting=this.discountTypeSetting,this.invocieAddEditFormData.updateAdvacePaymentLinklist=this.invocieAddEditFormData.updateAdvacePaymentLinklist.concat(this.invocieAddEditFormData.updateAdjustPaymentLinklist),this.isLoading=!0;let n={purchaseList:[],paymentList:[],paymentLinkList:[]},i={},o=[].concat(this.deletePaymentIds,this.deleteAdjustPaymentIds);if("edit-Return"===this.actionType?(this.invocieAddEditFormData.invoiceGenerated||(this.invocieAddEditFormData.purchaseProductList=this.purchaseReturnService.updateProductBaseRate(this.invocieAddEditFormData.purchaseProductList,this.invocieAddEditFormData.discountEntity,this.invocieAddEditFormData.taxList,this.discountTypeSetting,2)),n=this.purchaseReturnService.changeKeysForInvoiceApi(this.invocieAddEditFormData,2,this.editInvoiceData),i=n.purchaseReturnList[0].ledgerEntity.ledgerDetailList):"add-Return"===this.actionType&&(this.invocieAddEditFormData.invoiceGenerated||(this.invocieAddEditFormData.purchaseProductList=this.purchaseReturnService.updateProductBaseRate(this.invocieAddEditFormData.purchaseProductList,this.invocieAddEditFormData.discountEntity,this.invocieAddEditFormData.taxList,this.discountTypeSetting,1)),n=this.purchaseReturnService.changeKeysForInvoiceApi(this.invocieAddEditFormData,1),i=n.purchaseReturnList[0].ledgerEntity.ledgerDetailList),this.isValidLedger=l.DH.checkIsValidLedger(i),this.isValidLedger){if(1!=this.settingData.invoicePaymentTracking){if(n=(0,rt.A)(n,"paymentLinkList"),"edit-Return"==this.actionType){let s=this.accountList.find(a=>!(0,d.A)(a.clientEntity)&&this.editInvoiceData.uniqueKeyFKClient===a.clientEntity.uniqueKeyClient);(0,d.A)(s)||(o=this.allPaymentLinkList.filter(a=>a.uniqueKeyLinkWithAccountEntity===this.editInvoiceReturnId&&a.uniqueKeyClientAccountEntity===s.uniqueKeyOfAccount).map(a=>a.uniqueKeyLink))}}else if(1==this.settingData.invoicePaymentTracking&&"edit-Return"==this.actionType&&(this.invocieAddEditFormData.invoiceGenerated&&this.invocieAddEditFormData.originalProductAmount<=0||!this.invocieAddEditFormData.invoiceGenerated&&(0,L.A)(this.invocieAddEditFormData.purchaseProductList,"total")<=0)&&this.totalInvoiceAmount<=0){let s=this.accountList.find(a=>!(0,d.A)(a.clientEntity)&&this.editInvoiceData.uniqueKeyFKClient===a.clientEntity.uniqueKeyClient);o=this.allPaymentLinkList.filter(a=>!(0,d.A)(s)&&a.uniqueKeyLinkWithAccountEntity===this.editInvoiceReturnId&&a.uniqueKeyClientAccountEntity===s.uniqueKeyOfAccount).map(a=>a.uniqueKeyLink)}if("edit-Return"!==this.actionType){let s=this.unsyncervice.validateData(n);if(!(0,d.A)(s.unsyncRecords)&&s.entityName.includes("purchaseReturnList")){let a=n.purchaseReturnList[0];(0,d.A)(n.paymentList)||(a.paymentListUnSync=n.paymentList[0]),(0,d.A)(n.paymentLinkList)||(a.paymentLinkListUnSync=n.paymentLinkList[0]);let c={createdDate:n.purchaseReturnList[0].createDate,entityType:"purchaseReturn",orgId:this.orgId,serverUpdatedTime:n.purchaseReturnList[0].serverUpdatedTime,syncFlag:3,isReported:!1,uniqueKeyEntity:null,uniqueUnsyncedEntity:generateUUID("UnsyncRec"),entityObject:a,rejectedFor:2,retryFixedNum:0};this.syncApiService.addDbData("unsyncRecords",c),this.router.navigateByUrl("/purchases"),n={}}}this.syncDbService.storeMultipleDataToDB(l.DH.filterObject(n),s=>{var a=s;this.commonService.processResponse(s,u=>{if(200==s.status){if("edit-Return"===this.actionType)if(1!==this.settingData.invoicePaymentTracking||(0,d.A)(this.paymentMapUnlinkList)&&(0,d.A)(o))1!=this.settingData.invoicePaymentTracking&&!(0,d.A)(o)&&this.syncDbService.deleteMultipleDataToDB({paymentLinkIdList:o},c=>{var m=c;200==c.status&&(0,E.A)(m,"paymentLinkIdList")&&!(0,d.A)(m.paymentLinkIdList)?this.paymentMapUnlinkList=[]:(this.isLoading=!1,this.notificationService.error("NOTIFICATION_TXT_THREE",{},!0))});else{const c=this.paymentMapUnlinkList.map(m=>m.uniqueKeyLink).concat(o);(0,d.A)(c)||this.syncDbService.deleteMultipleDataToDB({paymentLinkIdList:c},m=>{var p=m;200==m.status&&(0,E.A)(p,"paymentLinkIdList")&&!(0,d.A)(p.paymentLinkIdList)?this.paymentMapUnlinkList=[]:(this.isLoading=!1,this.notificationService.error("NOTIFICATION_TXT_THREE",{},!0))})}(0,d.A)(this.formatNameSettings)||(this.formatNameSettings.purchaseReturnFormatNo=this.settingFormData.transactionNo,this.formatNameSettings.purchaseReturnFormatName=this.settingFormData.transactionName,this.formatNameSettings.paymentReceiveFormatNo=this.paymentFormatNo.transactionNo,this.settingService.addDBTransactionSetting(this.formatNameSettings,c=>{let m=c.data;200==c.status&&(0,E.A)(m,"formatNameSettings")&&m.formatNameSettings?(this.isLoading=!1,"add-Return"===this.actionType&&(this.invoiceAddEditForm.form.reset(),l.SE.destroyCache("purchase_return_line_item_data"),l.SE.destroyCache("selected_invoices_list")),(0,ut.A)(()=>{this.router.navigateByUrl("account-list"==this.redirectType?"accounts":"purchases/"+a.purchaseReturnList[0].uniqueKeyPurchaseReturn+"/viewTodayInvoices"),this.syncDbService.syncData()},500)):(this.isLoading=!1,this.notificationService.error("NOTIFICATION_TXT_FIVE",{},!0))}))}})})}else this.isLoading=!1,this.commonService.openConfirm({title:this.translocoService.translate("ERROR!"),text:this.translocoService.translate("INVALID_LEDGER"),icon:"error",showCancelButton:!1},s=>{})}else{if((0,_.A)(this.invocieAddEditFormData.selectSupplier)||(0,d.A)(this.invocieAddEditFormData.selectSupplier))return this.notificationService.error("PLEASE_SELECT_ORGANISATION_SUPPLIER_NAME",{},!0),!1;if(!this.invocieAddEditFormData.invoiceGenerated&&(0,d.A)(this.invocieAddEditFormData.purchaseProductList))return this.notificationService.error("PLEASE_SELECT_PRODUCT_SERVICES",{},!0),!1;if(this.invocieAddEditFormData.invoiceGenerated&&this.invocieAddEditFormData.originalProductAmount<=0)return this.notificationService.error("ENTER_PURCHASE_AMOUNT",{},!0),!1;if(this.invocieAddEditFormData.invoiceGenerated&&this.invocieAddEditFormData.invoiceAmountNonProduct<=0)return this.notificationService.error("ENTER_SALES_AMOUNT",{},!0),!1}}addDateEvent(e,n){switch(e){case"invoiceDate":this.invocieAddEditFormData.invocieDate=l.DH.dateToTimeStamp(D(new Date(n.value)).format("YYYY-MM-DD"));break;case"paymentInvoiceDate":this.invoicePaymentObject.paymentDate=l.DH.dateToTimeStamp(D(new Date(n.value)).format("YYYY-MM-DD"))}}checkTaxExistinOnItem(e){return e.some(n=>1==n.taxDetailEntity.taxApplicableOn&&0==n.enable)}checkTaxExistOnItemOrBill(e,n){return"on-bill"==n?1!=e.enable||this.invocieAddEditFormData.taxList.some(i=>i.uniqueKeyTaxAccountEntry===e.uniqueKeyOfAccount):"on-item"==n?1!=e.enable||this.newItemAddObject.taxEntity.find(i=>i.uniqueKeyTaxAccountEntry===e.uniqueKeyOfAccount):void 0}getTaxRateOrPercent(e,n){let i=0,o=0;switch((0,d.A)(e)||this.jsonParse(e).forEach((s,a)=>{i+=s.percentage,o+=s.calculateTax}),n){case"percent":return l.DH.roundToEven(i,this.settingData.percentRoundOff);case"calculateTax":return l.DH.roundToEven(o,2)}}editItems(e,n){var i=this;return(0,O.A)(function*(){n.preventDefault();let o=[],s=[];if((0,V.A)(o,i.taxAccountList),(0,V.A)(s,i.discountAccountList),!(0,d.A)(e.appliedTax)){let u=JSON.parse(e.appliedTax);o=(0,P.A)(o.map(c=>{let m=u.find(p=>p.uniqueKeyTaxAccountEntry==c.uniqueKeyOfAccount);return m?{...c,isChecked:!0,percentage:l.DH.roundToEven(m.percentage,i.settingData.percentRoundOff),total:l.DH.roundToEven(m.calculateTax,2)}:0==c.enable?{...c,isChecked:!1,percentage:null,total:0}:void 0}),void 0)}e.discountAmount>0&&(0==e.discountFlag?s[0].percentage=l.DH.roundToEven(e.discountPercentage,i.settingData.percentRoundOff):1==e.discountFlag&&(s[0].percentage=l.DH.roundToEven(e.discountAmount,2)));let a={};if("add-Return"==i.actionType)a=(0,d.A)(i.purchaseReturnLineItemData)?null:i.purchaseReturnLineItemData.selectedLineItemList.find(u=>u.uniqueKeyInvoiceProduct==e.uniqueKeyInvoiceProduct);else if("edit-Return"==i.actionType){let u=i.purchaseService.getPurchaseReturnProducts(i.invocieAddEditFormData.selectSupplier.uniqueKeyOfAccount,i.purchaseReturnList,e.uniqueKeyPurchase),c=u.filter(I=>I.uniqueKeyFKPurchaseReturn!=i.editInvoiceReturnId),p=(u.filter(I=>I.uniquePurchaseLineId===e.uniqueKeyInvoiceProduct),i.purchaseInvoiceList.find(I=>I.uniqueKeyPurchase==e.uniqueKeyPurchase)),v=(0,d.A)(p)?null:p.purchaseProductList.find(I=>I.uniqueKeyInvoiceProduct==e.uniqueKeyInvoiceProduct),y=(0,d.A)(v)?0:v.qty,f=(0,d.A)(v)?0:v.rate,g=y-(0,L.A)(c,"qty");a.actualQty=g,a.actualRate=f}i.commonService.showDialog(at.X,{invoiceType:"return-invoice",editItem:e,actualItemQty:(0,d.A)(a)?0:a.actualQty,actualItemRate:(0,d.A)(a)?0:a.actualRate,isProductExist:i.checkProductExist(e.productName),discountTypeSetting:i.discountTypeSetting,discountList:s,taxAccountList:o},u=>{if((0,E.A)(u,"item_edit_successfully")&&u.item_edit_successfully&&(0,E.A)(u,"edit_item_data")&&!(0,d.A)(u.edit_item_data)){let c=u.edit_item_data,m=i.invocieAddEditFormData.purchaseProductList.findIndex(p=>p.uniqueKeyInvoiceProduct==c.uniqueKeyInvoiceProduct);if(!(0,d.A)(c)&&0==c.rate&&i.notificationService.warn("WARN_ADDING_PRODUCT_WITH_ZERO_AMT",{},!0),"edit-Return"==i.actionType){let p=[...i.invocieAddEditFormData.purchaseProductList];p[m]=c,i.invocieAddEditFormData.purchaseProductList=p}else i.invocieAddEditFormData.purchaseProductList[m]=c;i.calInvoiceAmt(i.invocieAddEditFormData.purchaseProductList),o=[],s=[]}})})()}removeItems(e,n){var i=this;return(0,O.A)(function*(){n.preventDefault(),i.commonService.showAlert(i.translocoService.translate("DO_YOU_WANT_TO_DELETE_THIS_PRODUCT_YOU_WILL_NOT_ABLE_TO_ADD_THEM"),{headerTitle:i.translocoService.translate("DELETE"),showSuccessBtn:!0,cancelBtnText:i.translocoService.translate("NO"),successBtnText:i.translocoService.translate("Yes")},function(){var o=(0,O.A)(function*(s){if(s.isConfirmed){if("edit-Return"==i.actionType){let a=[...i.invocieAddEditFormData.purchaseProductList];a.splice(e,1),i.invocieAddEditFormData.purchaseProductList=a}else i.invocieAddEditFormData.purchaseProductList.splice(e,1);yield i.calInvoiceAmt(i.invocieAddEditFormData.purchaseProductList),!i.invocieAddEditFormData.invoiceGenerated&&(0,d.A)(i.invocieAddEditFormData.purchaseProductList)&&(i.allowAdvancePayment=!1,i.invocieAddEditFormData.allowAdvancePayment=i.allowAdvancePayment),i.disabledAddItemBtn=!0}});return function(s){return o.apply(this,arguments)}}())})()}calNewItemProductAmt(e,n){e<=0?(this.isValidQty=!1,this.disabledAddItemBtn=!0):(this.isValidQty=!0,this.disabledAddItemBtn=!1);let i=l.DH.customToFixed(e,this.settingData.quantityRoundOff)*l.DH.customToFixed(n,this.settingData.rateRoundOff);this.newItemAddObject.originalAmt=l.DH.roundToEven(i,2),this.newItemAddObject.total=l.DH.roundToEven(i,2),this.newItemAddObject.itemDiscountAmt=l.DH.roundToEven(i,2),(0,_.A)(this.newItemAddObject.discountPercent)||(0,d.A)(this.newItemAddObject.discountEntity)?this.calculateNewItemTax():this.getNewItemDiscount(this.newItemAddObject.discountPercent,this.newItemAddObject.discountEntity.uniqueKeyOfAccount)}getNewItemDiscount(e,n){let i=e;(0,_.A)(i)||(0,R.A)(i)?(this.newItemAddObject.discountAmount=0,this.newItemAddObject.itemDiscountAmt=l.DH.roundToEven(this.newItemAddObject.originalAmt-this.newItemAddObject.discountAmount,2),this.newItemAddObject.discountEntity=null,this.discountAccountList[0].percentage=null,this.newItemAddObject.discountPercent=0,this.calculateNewItemTax()):(i=(0,_.A)(e)?e:l.DH.roundToEven(e,this.settingData.percentRoundOff),this.newItemAddObject.discountEntity=this.purchaseReturnService.createPurchaseReturnDiscountObj({calculateDiscount:0,discountAmount:0,percentage:0,discountFlag:"percent"==this.discountSymbol?0:1,uniqueKeyOfAccount:n,uniqueKeyPurchaseReturn:"edit-Return"===this.actionType?this.editInvoiceData.uniqueKeyPurchaseReturn:this.invocieAddEditFormData.uniquePurchaseReturnKey,uniqueLeaderKey:"edit-Return"===this.actionType?this.editInvoiceData.uniqueKeyFKLedger:this.invocieAddEditFormData.uniqueLeaderKey})),(0,d.A)(this.newItemAddObject.discountEntity)||(this.newItemAddObject.discountPercent=(0,_.A)(i)?0:i,"percent"===this.discountSymbol?this.newItemAddObject.discountAmount=l.DH.roundToEven(this.newItemAddObject.originalAmt*this.newItemAddObject.discountPercent/100,2):"rupay"===this.discountSymbol&&(this.newItemAddObject.discountAmount=l.DH.roundToEven(this.newItemAddObject.discountPercent,2)),this.newItemAddObject.itemDiscountAmt=l.DH.roundToEven(this.newItemAddObject.originalAmt-this.newItemAddObject.discountAmount,2),this.newItemAddObject.discountEntity.percentage=i,this.newItemAddObject.discountEntity.discountAmount=this.newItemAddObject.discountAmount,this.newItemAddObject.discountEntity.calculatedDiscount=this.newItemAddObject.itemDiscountAmt,this.calculateNewItemTax())}selectedNewItemTax(e,n){let i=0,o=""!=e.taxDetailEntity.defaultTaxes?this.jsonParse(e.taxDetailEntity.defaultTaxes).filter(c=>1==c.isDefault):0;(0,_.A)(e.percentage)?(0,F.A)(o,(c,m)=>{c.isDefault&&(i=c.taxValue)}):i=e.percentage,this.taxAccountList[n].percentage=i,i=(0,_.A)(i)?i:l.DH.roundToEven(i,this.settingData.percentRoundOff);let s=0,a=0;1==e.taxDetailEntity.taxInclExcl?(this.taxAccountList.forEach(c=>{1==c.taxDetailEntity.taxApplicableOn&&1==c.taxDetailEntity.taxInclExcl&&c.isChecked&&(a+=l.DH.roundToEven(c.percentage,this.settingData.percentRoundOff))}),s=this.newItemAddObject.itemDiscountAmt*i/(100+a)):s=this.newItemAddObject.itemDiscountAmt*i/100,s=l.DH.roundToEven(s,2);let u={calculateTax:s,percentage:i,taxInclExcl:e.taxDetailEntity.taxInclExcl,uniqueKeyTaxAccountEntry:e.uniqueKeyOfAccount};if(e.isChecked)this.newItemAddObject.taxEntity.push(u),this.taxAccountList[n].total=s,0==e.taxDetailEntity.taxInclExcl?this.newItemAddObject.total=l.DH.roundToEven(this.newItemAddObject.total+s,2):(this.updatedNewItemtaxAccountList(a),this.calculateNewItemTax());else{this.taxAccountList[n].total=0;let c=this.newItemAddObject.taxEntity.findIndex(m=>m.uniqueKeyTaxAccountEntry==u.uniqueKeyTaxAccountEntry);this.newItemAddObject.taxEntity.splice(c,1),0==e.taxDetailEntity.taxInclExcl?this.newItemAddObject.total=l.DH.roundToEven(this.newItemAddObject.total-s,2):(this.updatedNewItemtaxAccountList(a),this.calculateNewItemTax())}}calculateNewItemTax(){let e=0,n=0;(0,d.A)(this.newItemAddObject.taxEntity)?this.newItemAddObject.total=l.DH.roundToEven(this.newItemAddObject.itemDiscountAmt,2):(this.newItemAddObject.taxEntity.map((i,o)=>{let s=l.DH.roundToEven(i.percentage,this.settingData.percentRoundOff);if(1==i.taxInclExcl){let a=0;this.taxAccountList.forEach(u=>{1==u.taxDetailEntity.taxApplicableOn&&1==u.taxDetailEntity.taxInclExcl&&u.isChecked&&(a+=l.DH.roundToEven(u.percentage,this.settingData.percentRoundOff))}),e=this.newItemAddObject.itemDiscountAmt*s/(100+a)}else e=this.newItemAddObject.itemDiscountAmt*s/100,n+=l.DH.roundToEven(e,2);i.calculateTax=l.DH.roundToEven(e,2)}),this.newItemAddObject.total=l.DH.roundToEven(this.newItemAddObject.itemDiscountAmt+n,2))}onSelectNewItemTax(e,n,i){let o=0,s=(0,_.A)(n)?n:l.DH.roundToEven(n,this.settingData.percentRoundOff),a=this.taxAccountList.findIndex(u=>u.uniqueKeyOfAccount==e);if(a>=0&&(this.taxAccountList[a].percentage=s),1==i){let u=0;this.taxAccountList.forEach(c=>{1==c.taxDetailEntity.taxApplicableOn&&1==c.taxDetailEntity.taxInclExcl&&c.isChecked&&(u+=l.DH.roundToEven(c.percentage,this.settingData.percentRoundOff))}),o=this.newItemAddObject.itemDiscountAmt*s/(100+u),this.updatedNewItemtaxAccountList(u)}else{o=this.newItemAddObject.itemDiscountAmt*s/100,o=l.DH.roundToEven(o,2),a>=0&&(this.taxAccountList[a].total=o);let u=this.newItemAddObject.taxEntity.findIndex(m=>m.uniqueKeyTaxAccountEntry==e);u>=0&&Object.assign(this.newItemAddObject.taxEntity[u],{calculateTax:o,percentage:s});let c=0;this.newItemAddObject.taxEntity.forEach(m=>{0==m.taxInclExcl&&(c+=m.calculateTax)}),c=l.DH.roundToEven(c,2),this.newItemAddObject.total=l.DH.roundToEven(this.newItemAddObject.itemDiscountAmt+c,2)}}updatedNewItemtaxAccountList(e){let n=0;this.taxAccountList.map((i,o)=>{if(1==i.taxDetailEntity.taxApplicableOn&&1==i.taxDetailEntity.taxInclExcl&&i.isChecked){let s=(0,_.A)(i.percentage)?i.percentage:l.DH.roundToEven(i.percentage,this.settingData.percentRoundOff);if(n=this.newItemAddObject.itemDiscountAmt*s/(100+e),n=l.DH.roundToEven(n,2),!(0,d.A)(this.newItemAddObject.taxEntity)){let a=this.newItemAddObject.taxEntity.findIndex(u=>u.uniqueKeyTaxAccountEntry==i.uniqueKeyOfAccount);a>=0&&Object.assign(this.newItemAddObject.taxEntity[a],{calculateTax:n,percentage:l.DH.roundToEven(i.percentage,this.settingData.percentRoundOff)})}i.total=n,i.calculateTax=n}})}removeAddItem(){this.showHideNewLineItem=!1,this.resetNewItemFormValue()}resetNewItemFormValue(){1===this.discountTypeSetting&&(this.discountAccountList[0].percentage=null,this.discountSymbol="percent"),this.taxAccountList.filter((n,i)=>{if(1==n.taxDetailEntity.taxApplicableOn){let o=null,s=this.jsonParse(n.taxDetailEntity.defaultTaxes);if(n.taxDetailEntity.initiallyChecked&&!(0,d.A)(s)&&(o=(0,d.A)(s)?null:s.find(a=>1==a.isDefault).taxValue),n.isChecked=n.taxDetailEntity.initiallyChecked,n.percentage=o,n.total=0,n.taxDetailEntity.initiallyChecked)if(this.newItemAddObject.taxEntity.some(u=>u.uniqueKeyTaxAccountEntry===n.uniqueKeyOfAccount)){let u=this.newItemAddObject.taxEntity.findIndex(c=>c.uniqueKeyTaxAccountEntry===n.uniqueKeyOfAccount);u>=0&&(this.newItemAddObject.taxEntity[u].calculateTax=0,this.newItemAddObject.taxEntity[u].percentage=o)}else this.selectedNewItemTax(n,i)}});let e=this.taxAccountList.filter(n=>n.taxDetailEntity.initiallyChecked).map(n=>n.uniqueKeyOfAccount);this.newItemAddObject.taxEntity=this.newItemAddObject.taxEntity.filter(n=>{if(e.includes(n.uniqueKeyTaxAccountEntry))return!0}),this.newItemAddObject.productName="",this.newItemAddObject.description="",this.newItemAddObject.unit="",this.newItemAddObject.itemQty=0,this.newItemAddObject.itemAmount=0,this.newItemAddObject.discountAmount=0,this.newItemAddObject.itemDiscountAmt=0,this.newItemAddObject.originalAmt=0,this.newItemAddObject.discountEntity=null,this.newItemAddObject.discountPercent=0,this.newItemAddObject.total=0,this.disabledAddItemBtn=!0,this.disabledPerItemTaxDiscount=!0,this.isValidQty=!0,this.isProductExist=!1}calInvoiceAmt(e){let n=0,i=0;if(this.invocieAddEditFormData.invoiceGenerated){let o=this.purchaseReturnList.filter(a=>"add-Return"==this.actionType&&a.uniqueFKPurchaseEntity===this.purchaseReturnLineItemData.withoutLineItemData.editData.uniqueKeyPurchase||"edit-Return"==this.actionType&&a.uniqueFKPurchaseEntity===this.invocieAddEditFormData.uniqueKeyPurchase&&a.uniqueKeyPurchaseReturn!=this.editInvoiceReturnId),s="add-Return"==this.actionType?this.purchaseReturnLineItemData.withoutLineItemData.editData:this.purchaseInvoiceList.find(a=>a.uniqueKeyPurchase==this.invocieAddEditFormData.uniqueKeyPurchase);if(!(0,d.A)(s)){let a=(0,d.A)(s)?0:s.productAmount,u=l.DH.roundToEven((0,L.A)(o,"productAmount"),2),m=((0,d.A)(o)?a:l.DH.roundToEven(a-u,2))>=this.invocieAddEditFormData.invoiceAmountNonProduct,p=m?this.invocieAddEditFormData.invoiceAmountNonProduct:parseFloat(String(this.invocieAddEditFormData.invoiceAmountNonProduct).slice(0,-1));this.invocieAddEditFormData.invoiceAmountNonProduct=p,i=p,n=p,m||this.notificationService.error("ENTERED_AMOUNT_IS_GREATER_THAN_RETURN_VALUE",{},!0)}}else(0,F.A)(e,o=>{i+=l.DH.roundToEven(o.rate*o.qty,2),n+=l.DH.roundToEven(o.total,2)});n=l.DH.roundToEven(n,2),this.invocieAddEditFormData.originalProductAmount=l.DH.roundToEven(i,2),this.totalInvoiceAmount=n,this.actualInvoiceAmount=n,this.productDiscountAmt=n,this.invocieAddEditFormData.invoiceAmount=n,this.invocieAddEditFormData.subTotalProductAmt=n,this.totalBalanceAmount=n,(0,_.A)(this.discountPercent)||(0,d.A)(this.invocieAddEditFormData.discountEntity)?this.calculateTax():this.calculateDiscount(this.discountPercent,this.invocieAddEditFormData.discountEntity.uniqueKeyAccountEntity),this.calInvoicePaymentAndRoundOffAmt(this.invocieAddEditFormData.roundOffAmount)}selectedTax(e,n){let i=0,o=this.jsonParse(e.taxDetailEntity.defaultTaxes);(0,_.A)(e.percentage)?(0,F.A)(o,(c,m)=>{c.isDefault&&(i=c.taxValue)}):i=e.percentage,this.taxAccountList[n].percentage=i,i=(0,_.A)(i)?i:l.DH.roundToEven(i,this.settingData.percentRoundOff);let s=0,a=0;1==e.taxDetailEntity.taxInclExcl?(this.taxAccountList.forEach(c=>{0==c.taxDetailEntity.taxApplicableOn&&1==c.taxDetailEntity.taxInclExcl&&c.isChecked&&(a+=l.DH.roundToEven(c.percentage,this.settingData.percentRoundOff))}),s=this.productDiscountAmt!=this.invocieAddEditFormData.subTotalProductAmt?this.productDiscountAmt*i/(100+a):this.invocieAddEditFormData.subTotalProductAmt*i/(100+a)):s=this.productDiscountAmt!=this.invocieAddEditFormData.subTotalProductAmt?this.productDiscountAmt*i/100:this.invocieAddEditFormData.subTotalProductAmt*i/100,s=l.DH.roundToEven(s,2);let u=this.purchaseReturnService.createPurchaseReturnTaxObj(this.settingData,{calculateTax:s,percentage:i,taxInclExcl:e.taxDetailEntity.taxInclExcl,uniqueKeyTaxAccountEntry:e.uniqueKeyOfAccount,uniqueKeyPurchaseReturn:"edit-Return"===this.actionType?this.editInvoiceData.uniqueKeyPurchaseReturn:this.invocieAddEditFormData.uniquePurchaseReturnKey,uniqueLeaderKey:"edit-Return"===this.actionType?this.editInvoiceData.uniqueKeyFKLedger:this.invocieAddEditFormData.uniqueLeaderKey});if(e.isChecked)this.invocieAddEditFormData.taxList.push(u),this.taxAccountList[n].total=s,0==e.taxDetailEntity.taxInclExcl?this.totalInvoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount+s,2):this.updatedTaxAccountList(a);else{this.taxAccountList[n].total=0,this.taxAccountList[n].percentage=null;let c=this.invocieAddEditFormData.taxList.findIndex(m=>m.uniqueKeyTaxAccountEntry==u.uniqueKeyTaxAccountEntry);if("edit-Return"==this.actionType){let m=[...this.invocieAddEditFormData.taxList];m.splice(c,1),this.invocieAddEditFormData.taxList=m}else this.invocieAddEditFormData.taxList.splice(c,1);0==e.taxDetailEntity.taxInclExcl?this.totalInvoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount-s,2):this.updatedTaxAccountList(a)}this.calculateTax(),this.invocieAddEditFormData.invoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount,2)}calculateTax(){let e=0,n=0;(0,d.A)(this.invocieAddEditFormData.taxList)||(0,d.A)(this.taxAccountList)?this.totalInvoiceAmount=l.DH.roundToEven(this.productDiscountAmt,2):(this.invocieAddEditFormData.taxList=this.invocieAddEditFormData.taxList.map((i,o)=>{let s=(0,_.A)(i.percentage)?i.percentage:l.DH.roundToEven(i.percentage,this.settingData.percentRoundOff);if(1==i.taxInclExcl){let u=0;this.taxAccountList.forEach(c=>{0==c.taxDetailEntity.taxApplicableOn&&1==c.taxDetailEntity.taxInclExcl&&c.isChecked&&(u+=l.DH.roundToEven(c.percentage,this.settingData.percentRoundOff))}),e=this.productDiscountAmt!=this.invocieAddEditFormData.subTotalProductAmt?this.productDiscountAmt*s/(100+u):this.invocieAddEditFormData.subTotalProductAmt*s/(100+u)}else e=this.productDiscountAmt!=this.invocieAddEditFormData.subTotalProductAmt?this.productDiscountAmt*s/100:this.invocieAddEditFormData.subTotalProductAmt*s/100,n+=l.DH.roundToEven(e,2);e=l.DH.roundToEven(e,2);let a=this.taxAccountList.findIndex(u=>u.uniqueKeyOfAccount==i.uniqueKeyTaxAccountEntry);return a>=0&&(this.taxAccountList[a].total=e),{...i,calculateTax:e}}),this.totalInvoiceAmount=l.DH.roundToEven(this.productDiscountAmt+n,2)),this.invocieAddEditFormData.invoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount,2),this.actualInvoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount,2),this.calculateOtherCharge(),this.calInvoicePaymentAndRoundOffAmt(this.invocieAddEditFormData.roundOffAmount)}applyTaxOnSelectPercent(e,n,i){let o=0,s=(0,_.A)(n)?n:l.DH.roundToEven(n,this.settingData.percentRoundOff),a=this.taxAccountList.findIndex(m=>m.uniqueKeyOfAccount==e);if(a>=0&&(this.taxAccountList[a].percentage=n),1==i){let m=0;this.taxAccountList.forEach(p=>{0==p.taxDetailEntity.taxApplicableOn&&1==p.taxDetailEntity.taxInclExcl&&(m+=l.DH.roundToEven(p.percentage,this.settingData.percentRoundOff))}),o=this.productDiscountAmt!=this.invocieAddEditFormData.subTotalProductAmt?this.productDiscountAmt*s/(100+m):this.invocieAddEditFormData.subTotalProductAmt*s/(100+m),this.updatedTaxAccountList(m)}else o=this.productDiscountAmt!=this.invocieAddEditFormData.subTotalProductAmt?this.productDiscountAmt*s/100:this.invocieAddEditFormData.subTotalProductAmt*s/100;o=l.DH.roundToEven(o,2),a>=0&&(this.taxAccountList[a].total=o);let u=this.invocieAddEditFormData.taxList.findIndex(m=>m.uniqueKeyTaxAccountEntry==e);u>=0&&Object.assign(this.invocieAddEditFormData.taxList[u],{calculateTax:o,percentage:(0,_.A)(s)?0:s});let c=0;this.taxAccountList.forEach(m=>{m.isChecked&&0==m.taxDetailEntity.taxApplicableOn&&0==m.taxDetailEntity.taxInclExcl&&(c+=m.total)}),c=l.DH.roundToEven(c,2),this.totalInvoiceAmount=l.DH.roundToEven(this.productDiscountAmt+c,2),this.actualInvoiceAmount=l.DH.roundToEven(this.productDiscountAmt+c,2),this.invocieAddEditFormData.invoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount,2),this.calInvoicePaymentAndRoundOffAmt(this.invocieAddEditFormData.roundOffAmount)}addDiscount(){if(this.showDiscountOnBill)this.showDiscountOnBill=!1,this.calculateDiscount(null,null);else{this.showDiscountOnBill=!0;let e=null;(0,E.A)(this.invocieAddEditFormData.discountEntity,"uniqueKeyOfAccount")&&(e=this.invocieAddEditFormData.discountEntity.uniqueKeyOfAccount),this.calculateDiscount(this.discountPercent,e)}}changeDiscountCurrency(e,n,i){switch(e.preventDefault(),this.discountAccountList[0].percentage=0,this.newItemAddObject.discountPercent=0,this.discountPercent=0,this.discountSymbol=n,i){case"onItem":let o=null;(0,E.A)(this.newItemAddObject.discountEntity,"uniqueKeyOfAccount")&&(o=this.newItemAddObject.discountEntity.uniqueKeyOfAccount),this.getNewItemDiscount(this.newItemAddObject.discountPercent,o);break;case"onBill":let s=null;(0,E.A)(this.invocieAddEditFormData.discountEntity,"uniqueKeyOfAccount")&&(s=this.invocieAddEditFormData.discountEntity.uniqueKeyOfAccount),this.calculateDiscount(this.discountPercent,s),"percent"==n?(0,E.A)(this.invocieAddEditFormData.discountEntity,"discountFlag")&&(this.invocieAddEditFormData.discountEntity.discountFlag=0):(0,E.A)(this.invocieAddEditFormData.discountEntity,"discountFlag")&&(this.invocieAddEditFormData.discountEntity.discountFlag=1)}}calculateDiscount(e,n){let i=e;(0,_.A)(i)||(0,R.A)(i)?(this.discountAmount=0,this.productDiscountAmt=l.DH.roundToEven(this.invocieAddEditFormData.subTotalProductAmt-this.discountAmount,2),this.discountAccountList[0].percentage=null,this.discountPercent=0,this.invocieAddEditFormData.discountEntity=null,this.calculateTax()):(i=l.DH.roundToEven(e,this.settingData.percentRoundOff),this.invocieAddEditFormData.discountEntity=this.purchaseReturnService.createPurchaseReturnDiscountObj({calculateDiscount:0,discountAmount:0,percentage:0,discountFlag:"percent"==this.discountSymbol?0:1,uniqueKeyOfAccount:n,uniqueKeyPurchaseReturn:"edit-Return"===this.actionType?this.editInvoiceData.uniqueKeyPurchaseReturn:this.invocieAddEditFormData.uniquePurchaseReturnKey,uniqueLeaderKey:"edit-Return"===this.actionType?this.editInvoiceData.uniqueKeyFKLedger:this.invocieAddEditFormData.uniqueLeaderKey})),(0,d.A)(this.invocieAddEditFormData.discountEntity)||(this.discountPercent=(0,_.A)(i)?0:i,"percent"==this.discountSymbol?this.discountAmount=l.DH.roundToEven(this.invocieAddEditFormData.subTotalProductAmt*this.discountPercent/100,2):"rupay"==this.discountSymbol&&(this.discountAmount=l.DH.roundToEven(this.discountPercent,2)),this.productDiscountAmt=l.DH.roundToEven(this.invocieAddEditFormData.subTotalProductAmt-this.discountAmount,2),"edit-Return"==this.actionType?this.invocieAddEditFormData.discountEntity={...this.invocieAddEditFormData.discountEntity,percentage:"percent"==this.discountSymbol?i:0,discountAmount:"rupay"==this.discountSymbol?i:0,calculatedDiscount:this.discountAmount}:(this.invocieAddEditFormData.discountEntity.percentage="percent"==this.discountSymbol?i:0,this.invocieAddEditFormData.discountEntity.discountAmount="rupay"==this.discountSymbol?i:0,this.invocieAddEditFormData.discountEntity.calculatedDiscount=this.discountAmount),this.calculateTax())}addPayment(){let e=!0,n=Number(this.invoicePaymentObject.paidAmount),i=l.DH.roundToEven(this.totalBalanceAmount,2);if(((0,d.A)(this.invoicePaymentObject.paymentAccount)||n<=0||this.invoicePaymentObject.paymentDate<0||i<n)&&(e=!1),(this.invocieAddEditFormData.invoiceGenerated&&this.invocieAddEditFormData.originalProductAmount<0||!this.invocieAddEditFormData.invoiceGenerated&&(0,d.A)(this.invocieAddEditFormData.purchaseProductList))&&(e=!1),this.invoiceAddEditForm.form.valid&&e)this.invoiceAddedPaymentList.push({paymentAccount:this.invoicePaymentObject.paymentAccount,selectAccountName:this.invoicePaymentObject.paymentAccount.nameOfAccount,paidAmount:l.DH.roundToEven(this.invoicePaymentObject.paidAmount,2),paymentDate:this.invoicePaymentObject.paymentDate,formattedDate:D.utc(this.invoicePaymentObject.paymentDate).format("MMM DD, YYYY"),paymentNumber:this.invoicePaymentObject.paymentNumber,note:this.invoicePaymentObject.note}),this.fetchPaymentAmount(),this.resetPaymentInvoiceForm();else{if(!this.invocieAddEditFormData.invoiceGenerated&&(0,d.A)(this.invocieAddEditFormData.purchaseProductList))return this.notificationService.error("PLEASE_SELECT_PRODUCT_SERVICES",{},!0),!1;if(this.invocieAddEditFormData.invoiceGenerated&&this.invocieAddEditFormData.originalProductAmount<0)return this.notificationService.error("ENTER_SALES_AMOUNT",{},!0),!1;if((0,d.A)(this.invoicePaymentObject.paymentAccount))return this.notificationService.error("PLEASE_ADD_CASH_BANK_ACCOUNT",{},!0),!1;if(this.invoicePaymentObject.paymentDate<0)return this.notificationService.error("PLEASE_SELECT_DATE",{},!0),!1;if((0,d.A)(this.invoicePaymentObject.paidAmount))return this.notificationService.error("PLEASE_ADD_AMOUNT",{},!0),!1;if(i<n)return this.notificationService.error("PAYMENT_MUST_BE_EQUAL_OR_LESS_THEN_BALANCE",{},!0),!1;if(n<=0)return this.notificationService.error("PAYMENT_AMOUNT_SHOULDNT_BE_ZERO",{},!0),!1}}editPayments(e,n){this.commonService.showDialog(st.i,{paymentFormType:"purchase-invoice",editpaymentData:e,invoiceNumber:this.invocieAddEditFormData.invocieNumber,totalBalance:this.totalBalanceAmount,paymentAccountList:this.paymentAccountList,customerName:this.invocieAddEditFormData.selectSupplier.nameOfAccount,todayMonth:D(this.invocieAddEditFormData.invocieDate).format("MMM"),todayDate:D(this.invocieAddEditFormData.invocieDate).format("DD")},i=>{if((0,E.A)(i,"payment_added_successfully")&&i.payment_added_successfully&&(0,E.A)(i,"edit_payment_data")){const o=i.edit_payment_data;this.invoiceAddedPaymentList[n]={...o,formattedDate:D.utc(o.paymentDate).format("MMM DD, YYYY")},this.fetchPaymentAmount()}},{panelClass:"ng-material-dialog"})}removePayments(e){this.invoiceAddedPaymentList.splice(e,1),this.fetchPaymentAmount(),this.paymentFormatNo=this.commonService.paymentFormatNo(this.formatNameSettings,"receive",this.invoiceAddedPaymentList.length),this.invoicePaymentObject.paymentNumber=this.paymentFormatNo.transactionNumber}fetchInvAdjustPaymentData(){if(!(0,d.A)(this.invocieAddEditFormData.selectSupplier)){let n=this.invocieAddEditFormData.selectSupplier.clientEntity.uniqueKeyClient,i=this.invocieAddEditFormData.selectSupplier.uniqueKeyOfAccount,o=this.allPaymentLinkList.filter(a=>4===a.transactionLinkType&&a.uniqueKeyLinkWithAccountEntity===this.editInvoiceReturnId&&6==a.linkType),s=l.DH.roundToEven(this.totalInvoiceAmount,2);if(this.invAdjustPaymentAvailableList=[],(0,d.A)(o)||(0,d.A)(this.purchaseReturnList)||this.invAdjustSuccess||!(0,d.A)(this.listOfAdjustPaidInvoice)){if(this.invAdjustSuccess&&!(0,d.A)(this.listOfAdjustPaidInvoice)){for(var e in this.listOfAdjustPaidInvoice){const u=this.listOfAdjustPaidInvoice[e],c=u.invoiceData;this.invAdjustPaymentAvailableList.push({paymentNo:this.invocieAddEditFormData.invocieNumber,accountName:"Purchase Return",uniqueKeyPayment:(0,d.A)(c)?"":c.uniqueKeyPurchase,invoiceNumber:(0,d.A)(c)?"":c.purchaseNo,uniqueKeyClient:n,isOpeningBalancePayment:!1,isPurchaseReturnPayment:!0,uniqueKeyFKAccount:"",paidAmount:u.invoiceAdjustAmt,deviceCreateDate:D().toDate().getTime(),serverUpdatedTime:0,uniqueKeyLink:"",uniqueKeyFKLedger:c.uniqueKeyFKLedger,uniqueKeyClientAccount:i,uniqueKeyLinkAccountEntity:this.invocieAddEditFormData.uniquePurchaseReturnKey,paymentDate:D().format("MMM DD, YYYY")})}this.invocieAddEditFormData.listOfAdjustInvPaidLinklist=Object.assign([],this.invAdjustPaymentAvailableList)}}else for(var e in o){const a=o[e],u=this.purchaseInvoiceList.find(m=>m.uniqueKeyPurchase==a.uniqueKeyFKPaymentEntity),c=this.purchaseReturnList.find(m=>m.uniqueKeyPurchaseReturn==a.uniqueKeyLinkWithAccountEntity);this.invAdjustPaymentAvailableList.push({paymentNo:c.purchaseReturnFormatNumber,accountName:"Purchase Return",uniqueKeyPayment:(0,d.A)(u)?"":u.uniqueKeyPurchase,invoiceNumber:(0,d.A)(u)?"":u.purchaseNo,uniqueKeyClient:n,isOpeningBalancePayment:!1,isPurchaseReturnPayment:!0,uniqueKeyFKAccount:"",paidAmount:a.amount,deviceCreateDate:a.deviceCreateDate,serverUpdatedTime:a.serverUpdatedTime,uniqueKeyLink:a.uniqueKeyLink,uniqueKeyFKLedger:(0,d.A)(u)?"":u.uniqueKeyFKLedger,uniqueKeyClientAccount:i,uniqueKeyLinkAccountEntity:a.uniqueKeyLinkWithAccountEntity,paymentDate:D(a.deviceCreateDate).format("MMM DD, YYYY")})}if(this.invAdjustPaidLinkAmount=(0,L.A)(this.invAdjustPaymentAvailableList,"paidAmount"),("edit-Return"==this.actionType||this.invAdjustSuccess)&&!(0,d.A)(this.invAdjustPaymentAvailableList)&&this.invAdjustPaidLinkAmount>s){let a=(0,b.A)(this.invAdjustPaymentAvailableList,["deviceCreateDate"],["asc"]);this.invAdjustPaidLinkAmount=0,this.invAdjustPaymentAvailableList=[],this.deleteAdjustPaymentIds=[];let u=[];(0,F.A)(a,c=>{if(s>0){if(s>=c.paidAmount)this.invAdjustPaidLinkAmount+=c.paidAmount,this.invAdjustPaymentAvailableList.push({...c}),u.push({...c}),s-=c.paidAmount;else if(c.paidAmount>s){this.invAdjustPaidLinkAmount+=s;let m={paymentNo:c.paymentNo,accountName:c.accountName,invoiceNumber:c.invoiceNumber,uniqueKeyPayment:c.uniqueKeyPayment,uniqueKeyClient:c.uniqueKeyClient,uniqueKeyFKAccount:c.uniqueKeyFKAccount,paidAmount:s,isOpeningBalancePayment:c.isOpeningBalancePayment,isPurchaseReturnPayment:c.isPurchaseReturnPayment,deviceCreateDate:c.deviceCreateDate,serverUpdatedTime:c.serverUpdatedTime,uniqueKeyLink:c.uniqueKeyLink,uniqueKeyFKLedger:c.uniqueKeyFKLedger,paymentDate:c.paymentDate,uniqueKeyClientAccount:c.uniqueKeyClientAccount,uniqueKeyLinkAccountEntity:c.uniqueKeyLinkAccountEntity};this.invAdjustPaymentAvailableList.push(m),u.push(m),s=0}}else!this.invAdjustSuccess&&(0,d.A)(this.listOfAdjustPaidInvoice)&&!(0,d.A)(c.uniqueKeyLink)&&this.deleteAdjustPaymentIds.push(c.uniqueKeyLink)}),this.isLessPaymentLinkAmt=!0,this.invAdjustSuccess&&!(0,d.A)(this.listOfAdjustPaidInvoice)?this.invocieAddEditFormData.listOfAdjustInvPaidLinklist=Object.assign([],u):this.invocieAddEditFormData.updateAdjustPaymentLinklist=u}else this.invocieAddEditFormData.updateAdjustPaymentLinklist=[];this.invAdjustSuccess&&(this.deleteAdjustPaymentIds=Object.assign([],o.map(a=>a.uniqueKeyLink))),this.invAdjustPaymentAvailableList=(0,b.A)(this.invAdjustPaymentAvailableList,["deviceCreateDate"],["asc"])}}fetchClientPaymentLinkList(){if(!(0,d.A)(this.invocieAddEditFormData.selectSupplier)){let e=l.DH.roundToEven(this.totalInvoiceAmount-this.totalWriteOffAmount,2);this.clientPaymentLinkList=[],this.alreadyPaidLinkAmount=0;const i=this.invocieAddEditFormData.selectSupplier.clientEntity.uniqueKeyClient,o=this.invocieAddEditFormData.selectSupplier.uniqueKeyOfAccount;if((0,F.A)(this.allPaymentList,s=>{if(s.uniqueKeyClient===i&&"edit-Return"==this.actionType){let a=this.allPaymentLinkList.filter(c=>c.uniqueKeyFKPaymentEntity===s.uniqueKeyPayment&&c.uniqueKeyLinkWithAccountEntity===this.editInvoiceReturnId&&0==c.linkType),u=this.paymentAccountList.find(c=>c.uniqueKeyOfAccount===s.uniqueKeyFKAccount);if(!(0,d.A)(a)&&!(0,d.A)(u))for(const c in a){const m=a[c];this.alreadyPaidLinkAmount+=m.amount,this.clientPaymentLinkList.push({paymentNo:s.paymentNo,accountName:u.nameOfAccount,uniqueKeyPayment:s.uniqueKeyPayment,uniqueKeyClient:s.uniqueKeyClient,isOpeningBalancePayment:!1,isPurchaseReturnPayment:!1,uniqueKeyFKAccount:s.uniqueKeyFKAccount,paidAmount:m.amount,deviceCreateDate:m.deviceCreateDate,serverUpdatedTime:m.serverUpdatedTime,uniqueKeyLink:m.uniqueKeyLink,uniqueKeyFKLedger:s.uniqueKeyFKLedger,uniqueKeyClientAccount:o,uniqueKeyLinkAccountEntity:m.uniqueKeyLinkWithAccountEntity,paymentDate:D.utc(s.dateOfPayment).format("MMM DD, YYYY")})}}}),"edit-Return"==this.actionType&&!(0,d.A)(this.clientPaymentLinkList)&&this.alreadyPaidLinkAmount>e){let s=(0,b.A)(this.clientPaymentLinkList,["deviceCreateDate"],["asc"]);this.alreadyPaidLinkAmount=0,this.clientPaymentLinkList=[],this.deletePaymentIds=[];let a=[];(0,F.A)(s,u=>{if(e>0){if(e>=u.paidAmount)this.alreadyPaidLinkAmount+=u.paidAmount,this.clientPaymentLinkList.push({...u}),a.push({...u}),e-=u.paidAmount;else if(u.paidAmount>e){this.alreadyPaidLinkAmount+=e;let c={paymentNo:u.paymentNo,accountName:u.accountName,uniqueKeyPayment:u.uniqueKeyPayment,uniqueKeyClient:u.uniqueKeyClient,uniqueKeyFKAccount:u.uniqueKeyFKAccount,paidAmount:e,isOpeningBalancePayment:u.isOpeningBalancePayment,isPurchaseReturnPayment:u.isPurchaseReturnPayment,deviceCreateDate:u.deviceCreateDate,serverUpdatedTime:u.serverUpdatedTime,uniqueKeyLink:u.uniqueKeyLink,uniqueKeyFKLedger:u.uniqueKeyFKLedger,paymentDate:u.paymentDate,uniqueKeyClientAccount:u.uniqueKeyClientAccount,uniqueKeyLinkAccountEntity:u.uniqueKeyLinkAccountEntity};this.clientPaymentLinkList.push(c),a.push(c),e=0}}else this.deletePaymentIds.push(u.uniqueKeyLink)}),this.isLessPaymentLinkAmt=!0,this.invocieAddEditFormData.updateAdvacePaymentLinklist=a}else this.invocieAddEditFormData.updateAdvacePaymentLinklist=[];this.clientPaymentLinkList=(0,b.A)(this.clientPaymentLinkList,["deviceCreateDate"],["asc"])}}unlinkPayment(e,n){var i=this;return(0,O.A)(function*(){if(i.invocieAddEditFormData.selectSupplier&&!n.isOpeningBalancePayment&&n.isPurchaseReturnPayment&&"edit-Return"==i.actionType){yield i.clientPaymentLinkList.splice(e,1),i.paymentMapUnlinkList.push(n);let o=i.allPaymentLinkList.findIndex(s=>6===s.linkType&&s.uniqueKeyLink===n.uniqueKeyLink);o>=0&&(i.allPaymentLinkList=i.allPaymentLinkList.filter((s,a)=>{if(a!=o)return s})),i.alreadyPaidLinkAmount-=n.paidAmount,i.fetchInvAdjustPaymentData(),1==i.settingData.invoicePaymentTracking&&(yield i.fetchClientPaymentLinkList()),yield i.fetchPaymentAmount()}else if(i.invocieAddEditFormData.selectSupplier&&!n.isOpeningBalancePayment){yield i.clientPaymentLinkList.splice(e,1),i.paymentMapUnlinkList.push(n);let o=i.allPaymentList.some(a=>a.uniqueKeyClient===i.invocieAddEditFormData.selectSupplier.clientEntity.uniqueKeyClient),s=i.allPaymentLinkList.findIndex(a=>a.uniqueKeyFKPaymentEntity===n.uniqueKeyPayment&&a.uniqueKeyLinkWithAccountEntity===i.editInvoiceReturnId);s>=0&&(i.allPaymentLinkList=i.allPaymentLinkList.filter((a,u)=>{if(u!=s)return a})),o&&(i.alreadyPaidLinkAmount-=n.paidAmount,i.fetchInvAdjustPaymentData(),1==i.settingData.invoicePaymentTracking&&"edit-Return"==i.actionType&&(yield i.fetchClientPaymentLinkList()),yield i.fetchPaymentAmount())}})()}getAdvanceAvailableOrPaidAmt(e){let n=0;return"paid-amt"===e&&((0,d.A)(this.invoiceAddedPaymentList)||(0,F.A)(this.invoiceAddedPaymentList,i=>{n+=i.paidAmount})),n}fetchPaymentAmount(){if(this.totalPaidAmt=0,this.previousOutStandingAmt=0,this.advanceAvailableAmt=0,this.currentOutStandingAmt=0,this.advCarryFwdAmt=0,this.paymentAgainstAmt=0,(0,d.A)(this.invoiceAddedPaymentList)||(0,F.A)(this.invoiceAddedPaymentList,(s,a)=>{this.totalPaidAmt+=s.paidAmount}),(0,d.A)(this.invocieAddEditFormData.selectSupplier))this.totalBalanceAmount=this.totalInvoiceAmount-this.alreadyPaidLinkAmount;else if(this.invoiceAdjustAmt=0,(0,E.A)(this.settingData,"invoicePaymentTracking")&&1==this.settingData.invoicePaymentTracking){let s=l.DH.roundToEven(this.totalInvoiceAmount-(this.alreadyPaidLinkAmount+this.totalWriteOffAmount)-this.invAdjustPaidLinkAmount,2);this.totalBalanceAmount=s,this.invoiceAddedPaymentList.length>0&&(this.paymentAgainstAmt=this.totalPaidAmt>s?s:this.totalPaidAmt,this.totalBalanceAmount=l.DH.roundToEven(s-this.paymentAgainstAmt,2)),this.invocieAddEditFormData.paymentAgainstAmt=this.paymentAgainstAmt,this.invocieAddEditFormData.balanceAmount=this.totalBalanceAmount}else{let s=this.invocieAddEditFormData.selectSupplier.accountOpeningBalance,a=0,u=0;if((0,F.A)(this.allLedgerList,(p,v)=>{let y=p.ledgerDetailList.find(f=>f.uniqueKeyAccount==String(this.invocieAddEditFormData.selectSupplier.uniqueKeyOfAccount));(0,d.A)(y)||(2==y.drCrType&&(a+=y.amount),1==y.drCrType&&(u+=y.amount))}),(0,_.A)(s)&&(0,d.A)(s)||1!=s.crDrType?(!(0,_.A)(s)||!(0,d.A)(s))&&2==s.crDrType&&(a+=s.openingBalance):u+=s.openingBalance,"edit-Return"==this.actionType&&!(0,d.A)(this.editInvoiceData)){let p=(0,d.A)(this.invocieAddEditFormData.selectSupplier.clientEntity)?null:this.invocieAddEditFormData.selectSupplier.clientEntity.uniqueKeyClient;!(0,d.A)(p)&&p==this.editInvoiceData.uniqueKeyFKClient&&(u-=this.paymentEditSaleAmt)}this.previousOutStandingAmt=l.DH.roundToEven(a-u,2),this.currentOutStandingAmt=l.DH.roundToEven(this.previousOutStandingAmt-this.totalInvoiceAmount+this.totalPaidAmt,2)}}resetPaymentInvoiceForm(){this.invoicePaymentObject.paymentAccount=null,this.paymentControl.reset(""),this.invoicePaymentObject.paidAmount=null,this.invoicePaymentObject.paymentDate=l.DH.dateToTimeStamp(D().format("YYYY-MM-DD")),this.invoicePaymentObject.note=null,this.paymentDefaultDate=new T.MJ(D().format("YYYY-MM-DD")),this.paymentFormatNo=this.commonService.paymentFormatNo(this.formatNameSettings,"receive",this.invoiceAddedPaymentList.length),this.invoicePaymentObject.paymentNumber=this.paymentFormatNo.transactionNumber}editTaxDiscount(e){let n=e;this.commonService.showDialog(nt._,{formType:"add-Return"==this.actionType?"edit-tax":"edit-invoice-tax",editFrom:"invoice",accountList:this.accountList,taxAccountList:this.taxAccountList,editData:e},i=>{if((0,E.A)(i,"tax_added")&&i.tax_added&&(0,E.A)(i,"tax_account_data")&&!(0,d.A)(i.tax_account_data)){let o=i.tax_account_data,s=this.taxAccountList.findIndex(u=>u.uniqueKeyOfAccount===o.uniqueKeyOfAccount);if(this.taxAccountList.find(u=>u.uniqueKeyOfAccount===o.uniqueKeyOfAccount),(o.taxDetailEntity.taxApplicableOn!==n.taxDetailEntity.taxApplicableOn||o.enable!==n.enable)&&(this.taxCheckedList.push(o),this.trackCheckedRecords.findIndex(c=>c.uniqueKeyOfAccount==o.uniqueKeyOfAccount)<0&&this.trackCheckedRecords.push(o)),1==o.enable){let u=this.taxAccountList.findIndex(p=>p.uniqueKeyOfAccount==o.uniqueKeyOfAccount);u>=0&&(this.taxAccountList=(0,P.A)(this.taxAccountList.map((p,v)=>v!==u?p:{...p,...o,isChecked:!1,percentage:null,total:0}),void 0));let c=this.invocieAddEditFormData.taxList.findIndex(p=>p.uniqueKeyTaxAccountEntry==o.uniqueKeyOfAccount);c>=0&&this.invocieAddEditFormData.taxList.splice(c,1);let m=this.newItemAddObject.taxEntity.findIndex(p=>p.uniqueKeyTaxAccountEntry===o.uniqueKeyOfAccount);m>=0&&this.newItemAddObject.taxEntity.splice(m,1)}else 0==o.enable&&"edit-Return"==this.actionType&&(this.taxAccountList=(0,P.A)(this.taxAccountList.map((u,c)=>c!==s?u:{...u,...o,isChecked:o.taxDetailEntity.initiallyChecked}),void 0));if(1==o.taxDetailEntity.taxApplicableOn){if("edit-Return"==this.actionType){let u=this.invocieAddEditFormData.taxList.findIndex(c=>c.uniqueKeyTaxAccountEntry==o.uniqueKeyOfAccount);u>=0&&this.invocieAddEditFormData.taxList.splice(u,1)}this.reCalculateBillOrItemTax(o,"taxOnItem")}else 0==o.taxDetailEntity.taxApplicableOn&&this.reCalculateBillOrItemTax(o,"taxOnBill");"edit-Return"==this.actionType&&(this.isTaxEdited=!0),1==this.isTaxEdited&&(this.invocieAddEditFormData.taxList.map(u=>{u.uniqueKeyTaxAccountEntry==o.uniqueKeyOfAccount?u.taxInclExcl=o.taxDetailEntity.taxInclExcl:this.incExcTaxList.push(o)}),(0,d.A)(this.invocieAddEditFormData.taxList.find(u=>u.uniqueKeyTaxAccountEntry==o.uniqueKeyOfAccount))&&o.taxDetailEntity.taxInclExcl!==n.taxDetailEntity.taxInclExcl&&this.incExcTaxList.findIndex(c=>c.uniqueKeyOfAccount==o.uniqueKeyOfAccount)<0&&this.incExcTaxList.push(o),this.taxEditData=this.invocieAddEditFormData.taxList),this.filterTaxDiscountAccountList()}},{width:"50%"})}reCalculateBillOrItemTax(e,n){(0,d.A)(e)||(this.invocieAddEditFormData.purchaseProductList=this.invocieAddEditFormData.purchaseProductList.map((i,o)=>{if(!(0,d.A)(i.appliedTax)){let s=this.jsonParse(i.appliedTax);if(s.some(u=>u.uniqueKeyTaxAccountEntry===e.uniqueKeyOfAccount)){let u=null;if(("taxOnItem"==n||"taxOnBill"==n)&&(u=s.findIndex(c=>c.uniqueKeyTaxAccountEntry===e.uniqueKeyOfAccount)),u>=0){let c=i.total,m=l.DH.customToFixed(i.qty,this.settingData.quantityRoundOff)*l.DH.customToFixed(i.rate,this.settingData.rateRoundOff),p=0,v=0,y=0;"taxOnItem"==n?s[u].taxInclExcl=e.taxDetailEntity.taxInclExcl:"taxOnBill"==n&&s.splice(u,1),0===i.discountFlag?y=l.DH.roundToEven(m*i.discountPercentage/100,2):1===i.discountFlag&&(y=l.DH.roundToEven(i.discountAmount,2));let f=l.DH.roundToEven(m-y,2),g=[];return(0,d.A)(s)||(1===e.enable&&s.splice(u,1),g=s.map((I,x)=>{let C=l.DH.roundToEven(I.percentage,this.settingData.percentRoundOff);if(1==I.taxInclExcl){let Z=0;this.taxAccountList.forEach(tt=>{1==tt.taxDetailEntity.taxApplicableOn&&1==tt.taxDetailEntity.taxInclExcl&&(Z+=I.percentage)}),p=f*C/(100+Z)}else 0==I.taxInclExcl&&(p=f*C/100,v+=l.DH.roundToEven(p,2));return{...I,calculateTax:l.DH.roundToEven(p,2)}})),c=l.DH.roundToEven(f+v,2),{...i,total:c,appliedTax:JSON.stringify(g)}}}}return i}),this.calInvoiceAmt(this.invocieAddEditFormData.purchaseProductList))}updateDiscountSetting(e){0==e||1==e&&(0,E.A)(this.settingData,"discountTypeSetting")?(this.settingData.discountTypeSetting=parseInt(String(e)),this.discountTypeSetting=this.settingData.discountTypeSetting,"add-Return"==this.actionType?(0,E.A)(this.settingData,"discountTypeSetting")&&"object"==typeof this.settingData?this.settingService.addEditDBSetting(this.settingData,n=>{this.commonService.processResponse(n,i=>{200==n.status&&(this.discountTypeSetting=this.settingData.discountTypeSetting,this.syncDbService.syncData(),this.reCalculateDiscountonItem(),this.filterTaxDiscountAccountList()),this.isLoading=!1})}):this.notificationService.error("SOMETHING_WENT_WRONG",{},!0):"edit-Return"==this.actionType&&(this.reCalculateDiscountonItem(),this.filterTaxDiscountAccountList(e))):this.notificationService.error("SOMETHING_WENT_WRONG",{},!0)}reCalculateDiscountonItem(){0==this.discountTypeSetting&&(this.invocieAddEditFormData.purchaseProductList=this.invocieAddEditFormData.purchaseProductList.map((e,n)=>{if(e.discountAmount>0||e.discountPercentage>0){let o=0,s=0,a=[],u=l.DH.customToFixed(e.qty,this.settingData.quantityRoundOff)*l.DH.customToFixed(e.rate,this.settingData.rateRoundOff);if(!(0,d.A)(e.appliedTax)){let c=this.jsonParse(e.appliedTax);(0,d.A)(c)||(a=c.map((m,p)=>{let v=l.DH.roundToEven(m.percentage,this.settingData.percentRoundOff);if(1==m.taxInclExcl){let y=0;this.taxAccountList.forEach(f=>{1==f.taxDetailEntity.taxApplicableOn&&1==f.taxDetailEntity.taxInclExcl&&f.isChecked&&(y+=f.percentage)}),o=u*v/(100+y)}else 0==m.taxInclExcl&&(o=u*v/100,s+=l.DH.roundToEven(o,2));return{...m,calculateTax:l.DH.roundToEven(o,2)}})),u=l.DH.roundToEven(u+s,2)}return{...e,discountAmount:0,discountFlag:0,discountPercentage:0,total:u,appliedTax:JSON.stringify(a)}}return{...e}})),this.calInvoiceAmt(this.invocieAddEditFormData.purchaseProductList)}addTermAndContion(){this.commonService.showDialog(et.I,{invoiceSelectTerm:this.invoiceTermList},e=>{if((0,E.A)(e,"terms_added_successfully")&&(0,E.A)(e,"term_selected_data")&&1==e.terms_added_successfully){let n=e.term_selected_data,i=this.jsonParse(this.invocieAddEditFormData.termsAndConditions);this.invoiceTermList=[],(0,F.A)(n,o=>{this.invoiceTermList.push(o)}),i=[],(0,F.A)(n,o=>{(!(0,d.A)(i)&&!i.includes(o.termsAndCondition)||(0,d.A)(i))&&i.push(o.termsAndCondition)}),this.invocieAddEditFormData.termsAndConditions=(0,d.A)(i)?"":JSON.stringify(i)}},{width:"50%"})}addCustomField(){this.commonService.showDialog(ot.m,{formType:"DOCUMENT"},e=>{(0,E.A)(e,"custom_field_added")&&e.custom_field_added&&this.fetchDBData()},{panelClass:"ng-material-dialog"})}removeTermsAndCondition(e,n){let i=this.jsonParse(this.invocieAddEditFormData.termsAndConditions);e>=0&&i.splice(e,1);let o=this.invoiceTermList.findIndex(s=>s.termsAndCondition.toLowerCase().replace(/ /g,"")===n.toLowerCase().replace(/ /g,""));o>=0&&this.invoiceTermList.splice(o,1),this.invocieAddEditFormData.termsAndConditions=(0,d.A)(i)?JSON.stringify([]):JSON.stringify(i)}amountRoundOffDialog(){this.commonService.showDialog(it.B,{totalInvoiceAmount:this.actualInvoiceAmount},e=>{(0,E.A)(e,"amount_round_off_successfully")&&e.amount_round_off_successfully&&(0,E.A)(e,"round_value")&&e.round_value.value>0&&(this.invocieAddEditFormData.roundOffAmtIspositive=e.round_value.isPositive,this.invocieAddEditFormData.roundOffAmount=e.round_value.value,this.calInvoicePaymentAndRoundOffAmt(this.invocieAddEditFormData.roundOffAmount))})}roundOffOption(e){this.invocieAddEditFormData.roundOffAmtIspositive=e,this.calInvoicePaymentAndRoundOffAmt(this.invocieAddEditFormData.roundOffAmount)}addRoundofffAmt(e){let n=l.DH.roundToEven(e,2);this.calInvoicePaymentAndRoundOffAmt(n)}calInvoicePaymentAndRoundOffAmt(e){if(e>=0&&!(0,d.A)(this.roundOffAccountList)){this.invocieAddEditFormData.roundOffAccountKey=this.roundOffAccountList[0].uniqueKeyOfAccount;let n=this.actualInvoiceAmount;this.invocieAddEditFormData.roundOffAmtIspositive?n+=e:n-=e,this.totalInvoiceAmount=n,this.invocieAddEditFormData.invoiceAmount=n}this.fetchInvAdjustPaymentData(),this.fetchClientPaymentLinkList(),this.fetchPaymentAmount()}adjustAgainstInv(e){if(!(0,d.A)(this.invocieAddEditFormData.selectSupplier)){let n=this.invocieAddEditFormData.selectSupplier;this.commonService.showDialog(Y.S,{invAdjustReturnType:"purchase-return",invAlreadyAdjust:this.invAdjustSuccess,totalInvoiceAmount:l.DH.roundToEven(this.totalInvoiceAmount,2),uniqueKeyClientAccount:n.uniqueKeyOfAccount,invoiceFormObject:this.invocieAddEditFormData,listOfAdjustPaidInvoice:this.listOfAdjustPaidInvoice,editInvAdjustLintList:e},o=>{(0,E.A)(o,"inv_adjust_successfully")&&o.inv_adjust_successfully&&(0,E.A)(o,"listOfUnpaidInvoices")&&(this.invAdjustSuccess=o.inv_adjust_successfully,this.listOfAdjustPaidInvoice=Object.assign([],o.listOfUnpaidInvoices.filter(s=>s.isChecked)),this.calInvoicePaymentAndRoundOffAmt(this.invocieAddEditFormData.roundOffAmount))},{panelClass:"lw-dialog-inv-adjust-padding"})}}checkProductExist(e){return this.isProductExist=this.productList.some(n=>n.productName.toLowerCase()==e.toLowerCase()),this.isProductExist}checkEmptyProduct(e){return this.checkProductExist(e),(0,d.A)(e)?(this.newItemAddObject.productName="",this.selectProductControl.reset(),this.newItemAddObject.itemQty>0&&(this.disabledAddItemBtn=!0),!0):(this.newItemAddObject.itemQty>0&&(this.disabledAddItemBtn=!1),!1)}jsonParse(e){return(0,d.A)(e)?null:JSON.parse(e)}fetchTodayInvoiceList(e){let n=(e=e.filter(i=>i.createDate>=this.settingData.bookKeepingStartDate)).filter((i,o)=>l.DH.filterFormatDate(i.device_modified_on,"MM/DD/YYYY")==l.DH.filterFormatDate(D().toDate().getTime(),"MM/DD/YYYY"));this.todayInvoiceList=[];for(const i in n){const o=n[i],s=this.accountList.find(m=>m.uniqueKeyFKOtherTable==o.uniqueKeyFKClient),a=this.allClientList.find(m=>m.uniqueKeyOfAccount==o.uniqueKeyFKPurchaseReturnAccountKey),u=l.DH.roundToEven((0,L.A)(this.allPaymentLinkList.filter(m=>!(0,d.A)(m.uniqueKeyFKPaymentEntity)&&m.uniqueKeyClientAccountEntity==o.uniqueKeyFKAccount&&m.uniqueKeyLinkWithAccountEntity==o.uniqueKeyPurchaseReturn),"amount"),2),c=o.amount-u;this.todayInvoiceList.push({uniqueKeyPurchase:o.uniqueKeyPurchaseReturn,purchaseFormatNumber:(0,d.A)(o.purchaseReturnFormatNumber)?"-":o.purchaseReturnFormatNumber,invoiceRefNo:"-",deviceCreateDate:o.deviceCreatedDate,invocieDate:l.DH.filterFormatDate(o.createDate),isOverdue:!1,purchaseDueDate:0,supplierName:(0,d.A)(s)?"":(0,d.A)(this.accountListTrranslatedKey.find(m=>m.title==s.nameOfAccount))?s.nameOfAccount:this.translocoService.translate(this.accountListTrranslatedKey.find(m=>m.title==s.nameOfAccount).translated_key),accountName:(0,d.A)(a)?"":a.nameOfAccount,productAmount:o.productAmount,amount:o.amount,balance:c,invoiceGenerated:o.invoiceProductAvailable,isPurchaseReturn:!0,status:l.DH.getPaymentStatus(o.amount,c)})}this.todayInvoiceList=(0,b.A)(this.todayInvoiceList,["invocieDate","deviceCreateDate"],["desc","desc"])}updatedTaxAccountList(e){let n=0;this.taxAccountList.map((i,o)=>{if(0==i.taxDetailEntity.taxApplicableOn&&1==i.taxDetailEntity.taxInclExcl&&i.isChecked){let s=(0,_.A)(i.percentage)?i.percentage:l.DH.roundToEven(i.percentage,this.settingData.percentRoundOff);if(n=this.productDiscountAmt!=this.invocieAddEditFormData.subTotalProductAmt?this.productDiscountAmt*s/(100+e):this.invocieAddEditFormData.subTotalProductAmt*s/(100+e),n=l.DH.roundToEven(n,2),!(0,d.A)(this.invocieAddEditFormData.taxList)){let a=this.invocieAddEditFormData.taxList.findIndex(u=>u.uniqueKeyTaxAccountEntry==i.uniqueKeyOfAccount);a>=0&&Object.assign(this.invocieAddEditFormData.taxList[a],{calculateTax:n,percentage:l.DH.roundToEven(i.percentage,this.settingData.percentRoundOff)})}i.total=n,i.calculateTax=n}})}_filterCli(e,n){if("payment"===n)return e?this.paymentAccountList.filter(i=>i.nameOfAccount.toLowerCase().includes(e.toLowerCase())):this.paymentAccountList}_filterProduct(e){return e?(0,lt.A)(this.productList.filter(n=>0==n.enable&&n.productName.toLowerCase().includes(e.toLowerCase())),"productName"):this.productList}removeHeaderFooter(e){switch(e){case"header":this.invocieAddEditFormData.invocieHeader="";break;case"footer":this.invocieAddEditFormData.invocieFooter=""}}calculateOtherChargesTotal(){return(0,L.A)(this.invocieAddEditFormData.otherChargeList,"chargeAmount")}applyOtherChargeByAmt(e,n){let i=this.otherIncomeAccountList.find(a=>a.uniqueKeyOfAccount==e),o=!(0,d.A)(this.invocieAddEditFormData.otherChargeList)&&this.invocieAddEditFormData.otherChargeList.some(a=>a.uniqueKeyOtherChargeAccountEntry==e),s=l.DH.roundToEven(n,2);if(!(0,d.A)(i)&&!o&&isNumber(s)&&s>0){let a=this.purchaseReturnService.createOtherChargeObj({amount:l.DH.roundToEven(s,2),name:i.nameOfAccount,uniqueKeyOfAccount:i.uniqueKeyOfAccount,uniqueKeyPurchaseReturn:"edit-Invoice"===this.actionType?this.editInvoiceData.uniquePurchaseReturnKey:this.invocieAddEditFormData.uniquePurchaseReturnKey,uniqueLeaderKey:"edit-Invoice"===this.actionType?this.editInvoiceData.uniqueKeyFKLedger:this.invocieAddEditFormData.uniqueLeaderKey}),u=Object.assign([],this.invocieAddEditFormData.otherChargeList);u.push(a),this.invocieAddEditFormData.otherChargeList=u}else if(o&&isNumber(s)&&s>0){let a=this.invocieAddEditFormData.otherChargeList.findIndex(u=>u.uniqueKeyOtherChargeAccountEntry==e);a>=0&&(this.invocieAddEditFormData.otherChargeList=(0,P.A)(this.invocieAddEditFormData.otherChargeList.map((u,c)=>c!==a?u:{...u,chargeAmount:l.DH.roundToEven(s,2)}),void 0))}else if(o&&isNumber(s)&&s<=0){let a=this.invocieAddEditFormData.otherChargeList.findIndex(u=>u.uniqueKeyOtherChargeAccountEntry==e);a>=0&&this.invocieAddEditFormData.otherChargeList.splice(a,1)}this.calculateTax()}calculateOtherCharge(){let e=0;!(0,d.A)(this.invocieAddEditFormData.otherChargeList)&&!(0,d.A)(this.otherIncomeAccountList)&&(e=l.DH.roundToEven((0,L.A)(this.invocieAddEditFormData.otherChargeList,"chargeAmount"),2),this.totalInvoiceAmount+=e,this.invocieAddEditFormData.invoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount,2),this.actualInvoiceAmount=l.DH.roundToEven(this.totalInvoiceAmount,2),this.calInvoicePaymentAndRoundOffAmt(this.invocieAddEditFormData.roundOffAmount))}addOtherCharges(){this.commonService.showDialog(ht.X,{accountList:this.accountList,bookKeepingStartDate:this.settingData.bookKeepingStartDate,accountType:2},e=>{(0,E.A)(e,"account_added")&&e.account_added&&!(0,d.A)(e.new_account_data)&&(this.notificationService.success("OTHER_CHARGE_ADDED",{},!0),this.fetchDBData())},{panelClass:"ng-material-dialog"})}changeTransactionNo(e){"add-Return"===this.actionType?this.commonService.showDialog(mt.C,{},n=>{(0,E.A)(n,"resType")&&("documents"==n.resType?this.commonService.showDialog(pt.h,{formType:"edit-Invoice"==this.actionType?"edit-invoice":"add-invoice",requestFrom:"Purchase Return",editData:e},i=>{if((0,E.A)(i,"add_edit_transaction_no")&&i.editTransObject){let o=i.editTransObject;this.invocieAddEditFormData.invocieNumber=o.transValue+o.transNo}},{width:"30%"}):this.commonService.showDialog(X.Z,{formType:"edit-Invoice"==this.actionType?"edit-invoice":"add-invoice",requestFrom:"Purchase Return",editData:e},i=>{(0,E.A)(i,"invoice_changed")&&i.invoice_data&&(this.invocieAddEditFormData.invocieNumber=i.invoice_data)},{width:"30%"}))},{width:"30%"}):this.commonService.showDialog(X.Z,{formType:"edit-Invoice"==this.actionType?"edit-invoice":"add-invoice",requestFrom:"Purchase Return",editData:e},n=>{(0,E.A)(n,"invoice_changed")&&n.invoice_data&&(this.invocieAddEditFormData.invocieNumber=n.invoice_data)},{width:"30%"})}ngOnDestroy(){(0,R.A)(this.broadcastSubscription)||this.broadcastSubscription.unsubscribe()}checkTaxExist(){return 1==this.hideTax||!(0,d.A)(this.invocieAddEditFormData.taxList)}setPreviousCustomFieldData(e){(0,d.A)(this.invocieAddEditFormData.userCustomFields)||(this.invocieAddEditFormData.userCustomFields.map(n=>{let i;(0,d.A)(e)||(i=e.find(o=>o.key===n.key),(0,d.A)(i)||(n.value=i.value))}),this.invocieAddEditFormData.userCustomFields=(0,b.A)(this.invocieAddEditFormData.userCustomFields,["key"],["asc"]))}isCustomFieldEdited(e){this.isEditedCustomField=e}fetchPreviousData(e){let n=[];"tax"==e&&(n=(0,d.A)(this.invocieAddEditFormData.taxList)?[]:this.invocieAddEditFormData.taxList,(0,d.A)(n)||(this.previousTaxAccountList=n),"edit-Return"==this.actionType&&!(0,d.A)(this.editInvoiceData)&&!(0,d.A)(this.editInvoiceData.taxList)&&this.editInvoiceData.taxList.map(o=>{let s=this.invocieAddEditFormData.taxList.find(a=>a.uniqueKeyTaxAccountEntry==o.uniqueKeyTaxAccountEntry);(0,d.A)(s)&&((0,d.A)(this.prevUncheckedTaxList)||!(0,d.A)(this.prevUncheckedTaxList)&&(0,d.A)(this.prevUncheckedTaxList.find(a=>a.uniqueKeyTaxAccountEntry==o.uniqueKeyTaxAccountEntry)))&&this.prevUncheckedTaxList.push(o)})),"discount"==e&&(this.prevDiscountEntity=this.invocieAddEditFormData.discountEntity,(0,d.A)(this.invocieAddEditFormData.discountEntity)&&(this.prevDiscountExist=this.discountAccountList))}static#t=this.\u0275fac=function(n){return new(n||r)(t.rXU(At.V),t.rXU(ft.D),t.rXU(vt.z),t.rXU(yt.L),t.rXU(Et.b),t.rXU(Dt.J),t.rXU(gt.h),t.rXU(S.Ix),t.rXU(It.y),t.rXU(S.nX),t.rXU(Ft.q),t.rXU(Tt.W),t.rXU(_t.P),t.rXU(xt.P),t.rXU(q.JO),t.rXU(Lt.u))};static#e=this.\u0275cmp=t.VBU({type:r,selectors:[["app-add-edit"]],viewQuery:function(n,i){if(1&n&&t.GBs(jt,5),2&n){let o;t.mGM(o=t.lsd())&&(i.invoiceAddEditForm=o.first)}},exportAs:["invocieAddEditFormData"],decls:358,vars:231,consts:[["invoiceAddEditForm","ngForm"],["invoiceDatePicker",""],["paymentAutoComplete","matAutocomplete"],["paymentDatePicker",""],[1,"content"],[1,"container-fluid"],[1,"page-title-box"],[1,"row","align-items-center"],[1,"col-sm-6","pl-l"],[1,"page-title"],[1,"col-sm-6"],[1,"breadcrumb","float-right"],[1,"breadcrumb-item"],["href","","routerLink","/dashboard"],["href","","routerLink","/purchases"],[1,"breadcrumb-item","active"],[1,"row","m-0"],[1,"col-lg-3","no-padding"],[1,"m-b-30"],[1,"tab-title"],[1,"col-md-12","col-sm-12","col-12","p-r"],[1,"wrapper","center-block"],["id","accordion","role","tablist","aria-multiselectable","true",1,"panel-group"],[1,"panel"],["role","tab","id","headingoneo",1,"panel-heading","inv-set-side"],[1,"panel-title"],["role","button","data-bs-toggle","collapse","data-parent","#accordion","href","#collapseone","aria-expanded","false","aria-controls","collapseone",1,"collapsed","up-down-arrow"],[1,"material-icons","custom-icons","main-arrows","icon-custome-color"],["id","collapseone","role","tabpanel","aria-labelledby","headingone",1,"panel-collapse","collapse","show"],[1,"panel-body","invc-adjust"],[1,"row","invg-sett"],[1,"col-md-4","invoice-set-dis"],["class","col-md-8 p-r",4,"ngIf"],[4,"ngIf"],["class","panel panel-default",4,"ngIf"],[1,"panel","panel-default"],["role","tab","id","headingThree",1,"panel-heading","active"],["role","button","data-bs-toggle","collapse","data-parent","#accordion","href","#collapseThree","aria-expanded","false","aria-controls","collapseThree",1,"collapsed","up-down-arrow"],["id","collapseThree","role","tabpanel","aria-labelledby","headingThree",1,"panel-collapse","collapse","show"],[1,"panel-body"],["id","pills-tab","role","tablist",1,"nav","nav-pills","inv-list-container","d-block","ps","ps--active-y"],["class","nav-item",4,"ngFor","ngForOf"],["class","text-center mt-4 p-2",4,"ngIf"],[1,"col-lg-9"],[1,"card","m-b-30",2,"margin-bottom","12%"],["novalidate","",1,""],[1,"row","main-bg-create"],[1,"col-lg-6"],[1,"card-body","p-l","p-r","p-b"],[1,"row"],[1,"col-lg-6","p-l","p-r"],[1,"card-body","pb-0","pt-0"],[1,"mt-0","header-title"],["class","sub-title",4,"ngIf"],[1,"col-lg-6","p-l"],[1,"card-body","p-0"],["id","customer",1,"card-body","p-r"],[1,"col","invoice-input"],[1,"row","mb-10"],[1,"col","collapse-input"],[1,"base-date-input"],[1,""],[1,"vdp-datepicker__calendar-button"],[1,"material-icons","md-allicon","inv-date-icon"],["readonly","","matInput","","name","end",1,"date-field","lw-shadow-dateInput",3,"click","dateInput","matDatepicker","min","formControl"],["name","invocieDate","readonly","",1,"date-field",3,"click","value"],[1,"base-input"],[1,"material-icons","md-allicon","left-icon"],["name","invocieNumber","autocomplete","on","type","text","readonly","",1,"input-field","input-field-left-icon","ps-5",3,"ngModelChange","keyup","change","click","ngModel"],[1,"col-md-12",3,"hidden"],[1,"row","pb-3","add-header-main"],["aria-controls","collapseExample","aria-expanded","false","data-bs-toggle","collapse","href","#lwInvoiceHeader","role","button",1,"add-header","collapsed"],[1,"material-icons","custom-icons"],["id","lwInvoiceHeader",1,"row","collapse","mx-0","p-l","p-r",2,"margin-bottom","-15px","width","100%",3,"ngClass"],[1,"col-md-6","p-l"],["rows","3","name","invocieHeader","spellcheck","false",1,"form-control","head-textarea",3,"ngModelChange","placeholder","ngModel"],[1,"col-md-2"],[1,"cursor-pointer",3,"click"],[1,"material-icons","md-allicon","delete-area"],[1,"col-md-12"],["class","out col-md-12 lineitemamt",4,"ngIf"],["class","table form-table",4,"ngIf"],[1,"col-md-6"],[1,"terms",3,"hidden"],[1,"term-header"],["type","button",1,"add-line","pull-right",3,"click"],[1,"col-12","px-0",2,"font-size","13px"],[1,"terms_line_height"],["class","row mx-0 pre-wrap","style","border-bottom: 1px solid #e9e9e9;padding-top: 0px;",4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],[1,"col-12","mt-2",2,"font-size","13px"],["class","row m-0 mb-2",4,"ngFor","ngForOf"],[1,"col-md-6","p-l","total-block"],[1,"subtotal"],[1,"font-custom-bold","price","pull-right"],["class","col-md-12",4,"ngIf"],["class","col-md-12",4,"ngFor","ngForOf"],[1,"row","m-0","mr_right","mr_4","mrg_btm"],[1,"col-3","discount-tax-label","pe-0","p-ll",2,"padding-top","4px"],[2,"text-align","left","vertical-align","bottom"],[1,"col-md-9"],[1,"input-group"],["onfocus","this.select()",1,"form-control","height_40","tax-input","text_right","input_border_color","in-tab","list-tax-input",2,"height","34px !important","border-radius","4px  !important"],[1,"othercharges-bg",3,"hidden"],[1,"row","paid_border","paid_div"],["data-bs-toggle","collapse","href","#othercharges",1,"col-6","text-start","cursor-pointer",2,"margin-top","6px","margin-left","-6px"],[1,"font-custom","words_break",2,"font-size","13px","font-weight","600"],[1,"material-icons","custom-icons","paidArrow","pay_arrow","collapsed"],["aria-controls","othercharges","data-bs-toggle","collapse","href","#othercharges","aria-expanded","false","role","button",1,"paidArrow","fa","fa-angle-down","charge_arrow","collapsed"],["data-bs-toggle","collapse","href","#othercharges",1,"col-6","text-end","cursor-pointer",2,"margin-top","6px"],[1,"font-custom"],["id","othercharges",1,"collapse",2,"width","100%"],[1,"row","mb-1"],[1,"text-center","mt-1"],["type","button",1,"add-line",3,"click"],["class","row mr_right mr_4 mrg_btm ",4,"ngFor","ngForOf"],[1,"row","m-0","pt-1","pb-1","mr_right","mr_4","mrg_btm"],[1,"col-4","discount-tax-label","pe-0","p-ll",2,"padding-top","10px"],[1,"btn-icon","btn-icons","my-2","cursor-pointer",3,"click"],[1,"btn-inner--text"],[1,"btn-inner--icon"],["xmlns","http://www.w3.org/2000/svg","width","1em","height","1em","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","2","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-right"],["x1","5","y1","12","x2","19","y2","12"],["points","12 5 19 12 12 19"],[1,"row","col","col-md-4","aroundadio",2,"margin-top","3px"],["id","buying-selling-group","data-bs-toggle","buttons",1,"buying-selling-group"],[1,"btn","btn-default","buying-selling",3,"ngClass"],["type","radio","name","isPositiveOrNegative",3,"click","checked"],[1,"buying-selling-word"],[1,"col-md-4"],["type","number","onfocus","this.select()","name","roundOffAmount","numeric","",1,"form-control","height_40","tax-input","text_right","input_border_color","in-tab","list-tax-input",2,"height","34px !important","border-radius","4px  !important",3,"ngModelChange","keyup","change","ngModel"],[1,"col-12","term-cond-label","mb-0"],[1,"col-6","text-start"],[1,"font-custom-bold","words_break"],[1,"col-6","text-end"],[1,"font-custom-bold","price"],[1,"sale-return-bg"],["class","row",4,"ngIf"],["style","border-bottom: 1px solid #e8dddd; background: #fff; padding: 0 0 0 6px;",4,"ngIf"],["class","col-md-12 row pe-0 refund-head","style","background: #717C91",4,"ngIf"],["class","  ",4,"ngIf"],[1,"col-md-12","row","pe-0","refund-head"],["data-bs-toggle","collapse","href","#sale-return","role","button",1,"col-6","text-start",2,"margin-top","6px","margin-left","-6px"],["data-bs-toggle","collapse","href","#sale-return","role","button",1,"material-icons","custom-icons","collapsed"],[1,"font-custom","words_break"],["data-bs-toggle","collapse","href","#sale-return","role","button",1,"col-6","text-end",2,"padding-right","10px !important","margin-top","6px"],[1,"refund-list"],["id","sale-return",1,"collapse",2,"width","100%"],["class","row mx-0","style","margin-bottom: 10px;",4,"ngFor","ngForOf"],[1,"salereturnpay-bg"],[1,"row","installment_mrg"],[1,"col-6","form-group"],["type","text","md-clear-button","true","matInput","",1,"form-select","default-height","paid_dateng-dirty",3,"keydown","placeholder","formControl","matAutocomplete"],["autoActiveFirstOption","",3,"optionSelected"],[3,"value",4,"ngFor","ngForOf"],["class","cursor-pointer",3,"click",4,"ngIf"],["type","hidden","name","paymentAccount",3,"ngModelChange","ngModel"],["placeholder","mm/dd/yyyy","autocomplete","off","name","paymentDate","readonly","",1,"form-control","mat-form-field-autofill-control","cdk-text-field-autofill-monitored",3,"click","value"],["readonly","","matInput","","name","end",1,"due_date","lw-shadow-dateInput",3,"click","dateInput","matDatepicker","min","formControl"],["matinput","","name","paymentDate","placeholder","PAY-IN: 1235","name","paymentNumber","readonly","",1,"form-control","mat-input-elements",3,"ngModelChange","ngModel"],["type","number","id","paymentAmount2","onclick","this.select()","name","paidAmount","numeric","",1,"form-control","default-height","paid_dateng-dirty",3,"ngModelChange","ngModel","placeholder"],[1,"col-6","p-r"],["rows","1","cols","10","spellcheck","false","name","note",1,"form-control","custom-scroll","style-3",2,"min-height","54px","padding","8px !important",3,"ngModelChange","placeholder","ngModel"],[1,"col-6"],["type","button",1,"btn","btn-custom-1","addPaid_btn",3,"click"],["aria-hidden","true",1,"fa","fa-plus"],["class","col-12 balance-row",4,"ngIf"],["class","col-12 balance-row",3,"ngClass",4,"ngIf"],[1,"ms-2","add-header-main",3,"hidden"],["aria-controls","collapseExample","aria-expanded","false","data-bs-toggle","collapse","href","#lwInvoiceFooter","role","button",1,"add-header","collapsed"],["id","lwInvoiceFooter",1,"row","collapse","pt-2",3,"ngClass"],["rows","3","name","invocieFooter","spellcheck","false",1,"form-control","head-textarea",3,"ngModelChange","placeholder","ngModel"],[1,"fill-container","txn-bottom-form","grey-bg"],[1,"zb-txn-form"],[1,"row","seperator-col"],[1,"col-lg-7","coll",3,"hidden"],[1,"form-group","add-notes-main"],[1,"mb-2"],["rows","3","id","ember796","name","invocieNotes","spellcheck","false",1,"form-control","ember-text-area","ember-view",3,"ngModelChange","placeholder","ngModel"],[1,"form-check","form-check-inline","d-none"],["id","aa52f3940","type","checkbox",1,"form-check-input","ember-checkbox","ember-view"],["for","aa52f3940",1,"form-check-label"],[1,"hightlight"],[1,"col-lg-5","coll",3,"hidden"],["formcontrolname","signature",1,"signature-padng-touched",2,"overflow","inherit"],["tabindex","0",1,"signature-pad-canvas",2,"touch-action","none"],["type","reset",1,"btn","btn-outline-secondary"],["type","button",1,"btn","btn-outline-secondary"],[1,"footer-invoice"],[1,"fa-pull-right","pb-2"],["type","reset",1,"btn-cancel",3,"routerLink"],["type","button",1,"btn-done",3,"click","lwLoadingBtn","defaultBtnText","loadingText"],[1,"col-md-8","p-r"],[1,"forms-control","tax-invoice-set",3,"change"],[3,"selected","value"],[1,"text-center","pt-3"],["role","tab","id","headingTwo",1,"panel-heading","active"],["role","button","data-bs-toggle","collapse","data-parent","#accordion","href","#collapseTwo","aria-expanded","false","aria-controls","collapseTwo",1,"collapsed","up-down-arrow","active"],["id","collapseTwo","role","tabpanel","aria-labelledby","headingTwo",1,"panel-collapse","collapse","show"],[1,"panel-body","invc-adjust-setting"],["class","setting_pad",4,"ngFor","ngForOf"],["class","text-center mt-4",4,"ngIf"],[1,"setting_pad"],[1,"mrg_top_8","m-0","row"],[1,"col-6","sidebar-txt-name"],[1,"col-6","text_right"],["id","editBtn","title","Edit Tax","type","button",1,"p-r","edit-tax-btn",3,"click"],[1,"material-icons","custom-icons","md-allicon"],[1,"dot-inc"],[1,"text-inc"],[1,"dot-blue"],[1,"text-blue"],["class","dot-red",4,"ngIf"],["class","lw-text-red",4,"ngIf"],[1,"pre-values"],[4,"ngFor","ngForOf"],[1,"dot-red"],[1,"lw-text-red"],[1,"text-center","mt-4"],["src","assets/img/empty-icons/tax.png","width","60"],[1,"nav-item"],["id","","data-invoice-id","00001",1,"nav-link","list-actions",3,"routerLink","ngClass"],[1,"f-m-body"],[1,"f-body","col-md-7","p-l","p-r"],["class","sale-return-tag",4,"ngIf"],["class","without-line-item-tag",4,"ngIf"],[1,"invoice-customer-name"],[1,"inv-dates"],["class","label-partial",4,"ngIf"],["class","label-paid-mini",4,"ngIf"],["class","label-not-paid",4,"ngIf"],["class","label-overdue",4,"ngIf"],[1,"invoice-number"],["class","f-body-right col-md-5 p-r p-l",4,"ngIf"],[1,"sale-return-tag"],[1,"cursor-pointer"],[1,"without-line-item-tag"],[1,"label-partial"],[1,"label-paid-mini"],[1,"label-not-paid"],[1,"label-overdue"],[1,"f-body-right","col-md-5","p-r","p-l"],[1,"text-center","mt-4","p-2"],["src","assets/img/empty-icons/purchase.png","width","60"],[1,"text-center"],[1,"sub-title"],[1,"out","col-md-12","lineitemamt"],[1,"col-md-6","form-group"],[1,"form-label",2,"font-size","15px","font-weight","500"],[1,"text-danger"],["id","lwProductAmount","placeholder","0.00","type","number","name","invoiceAmountNonProduct","numeric","",1,"form-control","up",3,"ngModelChange","keyup","change","required","ngModel"],[1,"table","form-table"],["id","tab_logic"],[2,"background","#717C91","color","#fff","border","none"],[1,"pro-field"],[1,"qty-field"],[1,"rate-field"],["class","tax-field",4,"ngIf"],[1,"amt-field"],[1,"act-field"],[1,"example-list"],[1,"tax-field"],[1,"fw-bold"],["href","",3,"click"],[1,"material-icons","custom-icons","edit-item","md-allicon"],[1,"material-icons","custom-icons","delete-item","md-allicon"],["class","dot-inc-form",4,"ngIf"],["class","text-blue",4,"ngIf"],[1,"dot-inc-form"],[1,"row","mx-0","pre-wrap",2,"border-bottom","1px solid #e9e9e9","padding-top","0px"],[1,"col-12","col-md-10","pe-0","mt-2","mb-1"],[1,"all_terms"],[1,"col-md-2","ml-auto","p-0",2,"cursor","pointer"],[1,"closeicon","show","float-right",3,"click"],["title","Delete Term","alt","","src","assets/img/grey_cross.png",1,"img_hover","del","set-color"],[1,"row","m-0","mb-2"],[1,"col-5"],[1,"col-7"],["type","text",1,"form-control",3,"ngModelChange","name","ngModel"],["class","row m-0 discoint-item-form mr_right mr_4 mrg_btm  ",4,"ngFor","ngForOf"],[1,"row","m-0","discoint-item-form","mr_right","mr_4","mrg_btm"],["data-bs-toggle","dropdown",1,"col-4","discount-tax-label","pt-2","pe-0","p-ll"],[1,"px-0"],["aria-expanded","false","aria-haspopup","true","data-bs-toggle","dropdown",1,"dropdown-toggle","custom-dropdown",2,"cursor","pointer"],[1,"dropdown-menu","dropdown-menu-right"],[1,"active"],["style","padding: 0px !important;",4,"ngIf"],[1,"col-md-3","p-r"],[1,"input-group","sub-tax"],["type","number","onfocus","this.select()","numeric","","oninput","\n                                                                        let discountType = this.getAttribute('data-discountType'),\n                                                                        productAmt = this.getAttribute('data-bill-proudct-amt');\n\n                                                                        if (discountType == 'percent' && parseInt(this.value) > 100) \n                                                                        { \n                                                                            this.value = this.value.slice(0, - 1);\n                                                                            return false; \n\n                                                                        } else if (discountType == 'rupay' && parseInt(this.value) > productAmt) {\n                                                                            \n                                                                            this.value = this.value.slice(0, - 1);\n                                                                            return false;\n                                                                        }",1,"form-control","height_40","tax-input","text_right","input_border_color","in-tab","list-tax-input",2,"height","34px !important","border-radius","4px  !important",3,"ngModelChange","keyup","change","name","ngModel"],["aria-expanded","false","aria-haspopup","true",1,"cursor_pointer","tax-item-inputs-in","dropdown-toggle"],[1,"col-md-5","pt-2","total-dis","text-r"],[2,"padding","0px !important"],["class","row m-0 subtos border-bottom",4,"ngIf"],[1,"row","m-0","subtos","border-bottom"],[1,"col-md-4","p-ll"],[1,"checkbox","checkbox-primary","pt-1","inv-check"],[1,"container-checkbox"],["type","checkbox",3,"ngModelChange","change","id","ngModel","ngModelOptions"],[1,"checkmark"],["type","number","onfocus","this.select()","numeric","","oninput","if (parseInt(this.value) > 100) {\n\n                                                                            this.value = this.value.slice(0, - 1); \n                                                                            return false; \n\n                                                                        } else if (parseFloat(this.value) > 100) {\n                                                                            this.value = 100; \n                                                                            return false; \n\n                                                                        } else if (parseInt(this.value) <= 0) {                           \n                                                                            this.value = this.value.slice(0, - 1);\n                                                                            return false;\n                                                                        }",1,"form-control","height_40","tax-input","text_right","input_border_color","in-tab","list-tax-input",2,"height","34px !important","border-radius","4px  !important",3,"ngModelChange","keyup","change","ngClass","name","ngModel"],["aria-expanded","false","aria-haspopup","true","class","cursor_pointer tax-item-inputs dropdown-toggle",3,"ngClass",4,"ngIf"],["aria-expanded","false","aria-haspopup","true","class","cursor_pointer tax-item-inputs dropdown-toggle","data-bs-toggle","dropdown",3,"ngClass",4,"ngIf"],[1,"dropdown-menu","dropdown-menu-right",2,"padding","1px 0px",3,"ngClass"],["class","",4,"ngFor","ngForOf"],[1,"col-md-5","pt-1","total-dis","text-r"],["aria-expanded","false","aria-haspopup","true",1,"cursor_pointer","tax-item-inputs","dropdown-toggle",3,"ngClass"],["aria-expanded","false","aria-haspopup","true","data-bs-toggle","dropdown",1,"cursor_pointer","tax-item-inputs","dropdown-toggle",3,"ngClass"],[3,"click"],[1,"row","mr_right","mr_4","mrg_btm"],[1,"col-8","discount-tax-label","pe-0","p-ll",2,"padding-top","4px"],["onfocus","this.select()","numeric","",1,"form-control","height_40","tax-input","text_right","input_border_color","in-tab","list-tax-input",2,"height","34px !important","border-radius","4px  !important",3,"ngModelChange","keyup","change","name","ngModel"],[1,"col-md-12",2,"text-align","center"],["type","button",1,"adjusted-inv-btn",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","1em","height","1em","viewBox","0 0 24 24","fill","none","stroke","currentColor","stroke-width","4","stroke-linecap","round","stroke-linejoin","round",1,"feather","feather-arrow-right"],[2,"border-bottom","1px solid #e8dddd","background","#fff","padding","0 0 0 6px"],["aria-controls","collapseAdvancePayment","aria-expanded","false","data-bs-toggle","collapse","href","#collapseAdvancePayment",1,"col-6","text-start","cursor-pointer",2,"margin-top","6px","margin-left","-6px"],["data-bs-toggle","collapse","href","#collapseAdvancePayment",1,"material-icons","custom-icons","paidArrow","pay_arrow","collapsed"],["aria-controls","collapseAdvancePayment","aria-expanded","false","data-bs-toggle","collapse","href","#collapseAdvancePayment",1,"col-6","text-end","cursor-pointer",2,"padding-right","10px !important","margin-top","6px"],[1,"font-custom","price"],[1,"p-0",2,"width","100%"],["id","collapseAdvancePayment",1,"collapse",2,"width","100%"],["class","pay_mrg",4,"ngFor","ngForOf"],[1,"pay_mrg"],["class","",4,"ngIf"],[1,"row","mx-0",2,"margin-bottom","10px"],[1,"col-8","text-start","paid_amt"],[1,"col-3","pad_rg_5","paid_amt","text-end","p-r","p-l","m-t"],[1,"col-1","pad_rg_5","text-end","dropdown","lw-payment-unlink-icon","cursor-pointer"],["data-bs-toggle","dropdown",1,"dropdown-toggle"],["width","1em","height","1em","viewBox","0 0 16 16","fill","currentColor","xmlns","http://www.w3.org/2000/svg",1,"bi","bi-three-dots-vertical"],["fill-rule","evenodd","d","M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],[1,"dropdown-menu","cursor-pointer","lw-payment-link-action",3,"click"],[1,"col-md-12","row","pe-0","refund-head",2,"background","#717C91"],["data-bs-toggle","collapse","href","#invoice-adjust-amt","role","button",1,"col-6","text-start",2,"margin-top","6px","margin-left","-6px"],["data-bs-toggle","collapse","href","#invoice-adjust-amt","role","button",1,"material-icons","custom-icons","collapsed"],["data-bs-toggle","collapse","href","#invoice-adjust-amt","role","button",1,"col-6","text-end",2,"padding-right","10px !important","margin-top","6px"],["id","invoice-adjust-amt",1,"collapse"],["class","pay_mrg cursor-pointer",3,"click",4,"ngFor","ngForOf"],[1,"pay_mrg","cursor-pointer",3,"click"],[1,"col-4","pad_rg_5","paid_amt","text-end","p-l","m-t"],[1,"col-7","text-start","paid_amt"],[1,"col-2","pad_rg_5","text-center","mt-4"],["src","assets/img/edit.svg","width","16","title","Edit Payment",1,"cursor-pointer","ms-2","me-2",3,"click"],["title","Delete","alt","","src","assets/img/grey_cross.png","title","Delete Payment",1,"hg_20","cross_label_img","img_hover",3,"click"],[3,"value"],[1,"material-icons","md-allicon","delete-client"],[1,"col-12","balance-row"],["class","row mx-0",4,"ngIf"],[1,"row","mx-0"],[1,"col-6","text-start",2,"margin-left","-12px"],[1,"bld"],[1,"bld",2,"margin-right","-25px !important"],[1,"divider-pay"],[1,"bld",2,"margin-right","-25px",3,"ngClass"],[1,"bld",2,"margin-right","-25px"],[1,"col-12","balance-row",3,"ngClass"]],template:function(n,i){if(1&n){const o=t.RV6();t.j41(0,"div",4)(1,"div",5)(2,"div",6)(3,"div",7)(4,"div",8)(5,"h4",9),t.EFF(6),t.nI1(7,"transloco"),t.nI1(8,"transloco"),t.k0s()(),t.j41(9,"div",10)(10,"ol",11)(11,"li",12)(12,"a",13),t.EFF(13),t.nI1(14,"transloco"),t.k0s()(),t.j41(15,"li",12)(16,"a",14),t.EFF(17),t.nI1(18,"transloco"),t.k0s()(),t.j41(19,"li",15),t.EFF(20),t.nI1(21,"transloco"),t.nI1(22,"transloco"),t.k0s()()()()(),t.j41(23,"div",16)(24,"div",17)(25,"div",18)(26,"div",19)(27,"div",20)(28,"div",21)(29,"div",22)(30,"div",23)(31,"div",24)(32,"h4",25)(33,"a",26),t.EFF(34),t.nI1(35,"transloco"),t.j41(36,"span",27),t.EFF(37,"expand_more"),t.k0s()()()(),t.j41(38,"div",28)(39,"div",29)(40,"div",30)(41,"div",31)(42,"p"),t.EFF(43),t.nI1(44,"transloco"),t.k0s()(),t.DNE(45,wt,10,16,"div",32)(46,Mt,4,3,"div",33),t.k0s()()()(),t.DNE(47,Ut,12,5,"div",34),t.j41(48,"div",35)(49,"div",36)(50,"h4",25)(51,"a",37),t.EFF(52),t.nI1(53,"transloco"),t.j41(54,"span",27),t.EFF(55,"expand_more"),t.k0s()()()(),t.j41(56,"div",38)(57,"div",39)(58,"ul",40),t.DNE(59,se,23,25,"li",41)(60,ce,8,6,"li",42),t.k0s()()()()()()()()()(),t.j41(61,"div",43)(62,"div",44)(63,"form",45,0)(65,"div",46)(66,"div",47)(67,"div",18)(68,"div",48)(69,"div",49)(70,"div",50)(71,"div",51)(72,"h4",52),t.EFF(73),t.nI1(74,"transloco"),t.j41(75,"p"),t.EFF(76),t.k0s()(),t.DNE(77,de,2,1,"p",53)(78,re,2,1,"p",53)(79,ue,2,1,"p",53)(80,le,2,0,"p",33),t.k0s()(),t.j41(81,"div",54)(82,"div",55)(83,"h4",52),t.EFF(84),t.nI1(85,"transloco"),t.k0s(),t.DNE(86,me,2,1,"p",53)(87,pe,2,1,"p",53)(88,he,2,0,"p",33),t.k0s()()()()()(),t.j41(89,"div",47)(90,"div",18)(91,"div",56)(92,"h2"),t.EFF(93),t.nI1(94,"transloco"),t.k0s(),t.j41(95,"div",57)(96,"div",58)(97,"div",59)(98,"label"),t.EFF(99),t.nI1(100,"transloco"),t.k0s(),t.j41(101,"div",60)(102,"div",61)(103,"span",62)(104,"span",63),t.EFF(105,"today"),t.k0s()(),t.j41(106,"input",64),t.bIt("click",function(){t.eBV(o);const a=t.sdS(108);return t.Njj(a.open())})("dateInput",function(a){return t.eBV(o),t.Njj(i.addDateEvent("invoiceDate",a))}),t.k0s(),t.nrm(107,"mat-datepicker",null,1),t.j41(109,"input",65),t.nI1(110,"dateFormat"),t.bIt("click",function(){t.eBV(o);const a=t.sdS(108);return t.Njj(a.open())}),t.k0s()()()(),t.j41(111,"div",59)(112,"label"),t.EFF(113),t.nI1(114,"transloco"),t.k0s(),t.j41(115,"div",66)(116,"span",67),t.EFF(117,"tag"),t.k0s(),t.j41(118,"input",68),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invocieAddEditFormData.invocieNumber,a)||(i.invocieAddEditFormData.invocieNumber=a),t.Njj(a)}),t.bIt("keyup",function(){return t.eBV(o),t.Njj(i.commonService.formatTransactionNumber(i.formatNameSettings,"purchaseFormatName","purchaseFormatNo",i.invocieAddEditFormData.invocieNumber))})("change",function(){return t.eBV(o),t.Njj(i.commonService.formatTransactionNumber(i.formatNameSettings,"purchaseFormatName","purchaseFormatNo",i.invocieAddEditFormData.invocieNumber))})("click",function(){return t.eBV(o),t.Njj(i.changeTransactionNo(i.invocieAddEditFormData.invocieNumber))}),t.k0s()()()()()()()(),t.j41(119,"div",69)(120,"div",70)(121,"a",71)(122,"span",72),t.EFF(123,"add_circle_outline"),t.k0s(),t.EFF(124),t.nI1(125,"transloco"),t.k0s(),t.j41(126,"div",73)(127,"div",74)(128,"textarea",75),t.nI1(129,"transloco"),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invocieAddEditFormData.invocieHeader,a)||(i.invocieAddEditFormData.invocieHeader=a),t.Njj(a)}),t.k0s()(),t.j41(130,"div",76)(131,"a",77),t.bIt("click",function(){return t.eBV(o),t.Njj(i.removeHeaderFooter("header"))}),t.j41(132,"span",78),t.EFF(133,"clear"),t.k0s()()()()()(),t.j41(134,"div",79),t.DNE(135,Ae,9,5,"div",80),t.k0s(),t.j41(136,"div",79),t.DNE(137,be,22,18,"div",81),t.j41(138,"div",49)(139,"div",82)(140,"div",83)(141,"div",84),t.EFF(142),t.nI1(143,"transloco"),t.j41(144,"button",85),t.bIt("click",function(){return t.eBV(o),t.Njj(i.addTermAndContion())}),t.j41(145,"span",72),t.EFF(146,"add_circle_outline"),t.k0s(),t.EFF(147),t.nI1(148,"transloco"),t.k0s()(),t.j41(149,"div",86)(150,"div",87),t.DNE(151,Re,7,1,"div",88)(152,Pe,3,3,"div",89),t.k0s()()(),t.j41(153,"div",83)(154,"div",84),t.EFF(155),t.nI1(156,"transloco"),t.j41(157,"button",85),t.bIt("click",function(){return t.eBV(o),t.Njj(i.addCustomField())}),t.j41(158,"span",72),t.EFF(159,"add_circle_outline"),t.k0s(),t.EFF(160),t.nI1(161,"transloco"),t.k0s()(),t.j41(162,"div",90)(163,"div",61),t.DNE(164,Ce,6,4,"div",91)(165,Oe,3,3,"div",89),t.k0s()()()(),t.j41(166,"div",92)(167,"div",93)(168,"div",84),t.EFF(169),t.nI1(170,"transloco"),t.j41(171,"span",94),t.EFF(172),t.nI1(173,"CurrencyPipe"),t.k0s()(),t.j41(174,"div")(175,"div",61),t.DNE(176,Se,2,1,"div",95)(177,Ge,2,1,"div",96),t.j41(178,"div",69)(179,"div",97)(180,"div",98)(181,"span",99),t.EFF(182),t.nI1(183,"transloco"),t.k0s()(),t.j41(184,"div",100)(185,"div",101),t.nrm(186,"input",102),t.k0s()()()(),t.j41(187,"div",103)(188,"div",104)(189,"div",105)(190,"span",106)(191,"span",107),t.EFF(192,"expand_more"),t.k0s(),t.EFF(193),t.nI1(194,"transloco"),t.k0s(),t.nrm(195,"a",108),t.k0s(),t.j41(196,"div",109)(197,"span",110),t.EFF(198),t.nI1(199,"CurrencyPipe"),t.k0s()(),t.j41(200,"div",111)(201,"div",79)(202,"div",112)(203,"div",79)(204,"div",113)(205,"button",114),t.bIt("click",function(){return t.eBV(o),t.Njj(i.addOtherCharges())}),t.j41(206,"span",72),t.EFF(207,"add_circle_outline"),t.k0s(),t.EFF(208),t.nI1(209,"transloco"),t.k0s()()()(),t.DNE(210,He,8,6,"div",115),t.k0s()()()(),t.j41(211,"div",79)(212,"div",116)(213,"div",117)(214,"a",118),t.bIt("click",function(){return t.eBV(o),t.Njj(i.amountRoundOffDialog())}),t.j41(215,"span",119),t.EFF(216),t.nI1(217,"transloco"),t.k0s(),t.j41(218,"span",120),t.qSk(),t.j41(219,"svg",121),t.nrm(220,"line",122)(221,"polyline",123),t.k0s()()()(),t.joV(),t.j41(222,"div",124)(223,"div",125)(224,"label",126)(225,"input",127),t.bIt("click",function(){return t.eBV(o),t.Njj(i.roundOffOption(!0))}),t.k0s(),t.j41(226,"span",128),t.EFF(227,"+ "),t.k0s()(),t.j41(228,"label",126)(229,"input",127),t.bIt("click",function(){return t.eBV(o),t.Njj(i.roundOffOption(!1))}),t.k0s(),t.j41(230,"span",128),t.EFF(231,"- "),t.k0s()()()(),t.j41(232,"div",129)(233,"div",101)(234,"input",130),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invocieAddEditFormData.roundOffAmount,a)||(i.invocieAddEditFormData.roundOffAmount=a),t.Njj(a)}),t.bIt("keyup",function(){return t.eBV(o),t.Njj(i.addRoundofffAmt(i.invocieAddEditFormData.roundOffAmount))})("change",function(){return t.eBV(o),t.Njj(i.addRoundofffAmt(i.invocieAddEditFormData.roundOffAmount))}),t.k0s()()()()(),t.j41(235,"div",131)(236,"div",49)(237,"div",132)(238,"span",133),t.EFF(239),t.nI1(240,"transloco"),t.k0s()(),t.j41(241,"div",134)(242,"span",135),t.EFF(243),t.nI1(244,"CurrencyPipe"),t.k0s()()()(),t.j41(245,"div",136),t.DNE(246,Ye,8,3,"div",137)(247,Xe,15,8,"div",138)(248,Je,11,7,"div",139)(249,Qe,3,1,"div",140),t.j41(250,"div",141)(251,"div",142)(252,"span",143),t.EFF(253,"expand_more"),t.k0s(),t.j41(254,"span",144),t.EFF(255),t.nI1(256,"transloco"),t.k0s()(),t.j41(257,"div",145)(258,"span",110),t.EFF(259),t.nI1(260,"CurrencyPipe"),t.k0s()()(),t.j41(261,"div",146)(262,"div",147),t.DNE(263,ze,27,14,"div",148),t.j41(264,"div",149)(265,"div",150)(266,"div",151)(267,"input",152),t.nI1(268,"transloco"),t.bIt("keydown",function(a){return t.eBV(o),t.Njj(i.removeAccount("payment",a))}),t.k0s(),t.j41(269,"mat-autocomplete",153,2),t.bIt("optionSelected",function(a){return t.eBV(o),t.Njj(i.selectedAccount("payment",a))}),t.DNE(271,Ze,2,2,"mat-option",154),t.nI1(272,"async"),t.k0s(),t.DNE(273,ti,3,0,"a",155),t.j41(274,"input",156),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invoicePaymentObject.paymentAccount,a)||(i.invoicePaymentObject.paymentAccount=a),t.Njj(a)}),t.k0s()(),t.j41(275,"div",151)(276,"input",157),t.nI1(277,"dateFormat"),t.bIt("click",function(){t.eBV(o);const a=t.sdS(280);return t.Njj(a.open())}),t.k0s(),t.j41(278,"input",158),t.bIt("click",function(){t.eBV(o);const a=t.sdS(280);return t.Njj(a.open())})("dateInput",function(a){return t.eBV(o),t.Njj(i.addDateEvent("paymentInvoiceDate",a))}),t.k0s(),t.nrm(279,"mat-datepicker",null,3),t.k0s(),t.j41(281,"div",151)(282,"input",159),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invoicePaymentObject.paymentNumber,a)||(i.invoicePaymentObject.paymentNumber=a),t.Njj(a)}),t.k0s()(),t.j41(283,"div",151)(284,"input",160),t.nI1(285,"transloco"),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invoicePaymentObject.paidAmount,a)||(i.invoicePaymentObject.paidAmount=a),t.Njj(a)}),t.k0s()(),t.j41(286,"div",161)(287,"textarea",162),t.nI1(288,"transloco"),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invoicePaymentObject.note,a)||(i.invoicePaymentObject.note=a),t.Njj(a)}),t.k0s()(),t.j41(289,"div",163)(290,"button",164),t.bIt("click",function(){return t.eBV(o),t.Njj(i.addPayment())}),t.nrm(291,"i",165),t.EFF(292),t.nI1(293,"transloco"),t.k0s()()()()()()(),t.DNE(294,si,23,17,"div",166)(295,ui,32,27,"div",167),t.k0s()()()()()()(),t.j41(296,"div",168)(297,"a",169)(298,"span",72),t.EFF(299,"add_circle_outline"),t.k0s(),t.EFF(300),t.nI1(301,"transloco"),t.k0s(),t.j41(302,"div",170)(303,"div",82)(304,"textarea",171),t.nI1(305,"transloco"),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invocieAddEditFormData.invocieFooter,a)||(i.invocieAddEditFormData.invocieFooter=a),t.Njj(a)}),t.k0s()(),t.j41(306,"div",76)(307,"a",77),t.bIt("click",function(){return t.eBV(o),t.Njj(i.removeHeaderFooter("footer"))}),t.j41(308,"span",78),t.EFF(309,"clear"),t.k0s()()()()(),t.j41(310,"div",172)(311,"div",173)(312,"div",174)(313,"div",175)(314,"div",176)(315,"div",177),t.EFF(316),t.nI1(317,"transloco"),t.k0s(),t.j41(318,"div")(319,"textarea",178),t.nI1(320,"transloco"),t.mxI("ngModelChange",function(a){return t.eBV(o),t.DH7(i.invocieAddEditFormData.invocieNotes,a)||(i.invocieAddEditFormData.invocieNotes=a),t.Njj(a)}),t.EFF(321,"                                                "),t.k0s(),t.j41(322,"div",179),t.nrm(323,"input",180),t.j41(324,"label",181)(325,"span",182),t.EFF(326,"Use this in future."),t.k0s()()()()()(),t.j41(327,"div",183)(328,"div",177),t.EFF(329),t.nI1(330,"transloco"),t.k0s(),t.j41(331,"signature-pad-control",184),t.nrm(332,"canvas",185),t.k0s(),t.nrm(333,"br"),t.j41(334,"button",186),t.EFF(335),t.nI1(336,"transloco"),t.k0s(),t.j41(337,"button",187),t.EFF(338),t.nI1(339,"transloco"),t.k0s(),t.j41(340,"button",187),t.EFF(341),t.nI1(342,"transloco"),t.k0s()()()()()()()()()(),t.j41(343,"div",188)(344,"div",189)(345,"button",190)(346,"span",72),t.EFF(347,"cancel"),t.k0s(),t.EFF(348),t.nI1(349,"transloco"),t.k0s(),t.j41(350,"button",191),t.nI1(351,"transloco"),t.nI1(352,"transloco"),t.nI1(353,"transloco"),t.bIt("click",function(){return t.eBV(o),t.Njj(i.submit())}),t.j41(354,"span",72),t.EFF(355,"check_circle"),t.k0s(),t.EFF(356),t.nI1(357,"transloco"),t.k0s()()()()}if(2&n){const o=t.sdS(108),s=t.sdS(270),a=t.sdS(280);t.R7$(6),t.SpI("","edit-Return"===i.actionType?t.bMT(7,111,"EDIT_PURCHASE_RETURN"):t.bMT(8,113,"CREATE_PURCHASE_RETURN")," "),t.R7$(7),t.JRh(t.bMT(14,115,"DASHBOARD")),t.R7$(4),t.JRh(t.bMT(18,117,"PURCHASE_LIST")),t.R7$(3),t.SpI(" ","edit-Return"===i.actionType?t.bMT(21,119,"EDIT_PURCHASE_RETURN"):t.bMT(22,121,"CREATE_PURCHASE_RETURN")," "),t.R7$(14),t.SpI(" ",t.bMT(35,123,"PURCHASE_SETTING")," "),t.R7$(9),t.JRh(t.bMT(44,125,"DIS_LABEL")),t.R7$(2),t.Y8G("ngIf",i.discountAccountList.length>0),t.R7$(),t.Y8G("ngIf",0==i.discountAccountList.length),t.R7$(),t.Y8G("ngIf","add-Return"==i.actionType&&i.checkTaxExist()||"add-Return"!=i.actionType&&i.checkTaxExist()),t.R7$(5),t.SpI(" ",t.bMT(53,127,"PURCHASE_RETURN_GENERATED_TODAY")," "),t.R7$(7),t.Y8G("ngForOf",i.todayInvoiceList),t.R7$(),t.Y8G("ngIf",0==i.todayInvoiceList.length),t.R7$(13),t.SpI(" ",null!=i.customFields&&i.customFields.billTo?null==i.customFields?null:i.customFields.billTo:t.bMT(74,129,"BILL_TO_LABEL"),": "),t.R7$(3),t.JRh(null!=i.invocieAddEditFormData.selectSupplier?i.invocieAddEditFormData.selectSupplier.nameOfAccount:""),t.R7$(),t.Y8G("ngIf",i.invocieAddEditFormData.selectSupplier),t.R7$(),t.Y8G("ngIf",i.invocieAddEditFormData.selectSupplier),t.R7$(),t.Y8G("ngIf",i.invocieAddEditFormData.selectSupplier),t.R7$(),t.Y8G("ngIf",!(i.invocieAddEditFormData.selectSupplier&&(null==i.invocieAddEditFormData.selectSupplier||i.invocieAddEditFormData.selectSupplier==t.lJ4(221,J)||null!=i.invocieAddEditFormData.selectSupplier.clientEntity&&i.invocieAddEditFormData.selectSupplier.clientEntity.email||null!=i.invocieAddEditFormData.selectSupplier.clientEntity&&i.invocieAddEditFormData.selectSupplier.clientEntity.address||null!=i.invocieAddEditFormData.selectSupplier.clientEntity&&i.invocieAddEditFormData.selectSupplier.clientEntity.number))),t.R7$(4),t.SpI(" ",null!=i.customFields&&i.customFields.shipTo?null==i.customFields?null:i.customFields.shipTo:t.bMT(85,131,"SHIP_TO_LABEL"),": "),t.R7$(2),t.Y8G("ngIf",i.invocieAddEditFormData.selectSupplier),t.R7$(),t.Y8G("ngIf",i.invocieAddEditFormData.selectSupplier),t.R7$(),t.Y8G("ngIf",!(i.invocieAddEditFormData.selectSupplier&&(null==i.invocieAddEditFormData.selectSupplier||i.invocieAddEditFormData.selectSupplier==t.lJ4(222,J)||null!=i.invocieAddEditFormData.selectSupplier.clientEntity&&i.invocieAddEditFormData.selectSupplier.clientEntity.email||null!=i.invocieAddEditFormData.selectSupplier.clientEntity&&i.invocieAddEditFormData.selectSupplier.clientEntity.shippingAddress))),t.R7$(5),t.JRh(t.bMT(94,133,"PURCHASE_RETURN")),t.R7$(6),t.JRh(t.bMT(100,135,"PURCHASE_RETURN_DATE")),t.R7$(7),t.Y8G("matDatepicker",o)("min",i.invoiceMinDate)("formControl",i.invoiceDefaultDate),t.R7$(3),t.FS9("value",t.i5U(110,137,i.invocieAddEditFormData.invocieDate,i.settingData)),t.R7$(4),t.JRh(t.bMT(114,140,"PURCHASE_RETURN_NUMBER")),t.R7$(5),t.R50("ngModel",i.invocieAddEditFormData.invocieNumber),t.R7$(),t.Y8G("hidden",!(null!=i.settingData&&null!=i.settingData.fieldVisibility&&i.settingData.fieldVisibility.showHeaderFooter)),t.R7$(5),t.SpI(" ",t.bMT(125,142,"ADDHEADER")," "),t.R7$(2),t.Y8G("ngClass",t.eq3(223,W,""!=i.invocieAddEditFormData.invocieHeader)),t.R7$(2),t.FS9("placeholder",t.bMT(129,144,"ENTER_HERE")),t.R50("ngModel",i.invocieAddEditFormData.invocieHeader),t.R7$(7),t.Y8G("ngIf",i.invocieAddEditFormData.invoiceGenerated),t.R7$(2),t.Y8G("ngIf",!i.invocieAddEditFormData.invoiceGenerated),t.R7$(3),t.Y8G("hidden",!(null!=i.settingData&&null!=i.settingData.fieldVisibility&&i.settingData.fieldVisibility.showTermsCondition)),t.R7$(2),t.SpI(" ",null!=i.customFields&&i.customFields.termsCondition?null==i.customFields?null:i.customFields.termsCondition:t.bMT(143,146,"TERMS_AND_CONDITIONS")," "),t.R7$(5),t.SpI(" ",t.bMT(148,148,"ADD_TERMS"),""),t.R7$(4),t.Y8G("ngForOf",i.jsonParse(i.invocieAddEditFormData.termsAndConditions)),t.R7$(),t.Y8G("ngIf",""==i.invocieAddEditFormData.termsAndConditions||"[]"==i.invocieAddEditFormData.termsAndConditions||null==i.invocieAddEditFormData.termsAndConditions),t.R7$(),t.Y8G("hidden",!(null==i.settingData||null==i.settingData.fieldVisibility||!i.settingData.fieldVisibility.hasOwnProperty("showCustomField")||null!=i.settingData&&null!=i.settingData.fieldVisibility&&i.settingData.fieldVisibility.showCustomField)),t.R7$(2),t.SpI("",t.bMT(156,150,"CUSTOM_FIELD")," "),t.R7$(5),t.SpI(" ",t.bMT(161,152,"ADD_CUSTOM_FIELD"),""),t.R7$(4),t.Y8G("ngForOf",i.invocieAddEditFormData.userCustomFields),t.R7$(),t.Y8G("ngIf",0==i.invocieAddEditFormData.userCustomFields.length),t.R7$(4),t.SpI("",t.bMT(170,154,"SUB_TOTAL")," "),t.R7$(3),t.SpI(" ",t.i5U(173,156,i.invocieAddEditFormData.subTotalProductAmt,i.settingData)," "),t.R7$(4),t.Y8G("ngIf",0==i.discountTypeSetting&&i.showDiscountOnBill),t.R7$(),t.Y8G("ngForOf",i.taxAccountList),t.R7$(),t.Y8G("hidden",!0),t.R7$(4),t.SpI(" ",t.bMT(183,159,"ADJ_LABEL")," (-) "),t.R7$(5),t.Y8G("hidden",!(null==i.settingData||null==i.settingData.fieldVisibility||!i.settingData.fieldVisibility.hasOwnProperty("showOtherCharge")||null!=i.settingData&&null!=i.settingData.fieldVisibility&&i.settingData.fieldVisibility.showOtherCharge||0!=i.calculateOtherChargesTotal())),t.R7$(6),t.SpI(" ",t.bMT(194,161,"OTHER_CHARGES"),""),t.R7$(5),t.JRh(t.ii3(199,163,i.calculateOtherChargesTotal(),i.settingData,!0,null==i.settingData?null:i.settingData.rateRoundOff)),t.R7$(10),t.SpI(" ",t.bMT(209,168,"ADD_NEW_CHARGES"),""),t.R7$(2),t.Y8G("ngForOf",i.otherIncomeAccountList),t.R7$(6),t.SpI(" ",t.bMT(217,170,"AMT_ROUND_OFF"),""),t.R7$(8),t.Y8G("ngClass",t.eq3(225,Q,i.invocieAddEditFormData.roundOffAmtIspositive)),t.R7$(),t.Y8G("checked",i.invocieAddEditFormData.roundOffAmtIspositive),t.R7$(3),t.Y8G("ngClass",t.eq3(227,Q,!i.invocieAddEditFormData.roundOffAmtIspositive)),t.R7$(),t.Y8G("checked",!i.invocieAddEditFormData.roundOffAmtIspositive),t.R7$(5),t.R50("ngModel",i.invocieAddEditFormData.roundOffAmount),t.R7$(5),t.SpI(" ",null!=i.customFields&&i.customFields.grandTotal?null==i.customFields?null:i.customFields.grandTotal:t.bMT(240,172,"TOTAL_LABEL")," "),t.R7$(4),t.JRh(t.i5U(244,174,i.totalInvoiceAmount,i.settingData)),t.R7$(3),t.Y8G("ngIf",1==(null==i.settingData?null:i.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("ngIf",(i.invocieAddEditFormData.invoiceGenerated&&i.invocieAddEditFormData.originalProductAmount>=0||!i.invocieAddEditFormData.invoiceGenerated&&i.invocieAddEditFormData.purchaseProductList.length>0)&&1==(null==i.settingData?null:i.settingData.invoicePaymentTracking)&&i.clientPaymentLinkList.length>0),t.R7$(),t.Y8G("ngIf",1==(null==i.settingData?null:i.settingData.invoicePaymentTracking)&&i.invAdjustPaymentAvailableList.length>0),t.R7$(),t.Y8G("ngIf",1==(null==i.settingData?null:i.settingData.invoicePaymentTracking)&&i.invAdjustPaymentAvailableList.length>0),t.R7$(6),t.SpI("",t.bMT(256,177,"REFUND_MONEY")," "),t.R7$(4),t.SpI(" ",t.i5U(260,179,i.getAdvanceAvailableOrPaidAmt("paid-amt"),i.settingData)," "),t.R7$(4),t.Y8G("ngForOf",i.invoiceAddedPaymentList),t.R7$(4),t.FS9("placeholder",t.bMT(268,182,"SELECT_ACC")),t.Y8G("formControl",i.paymentControl)("matAutocomplete",s),t.R7$(4),t.Y8G("ngForOf",t.bMT(272,184,i.filterPaymentList)),t.R7$(2),t.Y8G("ngIf",null!=i.invoicePaymentObject.paymentAccount),t.R7$(),t.R50("ngModel",i.invoicePaymentObject.paymentAccount),t.R7$(2),t.FS9("value",t.i5U(277,186,i.invoicePaymentObject.paymentDate,i.settingData)),t.R7$(2),t.Y8G("matDatepicker",a)("min",i.invoiceMinDate)("formControl",i.paymentDefaultDate),t.R7$(4),t.R50("ngModel",i.invoicePaymentObject.paymentNumber),t.R7$(2),t.FS9("placeholder",t.bMT(285,189,"ADD_AMT_PAID")),t.R50("ngModel",i.invoicePaymentObject.paidAmount),t.R7$(3),t.FS9("placeholder",t.bMT(288,191,"NOTE")),t.R50("ngModel",i.invoicePaymentObject.note),t.R7$(5),t.SpI(" ",t.bMT(293,193,"ADD")," "),t.R7$(2),t.Y8G("ngIf",(i.invocieAddEditFormData.invoiceGenerated&&i.invocieAddEditFormData.originalProductAmount>=0||!i.invocieAddEditFormData.invoiceGenerated&&i.invocieAddEditFormData.purchaseProductList.length>0)&&0==(null==i.settingData?null:i.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("ngIf",(i.invocieAddEditFormData.invoiceGenerated&&i.invocieAddEditFormData.originalProductAmount>=0||!i.invocieAddEditFormData.invoiceGenerated&&i.invocieAddEditFormData.purchaseProductList.length>0)&&1==(null==i.settingData?null:i.settingData.invoicePaymentTracking)),t.R7$(),t.Y8G("hidden",!(null!=i.settingData&&null!=i.settingData.fieldVisibility&&i.settingData.fieldVisibility.showHeaderFooter)),t.R7$(4),t.SpI(" ",t.bMT(301,195,"FOOTER_ADD")," "),t.R7$(2),t.Y8G("ngClass",t.eq3(229,W,""!=i.invocieAddEditFormData.invocieFooter)),t.R7$(2),t.FS9("placeholder",t.bMT(305,197,"ENTER_HERE")),t.R50("ngModel",i.invocieAddEditFormData.invocieFooter),t.R7$(9),t.Y8G("hidden",!(null==i.settingData||!i.settingData.fieldVisibility.hasOwnProperty("showNotes")||null!=i.settingData&&null!=i.settingData.fieldVisibility&&i.settingData.fieldVisibility.showNotes)),t.R7$(3),t.JRh(t.bMT(317,199,"NOTES_FOR_PURCHASE")),t.R7$(3),t.FS9("placeholder",t.bMT(320,201,"NOTES_FOR_PURCHASE")),t.R50("ngModel",i.invocieAddEditFormData.invocieNotes),t.R7$(8),t.Y8G("hidden",!0),t.R7$(2),t.JRh(t.bMT(330,203,"SIGN_LABEL")),t.R7$(6),t.JRh(t.bMT(336,205,"RESET_FORM")),t.R7$(3),t.SpI("",t.bMT(339,207,"CLEAR_COMPONENT")," "),t.R7$(3),t.JRh(t.bMT(342,209,"FILL")),t.R7$(4),t.FS9("routerLink",i.cancelUrl),t.R7$(3),t.SpI(" ",t.bMT(349,211,"CANCEL"),""),t.R7$(2),t.FS9("loadingText",t.bMT(351,213,"SAVING")),t.Y8G("lwLoadingBtn",i.isLoading)("defaultBtnText","add-Invoice"===i.actionType?t.bMT(352,215,"SAVE_AS_CREDIT"):t.bMT(353,217,"UPDATE")),t.R7$(6),t.SpI(" ","add-Return"===i.actionType?"Save ":t.bMT(357,219,"UPDATE")," ")}},dependencies:[j.YU,j.Sq,j.bT,S.Wk,bt.Q,Rt.T,T.qT,T.xH,T.y7,T.me,T.Q0,T.Zm,T.BC,T.cb,T.YS,T.vS,T.cV,T.l_,w.Vh,w.bZ,M.$3,Pt.wT,M.pN,j.Jj,Ct.o,Ot.a,kt._,q.Kj],styles:[".example-list[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{border:solid 1px #ccc;background-color:#fff!important;border-radius:4px;overflow:hidden}"]})}return r})();var k=A(72882),li=A(96346),mi=A(68238);const pi=[{path:":clientAccountId/select-purchases",component:li.e,canActivate:[k.q],data:{pageType:"select-purchase-to-return",actionType:"select-invoices",formType:"purchase-return"}},{path:":clientAccountId/choose-line-item-to-return",component:mi.I,canActivate:[k.q],data:{pageType:"choose-purchase-line-item-to-return",actionType:"select-line-item",formType:"purchase-return"}},{path:":clientAccountId/add-purchase-return",component:$,canActivate:[k.q],data:{pageType:"add-edit-purchase-return",actionType:"add-Return"}},{path:":editPurchaseReturnId/edit-purchase-return",component:$,canActivate:[k.q],data:{pageType:"add-edit-purchase-return",actionType:"edit-Return"}},{path:":editPurchaseReturnId/edit-ledger-purchase-return",component:$,canActivate:[k.q],data:{pageType:"add-edit-purchase-return",actionType:"edit-Return",redirectType:"account-list"}},{path:":clientAccountId/adjust-advance",component:Y.S,canActivate:[k.q],data:{actionType:"adjust-advance",formType:"purchase-return"}}];let hi=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.$C({type:r});static#i=this.\u0275inj=t.G2t({imports:[S.iI.forChild(pi),S.iI]})}return r})();var Ai=A(99077),fi=A(50074),vi=A(75263),yi=A(97463),Ei=A(94609),Di=A(6320),gi=A(59294),Ii=A(64458),Fi=A(61997),Ti=A(77410),_i=A(42026),xi=A(54066),Li=A(17551),bi=A(34262),Ri=A(33720);let Pi=(()=>{class r{static#t=this.\u0275fac=function(n){return new(n||r)};static#e=this.\u0275mod=t.$C({type:r});static#i=this.\u0275inj=t.G2t({imports:[j.MD,hi,Ai.v,fi.G,T.YN,T.X1,w.X6,vi.ZG,M.jL,yi.R,Ei.C,Di.P,gi.O,Ii.X,Fi.C,Ti.w,_i.w,xi.Z,Li.U,bi.X,Ri.B,q.Q8]})}return r})()}}]);(()=>{"use strict";var d,B={39738:(d,S,A)=>{function K(o,c,i,y,s,a,n){try{var r=o[a](n),t=r.value}catch(u){return void i(u)}r.done?c(t):Promise.resolve(t).then(y,s)}var l=A(97586),D=A(72036),k=A(71981);var E=A(56689),U=A(34501),L=A(36728),$=A(31287);var Q=A(20778),x=A(74077);const Z=function V(o,c){if(o!==c){var i=void 0!==o,y=null===o,s=o==o,a=(0,x.A)(o),n=void 0!==c,r=null===c,t=c==c,u=(0,x.A)(c);if(!r&&!u&&!a&&o>c||a&&n&&t&&!r&&!u||y&&n&&t||!i&&t||!s)return 1;if(!y&&!a&&!u&&o<c||u&&i&&s&&!y&&!a||r&&i&&s||!n&&s||!t)return-1}return 0};var te=A(57003),q=A(43744);const ae=function ne(o,c,i){c=c.length?(0,E.A)(c,function(a){return(0,q.A)(a)?function(n){return(0,U.A)(n,1===a.length?a[0]:a)}:a}):[te.A];var y=-1;c=(0,E.A)(c,(0,Q.A)(k.A));var s=function X(o,c){var i=-1,y=(0,$.A)(o)?Array(o.length):[];return(0,L.A)(o,function(s,a,n){y[++i]=c(s,a,n)}),y}(o,function(a,n,r){return{criteria:(0,E.A)(c,function(u){return u(a)}),index:++y,value:a}});return function H(o,c){var i=o.length;for(o.sort(c);i--;)o[i]=o[i].value;return o}(s,function(a,n){return function I(o,c,i){for(var y=-1,s=o.criteria,a=c.criteria,n=s.length,r=i.length;++y<n;){var t=Z(s[y],a[y]);if(t)return y>=r?t:t*("desc"==i[y]?-1:1)}return o.index-c.index}(a,n,i)})},N=function re(o,c,i,y){return null==o?[]:((0,q.A)(c)||(c=null==c?[]:[c]),(0,q.A)(i=y?void 0:i)||(i=null==i?[]:[i]),ae(o,c,i))};var p=A(73502);self.addEventListener("message",function(){var o=function Y(o){return function(){var c=this,i=arguments;return new Promise(function(y,s){var a=o.apply(c,i);function n(t){K(a,y,s,n,r,"next",t)}function r(t){K(a,y,s,n,r,"throw",t)}n(void 0)})}}(function*(c){let i=c.data;postMessage({salePaymentReport:ue(i.settingData,i.allAccountList,i.allSaleInvoiceList,i.allSaleReturnList,i.allPaymentList,i.allPaymentLinkList,i.allSaleFixedAssetList,i.filterObject)}),self.close()});return function(c){return o.apply(this,arguments)}}());const ue=function(o,c,i,y,s,a,n,r){let t=ce(),u=oe(c,i,y,s,a,n,r);return Object.assign(t,{monthly:{byTime:_("byTime",u),byClient:_("byClient",u)},weekly:{byTime:j("byTime",u),byClient:j("byClient",u)},daily:{byTime:W("byTime",u),byClient:W("byClient",u)}})},oe=function(o,c,i,y,s,a,n){let r=[],t=[];const u=new Map(o.map(e=>[e.uniqueKeyOfAccount,e])),T=new Map(o.map(e=>[e.uniqueKeyFKOtherTable,e])),b=new Map;return s.forEach(e=>{const m=`${e.uniqueKeyFKPaymentEntity}-${e.transactionLinkType}`,g=b.get(m)||[];g.push(e),b.set(m,g)}),(0,D.A)(c)||c.forEach(e=>{let m=u.get(e.uniqueKeyFKAccount),g=l(e.createDate).startOf("isoWeek").format("DD MMM"),M=l(e.createDate).endOf("isoWeek").format("DD MMM YYYY");r.push({type:"SALE",entityNo:e.salesFormatNumber,uniqueKeyEntity:e.uniqueKeySales,paymentTransactionType:null,uniqueKeyClientAccount:(0,D.A)(m)?null:m.uniqueKeyOfAccount,clientData:(0,D.A)(m)?null:m,clientName:(0,D.A)(m)?null:m.nameOfAccount,uniqueKeyLedger:e.uniqueKeyFKLedger,entityProductList:e.saleProductList,amount:e.amount,paymentAmount:0,productAmount:e.productAmount,createDate:e.createDate,deviceCreatedDate:e.deviceCreatedDate,formatDate:l.utc(e.createDate).format("YYYY-MM-DD"),weekNumber:l.utc(e.createDate).get("week"),monthNumber:parseInt(l.utc(e.createDate).format("MM")),year:l.utc(e.createDate).get("year"),weekGroup:[g,"-",M].join("")})}),(0,D.A)(i)||i.forEach(e=>{let m=u.get(e.uniqueKeyFKAccount);if(!(0,D.A)(m)){let g=l(e.createDate).startOf("isoWeek").format("DD MMM"),M=l(e.createDate).endOf("isoWeek").format("DD MMM YYYY");r.push({type:"SALE-RETURN",entityNo:e.salesReturnFormatNumber,uniqueKeyEntity:e.uniqueKeySalesReturn,paymentTransactionType:null,uniqueKeyClientAccount:(0,D.A)(m)?null:m.uniqueKeyOfAccount,clientData:(0,D.A)(m)?null:m,clientName:(0,D.A)(m)?null:m.nameOfAccount,uniqueKeyLedger:e.uniqueKeyFKLedger,entityProductList:e.saleReturnProductList,saleReturnMappingList:e.saleReturnMappingList,amount:e.amount,paymentAmount:0,productAmount:e.productAmount,createDate:e.createDate,deviceCreatedDate:e.deviceCreatedDate,formatDate:l.utc(e.createDate).format("YYYY-MM-DD"),weekNumber:l.utc(e.createDate).get("week"),monthNumber:parseInt(l.utc(e.createDate).format("MM")),year:l.utc(e.createDate).get("year"),weekGroup:[g,"-",M].join("")})}}),(0,D.A)(y)||y.forEach(e=>{let m=(0,D.A)(e.uniqueKeyClient)?n.applySaleOfFixedAssed&&15==e.transactionType?u.get(e.uniqueKeyFKAccount):null:T.get(e.uniqueKeyClient);if(1==e.crDrType&&!(0,D.A)(e.uniqueKeyClient)||n.applySaleOfFixedAssed&&15==e.transactionType){let M=function F(o,c){return o&&o.length?function O(o,c){for(var i,y=-1,s=o.length;++y<s;){var a=c(o[y]);void 0!==a&&(i=void 0===i?a:i+a)}return i}(o,(0,k.A)(c,2)):0}(n.applySaleOfFixedAssed?[]:b.get(`${e.uniqueKeyFKAccount}-15`),"amount"),C=l(e.dateOfPayment).startOf("isoWeek").format("DD MMM"),P=l(e.dateOfPayment).endOf("isoWeek").format("DD MMM YYYY");r.push({type:"PAYMENT",entityNo:e.paymentNo,uniqueKeyEntity:e.uniqueKeyPayment,paymentTransactionType:e.transactionType,uniqueKeyClientAccount:(0,D.A)(m)?null:m.uniqueKeyOfAccount,clientData:(0,D.A)(m)?null:m,clientName:(0,D.A)(m)?null:m.nameOfAccount,uniqueKeyLedger:e.uniqueKeyFKLedger,entityProductList:[],amount:(0,p.ut)(e.amount-M,2),paymentAmount:(0,p.ut)(e.amount-M,2),productAmount:0,createDate:e.dateOfPayment,deviceCreatedDate:e.deviceCreateDate,formatDate:l.utc(e.dateOfPayment).format("YYYY-MM-DD"),weekNumber:l.utc(e.dateOfPayment).get("week"),monthNumber:parseInt(l.utc(e.dateOfPayment).format("MM")),year:l.utc(e.dateOfPayment).get("year"),weekGroup:[C,"-",P].join("")})}}),n.applySaleOfFixedAssed&&((0,D.A)(a)||a.forEach(e=>{let m=u.get(e.uniqueKeyAccountTwo);if(!((0,D.A)(m)||12!=m.accountType&&13!=m.accountType||(0,D.A)(m.clientEntity))){let M=l(e.createdDate).startOf("isoWeek").format("DD MMM"),C=l(e.createdDate).endOf("isoWeek").format("DD MMM YYYY");r.push({type:"SALE-FIXED-ASSETS",entityNo:e.formatNo,uniqueKeyEntity:e.uniqueKeyCapitalTransaction,paymentTransactionType:null,uniqueKeyClientAccount:(0,D.A)(m)?null:m.uniqueKeyOfAccount,clientData:(0,D.A)(m)?null:m,clientName:(0,D.A)(m)?null:m.nameOfAccount,uniqueKeyLedger:e.uniqueKeyLedgerEntry,entityProductList:[],amount:e.transactionAmount,paymentAmount:0,productAmount:0,createDate:e.createdDate,deviceCreatedDate:e.deviceCreatedDate,formatDate:l.utc(e.createdDate).format("YYYY-MM-DD"),weekNumber:l.utc(e.createdDate).get("week"),monthNumber:parseInt(l.utc(e.createdDate).format("MM")),year:l.utc(e.createdDate).get("year"),weekGroup:[M,"-",C].join("")})}})),t=1!==n.duration?r.filter(e=>1===n.duration||(0,D.A)(n.minDate)||(0,D.A)(n.maxDate)||e.formatDate>=n.minDate&&e.formatDate<=n.maxDate):N(r,["createDate","deviceCreatedDate"],["asc","asc"]),b.clear(),u.clear(),T.clear(),t},w=o=>{const c=o.filter(r=>"SALE"===r.type).reduce((r,t)=>r+t.productAmount,0),i=o.filter(r=>"SALE-RETURN"===r.type).reduce((r,t)=>r+t.productAmount,0),y=o.filter(r=>"SALE"===r.type).reduce((r,t)=>r+t.amount,0),s=o.filter(r=>"SALE-RETURN"===r.type).reduce((r,t)=>r+t.amount,0),a=o.filter(r=>"SALE-FIXED-ASSETS"===r.type).reduce((r,t)=>r+t.amount,0),n=o.filter(r=>"PAYMENT"===r.type&&15===r.paymentTransactionType&&(0,D.A)(r.uniqueKeyClient)).reduce((r,t)=>r+t.amount,0);return{grandSaleAmt:(0,p.ut)(c-i,2),netSaleAmt:(0,p.ut)(y-s+a+n,2),paymentAmt:(0,p.ut)(o.reduce((r,t)=>r+(t.paymentAmount||0),0),2)}},h=(o,c)=>o.reduce((i,y)=>((i[y[c]]=i[y[c]]||[]).push(y),i),{}),W=(o,c)=>{const i=(y,s)=>Object.entries(y).map(([a,n])=>{const r=w(n);return{[s]:a,clientName:n[0]?.clientData?.nameOfAccount||"",...r}});if("byTime"===o){const y=h(c,"formatDate"),s=Object.entries(y).map(([a,n])=>{const r=i(h(n,"uniqueKeyClientAccount"),"clientAccountKey");return{date:a,records:(0,p.GY)(r,"clientName"),grandSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.grandSaleAmt,0),2),netSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.netSaleAmt,0),2),paymentSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.paymentAmt,0),2)}});return{report:N(s,"date","asc"),grandSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.grandSubTotal,0),2),netSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.netSubTotal,0),2),paymentTotal:(0,p.ut)(s.reduce((a,n)=>a+n.paymentSubTotal,0),2)}}if("byClient"===o){const y=h(c,"uniqueKeyClientAccount"),s=Object.entries(y).map(([a,n])=>{const r=i(h(n,"formatDate"),"date");return{clientName:n[0]?.clientData?.nameOfAccount||"",records:N(r,"date","asc"),grandSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.grandSaleAmt,0),2),netSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.netSaleAmt,0),2),paymentSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.paymentAmt,0),2)}});return{report:(0,p.GY)(s,"clientName"),grandSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.grandSubTotal,0),2),netSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.netSubTotal,0),2),paymentTotal:(0,p.ut)(s.reduce((a,n)=>a+n.paymentSubTotal,0),2)}}},j=(o,c)=>{const s=c.map(t=>l(t.createDate).format("YYYY-MM-DD")),a=new Date(Math.min(...s.map(t=>new Date(t).getTime()))),n=new Date(Math.max(...s.map(t=>new Date(t).getTime()))),r=((t,u)=>{const T=[];l.updateLocale("en",{week:{dow:1,doy:4}});let b=l(t).startOf("week");const e=l(u).endOf("week");for(;b.isBefore(e);)T.push({start:b.toDate(),end:l(b).endOf("week").toDate()}),b.add(1,"weeks");return T})(a.valueOf(),l(n).add(7,"days").valueOf());if("byTime"===o){const t=r.map(u=>{const T=l(u.start).startOf("day"),b=l(u.end).endOf("day"),e=N(c,"formatDate","asc").filter(m=>l(m.createDate).isBetween(T,b,null,"[]"));if(e.length>0){const m=((t,u)=>Object.entries(t).map(([T,b])=>{const e=w(b);return{clientAccountKey:T,clientName:b[0]?.clientData?.nameOfAccount||"",...e}}))(h(e,"uniqueKeyClientAccount"));return{from:l(T.format("YYYY-MM-DD")).format("DD MMM"),to:l(b.format("YYYY-MM-DD")).format("DD MMM YYYY"),records:(0,p.GY)(m,"clientName"),grandSubTotal:(0,p.ut)(m.reduce((g,M)=>g+M.grandSaleAmt,0),2),netSubTotal:(0,p.ut)(m.reduce((g,M)=>g+M.netSaleAmt,0),2),paymentSubTotal:(0,p.ut)(m.reduce((g,M)=>g+M.paymentAmt,0),2)}}return null}).filter(Boolean);return{report:t,grandSaleTotal:(0,p.ut)(t.reduce((u,T)=>u+T.grandSubTotal,0),2),netSaleTotal:(0,p.ut)(t.reduce((u,T)=>u+T.netSubTotal,0),2),paymentTotal:(0,p.ut)(t.reduce((u,T)=>u+T.paymentSubTotal,0),2)}}if("byClient"===o){const t=h(c,"uniqueKeyClientAccount"),u=Object.entries(t).map(([T,b])=>{const e=h(b,"weekGroup"),m=Object.entries(e).map(([g,M])=>{const[C,P]=g.split("-"),ie=w(M);return{from:C,to:P,clientName:M[0].clientName,clientAccountKey:T,...ie}});return{clientName:b[0].clientName,records:m,grandSubTotal:(0,p.ut)(m.reduce((g,M)=>g+M.grandSaleAmt,0),2),netSubTotal:(0,p.ut)(m.reduce((g,M)=>g+M.netSaleAmt,0),2),paymentSubTotal:(0,p.ut)(m.reduce((g,M)=>g+M.paymentAmt,0),2)}});return{report:(0,p.GY)(u,"clientName"),grandSaleTotal:(0,p.ut)(u.reduce((T,b)=>T+b.grandSubTotal,0),2),netSaleTotal:(0,p.ut)(u.reduce((T,b)=>T+b.netSubTotal,0),2),paymentTotal:(0,p.ut)(u.reduce((T,b)=>T+b.paymentSubTotal,0),2)}}},_=(o,c)=>{if("byTime"===o){const y=h(c,"year"),s=Object.entries(y).flatMap(([a,n])=>{const r=h(n,"monthNumber");return Object.entries(r).map(([t,u])=>{const T=((y,s)=>Object.entries(y).map(([a,n])=>{const r=w(n);return{clientAccountKey:a,clientName:n[0].clientName,...r}}))(h(u,"uniqueKeyClientAccount"));return{monthYear:l().set("month",parseInt(t)-1).set("year",parseInt(a)).startOf("month").format("MMM YYYY"),records:(0,p.GY)(T,"clientName"),grandSubTotal:(0,p.ut)(T.reduce((e,m)=>e+m.grandSaleAmt,0),2),netSubTotal:(0,p.ut)(T.reduce((e,m)=>e+m.netSaleAmt,0),2),paymentSubTotal:(0,p.ut)(T.reduce((e,m)=>e+m.paymentAmt,0),2)}})});return{report:s.sort((a,n)=>l(a.monthYear,"MMM YYYY").diff(l(n.monthYear,"MMM YYYY"))),grandSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.grandSubTotal,0),2),netSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.netSubTotal,0),2),paymentTotal:(0,p.ut)(s.reduce((a,n)=>a+n.paymentSubTotal,0),2)}}if("byClient"===o){const y=h(c,"uniqueKeyClientAccount"),s=Object.entries(y).map(([a,n])=>{const r=Object.entries(h(n,"year")).flatMap(([t,u])=>Object.entries(h(u,"monthNumber")).map(([T,b])=>{const e=w(b);return{monthYear:l().set("month",parseInt(T)-1).set("year",parseInt(t)).startOf("month").format("MMM YYYY"),clientAccountKey:a,clientName:b[0].clientName,...e}}));return{clientName:n[0].clientName,records:r.sort((t,u)=>t.monthYear.localeCompare(u.monthYear)),grandSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.grandSaleAmt,0),2),netSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.netSaleAmt,0),2),paymentSubTotal:(0,p.ut)(r.reduce((t,u)=>t+u.paymentAmt,0),2)}});return{report:(0,p.GY)(s,"clientName"),grandSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.grandSubTotal,0),2),netSaleTotal:(0,p.ut)(s.reduce((a,n)=>a+n.netSubTotal,0),2),paymentTotal:(0,p.ut)(s.reduce((a,n)=>a+n.paymentSubTotal,0),2)}}},ce=function(){return{monthly:{byTime:{report:[],grandSaleTotal:0,netSaleTotal:0,paymentTotal:0},byClient:{report:[],grandSaleTotal:0,netSaleTotal:0,paymentTotal:0}},weekly:{byTime:{report:[],grandSaleTotal:0,netSaleTotal:0,paymentTotal:0},byClient:{report:[],grandSaleTotal:0,netSaleTotal:0,paymentTotal:0}},daily:{byTime:{report:[],grandSaleTotal:0,netSaleTotal:0,paymentTotal:0},byClient:{report:[],grandSaleTotal:0,netSaleTotal:0,paymentTotal:0}}}}}},G={};function f(d){var S=G[d];if(void 0!==S)return S.exports;var A=G[d]={id:d,loaded:!1,exports:{}};return B[d].call(A.exports,A,A.exports,f),A.loaded=!0,A.exports}f.m=B,f.x=()=>{var d=f.O(void 0,[2036,5358,2359,1981,5205,9651],()=>f(39738));return f.O(d)},d=[],f.O=(S,A,K,Y)=>{if(!A){var D=1/0;for(l=0;l<d.length;l++){for(var[A,K,Y]=d[l],k=!0,O=0;O<A.length;O++)(!1&Y||D>=Y)&&Object.keys(f.O).every(L=>f.O[L](A[O]))?A.splice(O--,1):(k=!1,Y<D&&(D=Y));if(k){d.splice(l--,1);var v=K();void 0!==v&&(S=v)}}return S}Y=Y||0;for(var l=d.length;l>0&&d[l-1][2]>Y;l--)d[l]=d[l-1];d[l]=[A,K,Y]},f.n=d=>{var S=d&&d.__esModule?()=>d.default:()=>d;return f.d(S,{a:S}),S},f.d=(d,S)=>{for(var A in S)f.o(S,A)&&!f.o(d,A)&&Object.defineProperty(d,A,{enumerable:!0,get:S[A]})},f.f={},f.e=d=>Promise.all(Object.keys(f.f).reduce((S,A)=>(f.f[A](d,S),S),[])),f.u=d=>d+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5205:"d10efc9ae5058a53",5358:"b07617e082274e68",9651:"358c61ad48462864"}[d]+".js",f.miniCssF=d=>{},f.o=(d,S)=>Object.prototype.hasOwnProperty.call(d,S),f.nmd=d=>(d.paths=[],d.children||(d.children=[]),d),(()=>{var d;f.tt=()=>(void 0===d&&(d={createScriptURL:S=>S},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(d=trustedTypes.createPolicy("angular#bundler",d))),d)})(),f.tu=d=>f.tt().createScriptURL(d),f.p="",(()=>{var d={9738:1};f.f.i=(Y,l)=>{d[Y]||importScripts(f.tu(f.p+f.u(Y)))};var A=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],K=A.push.bind(A);A.push=Y=>{var[l,D,k]=Y;for(var O in D)f.o(D,O)&&(f.m[O]=D[O]);for(k&&k(f);l.length;)d[l.pop()]=1;K(Y)}})(),(()=>{var d=f.x;f.x=()=>Promise.all([2036,5358,2359,1981,5205,9651].map(f.e,f)).then(d)})(),f.x()})();"use strict";(self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[]).push([[9746,3502,9250,9651,6869],{73502:(D,i,e)=>{e.d(i,{GY:()=>K,uh:()=>P,ut:()=>t});var o=e(49671),u=e(72036);function t(r,c){if(Number.isNaN(r)||Number.isNaN(c)||c<0||typeof c>"u")return r;var y=c||0,A=Math.pow(10,y),h=+(y?r*A:r).toFixed(8),M=Math.floor(h),d=h-M,l=d>.5-1e-8&&d<.5+1e-8?M%2==0?M:M+1:Math.round(h);return y?l/A:l}function P(r){var c=[];return(0,o.A)(r,y=>{(0,o.A)(y,A=>{c.push(A)})}),c}function K(r,c){return(0,u.A)(r)||(0,u.A)(c)?[]:r.sort((y,A)=>{if("Not Mentioned"!=y[c]&&!(0,u.A)(y[c])&&!(0,u.A)(A[c]))return String.prototype.localeCompare.call(y[c].toLowerCase(),A[c].toLowerCase())})}e(97586)},64982:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n,s,t){switch(t.length){case 0:return n.call(s);case 1:return n.call(s,t[0]);case 2:return n.call(s,t[0],t[1]);case 3:return n.call(s,t[0],t[1],t[2])}return n.apply(s,t)}},99162:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n,s){for(var t=-1,a=null==n?0:n.length;++t<a&&!1!==s(n[t],t,n););return n}},13854:(D,i,e)=>{e.d(i,{A:()=>n});var o=e(99888);const n=function u(s,t){return!(null==s||!s.length)&&(0,o.A)(s,t,0)>-1}},6106:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n,s,t){for(var a=-1,E=null==n?0:n.length;++a<E;)if(t(s,n[a]))return!0;return!1}},35038:(D,i,e)=>{e.d(i,{A:()=>O});var o=e(38587),u=e(13854),n=e(6106),s=e(56689),t=e(20778),a=e(25934);const O=function P(R,k,K,B){var x=-1,g=u.A,I=!0,m=R.length,L=[],b=k.length;if(!m)return L;K&&(k=(0,s.A)(k,(0,t.A)(K))),B?(g=n.A,I=!1):k.length>=200&&(g=a.A,I=!1,k=new o.A(k));e:for(;++x<m;){var U=R[x],Q=null==K?U:K(U);if(U=B||0!==U?U:0,I&&Q==Q){for(var S=b;S--;)if(k[S]===Q)continue e;L.push(U)}else g(k,Q,B)||L.push(U)}return L}},36728:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(74620);const s=(0,e(80816).A)(o.A)},8556:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n,s,t,a){for(var E=n.length,P=t+(a?1:-1);a?P--:++P<E;)if(s(n[P],P,n))return P;return-1}},72662:(D,i,e)=>{e.d(i,{A:()=>n});const n=(0,e(40318).A)()},74620:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(72662),u=e(14429);const s=function n(t,a){return t&&(0,o.A)(t,a,u.A)}},99888:(D,i,e)=>{e.d(i,{A:()=>t});var o=e(8556),u=e(36440),n=e(8488);const t=function s(a,E,P){return E==E?(0,n.A)(a,E,P):(0,o.A)(a,u.A,P)}},36440:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n){return n!=n}},79103:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(36728),u=e(31287);const s=function n(t,a){var E=-1,P=(0,u.A)(t)?Array(t.length):[];return(0,o.A)(t,function(O,R,k){P[++E]=a(O,R,k)}),P}},96388:(D,i,e)=>{e.d(i,{A:()=>k});var o=e(56689),u=e(34501),n=e(71981),s=e(79103),t=e(45276),a=e(20778),E=e(27369),P=e(57003),O=e(43744);const k=function R(K,B,x){B=B.length?(0,o.A)(B,function(m){return(0,O.A)(m)?function(L){return(0,u.A)(L,1===m.length?m[0]:m)}:m}):[P.A];var g=-1;B=(0,o.A)(B,(0,a.A)(n.A));var I=(0,s.A)(K,function(m,L,b){return{criteria:(0,o.A)(B,function(Q){return Q(m)}),index:++g,value:m}});return(0,t.A)(I,function(m,L){return(0,E.A)(m,L,x)})}},90363:(D,i,e)=>{e.d(i,{A:()=>t});var o=e(57003),u=e(59008),n=e(66322);const t=function s(a,E){return(0,n.A)((0,u.A)(a,E,o.A),a+"")}},48993:(D,i,e)=>{e.d(i,{A:()=>t});var o=e(21913),u=e(84746),n=e(57003);const t=u.A?function(a,E){return(0,u.A)(a,"toString",{configurable:!0,enumerable:!1,value:(0,o.A)(E),writable:!0})}:n.A},45276:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n,s){var t=n.length;for(n.sort(s);t--;)n[t]=n[t].value;return n}},17834:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n,s){for(var t,a=-1,E=n.length;++a<E;){var P=s(n[a]);void 0!==P&&(t=void 0===t?P:t+P)}return t}},79395:(D,i,e)=>{e.d(i,{A:()=>n});var o=e(57003);const n=function u(s){return"function"==typeof s?s:o.A}},43867:(D,i,e)=>{e.d(i,{A:()=>n});var o=e(74077);const n=function u(s,t){if(s!==t){var a=void 0!==s,E=null===s,P=s==s,O=(0,o.A)(s),R=void 0!==t,k=null===t,K=t==t,B=(0,o.A)(t);if(!k&&!B&&!O&&s>t||O&&R&&K&&!k&&!B||E&&R&&K||!a&&K||!P)return 1;if(!E&&!O&&!B&&s<t||B&&a&&P&&!E&&!O||k&&a&&P||!R&&P||!K)return-1}return 0}},27369:(D,i,e)=>{e.d(i,{A:()=>n});var o=e(43867);const n=function u(s,t,a){for(var E=-1,P=s.criteria,O=t.criteria,R=P.length,k=a.length;++E<R;){var K=(0,o.A)(P[E],O[E]);if(K)return E>=k?K:K*("desc"==a[E]?-1:1)}return s.index-t.index}},80816:(D,i,e)=>{e.d(i,{A:()=>n});var o=e(31287);const n=function u(s,t){return function(a,E){if(null==a)return a;if(!(0,o.A)(a))return s(a,E);for(var P=a.length,O=t?P:-1,R=Object(a);(t?O--:++O<P)&&!1!==E(R[O],O,R););return a}}},40318:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n){return function(s,t,a){for(var E=-1,P=Object(s),O=a(s),R=O.length;R--;){var k=O[n?R:++E];if(!1===t(P[k],k,P))break}return s}}},84746:(D,i,e)=>{e.d(i,{A:()=>n});var o=e(44713);const n=function(){try{var s=(0,o.A)(Object,"defineProperty");return s({},"",{}),s}catch{}}()},59008:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(64982),u=Math.max;const s=function n(t,a,E){return a=u(void 0===a?t.length-1:a,0),function(){for(var P=arguments,O=-1,R=u(P.length-a,0),k=Array(R);++O<R;)k[O]=P[a+O];O=-1;for(var K=Array(a+1);++O<a;)K[O]=P[O];return K[a]=E(k),(0,o.A)(t,this,K)}}},66322:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(48993);const s=(0,e(59950).A)(o.A)},59950:(D,i,e)=>{e.d(i,{A:()=>t});var n=Date.now;const t=function s(a){var E=0,P=0;return function(){var O=n(),R=16-(O-P);if(P=O,R>0){if(++E>=800)return arguments[0]}else E=0;return a.apply(void 0,arguments)}}},8488:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n,s,t){for(var a=t-1,E=n.length;++a<E;)if(n[a]===s)return a;return-1}},21913:(D,i,e)=>{e.d(i,{A:()=>u});const u=function o(n){return function(){return n}}},49671:(D,i,e)=>{e.d(i,{A:()=>a});var o=e(99162),u=e(36728),n=e(79395),s=e(43744);const a=function t(E,P){return((0,s.A)(E)?o.A:u.A)(E,(0,n.A)(P))}},98388:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(31287),u=e(42661);const s=function n(t){return(0,u.A)(t)&&(0,o.A)(t)}},87372:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(96388),u=e(43744);const s=function n(t,a,E,P){return null==t?[]:((0,u.A)(a)||(a=null==a?[]:[a]),(0,u.A)(E=P?void 0:E)||(E=null==E?[]:[E]),(0,o.A)(t,a,E))}},83703:(D,i,e)=>{e.d(i,{A:()=>s});var o=e(71981),u=e(17834);const s=function n(t,a){return t&&t.length?(0,u.A)(t,(0,o.A)(a,2)):0}},42969:(D,i,e)=>{e.d(i,{A:()=>t});var o=e(35038),u=e(90363),n=e(98388);const t=(0,u.A)(function(a,E){return(0,n.A)(a)?(0,o.A)(a,E):[]})},10467:(D,i,e)=>{function o(n,s,t,a,E,P,O){try{var R=n[P](O),k=R.value}catch(K){return void t(K)}R.done?s(k):Promise.resolve(k).then(a,E)}function u(n){return function(){var s=this,t=arguments;return new Promise(function(a,E){var P=n.apply(s,t);function O(k){o(P,a,E,O,R,"next",k)}function R(k){o(P,a,E,O,R,"throw",k)}O(void 0)})}}e.d(i,{A:()=>u})}}]);(()=>{"use strict";var e,p={},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,7586,8182],()=>r(48182));return r.O(e)},e=[],r.O=(t,a,s,n)=>{if(!a){var f=1/0;for(c=0;c<e.length;c++){for(var[a,s,n]=e[c],i=!0,u=0;u<a.length;u++)(!1&n||f>=n)&&Object.keys(r.O).every(_=>r.O[_](a[u]))?a.splice(u--,1):(i=!1,n<f&&(f=n));if(i){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e,t),t),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",5358:"b07617e082274e68",7586:"368ceba96ee1b551",8182:"e68a29daed05423c"}[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={9934:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var a=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=a.push.bind(a);a.push=n=>{var[c,f,i]=n;for(var u in f)r.o(f,u)&&(r.m[u]=f[u]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,7586,8182].map(r.e,r)).then(e)})(),r.x()})();(()=>{"use strict";var e,p={},l={};function r(e){var t=l[e];if(void 0!==t)return t.exports;var a=l[e]={id:e,loaded:!1,exports:{}};return p[e].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}r.m=p,r.x=()=>{var e=r.O(void 0,[2036,5358,2359,1981,5205,3473],()=>r(13473));return r.O(e)},e=[],r.O=(t,a,s,n)=>{if(!a){var f=1/0;for(c=0;c<e.length;c++){for(var[a,s,n]=e[c],i=!0,u=0;u<a.length;u++)(!1&n||f>=n)&&Object.keys(r.O).every(_=>r.O[_](a[u]))?a.splice(u--,1):(i=!1,n<f&&(f=n));if(i){e.splice(c--,1);var o=s();void 0!==o&&(t=o)}}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[a,s,n]},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.f={},r.e=e=>Promise.all(Object.keys(r.f).reduce((t,a)=>(r.f[a](e,t),t),[])),r.u=e=>e+"."+{1981:"f4dbd5e9daf53cd5",2036:"950ada20914cb115",2359:"e32febfda66db76b",3473:"23575ce5e9db57d6",5205:"d10efc9ae5058a53",5358:"b07617e082274e68"}[e]+".js",r.miniCssF=e=>{},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{var e;r.tt=()=>(void 0===e&&(e={createScriptURL:t=>t},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(e=trustedTypes.createPolicy("angular#bundler",e))),e)})(),r.tu=e=>r.tt().createScriptURL(e),r.p="",(()=>{var e={9958:1};r.f.i=(n,c)=>{e[n]||importScripts(r.tu(r.p+r.u(n)))};var a=self.webpackChunksimple_accounts_manager=self.webpackChunksimple_accounts_manager||[],s=a.push.bind(a);a.push=n=>{var[c,f,i]=n;for(var u in f)r.o(f,u)&&(r.m[u]=f[u]);for(i&&i(r);c.length;)e[c.pop()]=1;s(n)}})(),(()=>{var e=r.x;r.x=()=>Promise.all([2036,5358,2359,1981,5205,3473].map(r.e,r)).then(e)})(),r.x()})();{
    "releaseDate": "22 Jan 2025",
    "forceUpdate": true,
    "webVersion": "1.84.1"
}Customer Name*,Contact Person,Address,Tax ID,Business Details,Contact Number,Email,Shipping Address,Opening Balance,Notes��ࡱ�                ;  ��	               	                ����        ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������               ����
   ����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������R o o t   E n t r y                                               ������������                                    ����                                                                            ������������                                    ����                                                                            ������������                                    ����                                                                            ������������                                    ����                                	   
                                                                  ����!   ��������$   %   &   ����(   )   ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������	   ��       �  ��    �   \ p   Calc                                                                                                         B  �a   �  =  �   �   �   =       @  8      �@    �    "       �   �    1  �   ��     A r i a l 1  �   ��      A r i a l 1  �   ��      A r i a l 1  �   ��      A r i a l  �   General�    � ��            � �     ��   �        � �     ��   �        � �     ��   �        � �     ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �    �              � �   + ��   �        � �   ) ��   �        � �   , ��   �        � �   * ��   �        � �   	 ��   �        � �    �  (          � �  � �� ��� ��� ��� ��� ��`   �       clients�    � �  T� � Z   �R     �                     3 �   �   �	  �@  @ �         �  � � 
   
     Customer Name*  Contact Person  Address  Tax ID  Business Details  Contact Number  Email  Shipping Address  Opening Balance  Notes� 
 
 Y     c c                 
   	   ��         d          ����MbP?_   �          %   � �  �*    +    �         �    �    &        �?'        �?(        �?)        �?� "  d      ,,��`�?��`�? U   }      �     }    �     }    H     }         }    #     }    �     }    �     }    �     }    �     }  	  #	                
        
 �      � 
          � 
        � 
        � 
        � 
        � 
        � 
        � 
        � 
        � 
   	  	   � P  �H    �          �0    �(    	�                    
�         > �    @                          g g           ����    
                                                ��
  ����     �      F   Microsoft Excel 97-Tabelle    Biff8                                                                                                                          ��                       ����Oh�� +'��0   �         @      H   	   \   
   h      t      �      �      ��     	   Priyanka          2   @   ��Dn    @           @   ���PJ��@   qy��Ť�                                                        ��                       ��՜.�� +,��D   ��՜.�� +,��\                  ��  d                 @      H            KSOProductBuildVer     ��        1033-10.2.0.7635                                                                                                                                                                                                                                                                                                                                                                                                    R o o t   E n t r y                                               ��������        �      F                       �
      W o r k b o o k                                                         ����                                        �       C o m p O b j                                                      ��������                                        I        O l e                                                         
  ������������                                    "           S u m m a r y I n f o r m a t i o n                           (  ����   ����                                    #   �        D o c u m e n t S u m m a r y I n f o r m a t i o n           8  ������������                                    '   �                                                                           ������������                                    ����                                                                            ������������                                    ����        PK  X(�V               _rels/.rels���N�0��{�*�5�@���LH�!4�$n���ă��D��Îq~�b��Ln,�0&K^�UY��&c}����qy/6͢~�8GRoC*r�OJ���Aʤ{t�J
��MK��c�d =@�r]Uw2�d��Y�qgV����Mmk5nIz>3�W"�!v�JL�|�8�e�
y�e}����0HM�!���ӷ�!���阘���rpb�ͼ�0gt{M#}HL�3_J�Z����PK��4��   �  PK  X(�V               xl/workbook.xml�S�n�0��+�m-^j�W�� ��ə�Fk��ql��wDYi��Ѓ$��7of��7�Zz�`��*f�0`�\B�c��!̘g���K� f��f�ny��i}�農1����ۼ��ۡn@Q�Ԧ�H����1�[`-�(�~ͅb����.K��F��v $Gbo+�X�Z�B�cאǛ�3��v�e���+���x~86)eǬ��5Z�ӗ�;�Hq)�Wp�p���? 4R&�!g�xp����o�/Z!���h)c��x�FDQ�����A=�����P�>ŌVtys>��(��NG�q���0f�p1yv�*f�����XtE
�N���5�����z�4��6`[��+��
R�YX�I�l�殈d�C�� �`(?�GE���.bMh���v��$rb9� lq�-��UKR��/=I����ļ�1��~M��4D�p4��d�a4��m���M2O��ꂞ��o��_r��B�=w"[��sr���ܽA����PKa��   w  PK  X(�V               xl/styles.xml�X�n�0��SX�_!)MۉPu�2�f��T�4��V��l�}�}Ƅ@�nS�i��+ۇ���0�gK��=Ն)9ţ�#*S�1YL��|��#c��W�NqM>K���֜^��Z
�Lqim�!LZRÁ���+�҂X�"0��$3�$x0�I �8��B̄5(Ui�F!�|� �Dy�����TRM8�8h�8Wr�a$�yD���H��%ԏ�5�
9��ljҒhw�i�Q3��Vr'�M�b�wA����"�R-g0@m^W�����2M�o�M����Gh��V��[�=�2F
%	���8'�P�A�ԃ\�I�inAX��t�UU�D�U:+���+w�>��_��{���>�e�t��f ����v�R; U��r"V/h|lJ�9g�t��R+KS�<z��dU�J��#H�,ڭ�T�R����ҥ��,�*��A�j`"�Y31\3�f�n�f��1U��UzG��ɒe@�U�|#�p��hۜZ��A��~R�m�v̌�f^0����7�7�7�7�7����p�ޔ�h��D;�f�KnN����|����9~�c�2�����ڙ�5�������/B�S��̂v��>*��8�=���)���]�^l��-�~<%\(!Ȫ~t4 �H@��i2 M�%-��2�;����3��d�;~�wIu
k�QN��`&ֿ���PKqG��  �  PK  X(�V               xl/worksheets/sheet1.xml�W�n�8}߯�^��{`��:��"]�t�-Q�Ԓ���;�H�*c��%��sf��2�}|)�w�B��~�}���������Շ��I�X�(gx�?.����x�9��L��\��.d���/1����)�} K�Qj4��p�0�z�o����$��'�3e�L���eNJYy{I��/��V�4B��3��h��W�Dp�3�Kx�B�f9��<��-�H<�ค�v�u61���q�]x�
�o<��d�Js%��-V?J3���w0T��b�ŋYJ@B]vO�l���Fa �|��oO������ʝ1�I	�`U���Ӓ�vVs�_�UA�9D��3U�Th��'
��u���@�=;Nk)�Ё*�qQُ��gZN
.y�)��R���%������y�M��0l��2��j9љ�,nV���ڤ���H&-o���qQ���h�Qsl�z�?S����R0��]�fe���I2�$�����F�8����NP��5��㞞x�rT&W n�~�GLa���i�`�
`1U����������ir��.2[���)fWig�^ L�%��Ju�5�j[7�X�s[����W��7ޞ��(��R�����)�rp�2ܞr�(�ׄ���wv�(Gײ�K�cG9�F	�('�rr�rt{���^��Ʊ���]`�Q��b&���[b{m�\���m0v������L �� mͧo{iha��q΂���!��"�6b�E�m�}�o#>w�6b�Eۈu1j#��q񥋘�_��i�����o�Z
�Ԧ4헗�{-ӥ?�_z��-У����ʙBt	=�]
��"Iw"���7$���� B�	�S� ]�ˎ+�E�37M��hEa��q8�3�q��Oucu(�=/�ؒWlߥF�`.w�"7�_\��.6°��Ğr�6�!�gA A�����%�NaGQ����?s��΃���/%�7,y��a�[��$���*%/����RCvV���KI���L����ڼI����]�x��^6G�>�Gk���d0���X�PK���  �  PK  X(�V               xl/_rels/workbook.xml.rels��Mk�0���F��Ic�8��A����Q���6�ֵ�~.[
e�Г���H��4���C�����v������V͢��h%����؀I/Z��8Y.b;]��JN��ɺ��Q/��IӜ�S�[�n+P�s���c�_�{�0�	�r�3�R�b�+/2�m��=�?"�#ʯ��R6w	�_f�zo	ۭP~��$��E����|PKO��z�   %  PK  X(�V               xl/sharedStrings.xml���N�0��<E�#K���vbH\
�Lj�H�Sbwo����-����q��1�怙C��^.*k�|�����������16�ٮڳ�Y��čD��s����4!��[�D�y�x�=�GwUU�.B k|�I4VSg
�3n~ښC[�,y���h��̒"f�A���I[���/$���&*Bn�^�\����<l�����٢@�����������7���C�&���OǏ:����c�%�_�NQ�	PK`G`�   �  PK  X(�V               docProps/core.xml}R]K�0}�W���IZ�l�'+�o1���4$�׿7m�:u�v�9'�~e2;�*؁��VSD#�P�.�*��%��7(����U��):�E��j�u�kKSk0N����)�S�vN�[��l�ʓ��H�|jJ�߰pL�Kp�`���0ԃ#:Y|��[S��P��,���ZFڋZ�L)�;j�(��A}�b���h��R�?�o���v�P�fUP695�r�Ax��+�3���}>GYL�8$4LhN���8%�}��o��6�҈#S֨�`���[f-��y�T����@�O�d���V̺�?�J@q{���3y��-NB2
�8�$Mb?��h�A[��N40�m�!m��ۏO�iH|섫����Ͽ̾ PKqy�Ar  �  PK  X(�V               docProps/app.xml��Mo�0���UĵM[��P�i�	i;th�*K\Ȕ/%)*�~4�<����c�%�I�� >HkZT%��p+�ٵ�{˗(���5Т#����[>JY"�Т}�n�q�{�,�mRg�^��J��v$�W�G&�,S#@��
D������������S,%��v62�I�J� ��)�YL�Ѝ���~^�żX�l#�8�_˦o���>��<�y9{�yM�=�D�^���SQ�8�i�\��PK����   �  PK  X(�V               docProps/custom.xml��=o�0ཿ��nl�H��ҡ��fG�I,�ن6����ٳ��==��j��&���5L���p�O5|;��͇�hQË�p�<T/�X�DA��C�%ƞ��|c��85�غ6�(�����SBV��>��?�r	��ܰ�v�x���5�/~�
���ϻ��I���PJ�Y�FdCmi�/w_��0�@*^���Y>���r�G�"��r��>�&%Y��&$Y���·��+�����PK�5��   ~  PK  X(�V               [Content_Types].xml�T�O� ��h������n?���y6�-�|���{��e��sY��{�/^ �md���:�U�&x�PLs���,�k4����րKB�r9��77�8V��k*T
m%�akKb([���x|E�V�O}�@��
��}r�	ǭn����R9��ԂQ�$VI'�B�z�k�ܥ_�p@6=��]��`Ty  dLϻ��!M!`��u[�!�S���5&!x�<]J��|h�|�z����CM�`�5[� ��X��U ^ָY��B�w~[�Z�!�C��H�L6��?����i������}>�}�>?�ڸ�3X8��w�NM �E��w������:~�6[9����-�O�QF�_z�	PK�;�d  �  PK   X(�V��4��   �                   _rels/.relsPK   X(�Va��   w               '  xl/workbook.xmlPK   X(�VqG��  �               d  xl/styles.xmlPK   X(�V���  �               =  xl/worksheets/sheet1.xmlPK   X(�VO��z�   %               �
  xl/_rels/workbook.xml.relsPK   X(�V`G`�   �               �  xl/sharedStrings.xmlPK   X(�Vqy�Ar  �               �  docProps/core.xmlPK   X(�V����   �               �  docProps/app.xmlPK   X(�V�5��   ~               �  docProps/custom.xmlPK   X(�V�;�d  �                 [Content_Types].xmlPK    
 
 �  �    Product Name *,Unit,Desription,Rate,Buy Rate,Product Code,Opening Stock,Opening Stock Rate,Minimum Stock
��ࡱ�      �      F>  ��	                               ����       ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������	   ����   �  ��    �   \ p  v i v e k                                                                                                    B  �a   �  =              �   �   =      �]'$8      X@    �    "       �   �    1  �    �    � C a l i b r i 1  �   ��    � C a l i b r i 1  �   ��    � C a l i b r i 1  �   ��    � C a l i b r i 1  �    �   � C a l i b r i 1  �   	 �    � C a l i b r i 1  �   
 �    � C a l i b r i 1  ,  6 �    � C a l i b r i 1  �    �    � C a l i b r i 1  �   > �    � C a l i b r i 1  �   6 �    � C a l i b r i 1    6 �    � C a l i b r i 1  �   ? �    � C a l i b r i 1  �   	 �    � C a l i b r i 1 * h  6 �      C a l i b r i   L i g h t 1  �    �    � C a l i b r i 1  �    �   � C a l i b r i 1  �   �    � C a l i b r i 1  �    �    � C a l i b r i 1  �   5 �    � C a l i b r i 1  �   5 �    � C a l i b r i 1  �    �    � C a l i b r i %   �   # , # # 0 ; �   - # , # # 0 /   �   # , # # 0 ; [ R e d ] �   - # , # # 0 1   �   # , # # 0 . 0 0 ; �   - # , # # 0 . 0 0 ;   �   # , # # 0 . 0 0 ; [ R e d ] �   - # , # # 0 . 0 0 a * . _   �   *   # , # # 0 _   ; _   �   *   - # , # # 0 _   ; _   �   *   " - " _   ; _   @ _   U ) ( _   *   # , # # 0 _   ; _   *   - # , # # 0 _   ; _   *   " - " _   ; _   @ _   q , 6 _   �   *   # , # # 0 . 0 0 _   ; _   �   *   - # , # # 0 . 0 0 _   ; _   �   *   " - " ? ? _   ; _   @ _   e + 0 _   *   # , # # 0 . 0 0 _   ; _   *   - # , # # 0 . 0 0 _   ; _   *   " - " ? ? _   ; _   @ _   /   \ $ # , # # 0 _ ) ; \ ( \ $ # , # # 0 \ ) 9   \ $ # , # # 0 _ ) ; [ R e d ] \ ( \ $ # , # # 0 \ ) ;   \ $ # , # # 0 . 0 0 _ ) ; \ ( \ $ # , # # 0 . 0 0 \ ) E    \ $ # , # # 0 . 0 0 _ ) ; [ R e d ] \ ( \ $ # , # # 0 . 0 0 \ ) W � ) _ ( *   # , # # 0 _ ) ; _ ( *   \ ( # , # # 0 \ ) ; _ ( *   " - " _ ) ; _ ( @ _ ) y � : _ ( " $ " *   # , # # 0 . 0 0 _ ) ; _ ( " $ " *   \ ( # , # # 0 . 0 0 \ ) ; _ ( " $ " *   " - " ? ? _ ) ; _ ( @ _ ) i � 2 _ ( " $ " *   # , # # 0 _ ) ; _ ( " $ " *   \ ( # , # # 0 \ ) ; _ ( " $ " *   " - " _ ) ; _ ( @ _ ) g � 1 _ ( *   # , # # 0 . 0 0 _ ) ; _ ( *   \ ( # , # # 0 . 0 0 \ ) ; _ ( *   " - " ? ? _ ) ; _ ( @ _ ) �      ��            � �     ��  �        � �     ��  �        � �     ��  �        � �     ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �      ��  �        � �                  � �     ��   �        �      ��   �        �     ��   �        �     ��   �       9 �      ��   �        �      ��   �        �     ��   �       / �     ��   �       6 �      ��   �       + �     ��   �       3 �     ��   � `     � �      ��   �        �     ��   �       / �     ��   �       7 �      ��   �       / �      ��   �        �     ��   �       5 �      ��   �        �      ��   �        �     ��   �       0 �     ��   �       + �     ��   �       , �     ��   �       - �      ��   �        �     ��   � a  0  � �     ��   ��� 	 �    � ��   �        � �      ��   �       	 �      ��   �  �  
   ��   ��� / �     ��   �        � �     ��   ��� 	 �  	   ��   �       * �     ��   �       � �     ��   �        � �     ��   � P     � �    � ��   �        � �      ��   �       * �     ��   �        � �    � ��   �        � �     ��   �        � �     ��  �  @ @   � �     ��   � P     � �    � ��   �        � �     ��   �ff�� 7 �     ��   �        �    	 ��   �        � �     ��  �  @ @   � | |            @ I���}- }                                   }A }                   23	                              }A }                   �L	                             }A }                   23                              }A }                     	                              }A }                   �L                             }A }                   ef                             }A }                   23                              }A }                                                   }A }                   �L                             }A }                                                   }A }                     ���             �} �          }A }                   �L                             }A }                   23                              }A }                                                   }A }                   �L                             }A }                   ef                             }A }                                                    }A }            !       �L                             }A }            "       ef                             }A }            #                                       }A }            $         ���             �e �          }A }            %       23                              }A }            &         ����             � �          }A }            '       ef                             }U }            (                                                      }� }            )    	     ???�        
     ???�             ???�             ???�             ����             ???�          } }            *      }A }            +       ef                             }} }            ,    	     ����        
     ����             ����             ����             ����          }� }            -    	     �        
     �             �             �             �̙�             ??v�          }- }            .                      }� }            /    	     �        
     �             �             �             ����             �} �          }A }            0         ����              a �          }A }            1       23                             }- }            2         �          }A }            3                                      } }            4      }A }            5       ef	                             }- }            6                      } }            7      }- }            8         �  �          }- }            9         � ��          }A }            :       �?                             } }            ;      }� }            <    	     ???�        
     ???�             ???�             ???�             ����                           }A }            =       23                              } }            >      }- }            ?           ��          }- }                                  �  � ��" �           � N o r m a l     �   6 0 %   -   A c c e n t 6 �0 �          4� 6 0 %   -   A c c e n t 6     �   4 0 %   -   A c c e n t 6 �0 �          3� 4 0 %   -   A c c e n t 6     �   6 0 %   -   A c c e n t 5 �0 �          0� 6 0 %   -   A c c e n t 5     �   A c c e n t 6 �$ �          1� A c c e n t 6     �   4 0 %   -   A c c e n t 5 �0 �          /� 4 0 %   -   A c c e n t 5     �   2 0 %   -   A c c e n t 5 �0 �          .� 2 0 %   -   A c c e n t 5     �   6 0 %   -   A c c e n t 4 �0 �          ,� 6 0 %   -   A c c e n t 4     �   A c c e n t 5 �$ �          -� A c c e n t 5     �   4 0 %   -   A c c e n t 4 �0 �          +� 4 0 %   -   A c c e n t 4     �   A c c e n t 4 �$ �          )� A c c e n t 4     �   L i n k e d   C e l l �, �          � L i n k e d   C e l l     �   4 0 %   -   A c c e n t 3 �0 �          '� 4 0 %   -   A c c e n t 3     �   6 0 %   -   A c c e n t 2 �0 �          $� 6 0 %   -   A c c e n t 2     �   A c c e n t 3 �$ �          %� A c c e n t 3     �   4 0 %   -   A c c e n t 2 �0 �          #� 4 0 %   -   A c c e n t 2     �   2 0 %   -   A c c e n t 2 �0 �          "� 2 0 %   -   A c c e n t 2     �    A c c e n t 2 �$ �          !� A c c e n t 2     � !  4 0 %   -   A c c e n t 1 �0 �          � 4 0 %   -   A c c e n t 1     � "  2 0 %   -   A c c e n t 1 �0 �          � 2 0 %   -   A c c e n t 1     � #  A c c e n t 1 �$ �          � A c c e n t 1     � $  N e u t r a l �$ �          � N e u t r a l     � %  6 0 %   -   A c c e n t 1 �0 �           � 6 0 %   -   A c c e n t 1     � &  B a d � �          � B a d     � '  2 0 %   -   A c c e n t 4 �0 �          *� 2 0 %   -   A c c e n t 4     � (  T o t a l �  �          � T o t a l     � )  O u t p u t �" �          � O u t p u t     � *��� +  2 0 %   -   A c c e n t 3 �0 �          &� 2 0 %   -   A c c e n t 3     � ,  N o t e � �          
� N o t e     � -  I n p u t �  �          � I n p u t     � . 	 H e a d i n g   4 �( �          �	 H e a d i n g   4     � /  C a l c u l a t i o n �, �          � C a l c u l a t i o n     � 0  G o o d � �          � G o o d     � 1 	 H e a d i n g   3 �( �          �	 H e a d i n g   3     �' 2  C E x p l a n a t o r y   T e x t �8 �          5� C E x p l a n a t o r y   T e x t     � 3 	 H e a d i n g   1 �( �          �	 H e a d i n g   1     � 4��� 5  2 0 %   -   A c c e n t 6 �0 �          2� 2 0 %   -   A c c e n t 6     � 6  T i t l e �  �          � T i t l e     � 7��� 8  W a r n i n g   T e x t �. �          � W a r n i n g   T e x t     � 9�	�� : 	 H e a d i n g   2 �( �          �	 H e a d i n g   2     � ;��� < 
 C h e c k   C e l l �* �          �
 C h e c k   C e l l     � =  6 0 %   -   A c c e n t 3 �0 �          (� 6 0 %   -   A c c e n t 3     � >��� ?��c c                   � �          �V � �              �X �          �     T a b l e S t y l e M e d i u m 9 P i v o t S t y l e L i g h t 1 6 `   �  &+    p r o d u c t s � �                    �  V V � �  �4 � � 	   	    P r o d u c t   N a m e   *  U n i t 
 D e s r i p t i o n  R a t e  B u y   R a t e  P r o d u c t   C o d e  O p e n i n g   S t o c k  O p e n i n g   S t o c k   R a t e  M i n i m u m   S t o c k � 
 	 9*     
   	   ����               %  V-       d          ����MbP?_   *    +    �   �          %   ,�  �      �    �    &  ffffff�?'  ffffff�?(        �?)        �?� " 	 d         333333�?333333�? �& �                                   U   }      #   }    I   }    m   }    �   }    L   }    �   }    f              	        	 ,      � 
          � 
        � 
        � 
        � 
        � 
        � 
        � 
        � 
        �  �     > �    @   <       � �          d            ���  #	g g           ����D  
                                                                 	  ��       �vݝ�@ ���  ��      ��      ��      ��      ��      ��      ��      ��      ��      ��      ��      ��      ��      ��      ��          �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   �� �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   ��  �   �� �   �� ��   ��         �   �� ��      ��   ��      �� ��   ��  �   �� �   ��      �� �   ��         �   ��      ��             ��      �� �   ��        ��   ��  �   ��             ���   	 �A  �.  
                 ��                      ����Oh�� +'��0   �         H      P      l      �      �      �      �      ��      �     	   P r i y a n k a           v i v e k   @   �XW����@    �t�*�      W P S   S p r e a d s h e e t s                                                                             ��                      ��՜.�� +,��D   ��՜.�� +,���   H         (      0      8      �@      �                     �          0      t      |      �      ��            K S O P r o d u c t B u i l d V e r           I C V      �        1 0 3 3 - 1 1 . 1 . 0 . 1 1 6 6 4                                                                                                                                                                                                                                                                                                                                                                  ����
            ����               ����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������R o o t   E n t r y                                               ��������         �      F                              W o r k b o o k                                                  ������������                                        �-      E T E x t D a t a                                                      ����                                        2       S u m m a r y I n f o r m a t i o n                           ( ����   ����                                    	          D o c u m e n t S u m m a r y I n f o r m a t i o n           8  ������������                                       H                                                                                                                                                                                                                                                                                                                                                                                                                              	   
                                       ����      ��������   ����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������PK
     �N�@            	   docProps/PK    �N�@�C��4  <     docProps/app.xml���J1����^�)�)��7Z���m`7	����,^<��'�F��pvt[<y������t������ֻLLN�"g|a�*�˫ѹH��+t�db(���(ͣ�&�0k�0��j�'l;vJkM|�+�����fS�#9��$l	\�(��>q��CoZ>�[���"��M�R��d"�� ����5�>�6�J�5`���#����A#���ht���c���U@����������5���w���=U�n���`�s��O��Tޔ����d�1�=/�ؘv�]g~� ]�~��PK    �N�@e��F  ^     docProps/core.xml}�QO�0��M�K߷����65<IB�Ʒ��@��-m����������{�t~�e��Te2D�"0���l2�V,����F�2����7����,�lU��
\H�1Qgh�}�0vb��$8Lו�܇����� 2�<��s��'�3R�YٲH���;L���v6t����o��9�-�I��G�z��pH�.F�O����[5V��� ��R0a����+�nv<Ńb{��;��^+��M�W{إ��`]�dҰS���>~z.(��i1"l2c�|�s���t��>O��8�Dz_�)#v7$^ y���G��PK    �N�@��^�  �     docProps/custom.xml���N�0��&�C�{i�.��&ƃ��r'��Ж�%�w�d]�/z���o��I6��צS2��#p�T��c
�;����Z6u�$O���d�W�^��k�qB���b�;qQ���%�Ң���G�ڶc�Tl\Z���l4V	4|��O���F���T�yp�Y�	�A+lפ���I��mT Jh�� �EdM����.�۾C0,�>�n���G�mFf�뛊k��l�/�ꌒ @�z����M���_�i\l����ߦ���GePK
     �N�@               xl/PK
     �N�@               xl/worksheets/PK    �N�@� QG�  +     xl/worksheets/sheet1.xml�T�n�0}_i�����r�$
���fۇ���>;�+�Y�	��wl�������9ϰ�?9:q��,cx>F�d2�>�~o�fiC˄��1~�߯>Z�RtƹA�P�g�TB4�xA�'+^�JUPS�'�R�&�T�d��!)�(q��Pѐi*�Hv,xi�sj���D�[�s�!�D�����Y�4H�L��+SR��xL�����s2��`o��IVA��X݁p�ۉ\�w��7W������+/.z	
"�����,6�P�Z�xVd�Ld�^=R<��C�x
0���u����s�O�T0�%���`7>��o���H�'��y�-���]��`?2�F��E�`��6���ϳB	O�17k����b<���OY?r����ZI&s��?*��j�
zn,7�Q�����E���.�D�hvOt�>��a��'��ަ�7�xz�O�(_���A��a�F�,�8/�����Rf�m�p�cK{�{QHs!�m��J��ӖEE��#X̡z�]|�U�J���_���`_�X0��}l4�6}l<ľ������y���},b�},b�bW�Y��I�M�*��?�ڋR��������|�O�����1����h'�;��+�!Ѿ�Ji�	�N�mݢm��3�zPK
     �N�@            	   xl/theme/PK    �N�@��
�n  =     xl/theme/theme1.xml�YOo�6��w tom'�u�ر��M�n�i��XS�@�I}��úa���0l+��t�&[����HJ��K��ՇD"|���#u�ڃ��C"$�q۫]�z��>�8h{w��K�
�c�xL�ޜH�����]ś*$A�>����J%����a��<!1�M����WT�݈U֪�f%�4�P�# {{2�>ACM��ʈ���J����&M�;��4B�e�	t�Y�>c~4$���
&�^������
�L1�bma]���u��t���(gZ��[Wvr���2���u{���`�M�,E���F���,���2�n�Q�����%�[�N��Je�D�>֗��f}{����7����v��t�d��%|�J�Yw�2O��ڡ�~J=�L8�-�o |���(��<�4�	�ժX��}.� �@����'d�}��.�F�b� o\��C�\Ҽ��MT��0��z�����S�����ώ�t�����--g�.����~����?�~����xY����'���y92h!ы/����ɋ�>����%�m�GE��FD�[��t3�q%'#q��Sg�v	�
�9fe�q�wW@�(^��wd�b�h	�a� �8g.JpC�*Xx8��r�bV�`|Xƻ�cǵ�YU3J��ݐ8b�3+��(�������Q��u���K>Q�ELKM2�#'��vi~����vl�wu8+�z��HH�J���:�)���~��L��\�E\O*�t@G�1��l�m��~C�*u��G.R(:-�ys^D��i7�QR��8,b?�SQ���*��q7C�;��+�}��ݧ�;4pDZ���	�K(�N��h�wŘQ��6�㶷[SYJ�(��p��»�g�>�X_�x���wu�{���\>k�]X���y�}�钣�M�26PsFnJ�'K�,�}����䇦$�Ǵ�;�@`�	�>�*�8���i"�LI%\������x�ӕ=6�������u=�r2f�	��3c��	������(��:�jZ�3s��L�s��*��U��ܚЅ �]��M8�k�p6���������x�"]$C<&�����>�'e�b. vJ|��y�X����ɾ��8�Ȯ��]�7�R�/�=��,.&'��Q�k5��q��&p���(�K��a�ݐ���S��d��L17	jpSa���S!���3�� �5'+�Z�zQ
�H)�7 �5)���k�dB|UtvaD�ξ�����p|�Fl&0�_�*�3�n'LE�/p���m���&]����8fI��r�S4�d7y��`�
�n���ί�I�R���3U�~��c�nrF:_�*�P����}���-p�Tp�l�r��ۜ�4LZéO� 	
��
!�P�L�B���]�$K	��*�++��6�5���v�ꦚ�e��NƟ��f�(�MN1ߜ��6����&3(��a��d��E,�U�z�<�{���E�Uϲ���V���)�9�Z[��4^kd�5���!J���?��Q�3�qBo�C~ ���M����m<�.�vp�����IYӦ���Z�Y_p���=al-�Y�}Nc�͙���ŋ4vja��vl����'S�&�A�8�|�*~x������1%-m��PK    �N�@%K�`�	  F     xl/styles.xml�\�n��}/� �Am�"ua��4�͞�i��h��"�%�fC�*E�v��r����/�r��St-i��(��k_��s%��ޯ�k�o�,���i߶�t�-��vj��:8��֦�E�di4��������8�I��.�
�H7S��(�oz���.Z���l��e�嫰�����Y�Q��0�U�����*�S��,ݮ�U����6-��'OY�Pn<�-q�Y��.��_�}���������֫߼z��l}���Ǔ֟�]N���o?[v�RO�e�ԥ�>���V	V�Pn��� 8^5��&��o�tD7��捅^��Xi���a��c{e��ϖYZ��uv��l�O�k� ���<K��*@+��I�U$���I|�����0߀�B���9N���U�f9;� ��-�J���L� ��_0�ݘ�� N�8����q´T\�6�[��!�l�Kÿi\����.ލ/�t���)̒5�L|!kZ3r�n^��*c'�vv��t�"W����vL����`˾M�y�J^a��ϟ���-�}�}�M��^I���kKL����9�ߞ��8d7?��-	��F�=�O��oЯ��Dv/]��4p��lE���X�������]懞�n�շy����	l�$^0-ng�w�N_�p�t����M&�sޛ�)/��Et�K<�{Ĉ�
7�t�cvk6�
fW�*-ϴ_����lk�  ځ�J�bDf��%��]*a̚�����wC�w`�H�����~�Ս��T�!���N�� Žh_�����0<N��?�0�?lK�J�����Uʈ��X���H�I��'eƈ���ʦ�$-�
��j31�i%��\]�GꭒvȈ�Io����Lko�|���\7q�R�s�gI�,��y|{�>�l��6+�l��E�fi��WIT�L�>X���_��e��)�����(����t���%���m��:�T(�hoW�0�le�[��9x7v���ŀ��j�տD���@G��}�X��v��Ht��t��H<��E��I"I�2S�5��S汝;E4���j�|��V��4f��Pq��"��%�n����d.2w�E\"���cx��돽�`$�����me�G�1���+�^���c��K�ʍ� l��-��C̑����_ ��[�.��mQ)+\�����M�|� ��g/x�V�ķ�*�Ӣ���gE4/���Z�
D��M�@���a0H3��bZ3P&�Q�+���5��� �9lt`zU��R�ӽWF�PF�08�<1��@J�k>%�M��H �\0�IL�IV����*�_Zj����D�����[���&�#M	S%p+7(d@�h!��JdA��Dz��?{������p]�Pm}v��a�a���E<g{o�pEb�����1ar�0G���j����gG��]�
�?��my�K�4T�JF�K�Y�2�'�d��< GW0T����v�����V������Ue�pqƬ����&�l��Md�6\G-"�3=���Ԓ(#��6zl�ļ�������:u�S�|�r���7W.X����(�x��[/i`��U �ĳ�ٯ�&{�F�A�~{�.�������OK>��R�����dMI]Q��{�mj`�=�-�a�l����������ݜH���p8��յ���dT�����j5�T�""�"��ւ�x��!�P�uM���ئ�������b�d���i
R렡����� ߱��I,6�#"|�TS��@b!é�x�F�I)�;IL��q�%ZX3ܪ2��q�r��G�iSQ.	�����ח�*S\m�/k4�*�6�ԙ5��WʕZR%�xҲ��g-�����'��J�tk$������j$��R�����k��!�y]��5��f8�x��F���hx.*_T�`�[s=����ZU��i����X��C<�Ԍ���z[H�Tb�/�f�<Ǜ���m�Q�$�bh����I�J�F�Rb�D��rh$�ǫ	��K��/��Rb�z�sx�|�MB��ҏ��j9Lk�~�e��"J���`T�I�!_�&�50���u�a���ut/c�:A���D�0%�Q˨� t��jZ��U:D��V�R �f�*5�ڸ]��]Unh�aE]��ǆMuд��0OC�=��ȕ/,h4fA�$�?�4}�G��T�/��k�TY�=�/�xy*
F�6س�h�Ei<=�#�ZZ%7=�'p�F�c��.��Qe�6r���2��@��E���+��t��RDz-�mR\��v}�{��D*���
~��]�g�jE ��o���6�����.���U08��/&'�O�����Л]\^~П��ًS��;ޣ����y�m�eq:�n�l�����ק�=�z�
n�f�઼4�T�S}nj�/B}���s#z�b���PK    �N�@�aeg�   �     xl/sharedStrings.xmlm��JC1�����ln]�J�B+��A��d��L���ط7"]���q�p�^}�I|B�����b���qg�����J
b��M��=�\��MĢy�����ȏ�-���[.�q;�N�\�8M�b.Ur��"y-E��Qas���h5ۧ�C�,\q�[�~�/�b�^�*q�֧'ώ���u/�釿��y[���x�����?�h�}Ęj��-j�PK    �N�@ƺ�)  �     xl/workbook.xml���N�0��H���w�4mTM*!@�z�r6����?�)o�&Q)GN��ڟg����h��!*g+��r`h���*x{����kg��o�����ֽ�O玌 6VЦ�WYE��Ǚ�h�Ӹ`x"Y���-b2:+��63\Y����k%�щΠM$����V���Q��D�{���>i`���$UBY�����R(���?tJS�~��տC��aڽ�>^�d����J���b���T{Auhኲp�Ę�ƕ�ѤNv"E�|HiKN�dk�h�r>2��bذ��˲�^9M�PK
     �N�@               _rels/PK    �N�@{8v��   �     _rels/.rels���J�0����Mw�t/"�Md}��L��&�Y��AQ,Ժ�����|d�� ^1����uQ�@o�v�Q�|xX݂H���yTp����b����<��.$�]|R�2�;)�i��TP@�;5E�9?c#�6�nPn��FƟPM<��*�{�q8���oo����=��C�3+�T��ul���|�ؿ�E9�ru>��wJ���f-E\��S���\�q,��\N�%���@�������[��H:�%���$2���y>5_Hr�-�wPK
     �N�@            	   xl/_rels/PK    �N�@���   �     xl/_rels/workbook.xml.rels���j�0���}qҍ1F�^Ơ׭{ c+hbK[���ȡY�t�\����'��ݹ��&jc0Pd9(.�6���/��m��H�+���Y�KԴ)q	d�a^�&�`o)��T1��E�Z�m�z���:���r���@��'P�q����cU�ߢ��1�M�M�?9�x$�6���L�A_�y\��N^s����͚�,;�9}�z:�[Ś���� ��q)�lK:��q�/PK    �N�@��Zsg       [Content_Types].xml���N1��&�ä[3Spa�a`�e�$����4������)`A���I:������F+k�%D��լ_�XNz�ݬf�����S�x5[����j0Y���֬I)<p��+���L}�"�0�xr.f�o{�;.�K�R�Z6<�T,L*�W�{�$�AV<n������"�S�t�Rn	U�5��7d��v�w���ZA11�
K6��r}@N���U���ө�@KTж�@��$!&?��dK�r�.���b����3�Y�L��plD��"�H�L�A(l �5՞���������@=ANt���o�s Y��������ΰô)��
����-B�}��������,����c6�PK     �N�@���   �              �  xl/_rels/workbook.xml.relsPK     �N�@��Zsg                �  [Content_Types].xmlPK 
     �N�@            	            ~  xl/_rels/PK     �N�@{8v��   �              V  _rels/.relsPK     �N�@�aeg�   �              �  xl/sharedStrings.xmlPK     �N�@ƺ�)  �              �  xl/workbook.xmlPK 
     �N�@            	            E  xl/theme/PK     �N�@%K�`�	  F                xl/styles.xmlPK     �N�@��
�n  =              l  xl/theme/theme1.xmlPK     �N�@� QG�  +              �  xl/worksheets/sheet1.xmlPK     �N�@e��F  ^              �  docProps/core.xmlPK 
     �N�@                        2  _rels/PK     �N�@�C��4  <              '   docProps/app.xmlPK 
     �N�@                        =  xl/PK 
     �N�@                        ^  xl/worksheets/PK     �N�@��^�  �              �  docProps/custom.xmlPK 
     �N�@            	                docProps/PK        b    ��ࡱ�                ;  ��	               	                ����        ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������               ����
   ����������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������R o o t   E n t r y                                               ������������                                    ����                                                                            ������������                                    ����                                                                            ������������                                    ����                                                                            ������������                                    ����                                	   
                                                                  ����!   ��������$   %   &   ����(   )   ������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������������	   ��       �  ��    �   \ p   Calc                                                                                                         B  �a   �  =  �   �   �   =       @  8      �@    �    "       �   �    1  �   ��     A r i a l 1  �   ��      A r i a l 1  �   ��      A r i a l 1  �   ��      A r i a l  �   General�    � ��            � �     ��   �        � �     ��   �        � �     ��   �        � �     ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �      ��   �        � �    �              � �   + ��   �        � �   ) ��   �        � �   , ��   �        � �   * ��   �        � �   	 ��   �        � �    �  (          � �  � �� ��� ��� ��� ��� ��`   �       clients�    � �  T� � Z   �R     �                     3 �   �   �	  �@  @ �         �  � � 
   
     Supplier Name*  Contact Person  Address  Tax ID  Business Details  Contact Number  Email  Shipping Address  Opening Balance  Notes� 
 
 Y     c c                 
   	   ��         d          ����MbP?_   �          %   � �  �*    +    �         �    �    &        �?'        �?(        �?)        �?� "  d      ,,��`�?��`�? U   }      �     }    �     }    F     }         }    !     }    �     }    �     }    �     }    �     }  	  !	                
        
 �      � 
          � 
        � 
        � 
        � 
        � 
        � 
        � 
        � 
        � 
   	  	   � P  �H    �          �0    �(    	�                    
�         > �    @                          g g           ����    
                                                ��
  ����     �      F   Microsoft Excel 97-Tabelle    Biff8                                                                                                                          ��                       ����Oh�� +'��0   �         @      H   	   \   
   h      t      �      �      ��     	   Priyanka          3   @   ��~�    @           @   ���PJ��@   zn��Ǥ�                                                        ��                       ��՜.�� +,��D   ��՜.�� +,��\                  ��  d                 @      H            KSOProductBuildVer     ��        1033-10.2.0.7635                                                                                                                                                                                                                                                                                                                                                                                                    R o o t   E n t r y                                               ��������        �      F                       �
      W o r k b o o k                                                         ����                                        �       C o m p O b j                                                      ��������                                        I        O l e                                                         
  ������������                                    "           S u m m a r y I n f o r m a t i o n                           (  ����   ����                                    #   �        D o c u m e n t S u m m a r y I n f o r m a t i o n           8  ������������                                    '   �                                                                           ������������                                    ����                                                                            ������������                                    ����        PK  �(�V               _rels/.rels���N�0��{�*�5�@���LH�!4�$n���ă��D��Îq~�b��Ln,�0&K^�UY��&c}����qy/6͢~�8GRoC*r�OJ���Aʤ{t�J
��MK��c�d =@�r]Uw2�d��Y�qgV����Mmk5nIz>3�W"�!v�JL�|�8�e�
y�e}����0HM�!���ӷ�!���阘���rpb�ͼ�0gt{M#}HL�3_J�Z����PK��4��   �  PK  �(�V               xl/workbook.xml�S�n�0��+�m-^j�W�� ��ə�Fk��ql��wDYi��Ѓ$��7of��7�Zz�`��*f�0`�\B�c��!̘g���K� f��f�ny��i}�農1����ۼ��ۡn@Q�Ԧ�H����1�[`-�(�~ͅb����.K��F��v $Gbo+�X�Z�B�cאǛ�3��v�e���+���x~86)eǬ��5Z�ӗ�;�Hq)�Wp�p���? 4R&�!g�xp����o�/Z!���h)c��x�FDQ�����A=�����P�>ŌVtys>��(��NG�q���0f�p1yv�*f�����XtE
�N���5�����z�4��6`[��+��
R�YX�I�l�殈d�C�� �`(?�GE���.bMh���v��$rb9� lq�-��UKR��/=I����ļ�1��~M��4D�p4��d�a4��m���M2O��ꂞ��o��_r��B�=w"[��sr���ܽA����PKa��   w  PK  �(�V               xl/styles.xml�X�n�0��SX�_!)MۉPu�2�f��T�4��V��l�}�}Ƅ@�nS�i��+ۇ���0�gK��=Ն)9ţ�#*S�1YL��|��#c��W�NqM>K���֜^��Z
�Lqim�!LZRÁ���+�҂X�"0��$3�$x0�I �8��B̄5(Ui�F!�|� �Dy�����TRM8�8h�8Wr�a$�yD���H��%ԏ�5�
9��ljҒhw�i�Q3��Vr'�M�b�wA����"�R-g0@m^W�����2M�o�M����Gh��V��[�=�2F
%	���8'�P�A�ԃ\�I�inAX��t�UU�D�U:+���+w�>��_��{���>�e�t��f ����v�R; U��r"V/h|lJ�9g�t��R+KS�<z��dU�J��#H�,ڭ�T�R����ҥ��,�*��A�j`"�Y31\3�f�n�f��1U��UzG��ɒe@�U�|#�p��hۜZ��A��~R�m�v̌�f^0����7�7�7�7�7����p�ޔ�h��D;�f�KnN����|����9~�c�2�����ڙ�5�������/B�S��̂v��>*��8�=���)���]�^l��-�~<%\(!Ȫ~t4 �H@��i2 M�%-��2�;����3��d�;~�wIu
k�QN��`&ֿ���PKqG��  �  PK  �(�V               xl/worksheets/sheet1.xml�W�n�8}߯�^�|lMR7-�u�N[�o�HYD(RK�v���!)�Re,�����p��^&��/�D**����O�|��?��M}Oi�1b���"���k~�Y�hp��s�˛0TiN
�Q3���0��P�� l,L�h�r�y��o�!����^���p�H��UNKU{{�o�%:B�u<���L�/��4�B�L�(���Y��Y'�"}K`����8.!�-eT�l��rn��^F�&��P�1E`�D;�!�{i�����z:\��j�r�)Hh��I�-��͗� ,�%G���T.�+�oϐ��Y�'I�#��Z�+�?�x'�;�=�b�A�]>�L7.5�n#�&��n��H6�b+X� ��6! ���� /|n�d�R���0f���`?�����^�(6)b RE���v��V#�#:�����5�a+ĳ1��)����["sp�(|��@\4�q{�z�_[���\/��]�few��RT�I���,���h'�F&(�1�C�I0��W�Fm��N�Gr ؀�6`p��� �sUٿF^�Je
X9M�J���̕(�~��r�_���'S"#�sO�<��K*��_���)��R�� �]�rXQ/Sƃ�S�*��%aA��W��KY��xx}�IE9�D	�PN+��%����f���0�$��rw�{F�F˹GO�s�ݵ�p����tԋ���玲����앥��
��e4&�
q�G�]�]�t�}Ġ���G��U1�">��.⡏�t���i񥏘5��X_�����\�K�}y9<��1�ۃݹ5��-J���k�#��K�/�4�O������1�Dd�4�v���ks�
��~�'1�QO�8J�$��pf3!�婰��%<�%��Jܻ�jl�U���6/��kiٱ8��5d�YRH����RKD�Q�2�>��gNu��yб�ڥچ;Q�fX���w�/)�,&�Zɳ%%%�Ԑ�See�0�2P����L՘�<���r.0v�l��7|:���|��`��'��PKQk�  �  PK  �(�V               xl/_rels/workbook.xml.rels��Mk�0���F��Ic�8��A����Q���6�ֵ�~.[
e�Г���H��4���C�����v������V͢��h%����؀I/Z��8Y.b;]��JN��ɺ��Q/��IӜ�S�[�n+P�s���c�_�{�0�	�r�3�R�b�+/2�m��=�?"�#ʯ��R6w	�_f�zo	ۭP~��$��E����|PKO��z�   %  PK  �(�V               xl/sharedStrings.xml���J1��>E�Q�Y=����*x�B�Lw�n ��L�Էw*(�$����}�L&vq
^1�����Y�RG�V�����4�����@֋��2%(q��R���G������-� E��`8e��G���i�[��V}��H��N��'\�t�]g�B朠�lqa�G��vJ�;�j/�)�5g��*R����5Rr?��*�N�i]%]N�H|�8_��]�f
{�Uȃ���RnG��L\���g��Y�걊�Ă�܍���PK!>��  �  PK  �(�V               docProps/core.xml}R]O�0}�W��C��`��%&Θ8��;V�i���N]|����s���U��@Q��AH^�B)zY��k��d��ZB�0h�]$\Q^kxҵm�IC�J��ZE16|3�SHG�j]1�R]`����#B&��rfn}5:��e�GK��eg�s%T ��a�o�]��:�DY	�(8+�Q}0b���`wR����ݨ���8�,96B�f!�����k|{���,"��'��K2��SJ�{��o���ٓ�֪F��`�ʺ[f�py�d�u��@����d�ړ��؅;�J@~�8�3��Yu��-�}2�h_Q29m0�*k؉�fQWtLۮ�����G[aK��!��/�/PK~f�	r  �  PK  �(�V               docProps/app.xml��Mo�0���UĵM[��P�i�	i;th�*K\Ȕ/%)*�~4�<����c�%�I�� >HkZT%��p+�ٵ�{˗(���5Т#����[>JY"�Т}�n�q�{�,�mRg�^��J��v$�W�G&�,S#@��
D������������S,%��v62�I�J� ��)�YL�Ѝ���~^�żX�l#�8�_˦o���>��<�y9{�yM�=�D�^���SQ�8�i�\��PK����   �  PK  �(�V               docProps/custom.xml��=o�0ཿ��nl�H��ҡ��fG�I,�ن6����ٳ��==��j��&���5L���p�O5|;��͇�hQË�p�<T/�X�DA��C�%ƞ��|c��85�غ6�(�����SBV��>��?�r	��ܰ�v�x���5�/~�
���ϻ��I���PJ�Y�FdCmi�/w_��0�@*^���Y>���r�G�"��r��>�&%Y��&$Y���·��+�����PK�5��   ~  PK  �(�V               [Content_Types].xml�T�O� ��h������n?���y6�-�|���{��e��sY��{�/^ �md���:�U�&x�PLs���,�k4����րKB�r9��77�8V��k*T
m%�akKb([���x|E�V�O}�@��
��}r�	ǭn����R9��ԂQ�$VI'�B�z�k�ܥ_�p@6=��]��`Ty  dLϻ��!M!`��u[�!�S���5&!x�<]J��|h�|�z����CM�`�5[� ��X��U ^ָY��B�w~[�Z�!�C��H�L6��?����i������}>�}�>?�ڸ�3X8��w�NM �E��w������:~�6[9����-�O�QF�_z�	PK�;�d  �  PK   �(�V��4��   �                   _rels/.relsPK   �(�Va��   w               '  xl/workbook.xmlPK   �(�VqG��  �               d  xl/styles.xmlPK   �(�VQk�  �               =  xl/worksheets/sheet1.xmlPK   �(�VO��z�   %               �
  xl/_rels/workbook.xml.relsPK   �(�V!>��  �               �  xl/sharedStrings.xmlPK   �(�V~f�	r  �               �  docProps/core.xmlPK   �(�V����   �               �  docProps/app.xmlPK   �(�V�5��   ~               �  docProps/custom.xmlPK   �(�V�;�d  �                 [Content_Types].xmlPK    
 
 �  �    Supplier Name*,Contact Person,Address,Tax ID,Business Details,Contact Number,Email,Shipping Address,Opening Balance,Notes@media screen and (max-width: 1200px) {
    .d-m-none {
        display: none;
    }

    .d-m-block {
        display: block;
    }
}

@media screen and (max-width: 1200px) {
    .d-l-none{
        display: none;
    }
    .d-t-none {
        display: none;
    }

    .d-t-block {
        display: block;
    }
    .menu__logo img{
            max-width: 146%;
    }
        .op-cl-pdct {
            display: flex;
            margin-top: 41px;
            padding: 0 10px;
        }
}

@media screen and (max-width: 768px) {
    .d-l-none {
        display: none;
    }

    .d-l-block {
        display: block;
    }
}

a {
    text-decoration: none !important;
}



html {
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

body {
    font-size: 16px;
    line-height: 32px;
    color: #0e1133;
    background-color: #fafcff;
}

hr {
    margin: 0;
    background-color: #b0c1d8;
    color: #e5f0ff;
    border: none;
    height: 1px;
}

a {
    text-decoration: none;
    transition: all 0.3s;
}

img {
    max-width: 100%;
}

ul {
    list-style: none;
}

nav li {
    display: inline-block;
}

button:active,
button:focus {
    outline: none;
}

h2 {
    font-size: 48px;
    line-height: 72px;
}

h2,
h3 {
    font-weight: 200;
    color: #0e1133;
    margin: 0;
}

h3 {
    font-size: 36px;
    line-height: 54px;
}

h4 {
    font-size: 24px;
}

h4,
h5 {
    line-height: 36px;
    font-weight: 400;
    margin: 0;
}

h5 {
    font-size: 18px;
}

h6 {
    font-size: 16px;
    line-height: 32px;
    font-weight: 600;
    margin: 0;
}

@media screen and (max-width: 480px) {
    h2 {
        font-size: 36px;
        line-height: 54px;
    }

    h3,
    h4 {
        font-size: 24px;
        line-height: 36px;
    }
}

.header-home {
    padding-top: 82px;
    overflow: hidden;
    background: #dcf0ff;
}

.header-home .header-home__title {
    margin-top: 0;
    margin-bottom: 0;
    transition: all 0.3s;
    color: #0e1133;
    font-weight: 700;
    font-size: 32px;
    padding-top: 0;
}

.header-home .header-home__title--big {
    width: 100%;
}

.header-home .header-home__title--accent {
    color: #1788e4;
}

.header-home .header-home__title--features {
    width: 750px;
    margin-bottom: 450px;
}

.header-home .header-home__title--desktop {
    margin-top: 40px;
}

.header-home .header-home__description {
    width: 490px;
    font-size: 16px;
    line-height: 25px;
    margin-bottom: 53px;
    transition: all 0.3s;
    color: #0e1133;
}

.header-home .header-home__description--big {
    max-width: 750px;
    width: 100%;
}

.header-home .header-home__description--about {
    margin-bottom: 400px;
    max-width: calc(100% - 590px);
}

.header-home .header-home__description--faq {
    margin-bottom: 270px;
}

.header-home .header-home__description--calculator {
    margin-bottom: 350px;
}

.header-home .header-home__img {
    max-width: 490px;
    width: 100%;
}

.header-home .header-home__btns {
    transition: all 0.5s;
}

.header-home .header-home__btns-mobile {
    margin-bottom: 104px;
    margin-top: 50px;
}

.header-home .header-home__btns-messenger {
    margin-bottom: 310px;
}

.header-home .header-home__btns-webapp {
    margin-bottom: 160px;
}

.header-home .header-home__btns-desktop {
    margin-bottom: 60px;
}

.header-home .header-home__btns-pricing {
    padding-bottom: 200px;
}

.header-home.header-home--center-content {
    text-align: center;
}

.header-home.header-home--center-content .header-home__description,
.header-home.header-home--center-content .header-home__title {
    margin-left: auto;
    margin-right: auto;
}

.header-home.header-home--center-content .header-home__btn:first-child,
.header-home.header-home--center-content .header-home__btn:last-child {
    margin-right: 15px;
    margin-left: 15px;
}

.header-home.header-home--color {
    margin-top: 0;
    padding-top: 190px;
    background-color: #eff6ff;
}

.header-home.header-home--bottom-space,
.header-home.header-home--desktop {
    margin-bottom: 128px;
}

.header-home .header-home__webapp-img {
    position: absolute;
    bottom: 0;
    right: -85px;
    height: 100%;
}

.header-home .header-home__webapp-img-wrap {
    position: relative;
}

.header-home .header-home__about-img {
    position: absolute;
    bottom: 0;
    right: -65px;
    height: 100%;
}

.header-home .header-home__about-img-wrap {
    position: relative;
}

.main-slider {
    width: 75%;
    margin: auto;
}

.padding-top-5 {
    padding-top: 2%;
}

.slider-icon {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    background-repeat: no-repeat;
    background-position: 50%;
    background-size: 100% 100%;
    color: #000;
    font-size: 28px !important;
}

.carousel-indicators {
    position: absolute;
    right: 0;
    bottom: -36px;
    left: 0;
    z-index: 2;
    display: flex;
    justify-content: center;
    padding: 0;
    margin-right: 15%;
    margin-bottom: 1rem;
    margin-left: 15%;
    list-style: none;
}

@media screen and (max-width: 1400px) {
    .header-home .header-home__webapp-img {
        width: calc(100% - 370px);
        height: auto;
    }
}

@media screen and (max-width: 1200px) {
    .header-home .header-home__title {
        margin-top: 0;
    }

    .header-home .header-home__title--features {
        margin-bottom: 250px;
        width: 700px;
    }

    .header-home .header-home__btns-messenger,
    .header-home .header-home__btns-mobile {
        margin-bottom: 165px;
    }

    .header-home .header-home__btns-webapp {
        margin-bottom: 110px;
    }

    .header-home .header-home__btns-desktop {
        margin-bottom: 40px;
    }

    .header-home .header-home__description--about {
        margin-bottom: 300px;
        max-width: calc(100% - 380px);
    }

    .header-home .header-home__description--webapp {
        width: 420px;
    }

    .header-home.header-home--desktop {
        margin-bottom: 108px;
    }

    .header-home .header-home__webapp-img {
        right: -60px;
    }
}

@media screen and (max-width: 1200px) {

    .header-home .header-home__about-img,
    .header-home .header-home__webapp-img {
        display: none;
    }

    .header-home .header-home__description--webapp {
        width: 490px;
    }

    .header-home .header-home__description--about {
        max-width: 490px;
    }
}

@media screen and (max-width: 768px) {
    .header-home .header-home__title {
        width: 100%;
    }

    .header-home .header-home__description {
        width: 100%;
        margin-bottom: 40px;
    }

    .header-home .header-home__description--about {
        max-width: 100%;
    }

    .header-home .header-home__description--calculator {
        margin-bottom: 120px;
    }

    .header-home .header-home__btns {
        margin-bottom: 70px;
    }

    .header-home .header-home__btns-pricing {
        padding-bottom: 140px;
        margin-bottom: -10px;
    }

    .header-home .header-home__btns-pricing button {
        margin-bottom: 10px;
    }

    .header-home.header-home--pricing {
        margin-bottom: 60px;
    }

    .header-home .header-home__btn {
        margin-bottom: 30px;
    }
}

.link {
    transition: all 0.3s;
    cursor: pointer;
}

.link.link--gray {
    color: #343434;
    font-weight: 600;
    font-size: 14px;
}

.custom-color {
    color: #1788e4;
}

.link.link--gray:hover {
    color: #1788e4;
}

.link.link--gray.link--gray-active {
    color: #f0354e;
    position: relative;
}

.link.link--gray.link--gray-active-underline {
    position: relative;
}

.link.link--gray.link--gray-active-underline:after {
    content: "";
    width: 100%;
    position: absolute;
    height: 3px;
    background-color: #1788e4;
    bottom: -17px;
    left: 0;
}

.link.link--dark-gray {
    color: #0e1133;
}

.link.link--dark-gray:hover {
    color: #1788e4;
}

.link.link--dark-gray.link--gray-active {
    color: #f0354e;
    position: relative;
}

.link.link--accent {
    color: #1788e4;
}

.link.link--accent:hover {
    color: #f23f57;
    text-decoration: underline;
}

.link.link--accent:active {
    color: #f0354e;
    text-decoration: underline;
}

.link.link--accent-bold {
    color: #1788e4;
    font-weight: 800;
}

.link.link--accent-bold:hover {
    color: #1788e4;
}

.link.link--accent-bold:active {
    color: #f0354e;
}

.logo {
    text-align: center;
}

.logo.logo--bottom-space {
    margin-bottom: 128px;
}

.logo .logo__img-wrap {
    display: -ms-flexbox;
    display: flex;
}

.logo .logo__img {
    margin: auto;
}

.logo .logo__img-mini {
    max-height: 45px;
    max-width: 130px;
    margin: 15px;
}

.logo img {
    max-width: 100%;
    margin: 0 auto;
    vertical-align: middle;
}

.logo .logo__row {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

.logo .logo__row .logo__logos,
.logo .logo__row p {
    margin: auto;
}

.logo .logo__logos {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-pack: center;
    justify-content: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}

@media screen and (max-width: 1200px) {
    .logo.logo--bottom-space {
        margin-bottom: 105px;
    }
}

@media screen and (max-width: 768px) {
    .logo.logo--bottom-space {
        margin-bottom: 70px;
    }

    .logo .logo__img-wrap {
        padding-bottom: 45px;
    }

    .logo .col-2 {
        width: 50%;
    }
}

.download {
    text-align: center;
}

.download .download__title {
    font-weight: 800;
}

.download .download__btns {
    margin-top: 70px;
    margin-bottom: 60px;
    text-align: center;
}

@media screen and (max-width: 768px) {
    .download .download__btn-first {
        margin-bottom: 60px;
    }
}

.menu {
    height: 80px;
    padding-top: 3px;
    position: fixed;
    z-index: 100;
    width: 100vw;
    transition: height 0.5s, padding-top 0.5s;
    top: 0;
    background: #fff;
        border-bottom: 2px solid #b1b1b11f ;
}

.menu .row {
    -ms-flex-pack: justify;
    justify-content: space-between;
}

.menu .menu__logo-title {
    font-weight: 800;
    color: #234c87;
    display: inline-block;
    font-size: 24px;
    padding-left: 15px;
    margin: 0;
    vertical-align: top;
    margin-top: 10px;
    opacity: 1;
}

.menu .menu__right-nav {
    float: right;
    padding-top: 14px;
}

.menu .menu__right-nav ul {
    margin: 0;
    padding-left: 0;
}

.menu .menu__right-nav li {
    display: inline-block;
}

.menu .menu__right-nav li:first-child {
    padding-right: 8px;
}

.menu .menu__right-nav li:last-child {
    padding-left: 8px;
}

.menu .menu__center-nav {
    text-align: center;
}

.menu .menu__center-nav ul {
    padding: 16px 0 0 0;
        margin: 0 0;
}

.menu .menu__center-nav li {
    padding-right: 17px;
}

.menu .menu__wrapper {
    position: relative;
}

// .menu .menu__item {
//     min-width: 250px;
// }

.menu .menu__item:last-child {
    padding-right: 15px;
}

.menu .menu__mobile-button {
    color: #0e1133;
    transition: all 0.3s;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 48px;
    top: 15px;
    font-size: 20px;
    line-height: 20px;
    padding: 0;
    height: 20px;
    width: 20px;
}

.menu .menu__mobile-button:hover {
    color: #1788e4;
}

.menu .menu__mobile-button:focus {
    outline: none;
}

.menu .menu__dropdown-btn {
    position: relative;
    display: inline-block;
    padding-top: 16px;
    font-weight: 600;
}

.menu .menu__dropdown {
    position: relative;
}

.menu .menu__dropdown-content {
    transition: all 0.6s;
    opacity: 0;
    transform: translateY(10%);
    position: absolute;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 15px 40px rgba(125, 147, 178, 0.3);
    z-index: 1;
    pointer-events: none;
    padding: 25px;
    top: 78px;
    text-align: left;
    width: -webkit-max-content;
    width: -moz-max-content;
    width: max-content;
    left: -25px;
}

.menu .menu__dropdown-content:before {
    content: "";
    position: absolute;
    top: -20px;
    border: 10px solid transparent;
    border-bottom: 10px solid #fff;
    right: calc(50% - 10px);
}

.menu .menu__dropdown-content.menu__dropdown-content--home {
    min-width: 150px;
}

.menu .menu__dropdown-content a {
    padding-bottom: 12px;
    text-decoration: none;
    display: block;
}

.menu .menu__dropdown-content a:last-child {
    padding-bottom: 0;
}

.menu .menu__dropdown:hover .menu__dropdown-btn {
    color: #1788e4;
}

.menu .menu__dropdown:hover .menu__dropdown-content {
    opacity: 1;
    transform: translateY(0);
    pointer-events: auto;
}

.menu.menu--active {
    height: 80px;
    padding-top: 3px;
    background-color: #fff;
    box-shadow: 0 0.9375rem 0.9375rem 0 rgba(0, 0, 0, 0.06);
}

.menu.menu--active .menu__dropdown-btn {
    padding-bottom: 25px;
}

.menu.menu--active .menu__dropdown-content {
    top: 58px;
}

.menu.menu--active .menu__logo-title {
    opacity: 0;
}

@media screen and (max-width: 1200px) {
    .menu .menu__right-nav {
        padding-right: 32px;
    }
}

@media screen and (max-width: 767px) {
    .menu .menu__item {
        width: 50%;
    }
}

@media screen and (max-width: 520px) {
    .menu .menu__mobile-button {
        right: 16px;
    }

    .menu .menu__logo {
        padding-left: 15px;
    }
}

@media screen and (max-width: 480px) {
    .menu.menu--active {
        height: 64px;
        padding-top: 16px;
    }

    .menu.menu--active .menu__logo-img {
        width: 32px;
        height: 32px;
    }

    .menu.menu--active .menu__mobile-button {
        top: 6px;
    }
}

.svg-element {
    fill: #1788e4;
    fill-rule: evenodd;
}

.svg-bg {
    fill: #fafcff;
    opacity: 0;
}

.svg-light-gray {
    fill: #e5f0ff;
}

.svg-dark-gray {
    fill: #0e1133;
}

.svg-white {
    fill: #fff;
}

.svg-gray {
    fill: #bed0e9;
}

.svg-light {
    fill: #ceddf2;
}

.svg-text {
    font-size: 16px;
    text-anchor: middle;

    font-weight: 800;
}

.w-richtext p {
    margin: 0;
}

.footer-menu {
    margin-top: 60px;
    margin-bottom: 60px;
}

.footer-menu .footer-menu__nav {
    display: inline-block;
    vertical-align: top;
    margin-top: 15px;
    font-size: 16px;
    line-height: 20px;
}

.footer-menu .footer-menu__nav ul {
    margin: 0;
    padding-left: 60px;
}

.footer-menu .footer-menu__nav li {
    display: inline-block;
    padding-right: 60px;
}

.footer-menu .footer-menu__nav li:last-child {
    padding-right: 0;
}

.footer-menu .footer-menu__social {
    float: right;
    vertical-align: top;
    margin-top: 10px;
    font-size: 18px;
}

.footer-menu .footer-menu__social a {
    padding-right: 40px;
}

.footer-menu .footer-menu__social a:last-child {
    padding-right: 0;
}

@media screen and (max-width: 768px) {
    .footer-menu {
        text-align: center;
    }

    .footer-menu .footer-menu__nav {
        margin: 60px 0;
        display: block;
    }

    .footer-menu .footer-menu__nav ul {
        padding-left: 0;
    }

    .footer-menu .footer-menu__social {
        float: none;
    }
}

@media screen and (max-width: 468px) {
    .footer-menu .footer-menu__nav ul {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-pack: distribute;
        justify-content: space-around;
    }

    .footer-menu .footer-menu__nav li {
        padding: 0;
    }
}

.footer {
    text-align: center;
    color: #798eab;
    padding: 30px 0;
}

.footer p {
    margin: 0;
}

.about-app {
    padding-top: 223px;
    margin-top: -95px;
}

.topbars {
    /* border-bottom: 1px solid #ceddf2; */
    text-align: center;
    transition: all 0.3s;
}

.topbars .topbars__item {
    padding: 4px;
}

.di-none {
    display: none;
}

.topbars .topbars__link {
    font-size: 15px;
    line-height: 14px;
    width: 100%;
    display: block;
    height: 100%;
    padding: 8px 6px;
    cursor: pointer;
    /* border: #0e1133 2px solid; */
    /* margin-right: 1px; */
    /* border-radius: 50px; */
}

/* .topbars .topbars__link:after {
    content: "";
    width: 100%;
    position: absolute;
    height: 0;
    background: #1788e4;
    opacity: 0;
    bottom: 0;
    transition: all 0.3s;
    left: 0;
} */
svg {
    width: 28px;
    height: 28px;
}

.shadow-light {
    box-shadow: 0 0.5rem 1.5rem rgba(22, 28, 45, 0.05) !important;
}

.d-lg-block {
    display: block !important;
}

.topbars .topbars__link.active {
    border-bottom: #1788e4 2px solid;
    border-radius: 0;
    color: #1788e4;
}

.topbars .topbars__link.active svg {
    fill: #fff;
}

.topbars .topbars__link:hover {
    border-bottom: #1788e4 2px solid;
    border-radius: 0;
    color: #1788e4;
}

.topbars .topbars__link:hover svg {
    fill: #1788e4;
    /* background: #1788e4; */
}

.topbars .topbars__link.active:after {
    opacity: 1;
    height: 3px;
}

.topbars.topbars--fixed {
    position: fixed;
    top: 80px;
    padding: 6px 0;
    width: 100%;
    background-color: #eaf2ff;
    z-index: 99;
    transform: translateY(0);
    transition: all 0.3s;
}

.topbars-wrapper {
    height: 83px;
}

@media screen and (max-width: 768px) {
    .topbars-wrapper {
        display: none;
    }
}

.mobile-menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    overflow: hidden;
    text-align: center;
    z-index: 9999;
    transition: all 0.6s ease;
    padding: 0;
    background-color: #fff;
    transform: translateY(-100%);
}

.mobile-menu.mobile-menu--active {
    transform: translate(0);
}

.mobile-menu .mobile-menu__wrapper {
    margin-top: 135px;
    transition: all 0.3s;
    overflow-y: auto;
    max-height: calc(100vh - 135px);
}

.mobile-menu .mobile-menu__wrapper::-webkit-scrollbar {
    width: 0;
}

.mobile-menu .mobile-menu__ul {
    margin: 0;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: center;
    justify-content: center;
    padding: 0;
    transition: all 0.3s;
}

.mobile-menu .mobile-menu__ul--collapsed {
    overflow: hidden;
    padding-bottom: 0;
}

.mobile-menu .mobile-menu__ul--collapsed li {
    height: 0;
    padding-bottom: 0;
    transition: height 0.3s ease-out 0s, padding-bottom 0.3s ease-out 0s, opacity 0.6s 0.3s;
    opacity: 0;
}

.mobile-menu .mobile-menu__li-collapse--close+.mobile-menu__ul--collapsed {
    transition: padding-bottom 0.6s ease-out 0.3s;
}

.mobile-menu .mobile-menu__li-collapse--close+.mobile-menu__ul--collapsed li {
    transition: height 0.6s ease-out 0.3s, padding-bottom 0.6s ease-out 0.3s, opacity 0.3s 0s;
}

.mobile-menu .mobile-menu__li-collapse--active+.mobile-menu__ul--collapsed {
    padding-bottom: 15px;
    transition: padding-bottom 0.3s ease-out 0s;
}

.mobile-menu .mobile-menu__li-collapse--active+.mobile-menu__ul--collapsed li {
    opacity: 1;
    height: 45px;
    padding-bottom: 25px;
}

.mobile-menu .mobile-menu__li {
    padding-bottom: 25px;
    font-size: 16px;
    line-height: 20px;
}

.mobile-menu .mobile-menu__close {
    color: #0e1133;
    transition: all 0.3s;
    background-color: transparent;
    border: none;
    position: absolute;
    right: 46px;
    top: 75px;
    font-size: 20px;
    line-height: 20px;
    padding: 0;
    width: 20px;
    height: 20px;
}

.mobile-menu .mobile-menu__close:hover {
    color: #1788e4;
}

.mobile-menu .mobile-menu__close:focus {
    outline: none;
}

.mobile-menu .mobile-menu__logo {
    position: absolute;
    transition: all 0.3s;
    top: 60px;
    left: 46px;
}

.mobile-menu.mobile-menu--scroll .mobile-menu__close {
    top: 40px;
}

.mobile-menu.mobile-menu--scroll .mobile-menu__logo {
    top: 25px;
}

.mobile-menu.mobile-menu--scroll .mobile-menu__wrapper {
    margin-top: 100px;
    max-height: calc(100vh - 100px);
}

@media screen and (max-width: 520px) {
    .mobile-menu .mobile-menu__logo {
        left: 16px;
    }

    .mobile-menu .mobile-menu__close {
        right: 16px;
    }
}

@media screen and (max-width: 480px) {
    .mobile-menu .menu__logo-img {
        width: 32px;
        height: 32px;
    }

    .mobile-menu .mobile-menu__logo {
        top: 69px;
    }

    .mobile-menu.mobile-menu--scroll .mobile-menu__close {
        top: 22px;
    }

    .mobile-menu.mobile-menu--scroll .mobile-menu__logo {
        top: 16px;
    }
}

.login-btn {
    border-radius: 2.5rem;
    color: #0c0c0d;
    font-size: 14px;
    font-weight: 600;
    min-width: 7.625rem;
    padding: 8px 22px;
    text-transform: none;
    text-align: center;
    border: 2px solid #0c0c0d;
}

.login-btn:hover {
    cursor: pointer;
    /* box-shadow: 0 100px 80px rgb(0 0 0 / 7%), 0 42px 33px rgb(0 0 0 / 5%), 0 22px 17px rgb(0 0 0 / 4%), 0 12px 10px rgb(0 0 0 / 4%), 0 6px 5px rgb(0 0 0 / 3%), 0 -1px 10px rgb(0 0 0 / 5%); */
}

.register-btn {
    background-color: #1788e4;
    border-radius: 2.5rem;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    min-width: 7.625rem;
    padding: 8px 22px;
    text-transform: none;
    text-align: center;
}

.register-btn:hover {
    cursor: pointer;
    box-shadow: 0 100px 80px rgb(0 0 0 / 7%), 0 42px 33px rgb(0 0 0 / 5%), 0 22px 17px rgb(0 0 0 / 4%), 0 12px 10px rgb(0 0 0 / 4%), 0 6px 5px rgb(0 0 0 / 3%),
        0 -1px 10px rgb(0 0 0 / 5%);
    color: #fff;
}

.item-2 {
    background: transparent;
    color: #0e1133;
    line-height: 40px;
    padding: 12px 23px;
    border-radius: 6px;
    border: 2px solid #0e1133;
}

.item-2:hover {
    background: #0e1133;
    color: #fff;
}

.link-black {
    color: #0e1133;
}

/* svg {
  width: 34px;
  height: 34px;
} */
/* svg:hover {
  fill: red;
} */

.heading-style-1 {
    font-size: 28px;
    line-height: 1.14;
    font-weight: 400;
    /* padding: 14px 0; */
    font-weight: 600;
    margin: 0;
    text-align: center;
}

.hero__signup-form-block {
    width: 100%;
    max-width: 30rem;
    margin-bottom: 0;
    padding-top: 0;
    padding-bottom: 0;
    background: #fff;
    padding: 20px;
    border-radius: 10px;
}

.create-form-horizontal {
    display: flex;
    max-width: 30rem;
    flex-direction: column;
}

.form__text-field-label {
    font-weight: 600;
    color: #00000082;
}

.form__text-field {
    min-height: 3rem;
    margin-bottom: 1rem;
    padding: 0.5rem 0.75rem;
    border: 0.0625rem solid #6f7d80;
    border-radius: 0.5rem;
    background-color: #fff;
}

.w-input,
.w-select {
    display: block;
    width: 100%;
    height: 38px;
    padding: 8px 12px;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #333;
    vertical-align: middle;
    background-color: #fff;
    border: 1px solid #ccc;
}


.or-divider {
    display: -ms-grid;
    display: grid;
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    flex-direction: column;
    align-items: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 12px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr -webkit-max-content 1fr;
    -ms-grid-columns: 1fr max-content 1fr;
    grid-template-columns: 1fr -webkit-max-content 1fr;
    grid-template-columns: 1fr max-content 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    color: #ffffff;
    font-size: 1.125rem;
    line-height: 1.5555555555555556;
}

.or-divider__line {
    height: 1px;
    flex-direction: column;
    grid-auto-columns: 1fr;
    grid-column-gap: 12px;
    grid-row-gap: 16px;
    -ms-grid-columns: 1fr -webkit-max-content 1fr;
    -ms-grid-columns: 1fr max-content 1fr;
    grid-template-columns: 1fr -webkit-max-content 1fr;
    grid-template-columns: 1fr max-content 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    background-color: #308df8;
}

.button.cc-google-sso {
    display: -ms-grid;
    display: grid;
    min-height: 3.125rem;
    padding-top: 0.125rem;
    padding-bottom: 1px;
    padding-left: 0.125rem;
    justify-content: flex-start;
    align-items: stretch;
    grid-auto-columns: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    -ms-grid-columns: -webkit-max-content 1fr;
    -ms-grid-columns: max-content 1fr;
    grid-template-columns: -webkit-max-content 1fr;
    grid-template-columns: max-content 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
    border-color: #1788e4;
    background-color: #ffffff;
    border-radius: 0.5rem;
    color: #000;
}

.google-g-logo {
    width: auto;
    height: auto;
    margin-right: 1.5rem;
    padding: 0.75rem;
    border-radius: 50%;
    background-color: #fff;
}



.cc-google-sso_text {
    line-height: 3;
}

/* Wrapper */
.wrapper {
    width: 572px;
    /* height: 300px; */
    position: relative;
    background-color: var(--wrapper-background-c);
    box-shadow: 0 0 80px var(--wrapper-shadow-c);
}

/* Images Area */
.images-area {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    overflow: hidden;
}

.images-area img {
    width: 100%;
    transition: 0.3s cubic-bezier(0.79, 0.03, 0, 0.99);
}

/* Buttons Area  */
.buttons-area {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    display: flex;
    justify-content: space-between;
    overflow: hidden;
}

.buttons-area>div {
    color: var(--white-c);
    background-color: var(--buttons-background-c);
    cursor: pointer;
    transition: 0.3s ease-in-out;
}

/* Buttons | Previous And Next */
.buttons-area>div:first-child {
    border-radius: 0 5px 5px 0;
    margin-left: -100px;
}

.buttons-area>div:last-child {
    border-radius: 5px 0 0 5px;
    margin-right: -100px;
}

/* Show The Buttons */
.wrapper:hover .buttons-area>div:first-child {
    margin-left: 0;
}

.wrapper:hover .buttons-area>div:last-child {
    margin-right: 0;
}

.buttons-area div:hover:not(div.disabled) {
    background-color: var(--buttons-active-background-c);
}

.buttons-area div:not(div.disabled):active {
    opacity: 0.7;
}

/* Disabled Button */
.buttons-area>div.disabled {
    cursor: no-drop;
    opacity: 0.3;
}

.buttons-area div i {
    font-size: 70px;
}

/* Pagination Area */
.pagination-area {
    position: absolute;
    top: 90%;
    left: 50%;
    transform: translate(-50%, -50%);
    pointer-events: none;
}

/* Pagination Spans */
.pagination-area span {
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #000;
    margin-right: 5px;
    transform: scale(0.5);
    transition: 0.3s ease-in-out;
    opacity: 0.4;
}

/* Current Active Span */
.pagination-area span.active {
    transform: scale(1);
    opacity: 1;
}

/* End Wrapper */

.nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
    height: 28px;
    margin-left: -8px;
    margin-right: 10px;
    min-width: 28px;
    width: 28px;
}

.nsm7Bb-HzV7m-LgbsSe-Bz112c-haAclf {
    -webkit-border-top-left-radius: 3px;
    border-top-left-radius: 3px;
    -webkit-border-bottom-left-radius: 3px;
    border-bottom-left-radius: 3px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    justify-content: center;
    -webkit-align-items: center;
    align-items: center;
    background-color: #fff;
    height: 46px;
    margin-left: 0px;
    margin-right: 12px;
    min-width: 46px;
    width: 36px;
}

.nsm7Bb-HzV7m-LgbsSe-Bz112c {
    height: 24px;
    min-width: 25px;
    width: 3px;
}

/* Style the tab */
.tab {
    float: left;
    width: 20%;
    height: 300px;
    margin-top: -12px;
}

/* Style the buttons inside the tab */
.tab button {
    display: block;
    color: black;
    padding: 18px 16px;
    width: 100%;
    border: none;
    outline: none;
    text-align: left;
    cursor: pointer;
    transition: 0.5s ease-in;
    font-size: 17px;
    margin: 15px;
}

/* Change background color of buttons on hover */
.tab button:hover {
    background-color: rgb(91, 161, 227);
}

/* Create an active/current "tab button" class */
.tab button.active {
    background-color: rgb(88, 88, 88);
    color: white;
}

a:hover {
    text-decoration: none !important;
    /* color: #000 !important; */
}

/* Style the tab content */
.tabcontent {
    /* float: left; */
    padding: 0px 12px;
    /* border: 1px solid rgb(88, 88, 88); */
    background: #fff;
    /* width: 70%; */
    height: 300px;
    margin-left: 40px;
    animation: blinker 0.6s linear;
}

/* animation effects */
@keyframes blinker {
    10% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}

.tab .arrow {
    color: rgb(88, 88, 88);
    float: right;
    font-size: 26px;
    position: relative;
    left: 25px;
}

@media (max-width: 800px) {
    .tab {
        width: 30% !important;
    }

    .tabcontent {
        width: 61%;
    }
}

@media (max-width: 600px) {

    .tab,
    .tabcontent {
        width: 100% !important;
        margin: 0 auto;
    }

    .tab button {
        width: 100%;
        margin: 10px 0px;
        padding: 18px 10px;
    }

    .tab .arrow {
        display: none !important;
    }
}

.tools__tool-list__item-group {
    display: -ms-grid;
    display: grid;
    justify-content: center;
    grid-auto-columns: 1fr;
    grid-column-gap: 4rem;
    grid-row-gap: 2rem;
    -ms-grid-columns: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto;
    grid-template-rows: auto;
}

.tool-image {
    width: 72%;
    height: auto;
    margin-right: auto;
    margin-left: auto;
}

.grid-content-block {
    display: flex;
    padding-top: 4%;
    flex-direction: column;
}

.heading-style-2 {
    padding-top: 10%;
}

.carousel-container {
    border-radius: 30px;
    overflow: hidden;
    max-width: 800px;
    position: relative;
    /* box-shadow: 0 0 30px -20px #223344; */
    margin: auto;
    z-index: 0;
    /* background: #fff; */
}

/* Hide the images by default */
.mySlides {
    display: none;
}

.mySlides img {
    display: block;
    width: 68%;
    margin: auto;
}

/* image gradient overlay [optional] */
/*  .mySlides::after {
  content: "";
  position: absolute;
  inset: 0;
    background-image: linear-gradient(-45deg, rgba(110, 0, 255, .1), rgba(70, 0, 255, .2));
} */

/* Next & previous buttons */
.prev,
.next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    width: auto;
    padding: 20px;
    color: white;
    font-weight: bold;
    font-size: 24px;
    border-radius: 0 8px 8px 0;
    background: rgba(173, 216, 230, 0.1);
    user-select: none;
}

.next {
    right: 0;
    border-radius: 8px 0 0 8px;
}

.prev:hover,
.next:hover {
    background-color: rgba(173, 216, 230, 0.3);
}

/* Caption text */
.text {
    color: #f2f2f2;
    background-color: rgba(10, 10, 20, 0.1);
    backdrop-filter: blur(6px);
    border-radius: 10px;
    font-size: 20px;
    padding: 8px 12px;
    position: absolute;
    bottom: 60px;
    left: 50%;
    transform: translate(-50%);
    text-align: center;
}

/* Number text (1/3 etc) */
.number {
    color: #f2f2f2;
    font-size: 16px;
    background-color: rgba(173, 216, 230, 0.15);
    backdrop-filter: blur(6px);
    border-radius: 10px;
    padding: 8px 12px;
    position: absolute;
    top: 10px;
    left: 10px;
}

.dots-container {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%);
}

/* The dots/bullets/indicators */
.dots {
    cursor: pointer;
    height: 14px;
    width: 14px;
    margin: 0 4px;
    background-color: rgba(173, 216, 230, 0.2);
    backdrop-filter: blur(2px);
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.3s ease;
}

.dots:hover {
    background-color: rgba(173, 216, 230, 0.8);
}

/* transition animation */
.animate {
    -webkit-animation-name: animate;
    -webkit-animation-duration: 1s;
    animation-name: animate;
    animation-duration: 2s;
}

@keyframes animate {
    from {
        transform: scale(1.1) rotateY(10deg);
    }

    to {
        transform: scale(1) rotateY(0deg);
    }
}

.box-login {
    width: 100%;
    padding-right: var(--bs-gutter-x, 0.75rem);
    padding-left: var(--bs-gutter-x, 0.75rem);
    margin-right: auto;
    margin-left: auto;
    position: relative;
}

main {
    display: block;
    clear: both;
}

.section-box {
    display: inline-block;
    width: 100%;
}

.bg-2-opacity-80 {
    background-color: rgb(220 240 255);
}

.login-left {
    width: 55%;
}

.d-lg-flex {
    display: flex !important;
}

.box-login img {
    vertical-align: top;
}

.img-responsive {
    max-width: 100%;
}

.box-login .box-login-form {
    max-width: 510px;
    width: 100%;
    margin: auto;
    padding: 60px 0;
}

.box-signup {
    max-width: 405px;
    display: table;
    margin-left: 20%;
    table-layout: fixed;
    margin: auto;
    width: 100%;
}

.text-heading-3 {
    font-size: 35px;
    line-height: 38px;
}

.btn.btn-login-google {
    border-radius: 8px;
    background-color: #fff;
    padding: 13px 25px;
    display: block;
}

.box-signup .box-form-signup {
    background-color: #1788e4;
    border-radius: 6px;
    padding: 36px;
    color: #fff;
    box-shadow: 0 47px 65px rgba(21, 28, 38, 0.1);
}

.box-form-signup a {
    color: #fff;
    font-size: 14px;
    font-weight: 600;
        width: 100%;
    letter-spacing: 0.4px;
}

/* .mobile-card-slide {
 width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
}
@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
} */
.integrated-solutions-wrapper:last-child {
    margin-bottom: 1rem !important;
}

.columns.is-desktop {
    display: flex;
}

.columns:last-child {
    margin-bottom: -0.75rem;
}

.has-text-right-desktop {
    text-align: right !important;
}

.has-text-centered {
    text-align: center !important;
}

.column {
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    padding: 0.75rem;
}

.integrated-wrapper .animate-img-wrap {
    position: relative;
    margin: 0 auto;
    width: -webkit-fit-content;
    width: -moz-fit-content;
    width: fit-content;
}

.integrated-wrapper .animate-img-wrap .mobile-card-slide:nth-of-type(2) {
    top: 65px;
    left: 60px;
}

.integrated-wrapper .animate-img-wrap .mobile-card-slide {
    position: absolute;
    -webkit-animation-name: sliding;
    animation-name: sliding;
    -webkit-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    -webkit-animation-timing-function: linear;
    animation-timing-function: linear;
    -webkit-animation-duration: 4s;
    animation-duration: 4s;
}

.integrated-wrapper .animate-img-wrap .mobile-card-slide:nth-of-type(3) {
    top: -4px;
    left: 177px;
}

.integrated-wrapper .animate-img-wrap .mobile-card-slide:nth-of-type(4) {
    left: 65px;
    top: 165px;
}

.relative-nav {
    position: relative;
}

.sticky-nav {
    position: -webkit-fixed;
    position: fixed;
    top: 80px;
    /* padding: 5px;  */
    z-index: 999;
    background-color: rgb(220 240 255);
}

.active_1 {
    border-bottom: #1788e4 2px solid;
    border-radius: 0;
    color: #1788e4;
}

.sticky ul>.active>a {
    color: #1f96f2;
    font-weight: 600;
}

@media screen and (max-width: 1200px) {
    .d-m-none {
        display: none;
    }

    .d-m-block {
        display: block;
    }

    .client {
        width: 100%;
        height: 100%;
        background-color: #000;
        display: none;
    }
}

@media screen and (max-width: 1200px) {
    .d-t-none {
        display: none;
    }

    .d-t-block {
        display: block;
    }

    .client {
        width: 100%;
        height: 100%;
        background-color: #000;
        display: none;
    }
}

@media screen and (max-width: 768px) {
    .d-l-none {
        display: none;
    }

    .d-l-block {
        display: block;
    }

    .client {
        width: 100%;
        height: 100%;
        background-color: #000;
        display: block;
    }
}

@media screen and (max-width: 480px) {
    .about-app {
        padding-top: 348px;
        margin-top: -95px;
    }

    #features-section {
        display: none;
    }

    .client {
        width: 100%;
        height: 100%;
        background-color: #000;
        display: block;
    }
}

@media screen and (min-width: 1200px) {
    .client {
        width: 100%;
        height: 100%;
        background-color: #000;
        display: block;
    }
}


.input-group-text {
    color: #737373;
    border: none !important;
    border-radius: 5px 0 0 5px !important;
    background: #fff;
    height: 40px !important;
    font-weight: 500;
    font-size: 14px !important;
    text-align: left;
    cursor: pointer;
}

.input-group-text-show {
    color: #737373;
    border: none !important;
    border-radius: 0 5px 5px 0 !important;
    background: #fff;
    height: 40px !important;
    font-weight: 500;
    font-size: 14px !important;
    text-align: left;
    cursor: pointer;
    display: flex;
    width: 50px;
    margin: 0;
    padding: 11px 0 0 13px;
    line-height: 0;
    text-align: center;
}

.input-group {
    position: relative !important;
    display: flex !important;
    flex-wrap: inherit !important;
    align-items: stretch;
    width: 100% !important;
}

.form-control {
    color: #000;
    border: none !important;
    background: #fff;
    height: 40px !important;
    font-weight: 500;
    font-size: 14px !important;
    text-align: left;
}

.input-group-text svg {
    fill: currentColor;
}

.public-btn {
    border: none !important;
    background-color: #ffa900;
    color: #000000;
    width: 100%;
    padding: 8px 0;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    border-radius: 5px;
    text-decoration: none;
}

.main-pricing {
    width: 60%;
}



.box-form-signup h5 {
    font-weight: 600;
    letter-spacing: 0.2px;
}

.support-btn {
    background-color: #1788e4;
    border-radius: 2.5rem;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    min-width: 7.625rem;
    padding: 8px 22px;
    text-transform: none;
    text-align: center;
}

.page-header {
    position: relative;
    background-size: 200% auto;
    position: relative;
    background-size: cover;
    overflow: hidden;
    background-position: center;
    background-repeat: no-repeat;
    padding: 128px 0 22px 0;
}

.page-header:before {
    position: absolute;
    content: '';
    background: linear-gradient(to right, rgb(23 136 228) 0%, rgb(1 71 127) 51%, rgb(1 81 147) 100%);
    background-size: 200% auto;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
}

.title-box h1 {
    color: #fff;
    font-size: 42px;
    margin-bottom: 15px;
}

.title-box {
    position: relative;
}

.breadcrumb span:last-child {
    color: rgba(255, 255, 255, 0.6);
}

.privacy-bg {
    background: #f5f5f5;
    padding-bottom: 6%;
}

.page-padding {
    position: relative;
    margin-bottom: 0;
    padding-right: 2.5rem;
    padding-bottom: 0;
    padding-left: 2.5rem;
}

.heading {
    font-size: 22px;
    /* margin: 10px 0 6px; */
    color: #253858;
    line-height: 3;
}

.title-section {
    padding: 7% 0;
}

.footer-home {
    text-align: center !important;
    padding: 8px 0;
    background-color: #ffffff;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -0.0625rem 2.9375rem 0 rgba(0, 0, 0, 0.06);
    z-index: 999;
    border-top: 3px solid #e6e6e6b8;
}

.footer-home p {
    margin: 0;
}

.app-versions {
    font-size: 13px;
    background: #fff;
    text-align: end;
}

.app-versions span {
    color: #1788e4;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 25px 0 0 25px;
}

.pd--horizontal {
    padding-left: 1rem;
    padding-right: 1rem;
}

.j-Divider_vr_container__vr {
    width: 1px;
    height: 100%;
    background-color: #eee;
}

.t-footer {
    flex-wrap: wrap;
}

.t-footer a {
    color: rgb(0 0 0);
    font-size: 13px;
    font-weight: 600;
}

.t-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
}

.j-text-body-xxs,
.j-typography small,
small {
    font-weight: 500;
    text-transform: none;
    font-size: .75rem;
    letter-spacing: -.06px;
    line-height: 1.3333333333;
}

.nav-tabs-outer {
    overflow-x: scroll;
    margin: 20px;
}

.nav-tabs {
    border-bottom: 1px solid #dee2e6;
    background: #fff;
    border-radius: 8px 8px 0 0;
}

.privacy_intro {
    padding: 2rem;
    border: 2px solid #b9dbf6;
    border-radius: 0 0 10px 10px;
    background-color: #e7f4ff;
    color: #000;
}

.pricing-amt {
    font-size: 28px;
    color: #1f96f2 !important;
    font-weight: 600;
    padding: 2px 0;
    margin: 0;
}

.subhead {
    color: #84878d !important;
    font-size: 15px;
    margin: 0;
}

.note-pay {
    margin-top: 10px;
    margin-bottom: 0;
    color: #336083 !important;
}

.refunds-section {
    padding-top: 10%;
}

.heading-policy {
    line-height: normal;
    font-weight: 600;
    color: #253858;
    font-size: 20px;
    padding-bottom: 6px;
}


.j-text-body-xxs,
.j-typography small,
small {
    font-weight: 500;
    text-transform: none;
    font-size: .75rem;
    letter-spacing: -.06px;
    line-height: 1.3333333333;
}

#features-section {
    padding-bottom: 20%;
}

.footer-home {
    text-align: center !important;
    padding: 8px 0;
    background-color: #ffffff;
    bottom: 0;
    width: 100%;
    box-shadow: 0 -0.0625rem 2.9375rem 0 rgba(0, 0, 0, 0.06);
    z-index: 999;
    border-top: 3px solid #e6e6e6b8;
}

.footer-home p {
    margin: 0;
}

.app-versions {
    font-size: 13px;
    background: #fff;
}

.app-versions span {
    color: #1788e4;
    font-weight: 600;
    padding: 6px 12px;
    border-radius: 25px 0 0 25px;
}

.click-h-btn {
    border: none !important;
    background-color: #ffa900;
    color: #000000 !important;
    width: 100%;
    padding: 5px 9px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    cursor: pointer;
    border-radius: 5px;
}

.form-control {
    box-shadow: none !important;
}

::placeholder {
    color: rgb(162, 162, 162);
    opacity: 1;
    font-weight: 500;
    /* Firefox */
}

:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: rgb(162, 162, 162);
    font-weight: 500;
}

::-ms-input-placeholder {
    /* Microsoft Edge */
    color: rgb(162, 162, 162);
    font-weight: 500;
}

.input-group-text {

    width: 36px;
    margin: 0;
    padding: 0 0 0 13px;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    transition: background-color 5000s ease-in-out 0s;
}

.metismenu-home { 
    z-index: 999; 
    max-height: 100%;
    border: none !important;
    padding: 0 0 16%;
}

#sidebar-hone-menu>ul>li>a {
    color: #000000;
    display: block;
    padding: 10px 0 10px 0px;
    font-size: 14px;
    position: relative;
    font-weight: 500; 
    text-decoration: none;
    border-bottom: 1px solid #f4f2f2;
}

#sidebar-hone-menu>ul>li>a>span {
    margin-left: 7px;
    padding: 0;
    margin-right: 22px;
}

#sidebar-hone-menu>ul>li>a i {
    line-height: 16px;
    width: 20px;
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
}

.cross-btn {
    border: none;
    background: #ff6b6b;
    color: #fff;
    border-radius: 27px;
    padding: 3px 4px;
}

.lock-down-btn {
    position: relative; 
    width: 100%;
    background: #ededed;
    padding: 10px 15px;
    font-weight: 600;
    color: #ff1616 !important; 
    display: inline-block;
    text-align: center;
    cursor: pointer;
}

.register-users {
    padding: 10px 16px;
    background: #f5f5f5;
}

.register-users a {
    display: block;
}

.goto-dash {
    background-color: #1788e4;
    border-radius: 6px;
    padding: 4px 6px;
    color: #fff;
    box-shadow: 0 47px 65px rgba(21, 28, 38, 0.1);
    text-align: center;
    margin-top: 6px;
}

@media only screen and (max-width: 600px) {
   
    .box-signup {
        max-width: 405px;
        display: table;
        margin-left: 0%;
        table-layout: fixed;
        margin: auto;
        width: 100%;
        margin-top: 18px;
    }

    .box-signup .box-form-signup {
        background-color: #1788e4;
        border-radius: 6px;
        padding: 18px;
        color: #fff;
        box-shadow: 0 47px 65px rgba(21, 28, 38, 0.1);
    }

    .main-slider {
        width: 75%;
        margin: auto;
        display: none;
    }

    .main-head-slider {
        margin-bottom: 10%;
    }

    .tools__tool-list__item-group {
        display: block;
        justify-content: center;
        grid-auto-columns: 1fr;
        grid-column-gap: 4rem;
        grid-row-gap: 2rem;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto;
    }

    .menu {
        padding-top: 15px;
        position: fixed;
        z-index: 100;
        width: 100vw;
        transition: height 0.5s, padding-top 0.5s;
        top: 0;
        height: 64px;
        background: #fff;
    }

    .sticky-nav {
        position: -webkit-fixed;
        position: fixed;
        top: 64px;
        z-index: 99;
        background-color: #dcf0ff;
    }

    .it_comp_copyright_wrapper {
        font-size: 13px;
    }

    .app-versions {
        font-size: 13px;
        background: #fff;
        text-align: center;
    }

    .t-footer {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        padding-bottom: 8px;
    }

    .main-pricing {
        width: 100%;
    }

    .page-padding {
        position: relative;
        margin-bottom: 0;
        padding-right: 1rem;
        padding-bottom: 0;
        padding-left: 1rem;
    }

    .title-box h1 {
        color: #fff;
        font-size: 28px;
        margin-bottom: 15px;
    }

    .page-header {
        position: relative;
        background-size: 200% auto;
        position: relative;
        background-size: cover;
        overflow: hidden;
        background-position: center;
        background-repeat: no-repeat;
        padding: 90px 0 22px 0;
    }

    .header-home .header-home__title {
        margin-top: 0;
        margin-bottom: 0;
        transition: all 0.3s;
        color: #0e1133;
        font-weight: 700;
        font-size: 24px;
        padding-top: 0;
        line-height: 32px;
    }
}

@media only screen and (max-device-width: 1024px) { 

    .ng-otp-input-wrapper .otp-input:not(:last-child) {
            margin-right: 6px !important;
        }
    .box-signup .box-form-signup {
        background-color: #1788e4;
        border-radius: 6px;
        padding: 18px;
        color: #fff;
        box-shadow: 0 47px 65px rgba(21, 28, 38, 0.1);
    }
}
// @media only screen and (max-width: 1000px) {
//     .desktop-btn {
//         border: 2px solid #000;
//         padding: 8px 0px;
//         background: #fff;
//         border-radius: 50px;
//         font-size: 14px !important;
//         display: block;
//         text-align: center;
//         margin-top: 6px;
//         display: none;
//     }
// }
.dark-mode {
    background-color: black;
    color: white;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

virtual-scroller {
    width: 100%;
    height: 100vh;
}
TERM_AND_CONDITION

.lw-details-sale-report-virtual-scroll {
    height: 63vh;
    overflow-y: auto;
    cursor: pointer;

}

.lw-account-virtual-scroll {
    height: 75vh;
}

/* Firefox */
input[type=number] {
    -moz-appearance: textfield;
}

.cursor-pointer {
    cursor: pointer;
    z-index: 1;
}

.lw-mat-autoselect-btn {
    padding: 0px !important;
    display: block !important;
    height: fit-content !important;
    outline: none !important;
    display: flex !important;
}

.lw-padding-dialog .mat-dialog-container {
    padding: 15px;
}

.ng-material-dialog .mat-dialog-container {
    padding: 0px;
    width: 99%;
    overflow-x: hidden;
    overflow-y: overlay;
}

.ng-material-dialog .mat-dialog-container .modal-dialog {
    padding: 0px;
    margin: 0px;
    max-width: 100%;
}

.lw-dialog-csField .mat-dialog-container {
    padding: 0px;
    width: 99%;
    margin: 55px !important;
    overflow-x: hidden;
    overflow-y: overlay;
}

.lw-dialog-csField .mat-dialog-container .modal-dialog {
    padding: 0px;
    margin: 0px;
    max-width: 100%;
}

.lw-dialog-inv-adjust-padding {
    width: 55% !important;
}

/*.lw-dialog-inv-adjust-padding  .mat-dialog-container {
    padding: 0px;
    width: 99%;
    overflow-x: hidden;
    overflow-y: overlay;
}*/

/*.lw-dialog-inv-adjust-padding .mat-dialog-container .modal-dialog {
    padding: 0px;
    margin: 0px;
    max-width: 100%;
}*/

.lw-dialog-payment-type .mat-dialog-container {
    padding: 0px !important;
    width: 400px !important;
    margin: 0 auto !important;
}

.lw-disabled-block {
    pointer-events: none;
    opacity: 0.6;
}

.lw-box-red {
    border-color: red !important;
}

/*product list text wrap class*/
.lw-product-list-text-wrap {
    overflow: visible !important;
    line-height: initial !important;
    white-space: pre-wrap !important;
}

/*invoice product line item add button*/
.lw-add-item-btn {
    opacity: 0.6;
    cursor: no-drop;
}

.lw-disabled-btn {
    opacity: 0.6;
    cursor: no-drop !important;
}

.lw-payment-unlink-icon {
    margin-top: 22px;
    font-size: 17px;
}

.lw-payment-link-action {
    font-size: 14px;
    text-align: center;
    /* padding: 0px 24px;*/
}

.lw-payment-link-action:hover {
    background-color: #717c91;
    color: white;
}

.lw-due-date-option {
    font-size: 100%;
    font-weight: 400;
    max-height: 200px;
    overflow: auto;
    transform: translate3d(13px, 40px, 0px) !important;
}

.lw-select-due-date-flag {
    background-color: #717c91;
    color: #fff;
}

.lw-delete-all-img {
    width: 14px !important;
    margin-right: 5px !important;
}

.lw-custom-curreny-symbol {
    margin-top: 33px;
}

.lw-btn-dropdown {
    margin-top: 32px;
}

.lw-add-line-expense-btn {
    width: unset !important;
    margin-top: 25px;
}

.lw-account-name-size {
    font-size: 14px;
}

.lw-active-roundoff-sign {
    background: #1788E4;
    border: none;
    box-shadow: none;
    color: #fff;
}

.lw-default-term-link {
    text-align: right;
    color: #1889E5;
    font-weight: 500;
    text-transform: uppercase;
}

.lw-text-red {
    color: red !important;
    font-size: 11px;
    margin-left: 4px;
}

/*Date picker static class*/
/*.lw-shadow-dateInput {
    position: absolute !important;
    opacity: 0 !important;
    padding: 0px !important;
    width: 71% !important;

}*/

.lw-shadow-dateInput-list {
    position: absolute !important;
    opacity: 0 !important;
    padding: 0px !important;
    width: 10% !important;
}

.lw-shadow-dateInput {
    position: absolute;
    width: 1px;
    margin-top: 5px;
    opacity: 0;
    /* height: 1px;*/
}

.lw-font-bold {
    font-weight: bold;
}

.lw-cp-active-link-color.is-active {
    background-color: #e0e6ef !important;
}



.lw-add-tax-header label {
    font-size: 15px;
    padding-left: 0;
}

.lw-add-tax-header .badge {
    font-size: 11px;
    color: #fff !important;
    padding: 4px;
    font-weight: 500;

}

.lw-add-tax-header .lw-tax-header-add-link {
    font-size: 15px;
    color: #007bff;
    background: #e1efff;
    padding: 5px 9px;
    border-radius: 4px;
}

.lw-add-tax-header .lw-tax-header-add-link:hover {
    font-size: 15px;
    color: #fff;
    background: #007bff;
    padding: 5px 9px;
    border-radius: 4px;
}

.lw-arithmetic-sign {
    font-size: 12px;
}

.lw-text-danger {
    color: #ff3a4d !important;
}

.lw-text-success {
    color: #26c726db !important;
}



.lw-content-load {
    position: relative;
    padding: .4rem 1.2rem;
    margin-bottom: .6rem;
    border: 1px solid transparent;
    border-radius: .25rem;
    background: #eee;
}

.lw-invByClient-padding {
    /*padding: 11px 8px 11px 8px !important;*/
}

// .lw-default-sale-client-chart {
//     height: 186px !important;
//     width: 192px !important;
// }

.lw-padding-zero {
    padding: 0px !important;
}

/*INVENTORY VALUATION YEAR WISE AVERAGE REPORT*/
.lw-hide-product-list-block {
    margin-left: 0px !important;
}

 
.hover-bg:hover {
    background-color: #ced4da1f;
}

.pre-wrap {
    white-space: pre-wrap;
    /* css-3 */
    white-space: -moz-pre-wrap;
    /* Mozilla, since 1999 */
    white-space: -pre-wrap;
    /* Opera 4-6 */
    white-space: -o-pre-wrap;
    /* Opera 7 */
    word-wrap: break-word;
    /* Internet Explorer 5.5+ */
}

.hover-bg:hover {
    background-color: #ced4da1f;
}

//Refresh button
.recalculate-btn-primary {
    color: #1889e5;
    font-weight: bold;
    // text-align: center;
    cursor: pointer;

    &:hover {
        color: #31a2ff;
    }
}

.blink-dot-loader {
    animation: blinker 0.6s linear infinite;
    width: 5px;
    height: 5px;
    display: inline-block;
    border: 1px solid #1788e4;
    background-color: #1788e4;
    border-radius: 100%;
}

@keyframes blinker {
    25% {
        opacity: 0.25;
    }

    50% {
        opacity: 0.5;
    }

    75% {
        opacity: 0.75;
    }

    100% {
        opacity: 1;
    }
}

.form-check-input {
    border-color: #a9a9a9;
}

.animation-fade-in {
    animation: animation-fade-in 0.5s 1;
    animation-fill-mode: forwards;
}

@keyframes animation-fade-in {

    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}


.v-form-checkbox {

    .form-check-input {
        width: 1.1rem;
        height: 1.1rem;
        margin-top: 0.25rem;
        border: 2px solid #b8b8b8;

        &:checked,
        &:indeterminate {
            background-color: #2196f3;
            border-color: #2196f3;
        }
    }

    label.form-check-label {
        font-weight: 500;
        padding: 0.2rem 0 0 0.3rem;
        font-size: 13px;
        color: #3d3d3d;
    }

    .form-check-parent-label {
        font-size: 14px !important;
        font-weight: bold !important;
        //color: #1889e5 !important;
    }

    .form-check-input[type=checkbox] {
        border-radius: 0.15em;
    }

    .form-check-input:focus {
        border-color: none;
        outline: 0;
        box-shadow: none;
    }
}

.bg-lightblue {
    background-color: #DCEFFF;
}
@import 'src/assets/css/material-icons-all.scss';

/* cyrillic-ext */
@font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(./../fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWkU1Z4Y.woff2) format('woff2');
    unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
}

/* cyrillic */
@font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(./../fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFU0U1Z4Y.woff2) format('woff2');
    unicode-range: U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

/* hebrew */
@font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(./../fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFVUU1Z4Y.woff2) format('woff2');
    unicode-range: U+0590-05FF, U+200C-2010, U+20AA, U+25CC, U+FB1D-FB4F;
}

/* latin-ext */
@font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(./../fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFWUU1Z4Y.woff2) format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

/* latin */
@font-face {
    font-family: 'Rubik';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(./../fonts/Rubik/iJWZBXyIfDnIV5PNhY1KTN7Z-Yh-B4iFV0U1.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}@charset "utf-8";
/* CSS Document */

/******* Metis Menu css *******/
.mdi-menu:before {
    content: "\F35C";
    background: #1788e4;
    /* padding: 10px; */
    border-radius: 50px;
    color: #fff;
    height: 36px;
    width: 36px;
}

.metismenu {
    /* // padding: 0px 0 6%;
    // overflow: auto;
    // z-index: 999;
    // position: fixed;
    // max-height: 500px;
    // border: none !important; */
    overflow: auto;
    z-index: 999;
    position: fixed;
    max-height: 100%;
    border: none !important;
    padding: 0 0 22%;
}

.metismenu ul {
    padding: 0;
}

.metismenu ul li {
    list-style: none;
    border-bottom: 1px solid #d2dadf;
    background: #ebf1fa;
}

/******* Topbar *******/
.logo-light img {
    width: 80%;
}

.topbar {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1000;
}

.topbar .topbar-left {
    background-color: #e6ecf0;
    float: left;
    text-align: center;
    height: 78px;
    position: relative;
    width: 240px;
    z-index: 1;
}

.topbar .topbar-left .logo {
    line-height: 70px;
    color: #ffffff;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 1px;
}

.topbar .topbar-left .logo .logo-sm {
    display: none;
}

.topbar .navbar-custom {
    background-color: #ffffff;
    border-radius: 0;
    margin-bottom: 0;
    /* padding: 0 10px 0 0; */
    /* margin-left: 240px; */
    min-height: 70px;
    box-shadow: 1px 0 5px rgb(0 0 0 / 20%);
}

.topbar .navbar-custom .navbar-right .dropdown-toggle:after {
    content: initial;
}

.notification-item-list {
    max-height: 230px;
}

.navbar-custom .dropdown-menu.dropdown-menu-right {
    -webkit-transform: none !important;
    transform: none !important;
    top: 100% !important;
    right: 0 !important;
    left: auto !important;
}

.notification-list.list-inline-item:not(:last-child) {
    margin-right: 0;
}

.notification-list .nav-link {
    line-height: 40px;
    color: #495057;
}

.notification-list .noti-icon {
    font-size: 24px;
    vertical-align: middle;
}

.notification-list .noti-icon-badge {
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 10px;
}

.notification-list .notify-item {
    padding: 10px 20px;
    padding: 10px 20px;
    color: #000;
    background-color: #fff;
}

.notification-list .notify-item .notify-icon {
    float: left;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
    border-radius: 50%;
}

.notification-list .notify-item .notify-icon i {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    line-height: 32px;
    margin-top: 2px;
    color: #ffffff;
}

.notification-list .notify-item .notify-details {
    margin-bottom: 0;
    overflow: hidden;
    margin-left: 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.notification-list .notify-item .notify-details span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 12px;
    font-weight: normal;
}

.notification-list .language-switch a img {
    float: right;
    margin-top: 3px;
}

.notification-list.show .nav-link {
    background-color: rgba(53, 69, 88, 0.05);
}

.notification-list .nav-user img {
    height: 36px;
    margin-top: 5px;
    width: 36px;
}

.notification-list .profile-dropdown {
    width: 170px;
}

.notification-list .profile-dropdown i {
    font-size: 17px;
    vertical-align: middle;
    margin-right: 5px;
    color: #616f80;
}



.arrow-none:after {
    border: none;
    margin: 0;
    display: none;
}

.dropdown-menu-lg {
    width: 300px;
}

.app-search {
    position: relative;
    margin-top: 18px;
}

.app-search .form-control,
.app-search .form-control:focus {
    border: 1px solid #f0f4f7;
    font-size: 13px;
    height: 34px;
    padding-left: 18px;
    padding-right: 40px;
    margin-right: 16px;
    background: #f0f4f7;
    -webkit-box-shadow: none;
    box-shadow: none;
    border-radius: 30px;
    width: 200px;
    border: none;
}

.app-search button {
    position: absolute;
    top: 9px;
    right: 26px;
    display: block;
    color: #9ca8b3;
    font-size: 11px;
    border: none;
    background-color: transparent;
}

.button-menu-mobile {
    border: none;
    color: #5b7798;
    display: inline-block;
    height: 56px;
    width: 56px;
    background-color: #ffffff;
    font-size: 24px;
}

/******* Sidemenu *******/
.side-menu {
    width: 240px;
    z-index: 999;
    background: #e6ecf0;
    bottom: 0;
    margin-top: 0;
    padding-bottom: 30px;
    position: fixed;
    top: 70px;
}

.side-menu .waves-effect .waves-ripple {
    background-color: rgba(48, 65, 155, 0.4);
}

#sidebar-menu {
    padding-top: 10px;
}

#sidebar-menu>ul>li.mm-active>a>span>.menu-arrow i {
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
}

#sidebar-menu>ul>li>a {
    color: #717c91;
    display: block;
    padding: 10px 0 10px 12px;
    font-size: 13px;
    position: relative;
    font-weight: 500;
    width: 235px;
}

#sidebar-menu>ul>li>a {
    color: #717c91;
    display: block;
    padding: 10px 0 10px 12px;
    font-size: 12px;
    position: relative;
    font-weight: 500;
    width: 235px;
    text-decoration: none;
    fill: #4A4E6C;
}

#sidebar-menu>ul>li>a:hover,
#sidebar-menu>ul>li>a:focus,
#sidebar-menu>ul>li>a:active {
    color: #2096f3;
    text-decoration: none;
    fill: #2096f3;
}

#sidebar-menu>ul>li>a>span {
    margin-left: 7px;
    padding: 0 0px;
    margin-right: 22px;
}

#sidebar-menu>ul>li>a i {
    line-height: 1;
    width: 20px;
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
}

#sidebar-menu>ul>li>a .badge {
    margin-top: 3px;
}

#sidebar-menu>ul>li>a.mm-active {
    color: #ffffff !important;
    background-color: #3345a5;
}

#sidebar-menu .menu-title {
    padding: 12px 20px !important;
    letter-spacing: 1px;
    font-size: 10px;
    font-weight: 500;
    text-transform: uppercase;
    color: #b9c1eb;
}

#sidebar-menu .submenu li.mm-active>a {
    color: #ffffff;
    background-color: #1788e4;
}

#sidebar-menu .submenu li a {
    padding: 8px 20px 8px 10px;
    color: #596479;
    display: block;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    font-size: 12px;
    font-weight: 500;
}

#sidebar-menu .submenu li .sub-header {
    padding: 5px 20px 5px 10px;
    color: #717c91;
    display: block;
    -webkit-transition: all 0.5s;
    transition: all 0.5s;
    font-size: 12px;
    font-weight: 500;

    &:hover {
        cursor: default;
    }
}

#sidebar-menu .submenu>li>.sub-header {
    padding-left: 15px;
}

.metismenu ul .child-list-item {
    list-style: none;
    border-bottom: 1px solid #e6ecf0;
    background: #d8dfe4;
}

#sidebar-menu .submenu li a:focus {
    background-color: left-bar;
}

#sidebar-menu .submenu li a:hover {
    background-color: #2096f3;
    color: rgba(255, 255, 255, 0.8);
}

#sidebar-menu .submenu>li>a {
    padding-left: 15px;
    word-break: break-word;
    text-decoration: none;
    width: 235px;
}

#sidebar-menu .submenu>li .submenu>li>a {
    padding-left: 70px;
}

/******* menu light *******/
.left-side-menu-light .side-menu {
    background-color: #ffffff;
}

.left-side-menu-light #sidebar-menu>ul>li>a.mm-active {
    color: #4090cb !important;
    background-color: #f9f9f9;
    -webkit-box-shadow: 0px 1px 1px 0px rgba(43, 46, 49, 0.07);
    box-shadow: 0px 1px 1px 0px rgba(43, 46, 49, 0.07);
}

.left-side-menu-light #sidebar-menu>ul>li>a:hover,
.left-side-menu-light #sidebar-menu>ul>li>a:focus,
.left-side-menu-light #sidebar-menu>ul>li>a:active {
    color: #4090cb;
}

.left-side-menu-light #sidebar-menu>ul>li>a.waves-effect .waves-ripple {
    background: rgba(255, 255, 255, 0.4);
}

.left-side-menu-light #sidebar-menu>ul>li>a .badge-light {
    background-color: #30419b;
    color: #ffffff;
}

.left-side-menu-light #sidebar-menu .submenu li a:hover {
    background-color: #ffffff;
    color: #4090cb;
}

.left-side-menu-light.enlarged #sidebar-menu>ul>li:hover>a {
    color: #4090cb !important;
    background-color: #f9f9f9 !important;
}

.left-side-menu-light.enlarged #sidebar-menu>ul>li:hover>ul a:hover {
    color: #4090cb !important;
}

.left-side-menu-light.enlarged #sidebar-menu>ul>li>a:hover,
.left-side-menu-light.enlarged #sidebar-menu>ul>li>a:active,
.left-side-menu-light.enlarged #sidebar-menu>ul>li>a:focus {
    color: #4090cb !important;
}

.left-side-menu-light.enlarged #sidebar-menu ul ul {
    background-color: #ffffff !important;
    -webkit-box-shadow: 0px 0px 13px 0px rgba(236, 236, 241, 0.44);
    box-shadow: 0px 0px 13px 0px rgba(236, 236, 241, 0.44);
}

.left-side-menu-light .navbar-custom {
    background-color: #383c40;
}

.left-side-menu-light .navbar-custom .button-menu-mobile {
    color: #e9ecef;
    background-color: #383c40;
}

.left-side-menu-light .navbar-custom .btn-light {
    background-color: #42464b !important;
    border-color: #42464b !important;
    color: #ced4da !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
}

.left-side-menu-light .navbar-custom .notification-list .nav-link {
    color: #ced4da;
}

.left-side-menu-light .navbar-custom .notification-list .app-search .form-control::-webkit-input-placeholder {
    color: #ced4da;
}

.left-side-menu-light .navbar-custom .notification-list .app-search .form-control:-ms-input-placeholder {
    color: #ced4da;
}

.left-side-menu-light .navbar-custom .notification-list .app-search .form-control::-ms-input-placeholder {
    color: #ced4da;
}

.left-side-menu-light .navbar-custom .notification-list .app-search .form-control::placeholder {
    color: #ced4da;
}

.left-side-menu-light .navbar-custom .notification-list .app-search .form-control,
.left-side-menu-light .navbar-custom .notification-list .app-search .form-control:focus {
    border: 1px solid #42464b;
    background: #42464b;
    color: #ced4da;
}

@media (max-width: 576px) {
    .page-title-box .breadcrumb {
        display: none;
    }
}

@media (max-width: 420px) {
    .dropdown-menu-lg {
        width: 220px;
    }

    .notify-icon {
        display: none;
    }

    .notify-details {
        margin-left: 0px !important;
    }
}

/******* Enlarged *******/
.enlarged .slimScrollDiv {
    overflow: inherit !important;
}

.enlarged .slimScrollBar {
    visibility: hidden;
}

.enlarged #wrapper .topbar .topbar-left {
    width: 70px !important;
}

.enlarged #wrapper .topbar .topbar-left .logo .logo-light {
    display: none;
    opacity: 0;
}

.enlarged #wrapper .topbar .topbar-left .logo .logo-sm {
    display: block;
    line-height: 70px;
    font-size: 28px;
}

.enlarged #wrapper .navbar-custom {
    margin-left: 70px;
}

.enlarged #wrapper #sidebar-menu .menu-title,
.enlarged #wrapper #sidebar-menu .menu-arrow,
.enlarged #wrapper #sidebar-menu .badge {
    display: none !important;
}

.enlarged #wrapper #sidebar-menu .mm-collapse.mm-show {
    display: none;
}

.enlarged #wrapper #sidebar-menu .nav.mm-collapse {
    height: inherit !important;
}

.enlarged #wrapper #sidebar-menu ul ul {
    background-color: #f4f8fb;
}

.enlarged #wrapper .left.side-menu {
    /* position: absolute; */
    width: 70px;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li:hover>a {
    position: relative;
    color: #75798b;
    background-color: #f4f8fb;
    z-index: 1;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li:hover>a.open :after,
.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li:hover>a.mm-active :after {
    display: none;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li:hover>ul {
    display: block;
    left: 70px;
    position: static;
    box-shadow: 0px 0px 26px -20px rgb(0 0 0 / 75%);
    height: auto !important;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li:hover>ul a {
    -webkit-box-shadow: none;
    box-shadow: none;
    padding: 8px 20px;
    position: relative;

    z-index: 6;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li:hover>ul a:hover {
    color: #ffffff;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li:hover a span {
    display: inline-block;
    font-size: 13px;
    font-weight: 500;
    color: #394751;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a {
    padding: 15px 20px;
    -webkit-transition: none;
    transition: none;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a:hover,
.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a:active,
.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a:focus {
    color: #75798b;
    background-color: #f4f8fb;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a i {
    font-size: 18px;
    margin-left: 5px;
    margin-right: 20px;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a span {
    display: none;
    padding-left: 10px;
}

.enlarged #wrapper .left.side-menu #sidebar-menu ul ul li:hover>ul {
    display: block;
    left: 190px;
    margin-top: -36px;
    position: absolute;
}

.enlarged #wrapper .left.side-menu #sidebar-menu ul ul li>a span.float-end {
    position: absolute;
    right: 20px;
    top: 12px;
    -webkit-transform: rotate(270deg);
    transform: rotate(270deg);
}

.enlarged #wrapper .left.side-menu #sidebar-menu ul ul li.mm-active a {
    color: #ffffff;
}

.enlarged #wrapper .content-page {
    margin-left: 70px;
}

.enlarged #wrapper .footer {
    left: 70px;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a {
    padding: 15px 20px;
    transition: none;
    position: static;
}

.ts-sidebar-pairent:hover+.metismenu li .ts-sidebar-menu li {
    width: 260px;
}

.menu-scrolling {
    overflow: auto;
    max-height: 88vh;
}

.enlarged .menu-scrolling {
    overflow: inherit !important;
}

.notification-list p {
    position: absolute;
    top: 36px;
    left: 40px;
    font-weight: 400;
    text-overflow: ellipsis;
    overflow: hidden;
    // width: 140px;
    font-size: 10px;
    color: #aab2bc;
}

.notification-list .nav-user img {
    height: 36px;
    margin-top: 5px;
    width: 36px;
}

.enlarged .menu-scrolling ::-webkit-scrollbar-thumb {
    background: transparent;
    border-radius: 10px;
}

.syincing-icon {
    animation: syncing-spin 0.8s linear infinite;
    margin-right: 4px;
}

.enlarged #wrapper .left.side-menu #sidebar-menu>ul>li>a {
    padding: 15px 20px;
    transition: none;
    position: static;
    width: auto;
}

.nav-user img {
    height: 36px;
    margin-top: 5px;
    width: 36px;
}

.notification-list.list-inline-item:not(:last-child) {
    margin-right: 0;
}

.notification-list .nav-link {
    line-height: 60px;
    color: #495057;
    padding-top: 0;
}

.notification-list .noti-icon {
    font-size: 24px;
    vertical-align: middle;
}

.notification-list .noti-icon-badge {
    display: inline-block;
    position: absolute;
    top: 16px;
    right: 10px;
}

.notification-list .notify-item {
    padding: 10px 20px;
    padding: 10px 20px;
    color: #000;
    background-color: #fff;
}

.notification-list .notify-item .notify-icon {
    float: left;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
    border-radius: 50%;
}

.notification-list .notify-item .notify-icon i {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    line-height: 32px;
    margin-top: 2px;
    color: #ffffff;
}

.notification-list .notify-item .notify-details {
    margin-bottom: 0;
    overflow: hidden;
    margin-left: 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.notification-list .notify-item .notify-details span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 12px;
    font-weight: normal;
}

.notification-list .language-switch a img {
    float: right;
    margin-top: 3px;
}

.notification-list.show .nav-link {
    background-color: rgba(53, 69, 88, 0.05);
}

.notification-list .nav-user img {
    height: 36px;
    margin-top: 5px;
    width: 36px;
}

.notification-list .profile-dropdown {
    width: 170px;
}

.notification-list .profile-dropdown i {
    font-size: 17px;
    vertical-align: middle;
    margin-right: 5px;
    color: #616f80;
}

.notification-list .profile-dropdown span {}

.navbar-custom .dropdown-menu.dropdown-menu-right {
    -webkit-transform: none !important;
    transform: none !important;
    top: 100% !important;
    right: 0 !important;
    left: auto !important;
}

.notification-list.list-inline-item:not(:last-child) {
    margin-right: 0;
}

.dropdown-menu-large {
    width: 460px;
}

.noti-list .nav-link {
    line-height: 46px;
    color: #495057;
    padding-top: 6px;
}

.noti-list h6 {
    font-size: 16px;
    font-style: inherit;
    line-height: 2.16667;
    color: #172b4d;
    font-weight: 500;
    letter-spacing: -0.01em;
    flex-grow: 1;
    margin-top: 0px;
    margin: 0;
    border-bottom: 1px solid #eee;
    padding: 0 14px;
}

.noti-list .noti-icon {
    font-size: 24px;
    vertical-align: middle;
}

.noti-list .noti-icon-badge {
    display: inline-block;
    position: absolute;
    top: 2px;
    right: -2px;
    background-color: #f56b6b;
    height: 16px;
    width: 15px;
    padding: 3px 0px;
    font-size: 11px;
    font-weight: 600;
    border-radius: 50px;
}

.noti-list .notify-item {
    padding: 10px 7px;
    color: #000;
    background-color: #fff;
}

.noti-list .notify-item .notify-icon {
    float: left;
    height: 36px;
    width: 36px;
    line-height: 36px;
    text-align: center;
    margin-right: 10px;
    border-radius: 50%;
}

.noti-icon {
    color: #2096f3;
    padding: 6px;
    border: 1px solid #2096f3;
    border-radius: 50px;
}

.noti-icon:hover {
    color: #2096F3;
    background-color: rgba(222, 235, 255, 0.9);
    border: 1px solid rgba(222, 235, 255);
    padding: 6px;
    border-radius: 50px;
}

.noti-list .notify-item .notify-icon i {
    height: 32px;
    width: 32px;
    border-radius: 50%;
    line-height: 32px;
    margin-top: 2px;
    color: #ffffff;
}

.noti-list .notify-item .notify-details {
    margin-bottom: 0;
    overflow: hidden;
    margin-left: 45px;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}

.noti-list .notify-item .notify-details span {
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    font-size: 12px;
    font-weight: normal;
}

.noti-list .language-switch a img {
    float: right;
    margin-top: 3px;
}

.noti-list.show .nav-link {
    background-color: rgba(53, 69, 88, 0.05);
}

.noti-list .nav-user img {
    height: 36px;
    margin-top: 5px;
    width: 36px;
}

.noti-list .profile-dropdown {
    width: 170px;
}

.noti-list .profile-dropdown i {
    font-size: 17px;
    vertical-align: middle;
    margin-right: 5px;
    color: #616f80;
}

.noti-list .profile-dropdown span {
    margin-top: 5px;
}

.arrow-none:after {
    border: none;
    margin: 0;
    display: none;
}

.dropdown-menu-lg {
    width: 300px;
}

.shortcut a {
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px 0 6px;
    text-decoration: none;
}

.edit-shortcut,
.shortcut a {
    display: flex;
    align-items: center;
    justify-content: center;
}@font-face {
    font-family: 'Font Awesome 5 Free';
    font-style: normal;
    font-weight: 400;
    src: url("../fonts/fa-regular-400.ttf") format("truetype");
}

.far {
    font-family: 'Font Awesome 5 Free';
    font-weight: 400;
}

/* MaterialDesignIcons.com */
@font-face {
    font-family: "Material Design Icons";
    src: url("../fonts/materialdesignicons-webfont.ttf?v=3.6.95") format("truetype");
    font-weight: normal;
    font-style: normal;
}

.mdi:before,
.mdi-set {
    display: inline-block;
    font: normal normal normal 24px/1 "Material Design Icons";
    font-size: inherit;
    text-rendering: auto;
    line-height: inherit;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.mdi-account-circle:before {
    content: "\F009";
}

.mdi-settings:before {
    content: "\F493";
}

.mdi-power:before {
    content: "\F425";
}

.ti-trash:before {
    content: "\e605";
}

.ti-trash:before {
    content: "\e605";
}

.ti-pencil:before {
    content: "\e61c";
}

.ti-trash:before {
    content: "\e605";
}

.ti-pencil {
    font-size: 18px;
}

.mdi-plus:before {
    content: "\f415";
}

.mdi-minus:before {
    content: "\f374";
}// Custom Theming for Angular Material
// For more information: https://material.angular.io/guide/theming
@use "@angular/material" as mat;
// Plus imports for other components in your app.

// Include the common styles for Angular Material. We include this here so that you only
// have to load a single css file for Angular Material in your app.
// Be sure that you only ever include this mixin once!
@include mat.core();

// Define the palettes for your theme using the Material Design palettes available in palette.scss
// (imported above). For each palette, you can optionally specify a default, lighter, and darker
// hue. Available color palettes: https://material.io/design/color/
$theme-primary: mat.define-palette(mat.$indigo-palette);
$theme-accent: mat.define-palette(mat.$pink-palette, A200, A100, A400);

// The warn palette is optional (defaults to red).
$theme-warn: mat.define-palette(mat.$red-palette);

$custom-font-family: 'Rubik';

$my-custom-typography: mat.define-typography-config($font-family: $custom-font-family);

// Create the theme object. A theme consists of configurations for individual
// theming systems such as "color" or "typography".
$theme: mat.define-light-theme((color: (primary: $theme-primary, accent: $theme-accent, warn: $theme-warn), typography: $my-custom-typography ));

// Include theme styles for core and each component used in your app.
// Alternatively, you can import and @include the theme mixins for each component
// that you are using.
@include mat.all-component-themes($theme);

/*===========   CUSTOM STYLES  ============================*/
/* $my-custom-blue: #007bff;
$my-custom-indigo: #6610f2;
$my-custom-purple: #6f42c1;
$my-custom-pink: #e83e8c;
$my-custom-red: #dc3545;
$my-custom-light-red: #ff7171;
$my-custom-orange: #fd7e14;
$my-custom-yellow: #ffc107;
$my-custom-green: #28a745;
$my-custom-teal: #20c997;
$my-custom-cyan: #17a2b8;
$my-custom-white: #fff;
$my-custom-gray: #6c757d;
$my-custom-gray-dark: #343a40; */






// ===================================================================================

/* For use in src/lib/core/theming/_palette.scss */
$md-lightblue: (
    50 : #e7f4fd,
    100 : #c2e3fb,
    200 : #99d0f8,
    300 : #70bdf5,
    400 : #52aff3,
    500 : #33a1f1,
    600 : #2e99ef,
    700 : #278fed,
    800 : #2085eb,
    900 : #1474e7,
    A100 : #ffffff,
    A200 : #e3efff,
    A400 : #b0d1ff,
    A700 : #96c2ff,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #000000,
        600 : #000000,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-lime: (
    50 : #f8fae8,
    100 : #eef3c5,
    200 : #e3eb9f,
    300 : #d7e278,
    400 : #cfdc5b,
    500 : #c6d63e,
    600 : #c0d138,
    700 : #b9cc30,
    800 : #b1c628,
    900 : #a4bc1b,
    A100 : #fdfff1,
    A200 : #f5ffbe,
    A400 : #edff8b,
    A700 : #e9ff72,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #000000,
        600 : #000000,
        700 : #000000,
        800 : #000000,
        900 : #000000,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-lightgreen: (
    50 : #f1f7e9,
    100 : #dbeac8,
    200 : #c3dda4,
    300 : #abcf7f,
    400 : #99c463,
    500 : #87ba48,
    600 : #7fb341,
    700 : #74ab38,
    800 : #6aa330,
    900 : #579421,
    A100 : #e5ffd0,
    A200 : #c9ff9d,
    A400 : #acff6a,
    A700 : #9eff51,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #000000,
        600 : #000000,
        700 : #000000,
        800 : #000000,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-blue: (
    50 : #e7f1fd,
    100 : #c3ddfb,
    200 : #9bc7f8,
    300 : #72b0f5,
    400 : #549ff2,
    500 : #368ef0,
    600 : #3086ee,
    700 : #297bec,
    800 : #2271e9,
    900 : #165fe5,
    A100 : #ffffff,
    A200 : #e2ebff,
    A400 : #afc8ff,
    A700 : #96b7ff,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-green: (
    50 : #eaf4e9,
    100 : #cbe3c9,
    200 : #a8d1a5,
    300 : #85bf81,
    400 : #6ab166,
    500 : #50a34b,
    600 : #499b44,
    700 : #40913b,
    800 : #378833,
    900 : #277723,
    A100 : #baffb8,
    A200 : #89ff85,
    A400 : #58ff51,
    A700 : #3fff38,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #000000,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-amber: (
    50 : #e5f4f3,
    100 : #bee4e1,
    200 : #93d3cd,
    300 : #67c1b8,
    400 : #47b3a9,
    500 : #26a69a,
    600 : #229e92,
    700 : #1c9588,
    800 : #178b7e,
    900 : #0d7b6c,
    A100 : #adfff3,
    A200 : #7affec,
    A400 : #47ffe4,
    A700 : #2dffe0,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-orange: (
    50 : #fef1e1,
    100 : #fdddb4,
    200 : #fcc682,
    300 : #faaf4f,
    400 : #f99d2a,
    500 : #f88c04,
    600 : #f78403,
    700 : #f67903,
    800 : #f56f02,
    900 : #f35c01,
    A100 : #ffffff,
    A200 : #ffeee6,
    A400 : #ffcbb3,
    A700 : #ffba9a,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #000000,
        600 : #000000,
        700 : #000000,
        800 : #000000,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-deeporange: (
    50 : #fee9e3,
    100 : #fcc9b9,
    200 : #fba58a,
    300 : #f9805b,
    400 : #f76537,
    500 : #f64a14,
    600 : #f54312,
    700 : #f33a0e,
    800 : #f2320b,
    900 : #ef2206,
    A100 : #ffffff,
    A200 : #ffe6e4,
    A400 : #ffb7b1,
    A700 : #ffa097,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-lightgrey: (
    50 : #f8f8f8,
    100 : #efefef,
    200 : #e4e4e4,
    300 : #d9d9d9,
    400 : #d0d0d0,
    500 : #c8c8c8,
    600 : #c2c2c2,
    700 : #bbbbbb,
    800 : #b4b4b4,
    900 : #a7a7a7,
    A100 : #ffffff,
    A200 : #ffffff,
    A400 : #fff0f0,
    A700 : #ffd6d6,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #000000,
        600 : #000000,
        700 : #000000,
        800 : #000000,
        900 : #000000,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$md-red: (
    50 : #fce7e5,
    100 : #f8c3bf,
    200 : #f49c94,
    300 : #ef7469,
    400 : #eb5649,
    500 : #e83829,
    600 : #e53224,
    700 : #e22b1f,
    800 : #de2419,
    900 : #d8170f,
    A100 : #ffffff,
    A200 : #ffd3d2,
    A400 : #ffa29f,
    A700 : #ff8985,
    contrast: (50 : #000000,
        100 : #000000,
        200 : #000000,
        300 : #000000,
        400 : #000000,
        500 : #ffffff,
        600 : #ffffff,
        700 : #ffffff,
        800 : #ffffff,
        900 : #ffffff,
        A100 : #000000,
        A200 : #000000,
        A400 : #000000,
        A700 : #000000,
    )
);

$bluesky-primary: mat.define-palette($md-lightblue);
$bluesky-accent: mat.define-palette($md-green);
$bluesky-warn: mat.define-palette($md-red);
$bluesky-theme: mat.define-light-theme((color: (primary: $bluesky-primary, accent: $bluesky-accent, warn: $bluesky-warn)));

@include mat.all-component-themes($bluesky-theme);
// ===================================================================================

.no-margin {
    margin: 0;
}

:root {

    font-family: "Rubik" !important;

    .mat-typography {
        font-family: "Rubik" !important;
    }


    .modal-dialog {
        width: 100%;
    }

    .mat-dialog-title,
    .mat-dialog-content,
    .mat-dialog-actions {

        .row {
            margin: 0;
        }
    }

    .mat-dialog-actions {
        display: block !important;
        padding: 8px !important;
        margin-top: 3px !important;
        border-top: 1px solid #d8d8d8;
        width: 100% !important;
    }

    .mat-dialog-title {
        padding: 15px 20px;
        background-color: #f0f0f0;
        margin: 0;
        font-size: 16px !important;
        margin-bottom: 10px;
        border-radius: 0px;
        border-bottom: 1px solid #ededed;

        &::before {
            display: block;
            height: auto;
        }
    }

    .ng-material-drawer {
        border-radius: 0 !important;
        box-shadow: none !important;

        .mat-dialog-content {
            max-height: 92% !important;
            min-height: 92% !important;
            //padding: 15px 0;
        }

        .mat-dialog-actions {
            display: block !important;
            padding: 8px !important;
            margin-top: 8px !important;
            border-top: 1px solid #d8d8d8;
            width: 100% !important;
            bottom: 0;
            position: absolute;
        }
    }

    .preview-container {
        // display: none;
        visibility: hidden;
    }

    .mat-progress-custom {

        .mdc-linear-progress__bar {
            display: block;
            border-radius: 4px;
            height: 8px;
            overflow: hidden;
            position: relative;
            // transition: opacity 250ms linear;
            width: 100%;

            .mdc-linear-progress__bar-inner {
                border-color: #008dff;
            }

            .mat-progress-bar-buffer {
                background-color: #e9e9e9;
            }
        }
    }

    .global-filter {

        background-color: white;
        border: 1px solid #ddd;

        .mat-mdc-select-value-text {
            font-size: 13px;
            padding-left: 10px;
            color: #000;
        }

        .mat-mdc-select-arrow {
            width: 25px;
        }

        .mat-mdc-select-trigger {
            height: 28px;
        }
    }

    .filter-select-option.mat-mdc-option {

        min-height: 35px;
        font-size: 13px;
    }

    //COMMON FILTER STYLES
    .mat-select-group {
        font-size: 13px;
        font-weight: 600;

        .mat-mdc-optgroup-label {
            min-height: 35px;
        }

        .mat-mdc-option {

            min-height: 35px;
            font-size: 13px;
        }
    }

    // //FOR FIXING Z-INDEX ISSUES
    // .cdk-overlay-container:has(.cdk-global-overlay-wrapper) {
    //     z-index: 1002;
    // }

    // .cdk-overlay-container:has(.cdk-overlay-connected-position-bounding-box) {
    //     z-index: 1000;
    // }

    .mat-mdc-dialog-container {
        --mdc-dialog-supporting-text-color: rgba(0, 0, 0, 0.9);
    }
}/* Material Icons Set ------ Start*/

/* Filled or Default */
@font-face {
    font-family: "Material Icons";
    font-style: normal;
    font-display: block;
    font-weight: 400;
    src: url(./../fonts/materials-icons/material-icon-filled.woff2) format("woff2");
}

.material-icons {
    font-family: "Material Icons";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
}

/* Two Tone */
@font-face {
    font-family: "Material Icons Two Tone";
    font-style: normal;
    font-weight: 400;
    src: url(./../fonts/materials-icons/material-icon-two-tone.woff2) format("woff2");
}

.material-icons-two-tone {
    font-family: "Material Icons Two Tone";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
}

/* Two Tone */
@font-face {
    font-family: "Material Icons Two Tone";
    font-style: normal;
    font-weight: 400;
    src: url(./../fonts/materials-icons/material-icon-two-tone.woff2) format("woff2");
}

.material-icons-two-tone {
    font-family: "Material Icons Two Tone";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
}

/* Sharp */
@font-face {
    font-family: "Material Icons Sharp";
    font-style: normal;
    font-weight: 400;
    src: url(./../fonts/materials-icons/material-icon-sharp.woff2) format("woff2");
}

.material-icons-sharp {
    font-family: "Material Icons Sharp";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
}

/* Round */
@font-face {
    font-family: "Material Icons Round";
    font-style: normal;
    font-weight: 400;
    src: url(./../fonts/materials-icons/material-icon-round.woff2) format("woff2");
}

.material-icons-round {
    font-family: "Material Icons Round";
    font-weight: normal;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
    letter-spacing: normal;
    text-transform: none;
    display: inline-block;
    white-space: nowrap;
    word-wrap: normal;
    direction: ltr;
    -webkit-font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
}

/* Material Icons Set ------ End*/.metismenu .arrow {
    float: right;
    line-height: 1.42857
}

[dir=rtl] .metismenu .arrow {
    float: left
}

.metismenu .glyphicon.arrow:before {
    content: "\e079"
}

.metismenu .mm-active>a>.glyphicon.arrow:before {
    content: "\e114"
}

.metismenu .fa.arrow:before {
    content: "\f104"
}

.metismenu .mm-active>a>.fa.arrow:before {
    content: "\f107"
}

.metismenu .ion.arrow:before {
    content: "\f3d2"
}

.metismenu .mm-active>a>.ion.arrow:before {
    content: "\f3d0"
}

.metismenu .plus-times {
    float: right
}

[dir=rtl] .metismenu .plus-times {
    float: left
}

.metismenu .fa.plus-times:before {
    content: "\f067"
}

.metismenu .mm-active>a>.fa.plus-times {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg)
}

.metismenu .plus-minus {
    float: right
}

[dir=rtl] .metismenu .plus-minus {
    float: left
}

.metismenu .fa.plus-minus:before {
    content: "\f067"
}

.metismenu .mm-active>a>.fa.plus-minus:before {
    content: "\f068"
}

.metismenu .mm-collapse:not(.mm-show) {
    display: none
}

.metismenu .mm-collapsing {
    position: relative;
    height: 0;
    overflow: hidden;
    transition-timing-function: ease;
    transition-duration: .35s;
    transition-property: height, visibility
}

.metismenu .has-arrow {
    position: relative
}

.metismenu .has-arrow:after {
    position: absolute;
    content: "";
    width: .5em;
    height: .5em;
    border-style: solid;
    border-width: 1px 0 0 1px;
    border-color: initial;
    right: 1em;
    -webkit-transform: rotate(-45deg) translateY(-50%);
    transform: rotate(-45deg) translateY(-50%);
    -webkit-transform-origin: top;
    transform-origin: top;
    top: 50%;
    transition: all .3s ease-out
}

[dir=rtl] .metismenu .has-arrow:after {
    right: auto;
    left: 1em;
    -webkit-transform: rotate(135deg) translateY(-50%);
    transform: rotate(135deg) translateY(-50%)
}

.metismenu .has-arrow[aria-expanded=true]:after,
.metismenu .mm-active>.has-arrow:after {
    -webkit-transform: rotate(-135deg) translateY(-50%);
    transform: rotate(-135deg) translateY(-50%)
}

[dir=rtl] .metismenu .has-arrow[aria-expanded=true]:after,
[dir=rtl] .metismenu .mm-active>.has-arrow:after {
    -webkit-transform: rotate(225deg) translateY(-50%);
    transform: rotate(225deg) translateY(-50%)
}@import "~@angular/material/prebuilt-themes/indigo-pink.css";
// @import url("https://fonts.googleapis.com/css2?family=Rubik&display=swap");

$app-primary-color: #1889e5;

@for $i from 8 through 20 {
    .font-size-#{$i} {
        font-size: $i+px;
    }
}

.sale-payment-re,
.sale-aging-re,
.trial-balance-main> :not(caption) {

    th,
    .table-head {
        background-color: #e8f4fe;
        color: #000;
        padding: 6px 6px;
        border-bottom-width: inherit !important;
    }
}

/* ==============
General
===================*/
body {
    font-family: "Rubik" !important;
    background-repeat: repeat;
    background: #fff;
    font-size: 13px;
}

@media (max-width: 991px) {
    body {
        overflow-x: hidden;
    }
}

html {
    overflow-x: hidden;
    position: relative;
    min-height: 100%;
}

// h1,
// h2,
// h3,
// h4,
// h5,
// h6 {
//     margin: 10px 0;
//     // font-family: "Rubik", sans-serif;
// }

// h6 {
//     font-size: 14px;
// }

p {
    line-height: 1.7;
}

svg {
    max-width: 100%;
}

li,
u l {
    list-style: none;
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

.p-t {
    padding-top: 0 !important;
}

.svg-icons {
    width: 20px;
}

.float-right {
    float: right !important;
}

* {
    outline: none !important;
}

a:hover,
a:active,
a:focus {
    outline: 0;
    text-decoration: none;
}

.no-padding {
    padding: 0 !important;
}


.pull-right {
    float: right;
}

.pull-left {
    float: left;
}

.form-select {
    width: 100%;
    height: 34px !important;
    color: #000;
    border: 1px solid #d5d7db !important;
    box-sizing: border-box;
    border-radius: 3px !important;
    display: inline-block;
    padding: 0px 6px 0 7px !important;
    font-size: 14px;
    line-height: 1.4 !important;
    cursor: pointer;
}

.form-select:focus {
    border: 1px solid #1391e6 !important;
    outline: 0;
    box-shadow: 0 0 0 3px rgb(19 106 205 / 20%);
    color: #000;
}

#table-tax .table>tbody>tr>td,
.table>tfoot>tr>td,
.table>thead>tr>td {
    padding: 10px 7px;
    border-left: none;
    border-right: none;
    word-break: break-all;
}

.table>tbody>tr>td,
.table>tfoot>tr>td,
.table>thead>tr>td {
    padding: 4px 7px;
    border-left: none;
    border-right: none;
    word-break: break-all;
}

.container-alt {
    margin-left: auto;
    margin-right: auto;
    padding-left: 15px;
    padding-right: 15px;
}

#wrapper {
    height: 100%;
    overflow: hidden;
    width: 100%;
}

.sale-payment-re ::-webkit-scrollbar {
    width: 6px;
    position: absolute;
    height: 3px;
    background: none;
    box-shadow: none;
}

body::-webkit-scrollbar {
    width: 1em;
    border-radius: 0px;
}

body::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 0px;
}

/* width */
::-webkit-scrollbar {
    width: 6px;
    height: 8px;
    background: none;
    box-shadow: none;
}

/* Track */
::-webkit-scrollbar-track {
    border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
    background: #c9d0d4;
    border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #c9d0d4;
}

/* ==============
Form-elements
===================*/

.form-select {
    font-size: 13px !important;
}

.custom-control-input:checked~.custom-control-indicator {
    background-color: #30419b;
}

.custom-control-input:focus~.custom-control-indicator {
    -webkit-box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #30419b;
    box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px #30419b;
}

.has-success .form-select {
    border-color: #02c58d;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.has-warning .form-select {
    border-color: #fcbe2d;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.has-danger .form-select {
    border-color: #fc5454;
    -webkit-box-shadow: none;
    box-shadow: none;
}

.input-group-addon {
    border-radius: 2px;
    border: 1px solid #f0f4f7;
}

/* ==============
Tables
===================*/
.table {
    margin-bottom: 10px;
    font-size: 12px;
}

.table {
    width: 100%;
    margin-bottom: 0;
    background-color: transparent;
}

.btn.focus,
.btn:focus {
    outline: 0;
    box-shadow: none;
    border: 0;
}

.table-hover tbody tr:hover,
.table-striped tbody tr:nth-of-type(odd),
.thead-default th {
    background-color: #f3f9ff;
}

/******* Footer *******/
.footer {
    bottom: 0;
    text-align: center !important;
    padding: 19px 30px 20px;
    position: absolute;
    background-color: #ffffff;
    right: 0;
    left: 240px;
}

/******* Responsive *******/
@media (min-width: 769px) {
    .enlarged {
        /*min-height: 1200px;*/
    }

    .enlarged .slimscroll-menu {
        overflow: inherit !important;
    }
}

@media (max-width: 419px) {
    .content-page {
        margin-left: 70px;
    }

    .enlarged .side-menu.left {
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) !important;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1) !important;
    }
}

@media (max-width: 480px) {
    .side-menu {
        z-index: 10 !important;
    }

    .button-menu-mobile {
        display: block;
    }

    .navbar-custom {
        margin-left: 0 !important;
    }
}

@media (max-width: 768px) {
    .topbar .topbar-left {
        width: 70px !important;
        height: 70px;
    }

    .topbar .topbar-left .logo-light {
        display: none !important;
    }

    .topbar .topbar-left .logo-sm {
        display: block !important;
        line-height: 70px !important;
        font-size: 28px;
    }

    .navbar-custom {
        margin-left: 70px !important;
    }

    .content-page {
        margin-left: 0 !important;
    }

    .content-page .content {
        padding: 0px;
    }

    .enlarged .left.side-menu {
        margin-left: -70px;
    }

    .footer {
        left: 0 !important;
    }
}

.right-sidebar {
    position: fixed;
    width: 280px;
    top: 70px;
    bottom: 0px;
    right: 0px;
    padding-bottom: 30px;
    background: #ffffff;
    -webkit-box-shadow: 0px 0px 13px 0px rgba(236, 236, 241, 0.44);
    box-shadow: 0px 0px 13px 0px rgba(236, 236, 241, 0.44);
}

/******* Content Page *******/
.content-page {
    margin-left: 240px;
    overflow: hidden;
}

.content-page .content {
    margin-top: 70px;
    background: #fff;
    min-height: 100vh;
}

/*.content-page .content {
padding: 0 15px 10px 15px;
margin-top: 70px;
margin-bottom: 60px;
}*/
/******* Page Title *******/
.page-title-box {
    padding: 10px 0px;
}

.page-title-box .page-title {
    font-size: 16px;
    margin: 0;
    line-height: 30px;
}

.page-title-box .breadcrumb {
    padding: 4px 0;
    background-color: transparent;
    margin-bottom: 0;
}

.page-title-box .breadcrumb a {
    color: #1889e5;
    font-size: 13px;
    font-weight: 500;
}

.page-title-box .breadcrumb a:hover {
    color: #1889e5;
}

.page-title-box .breadcrumb .active {
    color: rgba(0, 0, 0, 0.9);
    font-weight: 500;
}

/******* End Page Title *******/

/******* Start Sale, Purchase  List  *******/
.dot-menu {
    border: none;
    background: none;
}

.ac-nav--secondary {
    position: relative;
}

.invoice-list-tabs .ac-nav__section {
    position: relative !important;
}

.ac-nav--secondary .ac-nav__section {
    border-bottom: 1px solid #d4dde3;
    padding-left: 0 !important;
    overflow: auto;
    white-space: nowrap;
}

.ac-nav--secondary .ac-nav__item {
    display: inline-block;
}

.ac-nav--secondary--horizontal .ac-nav__link.is-active,
.ac-nav--secondary--horizontal .ac-nav__link.is-active:hover,
.ac-nav--secondary .ac-nav__link.is-active,
.ac-nav--secondary .ac-nav__link.is-active:hover {
    color: #1c252c;
    font-weight: bold;
    border-bottom: 4px solid #1889e5;
}

.ac-nav--secondary .ac-nav__link {
    display: block;
    padding: 8px;
    margin-right: 16px;
    cursor: pointer;
    text-decoration: none;
    font-weight: normal;
    color: #4d6575;
    border-bottom: 4px solid transparent;
}

.ac-nav--secondary--horizontal .ac-nav__link__count,
.ac-nav--secondary--horizontal .ac-nav__link__count--warning,
.ac-nav--secondary--horizontal .ac-nav__link__count--danger,
.ac-nav--secondary .ac-nav__link__count,
.ac-nav--secondary .ac-nav__link__count--warning,
.ac-nav--secondary .ac-nav__link__count--danger {
    background: #dfe6f1;
    color: #3c5b8b;
    font-weight: 600;
    padding: 0 8px;
    border-radius: 500px;
    font-size: 14px;
    line-height: 1.4;
    display: inline-block;
    margin-left: 8px;
}

.inc-search {
    position: relative;
    margin-right: 15px;
}

.inc-search .form-select,
.inc-search .form-select:focus {
    font-size: 13px;
    border: 1px solid #c4cdd5;
    color: #ffffff;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    padding-left: 20px;
    padding-right: 40px;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: none;
    border-radius: 4px;
    height: 37px;
    font-weight: 600;
    color: #0b1038;
    width: 220px;
}

.inc-search a {
    position: absolute;
    top: 6px;
    right: 20px;
    color: #c4c4cd;
}

.sort-product {
    margin-right: 1rem;
    margin-bottom: 1rem;
    background-color: #fff;
    color: #212121;
    border: 1px solid #c4cdd5;
    text-align: center;
    display: inline-block;
    line-height: 1.5rem;
    padding: 6px 16px;
    border-radius: 4px;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    cursor: pointer;
    font-size: 13px;
    -webkit-transition: 0.1s all linear;
    -moz-transition: 0.1s all linear;
    -ms-transition: 0.1s all linear;
    -o-transition: 0.1s all linear;
    transition: 0.1s all linear;
}

.filter-product {
    margin-right: 1rem;
    margin-bottom: 1rem;
    background-color: #fff;
    color: #212121;
    border: 1px solid #c4cdd5;
    text-align: center;
    display: inline-block;
    line-height: 1.5rem;
    padding: 6px 16px;
    border-radius: 4px;
    box-shadow: 0 1px 0 0 rgba(22, 29, 37, 0.05);
    cursor: pointer;
    font-size: 13px;
    -webkit-transition: 0.1s all linear;
    -moz-transition: 0.1s all linear;
    -ms-transition: 0.1s all linear;
    -o-transition: 0.1s all linear;
    transition: 0.1s all linear;
}

.filter-product img {
    width: 12px;
    margin-right: 5px;
}

.New_product {
    margin-right: 1rem;
    margin-bottom: 1rem;
    background-color: #1889e5;
    color: #fff;
    text-align: center;
    display: inline-block;
    line-height: 1.5rem;
    padding: 6px 16px;
    border-radius: 4px;
    box-shadow: 0 2px 4px 0 rgba(100, 100, 100, 0.5);
    cursor: pointer;
    font-size: 13px;
    border: none;
    -webkit-transition: 0.1s all linear;
    -moz-transition: 0.1s all linear;
    -ms-transition: 0.1s all linear;
    -o-transition: 0.1s all linear;
    transition: 0.1s all linear;
}

.New_product a {
    color: #fff;
}

.btns-three,
#inner-wrapper #content #recurring>.title .btns {
    display: inline-block;
    text-align: right;
    position: relative;
}

.label-paid {
    font-weight: 500;
    background-color: #0fb882;
    /* letter-spacing: 0.05em; */
    color: #fff;
    font-size: 10px;
    border-radius: 4px;
    padding: 3px 8px;
    display: inline-flex;
}

.label-not-paid {
    font-weight: 500;
    background-color: #e7ebed;
    letter-spacing: 0.05em;
    color: #9ba3b2;
    border: 1px solid #9ba3b2;
    font-size: 11px;
    border-radius: 4px;
    padding: 3px 8px;
    display: inline-flex;
}

.label-overdue {
    font-weight: 500;
    background-color: #ffebee;
    letter-spacing: 0.05em;
    border: 1px solid #ef5350;
    color: #ef5350;
    font-size: 11px;
    border-radius: 4px;
    padding: 3px 8px;
    display: inline-flex;
}

.label-partial {
    font-weight: 500;
    background-color: #fdf1d3;
    letter-spacing: 0.05em;
    color: #ebaa15;
    border: 1px solid #ebaa15;
    font-size: 11px;
    border-radius: 4px;
    padding: 3px 8px;
    display: inline-flex;
}

.label-partial a {
    color: #ebaa15 !important;
}

.label-overdue a {
    color: #ef5350 !important;
}

.label-not-paid a {
    color: #707070 !important;
}

.label-paid a {
    color: #fff !important;
}

.label-paid-mini {
    font-weight: 600;
    background-color: #d7f8ed;
    letter-spacing: 0.05em;
    border: 1px solid #67d9b4;
    color: #0fb882;
    font-size: 11px;
    border-radius: 4px;
    padding: 3px 8px;
    display: inline-flex;
}

.label-not-paid-mini {
    font-weight: 600;
    background-color: #9ba3b2;
    letter-spacing: 0.05em;
    color: #fff;
    font-size: 11px;
    border-radius: 19px;
    padding: 2px 6px;
    margin-left: 4px;
    display: inline-flex;
}

.label-not-paid-mini a {
    color: #fff;
}

.label-paid-mini a {
    color: #fff;
}

.checkinc-list {
    width: 3%;
    padding: 0 !important;
    vertical-align: middle !important;
}

.date-list {
    width: 11%;
}

.inv-no-list {
    width: 14%;
}

.client-list {
    width: 14%;
}

.invac-list {
    width: 14%;
}

.status-list {
    width: 14%;
}

.grand-list {
    width: 14%;
}

.sale-balance-list {
    width: 14%;
}

.action-list {
    width: 6%;
}

.main-check input {
    height: 15px;
    width: 15px;
    border: 1px solid #b8b8b8;
    margin-top: 5px;
    cursor: pointer;
}


.main-check:hover input {
    background-color: #ccc;
    border: 1px solid #b8b8b8;
    margin-top: 5px;
    cursor: pointer;
}

.container-checkbox-list {
    position: relative;
    padding-left: 22px;
    margin-bottom: 0px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
}

.container-checkbox-list input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
}

.container-checkbox-list .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 18px;
    width: 18px;
    background-color: #fff;
    border: 1px solid #b8b8b8;
}

.container-checkbox-list input:checked~.checkmark:after {
    display: block;
}

.container-checkbox-list input:checked~.checkmark:after {
    display: block;
}

.container-checkbox-list .checkmark:after {
    left: 5px;
    top: 3px;
    width: 5px;
    height: 9px;
    border: solid white;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
}

.container-checkbox-list .checkmark:after {
    content: "";
    position: absolute;
    display: none;
}

.container-checkbox-list:hover input~.checkmark {
    background-color: #ccc;
}

.container-checkbox-list .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 15px;
    width: 15px;
    background-color: #fff;
    border: 1px solid #b8b8b8;
}

.container-checkbox-list input:checked~.checkmark {
    background-color: #2196f3;
    border: none;
}

.list-check {
    margin-top: -21px;
}

.sale-return-bg {
    background: #fff3f3 !important;
}

.sale-return-bg:hover {
    background: #fff3f3 !important;
}

.sale-return-tag {
    background: #ffdcdc;
    margin-left: -7px;
    margin-top: -3px;
    border-radius: 0 8px 8px 0px;
    padding: 1px 10px;
    font-size: 10px;
    position: absolute;
}

.sale-return-tag a {
    color: #f46b6b !important;
}

.without-line-item-tag {
    background: #d8ecfb;
    color: #2096f3 !important;
    position: absolute;
    margin-left: -7px;
    margin-top: -3px;
    border-radius: 0 8px 8px 0px;
    padding: 1px 10px;
    font-size: 10px;
}

.without-line-item-tag a {
    font-weight: 500;
    color: #2096f3 !important;
}

.dot-icon {
    cursor: pointer;
    padding: 2px 5px;
    background: rgb(235, 240, 251);
    border-radius: 15px;
}

.dot-icon:hover {
    cursor: pointer;
    background: #1788e4;
    color: #fff;
}

.dropdown-menu .divider {
    height: 1px;
    margin: 0 0;
    overflow: hidden;
    background-color: #e5e5e5;
    z-index: 99;
}

.table-header {
    background-color: #f4f4f5;
    position: relative;
}

.mainsec-product {
    background: #e7e7e7;
    border-top: 1px solid #dee2e6;
}

.mainsec-product th {
    padding: 6px;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
}

.table-hover tbody tr:hover {
    color: #212529;
    background-color: rgba(0, 0, 0, 0.075);
}

.dropdown-menu {
    position: absolute;
    left: 0;
    z-index: 9;
    display: none;
    float: left;
    min-width: 10rem;
    padding: 6px 8px;
    margin: 0.125rem 0 0;
    font-size: 14px;
    color: #212529;
    text-align: left;
    list-style: none;
    background-color: #fff;
    background-clip: padding-box;
    border: none;
    border-radius: 0.25rem;
    right: 8px;
    z-index: 99;
    // box-shadow: 0 50px 100px rgba(50, 50, 93, 0.1), 0 15px 35px rgba(50, 50, 93, 0.15), 0 5px 15px rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 10px #c1c1c1;
}

.dropdown-menu>li>a {
    display: block;
    padding: 8px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
}

.dropdown-menu>li>a:hover {
    background-color: #ebf1fa;
    display: block;
    padding: 8px 20px;
    clear: both;
    font-weight: 400;
    line-height: 1.42857143;
    color: #333;
    white-space: nowrap;
    border-radius: 0;
    cursor: pointer;
}

.table>tbody>tr>td,
.table>tfoot>tr>td,
.table>thead>tr>td {
    padding: 4px 7px;
    border-left: none;
    border-right: none;
    word-break: break-word !important;
    vertical-align: middle;
}

#toTop {
    position: fixed;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
}

.btop-btn {
    background: #1788e4;
    /*padding: 10px;*/
    border-radius: 50px;
    color: #fff;
    height: 36px;
    width: 36px;
}

#toTop img {
    position: fixed;
    bottom: 16px;
    right: 16px;
    cursor: pointer;
}

.saleorder-drop {
    background: #717c91;
    color: #fff;
    font-weight: 100;
    font-size: 12px;
}

.saleorder-drop:hover {
    background: #717c91 !important;
    color: #fff !important;
    font-weight: 100;
}

.saleorder-drop th {
    width: 25%;
}

/******* End Sale, Purchase List  *******/

/******* Start Filter List  *******/

.filter-change {
    background: #fff;
    border: 1px solid #dde2e9 !important;
    cursor: pointer;
    margin-top: 21px;
    padding: 3px 5px;
    border-radius: 3px;
    color: #000;
    font-size: 15px;
}

.filter-change:hover {
    background: #fff;
    border: 1px solid #dde2e9 !important
}

.filter-change:focus {
    border: 1px solid #1391e6 !important;
    outline: 0;
    box-shadow: none;
}

.filter-left {
    padding-right: 12px;
}

.filter-right {
    padding-left: 12px;
}

.filter-left img {
    margin-top: 21px;
}

.filter-right img {
    margin-top: 21px;
}

.filter-filed label {
    font-weight: 500;
    margin-bottom: 2px;
    font-size: 12px;
    color: #8f8f8f;
}

.filter-container {
    padding: 2px 0 2px 11px;
    margin-bottom: 1px;
}

#filter_invoice {

    // margin: 0;
    .form-select {
        border: 1px solid #ebf1fa;
        cursor: pointer;
        padding: 4px 6px 4px 6px;
        height: 40px;
    }
}

.apply_btn {
    height: 32px;
    background-color: #1788e4 !important;
    color: #fff;
    padding: 0 39px;
    border: none;
    margin-top: 21px;
    border-radius: 0px;

}

.clear_all_btn {
    padding: 5px 15px;
    border-radius: 3px;
    font-size: 13px;
    margin: auto;
    color: #fff;
    background: #1889e5;
    cursor: pointer;
}

