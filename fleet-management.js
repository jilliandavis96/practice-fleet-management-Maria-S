

// Vehicle Class Definition
class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  // Method to update mileage when vehicle is driven
  drive(distance) {
    this.mileage = this.mileage + distance;
  }

  // Method to display vehicle details 
  displayInfo() {
    return `${this.year} ${this.make} ${this.model} (${this.type}) - Mileage: ${this.mileage} mi`;
  }
}


// Creating Vehicle Objects


// Car
let car = new Vehicle('Car', 'Toyota', 'Camry', 2022);

// Truck
let truck = new Vehicle('Truck', 'Ford', 'F-150', 2020, 15000);

// Motorcycle
let motorcycle = new Vehicle('Motorcycle', 'Harley-Davidson', 'Street 750', 2021, 5000);


// Testing the Methods


console.log('Initial Vehicle Details:');
console.log(car.displayInfo());
console.log(truck.displayInfo());
console.log(motorcycle.displayInfo());

console.log('After Driving:');
car.drive(150);
truck.drive(300);
motorcycle.drive(75);

console.log(car.displayInfo());
console.log(truck.displayInfo());
console.log(motorcycle.displayInfo());