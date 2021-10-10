export function VIPAttending(props) {
    const {vips} = props;
    return (
        <div className={"VIPS"}>
            <h1>The following VIPS are attending:</h1>
            {vips.filter(v => v.present === true).map((v) => <div key={v.mask}><p>{v.mask}</p></div>)}
        </div>)
};