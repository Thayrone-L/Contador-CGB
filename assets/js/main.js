let countEnergy = 0;
let hist1 = null;
let hist2 = null;
let hist3 = null;
let hist4 = null;
let hist5 = null;
let hist6 = null;
let hist7 = null;



const CURRENT_ENERGY = document.getElementById('currentEnergy');
const HIST_1 = document.getElementById('hist1');
const HIST_2 = document.getElementById('hist2');
const HIST_3 = document.getElementById('hist3');
const HIST_4 = document.getElementById('hist4');
const HIST_5 = document.getElementById('hist5');
const HIST_6 = document.getElementById('hist6');
const HIST_7 = document.getElementById('hist7');


function startmatch() {

    CURRENT_ENERGY.innerHTML = (countEnergy = 3) + "/10";


    HIST_7.innerHTML = null;
    HIST_6.innerHTML = null;
    HIST_5.innerHTML = null;
    HIST_4.innerHTML = null;
    HIST_3.innerHTML = null;
    HIST_2.innerHTML = null;
    HIST_1.innerHTML = null;

    hist1 = null;
    hist2 = null;
    hist3 = null;
    hist4 = null;
    hist5 = null;
    hist6 = null;
    hist7 = null;

}

function newturn() {
    if (countEnergy <= 8) {
        CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 2) + "/10";
    } else {
        CURRENT_ENERGY.innerHTML = (countEnergy = 10) + "/10";
    }

    HIST_7.innerHTML = hist7 = hist6;
    HIST_6.innerHTML = hist6 = hist5;
    HIST_5.innerHTML = hist5 = hist4;
    HIST_4.innerHTML = hist4 = hist3;
    HIST_3.innerHTML = hist3 = hist2;
    HIST_2.innerHTML = hist2 = hist1;
    HIST_1.innerHTML = hist1 = " +" + 2;

}




function menoscard(custo) {
    if (countEnergy > 0) {
        if (custo == 1) {

            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 1) + "/10";


        } else if (custo == 2) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 2) + "/10";

        } else if (custo == 3) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 3) + "/10";

        } else if (custo == 4) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy - 4) + "/10";

        }

    }

    if (countEnergy < 0) {

        CURRENT_ENERGY.innerHTML = (countEnergy = 0) + "/10";

    }


    HIST_7.innerHTML = hist7 = hist6;
    HIST_6.innerHTML = hist6 = hist5;
    HIST_5.innerHTML = hist5 = hist4;
    HIST_4.innerHTML = hist4 = hist3;
    HIST_3.innerHTML = hist3 = hist2;
    HIST_2.innerHTML = hist2 = hist1;
    HIST_1.innerHTML = hist1 = " -" + custo;

}

function maiscard(custo) {
    if (countEnergy < 10) {
        if (custo == 1) {

            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 1) + "/10";

        } else if (custo == 2) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 2) + "/10";

        } else if (custo == 3) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 3) + "/10";

        } else if (custo == 4) {
            CURRENT_ENERGY.innerHTML = (countEnergy = countEnergy + 4) + "/10";

        }

    }

    if (countEnergy > 10) {

        CURRENT_ENERGY.innerHTML = (countEnergy = 10) + "/10";

    }

    HIST_7.innerHTML = hist7 = hist6;
    HIST_6.innerHTML = hist6 = hist5;
    HIST_5.innerHTML = hist5 = hist4;
    HIST_4.innerHTML = hist4 = hist3;
    HIST_3.innerHTML = hist3 = hist2;
    HIST_2.innerHTML = hist2 = hist1;
    HIST_1.innerHTML = hist1 = " +" + custo;




}

let energyday = 20;
let vitoria = 0;
let derrota = 0;
let empate = 0;
let vempate = 0;
let vitoriapercent = 0;
let totalbatalhas = 0;
let winrate = 0;
let slp = 0;
const CURRENT_ENERGYDAY = document.getElementById('energyday');
const CURRENT_VITORIA = document.getElementById('vitorias');
const CURRENT_EMPATE = document.getElementById('empates');
const CURRENT_DERROTA = document.getElementById('derrotas');
const CURRENT_WINRATE = document.getElementById('winrate');
const CURRENT_SLP = document.getElementById('slpday');

function maisslp(qtdslp) {
    slp = slp + qtdslp;
    CURRENT_SLP.innerHTML = "Total: " + slp;

}

