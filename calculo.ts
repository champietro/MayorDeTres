let btnEnv = document.getElementById("btnEnviar");

btnEnv.addEventListener("click", () => {
  let numeroMax: number;  
  let ingresado: number;
  for (let veces : number = 1; veces <= 4; contador++ ) {
     ingresado = prompt("Ingrese un número:");
      if ingresado <= numeroMax{
        numeroMax= ingresado;
      }
    console.log("El número mayor es: ", numeroMax);
});
