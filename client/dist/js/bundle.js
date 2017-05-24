!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var n={};t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:a})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=12)}([function(e,t){e.exports=React},function(e,t){e.exports=SilverStripeComponent},function(e,t){e.exports=i18n},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={SET_CAMPAIGN_ACTIVE_CHANGESET:"SET_CAMPAIGN_ACTIVE_CHANGESET",SET_CAMPAIGN_SELECTED_CHANGESETITEM:"SET_CAMPAIGN_SELECTED_CHANGESETITEM",PUBLISH_CAMPAIGN_REQUEST:"PUBLISH_CAMPAIGN_REQUEST",PUBLISH_CAMPAIGN_SUCCESS:"PUBLISH_CAMPAIGN_SUCCESS",PUBLISH_CAMPAIGN_FAILURE:"PUBLISH_CAMPAIGN_FAILURE"}},function(e,t){e.exports=Breadcrumb},function(e,t){e.exports=BreadcrumbsActions},function(e,t){e.exports=FormAction},function(e,t){e.exports=ReactRedux},function(e,t){e.exports=ReactRouter},function(e,t){e.exports=Redux},function(e,t){e.exports=Toolbar},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(8),i=n(21),o=a(i),l=n(29),s=a(l),u=n(26),c=a(u),p=n(13),d=a(p),f=n(17),m=a(f);document.addEventListener("DOMContentLoaded",function(){var e=o.default.getSection("SilverStripe\\CampaignAdmin\\CampaignAdmin");c.default.add({path:e.url,component:(0,r.withRouter)(d.default),childRoutes:[{path:":type/:id/:view",component:d.default},{path:"set/:id/:view",component:d.default}]}),s.default.add("campaign",m.default)})},function(e,t,n){"use strict";n(11)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function l(e){return{config:e.config,campaignId:e.campaign.campaignId,view:e.campaign.view,breadcrumbs:e.breadcrumbs,sectionConfig:e.config.sections.find(function(e){return e.name===M}),securityId:e.config.SecurityID}}function s(e){return{breadcrumbsActions:(0,m.bindActionCreators)(y,e)}}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=n(0),d=a(p),f=n(7),m=n(9),h=n(8),g=n(20),b=a(g),C=n(5),y=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}(C),_=n(4),v=a(_),E=n(1),A=a(E),I=n(6),P=a(I),S=n(2),k=a(S),T=n(10),w=a(T),N=n(23),O=a(N),B=n(15),j=a(B),M="SilverStripe\\CampaignAdmin\\CampaignAdmin",R=function(e){function t(e){r(this,t);var n=i(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.publishApi=b.default.createEndpointFetcher({url:n.props.sectionConfig.publishEndpoint.url,method:n.props.sectionConfig.publishEndpoint.method,defaultData:{SecurityID:n.props.securityId},payloadSchema:{id:{urlReplacement:":id",remove:!0}}}),n.handleBackButtonClick=n.handleBackButtonClick.bind(n),n.handleCreateCampaignSubmit=n.handleCreateCampaignSubmit.bind(n),n.handleFormAction=n.handleFormAction.bind(n),n}return o(t,e),c(t,[{key:"componentWillMount",value:function(){0===this.props.breadcrumbs.length&&this.setBreadcrumbs(this.props.params.view,this.props.params.id)}},{key:"componentWillReceiveProps",value:function(e){(this.props.params.id!==e.params.id||this.props.params.view!==e.params.view)&&this.setBreadcrumbs(e.params.view,e.params.id)}},{key:"setBreadcrumbs",value:function(e,t){var n=[{text:k.default._t("CampaignAdmin.CAMPAIGN","Campaigns"),href:this.props.sectionConfig.url}];switch(e){case"show":break;case"edit":n.push({text:k.default._t("CampaignAdmin.EDIT_CAMPAIGN","Editing Campaign"),href:this.getActionRoute(t,e)});break;case"create":n.push({text:k.default._t("CampaignAdmin.ADD_CAMPAIGN","Add Campaign"),href:this.getActionRoute(t,e)})}this.props.breadcrumbsActions.setBreadcrumbs(n)}},{key:"handleBackButtonClick",value:function(e){if(this.props.breadcrumbs.length>1){var t=this.props.breadcrumbs[this.props.breadcrumbs.length-2];t&&t.href&&(e.preventDefault(),this.props.router.push(t.href))}}},{key:"handleCreateCampaignSubmit",value:function(e,t,n){var a=this,r=n();if(!r)throw new Error("Promise was not returned for submitting");return r.then(function(e){var n=e.errors&&e.errors.length>0;if("action_save"===t&&!n){var r=a.props.sectionConfig.url,i=e.record.id;a.props.router.push(r+"/set/"+i+"/edit")}return e})}},{key:"handleFormAction",value:function(e){if("action_cancel"===e.currentTarget.name){var t=this.props.sectionConfig.url;this.props.router.push(t),e.preventDefault()}}},{key:"render",value:function(){var e=null;switch(this.props.params.view){case"show":e=this.renderItemListView();break;case"edit":e=this.renderDetailEditView();break;case"create":e=this.renderCreateView();break;default:e=this.renderIndexView()}return e}},{key:"renderIndexView",value:function(){var e=this.props.sectionConfig.form.EditForm.schemaUrl,t={title:k.default._t("CampaignAdmin.ADDCAMPAIGN"),icon:"plus",handleClick:this.addCampaign.bind(this)},n={createFn:this.campaignListCreateFn.bind(this),schemaUrl:e};return d.default.createElement("div",{className:"fill-height","aria-expanded":"true"},d.default.createElement(w.default,null,d.default.createElement(v.default,{multiline:!0})),d.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow"},d.default.createElement("div",{className:"toolbar toolbar--content"},d.default.createElement("div",{className:"btn-toolbar"},d.default.createElement(P.default,t))),d.default.createElement(O.default,n)))}},{key:"renderItemListView",value:function(){var e={sectionConfig:this.props.sectionConfig,campaignId:this.props.params.id,itemListViewEndpoint:this.props.sectionConfig.itemListViewEndpoint,publishApi:this.publishApi,handleBackButtonClick:this.handleBackButtonClick.bind(this)};return d.default.createElement(j.default,e)}},{key:"renderDetailEditView",value:function(){if(this.props.params.id<=0)return this.renderCreateView();var e=this.props.sectionConfig.form.campaignEditForm.schemaUrl,t=e+"/"+this.props.params.id;return d.default.createElement("div",{className:"fill-height"},d.default.createElement(w.default,{showBackButton:!0,handleBackButtonClick:this.handleBackButtonClick},d.default.createElement(v.default,{multiline:!0})),d.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow form--inline"},d.default.createElement(O.default,{handleAction:this.handleFormAction,schemaUrl:t})))}},{key:"renderCreateView",value:function(){var e=this.props.sectionConfig.form.campaignCreateForm.schemaUrl;return d.default.createElement("div",{className:"fill-height"},d.default.createElement(w.default,{showBackButton:!0,handleBackButtonClick:this.handleBackButtonClick},d.default.createElement(v.default,{multiline:!0})),d.default.createElement("div",{className:"panel panel--padded panel--scrollable flexbox-area-grow form--inline"},d.default.createElement(O.default,{handleSubmit:this.handleCreateCampaignSubmit,handleAction:this.handleFormAction,schemaUrl:e})))}},{key:"campaignEditCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("action_cancel"===t.name){var r=Object.assign({},t,{handleClick:function(e){e.preventDefault(),n.props.router.push(a)}});return d.default.createElement(e,u({key:t.id},r))}return d.default.createElement(e,u({key:t.id},t))}},{key:"campaignAddCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("action_cancel"===t.name){var r=Object.assign({},t,{handleClick:function(e){e.preventDefault(),n.props.router.push(a)}});return d.default.createElement(e,u({key:t.name},r))}return d.default.createElement(e,u({key:t.name},t))}},{key:"campaignListCreateFn",value:function(e,t){var n=this,a=this.props.sectionConfig.url;if("GridField"===t.schemaComponent){var r=Object.assign({},t,{data:Object.assign({},t.data,{handleDrillDown:function(e,t){n.props.router.push(a+"/set/"+t.ID+"/show")},handleEditRecord:function(e,t){n.props.router.push(a+"/set/"+t+"/edit")}})});return d.default.createElement(e,u({key:r.name},r))}return d.default.createElement(e,u({key:t.name},t))}},{key:"addCampaign",value:function(){var e=this.getActionRoute(0,"create");this.props.router.push(e)}},{key:"getActionRoute",value:function(e,t){return this.props.sectionConfig.url+"/set/"+e+"/"+t}}]),t}(A.default);R.propTypes={breadcrumbsActions:d.default.PropTypes.object.isRequired,campaignId:d.default.PropTypes.string,sectionConfig:d.default.PropTypes.shape({publishEndpoint:d.default.PropTypes.shape({url:d.default.PropTypes.string,method:d.default.PropTypes.string}),form:d.default.PropTypes.shape({EditForm:d.default.PropTypes.shape({schemaUrl:d.default.PropTypes.string}),campaignEditForm:d.default.PropTypes.shape({schemaUrl:d.default.PropTypes.string}),campaignCreateForm:d.default.PropTypes.shape({schemaUrl:d.default.PropTypes.string})})}),securityId:d.default.PropTypes.string.isRequired,view:d.default.PropTypes.string},t.default=(0,h.withRouter)((0,f.connect)(l,s)(R))},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(0),u=a(s),c=n(1),p=a(c),d=n(2),f=a(d),m=function(e){function t(){return r(this,t),i(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return o(t,e),l(t,[{key:"render",value:function(){var e=null,t={},n=this.props.item;if("open"===this.props.campaign.State)switch(n.ChangeType){case"created":t.className="label label-warning list-group-item__status",t.Title=f.default._t("CampaignAdmin.DRAFT","Draft");break;case"modified":t.className="label label-warning list-group-item__status",t.Title=f.default._t("CampaignAdmin.MODIFIED","Modified");break;case"deleted":t.className="label label-error list-group-item__status",t.Title=f.default._t("CampaignAdmin.REMOVED","Removed");break;case"none":default:t.className="label label-success list-group-item__status",t.Title=f.default._t("CampaignAdmin.NO_CHANGES","No changes")}var a=u.default.createElement("span",{className:"list-group-item__info campaign-admin__item-links--has-links font-icon-link"},"3 linked items");return n.Thumbnail&&(e=u.default.createElement("span",{className:"list-group-item__thumbnail"},u.default.createElement("img",{alt:n.Title,src:n.Thumbnail}))),u.default.createElement("div",{className:"fill-width"},e,u.default.createElement("div",{className:"list-group-item__details"},u.default.createElement("h4",{className:"list-group-item__heading"},n.Title),u.default.createElement("span",{className:"list-group-item__info campaign-admin__item-links--is-linked font-icon-link"}),a,t.className&&t.Title&&u.default.createElement("span",{className:t.className},t.Title)))}}]),t}(p.default);m.propTypes={campaign:u.default.PropTypes.object.isRequired,item:u.default.PropTypes.object.isRequired},t.default=m},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function s(e,t){var n=null,a=t.sectionConfig.treeClass;return e.records&&e.records[a]&&t.campaignId&&(n=e.records[a][parseInt(t.campaignId,10)]),{config:e.config,record:n||{},campaign:e.campaign,treeClass:a}}function u(e){return{breadcrumbsActions:(0,m.bindActionCreators)(b,e),recordActions:(0,m.bindActionCreators)(y,e),campaignActions:(0,m.bindActionCreators)(v,e)}}Object.defineProperty(t,"__esModule",{value:!0});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),p=function e(t,n,a){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var i=Object.getPrototypeOf(t);return null===i?void 0:e(i,n,a)}if("value"in r)return r.value;var o=r.get;return void 0!==o?o.call(a):void 0},d=n(0),f=r(d),m=n(9),h=n(7),g=n(5),b=a(g),C=n(28),y=a(C),_=n(16),v=a(_),E=n(1),A=r(E),I=n(18),P=r(I),S=n(19),k=r(S),T=n(24),w=r(T),N=n(10),O=r(N),B=n(6),j=r(B),M=n(14),R=r(M),x=n(4),G=r(x),D=n(25),U=r(D),L=n(2),F=r(L),H=function(e){function t(e){i(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.handlePublish=n.handlePublish.bind(n),n.handleItemSelected=n.handleItemSelected.bind(n),n.setBreadcrumbs=n.setBreadcrumbs.bind(n),n.handleCloseItem=n.handleCloseItem.bind(n),n}return l(t,e),c(t,[{key:"componentDidMount",value:function(){var e=this.props.itemListViewEndpoint.url.replace(/:id/,this.props.campaignId);p(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"componentDidMount",this).call(this),this.setBreadcrumbs(),Object.keys(this.props.record).length||this.props.recordActions.fetchRecord(this.props.treeClass,"get",e).then(this.setBreadcrumbs)}},{key:"setBreadcrumbs",value:function(){if(this.props.record){var e=[{text:F.default._t("CampaignAdmin.CAMPAIGN","Campaigns"),href:this.props.sectionConfig.url}];e.push({text:this.props.record.Name,href:this.props.sectionConfig.url+"/set/"+this.props.campaignId+"/show"}),this.props.breadcrumbsActions.setBreadcrumbs(e)}}},{key:"render",value:function(){var e=this,t=this.props.campaign.changeSetItemId,n=null,a=t?"":"campaign-admin__campaign--hide-preview",r=this.props.campaignId,i=this.props.record,o=this.groupItemsForSet(),l=[];Object.keys(o).forEach(function(a){var s=o[a],u=s.items.length,c=[],p=u+" "+(1===u?s.singular:s.plural),d="Set_"+r+"_Group_"+a;s.items.forEach(function(a){t||(t=a.ID);var r=t===a.ID;r&&a._links&&(n=a._links);var o=[];"none"!==a.ChangeType&&"published"!==i.State||o.push("list-group-item--inactive"),r&&o.push("active"),c.push(f.default.createElement(w.default,{key:a.ID,className:o.join(" "),handleClick:e.handleItemSelected,handleClickArg:a.ID},f.default.createElement(R.default,{item:a,campaign:e.props.record})))}),l.push(f.default.createElement(k.default,{key:d,groupid:d,title:p},c))});var s=[this.props.config.absoluteBaseUrl,this.props.config.sections.find(function(e){return"SilverStripe\\CMS\\Controllers\\CMSPagesController"===e.name}).url].join(""),u=l.length?f.default.createElement(P.default,null,l):f.default.createElement("div",{className:"alert alert-warning",role:"alert"},f.default.createElement("strong",null,"This campaign is empty.")," You can add items to a campaign by selecting ",f.default.createElement("em",null,"Add to campaign")," from within the ",f.default.createElement("em",null,"More Options "),"popup on ",f.default.createElement("a",{href:s},"pages")," and files."),c=["panel","panel--padded","panel--scrollable","flexbox-area-grow"];return f.default.createElement("div",{className:"fill-width campaign-admin__campaign "+a},f.default.createElement("div",{className:"fill-height campaign-admin__campaign-items","aria-expanded":"true"},f.default.createElement(O.default,{showBackButton:!0,handleBackButtonClick:this.props.handleBackButtonClick},f.default.createElement(G.default,{multiline:!0})),f.default.createElement("div",{className:c.join(" ")},u),f.default.createElement("div",{className:"toolbar toolbar--south"},this.renderButtonToolbar())),f.default.createElement(U.default,{itemLinks:n,itemId:t,onBack:this.handleCloseItem}))}},{key:"handleItemSelected",value:function(e,t){this.props.campaignActions.selectChangeSetItem(t)}},{key:"handleCloseItem",value:function(){this.props.campaignActions.selectChangeSetItem(null)}},{key:"renderButtonToolbar",value:function(){var e=this.getItems();if(!e||!e.length)return f.default.createElement("div",{className:"btn-toolbar"});var t={};return"open"===this.props.record.State?t=Object.assign(t,{title:F.default._t("CampaignAdmin.PUBLISHCAMPAIGN"),buttonStyle:"primary",loading:this.props.campaign.isPublishing,handleClick:this.handlePublish,icon:"rocket"}):"published"===this.props.record.State&&(t=Object.assign(t,{title:F.default._t("CampaignAdmin.REVERTCAMPAIGN"),buttonStyle:"secondary-outline",icon:"back-in-time",disabled:!0})),f.default.createElement("div",{className:"btn-toolbar"},f.default.createElement(j.default,t))}},{key:"getItems",value:function(){return this.props.record&&this.props.record._embedded?this.props.record._embedded.items:null}},{key:"groupItemsForSet",value:function(){var e={},t=this.getItems();return t?(t.forEach(function(t){var n=t.BaseClass;e[n]||(e[n]={singular:t.Singular,plural:t.Plural,items:[]}),e[n].items.push(t)}),e):e}},{key:"handlePublish",value:function(e){e.preventDefault(),this.props.campaignActions.publishCampaign(this.props.publishApi,this.props.treeClass,this.props.campaignId)}}]),t}(A.default);H.propTypes={campaign:f.default.PropTypes.shape({isPublishing:f.default.PropTypes.bool.isRequired,changeSetItemId:f.default.PropTypes.number}),breadcrumbsActions:f.default.PropTypes.object.isRequired,campaignActions:f.default.PropTypes.object.isRequired,publishApi:f.default.PropTypes.func.isRequired,record:f.default.PropTypes.object.isRequired,recordActions:f.default.PropTypes.object.isRequired,sectionConfig:f.default.PropTypes.object.isRequired,handleBackButtonClick:f.default.PropTypes.func},t.default=(0,h.connect)(s,u)(H)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){return{type:s.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM,payload:{changeSetItemId:e}}}function i(e,t){return function(n){n({type:s.default.SET_CAMPAIGN_ACTIVE_CHANGESET,payload:{campaignId:e,view:t}})}}function o(e,t,n){return function(a){a({type:s.default.PUBLISH_CAMPAIGN_REQUEST,payload:{campaignId:n}}),e({id:n}).then(function(e){a({type:s.default.PUBLISH_CAMPAIGN_SUCCESS,payload:{campaignId:n}}),a({type:c.default.FETCH_RECORD_SUCCESS,payload:{recordType:t,data:e}})}).catch(function(e){a({type:s.default.PUBLISH_CAMPAIGN_FAILURE,payload:{error:e}})})}}Object.defineProperty(t,"__esModule",{value:!0}),t.selectChangeSetItem=r,t.showCampaignView=i,t.publishCampaign=o;var l=n(3),s=a(l),u=n(27),c=a(u)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments[1];switch(t.type){case s.default.SET_CAMPAIGN_SELECTED_CHANGESETITEM:return(0,o.default)(Object.assign({},e,{changeSetItemId:t.payload.changeSetItemId}));case s.default.SET_CAMPAIGN_ACTIVE_CHANGESET:return(0,o.default)(Object.assign({},e,{campaignId:t.payload.campaignId,view:t.payload.view,changeSetItemId:null}));case s.default.PUBLISH_CAMPAIGN_REQUEST:return(0,o.default)(Object.assign({},e,{isPublishing:!0}));case s.default.PUBLISH_CAMPAIGN_SUCCESS:case s.default.PUBLISH_CAMPAIGN_FAILURE:return(0,o.default)(Object.assign({},e,{isPublishing:!1}));default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(22),o=a(i),l=n(3),s=a(l),u=(0,o.default)({campaignId:null,changeSetItemId:null,isPublishing:!1,view:null});t.default=r},function(e,t){e.exports=Accordion},function(e,t){e.exports=AccordionBlock},function(e,t){e.exports=Backend},function(e,t){e.exports=Config},function(e,t){e.exports=DeepFreezeStrict},function(e,t){e.exports=FormBuilderLoader},function(e,t){e.exports=ListGroupItem},function(e,t){e.exports=Preview},function(e,t){e.exports=ReactRouteRegister},function(e,t){e.exports=RecordsActionTypes},function(e,t){e.exports=RecordsActions},function(e,t){e.exports=ReducerRegister}]);