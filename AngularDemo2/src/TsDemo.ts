let a:number =10;
let str = "Hello";   // string
let str1="";   // Any 

console.log(a);
console.log(str);

class Employee{
    // private fname :string;
     protected lname : string;

    constructor(private fname:string,lname:string){
       this.fname=fname;
       this.lname= lname; 
    }

        getFName():string{
            console.log(this.fname);
           return this.fname; 
        }
}

let emp = new Employee("Radha","Jain")
emp.getFName();
emp.getFName();