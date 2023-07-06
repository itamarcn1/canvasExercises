// canvas 1
const canvas1El = document.getElementById("Canvas1");
const ctx1 = canvas1El.getContext("2d");
const ctx2 = canvas1El.getContext("2d");
const ctx3 = canvas1El.getContext("2d");





ctx1.beginPath();

ctx1.moveTo(10,10);
ctx1.lineTo(90,10);
ctx1.lineTo(90,90);
ctx1.lineTo(10,90);
ctx1.lineTo(10,10);
ctx1.fillRect(10, 10, 80, 80);
ctx2.stroke();
ctx2.fillStyle = "white";
ctx2.fillRect(23, 23, 55, 55);
ctx2.stroke();
ctx3.moveTo(25,25);
ctx3.lineTo(75,25);
ctx3.lineTo(75,75);
ctx3.lineTo(25,75);
ctx3.lineTo(25,25);
ctx3.stroke();

// canvas 2
const canvas2El = document.getElementById("Canvas2");
const ctx4 = canvas2El.getContext("2d");
ctx4.beginPath();
ctx4.arc(95, 50, 40, 0, 2 * Math.PI);
ctx4.strokeStyle = "red"
ctx4.stroke();


// canvas 3
const canvas3El = document.getElementById("Canvas3");
const ctx5 = canvas3El.getContext("2d");
const ctx6 = canvas3El.getContext("2d");

ctx5.rect(5, 5, 50, 50);
ctx5.fillStyle = "red";
ctx5.fill();
ctx5.stroke();
ctx6.fillStyle = "blue";
ctx6.fillRect(25, 25, 50, 50);
ctx6.stroke();


// canvas 4
const canvas4El = document.getElementById("Canvas4");
const ctx7 = canvas4El.getContext("2d");

ctx7.fillStyle = "black";
    ctx7.beginPath();
    ctx7.moveTo(10, 50); 
    ctx7.lineTo(90, 90);
    ctx7.lineTo(10, 90); 
    ctx7.lineTo(10, 50);
    ctx7.closePath(); 
    ctx7.fill();
    ctx7.stroke();

// canvas 5
const canvas5El = document.getElementById("Canvas5");
const ctx8 = canvas5El.getContext("2d");
ctx8.beginPath();
ctx8.arc(95, 50, 40, 0, 2 * Math.PI);
ctx8.moveTo(80, 40);
ctx8.lineTo(110, 40);
ctx8.moveTo(80, 40);
ctx8.arc(85, 40, 5, 0, 2 * Math.PI);
ctx8.moveTo(110, 40);
ctx8.arc(110, 40, 5, 0, 2 * Math.PI);
ctx8.moveTo(115, 60);
ctx8.arc(95, 60, 20, 0, Math.PI);
ctx8.stroke();

// canvas 6
const canvas6El = document.getElementById("Canvas6");
const ctx9 = canvas6El.getContext("2d");
const ctx10 = canvas6El.getContext("2d");
const ctx11 = canvas6El.getContext("2d");
const ctx12 = canvas6El.getContext("2d");
const ctx13 = canvas6El.getContext("2d");
const ctx14 = canvas6El.getContext("2d");


ctx9.beginPath();
ctx9.arc(15, 15, 10, 0, 2 * Math.PI);
ctx9.moveTo(45, 35);
ctx9.stroke();

ctx10.beginPath();
ctx10.arc(35, 35, 10, 0, 2 * Math.PI);
ctx10.moveTo(65, 55);
ctx10.fillStyle = "hsl(0deg 0% 83.14%)";
ctx10.fill()
ctx10.stroke();

ctx11.beginPath();
ctx11.arc(55, 55, 10, 0, 2 * Math.PI);
ctx11.moveTo(85, 75);
ctx11.fillStyle = "hsl(0deg 0% 66.67%)";
ctx11.fill()
ctx11.stroke();


ctx12.beginPath();
ctx12.arc(75, 75, 10, 0, 2 * Math.PI);
ctx12.moveTo(105, 95);
ctx12.fillStyle = "hsl(0deg 0% 49.8%)";
ctx12.fill()
ctx12.stroke();

ctx13.beginPath();
ctx13.arc(95, 95, 10, 0, 2 * Math.PI);
ctx13.moveTo(125, 115);
ctx13.fillStyle = "hsl(0deg 0% 33.33%)";
ctx13.fill()
ctx13.stroke();

ctx14.beginPath();
ctx14.arc(115, 115, 10, 0, 2 * Math.PI);
ctx14.moveTo(125, 115);
ctx14.fillStyle = "black";
ctx14.fill()
ctx14.stroke();
