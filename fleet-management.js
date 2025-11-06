// Vehicle Class Definition
class Vehicle {
  constructor(type, make, model, year, mileage = 0) {
    this.type = type;
    this.make = make;
    this.model = model;
    this.year = year;
    this.mileage = mileage;
  }

  // Method to update mileage when vehicle is used
  updateMileage(distance) {
    this.mileage = this.mileage + distance;
  }

  // Method to display vehicle details 
  displayInfo() {
    return `${this.year} ${this.make} ${this.model} (${this.type}) - Mileage: ${this.mileage} mi`;
  }
}


// Creating Vehicle Objects


// Sedan
let sedan = new Vehicle('Sedan', 'Honda', 'Accord', 2023);

// Van
let van = new Vehicle('Van', 'Chevrolet', 'Express', 2019, 12000);

// SUV
let suv = new Vehicle('SUV', 'Jeep', 'Wrangler', 2021, 8500);


// Testing the Methods


console.log('Initial Vehicle Details:');
console.log(sedan.displayInfo());
console.log(van.displayInfo());
console.log(suv.displayInfo());

console.log('After Driving:');
sedan.updateMileage(200);
van.updateMileage(450);
suv.updateMileage(125);

console.log(sedan.displayInfo());
console.log(van.displayInfo());
console.log(suv.displayInfo());