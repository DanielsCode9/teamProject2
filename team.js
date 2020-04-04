class Team //The Team class should have the following instance variables: 
{
    teamName; //teamName (String)
    wins; //wins (int)
    losses; //losses (int)
    winLossPct; //winLossPct (Double)
    games = []; //new Game();

    

    //AND the following methods:

    getTeam()
    {
        return this.teamName;
        //getTeam - when called, it returns the team name
    }

    setTeam(tName)
    {

        //setTeam - when called, it receives a parameter that is used to set the instance variable teamName
        this.teamName = tName;
    }

    setWinsLosses(numWins, numLosses) {
        //setWinsLosses - when called it receives TWO parameters used to set the wins and the losses instance variables. Wins is the first parameter and Losses is the second parameter. This method will also calculate the winLossPct Instance variable.
        this.wins = numWins;
        this.losses = numLosses;
        this.winLossPct = (this.wins / this.losses);
    }

    getWins() {
        //getWins - when called it returns the number of wins
        return this.wins;
    }

    getLosses() {
        //getLosses - when called it returns the number of losses
        return this.losses;
    }

    calcWinLossPct(NewWins, NewLosses) {
        //calcWinLossPct - calculates and updates the winLossPct attribute
        this.wins = this.wins + NewWins;
        this.losses = this.losses + NewLosses;
        this.winLossPct = (this.wins/ this.losses);
        return this.winLossPct;
    }
}



class Game //The Game class will have the attributes:
{
    myScore; //my team score (int)

    theirscore; //opp team score(int)

    winOrloss; //winOrLoss (string for Wins or Losses)

