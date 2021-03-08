function soy() {
    var closecontent = '</div>';
    var titulo = "Sobre mi";
    var descripcion = "Me llamo Justice Ariel Velasco Gómez, mi fecha de nacimiento es el 28 de agosto del 2002, soy originario de San Salvador, El Salvador.<br> Emigré a Cataluña en el año 2019, año en el cual nació mi interes por la programación, en mis ratos libres me gusta salir a la playa en mi surfskate, en el desayuno leche de avena, en la noche documentales y a dormir.";
    
    document.getElementById('article').innerHTML = '<article class="sobreMi">' + '<h1>' + titulo + '</h1>' + '<p class="texArticle">' + descripcion + '</p>' + '</article>';
}
function perfilCompetencial(){
    var titulo = "Perfil competencial";
    var descripcion = "Soy una persona joven hábil y apasionado por la informática. Excelente capacidad comunicativa, participativo y con un amplio campo de interés por seguir aprendiendo y mejorando.";

    document.getElementById('article').innerHTML = '<article class="perfilCompetencial">' + '<h1>' + titulo + '</h1>' + '<p class="texArticle">' + descripcion + '</p>' + '</article>';
}
function informatica(){
    var titulo = "Informática";
    var descripcion = "- Trabajos con metodología 'Atomic Design' <br> - Conocimiento del framework de JavaScript Vue.js y conexiones a APIS. <br> - Avanzado conocimiento en lenguaje de marcado HTML, hoja de estilo en cascada CSS asi mismo en prepocesadores como LESS o SASS. <br> - Creación de prototipos web con el editor de gráficos vectoriales 'Figma'.";

    document.getElementById('article').innerHTML = '<article class="informatica">' + '<h1>' + titulo + '</h1>' + '<p class="texArticle">' + descripcion + '</p>' + '</article>';
}
function habilidades(){
    var titulo = "Habilidades";
    var descripcion = "Durante los últimos tres años de ESO pertenecí a la delegación de alumnos de mi sección, potenciando gracias a ello las habilidades de: <br> - Trabajo en equipo <br> - Comunicación <br> - Capacidades organizativas y de coordinación";

    document.getElementById('article').innerHTML = '<article class="habilidades">' + '<h1 class="textHabilidades">' + titulo + '</h1>' + '<p class="textDescription">' + descripcion + '</p>' + '</article>';
}
function formacion(){
    var titulo = "Mis formaciones";
    var descripcion = "Curso de programador e implementación de Ecommerce <br> Octubre 2020 <br><br> ESO: <br> Complejo Educativo Católico Monseñor Oscar Arnulfo Romero <br> Enero 2015 - Diciembre 2018";

    document.getElementById('article').innerHTML = '<article class="formacion">' + '<h1 class="textBlack">' + titulo + '</h1>' + '<p>' + descripcion + '</p>' + '</article>';
}
function experiencia(){
    var titulo = "¡Oops!";
    var descripcion = "Estamos trabajando para tener la experiencia laboral.";

    document.getElementById('article').innerHTML = '<article class="experiencia">' + '<h1 class="textBlack">' + titulo + '</h1>' + '<p class="textBlack">' + descripcion + '</p>' + '</article>';
}
function contacto(){
    var titulo = "Contácto";
    document.getElementById('article').innerHTML = '<article class="contacto">' + '<h1>' + titulo + '</h1>' + '<a href="https://www.linkedin.com/in/justice-v-b88a871a2/">' + '<i class="fab fas1 fa-linkedin">' + '<h6>' + ' Justice Velasco' + '</h5>' + '</i>' + '</a>' + '<br>' + '<a href="https://github.com/Jusav503">' + '<i class=" fab fas1 fa-github-square">' + '<h6>' + 'Jusav503' + '</h6>' + '</i>' + '</a>' + '<br>' + '<i class="fas fas1 fa-phone-alt">' + '<h6>' + '+34 671 296 170' + '</h6>' + '</i>' + '<br>' + '<i class="fas fas1 fa-at">' + '<h6>' + ' justicevgomez001@gmail.com' + '</h6>' + '</i>' + '</article>';
}
