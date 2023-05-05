export default function Story(props) {
    const {image, name} = props.dataStory;

    return (
        <div class="storie_div">
            <img class="storie_size" src="./assets/stories_background.jpg" />
            <img class="storie_img_size" src={image} />
            <p>{name}</p>
        </div>
    );
}