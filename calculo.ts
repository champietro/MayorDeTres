let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numeroMax = Number(prompt("Ingrese un número: "));
  for (let veces: Number = 1; veces <= 2; veces++) {
    let ingresado = Number(prompt("Ingrese un número: "));
    if (ingresado >= numeroMax) {
      numeroMax = ingresado;
    }
  }
  console.log("El número mayor es: ", numeroMax);
});
