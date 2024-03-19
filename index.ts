#! /usr/bin/env node

// This is called "SHEBANKING"


import inquirer from "inquirer";

const calculator = await  inquirer.prompt([
    { message: "Enter the First Number",
type: "number",
name: "num1"},
{
    message: "Enter the Second Number",
    type: "number",
    name : "num2"
},
{
    message:"Select an operation to perform your Task",
    type:"list",
    name: "operator",
    choices :["Add","Subtract","Multiply", "Division","Power"],
}
])

if(calculator.operator== "add"){
    console.log(`Here is Your Result:`, calculator.num1 + calculator.num2)
}
else if(calculator.operator == "Subtract"){
    console.log(`Here is your Result:`, calculator.num1- calculator.num2)
}
else if(calculator.operator == "Multiply"){
    console.log(`Here is your result:`,calculator.num1 * calculator.num2)
}
else if(calculator.operator =="Division"){
    console.log(`Here is your Result:`, calculator.num1/calculator.num2)
}
else if(calculator.operator =="Power"){
    console.log(`Here is your Result:`, calculator.num1 ** calculator.num2)
}
else{
    console.log("Your value is Invalid")
}