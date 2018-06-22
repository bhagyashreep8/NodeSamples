var bhagya = {
    printMyName:function () {
        console.log("my name is bhagya");
        console.log(this === bhagya);//true
    }
};
bhagya.printMyName();
//
//the default calling context is global
//
//
// function myName() {
//     console.log("hello i am inside global method");
//     console.log(this === global);
// };
// module.exports.thisConcept = myName();

//good way of exporting is puuting whole fucntion inside the modulle.exports where the export object will
//take the it as key value pair.

module.exports = {

  thisConcept:function(){
      console.log("hello i am inside global method");
      console.log(this === global);
  }

}