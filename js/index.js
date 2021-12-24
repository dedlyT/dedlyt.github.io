const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

$(() => {
    roulette();
});

$("#daddy").click(() => {
    roulette();
});

function roulette() {
    console.log(`https://prnt.sc/${r()}${r()}${r()}${r()}${r()}${r()}`)
}

function r() {
    return chars[Math.floor(Math.random()*chars.length)];
}