function checkdiaslp(qtdslp) {
    if (document.getElementById('diaria').checked) {

        slp = slp + qtdslp;
        CURRENT_SLP.innerHTML = "Total: " + slp;

    } else {
        slp = slp - qtdslp;
        CURRENT_SLP.innerHTML = "Total: " + slp;
    }

}

function checkpveslp(qtdslp) {

    if (document.getElementById('pve').checked) {

        slp = slp + qtdslp;
        CURRENT_SLP.innerHTML = "Total: " + slp;

    } else {
        slp = slp - qtdslp;
        CURRENT_SLP.innerHTML = "Total: " + slp;
    }

}

function win() {
    if (energyday > 0) {

        CURRENT_ENERGYDAY.innerHTML = "Energias: " + (energyday = energyday - 1) + "/20";

    }

    totalbatalhas = totalbatalhas + 1;
    vitoria = vitoria + 1;
    winrate = (vitoria * 100) / totalbatalhas;

    CURRENT_WINRATE.innerHTML = "Win rate: " + winrate.toFixed(2) + "%";
    CURRENT_VITORIA.innerHTML = vitoria;

}

function lose() {
    if (energyday > 0) {

        CURRENT_ENERGYDAY.innerHTML = "Energias: " + (energyday = energyday - 1) + "/20";


    }

    derrota = derrota + 1;
    totalbatalhas = totalbatalhas + 1;
    winrate = (vitoria * 100) / totalbatalhas;
    CURRENT_DERROTA.innerHTML = derrota;
    CURRENT_WINRATE.innerHTML = "Win rate: " + winrate.toFixed(2) + "%";

}

function draw() {
    if (energyday > 0) {

        CURRENT_ENERGYDAY.innerHTML = "Energias: " + (energyday = energyday - 1) + "/20";



    }

    empate = empate + 1;
    vempate = empate / 2;
    totalbatalhas = totalbatalhas + 1;
    winrate = ((vitoria + vempate) * 100) / totalbatalhas;
    CURRENT_EMPATE.innerHTML = empate;
    CURRENT_WINRATE.innerHTML = "Win rate: " + winrate.toFixed(2) + "%";
}

function showcontatos() {
    if (document.querySelector('#contatos').classList.contains('show')) {
        document.querySelector('#contatos').classList.remove('show');
    } else {
        document.querySelector('#contatos').classList.add('show')
    }


}


function miniatura() {
    varWindow = window.open('mini.html', 'mini', "width=350, height=500, top=10, right=0, scrollbars=no,resizable=no")
}

document.getElementById('copia').onclick = function() {
    alert("Copiado!");
    navigator.clipboard.writeText('ronin:7191c0262c3a498d49309dbdbc75c7e98d0c43d6');
};



function turnOn() {
    var texto = document.getElementById("texto_neon");


    var cd = 9;
    var countdown = setInterval(function() {
        if (cd == 0) {
            texto.className = "neon on";


            clearInterval(countdown);
        } else {
            texto.className = "neon on color_" + cd;


        }
        cd--;
    }, 2000);
}

function turnOnContato() {
    var disc = document.getElementById('disc');
    var mail = document.getElementById('mail');
    var git = document.getElementById('git');
    var wpp = document.getElementById('wpp');
    var cd = 9;
    var countdown = setInterval(function() {
        if (cd == 0) {
            disc.classList.toggle("on");
            mail.classList.toggle("on");
            git.classList.toggle("on");
            wpp.classList.toggle("on");
            clearInterval(countdown);
        } else {
            if (disc.classList.contains("color_" + cd) || mail.classList.contains("color_" + cd) || git.classList.contains("color_" + cd) || wpp.classList.contains("color_" + cd)) {

                disc.classList.remove("color_" + cd);
                git.classList.remove("color_" + cd);
                mail.classList.remove("color_" + cd);
                wpp.classList.remove("color_" + cd);
            } else {
                disc.classList.toggle("color_" + cd);
                mail.classList.toggle("color_" + cd);
                git.classList.toggle("color_" + cd);
                wpp.classList.toggle("color_" + cd);

            }

        }
        cd--;
    }, 2000);


}





function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}

addLoadEvent(turnOn);
setInterval(turnOn, 20000);

function miniatura() {
    varWindow = window.open('mini.html', 'mini', "width=400px, height=380px, top=10, right=0, scrollbars=no,resizable=no")
}