var num = 33721;

var mult = 1;
while(num > 0) {
  mult *= (num % 10);
  num = Math.floor(num / 10);
}
console.log(mult);

// второй способ
// num = String(num);
// num = num.split('');
// let mult = num.reduce(function(mult, cur) {
//     return mult * +cur;
// }, 1);
// console.log(mult);

let multPow = mult ** 3;
// console.log(multPow);

multPow = String(multPow);
alert(multPow.slice(0,2));