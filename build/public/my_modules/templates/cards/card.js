import fetchData from "../data/fetchData.js";

const card = async () => {
    const charactersList = await fetchData();
    return charactersList.map((characters, index) => `
        <li class="col-sm-12 col-md-6 col-lg-4 my-4">
                <article class="p-2 card">
                <div class="card-header bg-light border-none text-center">
                   <h3>${characters.name.first} - #${index + 1}</h3>
                </div>
                <div class="card-container">
                        <img src=${characters.images.main.includes("https://static.wikia.nocookie.net/") ?('assets/images/futurama.png'):(characters.images.main) } alt="personagem imagem" class="character__img rounded"/>
                    </div>
                    </div>
                    <div class="card-footer border-none text-center">
                <p>Character Ocuppation: <br/><strong>${characters.occupation|| "null"}</strong></p>
                </div>
                    </article>
                </li>
    `).join(''); // Join the array into a single string
};

export default card;
