function user() {
    this.name = "";
    this.life = 100;
    this.giveLife = function giveLife(targetPlayer) {
        targetPlayer.life +=1;
        console.log(this.name+"gives life to"+targetPlayer.name);
    };
}

var bucky = new user();
var wendy = new user();

bucky.name = "Bucky";
wendy.name = "Wendy";

bucky.giveLife(wendy);

console.log("life of bucky"+bucky.life);
console.log("life of wendy"+wendy.life+"\n");


//adding function to all object without changing the older method
user.prototype.uppercut = function uppercut(targetPlayer) {
    targetPlayer.life -= 3;
    console.log(this.name+"just uppercutted"+targetPlayer.name+"\n");
};
wendy.uppercut(bucky);

console.log("life of bucky"+bucky.life);
console.log("life of wendy"+wendy.life+"\n");

//adding properties to all object

user.prototype.magic =60;

console.log("magic of bucky"+bucky.magic);
console.log("magic of wendy"+wendy.magic);