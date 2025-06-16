
function calcular() {
    const tasa = parseFloat(document.getElementById("institucion").value) / 100 / 12;
    const monto = parseFloat(document.getElementById("monto").value);
    const plazo = parseInt(document.getElementById("plazo").value);

    if (!monto || !plazo || !tasa) return;

    generarTablaFrancesa(monto, plazo, tasa);
    generarTablaAlemana(monto, plazo, tasa);
}

function generarTablaFrancesa(monto, plazo, tasa) {
    let tabla = "<tr><th>Mes</th><th>Cuota</th><th>Interés</th><th>Capital</th><th>Saldo</th></tr>";
    let cuota = monto * (tasa * Math.pow(1 + tasa, plazo)) / (Math.pow(1 + tasa, plazo) - 1);
    let saldo = monto;
    let totalInteres = 0, totalCuota = 0;

    for (let i = 1; i <= plazo; i++) {
        let interes = saldo * tasa;
        let capital = cuota - interes;
        saldo -= capital;
        totalInteres += interes;
        totalCuota += cuota;
        tabla += `<tr><td>${i}</td><td>${cuota.toFixed(2)}</td><td>${interes.toFixed(2)}</td><td>${capital.toFixed(2)}</td><td>${saldo.toFixed(2)}</td></tr>`;
    }

    tabla += `<tr><th>Total</th><th>${totalCuota.toFixed(2)}</th><th>${totalInteres.toFixed(2)}</th><th>${(monto).toFixed(2)}</th><th>0.00</th></tr>`;
    document.getElementById("tablaFrancesa").innerHTML = tabla;
}

function generarTablaAlemana(monto, plazo, tasa) {
    let tabla = "<tr><th>Mes</th><th>Cuota</th><th>Interés</th><th>Capital</th><th>Saldo</th></tr>";
    let abonoCapital = monto / plazo;
    let saldo = monto;
    let totalInteres = 0, totalCuota = 0;

    for (let i = 1; i <= plazo; i++) {
        let interes = saldo * tasa;
        let cuota = abonoCapital + interes;
        saldo -= abonoCapital;
        totalInteres += interes;
        totalCuota += cuota;
        tabla += `<tr><td>${i}</td><td>${cuota.toFixed(2)}</td><td>${interes.toFixed(2)}</td><td>${abonoCapital.toFixed(2)}</td><td>${saldo.toFixed(2)}</td></tr>`;
    }

    tabla += `<tr><th>Total</th><th>${totalCuota.toFixed(2)}</th><th>${totalInteres.toFixed(2)}</th><th>${(monto).toFixed(2)}</th><th>0.00</th></tr>`;
    tabla += `<tr><th>Total</th><th>${totalCuota.toFixed(2)}</th><th>${totalInteres.toFixed(2)}</th><th>${(monto).toFixed(2)}</th><th>0.00</th></tr>`;
    document.getElementById("tablaAlemana").innerHTML = tabla;
}
