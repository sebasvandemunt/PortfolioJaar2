// H1 van de pagina veranderd
var image_tracker = 'titel';

function change() {
    var image = document.getElementById('titelafb');
    if (image_tracker=='titel'){
        image.src='Afbeeldingen/H1Afb2.png';
        image_tracker='titelafb';
    } 
    
    else {
        image.src='Afbeeldingen/H1Afb1.png';
        image_tracker='titel';
    }
}

var timer = setInterval ('change();', 200);

//8-bit streamlounge thumbnail veranderd
var streamloungetracker = 'streamlounge1';

function streamloungechange() {
    var image = document.getElementById('streamlounge');
    if (streamloungetracker=='streamlounge1'){
        image.src='Afbeeldingen/StreamLounge1.png';
        streamloungetracker='streamlounge2';
    }

    else {
        image.src='Afbeeldingen/StreamLounge2.png';
        streamloungetracker='streamlounge1';
    }
}

var timer = setInterval('streamloungechange();', 200);

// Zennie thumbnail veranderd
var zennietracker = 'zennie1';

function zenniechange() {
    var image = document.getElementById('zennie');
    if (zennietracker=='zennie1'){
        image.src='Afbeeldingen/Zennie1.png';
        zennietracker='zennie2';
    }

    else {
        image.src='Afbeeldingen/Zennie2.png';
        zennietracker='zennie1';
    }
}

var timer = setInterval('zenniechange();', 200);

// Foto van mij veranderd
var fotovanmijtracker = 'fotovanmij1';

function fotovanmijchange() {
    var image = document.getElementById('fotovanmij');
    if (fotovanmijtracker=='fotovanmij1'){
        image.src='Afbeeldingen/Fotovanmij2.png';
        fotovanmijtracker='fotovanmij2';
    }

    else {
        image.src='Afbeeldingen/Fotovanmij1.png';
        fotovanmijtracker='fotovanmij1';
    }
}

var timer = setInterval('fotovanmijchange();', 200);

// Over mij kopje veranderd
var overmijtracker = 'overmij1';

function overmijchange() {
    var image = document.getElementById('overmijafb');
    if (overmijtracker=='overmij1'){
        image.src="Afbeeldingen/OverMijAfb2.png";
        overmijtracker='overmij2';
    }

    else {
        image.src="Afbeeldingen/OverMijAfb1.png";
        overmijtracker='overmij1';
    }
}

var timer = setInterval('overmijchange();', 200);

// Portfolio kopje veranderd
var portfoliotracker = 'portfolio1';

function portfoliochange() {
    var image = document.getElementById('portfolioh2');
    if (portfoliotracker=='portfolio1'){
        image.src="Afbeeldingen/PortfolioAfb2.png";
        portfoliotracker='portfolio2';
    }

    else {
        image.src="Afbeeldingen/PortfolioAfb1.png";
        portfoliotracker='portfolio1';
    }
}

var timer = setInterval('portfoliochange();', 200);

// Mose Afbeelding veranderd
var mosetracker = 'mose1';

function mosechange() {
    var image = document.getElementById('mose');
    if (mosetracker=='mose1'){
        image.src="Afbeeldingen/Mose2.png";
        mosetracker='mose2';
    }

    else {
        image.src="Afbeeldingen/Mose1.png";
        mosetracker='mose1';
    }
}

var timer = setInterval('mosechange();', 200);

// Bieb Afbeelding veranderd
var biebtracker = 'bieb1';

function biebchange() {
    var image = document.getElementById('bieb');
    if (biebtracker=='bieb1'){
        image.src="Afbeeldingen/Bieb2.png";
        biebtracker='bieb2';
    }

    else {
        image.src="Afbeeldingen/Bieb1.png";
        biebtracker='bieb1';
    }
}

var timer = setInterval('biebchange();', 200);

// Enigma Springs Afbeelding veranderd
var enigmaspringstracker = 'enigmasprings1';

function enigmaspringschange() {
    var image = document.getElementById('enigmasprings');
    if (enigmaspringstracker=='enigmasprings1'){
        image.src="Afbeeldingen/EnigmaSprings2.png";
        enigmaspringstracker='enigmasprings2';
    }

    else {
        image.src="Afbeeldingen/EnigmaSprings1.png";
        enigmaspringstracker='enigmasprings1';
    }
}

var timer = setInterval('enigmaspringschange();', 200);

// Ontwerponderzoek Afbeelding Veranderd
var ontwerponderzoektracker = 'ontwerponderzoek1';

function ontwerponderzoekchange() {
    var image = document.getElementById('ontwerponderzoek');
    if (ontwerponderzoektracker=='ontwerponderzoek1'){
        image.src="Afbeeldingen/OntwerpOnderzoek2.png";
        ontwerponderzoektracker='ontwerponderzoek2';
    }

    else {
        image.src="Afbeeldingen/OntwerpOnderzoek1.png";
        ontwerponderzoektracker='ontwerponderzoek1';
    }
}

var timer = setInterval('ontwerponderzoekchange();', 200);

// Superman wisselt
var supermantracker = 'superman1';

function supermanchange() {
    var image = document.getElementById('superman');
    if (supermantracker=='superman1'){
        image.src="Afbeeldingen/superman2.png";
        supermantracker='superman2';
    }

    else {
        image.src="Afbeeldingen/superman1.png";
        supermantracker='superman1';
    }
}

var timer = setInterval('supermanchange();', 200);
