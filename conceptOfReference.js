// example of reference to object

var myDetails = [{
    name: "bhagya",
    favrtFood:"maggie"
}]
var newMyDetails = myDetails;
myDetails.favrtFood = "biriyani";
console.log(myDetails.favrtFood);


// difference for ==(values) and ===(values+types)

console.log(1 == '1');

console.log(1 ==='1');