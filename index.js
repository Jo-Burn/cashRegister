let cash = document.getElementById('cash');
let click = document.getElementById('click');
let out = document.getElementById('change-due');
//let x = click.addEventListener('click', check());
let test = [];
const max = ()=> {
  let c = 0;
  for(let i = 0; i < money.length; i++) {
    if(money[i][1] > c) {
      c = money[i][1]
    }
  }
  return c;
}
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

const totalCash = ()=> {
  let a = 0
  for(let i = 0; i < cid.length; i++) {
   a += cid[i][1];
  }
  return round(a)
}
console.log(`Welcome to My Website, Hope you enjoy <3`)
window.onload = table
function table() {
  for(let i = 0; i < cid.length; i++) {
    let a = document.getElementById(`table${i}`)
    a.innerHTML = cid[i][1]
  }
}
//Check tells whether there is enough cash in the register(cid)
//and sends it to mon() to determine how much cash to return 
function check() {
    cash
    let z = cash.value;
    
    let test1 = []
    //let count = 0;
    if(z == price) {
      return out.innerHTML = `No change due - customer paid with exact cash`
    }
    if(z >= price && z < totalCash()) {
      z = mathSub(z, price)
      let v = round(z)
      if(v > 0 && v < totalCash()) {
        console.log('Finale', v)

        if(v >= 0) {
         // mon(v);
          out.innerHTML = `Status: Open[${mon(v)}]`
         // console.log(test)
        }
        //return mon(round(z))
      }
    } else if(z > totalCash()) {
      out.innerHTML = "Status: INSUFFICIENT_FUNDS"
    } else {
      window.alert("Costumer can not buy this Item")
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
//Separates the inputted number into the corresponding amounts, 0.06 == .05 && .01
function mon(a) {
  let x = [] /*x will = a*/;
  x = a;
  let b = [];
    for(let i = 0; i < money.length; i++) {
     // console.log(`log ${i}`)
      if(x != 0 && x >= 0) {
        if(money[i][1] >= x) {
          let d = mathSub(i, 1)
          //console.log(x, money[d][1], `this`)
         // const y = mathSub(x, money[d][1])
         // console.log(y)
         // console.log(`log ${x}`)
         if(money[d][1] <= cid[d][1]) {
          b.push(money[d][1])
          cid[d][1] = mathSub(cid[d][1], money[d][1])
          x = this.mathSub(x, money[d][1]);
         } else {
          d = mathSub(i, 2);
          b.push(money[d][1])
          cid[d][1] = mathSub(cid[d][1], money[d][1])
          x = this.mathSub(x, money[d][1]);

         }
          i = 0;
          //console.log(x)
          //continue    
        } if(x >= max()) {
          let d = mathSub(cid.length, 1);
         //console.log(x = this.mathSub(x, max()));
           if(max() <= cid[d][1]) {
           b.push(max())
           x = this.mathSub(x, cid[d][1])
           cid[d][1] = mathSub(max(), cid[d][1]) 
          // console.log(x)
           }
           if(max() > cid[d][1]) {
            b.push(cid[d][1])
            x = this.mathSub(x, cid[d][1]);
            cid[d][1] = 0;
            //start
            if(x >= max() && cid[d][1] == 0) {
             for(let j = 0; j < money.length; j++) {
              if(x >= max()) {
                if(money[j][1] >= x) {
                  if(money[j][1] >= x) {
                    let q = mathSub(j, 1)
                   if(money[q][1] <= cid[q][1]) {
                    b.push(money[q][1])
                    cid[q][1] = mathSub(cid[q][1], money[q][1])
                    x = this.mathSub(x, money[q][1]);
                   } else {
                    q = mathSub(i, 2);
                    b.push(money[q][1])
                    cid[q][1] = mathSub(cid[q][1], money[q][1])
                    x = this.mathSub(x, money[q][1]);
          
                   }
                    j = 0;
                  }
                }
              }
             }
            }            
           }
        }
      } else {
        //console.log(`final ${x}`)
         console.log(b)
         break
      }
    }
    table(b)
    return b
           //return value(b);
}
//organizes the array from mon, including the amount from money
function value(a) {
 //console.log(`this ${a}`)
 let b = []
 for(let i = 0; i < a.length; i++) {
  for(let j = 0; j < money.length; j++) {
    if(b.includes(a[i]) == false) {
    //  console.log('this')
      if(a[i] == money[j][1]) {
        if(b.includes(money[j][1]) == false) {
          b.push(money[j]);
        }
         if(b.includes(money[j]) == true) {
         // console.log('test')
            if(b == money[j][0]) {
              b.push(money[j][1])
            }
          
        }
      }
     }
   
  }
 }
 //console.log(b, 'this is B')
 return low(b)
}
//Don't ask me, idk yet
function low(a) {
  console.log(`low ${a}`)
  let b = [];
  for(let i = 0; i < a.length; i++) {
    let count = 0;
    let c = mathSub(i, 1);
    for(let j = 0; j < a.length; j++) {
      if(a[i] == a[j] && a[i] !== a[c]) {
        count++
      }
    }
    if(count !== 0) {
     b.push(a[i][0] && a[i][1] * count)
    // i += count--
    } else {
      b.push(a[i]);
    }
  }
  return b
}
//console.log(money[0].includes(0.01));
//console.log(mon(10))
/*b.sort(function(a, b){return a - b})
           b.reverse();
           let c = round(b[0]) * -1;
           console.log(b)*/