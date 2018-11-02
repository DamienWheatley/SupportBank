


function mulitplyBy5(number) {
  return number * 5;
}

let fiveTimesTable = [];

//Write some code to populate the FiveTimesTable array, up to and including 5 * 10 = 50
//i.e the array should finish by looking like [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

for(i = 1; i <= 10; i++){ //iterate through [i] starting at index 1 until it reaches index 10 
  fiveTimesTable.push(mulitplyBy5(i))  // multiplyBy5 runs on 'i' and pushes the result through to fiveTimesTable array -
}                                     //it then runs again on the next iteration of 'i' and pushes that through until it hits i equals 10

console.log(fiveTimesTable);