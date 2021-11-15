function renderIntroImg() {
    let main = document.getElementById('main');
    renderMainMenuGradientInitialOn();
    var intro_img_anchor = document.createElement('a');
    var intro_img = document.createElement('img');
    var gradient_wrap = document.getElementById('gradient_wrap_always_on');
    gradient_wrap.appendChild(intro_img_anchor);
    intro_img_anchor.appendChild(intro_img);
    intro_img.setAttribute('id', 'intro_image');
    intro_img.setAttribute('src', introImg);
    intro_img_anchor.setAttribute('href', 'works.html');
}

function renderMainMenuGradientInitialOn() {

    // criar elementos e definir variaveis
    let main = document.getElementById('main');
    var main_menu_cont = document.createElement('div');
    let page_title_anchor = document.createElement('a');
    let page_title = document.createElement('h3'); /*antes era h1 */
    var gradient_wrap = document.createElement('div');
    var gradient = document.createElement('div');
    var main_menu_items = document.createElement('div');

    // colocar elementos dentro dos pais e criar título

    main.appendChild(gradient_wrap);
    gradient_wrap.appendChild(page_title_anchor);
    page_title_anchor.appendChild(page_title);
    gradient_wrap.appendChild(main_menu_items);
    gradient_wrap.appendChild(gradient);
    page_title.innerHTML = pageTitle;


    gradient_wrap.setAttribute('id', 'gradient_wrap_always_on');
    gradient_wrap.style.background = "linear-gradient(0deg, rgba(238,238,238,1) 67%, rgba(238,238,238,0) 100%)";
    gradient.setAttribute('class', 'gradient');
    main_menu_items.setAttribute('id', 'main_menu_items');
    page_title_anchor.setAttribute('href', 'works.html');
    page_title.setAttribute('id', 'page_title');
    page_title.setAttribute('href', 'works.html');

    for (let i = 0; i < mainMenuItems.length; i++) {
        var item = document.createElement('a');
        item.innerHTML = (mainMenuItems[i])['name'];
        item.setAttribute('id', (mainMenuItems[i])['name']);
        item.setAttribute('class', 'item');
        item.setAttribute('href', (mainMenuItems[i])['link']);
        main_menu_items.appendChild(item);
    }

    
}

