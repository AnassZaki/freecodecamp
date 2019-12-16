function orbitalPeriod(arr) {

    // Standard Gravitational Parameter of the earth
    let GM = 398600.4418;
    let earthRadius = 6367.4447;

    // looping through each average altitude of the object orbiting the earth 
    for (let i = 0; i < arr.length; i++) {

        // we calculate the rounded Orbital Period of the object and assign it to ops
        let ops = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[i].avgAlt + earthRadius, 3) / GM));

        // we delete the altitudes 
        delete arr[i].avgAlt;

        // we add a new property orbitalPeriod with the orbital periods *ops*
        arr[i].orbitalPeriod = ops;
    }
    return arr;
}

console.log(orbitalPeriod([{ name: "iss", avgAlt: 413.6 }, { name: "hubble", avgAlt: 556.7 }, { name: "moon", avgAlt: 378632.553 }]));