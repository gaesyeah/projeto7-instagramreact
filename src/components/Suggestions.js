export default function Suggestions() {

    function suggestion_children() {
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

    const suggestion_children_array = [];
    for (let i = 0; i < 5; i++) {
        suggestion_children_array.push(suggestion_children());
    }
    //------
    function Suggestion ({children}) {
        return <div>{children}</div>;
    }
//----------

    return (
        <div>

            <div class="suggestion">
                <p class="text_3">Sugestões para você</p>
                <p class="text_3 text_ver">Ver tudo</p>
            </div>

            <div>
                {suggestion_children_array.map(i => <Suggestion>{i}</Suggestion>)}
            </div>

        </div>
    );
}