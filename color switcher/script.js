const buttons = document.querySelectorAll('.box');
// console.log(buttons)
const body = document.querySelector('body');

const h1 = document.querySelector('h1');

buttons.forEach(function(button) {
    // console.log(button);
    button.addEventListener('click',function(e){
        // console.log(e);
        // console.log(e.target);//target will provide us the values of the particular event
        if(e.target.id === 'box1'){
            h1.style.color = 'black';
            body.style.backgroundColor = 'yellow';
        }
        if(e.target.id === 'box2'){
            body.style.backgroundColor = 'red';
        }
        if(e.target.id === 'box3'){
            h1.style.color = 'white';
            body.style.backgroundColor = 'black';
        }
        if(e.target.id === 'box4'){
            body.style.backgroundColor = 'cyan';
        }
    })
});