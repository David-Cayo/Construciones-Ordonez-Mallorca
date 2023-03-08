$.getJSON("/assets/js/language.json", function(json){
    
    //Lenguaje por defecto de la página sessionStorage.setItem("lang", "idioma")"
    if(!localStorage.getItem("lang")){
      localStorage.setItem("lang", "es");
    }
    // Verificamos el lenguaje que tiene en el local storage y cambiamos de idioma
    if (localStorage.getItem('lang') === 'es') {
      $('.spain').addClass('active');
      
    } else {
      $('.detusch').addClass('active');
      // Esto es para cambiar el idioma de los placeholder de el formulario de contacto
      // Primero verificamos si existe esa clase porque si no nos da error en las demás páginas
      if ($('.form-control').length > 0) {
        $('.form-control')[0].placeholder = "Schreib deinen Namen";
        $('.form-control')[1].placeholder = "Schreiben Sie Ihre E-Mail";
        $('.form-control')[2].placeholder = "Schreiben Sie das Thema";
        $('.form-control')[3].placeholder = "Schreibe deine Nachricht";
      }
    }
    // Fin de verificar el idioma
  
    let lang = localStorage.getItem("lang");
    let doc = json;
    $('.lang').each(function(index, element){
      $(this).text(doc[lang][$(this).attr('key')]);
    });//Each
  
    $('.translate').click(function(){
      localStorage.setItem("lang", $(this).attr('id')) ;
      var lang = $(this).attr('id');
      var doc = json;
        $('.lang').each(function(index, element){
          $(this).text(doc[lang][$(this).attr('key')]);
        }); //Each
    }); //Funcion click
  });//Get json AJAX
    