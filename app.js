
const search = document.querySelector("#search");
const imageArea = document.getElementById('gif_image');
const removeButton = document.getElementById('remove');

function addGif(res) {
    let numberOfData = res.data.length;
    if (numberOfData) {
        let randomIdx = Math.floor(Math.random() * numberOfData);
        let newDiv = document.createElement('div');
        newDiv.classList.add('col');
        newDiv.classList.add('mt-5', 'col-md-4', 'col-12');
        let createImage = document.createElement('img');
        createImage.src = res.data[randomIdx].images.original.url;
        createImage.classList.add('img-thumbnail', 'width:100%');
        newDiv.appendChild(createImage);
        imageArea.appendChild(newDiv);
        search.value = '';
    }
}
$('form').on('submit', async function (evt) {
    evt.preventDefault();
    let searchInput = search.value;
    console.log(searchInput);
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=dc6zaTOxFJmzC`);
    console.log(response.data);
    addGif(response.data);

})

removeButton.addEventListener('click', function (e) {
    while (imageArea.firstChild) {
        imageArea.removeChild(imageArea.firstChild);
    }
});