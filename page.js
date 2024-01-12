function validate() {
  var a = document.getElementById("num").value;
  var b = document.getElementById("date").value;
  console.log(b);

  if (a == "9696050698" && b == "2002-01-19") {
    console.log("working proparly");
    location.replace("home.html");
  } else {
    document.getElementById("print").innerHTML = "Phone or DOB not matched";
  }
  // body...
}

function imgchange()
{
  document.getElementById('img').src='https://www.funimada.com/assets/images/cards/big/elle-9.gif';
}
function imgchange2()
{
  document.getElementById('img').src='https://pa1.aminoapps.com/6571/f30914d22fc34b49b968c922f44d64b2b0efb5ca_hq.gif';
}

console.log("js is working");
