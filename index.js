let cash = document.getElementById('cash');
let click = document.getElementById('click');
let x = click.addEventListener('click', check);
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
    console.log(cash.value)
}