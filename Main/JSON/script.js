const getResource = async (url) => {
    const res = await fetch(url);
    return res.json();
}

getResource('cars.json')
    .then(res => createElement(res.cars))

function createElement(arr) {
    const carsWrapper = document.querySelector('.cars__wrapper');
    arr.forEach(function(item) {
        let car= document.createElement('div');
        car.classList.add('car__item');
        car.innerHTML = `
            <img class="car__img" src="${item.img}" alt="car">
            <div class="car__name">${item.name}</div>
            <div class="car__country">Country: ${item.category}</div>
            <div class="car__descr">${item.description}</div>
            <div class="car__price">${item.price}</div>
            <button>Show</button>
        `;
        carsWrapper.appendChild(car);
    });
}