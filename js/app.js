
const botao = document.querySelector("#btn-buscar");
const anuncios = document.querySelector("#anuncios");

botao.addEventListener("click", () => {
  anuncios.textContent =
    "Busca realizada. As monitorias disponíveis serão exibidas.";
});
