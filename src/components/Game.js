function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function Choose(props) {
    const {game} = props;
    let random = getRandomInt(game.length);
    let idBeginning = 0
    let idMiddle = 0
    let idFinale = 0
    if (game.id == random&&game.type=="Beginning"){
        idBeginning = game.id;
    }
    else{random = getRandomInt(game.length)}
    if (game.id == random&&game.type=="Middle"){
        idMiddle = game.id;
    }
    else{random = getRandomInt(game.length)}
    if (game.id == random&&game.type=="Finale"){
        idFinale = game.id;
    }
    else{random = getRandomInt(game.length)}
    return(
        idBeginning,idMiddle,idFinale
    )
}
export function SelectGameplan(props) {
    const {games} = props;
    let plan = games.forEach(Choose)
    return (
        <div className={"selection"}>
            <h1>These are the following games you will play:</h1>
            <p>{plan}</p>
        </div>
    )
}