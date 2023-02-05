const meme = document.querySelector('.memeHolder'); //section that holds the meme
const topTextSrc = document.querySelector('#topText');
const imageLink = document.querySelector('#imageLink');
const bottomTextSrc = document.querySelector('#bottomText');
// const addMeme = document.querySelector('.addMeme');

// addMeme.addEventListener('click', saveInputs);

const addMeme = document.querySelector('.inputBoxes');
addMeme.addEventListener('submit', saveInputs);

function saveInputs(){
    event.preventDefault();
    const imgsDiv = document.createElement('div');
    const topP = document.createElement('p');
    const img = document.createElement('img');
    const bottomP = document.createElement('p');

    const topText = document.createTextNode(topTextSrc.value);
    const bottomText = document.createTextNode(bottomTextSrc.value);
    
    img.src = imageLink.value;
    imgsDiv.classList = 'imgs';
    imgsDiv.addEventListener('click', function(){
        meme.removeChild(imgsDiv);
    })
    meme.appendChild(imgsDiv);

    topP.classList = 'topText';
    topP.appendChild(topText);
    imgsDiv.appendChild(topP);   
   
    bottomP.classList = 'bottomText';
    bottomP.appendChild(bottomText);
    imgsDiv.appendChild(img);
    imgsDiv.appendChild(bottomP);
}