function renderMainMenuGradientInitialOff() {

    // criar elementos e definir variaveis
    let main = document.getElementById('main');
    var main_menu_cont = document.createElement('div');
    let page_title_anchor = document.createElement('a');
    let page_title = document.createElement('h3'); /*antes era h1 */
    var gradient_wrap = document.createElement('div');
    var gradient = document.createElement('div');
    var main_menu_items = document.createElement('div');

    // colocar elementos dentro dos pais e criar título

    main.appendChild(gradient_wrap);
    gradient_wrap.appendChild(page_title_anchor);
    page_title_anchor.appendChild(page_title);
    gradient_wrap.appendChild(main_menu_items);
    gradient_wrap.appendChild(gradient);
    page_title.innerHTML = pageTitle;


    gradient_wrap.setAttribute('id', 'gradient_wrap');
    gradient_wrap.style.background = "linear-gradient(0deg, rgba(238,238,238,1) 67%, rgba(238,238,238,0) 100%)";
    gradient.setAttribute('class', 'gradient');
    main_menu_items.setAttribute('id', 'main_menu_items');
    page_title_anchor.setAttribute('href', 'works.html');
    page_title.setAttribute('id', 'page_title');
    page_title.setAttribute('href', 'works.html');

    for (let i = 0; i < mainMenuItems.length; i++) {
        var item = document.createElement('a');
        item.innerHTML = (mainMenuItems[i])['name'];
        item.setAttribute('id', (mainMenuItems[i])['name']);
        item.setAttribute('class', 'item');
        item.setAttribute('href', (mainMenuItems[i])['link']);
        main_menu_items.appendChild(item);
    }

    
}


    function renderContact() {
        var main = document.getElementById('main');
        main.innerHTML = '';
        document.body.style.backgroundColor = "#EEEEEE";
        renderMainMenuGradientInitialOff();

        var container_dad = document.createElement('div');
        container_dad.setAttribute('id', 'container_dad');
        main.appendChild(container_dad);


        var emailandreia = document.createElement('h3');
        emailandreia.setAttribute('id', 'emailandreia');
        emailandreia.innerHTML = (Contact[0])['email'];
        container_dad.appendChild(emailandreia);

        var desenho = document.createElement('img');
        desenho.setAttribute('src', 'media/graphics/zigzag.jpg');
        desenho.setAttribute('id', 'zigzag');
        main.appendChild(desenho);
    
        // Importar info das galerias ou outras instituições
        for (let i = 1; i < Contact.length; i++) {
            var container = document.createElement('div');
            container.setAttribute('id', 'container');
            var name = document.createElement('h3');
            name.setAttribute('class', "italic");
            var schedule = document.createElement('h3');
            var address = document.createElement('h3');
            var phone = document.createElement('h3');
            var email = document.createElement('h3');
            var website = document.createElement('h3');
            
            name.innerHTML = (Contact[i])['name'];
            schedule.innerHTML = (Contact[i])['schedule'];
            address.innerHTML = (Contact[i])['address'];
            phone.innerHTML = (Contact[i])['phone'];
            email.innerHTML = (Contact[i])['email'];
            website.innerHTML = (Contact[i])['website'];

            container_dad.appendChild(container);
            container.appendChild(name);
            container.appendChild(schedule);
            container.appendChild(address);
            container.appendChild(phone);
            container.appendChild(email);
            container.appendChild(website);
        }


    }

    function renderAbout() {
        var main = document.getElementById('main');
        main.innerHTML = '';
        document.body.style.backgroundColor = "#EEEEEE";
        renderMainMenuGradientInitialOff();

        var desenho = document.createElement('img');
        desenho.setAttribute('src', 'media/graphics/caracol.jpg');
        desenho.setAttribute('id', 'caracol');
        main.appendChild(desenho);

        var container_dad = document.createElement('div');
        container_dad.setAttribute('id', 'container_dad');
        main.appendChild(container_dad);
    
        // Importar info das galerias ou outras instituições
        for (let i = 0; i < About.length; i++) {
            var container = document.createElement('div');
            container.setAttribute('id', 'container');
            var title = document.createElement('h1'); /*antes era h1 */
            var items = document.createElement('h3');
            
            title.innerHTML = (About[i])['title'];
            items.innerHTML = (About[i]['items']);

            container_dad.appendChild(container);
            container.appendChild(title);
            container.appendChild(items);
        }

    }



    function renderPress() {
        var main = document.getElementById('main');
        main.innerHTML = '';
        document.body.style.backgroundColor = "#EEEEEE";
        renderMainMenuGradientInitialOff();

        var desenho = document.createElement('img');
        desenho.setAttribute('src', 'media/graphics/boing.jpg');
        desenho.setAttribute('id', 'boing');
        main.appendChild(desenho);

        for (let i = 0; i < Press.length; i++) {
            var ancora = document.createElement('a');
            var artigo = document.createElement('h3');

            main.appendChild(ancora);
            ancora.appendChild(artigo);

            ancora.setAttribute('id', i);
            ancora.setAttribute("class", "ancora_press");
            artigo.setAttribute("class", "artigo_press");
        
         
            ancora.setAttribute('href', (Press[i])['link']);
            ancora.setAttribute('target', '_blank');
 
            
            if ((Press[i])['title'] == "none"){
                artigo.innerHTML = (Press[i])['autor'] + " " + "(" + (Press[i])['data'] + ")";
            }
            else {
                artigo.innerHTML = "<i>" + (Press[i])['title'] + "</i>" + "—" + (Press[i])['autor'] + " " + "(" + (Press[i])['data'] + ")";
                
            } 

        }
    }

