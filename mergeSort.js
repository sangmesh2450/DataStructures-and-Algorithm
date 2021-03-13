// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin,
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic

  ///console.log(userInput);
  var n = Number(userInput[0]);
  var arr = userInput[1].split(" ").map(Number);
  var arr1 = userInput[2].split(" ").map(Number);
  arr = arr.concat(arr1);
  mergersort(arr, 0, arr.length - 1);
  console.log(...arr);
});

function mergersort(arr, low, high) {
  if (low === high) return;
  let mid = Math.trunc((low + high) / 2);
  mergersort(arr, low, mid);
  mergersort(arr, mid + 1, high);
  merge(arr, low, mid, high);
}
function merge(arr, low, mid, high) {
  let i = low;
  let j = mid + 1;
  let temp = [];
  while (i <= mid && j <= high) {
    if (arr[i] < arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }
  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }
  while (j <= high) {
    temp.push(arr[j]);
    j++;
  }
  for (i = low; i < temp.length; i++) {
    arr[i] = temp[i - low];
  }
}
