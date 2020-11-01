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