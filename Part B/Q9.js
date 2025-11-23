//Callback Function Question
function displayCar(){
    console.log("Car is displayed")
}
function displayTruck(){
    console.log("Truck is displayed");
}
function displayBike(){
    console.log("Bike is displayed");
}
function vehicleInfo(vehicleCategory, callbackFn){
    console.log("Category:", vehicleCategory);
    callbackFn();
}
console.log(vehicleInfo("Car", displayCar))
console.log(vehicleInfo("Truck", displayTruck))
console.log(vehicleInfo("Bike", displayBike))
