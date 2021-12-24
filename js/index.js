const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

$(() => {
    roulette();
});

$("#daddy").click(() => {
    roulette();
});

function roulette() {
    console.log(Math.random(0,chars.length-1));
}