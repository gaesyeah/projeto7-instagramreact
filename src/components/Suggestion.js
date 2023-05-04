export default function Suggestion(props) {
    return (
        <div class="others">
            <div class="left_part">
                <img class="img_margin_others" src={props.image} />
                <div class="text_part">
                    <div class="text_part_column">
                        <p class="text_bold">{props.name}</p>
                        <p class="text_2">segue você</p>
                    </div>
                </div>
            </div>
            <div class="right_part">
                <p class="text_3 text_seguir">seguir</p>
            </div>
        </div>
    );
}