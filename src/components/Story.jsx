export default function Story(props) {
    const {image, name} = props.dataStory;

    return (
        <div className="storie_div">
            <img className="storie_size" src="./assets/stories_background.jpg" />
            <img className="storie_img_size" src={image} />
            <p>{name}</p>
        </div>
    );
}