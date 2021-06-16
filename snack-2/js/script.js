// Snack 2
// Creare un oggetto che rappresenti un triangolo rettangolo, con le seguenti proprietà: base e altezza.
// Calcolare perimetro e area e stampare il risultato con console.log

function areaTriangolo (base, altezza) {
    return (base * altezza)/2;
}

function perimetroTriangolo (base, altezza) {
    var ipotenusa = Math.sqrt(base * base + altezza * altezza);
    return (base + altezza + ipotenusa).toFixed(2)
}

var triangolo = {
    base: 20,
    altezza: 10
}

triangolo.area = areaTriangolo (triangolo.base,triangolo.altezza);
console.log(triangolo.area)

triangolo.perimetro = perimetroTriangolo (triangolo.base,triangolo.altezza)
console.log(triangolo.perimetro);