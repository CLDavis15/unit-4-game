$(document).ready(function(){

    
    var targetNumber = Math.floor((Math.random() * 120) + 19);
    
    
    // the target number needed to win the game.
    
    $("#number-needed").text(targetNumber);
    
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    $("#number-wins").text(wins);
    $("#number-losses").text(losses);


    var crystalValues = {};

        crystalValues[1] = Math.floor((Math.random() * 12) + 1);
        crystalValues[2] = Math.floor((Math.random() * 12) + 1);
        crystalValues[3] = Math.floor((Math.random() * 12) + 1);
        crystalValues[4] = Math.floor((Math.random() * 12) + 1);
    
    function reset() {
        targetNumber = Math.floor((Math.random() * 120) + 19);

        $("#number-needed").text(targetNumber);

        var crystalValues = {};
        crystalValues[1] = Math.floor((Math.random() * 12) + 1);
        crystalValues[2] = Math.floor((Math.random() * 12) + 1);
        crystalValues[3] = Math.floor((Math.random() * 12) + 1);
        crystalValues[4] = Math.floor((Math.random() * 12) + 1);

        userTotal = 0;

        $("#total-score").text(userTotal);
    }
    
    
    function winner() {
        wins++;
        $("#number-wins").text(wins);

        reset();
    }
    
    function loser(){
        losses++;
        $("#number-losses").text(losses);
        reset();
    }
    

    function getCrystalTotal(crystalKey) {
        return function(){
            userTotal = userTotal + crystalValues[crystalKey];
            console.log("New userTotal" + userTotal);
            $("#total-score").text(userTotal);

            if (userTotal === targetNumber) {
                winner()
            }
            else if (userTotal >= targetNumber) {
                loser()
            }

        
        }
   
    };
    
    $("#image1").on("click", getCrystalTotal(1));
    $("#image2").on("click", getCrystalTotal(2));
    $("#image3").on("click", getCrystalTotal(3));
    $("#image4").on("click", getCrystalTotal(4));
    

    
});