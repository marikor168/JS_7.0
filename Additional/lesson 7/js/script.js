let rocket = document.querySelector('.rocket'),
    btn = document.querySelector('button'),
    posX = 0,
    posY = 0;

function myAnimation() {
    posX +=2;
    posY -=2;
    rocket.style.top = posY + 'px';
    rocket.style.left = posX + 'px';
    requestAnimationFrame(myAnimation);
}



btn.addEventListener('click', myAnimation);
