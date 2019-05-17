function modal() {
    let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close');
    
        more.addEventListener('click', () => {
            overlay.style.display = 'block';
            more.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    
        close.addEventListener('click', () => {
            overlay.style.display = 'none';
            more.classList.remove('more-splash');
            document.body.style.overflow = '';
        });
    
        let descriptionBtn = document.querySelectorAll('.description-btn');
    
        descriptionBtn.forEach(function (item) {
    
            item.addEventListener('click', () => {
                overlay.style.display = 'block';
                item.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
    
            close.addEventListener('click', () => {
                overlay.style.display = 'none';
                item.classList.remove('more-splash');
                document.body.style.overflow = '';
            });
        });
}

module.exports = modal;