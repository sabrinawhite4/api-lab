let button1 = document.querySelector("#button1");

function click(event) {
  event.preventDefault();

  console.log("Button Clicked");
  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
      console.log(res.data.results[0].residents);
      const residents = res.data.results[0].residents
    residents.forEach((url) =>
      axios.get(url).then((res) => {
        const h2 = document.createElement("h2")
        h2.textContent = res.data.name
        document.querySelector("body").appendChild(h2);
      })
    );
  });
}

button1.addEventListener("click", click);

const residentCallback = res.data.residents[(0, 1, 2)];
const errCallback = (err) => console.log(err);

const baseUrl = axios.get(baseUrl).then(residentCallback).catch(errCallback);
