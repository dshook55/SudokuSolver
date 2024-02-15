
function changeFontSize() {
  const fontSizeSelect = document.getElementById("fontSize");
  const selectedFontSize = fontSizeSelect.value;

  // You can adjust the font sizes based on your preferences
  const smallFontSize = "14px";
  const mediumFontSize = "18px";
  const largeFontSize = "24px";

  // Set the font size for everything except the Sudoku squares
  document.body.style.fontSize = selectedFontSize === "small" ? smallFontSize :
                               selectedFontSize === "medium" ? mediumFontSize :
                               selectedFontSize === "large" ? largeFontSize :
                               mediumFontSize;
}

function changeButtonColor() {
  const colorSelect = document.getElementById("colorSelect");
  const selectedColor = colorSelect.value;

  // Set the color for the "Submit" and "Clear" buttons
  const allButtons = document.querySelectorAll('button');
  allButtons.forEach(button => {
    button.style.backgroundColor = selectedColor;
  });


}

function changeBoardSize(size) {
  const alltd = document.querySelectorAll('td');
  
  alltd.forEach(td => {
    switch (size) {
      case 'small':
        td.style.height = '30px';
        td.style.width = '30px';
        break;
      case 'medium':
        td.style.height = '40px';
        td.style.width = '40px';
        break;
      case 'large':
        td.style.height = '50px';
        td.style.width = '50px';
        break;

      default:
        break;
    }
  });
}