    constructor(iMyScore, itScore, wOrL) //This class should have a constructor that receives all 3 parameters to populate the attributes.
    {
        this.myScore = iMyScore;
        this.theirscore = itScore;
        this.winOrloss = wOrL;
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

    this.totalPointsFor = 0;
    this.totalPointsAgainst = 0;
/* constructor(iTotalPointsFor, iTotalPointsAgainst)
    {
        //super(sTeamName, iWins, iLosses, iWinLossPct, aoGames);
        this.totalPointsFor = iTotalPointsFor;
        this.totalPointsAgainst = iTotalPointsAgainst;
    } */

   addPointsFor(iTotalPointsFor)
   {
        this.totalPointsFor = this.totalPointsFor + iTotalPointsFor;
   }

   addPointsAgainst(iTotalPointsAgainst)
   {
        this.totalPointsAgainst = this.totalPointsAgainst + iTotalPointsAgainst;
   }

   getAllPoints()
   {
        return("Total points for: " + this.totalPointsFor + "<br>" + "Total points against: " + this.totalPointsAgainst);
   }
}//// the parent does not have a constructor so we do not need to call super

function playGame()
{   
    //have an object array for teams
    //have an oject of team
    //in a for loop grap the contents of the li and store the data on the new objects using the attributes. 
    var aoBasketballTeam = [];
    var liID; 

    for (let iListId = 0; iListId < 10; iListId++) { //loop to gather all the team names
        oBasketball = new BasketballTeam();
        aoBasketballTeam[iListId] = oBasketball;

        liID = ("n" + (iCountOne+1)); //variable that changes with iCountOne to change which id tag the function chooses
        aoBasketballTeam[iListId].teamName = document.getElementById(liID).innerHTML;
    }

    for (iCountOne = 0; iCountOne < 10; iCountOne++)
    {
        //Used throughout function
        var aiTeamOneScore = [];
        var aiTeamTwoScore = [];

        //used when calculating score and for keeping track of what to say in output for each game
        //var iLossCount = 0; //used to keep track of num losses within loop
        //var homeWinstatus;
        //var iWon = 0; //used to keep track of num wis within loop
        var asOutput = [];

        //Usec in last part of each iteration of top for loop
        var sOutput = "";
        var iWinPercentage;

        //for loop to create scores for both myTeam and Opp array, compare, and calc overtime in sub loop
        for (iCountTwo = 1; iCountTwo < 10; iCountTwo++) {
            aoBasketballTeam[iCountOne].getTeam();
            aoBasketballTeam[iCountTwo].getTeam();

            //use mod to determine odd (i % 2 == 1; away) or even (i % 2 == 0; home)
            aiTeamOneScore[iCountOne] = Math.floor((Math.random() * 101)) + 5; //I put * 101 because the score needs to be between 0 and 100
            aiTeamTwoScore[iCountOne] = Math.floor((Math.random() * 101));
            
            
            aiTeamOneScore.push(Math.floor((Math.random() * 101)));
            aiTeamTwoScore.push(Math.floor((Math.random() * 101)) + 5);

            //while two scores are even execute loop until they aren't
            while (aiTeamOneScore[iCountOne] == aiTeamTwoScore[iCountOne]) {
                aiTeamOneScore[iCountOne] = aiTeamOneScore[iCountOne] + Math.floor((Math.random() * 16)); //put 16 so the score would be from 0 to 15
                aiTeamTwoScore[iCountOne] = aiTeamTwoScore[iCountOne] + Math.floor((Math.random() * 16));
            }

            while (aiTeamOneScore[iCountTwo] == aiTeamTwoScore[iCountTwo]) {
                aiTeamOneScore[iCountTwo] = aiTeamOneScore[iCountTwo] + Math.floor((Math.random() * 16)); //put 16 so the score would be from 0 to 15
                aiTeamTwoScore[iCountTwo] = aiTeamTwoScore[iCountTwo] + Math.floor((Math.random() * 16));
            }

            aoBasketballTeam[iCountOne].addPointsFor(aiTeamOneScore[iCount]); //first team object uses a method to add their points for the first game score
            aoBasketballTeam[iCountOne].addPointsAgainst(aiTeamTwoScore[iCount]);//first team object uses a method to update the points against
            aoBasketballTeam[iCountOne].addPointsFor(aiTeamOneScore[(iCount + 1)]);//first team object uses a method to update the points for its second game. 
            aoBasketballTeam[iCountOne].addPointsAgainst(aiTeamTwoScore[(iCount + 1)]);//first team object uses a method to update the points for their oppenent for the second team.
            
            aoBasketballTeam[(iCount + 1)].addPointsFor(aiTeamTwoScore[iCount]);//second team object uses a method to add their points for the first game score
            aoBasketballTeam[(iCount + 1)].addPointsAgainst(aiTeamOneScore[(iCount)]);//Second team object uses a method to update the points against
            aoBasketballTeam[(iCount + 1)].addPointsFor(aiTeamTwoScore[iCount]);//Second team object uses a method to update the points for its second game. 
            aoBasketballTeam[(iCount + 1)].addPointsAgainst(aiTeamOneScore[(iCount + 1)]);//Second team object uses a method to update the points for their oppenent for the second team.
           

            //now time to calc the winner of two teams
            if (aiTeamOneoScore[iCountOne] < aiTeamTwoScore[iCountOne]) 
            {
                oGame1 = new Game(aiTeamOneScore[iCountOne], aiTeamTwoScore[iCountOne], "loss");
                oGame2 = new Game(aiTeamTwoScore[iCountOne], aiTeamOneScore[iCountOne], "win");
                aoBasketballTeam[iCountOne].games.push(oGame1);
                aoBasketballTeam[iCountTwo].games.push(oGame2);
 
                //aoBasketballTeam[iCountOne].myScore = aiTeamOneScore
             
            } else {
               oGame1 = new Game(aiTeamOneScore[iCountOne], aiTeamTwoScore[iCountOne], "win");
                oGame2 = new Game(aiTeamTwoScore[iCountOne], aiTeamOneScore[iCountOne], "win");
                aoBasketballTeam[iCountOne].games.push(oGame1);            }

            //if statement for the second team to be given to the oteam and ogame functions
            if (aiTeamOneScore[(iCountOne + 1)] < aiTeamTwoScore[(iCountOne + 1)]) 
            {
                oGame1 = new Game(aiTeamOneScore[(iCountOne + 1)], aiTeamTwoScore[iCountOne + 1], "loss");
                oGame2 = new Game(aiTeamTwoScore[(iCountOne + 1)], aiTeamOneScore[(iCountOne + 1)], "win");
                aoBasketballTeam[iCountOne].games.push(oGame1);
                aoBasketballTeam[iCountTwo].games.push(oGame2);
                //aoBasketballTeam[iCountOne].myScore = aiTeamOneScore
             
            } else {
                oGame1 = new Game(aiTeamOneScore[(iCountOne + 1)], aiTeamTwoScore[(iCountOne + 1)], "win");
                oGame2 = new Game(aiTeamTwoScore[(iCountOne + 1)], aiTeamOneScore[(iCountOne + 1)], "win");
                aoBasketballTeam[iCountOne].games.push(oGame1);
                aoBasketballTeam[iCountTwo].games.push(oGame2);
            }
            
        }

        iWinPercentage = Number((iWinCount / iNumGames) * 100).toFixed(1);


        aoBasketballTeam[iCount].games[iCount]


        /*
When the user clicks on the Play Game button you need to simulate an entire season.

You will first create an array of team objects for each team displayed on the html form in the WCC group.

Each team will play the other team 2 times, once as the home team and once as the visitor. The home team gets an extra 5 points. 
You will generate random numbers for each of the teams from 0 to 100. 
If there is a tie, you will play an overtime that generates a new random number score up to 15 points. 
This score will be added to the previous score. Do NOT add the extra bonus of 5 points for home teams during the overtime portion. If there is another tie, do another overtime period generating 2 new random numbers and adding it to the total score. Keep doing this until there is no tie.

When the game is over you will update the totalPointsFor and the totalPointsAgainst attributes by calling the methods (NOT using the attribute).

You will also update the wins and the losses for each team as a game is completed. You will call the calcWinLossPct method to update the winLossPct attribute.

You will also need to add a new game object to the games attribute for the team and make sure the constructor is appropriately called to populate myScore, theirScore, and winOrLoss.

Each team will play the other teams in the list 2 times but they will not play each other more than that.

____

Once the season is over you will sort the arrays based upon the wins and display all of the teams dynamically to the output "p" tag.

Make sure you use arrays of objects. Make sure you add appropriate comments. The assignment requirements are worth 90% so go the extra mile and make it look good for the extra 10 points.
 */
    }