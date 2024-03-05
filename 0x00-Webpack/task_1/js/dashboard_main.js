// dashboard_main.js

import $ from 'jquery';

import _ from 'lodash';
const debouncedUpdateCounter = _.debounce(updateCounter, 300); 

// Bind the debounced function to the button click event
$('button').on('click', debouncedUpdateCounter);


// Add elements to the DOM
$(document).ready(function () {
    // Paragraph elements
    $('<p>').text('Holberton Dashboard').appendTo('body');
    $('<p>').text('Dashboard data for the students').appendTo('body');

    // Button element
    $('<button>')
        .text('Click here to get started')
        .appendTo('body')
        .on('click', updateCounter);

    // Paragraph element for count
    $('<p>').attr('id', 'count').appendTo('body');

    // Copyright notice
    $('<p>').text('Copyright - Holberton School').appendTo('body');
});

// Function to update the counter
let count = 0;
function updateCounter() {
    count++;
    $('#count').text(`${count} clicks on the button`);
}
