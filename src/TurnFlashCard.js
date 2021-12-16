export default function TurnFlashCard(props){
    
    return (
        <div className="flashCardContent">
        <img src="./assets/logo-mini.png" alt="mini-logo" />
        <div className="flashCard" data-identifier="flashcard">
            <div className="card">
                <div className="top">
                    <div></div>
                    <div className="title">O que é JSXasdsadgafs?</div>
                    <span className="position" data-identifier="counter">{props.indice+ 1}/3</span>
                </div>
                <span className="descritionTurn">{props.obj[props.indice].answer}</span>
                <div className="choice">
                    <div onClick= {() => props.setThird('blackCard')} className="select black">Aprendi agora</div>
                    <div onClick= {() => props.setThird('redCard')} className="select red">Não lembrei</div>
                    <div onClick= {() => props.setThird('greenCard')} className="select green">Lembrei com esforço</div>
                    <div onClick= {() => props.setThird('yellowCard')} className="select yellow">Zap!</div>
                </div>
            </div>
        </div>

    </div>
    )
}