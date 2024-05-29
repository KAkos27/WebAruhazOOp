import TSor from "./TSor.js";

class Tablazat {
  #lista = [];
  #szuloElem;
  #tbodyElem;
  constructor(lista, szuloElem) {
    this.#lista = lista;
    this.#szuloElem = szuloElem;
    this.#tablazatMegjelenit();
    this.#tbodyElem = this.#szuloElem.children("table").children("tbody");
    this.#sorokHozzaadasa();
  }

  #tablazatMegjelenit() {
    let txt = "";
    txt += "<table class='table table-striped'>";
    txt += "<tr><th>ID</th><th>Név</th><th>Kor</th><th>Nem</th><th>=</th></tr>";
    txt += "</table>";
    this.#szuloElem.append(txt);
  }

  #sorokHozzaadasa() {
    this.#lista.forEach((element) => {
      new TSor(element, this.#tbodyElem);
    });
  }
}

export default Tablazat;
