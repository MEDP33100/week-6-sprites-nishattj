class Car {
    constructor(element, name, price, type, image) {
        this.element = element;
        this.name = name;
        this.price = price;
        this.type = type;
        this.image = image; 
    }

    displayCarCard() {
        this.element.innerHTML = ''; 

        this.element.classList.add('car-card'); 

        const imageElement = document.createElement('img');
        imageElement.src = this.image; 
        imageElement.alt = this.name;  
        imageElement.classList.add('car-image');
        this.element.appendChild(imageElement); 

        const nameElement = document.createElement('h2');
        nameElement.classList.add('car-name');
        nameElement.innerHTML = this.name;
        this.element.appendChild(nameElement);

        const typeElement = document.createElement('p');
        typeElement.classList.add('car-type');
        typeElement.innerHTML = `Type: ${this.type}`;
        this.element.appendChild(typeElement);

        const priceElement = document.createElement('p');
        priceElement.classList.add('car-price');
        priceElement.innerHTML = `Price: $${this.price}`;
        this.element.appendChild(priceElement);
    }
}

function displayCarData(carData) {
    const carContainer = document.querySelector('.car-container'); 

    carData.forEach(car => {
        const carElement = document.createElement('div'); 
        const carCard = new Car(carElement, car.name, car.price, car.type, car.image); 
        carCard.displayCarCard(); 
        carContainer.appendChild(carElement); 
    });
}