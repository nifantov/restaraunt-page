function addContact() {
    const main = document.querySelector("main");

    const contact = document.createElement("div");
    contact.classList.add("contact");

    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutText");

    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    p1.textContent = "We would glad to see you";
    p2.textContent = "5th Ave &, E 82nd St, New York, 10028";

    const img = document.createElement("img");
    img.src = "https://images.unsplash.com/photo-1590771849024-bb2c83cde342?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1041&q=80";
    img.classList.add("aboutImage");
    
    contact.appendChild(img);
    contact.appendChild(aboutText);
    
    aboutText.appendChild(p1);
    aboutText.appendChild(p2);
    

    main.textContent = "";
    main.appendChild(contact);
}

export default addContact;