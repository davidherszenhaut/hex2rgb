function convert() {

    var hex = document.getElementById("hexValue").value;
    hex = sanitizeInput(hex);
    var rgb = toRGB(hex);
    document.getElementById("rgbValue").innerHTML = rgb;

}

function sanitizeInput(hex) {

    // remove "#" if included by user

    if (hex.length === 7) {
        hex = hex.slice(1, 7);
    }

    // make sure the value is long enough

    if (hex.length < 6) {
        alert("Double check your hexadecimal value.");
    }

    hex = hex.toLowerCase();

    // make sure all characters are acceptable values

    var goodInputs = "abcdef0123456789";
    for (i = 0; i < hex.length; i++) {
        if (goodInputs.indexOf(hex[i]) === -1) {
            alert("Double check your hexadecimal value.");
        }
    }

    return hex;

}

function toRGB(hex) {

    var redHex = hex.slice(0, 2);
    var grnHex = hex.slice(2, 4);
    var bluHex = hex.slice(4, 6);
    // alert("R: " + redHex + ", G: " + grnHex + ", B: " + bluHex);

    var hexDict = {"0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15};

    var redRgb = (hexDict[redHex[0]] * 16) + (hexDict[redHex[1]]);
    var grnRgb = (hexDict[grnHex[0]] * 16) + (hexDict[grnHex[1]]);
    var bluRgb = (hexDict[bluHex[0]] * 16) + (hexDict[bluHex[1]]);
    // alert("R: " + redHex + ", G: " + grnHex + ", B: " + bluHex + "\nR: " + redRgb + ", G: " + grnRgb + ", B: " + bluRgb);

    var rgb = "(" + redRgb.toString() + ", " + grnRgb.toString() + ", " + bluRgb.toString() + ")";
    // alert(rgb);

    return rgb;

}