function openArticle(evt) {
    let main = document.getElementById('main');
    main.innerHTML = '';
    document.body.style.backgroundColor = "#EEEEEE";
    renderMainMenu();
    var gradient_wrap = document.getElementById('gradient_wrap');
    gradient_wrap.style.background = "linear-gradient(0deg, rgba(238,238,238,1) 67%, rgba(238,238,238,0) 100%)";
    evt = evt || window.event;
    var i = evt.srcElement.id;

    


}


function renderHome() {
    var main = document.getElementById('main');
    main.innerHTML = '';
    document.body.style.backgroundColor = "#EEEEEE";
    renderMainMenuGradientInitialOff();
    var gradient_wrap = document.getElementById('gradient_wrap');
    gradient_wrap.style.background = "linear-gradient(0deg, rgba(238,238,238,1) 67%, rgba(238,238,238,0) 100%)";
    // criar contentor
    var mosaic_cont_dad = document.createElement('div');
    main.appendChild(mosaic_cont_dad);
    mosaic_cont_dad.setAttribute('id', 'mosaic_cont_dad');

    for (let i = 0; i < worksArchive.length; i++) {
        // criar elementos e definir variaveis

        //mosaic_cont - contentor do texto e imagem
        //mosaic - imagem
        //title - titulo
        var mosaic_cont = document.createElement('div');
        var mosaic = document.createElement('img');

        // colocar elementos dentro dos pais
        mosaic_cont_dad.appendChild(mosaic_cont);
        mosaic_cont.appendChild(mosaic);
        //atribuir ids e classes
        mosaic_cont.setAttribute('id', 'mosaic_cont');
        mosaic.setAttribute('class', 'mosaic');
        mosaic.setAttribute('id', i);
        // ir buscar as informações


        if ((worksArchive[i])['expo_title'] == ""){
            
            for (let n = 0; n < (worksArchive[i])['piece'].length; n++) {
            var title = document.createElement('h3'); 
            title.setAttribute('id', i);
            title.setAttribute('class', 'title');
            mosaic_cont.appendChild(title);
            title.innerHTML = (worksArchive[i])['piece'][n]['title'] + "&nbsp;"; 
            }
        }
        else {
            var title = document.createElement('h3');
            title.setAttribute('id', i);
            title.setAttribute('class', 'title');
            mosaic_cont.appendChild(title);
            title.innerHTML = (worksArchive[i])['expo_title'];
        } 

    
        title.addEventListener("click", openProj);
        mosaic.setAttribute('src', (worksArchive[i])['highlight']);
        // mostrar imagem e abrir projeto
       
    }

}



