document.addEventListener("DOMContentLoaded", function () {
    'use strict';

    class Tura {
        constructor(naziv, duzina, opis, tagovi = []) {
            this.naziv = naziv;
            this.duzina = duzina;
            this.opis = opis;
            this.tagovi = tagovi;
        }
    }


    let ture = JSON.parse(localStorage.getItem("ture"))

    if (!ture) {
        ture = [
            new Tura("Planinska avantura", 5, "Ova tura vodi kroz prelepe planinske predele i pruža nezaboravne poglede.", ["planina", "avantura", "priroda"]),
            new Tura("Gradska šetnja", 3, "Upoznajte istoriju i kulturu našeg grada kroz ovu zanimljivu šetnju.", ["grad", "istorija", "kultura"]),
        ];
        localStorage.setItem("ture", JSON.stringify(ture));
    }

    function prikaziTure() {
        const tbody = document.querySelector("#tabelaTura tbody")
        tbody.innerHTML = "";

        for (let i = 0; i < ture.length; i++) {
            const tura = ture[i];

            const red = document.createElement("tr");
            const nazivCelija = document.createElement("td");
            const duzinaCelija = document.createElement("td");

            nazivCelija.textContent = tura.naziv;
            duzinaCelija.textContent = tura.duzina + " km";

            red.appendChild(nazivCelija);
            red.appendChild(duzinaCelija);

            red.addEventListener("click", () => prikaziDetalje(tura));

            tbody.appendChild(red);
        }
    }

    function prikaziDetalje(tura) {
        document.getElementById("detalj-naziv").textContent = tura.naziv;
        document.getElementById("detalj-opis").textContent = tura.opis;
        document.getElementById("detalj-tagovi").textContent = tura.tagovi.join(", ");
    }

    prikaziTure();
});