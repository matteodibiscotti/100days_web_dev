let greetingText = "Hello! I'm Matt"; // Only need to use let when creating the variable the first time
alert(greetingText);
greetingText = "Just kidding"; // Don't need let here because we are just reassigning the variable
alert(greetingText);

let hobbies = [
    'Cycling', 
    'Video Games'
];

alert(hobbies);

let job = {
    title: 'Developer',
    place: 'out the sticks',
    salary: 1000000 
}; // Object - grouping related data

alert(job.title);