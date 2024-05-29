class TSor {
  #termekObj = {};
  #szuloElem;
  #sorElem;
  #torlesElem;
  constructor(termekObj, szuloElem) {
    this.#termekObj = termekObj;
    this.#szuloElem = szuloElem;
    this.#sorokLetrehozasa();
    this.#torlesElem = this.#szuloElem
      .children("tr:last-child")
      .children("td")
      .children(".torol");
    this.#torlesElem.on("click", () => {
      this.#trigger("torol");
    });
  }

  #trigger(esemenyNev) {
    const e = new CustomEvent(esemenyNev, { detail: this.#termekObj.id });
    window.dispatchEvent(e);
  }

  #sorokLetrehozasa() {
    let txt = `<tr>`;
    for (const key in this.#termekObj) {
      txt += `<td>${this.#termekObj[key]}</td>`;
    }
    txt += `<td><button class="torol">Töröl</button></td>`;
    txt += `</tr>`;
    this.#szuloElem.append(txt);
  }
}

export default TSor;
