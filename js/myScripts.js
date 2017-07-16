/**
 * Created by ericzorn on 7/2/17.
 */



var votesCurrentCycle = votingData.voting.shift();

var candidateInputs = [
 document.getElementById("cand1"),
 document.getElementById("cand2"),
 document.getElementById("cand3")
];

var parties = [
 document.getElementById("party1"),
 document.getElementById("party2"),
 document.getElementById("party3")
];

var votes = [
 document.getElementById('votes1'),
 document.getElementById('votes2'),
 document.getElementById('votes3')
];

var percents = [
 document.getElementById("cand1pct"),
 document.getElementById("cand2pct"),
 document.getElementById("cand3pct"),
];

//Here is the total votes
var totalVotes = document.getElementById("totalvotes");


//Set Names in Inputs

for (var i = 0; i < votingData.candidates.length; i+= 1) {
 candidateInputs[i].value = votingData.candidates[i].name;
 
 parties[i].value = votingData.candidates[i].party;
}



//Vote Total
function updateTotalVotes() {
 
 var votesFirst= votes[0].value = votesCurrentCycle[0];
 var votesSecond = votes[1].value = votesCurrentCycle[1];
 var votesThird = votes[2].value = votesCurrentCycle[2];
 

 var total = votesFirst + votesSecond + votesThird;
 
 totalVotes.value = total;
    
//   return total;
}

//updateTotalVotes();

function cycle() {
    updateTotalVotes();
    votePercentage();
    
    if (isThereNextCycle()) {
        var timeDelayMs = 5000; //5 Seconds
        getNextCycleVotes(); 
        setTimeout(cycle, timeDelayMs);
    }
}

function getNextCycleVotes() {
    votesCurrentCycle = votingData.voting.shift();
}

function isThereNextCycle() {
    return votingData.voting.length >= 1;
}




//Vote Percentage
function votePercentage() {
    var percent1 = (votes[0].value / totalVotes.value) * 100;
    var percent2 = (votes[1].value / totalVotes.value) * 100;
    var percent3 = (votes[2].value / totalVotes.value) * 100;
    
    percents[0].value = parseFloat(percent1).toFixed(2) + "%";
    percents[1].value = parseFloat(percent2).toFixed(2) + "%";
    percents[2].value = parseFloat(percent3).toFixed(2) + "%";
}


//Date Set
document.getElementById("date").value = votingData.electionDate;

//Calls the final Cycle Function
document.onload = cycle();

//Update the description 
document.getElementById('productDescription').innerHTML = 'Project Description: ' + "<em style='text-decoration:underline;'>" + votingData.electionDescription + "</em>";

//Update Election ID
document.getElementById('electionID').innerHTML =  "Election ID: " + "<em style='text-decoration:underline;'>" + votingData.electionId + '</em>';

//Wikipedia 
function electionWiki() {
 var electionSubmit = document.getElementById('submit');
 
 electionSubmit.addEventListener('click', function() {
   const url = 'https://en.wikipedia.org/wiki/United_States_presidential_election,_1948';
  
   window.open(url, '_blank');
 });
}

electionWiki();

//Console Log Finished 
console.log(document.body.onload = 'The data has been loaded successfully!');