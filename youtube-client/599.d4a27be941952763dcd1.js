(self.webpackChunkyoutube_client=self.webpackChunkyoutube_client||[]).push([[599],{1312:(t,e,i)=>{"use strict";i.r(e),i.d(e,{YoutubeModule:()=>At});var n=i(1116),s=i(1041),r=i(6861),o=i(1823),a=i(5366);let c=(()=>{class t{constructor(){this.transformed=[]}transform(t,e){return this.transformed=[...t],e.name===o.j5.ByTitle&&e.value.length>0&&this.filterByTitle(e.value),this.transformed}filterByTitle(t){t.forEach(t=>{this.transformed=this.transformed.filter(e=>e.snippet.title.match(new RegExp(t,"i")))})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Yjl({name:"filterBy",type:t,pure:!0}),t})(),l=(()=>{class t{constructor(){this.transformed=[]}transform(t,e){const{name:i,sortDirection:n}=e;return this.transformed=[...t],i===o.oi.ByDate&&this.sortByDate(n),i===o.oi.ByViewCount&&this.sortByViewCount(n),this.transformed}sortByDate(t){t===o.fF.Decrease&&this.sortByNewFirst(),t===o.fF.Increase&&this.sortByOldFirst()}sortByOldFirst(){this.transformed.sort((t,e)=>new Date(t.snippet.publishedAt)>new Date(e.snippet.publishedAt)?1:new Date(t.snippet.publishedAt)<new Date(e.snippet.publishedAt)?-1:0)}sortByNewFirst(){this.transformed.sort((t,e)=>new Date(e.snippet.publishedAt)>new Date(t.snippet.publishedAt)?1:new Date(e.snippet.publishedAt)<new Date(t.snippet.publishedAt)?-1:0)}sortByViewCount(t){t===o.fF.Decrease&&this.transformed.sort((t,e)=>Number(e.statistics.viewCount)-Number(t.statistics.viewCount)),t===o.fF.Increase&&this.transformed.sort((t,e)=>Number(t.statistics.viewCount)-Number(e.statistics.viewCount))}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=a.Yjl({name:"sortBy",type:t,pure:!0}),t})();var p=i(3645),u=i(207),d=i(4369),h=i(7307);let g=(()=>{class t{constructor(t){this.router=t}onCreate(){this.router.navigate(["youtube/admin-dashboard"])}onShowAllCards(){this.router.navigate(["youtube/admin-dashboard/cards"])}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(p.F0))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-sidebar"]],decls:8,vars:0,consts:[["mat-button","",1,"sidebar_button",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return e.onCreate()}),a._uU(1," Create card "),a.TgZ(2,"mat-icon"),a._uU(3,"add"),a.qZA(),a.qZA(),a.TgZ(4,"button",0),a.NdJ("click",function(){return e.onShowAllCards()}),a._uU(5," All cards "),a.TgZ(6,"mat-icon"),a._uU(7,"library_books"),a.qZA(),a.qZA())},directives:[d.lW,h.Hw],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;justify-content:center}.sidebar_button[_ngcontent-%COMP%]{margin:5px 10px;display:flex;align-items:center;justify-content:center}"]}),t})(),m=(()=>{class t{constructor(){this.toggleSidebar=new a.vpe,this.isOpen=!1}onToggle(){this.isOpen=!this.isOpen,this.toggleSidebar.emit(this.isOpen)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-sidebar-switcher"]],outputs:{toggleSidebar:"toggleSidebar"},decls:3,vars:0,consts:[["mat-flat-button","",1,"sidebar-switcher",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"button",0),a.NdJ("click",function(){return e.onToggle()}),a.TgZ(1,"mat-icon"),a._uU(2,"chevron_right"),a.qZA(),a.qZA())},directives:[d.lW,h.Hw],styles:[".sidebar-switcher[_ngcontent-%COMP%]{margin-bottom:10px}"]}),t})();var f=i(7570),Z=i(7012);const b=(0,Z.ZF)("videos"),_=(0,Z.P1)(b,t=>t.videos),y=(0,Z.P1)(b,t=>t.video),v=(0,Z.P1)(b,t=>t.localVideos);var O=i(9841),C=i(994),w=i(9235),x=i(3070),T=i(5522);function A(t,e){1&t&&(a.TgZ(0,"mat-icon",6),a._uU(1,"cancel"),a.qZA())}function q(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"mat-chip",4),a.NdJ("removed",function(){const e=a.CHM(t).$implicit;return a.oxw().remove(e)}),a._uU(1),a.YNc(2,A,2,0,"mat-icon",5),a.qZA()}if(2&t){const t=e.$implicit,i=a.oxw();a.Q6J("selectable",i.selectable)("removable",i.removable),a.xp6(1),a.hij(" ",t," "),a.xp6(1),a.Q6J("ngIf",i.removable)}}let S=(()=>{class t{constructor(t){this.settingsService=t,this.separatorKeysCodes=[w.L_],this.chips=[],this.selectable=!0,this.removable=!0,this.chipControl=new s.NI,this.filterByTitleOption=this.settingsService.optionsState[o.j5.ByTitle]}remove(t){const e=this.chips.indexOf(t);e>=0&&(this.chips.splice(e,1),this.filterByTitleOption.value=this.chips,this.filterByTitleOption.enabled&&this.chips.length<1&&(this.filterByTitleOption.enabled=!1),this.settingsService.filterByTitle$.next(this.filterByTitleOption))}add(t){const e=(t.value||"").trim();e&&(this.chips.push(e),this.filterByTitleOption.value=this.chips,this.filterByTitleOption.enabled||(this.filterByTitleOption.enabled=!0),this.settingsService.filterByTitle$.next(this.filterByTitleOption)),t.chipInput.clear(),this.chipControl.setValue(null)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(O.g))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-filter-by-chips"]],decls:7,vars:4,consts:[[1,"chip-input"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","Tipe and press Space","autocomplete","off",3,"formControl","matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],[3,"selectable","removable","removed"],["matChipRemove","",4,"ngIf"],["matChipRemove",""]],template:function(t,e){if(1&t&&(a.TgZ(0,"label"),a._uU(1,"Filter by word or sentance:"),a.qZA(),a.TgZ(2,"mat-form-field",0),a.TgZ(3,"mat-chip-list",null,1),a.YNc(5,q,3,4,"mat-chip",2),a.TgZ(6,"input",3),a.NdJ("matChipInputTokenEnd",function(t){return e.add(t)}),a.qZA(),a.qZA(),a.qZA()),2&t){const t=a.MAs(4);a.xp6(5),a.Q6J("ngForOf",e.chips),a.xp6(1),a.Q6J("formControl",e.chipControl)("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes)}},directives:[x.KE,T.qn,n.sg,s.Fj,T.oH,s.JJ,s.oH,T.HS,n.O5,h.Hw,T.qH],styles:["[_nghost-%COMP%]{display:flex;align-items:flex-end}.checkbox[_ngcontent-%COMP%]{padding:0 10px}.chip-input[_ngcontent-%COMP%]{flex-basis:40%;min-width:-webkit-fit-content;min-width:-moz-fit-content;min-width:fit-content;padding:0 15px}"]}),t})();function I(t,e){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"button",1),a.NdJ("click",function(){return a.CHM(t),a.oxw().togleOrderDirection()}),a.TgZ(2,"mat-icon"),a._uU(3,"trending_up"),a.qZA(),a.qZA(),a.BQk()}}function D(t,e){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"button",1),a.NdJ("click",function(){return a.CHM(t),a.oxw().togleOrderDirection()}),a.TgZ(2,"mat-icon"),a._uU(3,"trending_down"),a.qZA(),a.qZA(),a.BQk()}}let B=(()=>{class t{constructor(){this.isInIncresingOrder=!1,this.changeOderDirection=new a.vpe}ngOnInit(){this.sortDirection===o.fF.Increase&&(this.isInIncresingOrder=!0)}togleOrderDirection(){this.isInIncresingOrder=!this.isInIncresingOrder,this.changeOderDirection.emit(this.isInIncresingOrder?o.fF.Increase:o.fF.Decrease)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-sort-direction"]],inputs:{sortDirection:"sortDirection"},outputs:{changeOderDirection:"changeOderDirection"},decls:2,vars:2,consts:[[4,"ngIf"],["mat-mini-fab","",3,"click"]],template:function(t,e){1&t&&(a.YNc(0,I,4,0,"ng-container",0),a.YNc(1,D,4,0,"ng-container",0)),2&t&&(a.Q6J("ngIf",e.isInIncresingOrder),a.xp6(1),a.Q6J("ngIf",!e.isInIncresingOrder))},directives:[n.O5,d.lW,h.Hw],styles:["[_nghost-%COMP%]{position:absolute;right:20px}"]}),t})();function U(t,e){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"app-sort-direction",5),a.NdJ("changeOderDirection",function(e){return a.CHM(t),a.oxw().changeDateSortDirection(e)}),a.qZA(),a.BQk()}if(2&t){const t=a.oxw();a.xp6(1),a.Q6J("sortDirection",t.sortOptionsState.date.sortDirection)}}function M(t,e){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"app-sort-direction",5),a.NdJ("changeOderDirection",function(e){return a.CHM(t),a.oxw().changeViewCountSortDirection(e)}),a.qZA(),a.BQk()}if(2&t){const t=a.oxw();a.xp6(1),a.Q6J("sortDirection",t.sortOptionsState.viewCount.sortDirection)}}let P=(()=>{class t{constructor(t,e){this.fb=t,this.settingsService=e,this.sortOptionsState={[o.oi.ByDate]:this.settingsService.optionsState[o.oi.ByDate],[o.oi.ByViewCount]:this.settingsService.optionsState[o.oi.ByViewCount]},this.sortOptions=this.fb.group({[o.oi.ByDate]:this.sortOptionsState[o.oi.ByDate].enabled,[o.oi.ByViewCount]:this.sortOptionsState[o.oi.ByViewCount].enabled}),this.subscriptions=new f.w,this.subscriptions.add(this.sortOptions.controls[o.oi.ByDate].valueChanges.subscribe(t=>{t?(this.switchEnabledOption(o.oi.ByDate),this.settingsService.sortByDate$.next(this.sortOptionsState[o.oi.ByDate])):(this.sortOptionsState[o.oi.ByDate].enabled=!1,this.settingsService.sortByDate$.next(this.sortOptionsState[o.oi.ByDate]))})),this.subscriptions.add(this.sortOptions.controls[o.oi.ByViewCount].valueChanges.subscribe(t=>{t?(this.switchEnabledOption(o.oi.ByViewCount),this.settingsService.sortByViewCount$.next(this.sortOptionsState[o.oi.ByViewCount])):(this.sortOptionsState[o.oi.ByViewCount].enabled=!1,this.settingsService.sortByViewCount$.next(this.sortOptionsState[o.oi.ByViewCount]))}))}ngOnDestroy(){this.subscriptions.unsubscribe()}changeViewCountSortDirection(t){this.sortOptionsState[o.oi.ByViewCount].sortDirection=t,this.settingsService.sortByViewCount$.next(this.sortOptionsState[o.oi.ByViewCount])}changeDateSortDirection(t){this.sortOptionsState[o.oi.ByDate].sortDirection=t,this.settingsService.sortByViewCount$.next(this.sortOptionsState[o.oi.ByDate])}isSomeOtherSortOptionEnabled(t){const e=Object.entries(this.sortOptionsState).find(e=>!0===e[1].enabled&&e[1].name!==t);return e?e[1]:null}switchEnabledOption(t){this.disableSomeEnabled(t),this.sortOptionsState[t].enabled=!0}disableSomeEnabled(t){const e=this.isSomeOtherSortOptionEnabled(t);e&&(this.sortOptionsState[e.name].enabled=!1,this.sortOptions.controls[e.name].setValue(!1))}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.qu),a.Y36(O.g))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-settings"]],decls:12,vars:3,consts:[[1,"sort-option__list",3,"formGroup"],[1,"sort-option"],["formControlName","date",1,"checkbox"],[4,"ngIf"],["formControlName","viewCount",1,"checkbox"],[3,"sortDirection","changeOderDirection"]],template:function(t,e){1&t&&(a.TgZ(0,"label"),a._uU(1,"Sort by:"),a.qZA(),a.TgZ(2,"mat-radio-group",0),a.TgZ(3,"section",1),a.TgZ(4,"mat-checkbox",2),a._uU(5," Date "),a.qZA(),a.YNc(6,U,2,1,"ng-container",3),a.qZA(),a.TgZ(7,"section",1),a.TgZ(8,"mat-checkbox",4),a._uU(9," Count of views "),a.qZA(),a.YNc(10,M,2,1,"ng-container",3),a.qZA(),a.qZA(),a._UZ(11,"app-filter-by-chips")),2&t&&(a.xp6(2),a.Q6J("formGroup",e.sortOptions),a.xp6(4),a.Q6J("ngIf",e.sortOptionsState.date.enabled),a.xp6(4),a.Q6J("ngIf",e.sortOptionsState.viewCount.enabled))},directives:[s.JL,s.sg,C.oG,s.JJ,s.u,n.O5,S,B],styles:["[_nghost-%COMP%]{display:flex;align-items:flex-end}[_nghost-%COMP%]     .mat-form-field-wrapper{margin-bottom:-1.34375em}.sort-option[_ngcontent-%COMP%], .sort-option__list[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center}.sort-option[_ngcontent-%COMP%]{padding:0 70px 0 10px;position:relative}"]}),t})();var J=i(5147),F=i(9857),N=i(2797),k=function(t){return t.Recent="search-item_recent",t.LessThanMonth="search-item_less-than-month",t.LongAgo="search-item_long-ago",t}({});let Q=(()=>{class t{constructor(t,e){this.elementRef=t,this.renderer2=e,this.classes=k}ngOnInit(){this.assignClass()}assignClass(){if(this.date&&!Number.isNaN(Date.parse(this.date))){const t=864e5;Date.parse(this.date)>Date.now()-7*t?this.renderer2.addClass(this.elementRef.nativeElement,k.Recent):Date.parse(this.date)>Date.now()-30*t?this.renderer2.addClass(this.elementRef.nativeElement,k.LessThanMonth):this.renderer2.addClass(this.elementRef.nativeElement,k.LongAgo)}else this.renderer2.addClass(this.elementRef.nativeElement,k.LongAgo)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(a.SBq),a.Y36(a.Qsj))},t.\u0275dir=a.lG2({type:t,selectors:[["","appColorizeByPublishDate",""]],inputs:{date:["appColorizeByPublishDate","date"]}}),t})(),Y=(()=>{class t{constructor(t,e){this.router=t,this.store=e}onShowDetailedInfo(){this.router.navigate([`youtube/detailed-info/${this.searchItem.id}`])}onDelete(){this.store.dispatch((0,F.FM)({id:this.searchItem.id}))}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(p.F0),a.Y36(Z.yh))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-search-item"]],inputs:{searchItem:"searchItem"},decls:38,vars:13,consts:[[1,"card",3,"appColorizeByPublishDate"],[1,"content__container"],["mat-card-image","",3,"src","width","height"],[1,"statistics"],[1,"statistics__item"],[1,"actions"],[1,"action"],["mat-button","","color","primary",1,"action__button",3,"click"]],template:function(t,e){1&t&&(a.TgZ(0,"mat-card",0),a.TgZ(1,"div",1),a._UZ(2,"img",2),a.TgZ(3,"mat-card-content"),a.TgZ(4,"section",3),a.TgZ(5,"div",4),a.TgZ(6,"mat-icon"),a._uU(7,"visibility"),a.qZA(),a.TgZ(8,"span"),a._uU(9),a.qZA(),a.qZA(),a.TgZ(10,"div",4),a.TgZ(11,"mat-icon"),a._uU(12,"favorite"),a.qZA(),a.TgZ(13,"span"),a._uU(14),a.qZA(),a.qZA(),a.TgZ(15,"div",4),a.TgZ(16,"mat-icon"),a._uU(17,"thumb_down"),a.qZA(),a.TgZ(18,"span"),a._uU(19),a.qZA(),a.qZA(),a.TgZ(20,"div",4),a.TgZ(21,"mat-icon"),a._uU(22,"chat"),a.qZA(),a.TgZ(23,"span"),a._uU(24),a.qZA(),a.qZA(),a.qZA(),a.TgZ(25,"div"),a.TgZ(26,"span"),a._uU(27),a.ALo(28,"date"),a.qZA(),a.qZA(),a.qZA(),a.TgZ(29,"mat-card-header"),a.TgZ(30,"mat-card-title"),a._uU(31),a.qZA(),a.qZA(),a.TgZ(32,"div",5),a.TgZ(33,"mat-card-actions",6),a.TgZ(34,"button",7),a.NdJ("click",function(){return e.onShowDetailedInfo()}),a._uU(35,"More"),a.qZA(),a.TgZ(36,"button",7),a.NdJ("click",function(){return e.onDelete()}),a._uU(37,"Delete"),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&t&&(a.Q6J("appColorizeByPublishDate",e.searchItem.snippet.publishedAt),a.xp6(2),a.Q6J("src",e.searchItem.snippet.thumbnails.high.url,a.LSH)("width",e.searchItem.snippet.thumbnails.high.width)("height",e.searchItem.snippet.thumbnails.high.height),a.xp6(7),a.Oqu(null==e.searchItem.statistics?null:e.searchItem.statistics.viewCount),a.xp6(5),a.Oqu(null==e.searchItem.statistics?null:e.searchItem.statistics.likeCount),a.xp6(5),a.Oqu(null==e.searchItem.statistics?null:e.searchItem.statistics.dislikeCount),a.xp6(5),a.Oqu(null==e.searchItem.statistics?null:e.searchItem.statistics.commentCount),a.xp6(3),a.Oqu(a.xi3(28,10,e.searchItem.snippet.publishedAt,"medium")),a.xp6(4),a.Oqu(e.searchItem.snippet.title))},directives:[N.a8,Q,N.G2,N.dn,h.Hw,N.dk,N.n5,N.hq,d.lW],pipes:[n.uU],styles:["[_nghost-%COMP%]{display:flex;padding:0 10px;margin-bottom:20px}.search-item_recent[_ngcontent-%COMP%]{border-bottom:4px solid blue}.search-item_less-than-month[_ngcontent-%COMP%]{border-bottom:4px solid green}.search-item_long-ago[_ngcontent-%COMP%]{border-bottom:4px solid red}.card[_ngcontent-%COMP%]   .content__container[_ngcontent-%COMP%]{width:100%;height:100%;display:flex;flex-direction:column}.card[_ngcontent-%COMP%]   .mat-card-header[_ngcontent-%COMP%]{flex-grow:2}.card[_ngcontent-%COMP%]   .mat-card-image[_ngcontent-%COMP%]{height:auto}.card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]{flex-basis:70%}.card[_ngcontent-%COMP%]   .actions[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   .action__button[_ngcontent-%COMP%]{width:100%}.card[_ngcontent-%COMP%]   .statistics[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-around}.card[_ngcontent-%COMP%]   .statistics__item[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin:0 0 10px;border-radius:8px}.card[_ngcontent-%COMP%]   .statistics__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 5px}"],changeDetection:0}),t})();function E(t,e){1&t&&(a.ynx(0),a._UZ(1,"app-settings",4),a.BQk())}function V(t,e){1&t&&a._UZ(0,"app-search-item",10),2&t&&a.Q6J("searchItem",e.$implicit)}function L(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"div",7),a.TgZ(2,"div",8),a.YNc(3,V,1,1,"app-search-item",9),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw(2);a.xp6(3),a.Q6J("ngForOf",t.searchResultList)}}function j(t,e){1&t&&a._UZ(0,"app-search-item",10),2&t&&a.Q6J("searchItem",e.$implicit)}function R(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"div",7),a.TgZ(2,"div",8),a.YNc(3,j,1,1,"app-search-item",9),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw(2);a.xp6(3),a.Q6J("ngForOf",t.customVideoList)}}function G(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"mat-accordion",5),a.TgZ(2,"mat-expansion-panel",6),a.TgZ(3,"mat-expansion-panel-header"),a.TgZ(4,"mat-panel-title"),a._uU(5," Videos from Youtube "),a.qZA(),a.qZA(),a.YNc(6,L,4,1,"ng-container",1),a.qZA(),a.TgZ(7,"mat-expansion-panel",6),a.TgZ(8,"mat-expansion-panel-header"),a.TgZ(9,"mat-panel-title"),a._uU(10," My Videos "),a.qZA(),a.qZA(),a.YNc(11,R,4,1,"ng-container",1),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw(),e=a.MAs(5);a.xp6(1),a.Q6J("multi",!0),a.xp6(1),a.Q6J("expanded",!0),a.xp6(4),a.Q6J("ngIf",t.searchResultList.length)("ngIfElse",e),a.xp6(1),a.Q6J("expanded",!0),a.xp6(4),a.Q6J("ngIf",t.customVideoList.length)("ngIfElse",e)}}function H(t,e){1&t&&a._UZ(0,"app-search-item",10),2&t&&a.Q6J("searchItem",e.$implicit)}function $(t,e){if(1&t&&(a.ynx(0),a.TgZ(1,"div",7),a.TgZ(2,"div",8),a.YNc(3,H,1,1,"app-search-item",9),a.qZA(),a.qZA(),a.BQk()),2&t){const t=a.oxw(2);a.xp6(3),a.Q6J("ngForOf",t.customVideoList)}}function X(t,e){if(1&t&&a.YNc(0,$,4,1,"ng-container",1),2&t){const t=a.oxw(),e=a.MAs(5);a.Q6J("ngIf",t.customVideoList.length)("ngIfElse",e)}}function W(t,e){1&t&&(a.TgZ(0,"div",7),a.TgZ(1,"p"),a._uU(2,"No Results..."),a.qZA(),a.qZA())}let z=(()=>{class t{constructor(t,e,i,n,s,r){this.settingsService=t,this.videoService=e,this.sortPipe=i,this.filterPipe=n,this.store=s,this.route=r,this.isSettingsActive=!1,this.subscriptions=new f.w,this.searchResultList=[],this.customVideoList=[],this.subscriptions.add(this.store.select(v).subscribe(t=>this.customVideoList=t)),this.subscriptions.add(this.store.select(_).subscribe(t=>this.searchResultList=t)),this.settingsOptionsStatus={[o.oi.ByDate]:this.settingsService.optionsState[o.oi.ByDate].enabled,[o.oi.ByViewCount]:this.settingsService.optionsState[o.oi.ByViewCount].enabled,[o.j5.ByTitle]:this.settingsService.optionsState[o.j5.ByTitle].enabled,[o.j5.ByTags]:this.settingsService.optionsState[o.j5.ByTags].enabled},this.subscriptions.add(this.route.url.subscribe(t=>{this.currentPage=t[0].path})),this.subscriptions.add(this.settingsService.isSettingsActive$.subscribe(t=>this.isSettingsActive=t)),this.subscriptions.add(this.settingsService.sortByDate$.subscribe(t=>{this.updateOptionStatus(t),this.transform(t)})),this.subscriptions.add(this.settingsService.sortByViewCount$.subscribe(t=>{this.updateOptionStatus(t),this.transform(t)})),this.subscriptions.add(this.settingsService.filterByTitle$.subscribe(t=>{this.updateOptionStatus(t),this.recoverSearchResultList(),this.searchResultList=this.filterPipe.transform(this.searchResultList,t),this.isSomeSortOptionEnabled()&&(this.settingsOptionsStatus[o.oi.ByDate]&&(this.searchResultList=this.sortPipe.transform(this.searchResultList,this.settingsService.optionsState[o.oi.ByDate])),this.settingsOptionsStatus[o.oi.ByViewCount]&&(this.searchResultList=this.sortPipe.transform(this.searchResultList,this.settingsService.optionsState[o.oi.ByViewCount])))}))}ngOnDestroy(){this.subscriptions.unsubscribe()}updateOptionStatus(t){this.settingsOptionsStatus[t.name]!==t.enabled&&(this.settingsOptionsStatus=Object.assign(Object.assign({},this.settingsOptionsStatus),{[t.name]:t.enabled}),this.areAllSettingstOptionsDisabled()&&this.recoverSearchResultList())}transform(t){t.enabled&&(this.searchResultList=this.sortPipe.transform(this.searchResultList,t))}isSomeSortOptionEnabled(){return Object.values(this.settingsOptionsStatus).some(t=>!0===t)}areAllSettingstOptionsDisabled(){return Object.values(this.settingsOptionsStatus).every(t=>!1===t)}recoverSearchResultList(){this.searchResultList=this.videoService.videoItems}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(O.g),a.Y36(O.k),a.Y36(l),a.Y36(c),a.Y36(Z.yh),a.Y36(p.gz))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-search-result"]],decls:6,vars:3,consts:[[4,"ngIf"],[4,"ngIf","ngIfElse"],["adminDashboard",""],["noResults",""],[1,"settings__container"],[3,"multi"],[1,"expansion-panel",3,"expanded"],[1,"search-result__container"],[1,"search-result__content"],[3,"searchItem",4,"ngFor","ngForOf"],[3,"searchItem"]],template:function(t,e){if(1&t&&(a.YNc(0,E,2,0,"ng-container",0),a.YNc(1,G,12,7,"ng-container",1),a.YNc(2,X,1,2,"ng-template",null,2,a.W1O),a.YNc(4,W,3,0,"ng-template",null,3,a.W1O)),2&t){const t=a.MAs(3);a.Q6J("ngIf",e.isSettingsActive),a.xp6(1),a.Q6J("ngIf","admin-dashboard"!==e.currentPage)("ngIfElse",t)}},directives:[n.O5,P,J.pp,J.ib,J.yz,J.yK,n.sg,Y],styles:[".expansion-panel[_ngcontent-%COMP%]{margin-left:20px;margin-right:20px}.search-result__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:15px 0}.settings__container[_ngcontent-%COMP%]{display:flex;justify-content:center;flex-basis:100%;padding:0 10% 30px;min-height:75px}.search-result__content[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,auto));width:90%;margin:0 auto}"]}),t})();const K=["drawer"];let tt=(()=>{class t{onToggle(){this.drawer.toggle()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-main-page"]],viewQuery:function(t,e){if(1&t&&a.Gf(K,5),2&t){let t;a.iGM(t=a.CRH())&&(e.drawer=t.first)}},decls:7,vars:0,consts:[[1,"drawer-container"],["mode","side"],["drawer",""],[3,"toggleSidebar"]],template:function(t,e){1&t&&(a.TgZ(0,"mat-drawer-container",0),a.TgZ(1,"mat-drawer",1,2),a._UZ(3,"app-sidebar"),a.qZA(),a.TgZ(4,"mat-drawer-content"),a.TgZ(5,"app-sidebar-switcher",3),a.NdJ("toggleSidebar",function(){return e.onToggle()}),a.qZA(),a._UZ(6,"app-search-result"),a.qZA(),a.qZA())},directives:[u.kh,u.jA,g,u.LW,m,z],styles:["[_nghost-%COMP%]{display:flex;flex-grow:2;min-width:100%;padding:0 20px}.drawer-container[_ngcontent-%COMP%]{min-width:100%}"]}),t})();var et=i(878),it=i(4689),nt=i(3390),st=i(7474);function rt(t,e){if(1&t){const t=a.EpF();a.ynx(0),a.TgZ(1,"button",2),a.NdJ("click",function(){return a.CHM(t),a.oxw().onGoBack()}),a.TgZ(2,"mat-icon"),a._uU(3,"chevron_left"),a.qZA(),a.qZA(),a.TgZ(4,"mat-card",3),a.TgZ(5,"div",4),a._UZ(6,"img",5),a.qZA(),a.TgZ(7,"mat-card-content",6),a.TgZ(8,"mat-card-header"),a.TgZ(9,"mat-card-title"),a._uU(10),a.qZA(),a.TgZ(11,"mat-card-subtitle"),a._uU(12),a.ALo(13,"date"),a.qZA(),a.qZA(),a.TgZ(14,"div",7),a.TgZ(15,"div"),a.TgZ(16,"strong"),a._uU(17,"Description:"),a.qZA(),a.qZA(),a.TgZ(18,"div"),a._uU(19),a.qZA(),a.qZA(),a.TgZ(20,"section",8),a.TgZ(21,"div",9),a.TgZ(22,"mat-icon"),a._uU(23,"visibility"),a.qZA(),a.TgZ(24,"span"),a._uU(25),a.qZA(),a.qZA(),a.TgZ(26,"div",9),a.TgZ(27,"mat-icon"),a._uU(28,"favorite"),a.qZA(),a.TgZ(29,"span"),a._uU(30),a.qZA(),a.qZA(),a.TgZ(31,"div",9),a.TgZ(32,"mat-icon"),a._uU(33,"thumb_down"),a.qZA(),a.TgZ(34,"span"),a._uU(35),a.qZA(),a.qZA(),a.TgZ(36,"div",9),a.TgZ(37,"mat-icon"),a._uU(38,"chat"),a.qZA(),a.TgZ(39,"span"),a._uU(40),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.BQk()}if(2&t){const t=a.oxw();a.xp6(6),a.Q6J("src",t.video.snippet.thumbnails.high.url,a.LSH)("alt",t.video.snippet.title),a.xp6(4),a.Oqu(t.video.snippet.title),a.xp6(2),a.Oqu(a.xi3(13,9,t.video.snippet.publishedAt,"medium")),a.xp6(7),a.Oqu(t.video.snippet.description),a.xp6(6),a.Oqu(null==t.video.statistics?null:t.video.statistics.viewCount),a.xp6(5),a.Oqu(null==t.video.statistics?null:t.video.statistics.likeCount),a.xp6(5),a.Oqu(null==t.video.statistics?null:t.video.statistics.dislikeCount),a.xp6(5),a.Oqu(null==t.video.statistics?null:t.video.statistics.commentCount)}}function ot(t,e){1&t&&a._UZ(0,"app-spinner")}let at=(()=>{class t{constructor(t,e,i){this.route=t,this.router=e,this.store=i,this.id="",this.videoInfo$=this.store.select(y),this.video=null,this.subscriptions=new f.w}ngOnInit(){this.subscriptions.add(this.route.params.pipe((0,it.w)(t=>(0,et.of)(t.id))).subscribe(t=>{var e;"string"==typeof t&&t.includes(nt.Fe)?this.videoInfo$=this.store.select((e={id:t},(0,Z.P1)(b,t=>t.localVideos.find(t=>t.id===e.id)||null))):this.store.dispatch((0,F.mJ)({id:t}))})),this.subscriptions.add(this.videoInfo$.subscribe(t=>{console.log(t),t&&(this.video=t)}))}ngOnDestroy(){this.subscriptions.unsubscribe()}onGoBack(){this.router.navigate(["youtube"])}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(p.gz),a.Y36(p.F0),a.Y36(Z.yh))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-detailed-info"]],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["detailedInfoSpinner",""],["mat-flat-button","",3,"click"],[1,"card"],[1,"card-image__wrapper"],[1,"card-image",3,"src","alt"],[1,"card__content"],[1,"card-description"],[1,"statistics"],[1,"statistics__item"]],template:function(t,e){if(1&t&&(a.YNc(0,rt,41,12,"ng-container",0),a.YNc(1,ot,1,0,"ng-template",null,1,a.W1O)),2&t){const t=a.MAs(2);a.Q6J("ngIf",e.video)("ngIfElse",t)}},directives:[n.O5,d.lW,h.Hw,N.a8,N.dn,N.dk,N.n5,N.$j,st.O],pipes:[n.uU],styles:["[_nghost-%COMP%]{display:flex}.card[_ngcontent-%COMP%]{width:90%;display:flex;margin:0 auto 30px}.card-image__wrapper[_ngcontent-%COMP%]{flex-basis:70%;display:flex;align-items:center;justify-content:center;padding:0 16px 0 0}.card-image[_ngcontent-%COMP%]{max-width:100%}.card__content[_ngcontent-%COMP%]{flex-basis:30%;display:flex;flex-direction:column;justify-content:space-between}.statistics[_ngcontent-%COMP%]{justify-content:space-around;padding:10px 0 0}.statistics[_ngcontent-%COMP%], .statistics__item[_ngcontent-%COMP%]{display:flex;align-items:center}.statistics__item[_ngcontent-%COMP%]{justify-content:center;border-radius:8px}.statistics__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{padding:0 5px}"]}),t})(),ct=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-detailed-info-page"]],decls:1,vars:0,template:function(t,e){1&t&&a._UZ(0,"app-detailed-info")},directives:[at],styles:["[_nghost-%COMP%]{flex-grow:2;display:flex;justify-content:center;align-items:center}"]}),t})();var lt=i(4232),pt=i(9550);function ut(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Please enter a valid title. "),a.qZA())}function dt(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Title is required. "),a.qZA())}function ht(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Please enter a valid description. "),a.qZA())}function gt(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Description is required. "),a.qZA())}function mt(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Please enter a valid thumbnail URL. "),a.qZA())}function ft(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Thumbnail URL is required. "),a.qZA())}function Zt(t,e){if(1&t){const t=a.EpF();a.TgZ(0,"mat-chip",11),a.NdJ("removed",function(){const e=a.CHM(t).$implicit;return a.oxw().removeChip(e)}),a._uU(1),a.TgZ(2,"mat-icon",12),a._uU(3,"cancel"),a.qZA(),a.qZA()}if(2&t){const t=e.$implicit;a.Q6J("selectable",!0)("removable",!0),a.xp6(1),a.hij(" ",t," ")}}function bt(t,e){1&t&&(a.TgZ(0,"mat-error"),a._uU(1," Tags are required. "),a.qZA())}let _t=(()=>{class t{constructor(e,i){this.fb=e,this.store=i,this.separatorKeysCodes=[w.L_],this.formData={title:"",description:"",thumbnailUrl:"",channelTitle:"",tags:[],publishedAt:""},this.cardFormGroup=this.fb.group({title:[null,[s.kI.required,t.noWhitespaceValidator]],description:[null,[s.kI.required,t.noWhitespaceValidator]],thumbnailUrl:[null,[s.kI.required,t.noWhitespaceValidator]],tags:[[],[s.kI.required]]}),this.subscriptions=new f.w,this.subscriptions.add(this.cardFormGroup.valueChanges.subscribe(t=>this.formData=t))}ngOnDestroy(){this.subscriptions.unsubscribe()}onSubmit(){const{title:t,description:e,thumbnailUrl:i,tags:n}=this.formData;if(!this.doControlsHaveAnyErrors()&&t&&e&&i&&n){const s={source:nt.Fe,id:`${nt.Fe}${(0,lt.Z)()}`,snippet:{publishedAt:(new Date).toISOString(),title:t,description:e,thumbnails:{high:{url:i,height:480,width:360}},channelTitle:"My Videos",tags:n},statistics:{viewCount:"0",likeCount:"0",dislikeCount:"0",favoriteCount:"0",commentCount:"0"}};this.store.dispatch((0,F.cN)({videoInfo:s})),this.resetForm()}}resetForm(){this.cardFormGroup.reset(),Object.keys(this.cardFormGroup.controls).forEach(t=>{this.cardFormGroup.controls[t].setErrors(null)})}doControlsHaveAnyErrors(){return Object.values(this.cardFormGroup.controls).every(t=>!!t.errors)}static noWhitespaceValidator(t){return 0===(t.value||"").trim().length?{whitespace:!0}:null}addChip(t){const e=(t.value||"").trim();e&&this.cardFormGroup.controls.tags.setValue([...this.cardFormGroup.controls.tags.value,e]),t.chipInput.clear()}removeChip(t){const e=this.formData.tags.indexOf(t);e>=0&&this.formData.tags.splice(e,1)}}return t.\u0275fac=function(e){return new(e||t)(a.Y36(s.qu),a.Y36(Z.yh))},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-card-form"]],decls:29,vars:11,consts:[[1,"card-form",3,"formGroup","ngSubmit"],[1,"card-form__field"],["type","text","autocomplete","off","matInput","","formControlName","title","maxlength","10"],[4,"ngIf"],["type","description","autocomplete","off","matInput","","formControlName","description","maxlength","10"],["type","thumbnailUrl","autocomplete","off","matInput","","formControlName","thumbnailUrl"],["formControlName","tags"],["chipList",""],[3,"selectable","removable","removed",4,"ngFor","ngForOf"],["placeholder","Tipe and press Space","autocomplete","off",3,"matChipInputFor","matChipInputSeparatorKeyCodes","matChipInputTokenEnd"],["mat-button","","type","submit",1,"card-form__button_submit"],[3,"selectable","removable","removed"],["matChipRemove",""]],template:function(t,e){if(1&t&&(a.TgZ(0,"form",0),a.NdJ("ngSubmit",function(){return e.onSubmit()}),a.TgZ(1,"mat-form-field",1),a.TgZ(2,"mat-label"),a._uU(3,"Title"),a.qZA(),a._UZ(4,"input",2),a.YNc(5,ut,2,0,"mat-error",3),a.YNc(6,dt,2,0,"mat-error",3),a.qZA(),a.TgZ(7,"mat-form-field",1),a.TgZ(8,"mat-label"),a._uU(9,"Description"),a.qZA(),a._UZ(10,"input",4),a.YNc(11,ht,2,0,"mat-error",3),a.YNc(12,gt,2,0,"mat-error",3),a.qZA(),a.TgZ(13,"mat-form-field",1),a.TgZ(14,"mat-label"),a._uU(15,"Thumbnail URL"),a.qZA(),a._UZ(16,"input",5),a.YNc(17,mt,2,0,"mat-error",3),a.YNc(18,ft,2,0,"mat-error",3),a.qZA(),a.TgZ(19,"mat-form-field",1),a.TgZ(20,"mat-label"),a._uU(21,"Tags"),a.qZA(),a.TgZ(22,"mat-chip-list",6,7),a.YNc(24,Zt,4,3,"mat-chip",8),a.TgZ(25,"input",9),a.NdJ("matChipInputTokenEnd",function(t){return e.addChip(t)}),a.qZA(),a.qZA(),a.YNc(26,bt,2,0,"mat-error",3),a.qZA(),a.TgZ(27,"button",10),a._uU(28,"Create"),a.qZA(),a.qZA()),2&t){const t=a.MAs(23);a.Q6J("formGroup",e.cardFormGroup),a.xp6(5),a.Q6J("ngIf",e.cardFormGroup.controls.title.hasError("whitespace")&&!e.cardFormGroup.controls.title.hasError("required")),a.xp6(1),a.Q6J("ngIf",e.cardFormGroup.controls.title.hasError("required")),a.xp6(5),a.Q6J("ngIf",e.cardFormGroup.controls.description.hasError("whitespace")&&!e.cardFormGroup.controls.description.hasError("required")),a.xp6(1),a.Q6J("ngIf",e.cardFormGroup.controls.description.hasError("required")),a.xp6(5),a.Q6J("ngIf",e.cardFormGroup.controls.thumbnailUrl.hasError("whitespace")&&!e.cardFormGroup.controls.thumbnailUrl.hasError("required")),a.xp6(1),a.Q6J("ngIf",e.cardFormGroup.controls.thumbnailUrl.hasError("required")),a.xp6(6),a.Q6J("ngForOf",e.formData.tags),a.xp6(1),a.Q6J("matChipInputFor",t)("matChipInputSeparatorKeyCodes",e.separatorKeysCodes),a.xp6(1),a.Q6J("ngIf",e.cardFormGroup.controls.tags.hasError("tagsrequired"))}},directives:[s._Y,s.JL,s.sg,x.KE,x.hX,pt.Nt,s.Fj,s.JJ,s.u,s.nD,n.O5,T.qn,n.sg,T.oH,d.lW,x.TO,T.HS,h.Hw,T.qH],styles:[".card-form[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;width:100%;margin:auto;padding:25px 0}.card-form__field[_ngcontent-%COMP%]{width:50%;margin:0 auto 15px}.card-form__button_submit[_ngcontent-%COMP%]{width:150px;margin:auto}"]}),t})(),yt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-card"]],decls:8,vars:0,consts:[[1,"video-card"],[1,"video-card__header"]],template:function(t,e){1&t&&(a.TgZ(0,"mat-card",0),a.TgZ(1,"mat-card-header",1),a.TgZ(2,"mat-icon"),a._uU(3,"create"),a.qZA(),a.TgZ(4,"mat-card-title"),a._uU(5,"Create new card"),a.qZA(),a.qZA(),a.TgZ(6,"mat-card-content"),a._UZ(7,"app-card-form"),a.qZA(),a.qZA())},directives:[N.a8,N.dk,h.Hw,N.n5,N.dn,_t],styles:[".video-card[_ngcontent-%COMP%]{width:500px;margin:auto}.video-card__header[_ngcontent-%COMP%]{display:flex;justify-content:center}"]}),t})(),vt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin-dashboard"]],decls:1,vars:0,template:function(t,e){1&t&&a._UZ(0,"app-card")},directives:[yt],styles:["[_nghost-%COMP%]{display:flex;justify-content:center;align-items:center;flex-grow:2}"]}),t})();const Ot=["drawer"];let Ct=(()=>{class t{onToggle(){this.drawer.toggle()}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-admin-page"]],viewQuery:function(t,e){if(1&t&&a.Gf(Ot,5),2&t){let t;a.iGM(t=a.CRH())&&(e.drawer=t.first)}},decls:7,vars:0,consts:[[1,"drawer-container"],["mode","side"],["drawer",""],[3,"toggleSidebar"]],template:function(t,e){1&t&&(a.TgZ(0,"mat-drawer-container",0),a.TgZ(1,"mat-drawer",1,2),a._UZ(3,"app-sidebar"),a.qZA(),a.TgZ(4,"mat-drawer-content"),a.TgZ(5,"app-sidebar-switcher",3),a.NdJ("toggleSidebar",function(){return e.onToggle()}),a.qZA(),a._UZ(6,"app-admin-dashboard"),a.qZA(),a.qZA())},directives:[u.kh,u.jA,g,u.LW,m,vt],styles:["[_nghost-%COMP%]{display:flex;flex-grow:2;min-width:100%}.drawer-container[_ngcontent-%COMP%]{min-width:100%}"]}),t})();const wt=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=a.Xpm({type:t,selectors:[["app-youtube"]],decls:1,vars:0,template:function(t,e){1&t&&a._UZ(0,"router-outlet")},directives:[p.lC],styles:["[_nghost-%COMP%]{flex-grow:2;display:flex}"]}),t})(),children:[{path:"search-result",component:tt},{path:"detailed-info/:id",component:ct},{path:"admin-dashboard",component:Ct},{path:"admin-dashboard/cards",component:tt},{path:"",redirectTo:"search-result",pathMatch:"full"}]}];let xt=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({imports:[[p.Bz.forChild(wt)],p.Bz]}),t})();var Tt=i(5425);let At=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=a.oAB({type:t}),t.\u0275inj=a.cJS({providers:[l,c],imports:[[n.ez,s.u5,s.UX,r.q,Tt.m,xt]]}),t})()}}]);