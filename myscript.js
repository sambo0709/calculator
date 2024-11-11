/*
I certify that the HTML file I am submitting is all my own work.
None of it is copied from any source or any person.
Signed: Samuel Boye.
Author: Samuel Boye
Date: 11/10/2024
Class: CSC135
Project: Calculator Assignment 5
File Name: myscript.js
Description: javascipt to add functionality to calculator+*/

const display = document.getElementById('display');
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (button.classList.contains('clear')) {
            // Clear the display
            display.value = '';
        } else if (button.classList.contains('equal')) {
            // Evaluate the expression in the display
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            // Append digit or operator to the display
            display.value += value;
        }
    });
});
