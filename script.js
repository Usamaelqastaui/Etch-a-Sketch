const container = document.querySelector("#container");
const btn = document.querySelector("#clear");
let gridSize = 16;

window.addEventListener('load',setGridSize(16));
btn.addEventListener('click',()=>{
    document.querySelectorAll('.child').forEach((div)=>{
        div.style.backgroundColor = ("white");
    });
    //Ensuring the input is within the accepted range.
    do {
        gridSize = parseInt(prompt("How many per side? i.e 1:100"));
    }while (gridSize < 1 || gridSize > 100);

    setGridSize(gridSize);
    drawGrid(100/gridSize);
});

function setGridSize(size){
    const gridArray = Array.from(container.childNodes);
        gridArray.forEach((element) => {
        container.removeChild(element);
    });
    for(let i = 0 ; i < (size*size); i++){
        let div = document.createElement('div');
        div.className = 'child'
        container.appendChild(div);
    }
    colorBackground();
}

function drawGrid(size){
    document.querySelectorAll('.child').forEach((div)=>{
        div.style.width = `${size}%`;
        div.style.height = `${size}%`;
    })
}


function colorBackground(){

    document.querySelectorAll('.child').forEach((div)=>{
        div.addEventListener('mouseover',()=>{
            //coloring by adding a pre-defined Class.
            // div.classList.add('hovering');

            //Coloring by Js.
            div.style.backgroundColor = ("grey");
        });
    });
};


