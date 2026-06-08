const alimentosPorMes = {

5:[
{
nome:"Limão",
imagem:"https://images.unsplash.com/photo-1590502593747-42a996133562",
tipo:"Fruta da estação"
},

{
nome:"Morango",
imagem:"https://images.unsplash.com/photo-1464965911861-746a04b4bca6",
tipo:"Fruta da estação"
},

{
nome:"Cenoura",
imagem:"https://images.unsplash.com/photo-1447175008436-054170c2e979",
tipo:"Legume da estação"
},

{
nome:"Rúcula",
imagem:"https://images.unsplash.com/photo-1518977676601-b53f82aba655",
tipo:"Verdura da estação"
}
]

};

const btn = document.getElementById("btnMostrar");

btn.addEventListener("click",()=>{

const mes = document.getElementById("mes").value;

const lista = document.getElementById("listaAlimentos");

lista.innerHTML="";

const alimentos = alimentosPorMes[mes] || [];

alimentos.forEach(item=>{

lista.innerHTML += `

<div class="card">

<img src="${item.imagem}" alt="${item.nome}">

<div class="card-content">

<h3>${item.nome}</h3>

<p>${item.tipo}</p>

<span class="badge">
🌱 Sustentável
</span>

</div>

</div>

`;

});

});