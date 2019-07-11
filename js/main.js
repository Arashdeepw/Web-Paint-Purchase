// Arashdeep Wander 991495450
function save(){
    localStorage.setItem(`name`, document.getElementById('custName').value);
    localStorage.setItem(`email`, document.getElementById('custEmail').value);
    localStorage.setItem(`room`, document.getElementById('room').value);
    localStorage.setItem(`width`, document.getElementById('width').value);
    localStorage.setItem(`length`, document.getElementById('length').value);
    localStorage.setItem(`color`, document.getElementById('color').value);
    localStorage.setItem(`paintType`, document.getElementById('paintType').value);

    window.location.href="Calc.html";
}

function load(){
    let contact = document.getElementById('contact');
    let roomSelected = document.getElementById('roomSelected');
    let sqFt = document.getElementById('sqFt');
    let colorSwatch = document.getElementById('colorSwatch');
    let paintAmount = document.getElementById('paintAmount');
    let total = document.getElementById('total');

    let calc = (localStorage.getItem(`width`) * localStorage.getItem(`length`));

    contact.innerHTML = "Name: "+localStorage.getItem(`name`) +"<br><br>Email: "+localStorage.getItem('email');
    roomSelected.innerHTML="Room: "+localStorage.getItem(`room`);
    sqFt.innerHTML= "Total Square Feet: "+((localStorage.getItem(`width`) * localStorage.getItem(`length`))).toString();
    colorSwatch.style.backgroundColor=localStorage.getItem(`color`);
    paintAmount.innerHTML= "Paint cans needed: "+Math.ceil(calc/400).toString();

    let cans = Math.ceil(calc/400);
    let subTotal=0;

    if(localStorage.getItem(`paintType`)==="Premium"){
        subTotal=((cans*39.99)*1.13).toFixed(2);
        total.innerHTML="Total price: $"+subTotal.toString();
    }
    else {
        subTotal = ((cans*24.99)*1.13).toFixed(2);
        total.innerHTML = "Total price: $"+subTotal.toString();
    }
}