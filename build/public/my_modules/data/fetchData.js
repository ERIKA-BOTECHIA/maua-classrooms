let offset = 0;
let limit = 6;

const BASE_URL = `https://api.sampleapis.com/futurama/characters`;

const fetchData = () => {
    return fetch(BASE_URL)
        .then((response) => response.json())
        .catch((error) => {
            console.log(error);
            return []; // Return an empty array on error
        })
        .finally(() => {
            console.log('Request completed');
        });
};

export default fetchData;
