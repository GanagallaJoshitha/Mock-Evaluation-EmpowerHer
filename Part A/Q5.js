//Nested Object Destructuring
let user = {
  name: "Alice",
  address: {
    city: "Bengaluru",
    pin: 560001,
    geo: { lat: 11.22, lng: 77.33 }
  }
};
let { name, address:{city, lat, lng} } = user;
console.log(city);
console.log(lat);