import addAbout from "./about";
import addContact from "./contact";
import addMenu from "./menu";

function addHeader () {
    const header = document.createElement("header");
    header.classList.add("header");

    const p = document.createElement("p");
    p.classList.add("title");
    p.textContent = "NEW YORK HOT DOG"
    
    const div = document.createElement("div");
    div.classList.add("nav");

    const aboutBtn = document.createElement("button");
    aboutBtn.classList.add("button");
    aboutBtn.textContent = "ABOUT";
    aboutBtn.classList.add("active");
    aboutBtn.onclick = () => {
        addAbout();
        contactBtn.classList.remove("active");
        aboutBtn.classList.add("active");
        menuBtn.classList.remove("active");
    }

    const menuBtn = document.createElement("button");
    menuBtn.classList.add("button");
    menuBtn.textContent = "MENU";
    menuBtn.onclick = () => {
        addMenu();
        contactBtn.classList.remove("active");
        aboutBtn.classList.remove("active");
        menuBtn.classList.add("active");
    }

    const contactBtn = document.createElement("button");
    contactBtn.classList.add("button");
    contactBtn.textContent = "CONTACT";
    contactBtn.onclick = () => {
        addContact();
        contactBtn.classList.add("active");
        aboutBtn.classList.remove("active");
        menuBtn.classList.remove("active")
    }

    header.appendChild(p);
    header.appendChild(div);

    div.appendChild(aboutBtn);
    div.appendChild(menuBtn);
    div.appendChild(contactBtn);

    return header
}

export default addHeader;