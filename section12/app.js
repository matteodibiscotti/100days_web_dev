document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);

// ADD AN ELEMENT
// 1. Create the new element
let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://google.com'
newAnchorElement.textContent = 'go to Google'

// 2. Get access to the parent element that should hold the new element
let firstParagraph = document.querySelector('p');

// 3. Insert the element in to the parent element content
firstParagraph.append(newAnchorElement);



// REMOVE ELEMENTS
// 1. Select the element that should be removed
let firstH1Element = document.querySelector('h1');

// 2. Remove it
firstH1Element.remove();



// MOVE ELEMENTS
firstParagraph.parentElement.append(firstParagraph); // The first paragraph will become the last paragraph


// textContent
console.log(firstParagraph.textContent) // returns just the text from the element, but will also return text from nested elements

firstParagraph.textContent = 'Hi this is <strong>Important</strong>.' // this will be rendered as text in the browser and not display bold

// innerHTML
firstParagraph.innerHTML = 'Hi this is <strong>Important</strong>.' // this will be rendered as html