export default function Post(props) {
    return (
        <div class="post">
            <div class="post_top">
                <div class="post_top_left">
                    <img class="icon" src={props.user_img} />
                    <p>{props.user}</p>
                </div>
                <div class="post_top_down_right">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <img class="post_img_size" src={props.image} />
            <div class="post_bottom_container">
                <div class="post_bottom">
                    <div class="post_down_left">
                        <ion-icon class="heart" name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="post_top_down_right">
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>
                <div class="left_full bottom likes_info">
                    <img class="left small_img" src={props.comment_img} />
                    <p class="text_info">
                        Curtido por <strong>{props.user_comment}</strong> e <strong>outras {props.likes} pessoas</strong>
                    </p>
                </div>
                <p class="bottom margin text_info"><strong>{props.user}</strong> {props.title}</p>
                <p class="bottom margin text_info see_comments"><strong>Veja todos os {props.N_comments} comentários</strong></p>
                <div class="bottom margin comments">
                    <p class="no_margin text_info"><strong>fulano1</strong> {props.comment1}</p>
                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                </div>
                <div class="bottom margin comments">
                    <p class="no_margin text_info"><strong>fulano2</strong> {props.comment2}</p>
                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                </div>
                <div class="bottom margin comments">
                    <p class="no_margin text_info"><strong>fulano3</strong> {props.comment3}</p>
                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                </div>
                <div class="send_comment">
                    <input type="text" placeholder="Add a comment..."></input>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}