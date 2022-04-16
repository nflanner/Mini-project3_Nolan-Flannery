var playStatus;
var userSelection;
var compSelection;
rPS = ['R', 'P', 'S'];

var gameStats = {
    wins: 0,
    losses: 0,
    ties:  0,
    total: 0
}

playStatus = confirm('Do you want to play rock, paper, scissors?');

while (playStatus) {
    do {
        userSelection = prompt('What do you choose, \'R\', \'P\', or \'S\' \n(case sensitive)?')
    } while (!(rPS.includes(userSelection)))
    // alert('great job');

    compSelection = rPS[getRandomInt(3)];

    if (userSelection === compSelection) {
        // tie
        gameStats.ties += 1;
        alert('A tie... That\'s boring.\nComputer selected: ' + compSelection);
    } else if ((userSelection === 'R' && compSelection === 'P') || 
    (userSelection === 'P' && compSelection === 'S') ||
    (userSelection === 'S' && compSelection === 'R')) {
        // you lose
        gameStats.losses += 1;
        alert('You lost, bummer friend.\nComputer selected: ' + compSelection);
    } else {
        // you win
        gameStats.wins += 1;
        alert('You won! You\'re a modern champion.\nComputer selected: ' + compSelection);
    }
    gameStats.total += 1;

    alert('Game Statistics:\nWins: ' + gameStats.wins + '\nLosses: ' + gameStats.losses + '\nTies: ' + gameStats.ties + '\nTotal Games: '+ gameStats.total);
    playStatus = confirm('Do you want to play another game of rock, paper, scissors?');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }