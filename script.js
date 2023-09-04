let country_Name = prompt("What is your country name ?");
let user_input_Cnumber = prompt("Please enter your number")
if(country_Name === "pakistan" && user_input_Cnumber.length === 11){
    alert("+92-" + `${user_input_Cnumber.slice(1,4)}` + "-" +`${user_input_Cnumber.slice(4,11)}` )
    console.log("hello")
}else if(country_Name === "dubai" && user_input_Cnumber.length === 8){
   alert("+971-" + `${user_input_Cnumber.slice(0,1)}` + "-" +`${user_input_Cnumber.slice(1,4)}` + "-" +`${user_input_Cnumber.slice(4,9)}` )
   console.log("hello")
}else{
   alert("Please enter valid country")
}