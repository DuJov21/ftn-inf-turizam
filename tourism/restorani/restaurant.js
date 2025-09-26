'use strict'

class Restoran {
  constructor(id, naziv, opis, tip) {
    this.id = id
    this.naziv = naziv
    this.opis = opis
    this.tip = tip
  }
}

// --- LocalStorage helpers ---
function ucitajRestorane() {
  let podaci = localStorage.getItem("restorani")
  return podaci ? JSON.parse(podaci) : []
}

function sacuvajRestorane() {
  localStorage.setItem("restorani", JSON.stringify(restorani))
}

// --- Inicijalni restorani ---
let restorani = ucitajRestorane()
if (restorani.length === 0) {
  restorani = [
    new Restoran(1, "Italijanski kutak", "Autentični ukusi Italije u centru grada", "Italijanska"),
    new Restoran(2, "Azijski raj", "Indonežanski i ostali ukusi Azije, kao u Džakarti", "Azijska, Indonežanska"),
    new Restoran(3, "Gurmanova oaza", "Tradicionalna srpska jela", "Srpska, Balkanska"),
  ]
  sacuvajRestorane()
}

// --- Prikaz tabele ---
function renderTabela() {
  let tbody = document.querySelector(".restaurants-table tbody")
  tbody.innerHTML = ""

  restorani.forEach(restoran => {
    let tr = document.createElement("tr")

    let tdNaziv = document.createElement("td")
    tdNaziv.textContent = restoran.naziv

    let tdTip = document.createElement("td")
    tdTip.textContent = restoran.tip

    tr.appendChild(tdNaziv)
    tr.appendChild(tdTip)

    tr.addEventListener("click", () => prikaziDetalje(restoran))

    tbody.appendChild(tr)
  })
}

// --- Detalji restorana ---
function prikaziDetalje(restoran) {
  document.getElementById("detail-naziv").textContent = restoran.naziv
  document.getElementById("detail-opis").textContent = restoran.opis
  document.getElementById("detail-tip").textContent = restoran.tip
}

// --- Init ---
renderTabela()
document.querySelector(".restaurant-form").addEventListener("submit", dodajNoviRestoran)
