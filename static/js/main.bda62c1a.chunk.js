(this["webpackJsonpvoicebot-interface"]=this["webpackJsonpvoicebot-interface"]||[]).push([[0],{1:function(e,t,n){e.exports={container:"voicecommandinterface_container__2Awt9","bot-container":"voicecommandinterface_bot-container__2lBKs","bot-header":"voicecommandinterface_bot-header__3LpK6","bot-header-logo":"voicecommandinterface_bot-header-logo__2Qa_T","bot-header-heading":"voicecommandinterface_bot-header-heading__e3n-9","bot-header-question":"voicecommandinterface_bot-header-question__3WOnQ","bot-mic-circle":"voicecommandinterface_bot-mic-circle__A7On3","bot-mic-container":"voicecommandinterface_bot-mic-container__3-T8I","bot-listening-heading":"voicecommandinterface_bot-listening-heading__o-JKZ","bot-recognised-text":"voicecommandinterface_bot-recognised-text__PCnoC","bot-mic-wave":"voicecommandinterface_bot-mic-wave__2nKom","bot-outer-wave":"voicecommandinterface_bot-outer-wave__3u9Aj"}},19:function(e,t,n){e.exports={"floating-button":"floatingbutton_floating-button__2hUaj"}},26:function(e,t,n){},47:function(e,t,n){"use strict";n.r(t);var c=n(3),o=n.n(c),i=n(18),a=n.n(i),s=(n(26),n(7)),r=n.n(s),d=n(9),l=n(4),b=n(5),j=n.n(b),g=n.p+"static/media/Chevron.12e8882c.svg",m=n(0);function u(e){var t=e.children,n=e.opened,c=e.toggle;return Object(m.jsx)(m.Fragment,{children:n?Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("div",{className:j.a["dialog-box"],children:Object(m.jsxs)("div",{className:j.a["dialog-box-body"],children:[t,Object(m.jsx)("div",{onClick:function(){c()},children:Object(m.jsx)("img",{className:j.a["close-button"],src:g,alt:"hide"})})]})}),Object(m.jsx)("div",{className:j.a["dialog-box-background"]})]}):null})}var h=n(19),p=n.n(h),x=n.p+"static/media/Voice.cd02eb0c.svg";function f(e){var t=e.opened,n=e.toggle;return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:p.a["floating-button"],onClick:function(){n()},children:t?Object(m.jsx)("img",{src:g,alt:"voice-icon"}):Object(m.jsx)("img",{src:x,alt:"voice-icon"})})})}function v(e){var t=e.children,n=o.a.useState({opened:!1}),c=Object(l.a)(n,2),i=c[0],a=c[1],s=function(){a((function(e){return Object(d.a)(Object(d.a)({},e),{},{opened:!e.opened})}))};return Object(m.jsxs)("div",{children:[Object(m.jsx)(u,{toggle:s,opened:i.opened,children:t}),Object(m.jsx)(f,{opened:i.opened,toggle:s})]})}var _=n(8),O=n.n(_),w=n(20),N=n(1),k=n.n(N),S=n.p+"static/media/Microphone.481484f4.svg",C=n.p+"static/media/SprinklrLogo.88b190d5.svg",F=window.SpeechRecognition||window.webkitSpeechRecognition,L=window.SpeechGrammarList||window.webkitSpeechGrammarList,y=new F,A=new L;A.addFromString("#JSGF V1.0;",1),y.grammars=A,y.lang="en-IN",y.interimResults=!1;var I,T=y,q=n(21),B=n.n(q),G=function(e){return B.a.post("https://demo-voicebot.herokuapp.com/chat",e).then((function(e){return e.data.message}))};function J(){var e=o.a.useState(I.idle),t=Object(l.a)(e,2),n=t[0],c=t[1],i=o.a.useState(""),a=Object(l.a)(i,2),s=a[0],r=a[1];function d(){return(d=Object(w.a)(O.a.mark((function e(t){var n,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(I.loading),n=[{name:"",lifespanCount:1}],e.next=4,G({query:t,sessionId:"huds7823",contexts:n});case 4:"input.unknown"===(o=e.sent).action&&r(o.fulfillmentText),c(I.idle);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function b(e){c((function(t){return e}))}return o.a.useEffect((function(){T.onaudiostart=function(){r(". . ."),b(I.listening)},T.onresult=function(e){var t=e.results.length-1,n=e.results[t][0].transcript;r(n),function(e){d.apply(this,arguments)}(n)},T.onspeechend=function(){T.stop(),b(I.idle)},T.onerror=function(e){b(I.idle),console.log(e)}}),[]),Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:k.a.container,children:Object(m.jsxs)("div",{className:k.a["bot-container"],children:[Object(m.jsxs)("div",{className:k.a["bot-header"],children:[Object(m.jsx)("div",{className:k.a["bot-header-logo"],children:Object(m.jsx)("img",{src:C,alt:" Logo",className:k.a["bot-header-logo"]})}),Object(m.jsx)("h1",{className:k.a["bot-header-heading"],children:Object(m.jsx)("span",{children:"Hello !"})}),Object(m.jsx)("h2",{className:k.a["bot-header-question"],children:Object(m.jsx)("span",{children:"Can we help you?"})})]}),Object(m.jsx)("h1",{className:k.a["bot-listening-heading"],children:Object(m.jsx)("span",{children:n})}),Object(m.jsx)("p",{className:k.a["bot-recognised-text"],children:Object(m.jsx)("span",{children:s})}),Object(m.jsxs)("div",{className:k.a["bot-mic-container"],children:[Object(m.jsx)("div",{className:n===I.listening?k.a["bot-outer-wave"]:""}),Object(m.jsx)("div",{className:n===I.listening?k.a["bot-mic-wave"]:""}),Object(m.jsx)("div",{className:k.a["bot-mic-circle"],onClick:function(){T.start()},children:Object(m.jsx)("img",{src:S,width:"30",alt:"Microphone"})})]})]})})})}!function(e){e.listening="Listening...",e.idle="- Idle -",e.loading="Loading..."}(I||(I={}));var K=n.p+"static/media/navigator.8851064a.gif";var E=function(){return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:r.a.App,children:[Object(m.jsx)("img",{src:K,alt:"navigator-gif"}),Object(m.jsx)("div",{className:r.a.title,children:"Say hello to VoiceBot !"})]}),Object(m.jsx)(v,{children:Object(m.jsx)(J,{})})]})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,48)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),i(e),a(e)}))};a.a.render(Object(m.jsx)(o.a.StrictMode,{children:Object(m.jsx)(E,{})}),document.getElementById("root")),M()},5:function(e,t,n){e.exports={"dialog-box":"dialogbox_dialog-box__3_skr","dialog-box-body":"dialogbox_dialog-box-body__2pQuI","dialog-box-background":"dialogbox_dialog-box-background__248Su","close-button":"dialogbox_close-button__3EmI9"}},7:function(e,t,n){e.exports={App:"App_App__16ZpL",title:"App_title__-GfWs"}}},[[47,1,2]]]);
//# sourceMappingURL=main.bda62c1a.chunk.js.map