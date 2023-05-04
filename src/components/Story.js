export default function Story(props) {
    return (
        <div class="storie_div">
            <img class="storie_size" src="./assets/stories_background.jpg" />
            <img class="storie_img_size" src={props.image} />
            <p>{props.name}</p>
        </div>
    );
}