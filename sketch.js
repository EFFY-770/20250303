let input;
let dropdown;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // Create the input field
  input = createInput();
  input.position(windowWidth / 2 - 100, 10);
  
  // Create the dropdown menu
  dropdown = createSelect();
  dropdown.position(windowWidth / 2 + 100, 10);
  
  // Add options to the dropdown
  dropdown.option('第一周');
  dropdown.option('第二周');
  dropdown.option('第三周');
  
  // Set up an event listener for when the dropdown selection changes
  dropdown.changed(handleDropdownChange);
  
  textAlign(CENTER, CENTER);
  textSize(32);
  fill(255); // Set the text color to white
}

function draw() {
  background(0); // Set background color to black
  
  // Get the text from the input field
  let inputText = input.value(); 
  let repeatedText = inputText.split('').join(' ');
  
  // Draw the repeated text
  for (let y = 40; y < height; y += 40) {
    text(repeatedText, width / 2, y);
  }
}

// Handle the dropdown selection change
function handleDropdownChange() {
  let selectedOption = dropdown.value();
  
  // Open a new window with the corresponding URL
  if (selectedOption === '第一周') {
    window.open('https://www.tku.edu.tw/', '_blank');
  } else if (selectedOption === '第二周') {
    window.open('https://www.et.tku.edu.tw/', '_blank');
  } else if (selectedOption === '第三周') {
    window.open('https://hackmd.io/@rhUAdj_YRE6Ju61ctlhJzg/HJYyt5fs1e', '_blank');
  }
}
