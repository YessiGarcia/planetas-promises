function getJSON(url){
	return new Promise(function(resolve, reject){
		var ajax = new XMLHttpRequest();
		ajax.open("GET", url);
		ajax.send();
		ajax.onreadystatechange = function (){
			if (ajax.readyState == 4){
				resolve(JSON.parse(ajax.responseText));
			}
        };
    });
}

getJSON("data/earth-like-results.json")

.then(function(arreglo){
	return Promise.all(arreglo.results.map(getJSON));
})

.then(function(planeta){
	console.log(planeta.pl_name);
});
var plantillaFinal ="";

var nombrePlaneta = planeta.pl_name;
var contenido = planeta.content;
var id = planeta.id;
var respuestas = tema.responses_count;
plantillaFinal += plantilla.replace("__autor__", autor)
    .replace("__nombre__", nombrePlaneta)
    .replace("__id__", id)
    .replace("__respuestas__", respuestas);

    $('#tarjetas').html(plantillaFinal);
    });

};

var plantilla = '<div class="row">' +
	        '<div class="col s12 m4 offset-m4">' +
	          	'<div class="card">' +
		            '<div class="card-image">' +
		              	'<img src="images/sample-1.jpg">' +
		              	'<span class="card-title">__nombre__</span>' +
		            '</div>' +
		            '<div class="card-content">' +
		              	'<p>__ __</p>' +
		            '</div>' +
		            '<div class="card-action">' +
		              	'<a href="#">This is a link</a>' +
		            '</div>' +
	          	'</div>' +
	        '</div>' + 
      	'</div>'