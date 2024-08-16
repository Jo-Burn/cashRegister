let cash = document.getElementById('cash');
let click = document.getElementById('click');
let out = document.getElementById('change-due');
//let x = click.addEventListener('click', check());
let test = [];
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
const max = ()=> {
  let c = 0;
  for(let i = 0; i < cid.length; i++) {
    if(cid[i][1] > c) {
      c = cid[i][1]
    }
  }
 // c.sort(function(a, b){return a - b});
 // c.reverse()
  return c;
}
console.log(`Welcome to My Website, Hope you enjoy <3`)
function check() {
    cash
    let z = cash.value;
    
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
                //console.log(v, cid[i][1])
                v -= cid[i][1];                
                test.push(cid[i][0])
                test1.push(v)
               // console.log(test1)
               //console.log(round(v))
                count++
            } else {
              out.innerHTML = "Done";
              break
            }
          }
        }
        console.log('Finale', v)
        if(v >= 0) {
          out.innerHTML = "Status: INSUFFICIENT_FUNDS"
          
        }
        if(v <= 0) {
          mon(v);
          out.innerHTML = `Status: Open[${mon(v)}]`
        }
        //return mon(round(z))
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
function mon(a) {
  let b = [];
  
  console.log(max())
 // console.log(`mon works ${a}`);
          for(let i = 0; i < cid.length; i++) {
            let count = mathSub(a, cid[i][1]);
            b.push(count);            
           }
           b.sort(function(a, b){return a - b})
           b.reverse();
           let c = round(b[0]);
           c * -1
           return low(c); 
           //console.log(b)
}
function low(a) {
  let b = [];
 console.log(`low works ${a}`)
 for(let i = 0; i < cid.length; i++) {
  if(a <= 0) {
   
  }
  break
 }
 
 return 1;
}
