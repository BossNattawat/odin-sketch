
const container = document.querySelector(".container");

for(let i = 0; i < 256; i++){
    const div = document.createElement("div")
    div.className = "grids"
    container.appendChild(div)
}

let isHolding = false

document.addEventListener("mousedown", () => {
    isHolding = true
})

document.addEventListener("mouseup", () => {
    isHolding = false
})

const gridCells = document.querySelectorAll(".grids");
    gridCells.forEach((cell) => {
        let passes = 0;
        cell.addEventListener("mousemove", function () {
            if(isHolding){
                if(passes < 10){
                    let r = Math.floor(Math.random() * 256)
                    let g = Math.floor(Math.random() * 256)
                    let b = Math.floor(Math.random() * 256)
                    passes++
                    cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${passes * 0.1})`
                }
            }
        })
        
    })

const modeBlack = document.querySelector(".modeBlack")
modeBlack.style.display = "none"

let mode = true

function changeMode(){

    mode = !mode
    
    const gridCells = document.querySelectorAll(".grids")
    const modeBlack = document.querySelector(".modeBlack")
    const modeRainbow = document.querySelector(".modeRainbow")

    if(mode){

        modeBlack.style.display = "none"
        modeRainbow.style.display = "inline"

        gridCells.forEach((cell) => {
            let passes = 0;
            cell.addEventListener("mousemove", function () {
                if(isHolding){
                    if(passes < 10){
                        let r = Math.floor(Math.random() * 256)
                        let g = Math.floor(Math.random() * 256)
                        let b = Math.floor(Math.random() * 256)
                        passes++
                        cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${passes * 0.1})`
                    }
                }
            })
            
        })
    }
    else{

        modeRainbow.style.display = "none"
        modeBlack.style.display = "inline"

        gridCells.forEach((cell) => {
            cell.addEventListener("mousemove", function () {
                if(isHolding){
                    cell.style.backgroundColor = `black`
                }
            })
        })
    }

}

function clearGrid(){
    const gridCells = document.querySelectorAll(".grids");
    gridCells.forEach((cell) => {
        cell.style.backgroundColor = "white"
    })
}

function changeGridSize(){

    let size = parseInt(prompt("Change Grid Size (10 - 100) : "))

    if(size < 10 || size > 100){
        alert("Invalid Input")
        return
    }
    else if(size === null || size === ""){
        alert("Please enter a number!")
        return
    }
    else if(isNaN(size)){
        alert("Please enter a valid number!")
        return
    }

    container.innerHTML = ""
    const cellSize = 640/size + "px"
    container.style.gridTemplateColumns = `repeat(${size}, ${cellSize})`
    container.style.gridTemplateRows = `repeat(${size}, ${cellSize})`
    container.style.border = "5px solid black"
    for(let i = 0; i < size * size; i++){
        const div = document.createElement("div")
        div.className = "grids"
        div.style.width = cellSize
        div.style.height = cellSize
        container.appendChild(div)
    }
    const gridCells = document.querySelectorAll(".grids");
    gridCells.forEach((cell) => {
        let passes = 0;
        cell.addEventListener("mousemove", function () {
            if(isHolding){
                if(passes < 10){
                    let r = Math.floor(Math.random() * 256)
                    let g = Math.floor(Math.random() * 256)
                    let b = Math.floor(Math.random() * 256)
                    passes++
                    cell.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${passes * 0.1})`
                }
            }
        })
        
    })

}