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