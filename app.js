const allMemes = document.querySelector('#memes'); // 
const form = document.querySelector('form');

// takes the information from the form and creates a meme out of it
// calls takeInfo to take each input field and turn it into an element to add to the main <div class='meme'>
function makeMeme(image, topInput, bottomInput) {
    const newMeme = takeInfo('div', 'class', 'meme');
    newMeme.append(takeInfo('div', 'class', 'top-text', topInput));
    newMeme.append(takeInfo('div', 'class', 'bottom-text', bottomInput));
    newMeme.append(takeInfo('img', 'src', image));
    return newMeme;
}

// uses information in text fields to create items of specified type
function takeInfo(type, att, attType, input) {
    input = input || "";
    const item = document.createElement(type);
    if (type === 'img') {
        item.setAttribute(att, attType.value);
    } else {
        item.setAttribute(att, attType);
    }
    item.innerText = input.value || "";
    return item;
}

// calls makeMeme when the button is pressed
document.addEventListener('submit', function(event) {
    event.preventDefault();
    const image = document.querySelector('#image-url');
    const topInput = document.querySelector('#top-input');
    const bottomInput = document.querySelector('#bottom-input');
    allMemes.append(makeMeme(image, topInput, bottomInput));
    form.reset();
});

// removes a meme when you click it
allMemes.addEventListener('click', function(event){
    event.preventDefault();
    event.target.parentNode.remove();
});