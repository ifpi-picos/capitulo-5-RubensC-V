let temperatura = Number (prompt ("Temperatura:"))

let  escalaTermica = prompt ("Para qual escala térmica deseja fazer a conversão?")

if (escalaTermica === "celsius") {
    let celsius = Number ((temperatura -32) / 1.8);
    console.log ("conversão para celsius:",celsius,"°C");
} else {
    let fahremreit = Number ((temperatura * 1.8) + 32);
    console.log ("Conversão para fahremreit:",fahremreit,"°F");
}