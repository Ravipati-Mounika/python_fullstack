console.log("Hello World!")
let student_name="MOUNIKA"
console.log("Student name is:"+student_name)
let student_age=21
let course_name="Python Full stack"
console.log("student age is:"+student_age,"\nCourse name is: "+course_name)
let fee=10000
let discount =10
let discounted_fee=fee-(fee*discount/100)
console.log("Discounted fe is:"+discounted_fee)
let age=18
if(age>=18){
    console.log("Eligible for admission")
} 
else{
    console.log("Not eligible for admission")
}
for (let i=1;i<=5;i++)
{
    console.log("Iteration nuber:"+i)
}
const pi=3.14
console.log("Value of pi is"+pi)

let student={
    name:"Mounika",
    age:21,
    course:"python fullstack",
    fee:10000
}
console.log("Student details:",student)
function greetStudent(name){
    console.log("Hello"+name+",Welcome to NRIIT Learning Management System")
}
console.log(student)
//funcion 
function square(num){
    return num*num;
}
let x=square(5);
console.log("Square of 5:",x)
function oddeven(num){
    if (num%2===0){
        console.log("Even");
    }
    else{
        console.log("Odd");
    }
}
y=oddeven(4);
function oe(num){
    if(num%2===0){
        return "Even";
    }
    else{
        return "ood";
    }
}
console.log("chen if 7 is odd or even:",oe(7));

