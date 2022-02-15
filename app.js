const calcBMI = () => {
    let gewicht = document.getElementById("gewicht").value;
    let größe = document.getElementById("größe").value;
    let alter = document.getElementById("alter").value;


    const result = (gewicht / (größe / 100) ** 2).toFixed(2);
    document.getElementById("ergebnisBMI").className = "show";


    if (document.getElementById("weiblich").checked) {

        if (19 < alter && alter <= 34) {
            if (result < 17) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI: ${result} - Untergewicht`;
                
            } else if (result >= 17 && result <= 25) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Normalgewicht`;
            } else if (result > 25) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Übergewicht`;
            } else {
                document.getElementById("ergebnisBMI").innerHTML = "not found";
            }
        } else if (35 <= alter && alter <= 54) {
            if (result < 20) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Untergewicht`;
            } else if (result >= 21 && result <= 27) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Normalgewicht`;
            } else if (result > 27) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Übergewicht`;
            } else {
                document.getElementById("ergebnisBMI").innerHTML = "not found";
            }
        } else if (alter >= 55) {
            if (result < 21) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Untergewicht`;
            } else if (result >= 22 && result <= 29) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Normalgewicht`;
            } else if (result > 29) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Übergewicht`;
            } else {
                document.getElementById("ergebnisBMI").innerHTML = "not found";
            }
        } else {
            document.getElementById("ergebnisBMI").innerHTML = "Bitte überprüfen Sie Ihre Eingabe";
        }

    } else if (document.getElementById("männlich").checked) {

        if (19 < alter && alter <= 34) {
            if (result < 19) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Untergewicht`;
            } else if (result >= 19 && result <= 25) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Normalgewicht`;
            } else if (result >= 25) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Übergewicht`;
            } else {
                document.getElementById("ergebnisBMI").innerHTML = "not found";
            }
        } else if (35 <= alter && alter <= 54) {
            if (result < 21) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Untergewicht`;
            } else if (result >= 21 && result <= 27) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Normalgewicht`;
            } else if (result >= 27) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Übergewicht`;
            } else {
                document.getElementById("ergebnisBMI").innerHTML = "not found";
            }
        } else if (alter >= 55) {
            if (result < 23) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Untergewicht`;
            } else if (result >= 23 && result <= 29) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Normalgewicht`;
            } else if (result >= 29) {
                document.getElementById("ergebnisBMI").innerHTML = `Ihr BMI : ${result} - Übergewicht`;
            } else {
                document.getElementById("ergebnisBMI").innerHTML = "not found";
            }
        } else {
            document.getElementById("ergebnisBMI").innerHTML = "Bitte überprüfen Sie Ihre Eingabe";
        }
    } else {
        document.getElementById("ergebnisBMI").innerHTML = "Bitte überprüfen Sie Ihre Eingabe";
    }

}