const polygons = {
    "1": "Monogon",
    "2": "Bigon",
    "3": "Triangle",
    "4": "Tetragon",
    "5": "Pentagon",
    "6": "Hexagon",
    "7": "Septagon",
    "8": "Octagon",
    "9": "Nonagon",
    "10": "Decagon",
    "11": "Hendecagon",
    "12": "Dodecagon",
    "13": "Tridecagon",
    "14": "Tetradecagon",
    "15": "Pentadecagon",
    "16": "Hexadecagon",
    "17": "Heptadecagon",
    "18": "Octadecagon",
    "19": "Enneadecagon",
    "20": "Icosagon",
    "21": "Icosikaihenagon",
    "22": "Icosikaidigon",
    "23": "Icosikaitrigon",
    "24": "Icosikaitetragon",
    "25": "Icosikaipentagon",
    "26": "Icosikaihexagon",
    "27": "Icosikaiheptagon",
    "28": "Icosikaioctagon",
    "29": "Icosikaienneagon",
    "30": "Triacontagon",
    "31": "Triacontakaihenagon",
    "32": "Triacontakaidigon",
    "33": "Triacontakaitrigon",
    "34": "Triacontakaitetragon",
    "35": "Triacontakaipentagon",
    "36": "Triacontakaihexagon",
    "37": "Triacontakaiheptagon",
    "38": "Triacontakaioctagon",
    "39": "Triacontakaienneagon",
    "40": "Tetracontagon",
    "41": "Tetracontakaihenagon",
    "42": "Tetracontakaidigon",
    "43": "Tetracontakaitrigon",
    "44": "Tetracontakaitetragon",
    "45": "Tetracontakaipentagon",
    "46": "Tetracontakaihexagon",
    "47": "Tetracontakaiheptagon",
    "48": "Tetracontakaioctagon",
    "49": "Tetracontakaienneagon",
    "50": "Pentacontagon",
    "51": "Pentacontakaihenagon",
    "52": "Pentacontakaidigon",
    "53": "Pentacontakaitrigon",
    "54": "Pentacontakaitetragon",
    "55": "Pentacontakaipentagon",
    "56": "Pentacontakaihexagon",
    "57": "Pentacontakaiheptagon",
    "58": "Pentacontakaioctagon",
    "59": "Pentacontakaienneagon",
    "60": "Hexacontagon",
    "61": "Hexacontakaihenagon",
    "62": "Hexacontakaidigon",
    "63": "Hexacontakaitrigon",
    "64": "Hexacontakaitetragon",
    "65": "Hexacontakaipentagon",
    "66": "Hexacontakaihexagon",
    "67": "Hexacontakaiheptagon",
    "68": "Hexacontakaioctagon",
    "69": "Hexacontakaienneagon",
    "70": "Heptacontagon",
    "71": "Heptacontakaihenagon",
    "72": "Heptacontakaidigon",
    "73": "Heptacontakaitrigon",
    "74": "Heptacontakaitetragon",
    "75": "Heptacontakaipentagon",
    "76": "Heptacontakaihexagon",
    "77": "Heptacontakaiheptagon",
    "78": "Heptacontakaioctagon",
    "79": "Heptacontakaienneagon",
    "80": "Octacontagon",
    "81": "Octacontakaihenagon",
    "82": "Octacontakaidigon",
    "83": "Octacontakaitrigon",
    "84": "Octacontakaitetragon",
    "85": "Octacontakaipentagon",
    "86": "Octacontakaihexagon",
    "87": "Octacontakaiheptagon",
    "88": "Octacontakaioctagon",
    "89": "Octacontakaienneagon",
    "90": "Enneacontagon",
    "91": "Enneacontakaihenagon",
    "92": "Enneacontakaidigon",
    "93": "Enneacontakaitrigon",
    "94": "Enneacontakaitetragon",
    "95": "Enneacontakaipentagon",
    "96": "Enneacontakaihexagon",
    "97": "Enneacontakaiheptagon",
    "98": "Enneacontakaioctagon",
    "99": "Enneacontakaienneagon",
    "100": "Hectogon"
}
var polygonName;
var polygonsMin = 1; 
var polygonsMax = Object.keys(polygons).length;
var validation = false;

function validateEntry(sides) {
    if (Math.round(Math.abs(sides)) < 1 || Math.round(Math.abs(sides)) > 100 || isNaN(sides)) {
        return false;
    }
    else {
        return true;
    }
}

function getShape(sides) {
        return polygons[Math.round(Math.abs(sides))];
}

while (validation == false) {
    var input = prompt("The Tall Fish would like you to enter the number of sides for a polygon.")

    validation = validateEntry(input);

    if (validation == true) {
        polygonName = getShape(input);
        polygonResult.innerHTML = "Your polygon is the " + polygonName + "!";
    }
    else {
        alert("Invalid input. Enter a number from 1 to 100")
    }
}
