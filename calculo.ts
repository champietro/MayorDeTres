let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numeroMax: Number= 0;  
  for (let veces : Number = 1; veces <= 4; veces++ ) {
      ingresado = Number(prompt("Ingrese un número: "));
      if ingresado <= numeroMax{
        numeroMax= ingresado;
      }
    console.log("El número mayor es: ", numeroMax);
});