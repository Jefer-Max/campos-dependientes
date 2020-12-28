function slctr(texto, valor) {
  this.texto = texto;
  this.valor = valor;
}
var departamento = new Array();
departamento[0] = new slctr("- Departamentos -");
departamento[1] = new slctr("Antioquia", "antioquia");
departamento[2] = new slctr("Atlántico", "atlántico");
departamento[3] = new slctr("Cesár", "cesár");

//Nietos
var antioquia = new Array();
antioquia[0] = new slctr("- Antioquia -");
antioquia[1] = new slctr("Bello", null);
antioquia[2] = new slctr("Medellín", null);
antioquia[3] = new slctr("Rionegro", null);
antioquia[4] = new slctr("Urrao", null);

var atlantico = new Array();
atlantico[0] = new slctr("- Atlántico -");
atlantico[1] = new slctr("Barranquilla", null);
atlantico[2] = new slctr("Galapa", null);
atlantico[3] = new slctr("ponedera", null);
atlantico[4] = new slctr("Puerto Colombia", null);

var cesar = new Array();
cesar[0] = new slctr("- Cesár -");
cesar[1] = new slctr("Aguachica", null);
cesar[2] = new slctr("La Paz", null);
cesar[3] = new slctr("San Diego", null);
cesar[4] = new slctr("Valledupar", null);

function slctryole(cual, donde) {
  if (cual.selectedIndex != 0) {
    donde.length = 0;
    cual = eval(cual.value);
    for (m = 0; m < cual.length; m++) {
      var nuevaOpcion = new Option(cual[m].texto);
      donde.options[m] = nuevaOpcion;
      if (cual[m].valor != null) {
        donde.options[m].value = cual[m].valor;
      } else {
        donde.options[m].value = cual[m].texto;
      }
    }
  }
}
