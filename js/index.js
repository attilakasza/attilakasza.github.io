function smoothScroll(t,e){var o=document.querySelector(t).getBoundingClientRect().top,i=window.pageYOffset,n=null;requestAnimationFrame((function t(a){null===n&&(n=a);var l,r,c,s=a-n,u=(l=s,r=i,c=o,(l/=e/2)<1?c/2*l*l+r:-c/2*(--l*(l-2)-1)+r);window.scrollTo(0,u),s<e&&requestAnimationFrame(t)}))}var aboutLink=document.querySelector("#about__link");aboutLink.addEventListener("click",(function(){smoothScroll("#about",1e3)}));var serviceLink=document.querySelector("#service__link");serviceLink.addEventListener("click",(function(){smoothScroll("#service",1e3)}));var contactLink=document.querySelector("#contact__link");contactLink.addEventListener("click",(function(){smoothScroll(".contact",1e3)}));const navButton=document.querySelector("#menu-icon"),nav=document.querySelector(".navigation__menu");let menuShow=new TimelineMax,menu_icon_click=new TimelineMax({paused:!0,reversed:!0});menu_icon_click.to("#top_line",.4,{attr:{x1:"0.646447",y1:"35.6464",x2:"35.2947",y2:"0.998215"}}).to("#middle_line",.4,{attr:{x1:"1.35355",y1:"0.646447",x2:"36.0018",y2:"35.2947"}},0).to("#bottom_line",.4,{attr:{x1:"1.35355",y1:"0.646447",x2:"36.0018",y2:"35.2947"}},0).to("#menu-icon",0,{position:"fixed",width:"7vh",minWidth:"50px"},0),navButton.addEventListener("click",()=>{nav.classList.contains("navigation__menu--active")?menu_icon_click.reverse():menu_icon_click.play(),nav.classList.toggle("navigation__menu--active"),nav.classList.contains("navigation__menu--active")&&menuShow.fromTo(".navigation__menu--active",.5,{x:"1000px"},{x:"0px",ease:Power4.easeInOut}).to(".intro",0,{opacity:"0"}).to("#logo",0,{opacity:"0"}).staggerFrom(".navigation__item",.1,{opacity:0,x:150,ease:Back.easeOut},.1),nav.classList.contains("navigation__menu--active")||menuShow.to(".overlay",0,{display:"block"}).to(".intro",0,{opacity:"1"}).to("#logo",0,{opacity:"1"}).to(".overlay",.3,{x:"1000px",display:"none",ease:Power4.easeInOut}).to(".overlay",0,{x:"0px"})}),document.querySelectorAll(".navigation__link").forEach(t=>{t.addEventListener("click",()=>{menu_icon_click.reverse(),nav.classList.contains("navigation__menu--active")&&nav.classList.toggle("navigation__menu--active"),(new TimelineMax).to("#menu-icon",1,{opacity:"0"}).to(".intro",0,{opacity:"1"}).to("#logo",0,{opacity:"1"}).to("#menu-icon",0,{opacity:"1"})})});let logoHover=new TimelineMax({paused:!0,reversed:!0});logoHover.to("#logo",1,{strokeDasharray:1275,strokeDashoffset:1275,ease:Power2.easeOut}).to("#logo",.7,{transform:"rotate(42.5deg)",ease:Power1.easeOut},"-=0.1").to(CSSRulePlugin.getRule(".navigation__logo:after"),0,{cssRule:{display:"block",opacity:"0"}}).to(CSSRulePlugin.getRule(".navigation__logo:after"),.7,{cssRule:{opacity:"1",x:"60px"}});const logo=document.querySelector(".navigation__logo");logo.addEventListener("click",()=>{window.location.reload()}),logo.addEventListener("mouseover",()=>{logoHover.play()}),logo.addEventListener("mouseout",()=>{logoHover.reverse()});let arrowHover=new TimelineMax({paused:!0,reversed:!0});arrowHover.to(".intro__arrow svg",.7,{y:10},0);const arrow=document.querySelector(".intro__arrow");function myFunction(){var t=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.querySelector(".progress-bar").style.height=t+"%"}arrow.addEventListener("mouseover",()=>{arrowHover.play()}),arrow.addEventListener("mouseout",()=>{arrowHover.reverse()}),arrow.addEventListener("click",(function(){smoothScroll("#about",1e3)})),window.onscroll=function(){myFunction()};let formFill=new TimelineMax({paused:!0,reversed:!0});formFill.to(".contact__text h2",.6,{color:"#4b4b4b"});const inputName=document.querySelector("#name"),inputEmail=document.querySelector("#email"),inputMessage=document.querySelector("#message");function checkEmpty(){0===inputName.value.length&&0===inputEmail.value.length&&0===inputMessage.value.length&&formFill.reverse()}inputName.addEventListener("blur",()=>{checkEmpty()}),inputName.addEventListener("click",()=>{formFill.play()}),inputEmail.addEventListener("blur",()=>{checkEmpty()}),inputEmail.addEventListener("click",()=>{formFill.play()}),inputMessage.addEventListener("blur",()=>{checkEmpty()}),inputMessage.addEventListener("click",()=>{formFill.play()});let loading=new TimelineMax;loading.to(".loader",0,{display:"block"}).fromTo(".loader__logo",1.2,{opacity:"0",scale:"0.5"},{scale:"1",opacity:"1",ease:Back.easeOut}).to(CSSRulePlugin.getRule(".loader:after"),0,{cssRule:{display:"block"}}).to(".loader",.5,{y:"100vh",ease:Power4.easeOut}).to(CSSRulePlugin.getRule(".loader:after"),.4,{cssRule:{y:"100vh"}},1.3).to(".loader",0,{display:"none"}).fromTo(".intro__text",1,{opacity:"0",y:"-50"},{opacity:"1",y:"0"},"-=.5").to(".intro__image path",5,{strokeDashoffset:3250},"+=.5").fromTo(".intro__arrow",1,{opacity:"0",y:"-20"},{opacity:"1",y:"0"},"+=1");var revealAbout=new TimelineMax;revealAbout.fromTo(".about__separator line",.4,{attr:{y2:"0"}},{attr:{y2:"100"}}).fromTo(".about__title",.4,{x:"30",opacity:"0"},{x:"0",opacity:"1"},"+=.4").to(CSSRulePlugin.getRule(".about__text h2:after"),.4,{cssRule:{width:"100%"}},.8).to(".about__text span",0,{opacity:"1"}).to(CSSRulePlugin.getRule(".about__text h2:after"),.4,{cssRule:{left:"100%",width:"0%"}});var revealService=new TimelineMax;revealService.fromTo(".service__separator line",.4,{attr:{y2:"0"}},{attr:{y2:"100"}}).fromTo(".service__title",.4,{x:"30",opacity:"0"},{x:"0",opacity:"1"},"+=.4").to(CSSRulePlugin.getRule(".service__text h2:after"),.4,{cssRule:{width:"100%"}},.8).to(".service__text span",0,{opacity:"1"}).to(CSSRulePlugin.getRule(".service__text h2:after"),.4,{cssRule:{left:"100%",width:"0%"}});var revealContact=new TimelineMax;revealContact.fromTo(".contact__separator line",.4,{attr:{y2:"0"}},{attr:{y2:"100"}}).fromTo(".contact__title",.4,{x:"30",opacity:"0"},{x:"0",opacity:"1"},"+=.4").to(CSSRulePlugin.getRule(".contact__text h2:after"),.4,{cssRule:{width:"100%"}},.8).to(".contact__text span",0,{opacity:"1"}).to(CSSRulePlugin.getRule(".contact__text h2:after"),.4,{cssRule:{left:"100%",width:"0%"}}).to(CSSRulePlugin.getRule(".form:after"),.4,{cssRule:{width:"100%"}},.8).to(".form__input",0,{opacity:"1"},1.2).to(".form__label",0,{opacity:"1"},1.2).to(CSSRulePlugin.getRule(".form:after"),.4,{cssRule:{left:"100%",width:"0%"}},1.2).to(CSSRulePlugin.getRule(".form__button:after"),.4,{cssRule:{width:"100%"}},.8).to(".form__submit",0,{opacity:"1"},1.2).to(CSSRulePlugin.getRule(".form__button:after"),.4,{cssRule:{left:"100%",width:"0%"}},1.2);const controller=new ScrollMagic.Controller;new ScrollMagic.Scene({triggerElement:".about"}).setTween(revealAbout).addTo(controller),new ScrollMagic.Scene({triggerElement:".service"}).setTween(revealService).addTo(controller),new ScrollMagic.Scene({triggerElement:".contact"}).setTween(revealContact).addTo(controller);var glitchEffect=new TimelineMax({repeat:-1,delay:7.5,repeatDelay:5});glitchEffect.add("splitF",0).to(".intro__glitch",.1,{fontWeight:"300",skewX:"90",ease:Power4.easeInOut}).to(".intro__glitch",.05,{skewX:"0",ease:Power4.easeInOut}).to(".intro__glitch",.05,{opacity:"0"}).to(".intro__glitch",.05,{opacity:"1"}).to(".intro__glitch",.03,{textShadow:"+6px 0 #0ff"}).to(".intro__glitch",.04,{x:"-30"}).to(".intro__glitch",.04,{x:"0"}).to(".intro__glitch",.03,{textShadow:"-6px 0 #f0f"}).to(".intro__glitch",.03,{fontWeight:"400",textShadow:"0"}).to(".intro__glitch--top",.5,{x:"-10",ease:Power4.easeInOut},"splitF").to(".intro__glitch--bottom",.5,{x:"10",ease:Power4.easeInOut},"splitF").to(".intro__position",0,{scaleY:"1.1"},"splitF").to(".intro__position",0,{scaleY:"1"},"+=0.02").to(".intro__glitch--top",0,{text:{value:"Web Designer"}}).to(".intro__glitch--bottom",0,{text:{value:"Web Designer"}}).addPause(glitchEffect.duration(),TweenMax.delayedCall,[5,glitchEffect.resume,null,glitchEffect]).add("splitW",glitchEffect.duration()).to(".intro__glitch",.1,{fontWeight:"300",skewX:"90",ease:Power4.easeInOut}).to(".intro__glitch",.05,{skewX:"0",ease:Power4.easeInOut}).to(".intro__glitch",.05,{opacity:"0"}).to(".intro__glitch",.05,{opacity:"1"}).to(".intro__glitch",.03,{textShadow:"+6px 0 #0ff"}).to(".intro__glitch",.04,{x:"-30"}).to(".intro__glitch",.04,{x:"0"}).to(".intro__glitch",.03,{textShadow:"-6px 0 #f0f"}).to(".intro__glitch",.03,{fontWeight:"400",textShadow:"0"}).to(".intro__glitch--top",.5,{x:"-10",ease:Power4.easeInOut},"splitW").to(".intro__glitch--bottom",.5,{x:"10",ease:Power4.easeInOut},"splitW").to(".intro__position",0,{scaleY:"1.1"},"splitW").to(".intro__position",0,{scaleY:"1"},"+=0.02").to(".intro__glitch--top",0,{text:{value:"UI Designer"}}).to(".intro__glitch--bottom",0,{text:{value:"UI Designer"}}).addPause(glitchEffect.duration(),TweenMax.delayedCall,[5,glitchEffect.resume,null,glitchEffect]).add("splitU",glitchEffect.duration()).to(".intro__glitch",.1,{fontWeight:"300",skewX:"90",ease:Power4.easeInOut}).to(".intro__glitch",.05,{skewX:"0",ease:Power4.easeInOut}).to(".intro__glitch",.05,{opacity:"0"}).to(".intro__glitch",.05,{opacity:"1"}).to(".intro__glitch",.03,{textShadow:"+6px 0 #0ff"}).to(".intro__glitch",.04,{x:"-30"}).to(".intro__glitch",.04,{x:"0"}).to(".intro__glitch",.03,{textShadow:"-6px 0 #f0f"}).to(".intro__glitch",.03,{fontWeight:"400",textShadow:"0"}).to(".intro__glitch--top",.5,{x:"-10",ease:Power4.easeInOut},"splitU").to(".intro__glitch--bottom",.5,{x:"10",ease:Power4.easeInOut},"splitU").to(".intro__position",0,{scaleY:"1.1"},"splitU").to(".intro__position",0,{scaleY:"1"},"+=0.02").to(".intro__glitch",0,{text:{value:"Front-End Developer"}});