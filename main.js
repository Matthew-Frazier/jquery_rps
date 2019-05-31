$(document).ready( function() {
  var options = ["Rock", "Paper", "Scissors"];
  
  var result = $("#result");
  var results_div = $(".results");
  
  var reset = $("#reset")
  var wins = 0;
  var loses = 0;
  var ties = 0;
  
  var userScore = $("#user_score");
  var compScore = $("#comp_score");
  var tieScore = $("#tie_score");
  // var winPercent = $("#win_percent");
  // var losePercent = $("#lose_percent");
  // var tiePercent = $("#win_percent");
  
  // var totalAmount = parseFloat(getWins) + parseFloat(getLoses) + parseFloat(getTies);
  // var getWins = $("#user_score").text();
  // var getLoses = $("#comp_score").text();
  // var getTies = $("#tie_score").text();

  var compChoice;
  var compPick = $("#comp_choice");
  var playerPick = $("#player_choice")

  var choices = $(".choice");

  // function percentage(num1, total) {
  //   return (parseFloat(num1) / total * 100).toFixed(2)
  // };

  reset.on("click", function() {
    wins = 0;
    loses = 0;
    ties = 0;
    userScore.text(wins);
    compScore.text(loses);
    tieScore.text(ties);
    compPick.text("")
    playerPick.text("")
    results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
    result.text("")
  });

  function winningResults(choice) {
    switch (true) {
    case compChoice === "Rock" && choice === "Rock":
      result.text("Rock Vs Rock, There Can Be No Victor!..")
      ties++;
      tieScore.text(ties);
      // tiePercent.text(percentage(getTies, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('tie_results');
      break;
    case compChoice === "Rock" && choice === "Paper":
      result.text("Paper Beats Rock, You Win!")
      wins++;
      userScore.text(wins);
      // winPercent.text(percentage(getWins, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('win_results');
      break;
    case compChoice === "Rock" && choice === "Scissors":
      result.text("Rock Beats Scissors, You Lose...")
      loses++;
      compScore.text(loses);
      // losePercent.text(percentage(getLoses, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('lose_results');
      break;
    case compChoice === "Paper" && choice === "Paper":
    result.text("Paper Vs Paper, There Can Be No Victor!..")
      ties++;
      tieScore.text(ties);
      // tiePercent.text(percentage(getTies, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('tie_results');
      break;
    case compChoice === "Paper" && choice === "Scissors":
      result.text("Scissors Beats Paper, You Win!")
      wins++;
      userScore.text(wins);
      // winPercent.text(percentage(getWins, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('win_results');
      break;
    case compChoice === "Paper" && choice === "Rock":
      result.text("Paper Beats Rock, You Lose...")
      loses++;
      compScore.text(loses);
      // losePercent.text(percentage(getLoses, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('lose_results');
      break;
    case compChoice === "Scissors" && choice === "Scissors":
      result.text("Scissors Vs Scissors, There Can Be No Victor!..")
      ties++;
      tieScore.text(ties);
      // tiePercent.text(percentage(getTies, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('tie_results');
      break;
    case compChoice === "Scissors" && choice === "Rock":
      result.text("Rock Beats Scissors, You Win!")
      wins++;
      userScore.text(wins);
      // winPercent.text(percentage(getWins, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('win_results');
      break;
    case compChoice === "Scissors" && choice === "Paper":
      result.text("Scissors Beats Paper, You Lose...")
      loses++;
      compScore.text(loses);
      // losePercent.text(percentage(getLoses, totalAmount));
      results_div.removeClass(['lose_results', 'win_results', 'tie_results']);
      results_div.addClass('lose_results');
      break;
    };
  };
  
  choices.on("click", function() {
    compChoice =  options[Math.floor(Math.random() * options.length)];
    compPick.text("The Computer Picked " + compChoice)
    switch (this.id) {
      case "Rock":
        playerPick.text("You Picked " + this.id)
        winningResults("Rock");
        break;
      case "Paper":
        playerPick.text("You Picked " + this.id)
        winningResults("Paper");
        break;
      case "Scissors":
        playerPick.text("You Picked " + this.id)
        winningResults("Scissors");
        break;
    };
  })
});