function openProj(evt) {

    let main = document.getElementById('main');
    main.innerHTML = '';
    document.body.style.backgroundColor = "#EEEEEE";
    renderMainMenuGradientInitialOff();
    var gradient_wrap = document.getElementById('gradient_wrap');
    gradient_wrap.style.background = "linear-gradient(0deg, rgba(238,238,238,1) 67%, rgba(238,238,238,0) 100%)";
    evt = evt || window.event;
    var i = evt.srcElement.id;

    // descrição

    var description_cont = document.createElement('div');
    description_cont.setAttribute("id", "description_cont");
    main.appendChild(description_cont);


    /* CARREGAR TITULO EXPO E ANO */

    if ((worksArchive[i])['expo_title'] == "none"){

        for (let v = 0; v < (worksArchive[i])['piece'].length; v++) {
            var title = document.createElement('h1'); // antes era h3
            title.setAttribute('id', 'title_piece');
            title.innerHTML = (worksArchive[i])['piece'][v]['title'];
            description_cont.appendChild(title);
            var desc_piece = document.createElement('h3');
            desc_piece.setAttribute('id', 'desc_piece');
            description_cont.appendChild(desc_piece);
            desc_piece.innerHTML = (worksArchive[i])['piece'][v]['description'];
        }
    }
    else {
        var expo_title = document.createElement('h1'); /*antes era h1 */
        expo_title.setAttribute('id', 'expo_title');
        description_cont.appendChild(expo_title);
        expo_title.innerHTML = (worksArchive[i])['expo_title'];

        for (let v = 0; v < (worksArchive[i])['piece'].length; v++) {
            var title = document.createElement('h1'); // antes era h3
            title.setAttribute('id', 'title_piece');
            description_cont.appendChild(title);
            title.innerHTML = (worksArchive[i])['piece'][v]['title'];
    
            var desc_piece = document.createElement('h3');
            desc_piece.setAttribute('id', 'desc_piece');
            description_cont.appendChild(desc_piece);
            desc_piece.innerHTML = (worksArchive[i])['piece'][v]['description'];
        }
    }    

    /*CARREGAR DESCRIÇÃO GERAL*/
    var description = document.createElement('h3');
    description.setAttribute('class', 'text_proj');
    description_cont.appendChild(description);
    description.innerHTML = (worksArchive[i])['description'];

    /* CARREGAR ANO */

    var year = document.createElement('h3');
    year.setAttribute('class', 'text_proj');
    description_cont.appendChild(year);
    year.innerHTML = (worksArchive[i])['year'];


    // contentor grande e render do contentor das imagens
    main.setAttribute("class", "main_proj");
    var images_cont = document.createElement('div');
    images_cont.setAttribute("id", "images_cont");
    main.appendChild(images_cont);
    
    // definir variavel do arquivo das imagens
    var images = (worksArchive[i])['image']

    // renderizar imagens do projeto
    for (v = 0; v < images.length; v++) {
        let img_proj = document.createElement("IMG");
        var src = images[v];
        img_proj.setAttribute("id", v);
        img_proj.setAttribute("src", src);
        img_proj.setAttribute('class', 'img_proj');
        images_cont.appendChild(img_proj);
        img_proj.addEventListener('click', zoom_img);
    }

    
    renderCloseButton();
}

function zoom_img(evt) {
  
    evt = evt || window.event;

    var i = evt.srcElement.src;
    var id = evt.srcElement.id;
   
    let main = document.getElementById('main');
    var dark_back = document.createElement('div');
    document.body.style.overflow = 'hidden';
    main.appendChild(dark_back);
    dark_back.setAttribute('id', 'dark_back');

    document.getElementById("closebtn").style.display = "none";

    var zoomed_img = document.createElement('img');
    dark_back.appendChild(zoomed_img);
    zoomed_img.setAttribute('src', i);
    zoomed_img.setAttribute('id', id);
    zoomed_img.setAttribute('class', 'zoomed_img');

    var back_btn = document.createElement('img');
    var next_btn = document.createElement('img');
    var exit_btn = document.createElement('img');

    dark_back.appendChild(back_btn);
    dark_back.appendChild(next_btn);
    dark_back.appendChild(exit_btn);
    dark_back.setAttribute('overflow', 'hidden');
    dark_back.addEventListener('click', zoom_out);
    
    var imgclosebtn = document.createElement('img');
    var imgclosebtn_wrap = document.createElement('a');
    dark_back.appendChild(imgclosebtn_wrap);
    imgclosebtn_wrap.appendChild(imgclosebtn);
    imgclosebtn.setAttribute("id", "imgclosebtn");
    imgclosebtn.setAttribute("src", "media/graphics/back.svg");
    imgclosebtn.addEventListener("click", zoom_out);
}



function zoom_out() {
    let main = document.getElementById('main');
    let dark_back = document.getElementById('dark_back');
    let closebtn = document.getElementById('closebtn');
    main.removeChild(dark_back);
    document.body.style.overflowY = 'scroll';
    renderCloseButton();
}


function renderCloseButton() {
    var closebtn = document.createElement('img');
    var closebtn_wrap = document.createElement('a');
    main.appendChild(closebtn_wrap);
    closebtn_wrap.appendChild(closebtn);
    closebtn.setAttribute("id", "closebtn");
    closebtn.setAttribute("src", "media/graphics/back.svg");
    closebtn_wrap.setAttribute("href", "works.html");
}

        
        
       
