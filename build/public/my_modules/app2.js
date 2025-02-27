const titleHTML = document.getElementById('itemTitle');
const idHTML = document.getElementById('spanId');
const box1HTML = document.getElementById('box50-1');
const box2HTML = document.getElementById('box50-2');
const globalLocation = window.location.href;
const itemId = globalLocation.split('/').pop();

console.log(itemId)