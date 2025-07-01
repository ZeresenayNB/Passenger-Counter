let count  = 0 ;
let counterElement = document.getElementById("counter-element");

function increment(){
    count = count + 1; 
    counterElement.innerText = count;
    // console.log(`${count} people Entered the Cafe.`)
}
let savedElement = document.getElementById("save-element");

function save() {
    savedElement.textContent += count + ", ";
    counterElement.textContent = 0;
    count = 0;
}


