// 1. Select the <h1> element by "drilling into the DOM" and 
//    save it in a variable with a name of your choice
let pageHeading = document.body.getElementsByTagName('h1')[0];
pageHeading = document.body.firstElementChild;
pageHeading = document.body.children[0];
console.log(pageHeading.innerText);

// 2. Use the variable from (1) and get access to the "parent"
//    element of the stored <h1> element (i.e. to the <body> element)
//    BONUS: Try using the variable from (1) to get access to the 
//    sibling element (i.e. the <p> element next to the <h1> element)
console.log(pageHeading.parentElement.getElementsByTagName('p')[0].innerText);
console.log(pageHeading.nextElementSibling.innerText);

// 3. Select the <h1> element with getElementById and store in
//    the same or a new variable (up to you)
pageHeading = document.getElementById('page-title');
console.log(pageHeading.innerText);


// 4. Select the second <p> element with querySelector (you might
//    need to add something in the HTML code, e.g. a class) 
//    and store it in a new variable with a name of your choice
let secondP = document.querySelector('.class1');
console.log(secondP.innerText);


// 5. BONUS TASK: Try changing the text content of the <p> element
//    you selected in (4) and set it to any other text of your choice
secondP.textContent = "The text has been replaced :O"
console.log(secondP.innerText);
