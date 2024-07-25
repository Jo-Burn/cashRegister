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

function check() {
    cash
    let z = cash.value;
    let test = [];
    let test1 = 0
    let count = 0;
    /*console.log(cid[4][1])
    if(count !== 10) {
      for(let i = 0; i < cid.length; i++) {
        if(z >= price && z >= 0) {
         Math.floor(z -= cid[i][1]);
          test.push(cid[i][1])
          count++
          console.log(test) 
       }
      }
    }else {
       out.innerHTML = 'no';
    } 
    
    out.innerHTML = add(test)
    function add(z) {
      let t = 0;
      Math.floor(z += t)
      console.log(t)
      return t; 
     } */
    if(z >= price) {
      Math.floor(z -= price);
      let v = round(z)
      if(v > 0) {
        if(count != cid.length) {
          for(let i = 0; i < cid.length; i++) {
            if (v >= 0) {
              if(v >= cid[i][1]) {
                Math.floor(v -= cid[i][1]);
                test.push(cid[i][0])
               // console.log(test)
                count++
              }
            } else {
              console.log('done')
              break 
            }
            //console.log(v)
          }
          console.log(count)
        }
        console.log(test);
      }
    } else {
      out.innerHTML = "no"
    }
} 

function round(a) {
 return Math.round((a + Number.EPSILON) * 100) / 100;
}