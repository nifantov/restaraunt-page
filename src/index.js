
import addHeader from "./header";
import addFooter from "./footer";
import addAbout from "./about";



function addMain() {
    const main = document.createElement("main");
    return main;
}




function launch() {
    const content = document.getElementById("content");

    content.appendChild(addHeader());
    content.appendChild(addMain());
    content.appendChild(addFooter());
    
    addAbout ();
}

launch();
