let cash = document.getElementById('cash');
let click = document.getElementById('click');
let out = document.getElementById('change-due');
//let x = click.addEventListener('click', check());
let test = [];
const money = [
  ['PENNY', 0.01],
  ['NICKEL', 0.05],
  ['DIME', 0.10],
  ['QUARTER', 0.25],
  ['ONE', 1],
  ['FIVE', 5],
  ['TEN', 10],
  ['TWENTY', 20],
  ['ONE HUNDRED', 100]
];
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
  return c;
}
console.log(`Welcome to My Website, Hope you enjoy <3`)
//Check tells whether there is enough cash in the register(cid)
//and sends it to mon() to determine how much cash to return 
function check() {
    cash
    let z = cash.value;
    
    let test1 = []
    let count = 0;
    if(z == price) {
      out.innerHTML = `No change due - customer paid with exact cash`
    }
    if(z >= price) {
      z = mathSub(z, price)
      let v = round(z)
      if(v > 0) {
          for(let i = 0; i < cid.length; i++) {
            
            if(v >= 0) {
                //mathSub(v, cid[i][1])
                //console.log(v, cid[i][1])
                mathSub(v, cid[i][1])               
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
        console.log('Finale', v)
        if(v >= 0) {
          out.innerHTML = "Status: INSUFFICIENT_FUNDS"
          
        }
        if(v <= 0) {
          value(v);
          out.innerHTML = `Status: Open[${value(v)}]`
        }
        //return mon(round(z))
      }
    } else {
      out.innerHTML = "no"
    }
} 
// a - b, Basically 
function mathSub(a, b) {
  let c = []
  if(a < 0 || b < 0) {
    c = a += b
  } else {
    c = a -= b
  }
  return round(c)
}
//Rounds a number to the nearest .01
function round(a) {
 return Math.round((a + Number.EPSILON) * 100) / 100;
}
//Still trying to Figure it out
function mon(a) {
  let b = [];
 // console.log(`mon works ${a}`);
          for(let i = 0; i < cid.length; i++) {
            let count = mathSub(a, cid[i][1]);
            if(count < 0) {
              b.push(count)
            } else {
              b.push(count);
            }    
           }
           console.log(`mon ${b}`)
           /*b.sort(function(a, b){return a - b})
           b.reverse();
           let c = round(b[0]) * -1;
           console.log(b)*/
          // console.log(`mon ${c}`)
           //return value(b); 
           return low(b)
}
function value(a) {
  let b = []
  for(let i = a; i < max; i += .01) {
    for(let j = 0; j < cid.length; j++) {
      if(round(i) == cid[j]) {
       b = cid[j]
       break
      }
    }
    
  }
  //console.log(`Value ${b}`)
}
//Don't ask me, idk yet
function low(a) {
  let b = a;
 console.log(`low works ${a}`)
 for(let i = 0; i < cid.length; i++) {
  while(a !== cid[i][1]) {
    if(a) {
      console.log(round(a))
     a += .01
     b -= .01
    }
    if(round(a) == cid[j][1]) {
      console.log(`A worked ${a}`)
      break
    } 
    if(round(b) == cid[j][1]) {
      console.log(`B worked ${b}`)
      break
    }
  }
 }
 
 return 1;
}