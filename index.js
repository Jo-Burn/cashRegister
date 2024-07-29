 let cash = document.getElementById('cash');
let click = document.getElementById('click');
let out = document.getElementById('change-due');
//let x = click.addEventListener('click', check());
let price = 1.87;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];
console.log(`Welcome to My Website, Hope you enjoy <3`)
function check() {
    cash
    let z = cash.value;
    let test = [];
    let test1 = []
    let count = 0;
    if(z >= price) {
      z = mathSub(z, price)
      let v = round(z)
      if(v > 0) {
        // count is a safety measure
        if(count != cid.length) {
          for(let i = 0; i < cid.length; i++) {
            if(v >= 0) {
                //mathSub(v, cid[i][1])
                console.log(v, cid[i][1])
                v -= cid[i][1];                
                test.push(cid[i][0])
                test1.push(v)
               // console.log(test1)
               console.log(round(v))
                count++
              if(i == cid.length && v >= 0) {
                out.innerHTML = "Status: INSUFFICIENT_FUNDS"
                break
              }
            } else {
              out.innerHTML = "Done";
              break
            }
          }
        }
      }
    } else {
      out.innerHTML = "no"
    }
} 
function mathSub(a, b) {
  let c = a -= b;
  return c
}
function round(a) {
 return Math.round((a + Number.EPSILON) * 100) / 100;
}