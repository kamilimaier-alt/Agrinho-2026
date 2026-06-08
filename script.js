const alimentosPorMes = {
  1: ["Abacaxi", "Manga", "Cenoura", "Repolho"],
  2: ["Mamão", "Abacate", "Beterraba", "Alface"],
  3: ["Banana", "Couve", "Tomate", "Melancia"],
  4: ["Laranja", "Pera", "Chuchu", "Couve-flor"],
  5: ["Limão", "Morango", "Cenoura", "Rúcula"],
  6: ["Ameixa", "Cebola", "Alface", "Pepino"],
  7: ["Caqui", "Beterraba", "Tomate", "Espinafre"],
  8: ["Maçã", "Abóbora", "Couve", "Rabanete"],
  9: ["Uva", "Pimentão", "Alface", "Abobrinha"],
  10: ["Laranja", "Banana", "Cenoura", "Repolho"],
  11: ["Mamão", "Abacate", "Cebola", "Tomate"],
  12: ["Manga", "Melancia", "Alface", "Chuchu"]
};

const btnMostrar = document.getElementById("btnMostrar");
const listaAlimentos = document.getElementById("listaAlimentos");

btnMostrar.addEventListener("click", () => {
  const mes = document.getElementById("mes").value;
  const alimentos = alimentosPorMes[mes];

  listaAlimentos.innerHTML = "";
  alimentos.forEach(alimento => {
    const li = document.createElement("li");
    li.textContent = alimento;
    listaAlimentos.appendChild(li);
  });
});