const h1 = document.querySelector('body h1');

// TASK: add new button
// create new button element
const btnNew = document.createElement('button');
// create new button value that will added into button later
const btnNewText = document.createTextNode('Backgrond Color Generator');
// combine new button element and value
btnNew.appendChild(btnNewText);
// define id into new button
btnNew.setAttribute('id', 'btnUbahWarna');
// define type into new button
btnNew.setAttribute('type', 'button');
// define location for new button to settle down below h1
h1.after(btnNew);

// get button selector by it's element id
const btnUbahWarna = document.getElementById('btnUbahWarna');

// function to update h1 title
function updateH1Text(red, green, blue) {
    h1.innerHTML = `Playing with Color (Red: ${red}, Green: ${green}, Blue: ${blue})`;
}

// function to update body background color
function updateBodyColor(red, green, blue) {
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

// create Event Listener with random change text color function when user click the button
btnUbahWarna.addEventListener('click', function() {
    // random with array color
    // const warna = ['pink', 'lightyellow', 'lightgreen', 'lightblue', 'white'];
    // document.body.style.backgroundColor = warna[Math.floor(Math.random() * warna.length)];

    // random by rgb
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);
    updateH1Text(r, g, b);
    updateBodyColor(r, g, b);
})


// TASK: add input with type slider (HTML5)
// define div with id colorSlider
const colorSliderDiv = document.createElement('div');
colorSliderDiv.setAttribute('id', 'colorSlider');
colorSliderDiv.setAttribute('style', 'padding: 20px;');
// define location of break after new button
btnUbahWarna.after(colorSliderDiv);

// create new input slider for Red
const divSquareRed = document.createElement('div');
divSquareRed.setAttribute('class', 'square red');
colorSliderDiv.appendChild(divSquareRed);
const inputSliderRed = document.createElement('input');
// add attribute type range
inputSliderRed.setAttribute('type', 'range');
inputSliderRed.setAttribute('name', 'inputSliderRed');
inputSliderRed.setAttribute('min', '0');
inputSliderRed.setAttribute('max', '255');
inputSliderRed.setAttribute('value', '255');
// define location for new input slider after break
colorSliderDiv.appendChild(inputSliderRed);

// create new input slider for Green
const divSquareGreen = document.createElement('div');
divSquareGreen.setAttribute('class', 'square green');
colorSliderDiv.appendChild(divSquareGreen);
const inputSliderGreen = document.createElement('input');
// add attribute type range
inputSliderGreen.setAttribute('type', 'range');
inputSliderGreen.setAttribute('name', 'inputSliderGreen');
inputSliderGreen.setAttribute('min', '0');
inputSliderGreen.setAttribute('max', '255');
inputSliderGreen.setAttribute('value', '255');
// define location for new input slider after break
colorSliderDiv.appendChild(inputSliderGreen);

// create new input slider for Blue
const divSquareBlue = document.createElement('div');
divSquareBlue.setAttribute('class', 'square blue');
colorSliderDiv.appendChild(divSquareBlue);
const inputSliderBlue = document.createElement('input');
// add attribute type range
inputSliderBlue.setAttribute('type', 'range');
inputSliderBlue.setAttribute('name', 'inputSliderBlue');
inputSliderBlue.setAttribute('min', '0');
inputSliderBlue.setAttribute('max', '255');
inputSliderBlue.setAttribute('value', '255');
// define location for new input slider after break
colorSliderDiv.appendChild(inputSliderBlue);

// create function for each input slider
inputSliderRed.addEventListener('input', function() {
    const r = inputSliderRed.value;
    const g = inputSliderGreen.value;
    const b = inputSliderBlue.value;
    updateH1Text(r, g, b);
    updateBodyColor(r, g, b);
})
inputSliderGreen.addEventListener('input', function() {
    const r = inputSliderRed.value;
    const g = inputSliderGreen.value;
    const b = inputSliderBlue.value;
    updateH1Text(r, g, b);
    updateBodyColor(r, g, b);
})
inputSliderBlue.addEventListener('input', function() {
    const r = inputSliderRed.value;
    const g = inputSliderGreen.value;
    const b = inputSliderBlue.value;
    updateH1Text(r, g, b);
    updateBodyColor(r, g, b);
})


// TASK: color changes by mouse
const divColorArea = document.createElement('div');
divColorArea.setAttribute('style', 'width:200px;height:200px;margin:auto;border:1px solid black;');
document.body.appendChild(divColorArea);

divColorArea.addEventListener('mousedown', function(event) {
    // mouse position
    // console.log(event.clientX);
    // browser window size
    // console.log(window.innerWidth);
    // const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    // const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    const xPos = Math.round(((event.clientX - this.offsetLeft) / this.offsetWidth) * 255);
    const yPos = Math.round(((event.clientY - this.offsetTop + 29) / this.offsetHeight) * 255);
    const b = 100;
    updateH1Text(xPos, yPos, b);
    updateBodyColor(xPos, yPos, b);
    console.log(`Offset L: ${this.offsetLeft}, T: ${this.offsetTop}`)
    console.log(`Offset W: ${this.offsetWidth}, H: ${this.offsetHeight}`)
    console.log(`Mouse X: ${event.clientX}, Y: ${event.clientY}`);
})
