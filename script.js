const body = document.querySelector("body");

const fetchData = async function () {
  try {
    const res = await fetch(
      "https://restcountries.com/v3.1/independent?status=true"
    );
    console.log(res);
    const data = await res.json();
    if (res.ok) {
      console.log(data);
      data.forEach((el) => {
        console.log(el.cca2);
        if (el.cca2 !== "IL") {
          const markup = `<div class="container">
                <div class="image">
                    <img src="${el.flags.png}" alt="">
                </div>
                <div class="informations">
                    <h1>${el.name.common}</h1>
                    <h2>Population : <span>${el.population}</span></h2>
                    <h2>Capital : <span>${el.capital[0]}</span></h2>
                    <h2>Region: <span>${el.region}</span></h2>
                </div>
            </div>`;
          body.insertAdjacentHTML("afterbegin", markup);
        } else {
          const markup = `<div class="container">
                    <div class="image">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/800px-Flag_of_Palestine.svg.png" alt="">
                    </div>
                    <div class="informations">
                        <h1>palestine</h1>
                        <h2>Population : <span>4923000</span></h2>
                        <h2>Capital : <span>Jerusalem</span></h2>
                        <h2>Region: <span>Asia</span></h2>
                    </div>
                </div>`;
          body.insertAdjacentHTML("afterbegin", markup);
        }
      });
    } else {
      console.log("server error", error);
    }
  } catch (err) {
    console.log("fetch error", err);
  }
};

fetchData();
