var DOg = /** @class */ (function () {
    function DOg() {
    }
    DOg.prototype.bark = function () {
        console.log("멍멍");
    };
    return DOg;
}());
var dog = new DOg();
dog.bark();
