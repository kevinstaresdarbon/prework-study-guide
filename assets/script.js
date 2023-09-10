var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

function listTopics(){
    for(var x=0; x < topics.length; x++){
        console.log(topics[x]);
    };
}


var topic = "HTML";

function selectTopic(x) {
    if (x === 'HTML') {
    console.log("Let's study HTML!");
    } else if (x === 'CSS') {
    console.log("Let's study CSS!");
    } else if (x === 'Git') {
    console.log("Let's study Git!");
    } else if (x === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
};

function rndOutput() {
    var randomTopic = topics[Math.floor(Math.random() * topics.length)];
    selectTopic(randomTopic);
};

console.log('Here are the topics we learned in prework:');
listTopics();

console.log('Which topic shall we study today?');
rndOutput();