    var dress = "little dress";
function myDress() {
    var myDress = "ball gown";
    dress = myDress;
    return dress;
}
myDress();
console.log(dress)
module.exports = myDress;