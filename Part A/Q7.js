//Optional Chaining 
let emp = {
  name: "Prakash",
  details: {
    department: "IT",
    profile: { role: "Developer" }
  }
};
let empDetails = emp?.details?.profile?.role;
console.log(empDetails);