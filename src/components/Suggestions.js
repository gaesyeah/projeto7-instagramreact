export default function Suggestions() {

    function Suggestion() {
        return (
            <div class="others">
                <div class="left_part">
                    <img class="img_margin_others" src="./assets/storie_generico.png" />
                    <div class="text_part">
                        <div class="text_part_column">
                            <p class="text_bold">nome genérico</p>
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

    const array_Suggestion = [];

    for (let i = 0; i < 5; i++) {
        array_Suggestion.push(Suggestion());
    }

//--------------------------------------------------------------

    return (
        <div>

            <div class="suggestion">
                <p class="text_3">Sugestões para você</p>
                <p class="text_3 text_ver">Ver tudo</p>
            </div>

            <div>
                {array_Suggestion.map(i => <div>{i}</div>)}
            </div>

        </div>
    );
}