import $ from 'jquery';
import _ from 'lodash';
import './css/main.css';

// Elements to be added to the page
const elements = [
  '<div id="logo"></div>',
  '<p>Holberton Dashboard</p>',
  '<p>Dashboard data for the students</p>',
  '<button id="startButton">Click here to get started</button>',
  '<p id="count"></p>',
  '<p>Copyright - Holberton School</p>',
];

// Append elements to the body
$(document.body).append(elements.join(''));

// Function to update the click counter
let count = 0;
const updateCounter = () => {
  count += 1;
  $('#count').text(`${count} clicks on the button`);
};

// Debounce the updateCounter function using Lodash
const debouncedUpdateCounter = _.debounce(updateCounter, 1000);

// Bind the debounced function to the click event on the button
$('#startButton').on('click', debouncedUpdateCounter);
