import card from '../templates/card.js';

const htmlList = document.getElementById('htmlList');

const render = async () => {
    document.addEventListener('DOMContentLoaded', async () => {
        const pokemonHtml = await card();
        htmlList.innerHTML += pokemonHtml;
    });
};

export default render;