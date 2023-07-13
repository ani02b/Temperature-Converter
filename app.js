function cel() {
  let celsius = document.getElementById("Celsius").value;

  let c_f = (celsius * 9) / 5 + 32;
  if (c_f === c_f.isInteger) {
    document.getElementById("Fahrenheit").value = c_f;
  } else {
    c_f = c_f.toFixed(4);
    document.getElementById("Fahrenheit").value = c_f;
  }

  let c_k = Number(celsius) + 273.15;
  if (c_k === c_k.isInteger) {
    document.getElementById("Kelvin").value = c_k;
  } else {
    c_k = c_k.toFixed(4);
    document.getElementById("Kelvin").value = c_k;
  }
}
function fah() {
  let fahrenheit = document.getElementById("Fahrenheit").value;

  let f_c = ((fahrenheit - 32) * 5) / 9;
  if (f_c === f_c.isInteger) {
    document.getElementById("Celsius").value = f_c;
  } else {
    f_c = f_c.toFixed(4);
    document.getElementById("Celsius").value = f_c;
  }

  let f_k = (Number(fahrenheit - 32) * 5) / 9 + 273.15;
  if (f_k === f_k.isInteger) {
    document.getElementById("Kelvin").value = f_k;
  } else {
    f_k = f_k.toFixed(4);
    document.getElementById("Kelvin").value = f_k;
  }
}
function kel() {
  let kelvin = document.getElementById("Kelvin").value;

  let k_c = kelvin - 273.15;
  if (k_c === k_c.isInteger) {
    document.getElementById("Celsius").value = k_c;
  } else {
    k_c = k_c.toFixed(4);
    document.getElementById("Celsius").value = k_c;
  }

  let k_f = (Number(kelvin - 273.15) * 9) / 5 + 32;
  if (k_f === k_f.isInteger) {
    document.getElementById("Fahrenheit").value = k_f;
  } else {
    k_f = k_f.toFixed(4);
    document.getElementById("Fahrenheit").value = k_f;
  }
}
function res() {
  document.getElementById("Celsius").value = "";
  document.getElementById("Fahrenheit").value = "";
  document.getElementById("Kelvin").value = "";
}
