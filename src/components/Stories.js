export default function Stories() {

    function Story () {
        return (
            <div class="storie_div">
                <img class="storie_size" src="./assets/stories_background.jpg" />
                <img class="storie_img_size" src="./assets/storie_generico.png" />
                <p>Storie genérico</p>
            </div>
        );
    }

    const array_Story = [];
    for (let i = 0; i < 8; i++) {
        array_Story.push(Story());
    }

//--------------------------------------------------------------

    return (
        <div class="stories">

            <div class="stories_no_arrow">
                {array_Story.map(i => i)}
            </div>
            
            <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>

        </div>
    );
}
