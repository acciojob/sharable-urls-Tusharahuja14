// your code here
let name=document.getElementById("name");
let year=document.getElementById("year");
let display=document.getElementById("display");
let btn=document.getElementById("button");
function show(){
	let nameValue = name.value.trim(); // Get input values and trim extra spaces
    let yearValue = year.value.trim();
if(nameValue===""&&yearValue.length>0)
{
	display.innerText=`https://localhost:8080/?year=${yearValue}`;
}
else if(nameValue.length>0&&yearValue==="")
{
		display.innerText=`https://localhost:8080/?name=${nameValue}`;
}
else if(nameValue.length>0&&yearValue.length>0)
{
			display.innerText=`https://localhost:8080/?name=${nameValue}&year=${yearValue}`;
}
}

btn.addEventListener("click",show);