import $ from 'jquery';
import _ from 'lodash';
const debouncedUpdateCounter = _.debounce(updateCounter, 500); 
// Bind the debounced function to the button click event
$('button').on('click', debouncedUpdateCounter);


// Elements to be added to the hTML
const elements = [
    '<p>Holberton Dashboard</p>',
    '<p>Dashboard data for the students</p>',
    '<button id="clickButton">Click here to get started</button>',
    '<p id="count"></p>',
    '<p>Copyright - Holberton School</p>'
];

// Append elements to the body
elements.forEach(element => {
    $('body').append(element);
  });
  
  // Function to update the counter
  function updateCounter() {
    let count = 0;
    const countElement = $('#count');
  
    // Debounce the function to prevent spamming
    const debouncedUpdate = _.debounce(() => {
      count++;
      countElement.text(`${count} clicks on the button`);
    }, 1000);
  
    // Bind the debounce function to the click event on the button
    $('#clickButton').on('click', debouncedUpdate);
  }
  
  // Call the function to update the counter
  updateCounter();