function addMenu() {
    const main = document.querySelector("main");

    const menu = document.createElement("div");
    menu.classList.add("menu");
    
    menu.appendChild(createItem(
        "Full combo", 
        "./images/full.webp", 
        "Hot dog, cola, fries, burger"
    ));
    menu.appendChild(createItem(
        "Super combo", 
        "./images/cola dog fries.webp", 
        "Hot dog, cola, fries"
    ));
    menu.appendChild(createItem(
        "Basic combo", 
        "./images/cola and dog.webp", 
        "Hot dog, cola"
    ));
    menu.appendChild(createItem(
        "Hot dog", 
        "./images/dog.webp", 
        "Hot dog"
    ));
    

    main.textContent = "";
    main.appendChild(menu);
}

function createItem(title, src, description) {
    const item = document.createElement("div");
    item.classList.add("item");

    const text = document.createElement("h3");
    text.textContent = title;

    const img = document.createElement("img");
    img.classList.add("itemImg");
    img.src = src;
    
    const p = document.createElement("p");
    p.textContent = description;

    item.appendChild(text);
    item.appendChild(img);
    item.appendChild(p);

    return item;
}


export default addMenu;