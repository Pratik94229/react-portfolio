(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],{19:function(e,a,t){e.exports=t.p+"static/media/clustering_algorithms.bae471c5.jpg"},20:function(e,a,t){e.exports=t.p+"static/media/gradient_boosting.34e76245.png"},21:function(e,a,t){e.exports=t.p+"static/media/inferential_stat.da8afb9d.png"},22:function(e,a,t){e.exports=t.p+"static/media/color-sharp2.42c4dbf6.png"},28:function(e,a,t){e.exports=t.p+"static/media/linkedin.df55712b.svg"},29:function(e,a,t){e.exports=t.p+"static/media/github.5b91037d.svg"},30:function(e,a,t){e.exports=t.p+"static/media/medium icon.bab3998e.svg"},31:function(e,a,t){e.exports=t.p+"static/media/STATISTICS.08ca3c8a.svg"},40:function(e,a,t){e.exports=t.p+"static/media/header-img.bfe6d1a6.svg"},41:function(e,a,t){e.exports=t.p+"static/media/PYTHON.a721fcf6.svg"},42:function(e,a,t){e.exports=t.p+"static/media/PANDAS2ND.a17143d7.svg"},43:function(e,a,t){e.exports=t.p+"static/media/NUMPY.ffdd55d6.svg"},44:function(e,a,t){e.exports=t.p+"static/media/MACHINE_LEARNING.aa2dc377.svg"},45:function(e,a,t){e.exports=t.p+"static/media/NLP.a4641beb.svg"},46:function(e,a,t){e.exports=t.p+"static/media/AWS.4ad8d13a.svg"},47:function(e,a,t){e.exports=t.p+"static/media/WEB_SCRAPPING.b8f27faf.svg"},48:function(e,a,t){e.exports=t.p+"static/media/VERSION_CONTROL.f26802b8.svg"},49:function(e,a,t){e.exports=t.p+"static/media/icons8-mysql.f8e65ba2.svg"},50:function(e,a,t){e.exports=t.p+"static/media/DOCKER.078f7db9.svg"},52:function(e,a,t){e.exports=t.p+"static/media/color-sharp.d6409477.png"},53:function(e,a,t){e.exports=t.p+"static/media/profile.8aa96c56.jpg"},55:function(e,a,t){e.exports=t(88)},63:function(e,a,t){},64:function(e,a,t){},87:function(e,a,t){e.exports=t.p+"static/media/arrow2.9070490b.svg"},88:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(39),r=t.n(i),s=(t(63),t(64),t(65),t(95)),c=t(91),m=t(96),o=t(28),d=t.n(o),g=t(29),u=t.n(g),p=t(30),E=t.n(p),h=t(36),b=t(23);const v=()=>{const[e,a]=Object(n.useState)("home"),[t,i]=Object(n.useState)(!1);Object(n.useEffect)(()=>{const e=()=>{window.scrollY>50?i(!0):i(!1)};return window.addEventListener("scroll",e),()=>window.removeEventListener("scroll",e)},[]);const r=e=>{a(e)};return l.a.createElement(b.a,null,l.a.createElement(s.a,{expand:"md",className:t?"scrolled":""},l.a.createElement(c.a,null,l.a.createElement(s.a.Toggle,{"aria-controls":"basic-navbar-nav"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement(s.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(m.a,{className:"ms-auto"},l.a.createElement(m.a.Link,{href:"#home",className:"home"===e?"active navbar-link":"navbar-link",onClick:()=>r("home")},"Home"),l.a.createElement(m.a.Link,{href:"#skills",className:"skills"===e?"active navbar-link":"navbar-link",onClick:()=>r("skills")},"Skills"),l.a.createElement(m.a.Link,{href:"#projects",className:"projects"===e?"active navbar-link":"navbar-link",onClick:()=>r("projects")},"Projects"),l.a.createElement(m.a.Link,{href:"src\\assets\\img\\ds_resume.pdf",download:!0,className:"resume"===e?"active navbar-link":"navbar-link",onClick:()=>r("resume")},"Resume")),l.a.createElement("span",{className:"navbar-text"},l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://www.linkedin.com/in/pratik-thorat94229/"},l.a.createElement("img",{src:d.a,alt:""})),l.a.createElement("a",{href:"https://github.com/Pratik94229"},l.a.createElement("img",{src:u.a,alt:""})),l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:E.a,alt:""}))),l.a.createElement(h.a,{to:"#connect"},l.a.createElement("button",{className:"vvd"},l.a.createElement("span",null,"Let\u2019s Connect"))))))))};var f=t(92),k=t(93),N=t(40),x=t.n(N),w=t(94),y=(t(24),t(7)),j=t.n(y);const I=()=>{const[e,a]=Object(n.useState)(0),[t,i]=Object(n.useState)(!1),[r,s]=Object(n.useState)(""),[m,o]=Object(n.useState)(300-100*Math.random()),[d,g]=Object(n.useState)(1),u=["Data Scientist","Data Analyst","Web Developer"];Object(n.useEffect)(()=>{let e=setInterval(()=>{p()},m);return()=>{clearInterval(e)}},[r]);const p=()=>{let n=u[e%u.length],l=t?n.substring(0,r.length-1):n.substring(0,r.length+1);s(l),t&&o(e=>e/2),t||l!==n?t&&""===l?(i(!1),a(e+1),g(1),o(500)):g(e=>e+1):(i(!0),g(e=>e-1),o(2e3))};return l.a.createElement("section",{className:"banner",id:"home"},l.a.createElement(c.a,null,l.a.createElement(f.a,{className:"aligh-items-center"},l.a.createElement(k.a,{xs:12,md:6,xl:7},l.a.createElement(j.a,null,e=>{let{isVisible:a}=e;return l.a.createElement("div",{className:a?"animate__animated animate__fadeIn":""},l.a.createElement("span",{className:"tagline"},"Welcome to my Portfolio"),l.a.createElement("h1",null,"Hi! I'm Pratik Thorat"," ",l.a.createElement("span",{className:"txt-rotate",dataperiod:"1000","data-rotate":'[ "Data Scientist" ]'},l.a.createElement("span",{className:"wrap"},r))),l.a.createElement("p",null,"Hello! I'm Pratik Thorat, an aspiring data scientist on a mission to turn data into insights. Armed with a B.tech in Computer Science and Engineering from VNIT,Nagpur, I'm proficient in Python, Java, and data visualization tools like Matplotlib and PowerBI. My passion for data analysis and machine learning drives me to tackle real-world challenges. I'm a lifelong learner, constantly adding new skills to my toolkit, from deep learning to big data technologies"),l.a.createElement("button",{onClick:()=>console.log("connect")},"Let\u2019s Connect ",l.a.createElement(w.a,{size:25})))})),l.a.createElement(k.a,{xs:12,md:6,xl:5},l.a.createElement(j.a,null,e=>{let{isVisible:a}=e;return l.a.createElement("div",{className:a?"animate__animated animate__zoomIn":""},l.a.createElement("img",{src:x.a,alt:"Header Img"}))})))))};var C=t(41),S=t.n(C),D=t(42),P=t.n(D),L=t(43),_=t.n(L),z=t(44),U=t.n(z),O=t(45),F=t.n(O),B=t(46),M=t.n(B),A=t(31),R=t.n(A),T=t(47),G=t.n(T),V=t(48),K=t.n(V),Q=t(49),Z=t.n(Q),H=t(50),W=t.n(H),J=t(51),Y=t.n(J),q=(t(86),t(87),t(52)),X=t.n(q);const $=()=>l.a.createElement("section",{className:"skill",id:"skills"},l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-12"},l.a.createElement("div",{className:"skill-bx wow zoomIn"},l.a.createElement("h2",null,"Skills"),l.a.createElement("p",null,"I've extensively covered the essential aspects of data science, including data manipulation with libraries like Pandas and NumPy. Collaborative programming and version control have been a crucial part of my workflow with GitHub. In addition, I've developed a deep understanding of the mathematical foundations behind machine learning algorithms, enabling me to apply them effectively."),l.a.createElement(Y.a,{responsive:{superLargeDesktop:{breakpoint:{max:4e3,min:3e3},items:5},desktop:{breakpoint:{max:3e3,min:1024},items:3},tablet:{breakpoint:{max:1024,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},infinite:!0,className:"owl-carousel owl-theme skill-slider"},l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:S.a,alt:""}),l.a.createElement("h5",null,"Python(OOPs)")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:P.a,alt:""}),l.a.createElement("h5",null,"Pandas")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:_.a,alt:""}),l.a.createElement("h5",null,"Numpy")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:U.a,alt:""}),l.a.createElement("h5",null,"Machine Learning Understanding")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:F.a,alt:""}),l.a.createElement("h5",null,"NLP")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:R.a,alt:""}),l.a.createElement("h5",null,"Statistics")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:G.a,alt:""}),l.a.createElement("h5",null,"Web Scrapping")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:K.a,alt:""}),l.a.createElement("h5",null,"Version Control")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:W.a,alt:""}),l.a.createElement("h5",null,"Docker")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:Z.a,alt:""}),l.a.createElement("h5",null,"MySQL")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:M.a,alt:""}),l.a.createElement("h5",null,"AWS")),l.a.createElement("div",{className:"item"},l.a.createElement("img",{src:R.a,alt:""}),l.a.createElement("h5",null,"Communication"))))))),l.a.createElement("img",{className:"background-image-left",src:X.a,alt:""})),ee=e=>{let{title:a,description:t,imgUrl:n}=e;return l.a.createElement(k.a,{size:12,sm:6,md:4},l.a.createElement("div",{className:"proj-imgbx"},l.a.createElement("img",{src:n,alt:"",style:{width:"120%",height:"250px",objectFit:"cover"}}),l.a.createElement("div",{className:"proj-txtx"},l.a.createElement("h4",null,a),l.a.createElement("span",null,t))))};var ae=t(19),te=t.n(ae),ne=t(20),le=t.n(ne),ie=t(21),re=t.n(ie),se=t(22),ce=t.n(se);const me=()=>{const e=[{title:"Clustering algorithms",description:"From Evolution to Implementation",imgUrl:te.a,blogLink:"https://www.linkedin.com/pulse/unraveling-clustering-algorithms-from-evolution-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"},{title:"Mastering Gradient Boosting in Machine Learning",description:"A Comprehensive Guide!",imgUrl:le.a,blogLink:"https://www.linkedin.com/pulse/mastering-gradient-boosting-machine-learning-guide-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"},{title:"Demystifying Inferential Statistics",description:"Unlocking Insights from Data",imgUrl:re.a,blogLink:"https://www.linkedin.com/pulse/demystifying-inferential-statistics-unlocking-insights-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"}];return l.a.createElement("section",{className:"project",id:"projects"},l.a.createElement(c.a,null,l.a.createElement(f.a,null,l.a.createElement(k.a,{size:12},l.a.createElement(j.a,null,a=>{let{isVisible:t}=a;return l.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},l.a.createElement("h2",null,"Projects"),l.a.createElement("p",null,"I have successfully executed diverse projects leveraging Machine Learning, Power BI, Natural Language Processing (NLP), and Computer Vision technologies. These encompass predictive modeling, data visualization dashboards, sentiment analysis, image classification, and object detection, showcasing my proficiency in these cutting-edge domains."),l.a.createElement(f.a,null,e.map((e,a)=>l.a.createElement(ee,Object.assign({key:a},e)))),l.a.createElement("div",{className:"blog-links d-flex justify-content-around mt-3"},e.map((e,a)=>l.a.createElement("a",{key:a,href:e.blogLink,target:"_blank",rel:"noopener noreferrer"},"GitHub Link"))))})))),l.a.createElement("img",{className:"background-image-right",alt:"background",src:ce.a}))},oe=e=>{let{title:a,description:t,imgUrl:n}=e;return l.a.createElement(k.a,{size:12,sm:6,md:4},l.a.createElement("div",{className:"proj-imgbx"},l.a.createElement("img",{src:n,alt:"",style:{width:"120%",height:"250px",objectFit:"cover"}}),l.a.createElement("div",{className:"proj-txtx"},l.a.createElement("h4",null,a),l.a.createElement("span",null,t))))},de=()=>{const e=[{title:"Clustering algorithms",description:"From Evolution to Implementation",imgUrl:te.a,blogLink:"https://www.linkedin.com/pulse/unraveling-clustering-algorithms-from-evolution-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"},{title:"Mastering Gradient Boosting in Machine Learning",description:"A Comprehensive Guide!",imgUrl:le.a,blogLink:"https://www.linkedin.com/pulse/mastering-gradient-boosting-machine-learning-guide-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"},{title:"Demystifying Inferential Statistics",description:"Unlocking Insights from Data",imgUrl:re.a,blogLink:"https://www.linkedin.com/pulse/demystifying-inferential-statistics-unlocking-insights-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"}];return l.a.createElement("section",{className:"project",id:"projects"},l.a.createElement(c.a,null,l.a.createElement(f.a,null,l.a.createElement(k.a,{size:12},l.a.createElement(j.a,null,a=>{let{isVisible:t}=a;return l.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},l.a.createElement("h2",null,"My Blogs"),l.a.createElement("p",null,"Discover insights into the world of Data Science through my blog, exploring diverse topics and sharing knowledge in this dynamic field."),l.a.createElement(f.a,null,e.map((e,a)=>l.a.createElement(oe,Object.assign({key:a},e)))),l.a.createElement("div",{className:"blog-links d-flex justify-content-around mt-3"},e.map((e,a)=>l.a.createElement("a",{key:a,href:e.blogLink,target:"_blank",rel:"noopener noreferrer"},"Read more"))))})))),l.a.createElement("img",{className:"background-image-right",alt:"background",src:ce.a}))},ge=e=>{let{title:a,description:t,imgUrl:n}=e;return l.a.createElement(k.a,{size:12,sm:6,md:4},l.a.createElement("div",{className:"proj-imgbx"},l.a.createElement("img",{src:n,alt:"",style:{width:"120%",height:"250px",objectFit:"cover"}}),l.a.createElement("div",{className:"proj-txtx"},l.a.createElement("h4",null,a),l.a.createElement("span",null,t))))},ue=()=>{const e=[{title:"Clustering algorithms",description:"From Evolution to Implementation",imgUrl:te.a,blogLink:"https://www.linkedin.com/pulse/unraveling-clustering-algorithms-from-evolution-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"},{title:"Mastering Gradient Boosting in Machine Learning",description:"A Comprehensive Guide!",imgUrl:le.a,blogLink:"https://www.linkedin.com/pulse/mastering-gradient-boosting-machine-learning-guide-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"},{title:"Demystifying Inferential Statistics",description:"Unlocking Insights from Data",imgUrl:re.a,blogLink:"https://www.linkedin.com/pulse/demystifying-inferential-statistics-unlocking-insights-pratik-thorat/?trackingId=obFzPxBCRZijmeaKrU6luQ%3D%3D"}];return l.a.createElement("section",{className:"project",id:"projects"},l.a.createElement(c.a,null,l.a.createElement(f.a,null,l.a.createElement(k.a,{size:12},l.a.createElement(j.a,null,a=>{let{isVisible:t}=a;return l.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},l.a.createElement("h2",null,"Awards and Certificates"),l.a.createElement("p",null,"Certified in advanced Data Science courses, covering machine learning, statistical analysis, and data visualization. Proficient in Python for Data Science, Pandas Data Analysis, and Applied Machine Learning, enabling adept handling of complex datasets."),l.a.createElement(f.a,null,e.map((e,a)=>l.a.createElement(ge,Object.assign({key:a},e)))),l.a.createElement("div",{className:"blog-links d-flex justify-content-around mt-3"},e.map((e,a)=>l.a.createElement("a",{key:a,href:e.blogLink,target:"_blank",rel:"noopener noreferrer"},"Link"))))})))),l.a.createElement("img",{className:"background-image-right",alt:"background",src:ce.a}))};var pe=t(53),Ee=t.n(pe);const he=()=>{const e={firstName:"",lastName:"",email:"",phone:"",message:""},[a,t]=Object(n.useState)(e),[i,r]=Object(n.useState)("Send"),[s,m]=Object(n.useState)({}),o=(e,n)=>{t({...a,[e]:n})},d=async n=>{n.preventDefault(),r("Sending...");let l=await fetch("http://localhost:5000/contact",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(a)});r("Send");let i=await l.json();t(e),200===i.code?m({success:!0,message:"Message sent successfully"}):m({success:!1,message:"Something went wrong, please try again later."})};return l.a.createElement("section",{className:"contact",id:"connect"},l.a.createElement(c.a,null,l.a.createElement(f.a,{className:"align-items-center"},l.a.createElement(k.a,{size:12,md:6},l.a.createElement(j.a,null,e=>{let{isVisible:a}=e;return l.a.createElement("img",{className:a?"animate__animated animate__zoomIn rounded-circle":"",src:Ee.a,alt:"Contact Us",style:{width:"500px",height:"500px",objectFit:"cover",borderRadius:"50%"}})})),l.a.createElement(k.a,{size:12,md:6},l.a.createElement(j.a,null,e=>{let{isVisible:t}=e;return l.a.createElement("div",{className:t?"animate__animated animate__fadeIn":""},l.a.createElement("h2",null,"Get In Touch"),l.a.createElement("form",{onSubmit:d},l.a.createElement(f.a,null,l.a.createElement(k.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"text",value:a.firstName,placeholder:"First Name",onChange:e=>o("firstName",e.target.value)})),l.a.createElement(k.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"text",value:a.lastName,placeholder:"Last Name",onChange:e=>o("lastName",e.target.value)})),l.a.createElement(k.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"email",value:a.email,placeholder:"Email Address",onChange:e=>o("email",e.target.value)})),l.a.createElement(k.a,{size:12,sm:6,className:"px-1"},l.a.createElement("input",{type:"tel",value:a.phone,placeholder:"Phone No.",onChange:e=>o("phone",e.target.value)})),l.a.createElement(k.a,{size:12,className:"px-1"},l.a.createElement("textarea",{rows:"6",value:a.message,placeholder:"Message",onChange:e=>o("message",e.target.value)}),l.a.createElement("button",{type:"submit"},l.a.createElement("span",null,i))),s.message&&l.a.createElement(k.a,null,l.a.createElement("p",{className:!1===s.success?"danger":"success"},s.message)))))})))))},be=()=>l.a.createElement("footer",{className:"footer"},l.a.createElement(c.a,null,l.a.createElement(f.a,{className:"align-items-center"},l.a.createElement(k.a,{size:12,sm:6}),l.a.createElement(k.a,{size:12,sm:6,className:"text-center text-sm-end"},l.a.createElement("div",{className:"social-icon"},l.a.createElement("a",{href:"https://www.linkedin.com/in/pratik-thorat94229/"},l.a.createElement("img",{src:d.a,alt:"Icon"})),l.a.createElement("a",{href:"https://github.com/Pratik94229"},l.a.createElement("img",{src:u.a,alt:"Icon"})),l.a.createElement("a",{href:"#"},l.a.createElement("img",{src:E.a,alt:"Icon"})))))));var ve=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(I,null),l.a.createElement($,null),l.a.createElement(me,null),l.a.createElement(de,null),l.a.createElement(ue,null),l.a.createElement(he,null),l.a.createElement(be,null))};var fe=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,97)).then(a=>{let{getCLS:t,getFID:n,getFCP:l,getLCP:i,getTTFB:r}=a;t(e),n(e),l(e),i(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(ve,null))),fe()}},[[55,1,2]]]);
//# sourceMappingURL=main.a60c18c9.chunk.js.map