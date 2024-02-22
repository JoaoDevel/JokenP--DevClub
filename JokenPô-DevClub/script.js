const result = document.querySelector(".result")
const  myScore = document.querySelector("#Score")
const machineScore = document.querySelector("#ScoreMachine")

let myScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
} 

const playMachine = () => {
    const choices = ["rock", "paper", "scissors",]
    const randowNumber = Math.floor(Math.random() * 3)
    

    
    return choices[randowNumber]
}

const playTheGame = (human, machine) => {

    if(human === machine){
        result.innerHTML = "Voce empatou"
    } else if(
        (human === "paper" && machine === "rock") || 
        (human === "rock" && machine === "scissors") || 
        (human === "scissors" && machine === "paper")){

        result.innerHTML = "Voce ganhou"

        myScoreNumber++
            myScore.innerHTML = myScoreNumber

    } else{

        result.innerHTML = "Voce perdeu"

        machineScoreNumber ++
        machineScore.innerHTML = machineScoreNumber
       
    }

    

}