// ========== Solution-1 ===============

function tournamentWinner(competitions, results) {
  // Write your code here.
  let scoreBoard = new Map();
  for (let i = 0; i < results.length; i++) {
    if (results[i] === 0) {
      scoreBoard.has(competitions[i][Number(!results[i])]) ? 
        scoreBoard.set(competitions[i][Number(!results[i])], scoreBoard.get(competitions[i][Number(!results[i])])+3) : 
        scoreBoard.set(competitions[i][Number(!results[i])], 3)
    } else {
      scoreBoard.has(competitions[i][Number(!results[i])]) ? 
        scoreBoard.set(competitions[i][Number(!results[i])], scoreBoard.get(competitions[i][Number(!results[i])])+3) : 
        scoreBoard.set(competitions[i][Number(!results[i])], 3)
    }
  }
  const [team, score] = [...scoreBoard.entries()].reduce((initPair, maxPair) => {
    return initPair[1] > maxPair[1] ? initPair : maxPair}, [-1, -Infinity]);
  return team;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;


// ========== Solution-2 ===============


function tournamentWinner(competitions, results) {
  // Write your code here.
  let scoreBoard = new Map();
  let score = -Infinity;
  let team = '';
  let winningTeam = '';
  for (let i = 0; i < results.length; i++) {
    score = scoreBoard.get(competitions[i][Number(!results[i])]) || 0; 
    team = competitions[i][Number(!results[i])];
    scoreBoard.set(team, score+3);
    if (!scoreBoard.has(winningTeam) || scoreBoard.get(team) > scoreBoard.get(winningTeam)) {
      winningTeam = team;
    }
  }
  return winningTeam;
}

// Do not edit the line below.
exports.tournamentWinner = tournamentWinner;
