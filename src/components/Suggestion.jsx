export default function Suggestion(props) {
    const {image, name} = props.dataSuggestion;
    
    return (
        <div className="others">
            <div className="left_part">
                <img className="img_margin_others" src={image} />
                <div className="text_part">
                    <div className="text_part_column">
                        <p className="text_bold">{name}</p>
                        <p className="text_2">segue você</p>
                    </div>
                </div>
            </div>
            <div className="right_part">
                <p className="text_3 text_seguir">seguir</p>
            </div>
        </div>
    );
}