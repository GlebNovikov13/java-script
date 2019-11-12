var wallArray = [[150,110],[150,160],[150,210],[150,260],[150,310],[150,360], [200,360]]



initWallLine()
document.addEventListener('keydown', function(event) {
    if (event.code == 'KeyD') {
        moveRight()
    }
    if (event.code == 'KeyA') {
        moveLeft()
    }
    if (event.code == 'KeyW') {
        moveUp()
    }
    if (event.code == 'KeyS') {
        moveDown()
    }
  });

function moveRight() {
    //const leftPosition = document.getElementById('unit').style
    let unit = document.getElementById('unit')
    unit.classList.add('mirror-image')
    const leftPosition = window.getComputedStyle(unit).left
    console.log('leftPosition: ', leftPosition, parseInt(leftPosition))
    if (parseInt(leftPosition) > 450) {
        
    }else if (isIntersectionRight(unit) === true) {

    } else{
        let newPosition = (parseInt(leftPosition) + 10)
        unit.style.left =  newPosition + "px"
    }
}

function isIntersectionLeft(unit) {
    const left = parseInt(window.getComputedStyle(unit).left.replace('px',''))-10
    const top = parseInt(window.getComputedStyle(unit).top.replace('px',''))
    for (let i = 0; i < wallArray.length; i++) {
        let divLeft = Math.abs(parseInt(wallArray[i][0]) - left)
        let divTop = Math.abs(parseInt(wallArray[i][1]) - top)
        if (divLeft < 50 && divTop < 50) {
            return true
        }
    }
    return false
}

function isIntersectionRight(unit) {
    const left = parseInt(window.getComputedStyle(unit).left.replace('px','')) + 10
    const top = parseInt(window.getComputedStyle(unit).top.replace('px',''))
    for (let i = 0; i < wallArray.length; i++) {
        let divLeft = Math.abs(parseInt(wallArray[i][0]) - left)
        let divTop = Math.abs(parseInt(wallArray[i][1]) - top)
        if (divLeft < 50 && divTop < 50) {
            return true
        }
    }
    return false
}

function isIntersectionUp(unit) {
    const left = parseInt(window.getComputedStyle(unit).left.replace('px',''))
    const top = parseInt(window.getComputedStyle(unit).top.replace('px','')) - 10
    for (let i = 0; i < wallArray.length; i++) {
        let divLeft = Math.abs(parseInt(wallArray[i][0]) - left)
        let divTop = Math.abs(parseInt(wallArray[i][1]) - top)
        if (divLeft < 50 && divTop < 50) {
            return true
        }
    }
    return false
}

function isIntersectionDown(unit) {
    const left = parseInt(window.getComputedStyle(unit).left.replace('px',''))
    const top = parseInt(window.getComputedStyle(unit).top.replace('px','')) + 10
    for (let i = 0; i < wallArray.length; i++) {
        let divLeft = Math.abs(parseInt(wallArray[i][0]) - left)
        let divTop = Math.abs(parseInt(wallArray[i][1]) - top)
        if (divLeft < 50 && divTop < 50) {
            return true
        }
    }
    return false
}



function moveLeft() {
    //const leftPosition = document.getElementById('unit').style
    let unit = document.getElementById('unit')
    unit.classList.remove('mirror-image')
    const leftPosition = window.getComputedStyle(unit).left
    console.log('leftPosition: ', leftPosition, parseInt(leftPosition))
    if (parseInt(leftPosition) < 10) {
        
    }else if (isIntersectionLeft(unit) === true) {

    } else {
        let leftPosition_2 = (parseInt(leftPosition) - 10)
        unit.style.left =  leftPosition_2 + "px"
    }
}

function moveUp() {
    //const leftPosition = document.getElementById('unit').style
    let unit = document.getElementById('unit')
    const topPosition = window.getComputedStyle(unit).top
    console.log('topPosition: ', topPosition, parseInt(topPosition))
    if (parseInt(topPosition) < 10) {
        
    }else if (isIntersectionUp(unit) === true) {

    } else{
        let topPosition_3 = (parseInt(topPosition) - 10)
        unit.style.top =  topPosition_3 + "px"
    }
}

function moveDown() {
    //const leftPosition = document.getElementById('unit').style
    let unit = document.getElementById('unit')
    const topPosition = window.getComputedStyle(unit).top
    console.log('leftPosition: ', topPosition, parseInt(topPosition))
    if (parseInt(topPosition) > 450) {
        
    }else if (isIntersectionDown(unit) === true) {

    } else {
        let topPosition_2 = (parseInt(topPosition) + 10)
        unit.style.top =  topPosition_2 + "px"
    }
}

function removeMirror() {
    let unit = document.getElementById('unit')
    unit.classList.remove('mirror-image')
}

function toStartPosition() {
    let unit = document.getElementById('unit')
    console.log(unit)
    unit.style.top = '200px'
    unit.style.left = '200px'
}

var index = 0

function changeUnit() {
    const imageArray = ['./img/cat.png', './img/catl.svg', './img/images.png', './img/Novosel_mushroom.png']
    let image = document.getElementById('image')
    image.src = imageArray[index] 
    index = (index+1)%imageArray.length
}

function notification() {
    console.log('Вы выбрали игрока №'+index)
    const notification = document.getElementById('notification')
    notification.innerHTML = 'Вы выбрали игрока №'+index
    notification.hidden = false 
}

function hideNotification() {
    const notification = document.getElementById('notification')
    notification.hidden = true
}

function addWall(leftPosition, topPosition) {
    let gameField = document.getElementById("gameField")
    let node = document.createElement("div")
    node.classList.add("wall")
    node.style.top = topPosition + "px"
    node.style.left = leftPosition + "px"
    gameField.appendChild(node)
}

function initWallLine() {
    for (let i = 0; i < wallArray.length; i++) {
        addWall(wallArray[i][0], wallArray[i][1])
    }
}

