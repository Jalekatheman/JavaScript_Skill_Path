const team = {
    _players : [
      {firstName: 'Gonçalo', lastName: 'Silva', age: 24},
      {firstName: 'Vski', lastName: 'Boneco', age: 32},
      {firstName: 'nhe', lastName: 'nada', age: 47}
    ],
    _games : [
      {opponent: 'Prozis', teamPoints: 10, opponentPoints: 3},
      {opponent: 'Bonecos', teamPoints: 40, opponentPoints: 30},
      {opponent: 'nhecos', teamPoints: 10, opponentPoints: 20}
    ],
    get players (){
      return this._players;
    },
    get games (){
      return this._games;
    },
    addPlayer(newFirstName, newLastName, newAge){
      let player = {
        firstName: newFirstName,
        lastName: newLastName,
        age: newAge,
      }
      this.players.push(player);
    },
      addGame(newOpponent, newTeamPoints, newOpponentPoints){
      let game = {
        opponent: newOpponent,
        teamPoints: newTeamPoints,
        opponentPoints: newOpponentPoints
      };
      this.games.push(game)
    }
  };
  
  team.addPlayer('dog','fairy', 76);
  console.log(team.players);
  
  team.addGame('Titans', 100, 98);
  console.log(team.games);