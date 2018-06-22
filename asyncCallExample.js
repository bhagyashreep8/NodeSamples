//example of async call

function placeAnOrder(orderNumber) {
    console.log("order number"+":"+orderNumber);

    cookandDeliver(function () {
        console.log("Delivered order numer:",orderNumber);
    })
}
//simulate a 4 second operation
function cookandDeliver(callback) {
    setTimeout(callback,4000);
}
//simulate users web request
placeAnOrder(1);
placeAnOrder(2);
placeAnOrder(3);
placeAnOrder(4);
placeAnOrder(5);