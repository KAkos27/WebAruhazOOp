import Tablazat from "./view/Tablazat.js";
import DataService from "./model/DataService.js";

const ds = new DataService();
ds.getAdat("http://localhost:3000/emberekLISTA", megjelenit);

function megjelenit(lista) {
  new Tablazat(lista, $(".tablazat"));
}

$(window).on("torol", (event) => {
  console.log(event.detail);
});
