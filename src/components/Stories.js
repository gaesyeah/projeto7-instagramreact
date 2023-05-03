export default function Stories() {

    function story () {
        return (
            <div class="storie_div">
                <img class="storie_size" src="./assets/stories_background.jpg" />
                <img class="storie_img_size" src="./assets/storie_generico.png" />
                <p>Storie genérico</p>
            </div>
        );
    }

    const array_stories = [];
    for (let i = 0; i < 8; i++) {
        array_stories.push(story());
    }


    return (
        <div class="stories">

            <div class="stories_no_arrow">
                {array_stories.map(i => i)}
            </div>
            
            <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>

        </div>
    );
}
