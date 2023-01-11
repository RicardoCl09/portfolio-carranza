let menuVisible = false;

function mostrarOcultarMenu() {
    if (menuVisible) {
        document.getElementById("nav").classList = "";
        menuVisible = false;
    } else {
        document.getElementById("nav").classList = "responsive";
        menuVisible = true;
    }
}

function seleccionar() {
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

function efectoHabilidades() {
    let skills = document.getElementById("skills");
    let distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("python");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("javascript");
        habilidades[3].classList.add("csharp");
        habilidades[4].classList.add("dart");
        habilidades[5].classList.add("flutter");
        habilidades[6].classList.add("cplusplus");
        habilidades[7].classList.add("sql");
        habilidades[8].classList.add("java");
        habilidades[9].classList.add("comunicacion");
        habilidades[10].classList.add("equipo");
        habilidades[11].classList.add("creatividad");
        habilidades[12].classList.add("dedicacion");
    } 
}

window.onscroll = function() {
    efectoHabilidades();
}