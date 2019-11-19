// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali.
// Servendoci di handlebars stampiamo tutto a schermo. In questo momento non è importante la parte grafica.
// Chiamata:
// https://flynn.boolean.careers/exercises/api/array/music
// Layout base (per chi non vuole implementarne uno suo):
// https://bitbucket.org/booleancareers/ex-dischi-musicali-layout
// NOTE:
// iniziate a guardarvi cosa vi ritorna la API, per capire il tipo di dati e la struttura dati che avete a disposizione;
// partite dalla questione logica e quindi andate di console.log;
// poi aggiungete la questione output handlebars.

$(document).ready(function() {

    $.ajax({
      url : "https://flynn.boolean.careers/exercises/api/array/music",

      method : "GET",

      success : function (thumb) {

        var thumbOk = thumb.response;

        var copiaTempl = $("#hb-template").html();

        var templReady = Handlebars.compile(copiaTempl);

          // for (var variable in thumbOk) {
          //   console.log(thumbOk[variable]);
          //   }

          for (var i = 0; i < thumbOk.length; i++) {
            var createObj = { img: thumbOk[i].poster,
                              title : thumbOk[i].title,
                              author: thumbOk[i].author,
                              year : thumbOk[i].year,
                              genere : thumbOk[i].genre
                            };

            var createEl = templReady(createObj);

            var where = $(".cds-container");

            where.append(createEl);
            
          }
      },

      error : function (errore) {
        alert("E' avvenuto un errore. ");
      }
    });



});
