var a = 10;
var str = "Hello"; // string
var str1 = ""; // Any 
console.log(a);
console.log(str);
var Employee = /** @class */ (function () {
    function Employee(fname, lname) {
        this.fname = fname;
        this.fname = fname;
        this.lname = lname;
    }
    Employee.prototype.getFName = function () {
        console.log(this.fname);
    };
    return Employee;
}());
var emp = new Employee("Radha", "Jain");
emp.getFName();
emp.getFName();
