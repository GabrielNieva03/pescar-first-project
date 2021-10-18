class Novedad {
    constructor(id, description, time, category) {
      this.id = id;
      this.description = description;
      this.time = time;
      this.category = category;
    }
  }

  var novedades = [];
  //novedades.push(new Novedad(1, "Se casó la hija de tinelli", "9/9 10 HS", "Espectaculo"));
  //novedades.push(new Novedad(2, "Susana jimenes arranca su programa en 2 dias", "9/9 10 HS", "Espectaculo"));
  //novedades.push(new Novedad(3, "Lo que sea ejemplo de novedad", "9/9 10 HS", "Noticias"));
  //novedades.push(new Novedad(4, "Tinelli se compró un auto nuevo", "9/9 10 HS", "Espectaculo"));

  function enviandoFormulario() {
    document.getElementById('result').innerHTML = '';
    var value = document.getElementById('input-search').value.toLocaleUpperCase();
   
    var result = "<ul>";
    
    novedades.forEach(novedad => {
      if(novedad.description.toLocaleUpperCase().includes(value)) {
        var li = "<li>" + novedad.id + " - " + novedad.description + " - " + novedad.time + " - " + novedad.category + "</li>";
        result += li;
      }
    });

    result += "</ul>";
    
    document.getElementById('result').insertAdjacentHTML("beforeend", result);

  }
   
  function obtenerJsonApi() {
    fetch('https://mocki.io/v1/43f89ab7-76ec-4ae1-b3ee-539a130b459e')
    .then(response => {
        console.log("Gabi RESPONSE");
        console.log(response);
        return response.json();
    })
    .then(data => {
        console.log("Gaby JSON");
        console.log(data);
        novedades = data;
    });
  }

 obtenerJsonApi();