const game = () => {
    let pScore = 0;
    let cScore = 0;


    // starting the game
    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };
    // play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand =>{
            hand.addEventListener('animationend', function(){
                this.style.animation = '';
            });
        });

        // computer Options
        const computerOptions = ["rock", "paper", "scissors"];


      options.forEach(option => {
         option.addEventListener("click", function(){
            //  computer choice
            const computerNumber = Math.floor(Math.random() * 3);
            const computerChoise = computerOptions[computerNumber];
            setTimeout(() => {
                // here is where we call compare hands 
            compareHands(this.textContent,computerChoise);


            // update image
                        playerHand.src = `./rock-paper-scissor-master/assets/${this.textContent}.png`;
                        computerHand.src = `./rock-paper-scissor-master/assets/${computerChoise}.png`;
                        
            }, 2000);
           
            playerHand.style.animation = "shakePlayer 2s ease";
            computerHand.style.animation = "shakeComputer 2s ease";
         });
      });

        
    };
    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    

    const compareHands = (playerChoice, computerChoise) => {
        // update text
        const winner = document.querySelector('.winner');
        // checking for tie
        if(playerChoice === computerChoise){
            winner.textContent = 'It is a tie';
            return;
        };
        // check for Rock
        if(playerChoice === 'rock'){
            if(computerChoise = 'scissors'){
                winner.textContent = 'player Wins';
                pScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'computer Wins';
                cScore++;
                updateScore();
                return;
            }
        }
        // check for paper
        if(playerChoice === 'paper'){
            if(computerChoise = 'scissors'){
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            }
        }
        // check for Scissors
        if(playerChoice === 'scissers'){
            if(computerChoise = 'rock'){
                winner.textContent = 'computer wins';
                cScore++;
                updateScore();
                return;
            }else{
                winner.textContent = 'player wins';
                pScore++;
                updateScore();
                return;
            };
        };
    };
    // Is call the inner function
    startGame();
    playMatch();
    
};

// start the game function
game();

