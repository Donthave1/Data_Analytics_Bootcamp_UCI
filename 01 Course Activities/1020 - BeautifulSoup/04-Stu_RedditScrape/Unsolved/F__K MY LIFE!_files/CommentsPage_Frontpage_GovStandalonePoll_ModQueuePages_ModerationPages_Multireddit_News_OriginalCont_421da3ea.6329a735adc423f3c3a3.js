(window.webpackJsonp=window.webpackJsonp||[]).push([["CommentsPage~Frontpage~GovStandalonePoll~ModQueuePages~ModerationPages~Multireddit~News~OriginalCont~421da3ea"],{"./src/reddit/components/AuthorHovercard/HoverCard.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o),i=n("./node_modules/react/index.js"),s=n.n(i),d=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/reselect/lib/index.js"),a=n("./src/app/actions/tooltip.ts"),u=n("./src/reddit/actions/governance.ts"),l=n("./src/reddit/actions/subscription.ts"),p=n("./src/reddit/components/TrackingHelper/index.tsx"),m=n("./src/reddit/featureFlags/index.ts"),b=n("./src/reddit/models/User/index.ts"),f=n("./src/reddit/selectors/meta.ts"),h=n("./src/reddit/selectors/moderatorPermissions.ts"),v=n("./src/reddit/selectors/tooltip.ts"),g=n("./src/reddit/selectors/user.ts"),x=n("./src/reddit/selectors/userFlair.ts"),j=n("./node_modules/babel-runtime/helpers/extends.js"),y=n.n(j),O=n("./src/config.ts"),C=n("./node_modules/react-router-dom/es/index.js"),w=n("./bundled-modules/styled-components/styled-components.min.js"),I=n.n(w),k=n("./src/app/strings/index.ts"),T=n("./src/higherOrderComponents/asTooltip.tsx"),_=n("./src/lib/prettyPrintNumber/index.ts"),M=n("./src/lib/timeAgo/index.ts"),L=n("./src/chat/helpers/urls/index.ts"),N=n("./src/reddit/components/Governance/CommunityCard/getToken.ts"),S=n("./src/reddit/components/Governance/Token/index.tsx"),P=n("./src/reddit/components/JSAPIContainers/index.tsx"),H=n("./src/reddit/constants/zIndex.ts"),z=n("./src/reddit/controls/Button/index.tsx"),E=n("./src/reddit/helpers/styles/components/index.tsx"),F=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),U=n("./src/reddit/helpers/trackers/authorHovercard.ts"),A=n("./src/reddit/icons/svgs/Chat/index.tsx"),B=n("./src/reddit/icons/svgs/Karma/index.tsx"),K=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),R=n("./src/reddit/actions/inContextModeration.ts"),Z=n("./src/reddit/actions/modal.ts"),D=n("./src/reddit/actions/subredditModeration.ts"),G=n("./src/reddit/constants/modals.ts"),W=n("./src/reddit/icons/svgs/Ban/index.tsx"),J=n("./src/reddit/icons/svgs/Mute/index.tsx"),q=n("./src/reddit/components/AuthorHovercard/helpers.ts"),V=I()(W.a).withConfig({componentId:"s1ewztkz-0"})(["",";"],q.c),Q=I()(J.a).withConfig({componentId:"s1ewztkz-1"})(["",";"],q.c),X=Object(d.connect)(null,function(e,t){var n=t.username,o=t.subredditId,r=t.contextId;return{toggleBanModal:function(){e(Object(R.c)({username:n,subredditId:o,contextId:r})),e(Object(D.X)(o))},toggleMuteModal:function(){e(Object(R.d)({username:n,subredditId:o,contextId:r})),e(Object(Z.h)(G.a.MUTE_USER))}}})(function(e){return r()("div",{className:e.className},void 0,r()(q.a,{role:"button",onClick:function(){e.toggleBanModal(),e.sendEvent(U.a(e.contextId))}},void 0,r()(V,{}),Object(k.a)(e.language,"user.tooltip.banUser")),r()(q.a,{role:"button",onClick:function(){e.toggleMuteModal(),e.sendEvent(U.d(e.contextId))}},void 0,r()(Q,{}),Object(k.a)(e.language,"user.tooltip.muteUser")))}),Y=n("./src/reddit/actions/userFlair.ts"),$=n("./src/reddit/icons/svgs/Tag/index.tsx"),ee=I()($.a).withConfig({componentId:"tte0kl-0"})(["",";"],q.c),te=Object(d.connect)(null,function(e,t){return{onToggleUserFlairModal:function(){return e(Object(Y.p)(t.subredditId,t.username))}}})(function(e){return r()(q.a,{role:"button",onClick:function(){e.onToggleUserFlairModal(),e.sendEvent(U.c(e.contextId))}},void 0,r()(ee,{}),Object(k.a)(e.language,"user.tooltip.editUserFlair"))}),ne=I()(Object(E.a)()).withConfig({componentId:"oyzke-0"})(["background: url('","');background-size: contain;border-radius: 4px;margin-right: 8px;margin-top: 3px;height: 32px;width: 32px;"],function(e){return e.url}),oe=(I()(z.d).withConfig({componentId:"oyzke-1"})(["margin-bottom: 12px;width: 100%;"]),I()(B.a).withConfig({componentId:"oyzke-2"})(["fill: ",";height: 20px;margin-top: 7px;width: 20px;"],function(e){return Object(K.c)(e).actionIcon})),re=Object(w.css)(["display: flex;height: 16px;width: 16px;margin-right: 6px;"]),ie=I()(A.a).withConfig({componentId:"oyzke-3"})(["",""],re),se=I()(S.a).withConfig({componentId:"oyzke-4"})(["",""],re),de=I()(C.a).withConfig({componentId:"oyzke-5"})(["","color: ",";display: inline-block;"],F.titleFontH4,function(e){return Object(K.c)(e).bodyText}),ce=I.a.div.withConfig({componentId:"oyzke-6"})(["","color: ",";"],F.metadataFont,function(e){return Object(K.c)(e).metaText}),ae=I.a.div.withConfig({componentId:"oyzke-7"})(["display: inline-block;"]),ue=I.a.div.withConfig({componentId:"oyzke-8"})(["display: inline-block;margin: 0px 3px;"]),le=I.a.div.withConfig({componentId:"oyzke-9"})(["width: 100%;box-sizing: border-box;display: flex;"]),pe=I.a.div.withConfig({componentId:"oyzke-10"})(["display: flex;padding: 12px 0px 4px 0px;"]),me=I.a.div.withConfig({componentId:"oyzke-11"})(["border-right: 1px solid ",";padding: 0px 12px 0px 6px;"],function(e){return Object(K.c)(e).line}),be=I.a.div.withConfig({componentId:"oyzke-12"})(["padding-left: 12px;"]),fe=I.a.div.withConfig({componentId:"oyzke-13"})(["","color: ",";padding-right: 12px;"],F.titleFontH4,function(e){return Object(K.c)(e).bodyText}),he=I.a.div.withConfig({componentId:"oyzke-14"})(["","color: ",";"],F.titleFontH6,function(e){return Object(K.c)(e).bodyText}),ve=I()(Object(E.a)()).withConfig({componentId:"oyzke-15"})(["background-image: url(",");border-top-left-radius: 4px;border-top-right-radius: 4px;height: 4px;"],function(e){return e.image||O.a.assetPath+"/img/user-info-banner.png"}),ge=I.a.div.withConfig({componentId:"oyzke-16"})(["padding: 12px 12px 0px 12px;"]),xe=I.a.div.withConfig({componentId:"oyzke-17"})(["height: 8px;"]),je=function(e){return r()("div",{},void 0,r()(de,{to:""+e.user.url},void 0,"u/"+e.userName),r()(ce,{},void 0,e.user.username&&r()(ae,{},void 0,e.user.username,r()(ue,{},void 0,"•")),r()(ae,{},void 0,Object(M.a)(e.language,e.user.created))))},ye=function(e){return r()(pe,{},void 0,r()(oe,{}),r()(me,{},void 0,r()(fe,{},void 0,Object(_.b)(e.user.postKarma)),r()(he,{},void 0,Object(k.a)(e.language,"user.tooltip.postKarma"))),r()(be,{},void 0,r()(fe,{},void 0,Object(_.b)(e.user.commentKarma)),r()(he,{},void 0,Object(k.a)(e.language,"user.tooltip.commentKarma"))))},Oe=Object(w.css)(["","display: flex;cursor: pointer;color: ",";fill: ",";padding: 6px 12px;&:hover {background-color: ",";color: ",";fill: ","}"],F.actionFont,function(e){return Object(K.c)(e).actionIcon},function(e){return Object(K.c)(e).actionIcon},function(e){return Object(K.c)(e).line},function(e){return Object(K.c)(e).bodyText},function(e){return Object(K.c)(e).bodyText}),Ce=I.a.a.withConfig({componentId:"oyzke-18"})(["",""],Oe),we=I.a.div.withConfig({componentId:"oyzke-19"})(["background-color: ",";border-radius: 4px;box-shadow: 0 1px 3px rgba(0,0,0,0.2);position: absolute;width: ","px;z-index: ",";"],function(e){return Object(K.c)(e).body},240,H.s),Ie=Object(T.a)(function(e){var t=e.className,n=e.contextId,o=e.hideNSFWPref,i=e.hoverId,s=e.isCurrentUser,d=e.isGov,c=e.origin,a=(e.onToggleFollow,e.language),u=e.moderatorPermissions,l=e.sendEvent,p=e.style,m=e.subredditId,b=e.userName,f=e.user,h=e.userFlair,v=e.userInChat;if(!f)return r()(we,{style:p});var g=f.isNSFW&&o,x=f.accountIcon||O.a.assetPath+"/img/snoo_user_placeholder.png",j=u&&u.flair,y=u&&u.access,C=h&&h.templateIds&&h.templateIds.length>0,w=h&&h.displaySettings&&h.displaySettings.isEnabled;return r()(we,{className:t,id:i,style:p},void 0,r()(ve,{image:g?void 0:e.user.bannerImage}),r()(ge,{},void 0,r()(le,{},void 0,r()(ne,{url:g?O.a.assetPath+"/img/avatar_over18_square.png":x}),r()(je,{language:a,origin:c,user:f,userName:b})),r()(ye,{language:a,user:f,userName:b}),!1),y&&n&&!s&&m&&r()(X,{contextId:n,language:a,subredditId:m,sendEvent:l,username:b}),j&&n&&(C||w)&&m&&r()(te,{contextId:n,language:a,subredditId:m,sendEvent:l,username:b}),v&&r()(Ce,{href:Object(L.d)(f.id),target:"_blank",rel:"noopener noreferrer",onClick:function(){return l(Object(U.b)(n))}},void 0,r()(ie,{}),Object(k.a)(a,"user.tooltip.inviteToChat")),d&&r()(Ce,{onClick:function(){return e.onOpenTransferModal(f.username)}},void 0,m&&r()(se,{subredditId:m}),Object(k.a)(a,"gov.transferModalTitle",{tokenName:Object(N.a)(m||"")})),r()(P.i,{contextId:n,subredditId:m,user:f}),!(y||v)&&r()(xe,{}))}),ke=function(e){var t=e.activeTooltipId===e.tooltipId;return s.a.createElement(Ie,y()({isOpen:t},e))},Te=Object(c.createStructuredSelector)({activeTooltipId:v.a,isCurrentUser:function(e,t){var n=Object(g.j)(e);return!!n&&Object(b.d)(n)===t.userName},isGov:m.d.governance,hideNSFWPref:g.w,language:g.I,moderatorPermissions:h.f,origin:f.c,user:g.T,userFlair:x.b,userInChat:m.d.userInChat}),_e=Object(d.connect)(Te,function(e,t){return{onHideTooltip:function(){return e(Object(a.f)())},onToggleFollow:function(){return e(l.g({name:"u_"+t.user.username,type:"profile"},!t.user.isFollowing))},onOpenTransferModal:function(t){return e(Object(u.q)({recipient:t}))}}});t.a=_e(Object(p.b)(function(e){return r()("div",{className:e.className,id:e.tooltipId,onMouseLeave:e.onHideTooltip},void 0,r()(ke,{activeTooltipId:e.activeTooltipId,contextId:e.contextId,isCurrentUser:e.isCurrentUser,isGov:e.isGov,hideNSFWPref:e.hideNSFWPref,hoverId:e.hoverId,language:e.language,moderatorPermissions:e.moderatorPermissions,onHideTooltip:e.onHideTooltip,onToggleFollow:e.onToggleFollow,onOpenTransferModal:e.onOpenTransferModal,origin:e.origin,sendEvent:e.sendEvent,subredditId:e.subredditId,tooltipId:e.tooltipId,tooltipType:e.tooltipType,user:e.user,userFlair:e.userFlair,userInChat:e.userInChat,userName:e.userName}))}))},"./src/reddit/components/AuthorHovercard/HoverDiv.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o),i=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(i),d=n("./node_modules/babel-runtime/helpers/createClass.js"),c=n.n(d),a=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),u=n.n(a),l=n("./node_modules/babel-runtime/helpers/inherits.js"),p=n.n(l),m=n("./node_modules/babel-runtime/regenerator/index.js"),b=n.n(m),f=n("./node_modules/babel-runtime/helpers/asyncToGenerator.js"),h=n.n(f),v=n("./node_modules/react/index.js"),g=n.n(v),x=n("./node_modules/react-redux/es/index.js"),j=n("./node_modules/reselect/lib/index.js"),y=n("./bundled-modules/styled-components/styled-components.min.js"),O=n.n(y),C=n("./src/app/actions/tooltip.ts"),w=n("./src/reddit/actions/users.ts"),I=n("./src/reddit/selectors/tooltip.ts"),k=Object(j.createStructuredSelector)({dropdownIsOpen:function(e,t){return Object(I.b)(t.tooltipId)(e)}}),T=Object(x.connect)(k,function(e,t){return{onCloseUserDropdown:function(){return e(Object(C.f)())},onOpenUserDropdown:(n=h()(b.a.mark(function n(){return b.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:e(Object(C.d)({tooltipId:t.tooltipId})),e(Object(w.s)(t.author));case 2:case"end":return n.stop()}},n,void 0)})),function(){return n.apply(this,arguments)})};var n}),_=function(e){function t(){s()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.closeHovercardTimeoutId=0,e.openHovercardTimeoutId=0,e.isHovering=!1,e.hoverEl=void 0,e.onHoverElMouseEnter=function(){e.isHovering=!0},e.onHoverElMouseLeave=function(){e.isHovering=!1},e.onMouseEnter=function(t){e.closeHovercardTimeoutId&&clearTimeout(e.closeHovercardTimeoutId),e.openHovercardTimeoutId=window.setTimeout(function(){e.isHovering||e.props.dropdownIsOpen||(e.props.onOpenUserDropdown(),e.props.sendHoverEvent())},500)},e.onMouseLeave=function(){e.openHovercardTimeoutId&&clearTimeout(e.openHovercardTimeoutId),e.closeHovercardTimeoutId=window.setTimeout(function(){e.isHovering||e.props.onCloseUserDropdown()},300)},e}return p()(t,e),c()(t,[{key:"componentDidMount",value:function(){var e=document.getElementById(this.props.hoverId);e&&(this.hoverEl=e,this.addHoverListeners(this.hoverEl))}},{key:"componentWillUnmount",value:function(){this.hoverEl&&this.removeHoverListeners(this.hoverEl),this.hoverEl=void 0,this.openHovercardTimeoutId&&window.clearTimeout(this.openHovercardTimeoutId)}},{key:"addHoverListeners",value:function(e){e.addEventListener("mouseenter",this.onHoverElMouseEnter),e.addEventListener("mouseleave",this.onHoverElMouseLeave)}},{key:"removeHoverListeners",value:function(e){e.removeEventListener("mouseenter",this.onHoverElMouseEnter),e.removeEventListener("mouseleave",this.onHoverElMouseLeave)}},{key:"render",value:function(){var e=this.props,t=e.children,n=e.className;return r()("div",{className:n,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave},void 0,t)}}]),t}(g.a.Component);t.a=O()(T(_)).withConfig({componentId:"wx076j-0"})(["display: inline-block;flex: 0 0 auto;"])},"./src/reddit/components/AuthorHovercard/helpers.ts":function(e,t,n){"use strict";n.d(t,"a",function(){return d}),n.d(t,"c",function(){return c}),n.d(t,"b",function(){return a});var o=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),r=n("./src/reddit/layout/row/Inline/index.tsx"),i=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),s=n("./bundled-modules/styled-components/styled-components.min.js"),d=n.n(s)()(r.a).withConfig({componentId:"ysxsmm-0"})(["","cursor: pointer;color: ",";fill: ",";padding: 6px 12px;&:hover {background-color: ",";color: ",";fill: ",";}"],o.actionFont,function(e){return Object(i.c)(e).actionIcon},function(e){return Object(i.c)(e).actionIcon},function(e){return Object(i.c)(e).line},function(e){return Object(i.c)(e).bodyText},function(e){return Object(i.c)(e).bodyText}),c="\n  display: flex;\n  height: 16px;\n  width: 16px;\n  margin-right: 6px;\n",a=function(e){var t=e.itemId,n=e.tooltipType,o=e.author,r="UserInfoTooltip";return t&&(r=r+"--"+t),n&&(r=r+"--"+n),o&&(r=r+"--"+o),r}},"./src/reddit/components/Governance/Token/index.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return d});var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o),i=(n("./node_modules/react/index.js"),n("./src/config.ts")),s=n("./src/reddit/components/Governance/CommunityCard/getToken.ts");function d(e){var t=Object(s.b)(e.subredditId),n=e.grey?t.grey:t.filled;return r()("img",{className:e.className,src:i.a.assetPath+"/"+n})}},"./src/reddit/components/JSAPIContainers/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o),i=n("./node_modules/react/index.js"),s=n.n(i),d=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/reselect/lib/index.js"),a=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),u=n.n(a),l=n("./node_modules/babel-runtime/helpers/createClass.js"),p=n.n(l),m=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),b=n.n(m),f=n("./node_modules/babel-runtime/helpers/inherits.js"),h=n.n(f),v=n("./node_modules/lodash/isNil.js"),g=n.n(v),x=n("./src/reddit/constants/jsapiEvents.ts"),j=n("./src/reddit/singleton/EventSystem.ts"),y=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(e);r<o.length;r++)t.indexOf(o[r])<0&&(n[o[r]]=e[o[r]])}return n},O=Object(c.createStructuredSelector)({consumers:function(e){return e.jsApi}}),C=Object(d.connect)(O,{})(function(e){function t(){u()(this,t);var e=b()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.el=void 0,e.fireEvent=function(t){var n=e.props,o=(n.className,n.consumers,y(n,["className","consumers"]));j.a.publish(x.a,o,t)},e.setRef=function(t){return e.el=t},e}return h()(t,e),p()(t,[{key:"componentDidMount",value:function(){g()(this.el)||this.fireEvent(this.el)}},{key:"componentDidUpdate",value:function(){g()(this.el)||this.fireEvent(this.el)}},{key:"render",value:function(){var e=this.props;return e.consumers.length?s.a.createElement("span",{className:this.props.className,ref:this.setRef},e.consumers.map(function(e){return e&&r()("span",{"data-name":e},e)})):null}}]),t}(i.Component)),w=n("./src/reddit/selectors/comments.ts"),I=n("./src/reddit/selectors/posts.ts"),k=function(e,t){var n=Object(w.n)(e,t),o=n.postId,r=Object(I.K)(e,{postId:o});return{comment:n,isModerator:!(!r||!r.name)&&!!e.moderatingSubreddits[r.name],subredditOrProfile:Object(I.K)(e,{postId:o})}},T=Object(d.connect)(function(){return Object(c.createSelector)(k,w.j,function(e,t){return Object.assign({},e,{depth:t})})})(function(e){return r()(C,{type:"comment",data:{author:e.comment.author,approvedAtUTC:e.comment.approvedAtUTC,approvedBy:e.comment.approvedBy,bannedAtUTC:e.comment.bannedAtUTC,body:e.comment.body,created:e.comment.created,distinguishType:e.comment.distinguishType,id:e.comment.id,isApproved:e.comment.isApproved,isRemoved:e.comment.isRemoved,isSpam:e.comment.isSpam,isStickied:e.comment.isStickied,isTopLevel:0===e.depth,post:{id:e.comment.postId},removedBy:e.comment.bannedBy,subreddit:{id:e.subredditOrProfile?e.subredditOrProfile.id:"",name:e.subredditOrProfile?e.subredditOrProfile.name:"",type:e.subredditOrProfile?e.subredditOrProfile.type:""}}})}),_=n("./src/reddit/selectors/subreddit.ts"),M=function(e,t){var n=Object(w.n)(e,t),o=Object(_.w)(e,t);return{comment:n,isModerator:!(!o||!o.name)&&!!e.moderatingSubreddits[o.name],subredditOrProfile:o}},L=Object(d.connect)(function(){return Object(c.createSelector)(M,function(e){return e})})(function(e){return r()(C,{type:"commentAuthor",data:{author:e.comment.author,comment:{id:e.commentId},isModerator:e.isModerator,post:{id:e.comment.postId},subreddit:{id:e.subredditOrProfile?e.subredditOrProfile.id:"",name:e.subredditOrProfile?e.subredditOrProfile.name:"",type:e.subredditOrProfile?e.subredditOrProfile.type:""}}})}),N=Object(d.connect)(function(){return Object(c.createStructuredSelector)({subreddit:_.z})})(function(e){return r()(C,{className:e.className,type:"communityTools",data:{sectionName:e.sectionName,subreddit:e.subreddit?{id:e.subreddit.id,name:e.subreddit.name,type:e.subreddit.type}:{}}})}),S=Object(d.connect)(function(){return Object(c.createStructuredSelector)({post:I.z,subredditOrProfile:I.K,isModerator:function(e,t){var n=Object(I.K)(e,t);return n&&!!e.moderatingSubreddits[n.name]||!1}})})(function(e){return r()(C,{className:e.className,type:"post",data:{author:e.post.author,approvedAtUTC:e.post.approvedAtUTC,approvedBy:e.post.approvedBy,bannedAtUTC:e.post.bannedAtUTC,created:e.post.created,distinguishType:e.post.distinguishType,domain:e.post.source&&e.post.source.displayText,flair:e.post.flair,id:e.post.id,isApproved:e.post.isApproved,isRemoved:e.post.isRemoved,isSpam:e.post.isSpam,media:e.post.media,permalink:e.post.permalink,removedBy:e.post.bannedBy,sourceUrl:e.post.source&&e.post.source.url,subreddit:e.subredditOrProfile?{id:e.subredditOrProfile.id,name:e.subredditOrProfile.name,type:e.subredditOrProfile.type}:{},title:e.post.title,voteState:e.post.voteState}})}),P=Object(d.connect)(function(){return Object(c.createStructuredSelector)({subredditOrProfile:function(e,t){return Object(I.K)(e,{postId:t.post.id})},isModerator:function(e,t){var n=Object(I.K)(e,{postId:t.post.id});return n&&!!e.moderatingSubreddits[n.name]||!1}})})(function(e){return r()(C,{className:e.className,type:"postAuthor",data:{author:e.post.author,isModerator:e.isModerator,post:{id:e.post.id},subreddit:e.subredditOrProfile?{id:e.subredditOrProfile.id,name:e.subredditOrProfile.name,type:e.subredditOrProfile.type}:{}}})}),H=Object(d.connect)(function(){return Object(c.createStructuredSelector)({post:I.z,subredditOrProfile:I.K,isModerator:function(e,t){var n=Object(I.K)(e,t);return n&&!!e.moderatingSubreddits[n.name]||!1}})})(function(e){return r()(C,{className:e.className,type:"postModTools",data:{author:e.post.author,approvedAtUTC:e.post.approvedAtUTC,approvedBy:e.post.approvedBy,bannedAtUTC:e.post.bannedAtUTC,distinguishType:e.post.distinguishType,flair:e.post.flair,id:e.post.id,isApproved:e.post.isApproved,isRemoved:e.post.isRemoved,isSpam:e.post.isSpam,media:e.post.media,permalink:e.post.permalink,removedBy:e.post.bannedBy,subreddit:e.subredditOrProfile?{id:e.subredditOrProfile.id,name:e.subredditOrProfile.name,type:e.subredditOrProfile.type}:{},title:e.post.title,voteState:e.post.voteState}})}),z=Object(d.connect)(function(){return Object(c.createStructuredSelector)({subreddit:_.z})})(function(e){return r()(C,{className:e.className,type:"sidebar",data:{subreddit:e.subreddit?{id:e.subreddit.id,name:e.subreddit.name,type:e.subreddit.type}:{}}})}),E=Object(d.connect)(function(){return Object(c.createStructuredSelector)({subredditOrProfile:function(e,t){return Object(_.x)(e,{identifier:t})}})})(function(e){return r()(C,{className:e.className,type:"subreddit",data:{id:e.subredditOrProfile.id,displayText:e.subredditOrProfile.displayText,name:e.subredditOrProfile.name,title:e.subredditOrProfile.title,url:e.subredditOrProfile.title}})}),F=Object(d.connect)(function(){return Object(c.createStructuredSelector)({subreddit:function(e,t){var n=t.subredditId;return n?Object(_.z)(e,{subredditId:n}):null}})})(function(e){return r()(C,{className:e.className,type:"userHovercard",data:{user:e.user,contextId:e.contextId,subreddit:e.subreddit?{id:e.subreddit.id,name:e.subreddit.name,type:e.subreddit.type}:{}}})});n.d(t,"a",function(){return T}),n.d(t,"b",function(){return L}),n.d(t,"c",function(){return N}),n.d(t,"d",function(){return S}),n.d(t,"e",function(){return P}),n.d(t,"f",function(){return H}),n.d(t,"g",function(){return z}),n.d(t,"h",function(){return E}),n.d(t,"i",function(){return F})},"./src/reddit/components/RawHTMLDisplay/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o),i=n("./node_modules/polished/dist/polished.es.js"),s=(n("./node_modules/react/index.js"),n("./node_modules/react-redux/es/index.js")),d=n("./bundled-modules/styled-components/styled-components.min.js"),c=n.n(d),a=n("./src/reddit/actions/page.ts"),u=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),l=n("./src/reddit/helpers/styles/postBackgroundColor.ts"),p=n("./src/reddit/helpers/styles/smartTextColor.ts"),m=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),b=Object(s.connect)(null,function(e){return{onNavigate:function(t){return e(Object(a.N)(t))}}}),f=c()(function(e){return r()("div",{className:e.className,dangerouslySetInnerHTML:{__html:e.html},onClick:function(t){!function(e,t,n){e.ctrlKey||e.metaKey||1===e.button||"A"!==e.target.tagName?n&&n():(e.preventDefault(),t(e.target.getAttribute("href")))}(t,e.onNavigate,e.onClick)}})}).withConfig({componentId:"ser2k5-0"})(["","color: ",";word-break: break-word;h1 {","}h2 {","}h3 {","}h4 {","}h5 {","}h6 {","}h1, h2, h3, h4, h5, h6 {margin-top: 1.4em;margin-bottom: 8px;}/* api considers <strong> to be bold, and <em> as italic */em {font-style: italic;}strong {font-weight: 700;}sup {position: relative;top: -0.4em;font-size: 0.7em;line-height: 0.7em;}ul, ol {margin: 4px 0 4px 8px;}a {color: ",";&, &:visited {color: ",";text-decoration: underline;}}ul li, ol li {margin: 0.4em 1em;> p {margin-left: -0.2em;}}ul li {list-style: disc outside;}ol li {list-style: decimal outside;}p {padding: 0.5em 0;&:first-child {padding-top: 0;}&:last-child {padding-bottom: 0;}}blockquote {border-left: 4px solid rgba(0, 0, 0, 0.2);margin: 4px 0 4px 8px;padding-left: 8px;}pre {background: rgba(238, 238, 238, 0.8);display: grid;line-height: 1.4;margin: 4px 0;max-width: 100%;overflow: auto;padding: 8px;}pre code {background-color: transparent;color: #222;margin: 0;}code {","background: ",";color: ",";margin: 0 2px;max-width: 100%;overflow: auto;}table {border: 2px solid ",";border-collapse: collapse;display: inline-block;margin-bottom: 4px;margin-top: 4px;overflow-x: auto;word-break: normal;max-width: 100%;}tr {border: 1px solid ",";&:nth-child(even) {background-color: ",";}&:nth-child(odd) {background-color: ",";}}th, td {border: 1px solid ",";padding: 4px 8px;}th {text-align: center;}hr {border: 0;border-top: 1px solid ",";height: 1px;margin-bottom: 8px;margin-top: 8px;}.md-spoiler-text {border-radius: 2px;background: ",";cursor: pointer;color: transparent;& > * {opacity: 0;}}"],u.bodyFont,function(e){return Object(p.a)(Object(l.a)(e))},u.bodyFontH1,u.bodyFontH2,u.bodyFontH3,u.bodyFontH4,u.bodyFontH5,u.bodyFontH6,function(e){return Object(m.c)(e).linkText},function(e){return Object(m.c)(e).linkText},u.bodyFontMono,function(e){return Object(m.c)(e).flair},function(e){return Object(m.c)(e).postFlairText},function(e){return Object(m.c)(e).line},function(e){return Object(m.c)(e).line},function(e){return Object(i.e)(Object(m.c)(e).body,.8)},function(e){return Object(i.e)(Object(m.c)(e).line,.8)},function(e){return Object(m.c)(e).line},function(e){return Object(i.e)(Object(m.c)(e).bodyText,.2)},function(e){return Object(m.c)(e).metaText});t.a=b(f)},"./src/reddit/controls/Dropdown/Row.tsx":function(e,t,n){"use strict";n.d(t,"a",function(){return C}),n.d(t,"d",function(){return w}),n.d(t,"b",function(){return k});var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o),i=n("./node_modules/babel-runtime/helpers/classCallCheck.js"),s=n.n(i),d=n("./node_modules/babel-runtime/helpers/createClass.js"),c=n.n(d),a=n("./node_modules/babel-runtime/helpers/possibleConstructorReturn.js"),u=n.n(a),l=n("./node_modules/babel-runtime/helpers/inherits.js"),p=n.n(l),m=n("./node_modules/react/index.js"),b=n.n(m),f=n("./bundled-modules/styled-components/styled-components.min.js"),h=n.n(f),v=n("./src/reddit/controls/UnstyledInternalLink/index.tsx"),g=n("./src/reddit/helpers/styles/mixins/fonts.tsx"),x=n("./src/reddit/layout/row/InlineButton/index.tsx"),j=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),y=n("./node_modules/lodash/throttle.js"),O=n.n(y),C=h.a.div.withConfig({componentId:"s1vspxim-0"})(["display: inline-block;vertical-align: middle;margin-right: 2px;width: 20px;"]),w="\n  fill: currentColor;\n  display: block;\n  margin: 0 auto;\n  height: 16px;\n  width: 16px;\n",I=h.a.span.withConfig({componentId:"s1vspxim-1"})(["display: inline-block;"]),k=function(e){function t(){s()(this,t);var e=u()(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments));return e.handleMouseMove=O()(function(){var t=e.props;t.handleActivateRow&&t.handleActivateRow(t.index)},500),e}return p()(t,e),c()(t,[{key:"render",value:function(){var e=this.props;return e.href?r()(v.a,{id:e.id,className:e.className,onMouseMove:this.handleMouseMove,role:"menuitem",to:e.href},void 0,e.children&&r()(C,{},void 0,e.children),r()(I,{},void 0,e.displayText)):r()(x.a,{id:e.id,className:e.className,onClick:e.onClick,onMouseMove:O()(this.handleMouseMove,500),role:"menuitem"},void 0,e.children&&(e.noIcon?r()("div",{},void 0,e.children):r()(C,{},void 0,e.children)),e.displayText&&r()(I,{},void 0,e.displayText))}}]),t}(b.a.Component);t.c=h()(k).withConfig({componentId:"s1vspxim-2"})(["","color: ",";fill: ",";background-color: ",";border: "," solid 1px;display: block;padding: 8px;text-transform: capitalize;white-space: nowrap;","","&:focus {background-color: ",";border-color: ",";color: ",";fill: ",";outline: none;}"],g.titleFontH5,function(e){return e.isSelected?Object(j.c)(e).button:Object(j.c)(e).actionIcon},function(e){return e.isSelected?Object(j.c)(e).button:Object(j.c)(e).actionIcon},function(e){return Object(j.c)(e).body},function(e){return Object(j.c)(e).line},"",function(e){return e.noHover?"":"\n    &:active,\n    &:hover,\n  "},function(e){return Object(j.c)(e).highlight},function(e){return Object(j.c)(e).highlight},function(e){return e.isSelected?Object(j.c)(e).button:Object(j.c)(e).bodyText},function(e){return e.isSelected?Object(j.c)(e).button:Object(j.c)(e).bodyText})},"./src/reddit/controls/LoadingIcon/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/polished/dist/polished.es.js"),r=n("./bundled-modules/styled-components/styled-components.min.js"),i=n.n(r),s=n("./src/reddit/helpers/styles/components/index.tsx"),d=n("./src/reddit/models/Theme/NewColorSystem/index.ts"),c=i()(Object(s.a)()).withConfig({componentId:"s1h5d9ni-0"})(["width: ","px;height: ","px;","font-size: 4px;position: relative;text-indent: -9999em;border-radius: 50%;border-top: .6em solid ",";border-right: .6em solid ",";border-bottom: .6em solid ",";border-left: .6em solid ",";transform: translateZ(0);animation: spin 1.1s infinite linear;&:after {border-radius: 50%;width: ","px;height: ","px;}@keyframes spin {0% {-webkit-transform: rotate(0deg);transform: rotate(0deg);}100% {-webkit-transform: rotate(360deg);transform: rotate(360deg);}}"],function(e){return e.sizePx},function(e){return e.sizePx},function(e){return e.center?"margin: 0 auto;":""},function(e){return Object(o.e)(Object(d.c)(e).bodyText,.2)},function(e){return Object(o.e)(Object(d.c)(e).bodyText,.2)},function(e){return Object(o.e)(Object(d.c)(e).bodyText,.2)},function(e){return Object(d.c)(e).body},function(e){return e.sizePx},function(e){return e.sizePx});t.a=c},"./src/reddit/controls/UnstyledInternalLink/index.tsx":function(e,t,n){"use strict";var o=n("./bundled-modules/styled-components/styled-components.min.js"),r=n.n(o),i=n("./src/reddit/controls/InternalLink/index.tsx");t.a=r()(i.a).withConfig({componentId:"s1fauk9w-0"})(["text-decoration: none;fill: currentColor;color: inherit;"])},"./src/reddit/helpers/trackers/authorHovercard.ts":function(e,t,n){"use strict";n.d(t,"e",function(){return s}),n.d(t,"d",function(){return d}),n.d(t,"a",function(){return c}),n.d(t,"c",function(){return a}),n.d(t,"b",function(){return u});var o=n("./src/reddit/helpers/isComment.ts"),r=n("./src/reddit/selectors/telemetry.ts"),i=function(e,t){return{comment:Object(o.a)(t)?r.comment(e,t):null,post:r.post(e,t),profile:r.profile(e),screen:r.screen(e)}},s=function(e){return function(t){return Object.assign({source:"user_hovercard",action:"view",noun:"hover_user_hovercard"},i(t,e))}},d=function(e){return function(t){return Object.assign({source:"user_hovercard",action:"click",noun:"mute_dialog_in_context"},i(t,e))}},c=function(e){return function(t){return Object.assign({source:"user_hovercard",action:"click",noun:"ban_dialog_in_context"},i(t,e))}},a=function(e){return function(t){return Object.assign({source:"user_hovercard",action:"click",noun:"change_user_flair_in_context"},i(t,e))}},u=function(e){return function(t){return Object.assign({source:"user_hovercard",action:"click",noun:"chat"},e&&i(t,e))}}},"./src/reddit/icons/svgs/Ban/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o);n("./node_modules/react/index.js");t.a=function(e){return r()("svg",{className:e.className,viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},void 0,r()("g",{},void 0,r()("path",{d:"M12.8172,7.49104 C12.8172,7.70304 12.7332,7.90704 12.5828,8.05664 L9.5196,11.11984 C9.3636,11.27584 9.1588,11.35424 8.954,11.35424 C8.7492,11.35424 8.5444,11.27584 8.3884,11.11984 L7.2572,9.98784 L2.966,14.27904 C2.8092,14.43584 2.6044,14.51344 2.4004,14.51344 C2.1956,14.51344 1.9908,14.43584 1.834,14.27904 C1.522,13.96704 1.522,13.46064 1.834,13.14784 L6.126,8.85664 L4.9948,7.72544 C4.682,7.41264 4.682,6.90704 4.9948,6.59424 L8.0572,3.53104 C8.3572,3.23104 8.8884,3.23104 9.1884,3.53104 L12.5828,6.92544 C12.7332,7.07504 12.8172,7.27904 12.8172,7.49104 Z M3.86328,6.26288 C3.65848,6.26288 3.45368,6.18448 3.29768,6.02848 C2.98488,5.71568 2.98488,5.21008 3.29768,4.89728 L6.36008,1.83408 C6.67288,1.52208 7.17928,1.52208 7.49128,1.83408 C7.80408,2.14688 7.80408,2.65328 7.49128,2.96528 L4.42888,6.02848 C4.27288,6.18448 4.06808,6.26288 3.86328,6.26288 Z M14.27968,8.62264 C14.59248,8.93544 14.59248,9.44104 14.27968,9.75384 L11.21728,12.81624 C11.06128,12.97224 10.85648,13.05064 10.65168,13.05064 C10.44688,13.05064 10.24208,12.97224 10.08608,12.81624 C9.77328,12.50424 9.77328,11.99784 10.08608,11.68504 L13.14848,8.62264 C13.46128,8.30984 13.96688,8.30984 14.27968,8.62264 Z"})))}},"./src/reddit/icons/svgs/Cake/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o);n("./node_modules/react/index.js");t.a=function(e){return r()("svg",{id:e.id,onMouseEnter:e.onMouseEnter,onMouseLeave:e.onMouseLeave,className:e.className,viewBox:"0 0 40 40",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},void 0,r()("g",{},void 0,r()("g",{},void 0,r()("path",{d:"M37.5,22.5V20h-35v15c0,1.4,1.1,2.5,2.5,2.5h30c1.4,0,2.5-1.1,2.5-2.5v0H6.2C5.6,35,5,34.5,5,33.8l0,0c0-0.7,0.6-1.2,1.2-1.2h31.3V30H6.2C5.6,30,5,29.5,5,28.8v0c0-0.7,0.6-1.2,1.2-1.2h31.3V25H6.2C5.6,25,5,24.5,5,23.8v0c0-0.7,0.6-1.2,1.2-1.2H37.5z"}),r()("path",{d:"M22.5,6c0,1.4-1.1,2.5-2.5,2.5S17.5,7.4,17.5,6S20,0,20,0S22.5,4.6,22.5,6z"}),r()("path",{d:"M20,15L20,15c-0.7,0-1.3-0.6-1.3-1.2v-2.5c0-0.7,0.6-1.2,1.2-1.2h0c0.7,0,1.2,0.6,1.2,1.2v2.5C21.2,14.5,20.7,15,20,15z"}),r()("path",{d:"M22.8,11.3v2.3c0,1.4-1,2.7-2.5,2.9c-1.6,0.2-3-1.1-3-2.7v-5c0,0,0-0.1,0-0.1l-0.8-0.4c-0.9-0.4-2-0.3-2.7,0.4L2.5,18.5h35L22.8,11.3z"}))))}},"./src/reddit/icons/svgs/Karma/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o);n("./node_modules/react/index.js");t.a=function(e){return r()("svg",{className:e.className,viewBox:"0 0 20 20",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},void 0,r()("g",{},void 0,r()("path",{d:"M6.42528593,9.54562407 C4.41043013,8.02026355 3.10790651,5.60355545 3.10790651,2.88165092 L3.10790651,2.79711586 L3.19244157,2.79711586 C5.9143461,2.79711586 8.33136499,4.09963948 9.85641472,6.11449528 C8.02399304,6.25279712 6.56358777,7.7128916 6.42528593,9.54562407 Z M6.42528593,10.2560915 C6.56358777,12.088824 8.02399304,13.5489184 9.85641472,13.6872203 C8.33136499,15.7020761 5.9143461,17.0045997 3.19244157,17.0045997 L3.10790651,17.0045997 L3.10790651,16.9200646 C3.10790651,14.1981601 4.41043013,11.781452 6.42528593,10.2560915 Z M13.6872203,10.2560915 C15.7020761,11.781452 17.0045997,14.1981601 17.0045997,16.9200646 L17.0045997,17.0045997 L16.9200646,17.0045997 C14.1981601,17.0045997 11.7811412,15.7020761 10.2560915,13.6872203 C12.0885132,13.5489184 13.5486077,12.088824 13.6872203,10.2560915 Z M16.9200646,2.79711586 L17.0045997,2.79711586 L17.0045997,2.88165092 C17.0045997,5.60324465 15.7020761,8.02026355 13.6872203,9.54562407 C13.5489184,7.7128916 12.0885132,6.25279712 10.2560915,6.11449528 C11.7811412,4.09963948 14.1981601,2.79711586 16.9200646,2.79711586 Z M19.9403282,9.84895574 L20,9.90862755 L19.9403282,9.96829935 C18.9346096,10.9740179 17.7346469,11.6624192 16.46227,12.0474888 C15.9659373,11.2534187 15.3446668,10.5308304 14.6071606,9.90862755 C15.3446668,9.28642466 15.9659373,8.5638364 16.46227,7.76976629 C17.7346469,8.1548359 18.9346096,8.8432372 19.9403282,9.84895574 Z M9.90862755,5.39283938 C9.28642466,4.65533317 8.5638364,4.03406266 7.76976629,3.53772999 C8.1548359,2.26535306 8.8432372,1.06539035 9.84895574,0.0596718051 L9.90862755,0 L9.96829935,0.0596718051 C10.9740179,1.06539035 11.6624192,2.26535306 12.0474888,3.53772999 C11.2534187,4.03406266 10.5308304,4.65533317 9.90862755,5.39283938 Z M5.39283938,9.90862755 C4.65533317,10.5308304 4.03406266,11.2534187 3.53772999,12.0474888 C2.26535306,11.6624192 1.06539035,10.9740179 0.0596718051,9.96829935 L0,9.90862755 L0.0596718051,9.84895574 C1.06539035,8.8432372 2.26535306,8.1548359 3.53772999,7.76976629 C4.03406266,8.5638364 4.65533317,9.28642466 5.39283938,9.90862755 Z M9.90862755,14.6071606 C10.5308304,15.3446668 11.2534187,15.9659373 12.0474888,16.46227 C11.6624192,17.7346469 10.9740179,18.9346096 9.96829935,19.9403282 L9.90862755,20 L9.84895574,19.9403282 C8.8432372,18.9346096 8.1548359,17.7346469 7.76976629,16.46227 C8.5638364,15.9659373 9.28642466,15.3446668 9.90862755,14.6071606 Z"})))}},"./src/reddit/icons/svgs/Mute/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o);n("./node_modules/react/index.js");t.a=function(e){return r()("svg",{className:e.className,viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},void 0,r()("g",{},void 0,r()("path",{d:"M9.97968,8.20936 C10.13568,8.36536 10.13568,8.61896 9.97968,8.77496 C9.90128,8.85336 9.79888,8.89256 9.69648,8.89256 C9.59488,8.89256 9.49248,8.85336 9.41408,8.77496 L7.99968,7.36056 L6.58608,8.77496 C6.50768,8.85336 6.40528,8.89256 6.30288,8.89256 C6.20048,8.89256 6.09808,8.85336 6.02048,8.77496 C5.86368,8.61896 5.86368,8.36536 6.02048,8.20936 L7.43408,6.79496 L6.02048,5.38136 C5.86368,5.22536 5.86368,4.97176 6.02048,4.81576 C6.17648,4.65976 6.43008,4.65976 6.58608,4.81576 L7.99968,6.22936 L9.41408,4.81576 C9.57008,4.65976 9.82368,4.65976 9.97968,4.81576 C10.13568,4.97176 10.13568,5.22536 9.97968,5.38136 L8.56528,6.79496 L9.97968,8.20936 Z M12.79968,1.59976 L3.19968,1.59976 C2.31808,1.59976 1.59968,2.31816 1.59968,3.19976 L1.59968,10.59496 C1.59968,11.47736 2.31808,12.19496 3.19968,12.19496 L6.10528,12.19496 L7.33408,14.03896 C7.48288,14.26136 7.73248,14.39496 7.99968,14.39496 C8.26688,14.39496 8.51728,14.26136 8.66528,14.03896 L9.89488,12.19496 L12.79968,12.19496 C13.68208,12.19496 14.39968,11.47736 14.39968,10.59496 L14.39968,3.19976 C14.39968,2.31816 13.68208,1.59976 12.79968,1.59976 L12.79968,1.59976 Z",id:"path-1"})))}},"./src/reddit/icons/svgs/Tag/index.tsx":function(e,t,n){"use strict";var o=n("./node_modules/babel-runtime/helpers/jsx.js"),r=n.n(o);n("./node_modules/react/index.js");t.a=function(e){return r()("svg",{className:e.className,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},void 0,r()("g",{},void 0,r()("path",{fill:"inherit",d:"M5.14293863,3.38188919 C5.75317178,3.99212234 5.75317178,4.98136473 5.14293863,5.59159788 C4.53270548,6.20183104 3.54346309,6.20183104 2.93322994,5.59159788 C2.32299679,4.98136473 2.32299679,3.99212234 2.93322994,3.38188919 C3.54346309,2.77165604 4.53270548,2.77165604 5.14293863,3.38188919 Z M1.01449569,2.94595786 L1,9.03662212 C1.00035355,9.55457784 1.19162594,10.0654625 1.55790725,10.4317438 L9.89929239,18.7731289 C10.6622606,19.5360972 11.8989904,19.5360972 12.661605,18.7734825 L18.7381272,12.6969604 C19.5007418,11.9343457 19.5007418,10.697616 18.7377736,9.93464773 L10.3963885,1.59326259 C10.0301071,1.22698128 9.54786032,1.00707107 9.02955105,1.00707107 L2.96045355,1 C1.8814086,1 1.01414214,1.86726647 1.01449569,2.94595786 Z"})))}}}]);
//# sourceMappingURL=CommentsPage~Frontpage~GovStandalonePoll~ModQueuePages~ModerationPages~Multireddit~News~OriginalCont~421da3ea.6329a735adc423f3c3a3.js.map