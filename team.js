class Team //The Team class should have the following instance variables: 
{
    teamName;//teamName (String)
    wins;//wins (int)
    losses;//losses (int)
    winLossPct;//winLossPct (Double)

    games = []; //new Game();

    constructor(Wins, Losses)
    {
        this.wins = Wins;
        this.losses = Losses;
    }

    //AND the following methods:

    getTeam()
    {
        return this.teamName = tName;
        //getTeam - when called, it returns the team name
    }

    setTeam(tName)
    {
        //setTeam - when called, it receives a parameter that is used to set the instance variable teamName
        this.teamName = tName;
    }

    setWinsLosses(numWins, numLosses)
    {
        //setWinsLosses - when called it receives TWO parameters used to set the wins and the losses instance variables. Wins is the first parameter and Losses is the second parameter. This method will also calculate the winLossPct Instance variable.
        this.wins = numWins;
        this.losses = numLosses;
        this.winLossPct = (this.wins/this.losses);
    }

    getWins()
    {
        //getWins - when called it returns the number of wins
        return this.wins;
    }

    getLosses()
    {
        //getLosses - when called it returns the number of losses
        return this.losses;
    }

    calcWinLossPct()
    {
        //calcWinLossPct - calculates and updates the winLossPct attribute


    }
}



class Game //The Game class will have the attributes:
{
    myscore; //my team score (int)

    theirscore; //opp team score(int)

    winOrloss; //winOrLoss (string for Wins or Losses)

    constructor(iMyScore, itScore, swOrl) //This class should have a constructor that receives all 3 parameters to populate the attributes.
    {
        //not sure if we have to call the parent class(Team)
        //super("G")//"G" is the type for game
        this.myscore = iMyScore;
        this.theirscore = itScore;
        this.winOrloss = swOrl;
    }
}



//JADEN
//The BasketballTeam class inherits from the Team class and adds it's own attributes to track the total points for and against teams.
//The total points for and against teams is tracked using two separate methods that receive integer paramaters and and add them to the instance variables.
//The third and final method returns a string to display the "total points for" and "total points against" values using instance variables.
class BasketballTeam extends Team
{
    totalPointsFor;
    totalPointsAgainst;

    constructor(sTeamName, iWins, iLosses, iWinLossPct, aoGames, iTotalPointsFor, iTotalPointsAgainst)
    {
        super(sTeamName, iWins, iLosses, iWinLossPct, aoGames);
        this.totalPointsFor = iTotalPointsFor;
        this.totalPointsAgainst = iTotalPointsAgainst;
    }

   addPointsFor(iTotalPointsFor)
   {
        this.totalPointsFor = this.totalPointsFor + iTotalPointsFor
   }

   addPointsAgainst(iTotalPointsAgainst)
   {
        this.totalPointsAgainst = this.totalPointsAgainst + iTotalPointsAgainst
   }

   getAllPoints()
   {
        return("Total points for: " + this.totalPointsFor + "\n" + "Total points against: " + this.totalPointsAgainst);
   }
}



