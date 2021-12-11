import Begin from "./Begin"
import FlashCard from "./FlashCard"
import TurnFlashCard from "./TurnFlashCard"
import Black from "./Black"
import Red from "./Red"
import Green from "./Green"
import Yellow from "./Yellow"
import Win from "./Win"
import Lose from "./Lose"
import react from "react"

export default function App(){ 
    const game = [
        {question: "O que é JSX?", answer: "Uma extensão de linguagem do JavaScript"},
        {question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces"},
        {question: "Componentes devem iniciar com __", answer: "Letra maiúscula"}
        ]

        const [change, setChange] = react.useState('beginPage')
    
        const [indice, setIndice] = react.useState(0)

        const [redClick, setRedClick] = react.useState(false)
        

        const page = 
            {
                beginPage: <Begin setFirst={manage} />,
                flashCard: <FlashCard setSecond={manage} obj={game} indice={indice}/>,
                turnFlashCard: <TurnFlashCard setThird={manage} obj={game} indice={indice}/>,
                blackCard: <Black setFirst={setChange} obj={game} indice={indice} returning={ returning }/>,
                redCard: <Red setFirst={setChange} obj={game} indice={indice} returning={ returning } setRedClick={setRedClick}/>,
                greenCard: <Green setFirst={setChange} obj={game} indice={indice} returning={ returning }/>,
                yellowCard: <Yellow setFirst={setChange} obj={game} indice={indice} returning={ returning }/>  
            }
          
    function returning() {
        setIndice(() =>indice + 1) 
        if (indice === 3){
            
        }
        
    }
    
    
    function manage(string){
        setChange(string)
    }

    return(
        <div>
           {page[change]}
        </div>
    )
}