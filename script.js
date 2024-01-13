let boxes = document.querySelectorAll('.box')
let resetBtn = document.querySelector('.resetBtn')
let msg = document.querySelector('.msg')
let msgContainer = document.querySelector('.msg-container')
let newBtn = document.querySelector('.newBtn')

let turnO = true;

let winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
]

boxes.forEach((box) => {
    box.addEventListener('click' , () => {
        if (turnO) {
            box.innerText = 'O';
            turnO = false
        } else {
            box.innerText = 'X'
            turnO = true
        }
        box.disabled = true;
        checkWinner()
    })
})

let reset = () => {
    turnO = true;
    enableBtn()
    msg.classList.add('hide')
}

let disableBtn = () => {
    for( let box of boxes){
        box.disabled = true
    }
}
let enableBtn = () => {
    for( let box of boxes){
        box.disabled = false
        box.innerText = ''
    }
}


let showWinner = (winner) => {
    msg.innerText = `Congrats You Win ${winner} `
    msg.classList.remove('hide')
    disableBtn()
    
}


const checkWinner = () => {
    for (const pattern of winPattern) {
       let post1val =  boxes[pattern[0]].innerText;
       let post2val =  boxes[pattern[1]].innerText;
       let post3val =  boxes[pattern[2]].innerText;

       if (post1val != '' && post2val != '' && post3val != '') {
        if (post1val == post2val && post2val == post3val) {
            showWinner(post1val)
        }
       }
    }
}

resetBtn.addEventListener('click', reset);
newBtn.addEventListener('click', reset);