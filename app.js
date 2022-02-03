// set counter value to zero
let count = 0;
// select value and buttons
const value = document.getElementById("value");
const btns = document.querySelectorAll(".btn");

// for-each loop on nodelist of buttons
btns.forEach(function (button) {
  button.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    // check for the clicked button & change the count for value
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    // change the color of count for value
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "black";
    }

    value.textContent = count;
  });
});
