export function PlayersAndPricepool(props) {
    const {players} = props;
    return (
        <div>
            <h1>Remaining players</h1>
            {players.filter(p => p.status === true).map((p) => <div key={p.number}>{p}</div>)}
            <h2>Prize pool</h2>
            {players.filter(p => p.status === false).map((p) => <div key={p.number}>€{p.length*10000}</div>)}
                </div>
                )
            }