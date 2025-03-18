function getCarData() {
    fetch('cars.json') 
        .then(data=> data.json()) 
        .then(carData => {

            displayCarData(carData);
        })
        .catch(error => {
            console.error("Error fetching:", error);
        })
}
getCarData();