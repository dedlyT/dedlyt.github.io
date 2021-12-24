const chars = "abcdefghijklmnopqrstuvwxyz0123456789";

$(() => {
    roulette();
});

$("#daddy").click(() => {
    roulette();
});

function roulette() {
    console.log(Math.floor(Math.random() * chars.length));
}