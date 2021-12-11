export default function FlashCard(props){
    return(
        <div className="flashCardContent" >
            <img src="./assets/logo-mini.png" alt="mini-logo" />
            <div className="flashCard" data-identifier="flashcard">
                <div className="card">
                    <span className="position" data-identifier="counter">{props.indice + 1}/3</span>
                    <span className="descrition">{props.obj[props.indice].question}</span>
                    <img onClick= {() => props.setSecond('turnFlashCard')}  src="./assets/turn.png" alt="turn" data-identifier="arrow"/>
                </div>
            </div>
        </div>
    )
}