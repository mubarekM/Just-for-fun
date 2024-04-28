
    // Get the <h1> element
    var h1Element = document.querySelector('.title'); 


    // Get the <input> element
    var inputElement = document.getElementById('nameInput');

    // Add an event listener to the input element
    inputElement.addEventListener('input', function() {
        // Update the text content of the <h1> element to match the input value
        h1Element.textContent = inputElement.value;
    });
