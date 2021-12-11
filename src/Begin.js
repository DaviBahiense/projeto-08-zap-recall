
export default function Inicio(props){
    return(
        <main>
            <div className="content">
                <img className="logo" src="./assets/logo.png" alt="logo" />
                <button onClick= {() => props.setFirst('flashCard')} data-identifier="start-zap-recall">
                    Praticar React
                    <img src="./assets/next.png" alt="next" />
                </button>
            </div>
        </main>
    )
}