# Data Active
Script for activating objects by date


With this script, you can easily change your code depending on the month.


# Example

«`{css}<пробел>{
    .active {
      color: red;
    }
}«`


«`{html}{

  <div id="january">January</div>
  <div id="february">February</div>
  <div id="march">March</div>
  <div id="april">April</div>
  <div id="may">May</div>
  <div id="june">June</div>
  <div id="july">July</div>
  <div id="august">August</div>
  <div id="september">September</div>
  <div id="october">October</div>
  <div id="november">November</div>
  <div id="december">December</div>
}«`

«`{js}<пробел>{
    let date = new Date();
    let month = date.toLocaleString('en', { month: 'long' }).toLowerCase();
    document.getElementById(month).classList.add("active");

}«`




