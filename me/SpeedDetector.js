// Challenge 2: Speed Detector (Toy Problem)

//Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

// > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

const speed = 80;

if (speed < 70) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - 70) / 5);

  if (demeritPoints > 12) {
    console.log("License suspended");
  } else {
    console.log(`Points: ${demeritPoints}`);
  }
}


function rahma (height) {

    if (height < 5) {
        console.log("You are short");
    } else {
        console.log("You are tall");
    }
    }
    rahma(10); 

function subira (speed) {

    if (speed < 70) {
        console.log("Ok");
    } else {
        const demeritPoints = Math.floor((speed - 70) / 5);
    
        if (demeritPoints > 12) {
          console.log("License suspended");
        } else {
          console.log(`Points: ${demeritPoints}`);
        }
      }
    }
    subira(80); 