const pictures = [
    'https://images5.alphacoders.com/587/thumb-1920-587597.jpg',
    'https://images7.alphacoders.com/611/thumb-1920-611138.png',
    'https://images8.alphacoders.com/533/thumb-1920-533007.png',
    'https://images4.alphacoders.com/678/thumb-1920-678317.jpg',
    'https://images.alphacoders.com/736/thumb-1920-736461.png',
    'https://images5.alphacoders.com/314/thumb-1920-314574.png'
]
const previous = document.querySelector('.previous-image');
const next = document.querySelector('.next-image');
const dots = document.querySelectorAll('.nav-circles');
let value = 0

previous.addEventListener('click', changeToPrevious);
next.addEventListener('click', changeToNext);
dots.forEach(x => x.addEventListener('click', selectDotIndex))

function changeToPrevious() { 
    if (value == 0) {
        value = 5
        document.querySelector('.images').src = pictures[5];
    } else {
        value--
        document.querySelector('.images').src = pictures[value]
    }
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].style.background == '' && dots[i].value == value) {
            dots[i].style.background = 'green'
        } else dots[i].style.background = ''
    }
}

function changeToNext(event) {

    if (value == 5) {
        document.querySelector('.images').src = pictures[0]
        value = 0;
    }
    else {
        value++
        document.querySelector('.images').src = pictures[value]
    }
    if (event) {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i].style.background == '' && dots[i].value == value) {
                dots[i].style.background = 'green'
            } else dots[i].style.background = ''
        }
    } else return
}

function selectDotIndex(event) {
    document.querySelector('.images').src = pictures[event.target.value]
    
    if (event.target.value) {
        event.target.style.background = 'green'
        value = event.target.value
    }
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].style.background == 'green' && event.target.value !== dots[i].value) {
            dots[i].style.background = ''
        }
    }
}

setInterval(() => {
    changeToNext();
    for (let i = 0; i < dots.length; i++) {
        if (dots[i].style.background == '' && value !== dots[i].value && i == value) {
            dots[i].style.background = 'green'
        } else dots[i].style.background = ''
    }
}, 5000)