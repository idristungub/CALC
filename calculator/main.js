let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByClassName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = ""; // remove the characters fully by displaying an empty string
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText); // executes the code for instance any calculation displayed until equal has been pressed is executed
        } catch {
          // handles any errors that have been executed
          display.innerText = "Error";
        }
        break;
      case "←":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1); // clears the characters by 1
        }
        break;
      default:
        display.innerText += e.target.innerText;
    }
  });
});
