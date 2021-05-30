const container = document.querySelector("#container");


for(let i = 0 ; i < 256; i++){
    let div = document.createElement('div');
    div.className = 'child'
    container.appendChild(div);
}

divs = document.querySelectorAll('.child');

divs.forEach((div)=>{
    div.addEventListener('mouseover',()=>{
        //coloring by adding a pre-defined Class.
        // div.classList.add('hovering');

        //Coloring by Js.
        div.style.backgroundColor = ("grey");
    })
})