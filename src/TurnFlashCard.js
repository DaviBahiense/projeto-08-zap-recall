export default function TurnFlashCard(){
    return (
        <div className="flashCardContent">
        <img src="./assets/logo-mini.png" alt="mini-logo" />
        <div className="flashCard">
            <div className="card">
                <div className="top">
                    <div></div>
                    <div className="title">O que é JSX?</div>
                    <span className="position">1/1</span>
                </div>
                <span className="descritionTurn">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non ullamcorper at quis eu. Malesuada iaculis viverra a tincidunt arcu nullam. Orci tortor arcu placerat id sit et. Elementum in erat cras tortor at auctor diam.</span>
                <div className="choice">
                    <div className="select learn">Aprendi agora</div>
                    <div className="select forget">Não lembrei</div>
                    <div className="select effort">Lembrei com esforço</div>
                    <div className="select zap">Zap!</div>
                </div>
            </div>
        </div>

    </div>
    )
}