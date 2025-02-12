class DataService {
  constructor() {}

  getAdat(vegpont, callback) {
    fetch(vegpont, { method: "GET" })
      .then((response) => response.json())
      .then((data) => {
        callback(data);
      })
      .catch((error) => console.log(error));
  }

  postAdat(vegpont, adat) {
    fetch(vegpont, {
      method: "POST",
      body: JSON.stringify(adat),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  deleteAdat(vegpont, id) {
    fetch(vegpont + "/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }

  putAdat(vegpont, id, adat) {
    fetch(vegpont + "/" + id, {
      method: "PUT",
      body: JSON.stringify(adat),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
}

export default DataService;
