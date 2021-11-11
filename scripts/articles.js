renderMainMenu();

function renderMainMenu() {

    // criar elementos e definir variaveis
    let main = document.getElementById('main');
    var main_menu_cont = document.createElement('div');
    let page_title = document.createElement('h1');
    var gradient_wrap = document.createElement('div');
    var gradient = document.createElement('div');
    var main_menu_items = document.createElement('div');

    // colocar elementos dentro dos pais e criar título

    main.appendChild(gradient_wrap);
    gradient_wrap.appendChild(page_title);
    gradient_wrap.appendChild(main_menu_items);
    gradient_wrap.appendChild(gradient);
    page_title.innerHTML = pageTitle;


    gradient_wrap.setAttribute('id', 'gradient_wrap');
    gradient_wrap.style.background = "linear-gradient(0deg, rgba(238,238,238,1) 67%, rgba(238,238,238,0) 100%)";
    gradient.setAttribute('class', 'gradient');
    main_menu_items.setAttribute('id', 'main_menu_items');
    page_title.setAttribute('id', 'page_title');

    for (let i = 0; i < mainMenuItems.length; i++) {
        var item = document.createElement('h3');
        item.innerHTML = (mainMenuItems[i])['name'];
        item.setAttribute('id', (mainMenuItems[i])['name']);
        item.setAttribute('class', 'item');
        main_menu_items.appendChild(item);
    }

    document.getElementById('Contact').addEventListener("click", renderContact);
    document.getElementById('About').addEventListener("click", renderAbout);
    document.getElementById('Press').addEventListener("click", renderPress);
    
    page_title.addEventListener("click", renderHome);
    
}