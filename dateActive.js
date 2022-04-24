let date = new Date();
let month = date.toLocaleString('en', { month: 'long' }).toLowerCase();
document.getElementById(month).classList.add("active"); 