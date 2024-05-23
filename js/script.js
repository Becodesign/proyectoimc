const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const peso = parseFloat(document.getElementById("peso").value);
  const estatura = parseFloat(document.getElementById("estatura").value);

  const IMC = peso / (estatura * estatura);

  const resultado = document.getElementById("resultado");
  resultado.textContent = `${IMC.toFixed(2)}`;

  const estado = document.getElementById("estado");
  if (IMC < 18.5) {
    estado.textContent = `BAJO PESO`;
  } else if (IMC >= 18.5 && IMC <= 24.9) {
    estado.textContent = `PESO SALUDABLE`;
  } else if (IMC > 24.9 && IMC <= 30) {
    estado.textContent = `SOBREPESO`;
  } else if (IMC > 30) {
    estado.textContent = `OBESIDAD`;
  }
});
