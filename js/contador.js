function atualizarContador() {
  const dataNatal = new Date("December 25, 2025 00:00:00").getTime();
  const agora = Date.now();
  const diff = dataNatal - agora;

  if (diff < 0) {
    document.getElementById("cronometro").textContent = "Feliz Natal!";
    return;
  }

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutos = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById("cronometro").textContent =
    `${dias} dias • ${horas}h ${minutos}m ${segundos}s`;
}

setInterval(atualizarContador, 1000);
atualizarContador();
