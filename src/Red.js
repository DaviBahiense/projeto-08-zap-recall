export default function SelectedCard(props){
    function back(){
        props.returning()
        props.setFirst(() => 'flashCard')
        props.setRedClick(true)
    }
    return (
    <div className="flashCardContent" >
        <img src="./assets/logo-mini.png" alt="mini-logo" />
        <div className="flashCard" data-identifier="flashcard">
            <div className="card red">
                <div className="top">
                    <div></div>
                    <div className="title">{props.obj[0].question}</div>
                    <span className="position" data-identifier="counter">{props.indice + 1}/3</span>
                </div>
                <span className="descritionTurn">{props.obj[props.indice].answer}</span>
                <img src="./assets/turn.png" onClick= {back} alt="turn" data-identifier="arrow"/>
            </div>
        </div>
    </div>
    )
}