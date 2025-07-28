function changeBackground(color){
    document.body.style.backgroundColor = color;
}

const btn1 = document.getElementById('btn1');

btn1.addEventListener('click', () => {
    const currentColor = document.body.style.backgroundColor

    if(!currentColor || currentColor == 'white'){
        changeBackground('black');
        btn1.innerText = "Change to light mode";
        document.getElementById('txt').style.color = 'white'
    }else{
        changeBackground('white')
        btn1.innerText = 'Change to dark mode';
        document.getElementById('txt').style.color = 'black'
    }
})