//4. Use JSON.stringify() to convert the object adminDetails into a JSON string.
let adminDetails = {
    name: "Adam",
    age: 32,
    isAdmin: true,
    };
    let adminDetailsJSON = JSON.stringify(adminDetails);
    console.log(adminDetailsJSON);