function playGame()
{   

    //have an object array for teams
    //have an oject of team
    //in a for loop grap the contents of the li and store the data on the new objects using the attributes. 

    var oTeam = new Team();
    var aoTeam = [];
    var liID;

    for(iCount = 0; iCount < 10; iCount++)
    {
        liID = ("n" + (iCount+1)); 
        
        aoTeam[iCount].teamName = document.getElementById("liID").innerHTML;
        

    team.getTeam("byu");
    for(iCount = 1; iCount <= 10; iCount++)
    {
        aoTeam[iCount].teamName = document.getElementById(("n" + iCount)).innerHTML;
        
        aoTeam[iCount].games[iCount]
    }

 /*
When the user clicks on the Play Game button you need to simulate an entire season.

You will first create an array of team objects for each team displayed on the html form in the WCC group.

Each team will play the other team 2 times, once as the home team and once as the visitor. The home team gets an extra 5 points. You will generate random numbers for each of the teams from 0 to 100. If there is a tie, you will play an overtime that generates a new random number score up to 15 points. This score will be added to the previous score. Do NOT add the extra bonus of 5 points for home teams during the overtime portion. If there is another tie, do another overtime period generating 2 new random numbers and adding it to the total score. Keep doing this until there is no tie.

When the game is over you will update the totalPointsFor and the totalPointsAgainst attributes by calling the methods (NOT using the attribute).

You will also update the wins and the losses for each team as a game is completed. You will call the calcWinLossPct method to update the winLossPct attribute.

You will also need to add a new game object to the games attribute for the team and make sure the constructor is appropriately called to populate myScore, theirScore, and winOrLoss.

Each team will play the other teams in the list 2 times but they will not play each other more than that.

Once the season is over you will sort the arrays based upon the wins and display all of the teams dynamically to the output "p" tag.

Make sure you use arrays of objects. Make sure you add appropriate comments. The assignment requirements are worth 90% so go the extra mile and make it look good for the extra 10 points.
 */
}

function playGame() {
    var iNumGames = parseInt(document.getElementById("games").value);
    var sMyTeam = document.getElementById("teamName").value;

    //Used throughout function
    var aiMyScore = [];
    var aiOppScore = [];

    //Used in overtime loop
    var aiNumOT = [];

    //used when calculating score and for keeping track of what to say in output for each game
    var iLossCount = 0; //used to keep track of num losses within loop
    var iWinCount = 0; //used to keep track of num wis within loop
    var asOutput = [];

    //Usec in last part of each iteration of top for loop
    var sOutput = "";
    var iWinPercentage;

    //for loop to create scores for both myTeam and Opp array, compare, and calc overtime in sub loop
    for (let i = 0; i < iNumGames; i++) {
        if (i % 2 == 0) { //use mod to determine odd (i % 2 == 1; away) or even (i % 2 == 0; home)
            aiMyScore[i] = Math.floor((Math.random() * 101)) + 5; //I put * 101 because the score needs to be between 0 and 100
            aiOppScore[i] = Math.floor((Math.random() * 101));
        } else {
            aiMyScore[i] = Math.floor((Math.random() * 101));
            aiOppScore[i] = Math.floor((Math.random() * 101)) + 5;
        }

        var iOTCount = 0; //I declared inside loop to keep at zero each run through
        var sOTOutput = "";

        //while two scores are even execute loop until they aren't
        while (aiMyScore[i] == aiOppScore[i]) {
            aiMyScore[i] = aiMyScore[i] + Math.floor((Math.random() * 16)); //put 16 so the score would be from 0 to 15
            aiOppScore[i] = aiOppScore[i] + Math.floor((Math.random() * 16));
            aiNumOT[i] = iOTCount + 1;
            sOTOutput = " with " + aiNumOT[i] + " OT ";
            iOTCount++;
        }

        //now time to calc the winner of two teams
        if (aiMyScore[i] < aiOppScore[i]) {
            iLossCount++;
            asOutput[i] = " and Loses";
        } else {
            iWinCount++;
            asOutput[i] = " and Wins";
        }

        //plug all this into output
        if (i == 0) {
            sOutput = sMyTeam + ": " + aiMyScore[i] + "-" + aiOppScore[i] + sOTOutput + asOutput[i];
        } else {
            sOutput = sOutput + "<br>" + sMyTeam + ": " + aiMyScore[i] + "-" + aiOppScore[i] + sOTOutput + asOutput[i];
        }
    }

    iWinPercentage = Number((iWinCount / iNumGames) * 100).toFixed(1);

    sOutput = sOutput + "<br><br>" + sMyTeam + " record is " + iWinCount + "-" + iLossCount + " with a winning pct of " + iWinPercentage + "%";

    //Assign the contents of the variable output to the html tag outputGames
    document.getElementById("outputGames").innerHTML = sOutput;
}