import addContact from "./contact";

function addAbout() {
    const main = document.querySelector("main");

    const about = document.createElement("div");
    about.classList.add("about");

    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutText");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = "We didn't invite a hot dog,";
    p2.textContent = "but we made it awesome!";

    const button = document.createElement("button");
    button.textContent = "TRY IT";
    button.onclick = () => {
        addContact();
    }

    const img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1597936097685-ba96f799af6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8aG90JTIwZG9nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60";
    img.classList.add("aboutImage");

    about.appendChild(aboutText);
    about.appendChild(img);
    aboutText.appendChild(p1);
    aboutText.appendChild(p2);
    aboutText.appendChild(button);

    main.textContent = "";
    main.appendChild(about);
}

export default addAbout;
