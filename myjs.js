let x = 0; 
let operator = ""; 

function print(num){
    let digit1 = document.getElementById("field")
    digit1.innerText += num;
}

function clean() {
    let clean1 = document.getElementById("field");
    clean1.innerText = "";
  }


  function divide() {
    let divide1 = document.getElementById("field");
    x = parseFloat(divide1.innerText);
    operator = "/";
    divide1.innerText = "";
  }

  function multiply() {
    let multiply1 = document.getElementById("field");
    x = parseFloat(multiply1.innerText);
    operator = "*";
    multiply1.innerText = "";
  }

  function minus() {
    let minus1 = document.getElementById("field");
    x = parseFloat(minus1.innerText);
    operator = "-";
    minus1.innerText = "";
  }

  function plus() {
    let text = document.getElementById("field");
    x = parseFloat(text.innerText);
    operator = "+";
    text.innerText = "";
  }

  function equels() {
    let equels1 = document.getElementById("field");
    let y = parseFloat(equels1.innerText);
  

  switch (operator) {
    case "/":
      if (y !== 0) {
        result = x / y;
      } else {
        result = "Ошибка: деление на ноль";
      }
      break;
    case "*":
      result = x * y;
      break;
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    default:
      result = "";
    }

    document.getElementById("valeratop").innerText += ""+x+" "+operator+" "+y+" \n"+"="+result + "\n"

  equels1.innerText = result;
    }