const imgArr = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg'
]

btn.addEventListener('click' , () => {
    randomImage();
})

let index;

function randomImage() {
    let randomIndex = Math.floor(Math.random() * imgArr.length);

    selectedImage = imgArr[randomIndex];

    document.querySelector('#randomize-image').src = 'img/' + selectedImage;
}