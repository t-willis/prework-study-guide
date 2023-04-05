// Defining variables for topic list
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

// Defining function to log each viariable in topics array
function listTopics() {
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x])
  }
}

// Defining function to randomly select one of four variables listed in topics array
function selectTopic() {

  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    console.log('Please try again!');
  }
}

// Printing to console the topics learned and randomly selected topic
console.log('Here are the topics we learned through Prework:');
listTopics()
console.log('Which topic should we study first?');
selectTopic()

// Dark mode toggle function because my eyes hurt
function dmToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Trying to make a function to count the days I've been learning coding.
var oneDay = 24 * 60 * 60 * 1000;
var then = new Date(2023, 3, 1, 12, 0, 0, 0);
var now = new Date();
var diffDays = Math.round(Math.abs((then.getTime() - now.getTime()) / oneDay));
console.log("I have been learning to code for " + diffDays + " days!");


/* This is an example array with a console.log() method to print the first item in the array
var shapes = ["triangle", "square", "pentagon", "circle"];
console.log(shapes[0]);
*/