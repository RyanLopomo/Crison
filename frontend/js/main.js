document.addEventListener("DOMContentLoaded", () => {

  const popup = document.getElementById("popup");
  const tipoImovel = document.getElementById("tipoImovel");

  document.getElementById("apartamentoBtn").addEventListener("click", () => {
    tipoImovel.value = "Apartamento";
    popup.classList.add("active");
  });

  document.getElementById("casaBtn").addEventListener("click", () => {
    tipoImovel.value = "Casa";
    popup.classList.add("active");
  });

  document.getElementById("contatoBtn").addEventListener("click", () => {
    popup.classList.add("active");
  });

  document.getElementById("closePopup").addEventListener("click", () => {
    popup.classList.remove("active");
  });

  popup.addEventListener("click", (e) => {
    if (e.target === popup) popup.classList.remove("active");
  });

  document.getElementById("enviarWhatsapp").addEventListener("click", () => {

    const nome = document.getElementById("nome").value.trim();
    const telefone = document.getElementById("telefone").value.trim();
    const tipo = tipoImovel.value;
    const negocio = document.getElementById("negocio").value;
    const valor = document.getElementById("valor").value.trim();

    if (!nome || !telefone) {
      alert("Preencha nome e telefone");
      return;
    }

    const mensagem =
`📌 Novo Pré-Cadastro Cris On

👤 Nome: ${nome}
📱 Telefone: ${telefone}
🏠 Imóvel: ${tipo}
🔁 Tipo: ${negocio}
💰 Valor previsto: R$ ${valor || "Não informado"}`;

    window.open(
      `https://wa.me/5511942377008?text=${encodeURIComponent(mensagem)}`,
      "_blank"
    );
  });

});
