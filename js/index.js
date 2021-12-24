const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

$(() => {
    roulette();
});

$("#daddy").click(() => {
    roulette();
});

function roulette() {
    var url = `https://prnt.sc/${r()}${r()}${r()}${r()}${r()}${r()}`;
    window.open(url);
}

function r() {
    return chars[Math.floor(Math.random()*chars.length)];
}