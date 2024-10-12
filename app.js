// 1
var city = prompt("In which city you live? \n Hint: Karachi");
if(city==="Karachi"){
    alert("Welcome to the city of lights")
}
else {
    alert("Invalid")
}


// 2
var gender = prompt("What is your gender? \n Hint: Male or Female");
if(gender==="Male"){
    alert("Good morning sir");
}
else if(gender==="Female"){
    alert("Good morning Ma'am");
}
else {
    alert("Invalid");
};

// 3
var color = prompt("Insert any color of traffic signal \n Hint: Red or Yellow or Green");
if(color==="Red"){
    document.write("Must stop");
}
else if(color==="Yellow"){
    document.write("Ready to move");
}
else if(color==="Green"){
    document.write("Move now");
}
else {
    alert("Invalid");
};

var fuel = prompt("Remaining fuel in your car \n Hint: Answer in litres");
if(fuel >= 0.5 || "0.5 Litres"){
    alert("Please refill the fuel in your car");
}
else{
    alert("Good you are good to go");
}

4

var a = 4;
if (++a===5){
    alert("Given condition for variable a is true "); true
}

var b = 82;
if (b++===83){
    alert("Given condition for variable b is true "); // false
}

var c = 12;
if (c++===13){
    alert("Condition 1 is true "); // false
}

if (c===13){
    alert("Condition 2 is true "); // true
}

if (++c<14){
    alert("Condition 3 is true "); // false
}

if (c===14){
    alert("Condition 4 is true "); // false
}


var materialCost = 20000;
var laborCost = 2000;
var total = materialCost+laborCost;

if(total = materialCost+laborCost){
    alert("The cost equals ");
}


if(true){
    alert("True ");
}
if(false){
    alert("False");
}

if("car" < "cat"){
    alert("car is smaller than cat ");
}


var sub1 = parseInt(prompt("Enter your obtained marks in maths"));
var sub2 = parseInt(prompt("Enter your obtained marks in english"));
var sub3 = parseInt(prompt("Enter your obtained marks in urdu"));
var totalMarks = 300;
var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks/totalMarks )*100;

document.write(`<h2>COMMENTS BY SUBJECT</h2>`);
if (sub1  >=80){
    alert("Grade = A-one in maths");
    document.write(" Maths = Excellent in maths");
}
else if (sub1 >=70){
    alert("Grade = A in maths");
    document.write(" Maths = Good in maths");
}
else if (sub1 >=60){
    alert("Grade = B in maths");
    document.write(" Maths = Need to improve in maths");
}
else if (sub1 <=60){
    alert("Grade = Fail in maths");
    document.write(" Maths = Sorry you are fail in maths");
}
// new
document.write(`<br>`);
if (sub2 >=80){
    alert("Grade = A-one in english");
    document.write(" English = Excellent in english");
}
else if (sub2 >=70){
    alert("Grade = A in maths");
    document.write(" English = Good in english");
}
else if (sub2 >=60){
    alert("Grade = B in maths");
    document.write(" English = Need to improve in english");
}
else if (sub2 <=60){
    alert("Grade = Fail in maths");
    document.write(" English = Sorry you are fail in english");
}
// new
document.write(`<br>`);
if (sub3 >=80){
    alert("Grade = A-one in urdu");
    document.write(" Urdu = Excellent in urdu");
}
else if (sub3 >=70){
    alert("Grade = A in maths");
    document.write(" Urdu = Good in urdu");
}
else if (sub3 >=60){
    alert("Grade = B in maths");
    document.write(" Urdu = Need to improve in urdu");
}
else if (sub3 <=60){
    alert("Grade = Fail in maths");
    document.write(" Urdu = Sorry you are fail in urdu");
}




document.write(`<br>`);
document.write(`<h2>Mark Sheet</h2>`);
document.write(`<h4>Total Marks: ${totalMarks} </h4>`);
document.write(`<h4 style="display:inline-block" >Marks Obtained: ${obtainedMarks}</h4>`);
document.write(`<br>`);
document.write(`<h4 style="display:inline-block" >Percentage: ${percentage}%</h4>`);


document.write(`<br>`);
if (percentage >=80){
    document.write("Grade = A-one ");
    document.write(`<br>`);
    document.write(" Comment = Excellent ");
}
else if (percentage >=70){
    document.write("Grade = A ");
    document.write(`<br>`);
    document.write(" Comment = Good");
}
else if (percentage >=60){
    document.write("Grade = B ");
    document.write(`<br>`);
    document.write(" Comment = Need to improve ");
}
else if (percentage <=60){
    document.write("Grade = F ");
    document.write(`<br>`);
    document.write(" Comment = Sorry you are fail ");
}


var secretNumber = 7;

// Prompt the user to guess the number
var userGuess = parseInt(prompt("Guess the secret number between 1 and 10:"));


if (userGuess === secretNumber) {
    alert("Bingo! You are right!");
} else {
    if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
        alert("You're too close!");
    } else {
        alert("Try again!");
    }
}


var check3 = parseInt(prompt("Select any number"));
if(check3 % 3 === 0 ){
    alert("It is divisible by 3");
}
else{
    alert("It is not divisible by 3");
}


var check2 = parseInt(prompt("Enter a number. \n Even or Odd :"));
if (check2 % 2 === 0) {
    alert("The number is even.");
} else {
    alert("The number is odd.");
}



var temp = prompt("Temperature please around you....")
if (temp >=40){
        alert("It is too hot outside");
    }
    else if(temp >=30){
        alert("The weather today is normal");
    }
    else if (temp >=20){
        alert("Today weather is cool");
    }
    else if (temp >=10){
        alert("OMG! Today weather is too cool");
    }
    else{
        alert("Invalid data");
    }


    var askNum = parseFloat(prompt("Enter your first number"));
    var askNum1 = prompt("Enter your sign \n Hint: +, -, %, *");
    var askNum2 = parseFloat(prompt("Enter your second number"));
    var result = ""

    if(askNum1==="+"){
        result = askNum + askNum2
    }
    else if(askNum1==="-"){
        result = askNum - askNum2
    }
    else if(askNum1==="%"){
        result = askNum % askNum2
    }
    else if(askNum1==="*"){
        result = askNum * askNum2
    }
    else {
        alert("Invalid action. Please enter +, -, *, or %.");
    }

    alert(result)
