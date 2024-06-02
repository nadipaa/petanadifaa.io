// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/AttributeTable/utils":function(){define("dojo/_base/lang dojo/_base/array jimu/LayerInfos/LayerInfos dojo/Deferred dojo/promise/all dojo/on exports dojo/store/Observable dojo/store/Cache dojo/store/Memory esri/lang ./table/FeatureLayerQueryStore jimu/ArcadeUtils esri/ArcadeExpression esri/arcadeProfiles/popupProfile jimu/utils esri/graphic dojo/i18n!./nls/strings".split(" "),function(m,r,H,y,l,u,c,q,n,w,M,D,P,v,x,F,B,d){function f(a,b){if(!a||!a.length)return b||[];if(!b||
!b.length)return a;for(var e=[],g=0,k=a.length;g<k;g++)for(var h=a[g],t=0,E=b.length;t<E;t++){var z=b[t];if(z.name===h.name){z.alias!==h.alias&&(h.alias=z.alias);e.push(h);break}}return e}c.readLayerInfosObj=function(a){return H.getInstance(a,a.itemInfo)};c.readLayerInfosFromMap=function(a,b,e){var g=new y;H.getInstance(a,a.itemInfo).then(m.hitch(this,function(k){var h=[];b?k.traversalLayerInfosOfWebmap(function(z){h.push(z)}):k.traversal(function(z){h.push(z)});if(e){var t=[],E=k.getMapNotesLayerInfoArray();
r.forEach(E,function(z){t.push(z.id);z.traversal(function(I){t.push(I.id)})});h=r.filter(h,function(z){return-1===t.indexOf(z.id)})}k=k.getTableInfoArray();h=h.concat(k);g.resolve(h)}),m.hitch(this,function(k){console.error(k);g.reject(k)}));return g.promise};c.generateColumnsFromFields=function(a,b,e,g,k,h,t,E,z,I){function V(p){var C=p.name;if(S&&M.isDefined(S.fieldInfos))for(var N=0,Q=S.fieldInfos.length;N<Q;N++){var O=S.fieldInfos[N];if(O.fieldName===C&&O.format)return O.format}return(p=F.getDefaultPortalFieldInfo(p))&&
p.format?p.format:null}var S=e.getPopupInfo()||e.getPopupInfoFromLayerObject&&e.getPopupInfoFromLayerObject(),K={selectionHandle:{label:"",className:"selection-handle-column",hidden:!1,unhidable:!0,field:null,sortable:!1,_cache:{sortable:!1,statistics:!1},renderCell:function(p,C,N){N.setAttribute("role","button");N.setAttribute("title",d.selectionHandleLabel)}}};r.forEach(k,m.hitch(c,function(p,C,N){C="field"+C;var Q=!!p.domain,O="esriFieldTypeDate"===p.type,T=h&&p.name===h,X="esriFieldTypeDouble"===
p.type||"esriFieldTypeSingle"===p.type||"esriFieldTypeInteger"===p.type||"esriFieldTypeSmallInteger"===p.type,Z="esriFieldTypeString"===p.type,W=0===p.name.indexOf("expression/"),aa=p.alias||p.name;var Y=1===N.length?!1:a&&a[C]?a[C].hidden:p?!p.show&&M.isDefined(p.show):!1;K[C]={label:aa,className:C,hidden:Y,unhidable:1===N.length?!1:!p.show&&M.isDefined(p.show)&&p._pk,field:p.name,sortable:!1,_cache:{sortable:!!E,statistics:z&&!Q&&X}};W?K[C].formatter=m.hitch(c,c.urlFormatter):Z?K[C].formatter=m.hitch(c,
c.urlFormatter):O?K[C].formatter=m.hitch(c,c.dateFormatter,V(p)):X&&(K[C].formatter=m.hitch(c,c.numberFormatter,V(p)));Q?K[C].get="range"===(p.domain&&p.domain.type)?m.hitch(c,function(J,G,L){return this.getRangeDomainValue(G.name,L)},I,p):m.hitch(c,function(J,G,L){return this.getCodeValue(J,G.name,L)},I,p):T?K[C].get=m.hitch(c,function(J,G,L){return this.getTypeName(L[J.name],G)},p,t):W?(N=F.getFeatureLayerDefinition(I),K[C]._cache.sortable=!1,Q=P.isAsync(p.name,g),O=p.name.split("expression/")[1],
T={},T[O]=g[O],Q?K[C].renderCell=m.hitch(this,function(J,G,L){var A=document.createElement("span");A.innerText=jimuNls.common.show;A.style="cursor: pointer; text-decoration: underline; color: #518dca;";var U=u(A,"click",m.hitch(this,function(){this.arcade.getAttributes(L,J,I,b)[G.name].then(function(R){A.style="cursor: inherit; text-decoration: inherit; color: inherit;";A.innerText=R||""});m.hitch(this,function(R){def.reject(R);A.style="cursor: inherit; text-decoration: inherit; color: inherit;";
A.innerText=""});U.remove()}));return A},T,p):K[C].get=m.hitch(c,function(J,G,L,A){return this.arcade.getAttributes(A,J,L,b)[G.name]||""},T,p,N)):Q||O||T||W||(K[C].get=m.hitch(c,function(J,G,L,A,U){var R=null;L&&A&&0<A.length&&(A=(A=r.filter(A,m.hitch(c,function(ba){return ba.id===U[L]})))&&A[0]||null)&&A.domains&&A.domains[G.name]&&A.domains[G.name].codedValues&&(R=this.getCodeValue(J,G.name,U));return(J=null!==R?R:U[G.name])||isFinite(J)?J:""},I,p,h,t))}));return K};c.getTypeName=function(a,b){return F.fieldFormatter.getTypeName(a,
b)};c.getCodeValue=function(a,b,e){return(a=F.getDisplayValueForCodedValueOrSubtype(a,b,e))&&a.isCodedValueOrSubtype?a.displayValue||e[b]||"":e[b]||""};c.getRangeDomainValue=function(a,b){return(a=b[a])?a:""};c.urlFormatter=function(a){return F.fieldFormatter.getFormattedUrl(a)};c.dateFormatter=function(a,b){return F.fieldFormatter.getFormattedDate(b,a)};c.numberFormatter=function(a,b){return F.fieldFormatter.getFormattedNumber(b,a)};c.readLayerObjectsFromMap=function(a,b,e){var g=new y,k=[];this.readLayerInfosFromMap(a,
b,e).then(m.hitch(this,function(h){r.forEach(h,m.hitch(this,function(t){k.push(t.getLayerObject())}));l(k).then(m.hitch(this,function(t){g.resolve(t)}),m.hitch(this,function(t){g.reject(t);console.error(t)}))}),m.hitch(this,function(h){g.reject(h)}));return g.promise};c.readSupportTableInfoFromLayerInfos=function(a){var b=new y,e=[];r.forEach(a,m.hitch(this,function(g){e.push(g.getSupportTableInfo())}));l(e).then(m.hitch(this,function(g){g=m.clone(g);r.forEach(g,function(k,h){k.id=a[h].id});b.resolve(g)}),
function(g){b.reject(g)});return b.promise};c.readConfigLayerInfosFromMap=function(a,b,e){var g=new y,k=[];this.readLayerInfosFromMap(a,b,e).then(m.hitch(this,function(h){var t=[];r.forEach(h,function(E){k.push(E.getSupportTableInfo())});l(k).then(m.hitch(this,function(E){r.forEach(E,m.hitch(this,function(z,I){z.isSupportedLayer&&(h[I].name=h[I].title,t.push(h[I]))}));g.resolve(t)}),m.hitch(this,function(E){g.reject(E)}))}),m.hitch(this,function(h){g.reject(h)}));return g.promise};c.getConfigInfosFromLayerInfos=
function(a){return r.map(a,function(b){return c.getConfigInfoFromLayerInfo(b)})};c.getConfigInfoFromLayerInfo=function(a){var b={};b.name=a.name||a.title;b.id=a.id;b.show=a.isShowInMap();b.layer={url:a.getUrl()};var e=a.getPopupInfo();e&&!e.description&&(b.layer.fields=r.map(e.fieldInfos,function(g){return{name:g.fieldName,alias:g.label,show:g.visible,format:g.format}}),a=m.getObject("layerObject.fields",!1,a),b.layer.fields=f(b.layer.fields,a),r.some(b.layer.fields,function(g){return g.show})||(b.layer.fields&&
0<b.layer.fields.length?b.layer.fields[0].show=!0:console.warn("We do not get fields info.")));return b};c.generateCacheStore=function(a,b,e,g,k){a=new D({layer:a,objectIds:a._objectIds||null,totalCount:b,batchCount:e,where:g||"1\x3d1",spatialFilter:k});b=new w;return new n(a,b,{})};c.generateMemoryStore=function(a,b){return new q(new w({data:a||[],idProperty:b}))};c.merge=function(a,b,e,g){for(var k=r.map(b,function(z){return z[e]}),h=0,t=a.length;h<t;h++){var E=k.indexOf(a[h][e]);-1<E&&g(a[h],b[E])}};
c.syncOrderWith=function(a,b,e){function g(I,V){return r.map(I,function(S){return S[V]})}if(!m.isArray(b)||!e)return a;for(var k=g(a,e),h=[],t=0,E=b.length;t<E;t++){var z=k.indexOf(b[t][e]);-1<z&&(h=h.concat(a.splice(z,1)),k=g(a,e))}return h.concat(a)};c.arcade={};c.arcade.getExpressionInfosFromLayer=function(a,b){a=P.readExprInfo.getArcadeProfilesByType(a,b,"infoTemplate");return 0<a.length&&a[0].expressionInfos?a[0].expressionInfos:[]};c.arcade.getExpressionInfosFromLayerInfo=function(a){return(a=
a&&a.getPopupInfo())&&a.expressionInfos||[]};c.arcade.getAttributes=function(a,b,e,g){a=new B(a.geometry,null,a);return P.customExpr.getAsynAttributesFromCustomArcadeExpr(b,a,e,g)};c.arcade.appendArcadeExpressionsToFields=function(a,b){if(a){b=c.arcade.getExpressionInfosFromLayerInfo(b);if(0<b.length){var e=RegExp("^expression/");r.forEach(b,function(g){r.some(a,function(k){if(e.test(k.name))return k=k.name.substr(11),g.name===k})||a.push({name:"expression/"+g.name,alias:g.title,show:!0})})}return a}};
c.arcade.isArcadeExpressionField=function(a){return a&&"string"===typeof a.name&&0===a.name.indexOf("expression/")};c.arcade.parseArcadeExpressions=function(a){return P.InfoTemplate._parseArcadeExpressions(a)};c.getSortbyFields=function(a,b){a=a&&a.get("sort")||[];b=b&&b.objectIdField;0<a.length?a=r.map(a,function(e){return e.attribute+" "+(e.descending?"DESC":"ASC")}):b&&a.push(b+" ASC");return a}})},"dojo/store/Cache":function(){define(["../_base/lang","../when"],function(m,r){var H=function(y,
l,u){u=u||{};return m.delegate(y,{query:function(c,q){c=y.query(c,q);c.forEach(function(n){u.isLoaded&&!u.isLoaded(n)||l.put(n)});return c},queryEngine:y.queryEngine||l.queryEngine,get:function(c,q){return r(l.get(c),function(n){return n||r(y.get(c,q),function(w){w&&l.put(w,{id:c});return w})})},add:function(c,q){return r(y.add(c,q),function(n){l.add(n&&"object"==typeof n?n:c,q);return n})},put:function(c,q){l.remove(q&&q.id||this.getIdentity(c));return r(y.put(c,q),function(n){l.put(n&&"object"==
typeof n?n:c,q);return n})},remove:function(c,q){return r(y.remove(c,q),function(n){return l.remove(c,q)})},evict:function(c){return l.remove(c)}})};m.setObject("dojo.store.Cache",H);return H})},"widgets/AttributeTable/table/FeatureLayerQueryStore":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array esri/tasks/query esri/tasks/QueryTask ./FeatureLayerQueryResult".split(" "),function(m,r,H,y,l,u){return m(null,{queryUrl:"",idProperty:"id",data:null,_entityData:null,constructor:function(c){m.safeMixin(this,
c);this.data=[];this._entityData=[];this.layer=c.layer;this.objectIds=c.objectIds;this.where=c.where;this.orderByFields=c.orderByFields;this.totalCount=c.totalCount;this.batchCount=c.batchCount||25;this.idProperty=this.layer.objectIdField;this.spatialFilter=c.spatialFilter;this.layer&&this.layer.url&&(this.queryTask=new l(this.layer.url))},get:function(c){return this.data[c]},getIdentity:function(c){return c[this.idProperty]},query:function(c,q){var n=new y,w=q&&q.start||0,M=q._export_count||this.batchCount,
D=null;"function"===typeof c?D=c(this._entityData):"[object Array]"===Object.prototype.toString.call(c)&&(D=c);this.objectIds?(D=D?D:this.objectIds,n.objectIds=D.length>=w+this.batchCount?D.slice(w,w+M):D.slice(w)):(D&&0<D.length?n.objectIds=D.length>=w+this.batchCount?D.slice(w,w+M):D.slice(w):(n.start=w,n.num=M,n.where=this.where,n.geometry=this.spatialFilter,n.spatialRelationship=y.SPATIAL_REL_INTERSECTS),(c=q.sort)&&0<c.length&&(c=H.map(c,function(v){return v.attribute+" "+(v.descending?"DESC":
"ASC")}),n.orderByFields=c));n.returnGeometry="esriGeometryPoint"===this.layer.geometryType;n.outFields=["*"];var P=this.totalCount;c=null;c=!n.where;if(!(n.objectIds&&0<n.objectIds.length)&&c)return new u([]);c=this.queryTask?this.queryTask.execute(n):this.layer.queryFeatures(n);c.total=c.then(r.hitch(this,function(v){var x=0,F=this.layer.objectIdField;if(this.objectIds){if(!F)for(x=0;x<v.fields.length;x++)if("esriFieldTypeOID"===v.fields[x].type){F=v.fields[x].name;break}var B={};for(x=0;x<v.features.length;x++)B[v.features[x].attributes[F]]=
v.features[x];v.features=H.map(n.objectIds,function(f){return B[f]})}for(x=0;x<v.features.length;x++)if(v.features[x]){var d=v.features[x];v.features[x]=r.mixin(r.clone(d.attributes),{geometry:d.geometry});this.data[v.features[x][F]]=v.features[x];this._entityData.push(v.features[x])}v=v.features;return P}),function(){console.log("FeatureLayerQueryStore queryFeatures failed.");return 0});return new u(c)}})})},"widgets/AttributeTable/table/FeatureLayerQueryResult":function(){define("esri/main dojo/_base/lang dojo/_base/kernel dojo/_base/Deferred dojo/DeferredList dojo/_base/array".split(" "),
function(m,r,H,y){var l=function(u){function c(q){u[q]||(u[q]=function(){var n=arguments;return y.when(u,function(w){Array.prototype.unshift.call(n,w.features||w);return l(H[q].apply(H,n))})})}if(!u)return u;u.then&&(u=r.delegate(u));u.total||(u.total=y.when(u,function(q){return m._isDefined(q.total)?q.total:q.length||0}));c("forEach");c("filter");c("map");c("some");c("every");return u};return l})},"widgets/AttributeTable/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html",
"dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/AttributeTable/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3cdiv class\x3d"instruction"\x3e\r\n    \x3cp\x3e${nls.instruction}\x3c/p\x3e\r\n  \x3c/div\x3e\r\n  \x3cdiv class\x3d"check-syncwithlayers" data-dojo-attach-point\x3d"syncWithLayersCheck"\r\n    data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.syncWithLayers}"\x3e\x3c/div\x3e\r\n\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos" class\x3d"table-layer-infos"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"table-options jimu-ellipsis"\x3e\r\n    \x3cul\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"exportcsv" checked\r\n        data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.exportCSV}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"expand" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.expand}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"filterByMapExtent" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.filterByExtent}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n      \x3cli\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"textSelection" data-dojo-type\x3d"jimu/dijit/CheckBox" label\x3d"${nls.allowTextSelection}"\x3e\x3c/div\x3e\r\n      \x3c/li\x3e\r\n    \x3c/ul\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/AttributeTable/setting/css/style.css":".jimu-widget-attributetable-setting{margin:0; padding:0; font-size:14px; width: 100%; height: 100%; position: relative; color: #596679;}.jimu-widget-attributetable-setting .instruction{font-size: 12px; margin-bottom: 10px;}.jimu-widget-attributetable-setting .check-syncwithlayers {margin-bottom: 10px; padding-left: 8px; padding-right: 8px;}.jimu-widget-attributetable-setting .show{width: 120px;}.jimu-widget-attributetable-setting .symbol{width: 200px;}.jimu-widget-attributetable-setting .table-layer-infos{width: 100%; height: 240px;}.jimu-widget-attributetable-setting .table-options ul{list-style-type: none; padding: 0;}.jimu-widget-attributetable-setting .jimu-checkbox{margin-right: 20px;}.jimu-rtl .jimu-widget-attributetable-setting .jimu-checkbox{margin-left: 20px; margin-right: 0;}.jimu-widget-attributetable-setting .jimu-checkbox.jimu-state-disabled {color: #e5e5e5;}.jimu-widget-attributetable-setting .jimu-checkbox.jimu-state-disabled .checkbox{cursor: default;}.jimu-widget-attributetable-setting th.isDescending .jimu-checkbox {display: none;}.jimu-widget-attributetable-setting td.isDescending {text-align: center;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox {top: 5px; margin: 0;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox {background: transparent; background-image: url('images/order_up.svg'); width: 16px; height: 16px; background-repeat: no-repeat; background-position-x: 0;}.jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox.jimu-icon-checked {background-image: url('images/order_down.svg');}.jimu-rtl .jimu-widget-attributetable-setting td.isDescending .jimu-checkbox .checkbox {-webkit-transform: rotateY(180deg); transform: rotateY(180deg);}.jimu-widget-attributetable-setting .sortField .dijitSelect{height: 20px; background: #fff; margin: 5px 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonContents{border-right-width: 0;}.jimu-rtl .jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonContents{border-left-width: 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitButtonText{overflow: hidden; text-overflow: ellipsis; width: 90px;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitInputField{padding-top: 0; padding-bottom: 0;}.jimu-widget-attributetable-setting .sortField .dijitSelect .dijitArrowButton{background: #fff;}.has-webkit .jimu-simple-table.vertical-scroll .head-section \x3e .table-div{padding-right: 6px;}.jimu-rtl.has-webkit .jimu-simple-table.vertical-scroll .head-section \x3e .table-div{padding-left: 6px;}",
"*now":function(m){m(['dojo/i18n!*preload*widgets/AttributeTable/setting/nls/Setting*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/lang dojo/_base/html dojo/_base/array dojo/on dojo/Deferred dojo/promise/all dojo/query dijit/registry jimu/dijit/Popup jimu/dijit/Message jimu/dijit/CheckBox jimu/dijit/LoadingShelter ../utils".split(" "),function(m,r,H,y,l,u,c,q,n,w,M,D,P,v,x,F,B){return m([H,r],{baseClass:"jimu-widget-attributetable-setting",currentFieldTable:null,_allLayerFields:null,_layerInfos:null,_tableInfos:null,
_delayedLayerInfos:null,_delayedLayerInfosAfterInit:null,_unSpportQueryCampsite:null,startup:function(){this.inherited(arguments);this.config.layerInfos||(this.config.layerInfos=[]);this._allLayerFields=[];this._layerInfos=[];this._tableInfos=[];this._delayedLayerInfos=[];this._delayedLayerInfosAfterInit=[];this._unSpportQueryCampsite={};this.displayFieldsTable=new y({fields:[{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"label",title:this.nls.label,width:"60%",
type:"text"},{name:"url",title:this.nls.url,type:"text",hidden:!0},{name:"index",title:"index",type:"text",hidden:!0},{name:"sortField",title:this.nls.sortField,type:"dropdown",width:"130"},{name:"isDescending",title:"",width:"40",type:"checkbox","class":"sort-order"},{name:"actions",title:this.nls.actions,type:"actions",width:"20%",actions:["edit"],"class":"symbol"},{name:"showAttachments",title:"",type:"checkbox",hidden:!0}],selectable:!0,autoHeight:!1});this.displayFieldsTable.placeAt(this.tableLayerInfos);
u.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.shelter=new F({hidden:!0});this.shelter.placeAt(this.domNode.parentNode.parentNode||this.domNode);this.shelter.startup();this.shelter.show();B.readLayerInfosObj(this.map).then(l.hitch(this,function(d){this.own(d.on("layerInfosChanged",l.hitch(this,this.onLayerInfosChanged)));this.own(q(this.displayFieldsTable,"actions-edit",l.hitch(this,this.editFieldsClick)));this.own(q(this.displayFieldsTable,"row-click",l.hitch(this,this._verifiedOnShowClick)));
this.own(q(this.displayFieldsTable,"row-add",l.hitch(this,function(f){this._addTooltipToSortOrderNode(f)})));this.own(q(this.syncWithLayersCheck,"change",l.hitch(this,function(f){this._toggleTableShowOption(f)})));this.setConfig(this.config)}))},editFieldsClick:function(d){var f=M(".action-item-parent",d);if(f&&f.length)if(f=this.displayFieldsTable.getRowData(d),f.show){var a=parseInt(f.index,10);this.shelter.show();this._getLayerFields(a).then(l.hitch(this,function(e){this.openFieldsDialog(d,e,a)}),
l.hitch(this,function(e){console.error(e)})).always(l.hitch(this,function(){this.shelter.hide()}))}else var b=new v({message:this.nls.warning,buttons:[{label:this.nls.ok,onClick:l.hitch(this,function(){b.close()})}]})},_verifiedOnShowClick:function(d){var f=this.displayFieldsTable.getRowData(d),a=parseInt(f.index,10),b=null;b=this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?this.config.layerInfos[a]:this._layerInfos[a];a=-1<this._unSpportQueryCampsite.layerNames.indexOf(b.name||
b.title);f.show&&a&&(new v({message:this.nls.unsupportQueryWarning}),f.show=!1,this.displayFieldsTable.editRow(d,f))},_getLayerFields:function(d){return this._layerInfos[d].getLayerObject().then(l.hitch(this,function(f){var a=this._allLayerFields[d];f=c.map(f.fields,function(b){return{name:b.name,alias:b.alias,show:!0}});f=B.arcade.appendArcadeExpressionsToFields(f,this._layerInfos[d]);B.merge(f,a,"name",function(b,e){l.mixin(b,e)});return f=B.syncOrderWith(f,a,"name")}))},_addTooltipToSortOrderNode:function(d){var f=
M(".sort-order .jimu-checkbox",d)[0];d=D.byNode(f);var a=this.nls,b=function(e){f.title=e?a.sortOrderTooltips.toAscending:a.sortOrderTooltips.toDescending};d&&(this.own(q(d,"change",b)),b(d.checked))},openFieldsDialog:function(d,f,a){var b=!1,e=this._layerInfos[a];(e=e&&e.layerObject)&&(b=e.hasAttachments&&e.objectIdField);e=u.create("div");var g=this._createFieldsTable(f,a);u.place(g.domNode,e);var k=null;b&&(k=new x({label:this.nls.showAttachments,style:"margin-top:10px;"}),f=this.displayFieldsTable.getRowData(d),
k.setValue(f.showAttachments),k.placeAt(e));this.currentFieldTable=g;f=600;k&&(f=640);var h=new P({titleLabel:this.nls.configureLayerFields,width:640,maxHeight:f,autoHeight:!0,content:e,buttons:[{label:this.nls.ok,onClick:l.hitch(this,function(){this._allLayerFields[a]=g.getData();var t=k?k.getValue():!1;this.displayFieldsTable.editRow(d,{showAttachments:t});h.close();h=null})},{label:this.nls.cancel,classNames:["jimu-btn-vacation"],onClick:l.hitch(this,function(){h.close();h=null})}],onClose:function(){h=
null}});g.startup()},_createFieldsTable:function(d){var f=null,a={fields:[{name:"show",title:this.nls.fieldVisibility,type:"checkbox","class":"show",onChange:l.hitch(this,function(b){var e=f.getData();!c.some(e,l.hitch(this,function(g){return g.show}))&&(new v({message:this.nls.fieldCheckWarning}),e=f.getRowData(b))&&(e.show=!0,f.editRow(b,e))})},{name:"name",title:this.nls.fieldName,type:"text"},{name:"alias",title:this.nls.fieldAlias,editable:!0,type:"text"},{name:"actions",title:this.nls.fieldActions,
type:"actions",actions:["up","down"],"class":"symbol"}],selectable:!0,autoHeight:!1,style:{height:"300px",maxHeight:"300px"}};f=new y(a);for(a=0;a<d.length;a++)d[a].show=void 0===d[a].show?!0:!!d[a].show,f.addRow(d[a]);return f},setConfig:function(d){this.config=d;this.displayFieldsTable.clear();this._allLayerFields=[];this._processTableData().then(l.hitch(this,function(f){this._init(f);this.shelter.hide()}),l.hitch(this,function(f){new v({message:f.message||f})}))},onLayerInfosChanged:function(d,
f,a){"added"===f&&a&&d&&a.getSupportTableInfo().then(l.hitch(this,function(b){b.isSupportedLayer&&(this._layerInfos&&0===this._layerInfos.length?this._delayedLayerInfos.push(a):this._layerInfos&&0<this._layerInfos.length&&!this._getLayerInfoById(a.id)&&(this._delayedLayerInfosAfterInit.push(a),this._processDelayedLayerInfosAfterInit(this._delayedLayerInfosAfterInit)))}))},_processDelayedLayerInfosAfterInit:function(d){for(var f=this._layerInfos.length,a=[],b=0;b<d.length;b++){var e=B.getConfigInfoFromLayerInfo(d[b]),
g={label:e.name||e.title,url:e.layer.url,index:""+(f+b),isDescending:!0,show:e.show};this._allLayerFields.push(e.layer.fields);this._layerInfos.push(d[b]);a.push(this._prepareSortField(g,b))}w(a).then(l.hitch(this,function(k){for(var h=0;h<k.length;h++)this._addRowToDisplayFieldsTable(k[h])}),l.hitch(this,function(k){console.error(k)}))},_processDelayedLayerInfos:function(){0<this._delayedLayerInfos.length&&(c.forEach(this._delayedLayerInfos,l.hitch(this,function(d){this._getLayerInfoById(d.id)||
this._layerInfos.push(d)})),this._delayedLayerInfos=[])},_processTableData:function(){var d=new n;B.readConfigLayerInfosFromMap(this.map,!0,!0).then(l.hitch(this,function(f){this._layerInfos=f;this._processDelayedLayerInfos();B.readSupportTableInfoFromLayerInfos(this._layerInfos).then(l.hitch(this,function(a){this._tableInfos=a;this.config&&this.config.layerInfos&&0<this.config.layerInfos.length?(a=B.getConfigInfosFromLayerInfos(this._layerInfos),B.merge(a,this.config.layerInfos,"id",l.hitch(this,
function(b,e){var g=this._getLayerInfoById(b.id);b.layer.fields=B.arcade.appendArcadeExpressionsToFields(b.layer.fields,g);b.show=e.show;b.showAttachments=e.showAttachments;b.sortField=e.sortField;b.isDescending=e.isDescending;b.layer.url=e.layer.url;l.getObject("layer.fields.length",!1,b)&&l.getObject("layer.fields.length",!1,e)?(B.merge(b.layer.fields,e.layer.fields,"name",function(k,h){l.mixin(k,h)}),b.layer.fields=B.syncOrderWith(b.layer.fields,e.layer.fields,"name")):b.layer.fields=e.layer.fields})),
this.config.layerInfos=a,this._unSpportQueryCampsite.fromConfig=!0,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this.config.layerInfos),d.resolve(a)):(this._unSpportQueryCampsite.fromConfig=!1,this._unSpportQueryCampsite.layerNames=this._getUnsupportQueryLayerNames(this._layerInfos),a=B.getConfigInfosFromLayerInfos(f),a=c.map(a,l.hitch(this,function(b){var e=l.getObject("layer.fields",!1,b),g=this._getLayerInfoById(b.id);e&&(e=B.arcade.appendArcadeExpressionsToFields(b.layer.fields,
g),b.layer.fields=e);return b})),d.resolve(a))}),function(a){console.error(a);d.reject(a)})}),l.hitch(this,function(f){console.error(f);d.reject(f)}));return d},_getUnsupportQueryLayerNames:function(d){var f=[];c.forEach(d,l.hitch(this,function(a){var b=this._getSupportTableInfoById(a.id);b&&!b.isSupportQuery&&f.push(a.name||a.title)}));return f},_init:function(d){for(var f=[],a=[],b=0;b<d.length;b++){var e=d[b].show&&this._getSupportTableInfoById(d[b].id).isSupportQuery;e={label:d[b].name||d[b].title,
url:d[b].layer.url,index:""+b,show:e,sorting:{fields:d[b].layer.fields,selectedField:d[b].sortField},isDescending:d[b].isDescending,showAttachments:!!d[b].showAttachments};this._allLayerFields.push(d[b].layer.fields);a.push(this._prepareSortField(e,b));this._unSpportQueryCampsite.fromConfig&&(e=(e=this._unSpportQueryCampsite.layerNames)&&-1<e.indexOf(d[b].name||d[b].title),d[b].show&&e&&f.push(d[b].name||d[b].title))}w(a).then(l.hitch(this,function(g){for(var k=0;k<g.length;k++)this._addRowToDisplayFieldsTable(g[k])}),
l.hitch(this,function(g){console.error(g)}));this._unSpportQueryCampsite.fromConfig&&0<f.length&&new v({message:this.nls.unsupportQueryLayers+"\x3cbr\x3e\x3cbr\x3e"+f.toString()});this.config.hideExportButton?this.exportcsv.uncheck():this.exportcsv.check();this.config.initiallyExpand?this.expand.check():this.expand.uncheck();this._canUseOpenAtStart()&&(this.openAtStart?this.expand.check():this.expand.uncheck(),this.expand.status=!1,u.addClass(this.expand.domNode,"disable-checkbox"));this.config.filterByMapExtent?
this.filterByMapExtent.check():this.filterByMapExtent.uncheck();this.config.allowTextSelection?this.textSelection.check():this.textSelection.uncheck();this.config.syncWithLayers?this.syncWithLayersCheck.check():this.syncWithLayersCheck.uncheck()},_addRowToDisplayFieldsTable:function(d){this.displayFieldsTable.addRow(d)},_prepareSortField:function(d,f){var a=new n;d.sorting&&d.sorting.fields?(d.sortField=this._prepareSortFieldOptions(d.sorting),a.resolve(d)):this._getLayerFields(f).then(l.hitch(this,
function(b){d.sorting?d.sorting.fields=b:d.sorting={fields:b};d.sortField=this._prepareSortFieldOptions(d.sorting);a.resolve(d)}),l.hitch(this,function(b){console.error(b);a.reject(b)}));return a},_prepareSortFieldOptions:function(d){if(d&&d.fields&&Array.isArray(d.fields))return c.map(d.fields,function(f){var a={value:f.name,label:f.alias};d.selectedField===f.name&&(a.selected=!0);0===f.name.indexOf("expression/")&&(a.disabled=!0);return a})},_canUseOpenAtStart:function(){return this.closeable||
!this.isOnScreen},_getLayerInfoById:function(d){for(var f=0,a=this._layerInfos.length;f<a;f++)if(this._layerInfos[f].id===d)return this._layerInfos[f]},_getSupportTableInfoById:function(d){for(var f=0,a=this._tableInfos.length;f<a;f++)if(this._tableInfos[f].id===d)return this._tableInfos[f]},getConfig:function(){var d=this.displayFieldsTable.getData(),f=[],a=d.length;if(this.config&&this.config.layerInfos&&0<this.config.layerInfos.length)c.forEach(d,l.hitch(this,function(g,k){g=this.config.layerInfos[k];
var h={};h.name=g.name||g.title;h.id=g.id;h.layer={};h.layer.url=d[k].url;h.layer.fields=this._allLayerFields[k];h.show=d[k].show;h.showAttachments=d[k].showAttachments;h.sortField=d[k].sortField;h.isDescending=d[k].isDescending;f.push(h)}));else for(var b=0;b<a;b++){var e={};e.name=this._layerInfos[b].name||this._layerInfos[b].title;e.id=this._layerInfos[b].id;e.layer={};e.layer.url=d[b].url;e.layer.fields=this._allLayerFields[b];e.show=d[b].show;e.showAttachments=d[b].showAttachments;e.sortField=
d[b].sortField;e.isDescending=d[b].isDescending;f.push(e)}this.config.layerInfos=f;this.config.hideExportButton=!this.exportcsv.getValue();this.config.filterByMapExtent=this.filterByMapExtent.getValue();this.config.allowTextSelection=this.textSelection.getValue();this.config.syncWithLayers=this.syncWithLayersCheck.getValue();this._canUseOpenAtStart()||(this.config.initiallyExpand=this.expand.getValue());return this.config},_toggleTableShowOption:function(d){this.displayFieldsTable&&M(".show .jimu-checkbox").forEach(function(f){D.byNode(f).setStatus(!d)})}})});