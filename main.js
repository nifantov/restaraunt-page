(()=>{"use strict";const t=function(){const t=document.querySelector("main"),e=document.createElement("div");e.classList.add("contact");const n=document.createElement("div");n.classList.add("aboutText");const a=document.createElement("p"),c=document.createElement("p");a.textContent="We would glad to see you",c.textContent="5th Ave &, E 82nd St, New York, 10028";const d=document.createElement("img");d.src="https://images.unsplash.com/photo-1590771849024-bb2c83cde342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80",d.classList.add("aboutImage"),e.appendChild(d),e.appendChild(n),n.appendChild(a),n.appendChild(c),t.textContent="",t.appendChild(e)},e=function(){const e=document.querySelector("main"),n=document.createElement("div");n.classList.add("about");const a=document.createElement("div");a.classList.add("aboutText");const c=document.createElement("p"),d=document.createElement("p");c.textContent="We didn't invinted a hot dog,",d.textContent="but we made it awesome!";const o=document.createElement("button");o.textContent="TRY IT",o.onclick=()=>{t()};const s=document.createElement("img");s.src="https://images.unsplash.com/photo-1597936097685-ba96f799af6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",s.classList.add("aboutImage"),n.appendChild(a),n.appendChild(s),a.appendChild(c),a.appendChild(d),a.appendChild(o),e.textContent="",e.appendChild(n)};function n(t,e,n){const a=document.createElement("div");a.classList.add("item");const c=document.createElement("h3");c.textContent=t;const d=document.createElement("img");d.classList.add("itemImg"),d.src=e;const o=document.createElement("p");return o.textContent=n,a.appendChild(c),a.appendChild(d),a.appendChild(o),a}const a=function(){const a=document.createElement("header");a.classList.add("header");const c=document.createElement("p");c.classList.add("title"),c.textContent="NEW YORK HOT DOG";const d=document.createElement("div");d.classList.add("nav");const o=document.createElement("button");o.classList.add("button"),o.textContent="ABOUT",o.classList.add("active"),o.onclick=()=>{e(),i.classList.remove("active"),o.classList.add("active"),s.classList.remove("active")};const s=document.createElement("button");s.classList.add("button"),s.textContent="MENU",s.onclick=()=>{(function(){const t=document.querySelector("main"),e=document.createElement("div");e.classList.add("menu"),e.appendChild(n("Full combo","./images/full.webp","Hot dog, cola, fries, burger")),e.appendChild(n("Super combo","./images/cola dog fries.webp","Hot dog, cola, fries")),e.appendChild(n("Basic combo","./images/cola and dog.webp","Hot dog, cola")),e.appendChild(n("Hot dog","./images/dog.webp","Hot dog")),t.textContent="",t.appendChild(e)})(),i.classList.remove("active"),o.classList.remove("active"),s.classList.add("active")};const i=document.createElement("button");return i.classList.add("button"),i.textContent="CONTACT",i.onclick=()=>{t(),i.classList.add("active"),o.classList.remove("active"),s.classList.remove("active")},a.appendChild(c),a.appendChild(d),d.appendChild(o),d.appendChild(s),d.appendChild(i),a};!function(){const t=document.getElementById("content");t.appendChild(a()),t.appendChild(document.createElement("main")),t.appendChild(function(){const t=document.createElement("footer");t.classList.add("footer");const e=document.createElement("p");return e.textContent='This is a project for "The Odin Project" in which I have to make a restaraunt page using JavaScript',t.appendChild(e),t}()),e()}()})();itit
