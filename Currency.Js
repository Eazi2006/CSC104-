function convertToNaira(){
    return (dollar * 1350);
}
//Get input from the user
let dollar= parseFloat(prompt("Enter the amount in US Dollars:"));
// Validate input
if (isNaN(dollar)) {
    alert("Please enter a valid numerical value")
} else{
    //convert to Naira
    let naira=convertToNaira();
    //Display the result
    alert(dollar+"USSD is equal to"+ naira.toFixed(2) + "NGN");
}