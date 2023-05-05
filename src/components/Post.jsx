import { useState } from 'react';

export default function Post(props) {
    const {user_img, user, image, user_comment, N_likes, comment_img, title, N_comments, comment1, comment2, comment3} = props.dataPost;
    
    let [savePost, setSavePost] = useState('bookmark-outline');
    let [userLike, setUserLike] = useState('not');
    let [likes, setLikes] = useState(N_likes);
    let [iconLikes, setIconLikes] = useState('heart-outline');
    let [styleLikes, setStyleLikes] = useState('black');

    function changeLikes() {
        if (userLike === 'not') {
            setUserLike('yes');

            setLikes(likes + 1);
            setIconLikes('heart');
            setStyleLikes('red');
        } else {
            setUserLike('not');

            setLikes(likes - 1);
            setIconLikes('heart-outline');
            setStyleLikes('black');
        }
    }

    return (
        <div class="post">
            <div class="post_top">
                <div class="post_top_left">
                    <img class="icon" src={user_img} />
                    <p>{user}</p>
                </div>
                <div class="post_top_down_right">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <img
                onClick={() => {userLike === 'not' ? changeLikes() : undefined}}
                class="post_img_size"
                src={image}
            />
            <div class="post_bottom_container">
                <div class="post_bottom">
                    <div class="post_down_left">
                        <ion-icon
                            onClick={changeLikes}
                            style={{color: `${styleLikes}` }}
                            name={iconLikes}
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div class="post_top_down_right">
                        <ion-icon
                            onClick={() => {savePost === 'bookmark-outline' ? setSavePost('bookmark') : setSavePost('bookmark-outline')}}
                            name={savePost}
                        ></ion-icon>
                    </div>
                </div>
                <div class="left_full bottom likes_info">
                    <img class="left small_img" src={comment_img} />
                    <p class="text_info">
                        Curtido por <strong>{user_comment}</strong> {likes >= 1 ? <>e <strong>outras {likes} pessoas</strong></> : undefined}
                    </p>
                </div>
                <p class="bottom margin text_info"><strong>{user}</strong> {title}</p>
                <p class="bottom margin text_info see_comments"><strong>Veja todos os {N_comments} comentários</strong></p>
                <div class="bottom margin comments">
                    <p class="no_margin text_info"><strong>fulano1</strong> {comment1}</p>
                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                </div>
                <div class="bottom margin comments">
                    <p class="no_margin text_info"><strong>fulano2</strong> {comment2}</p>
                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                </div>
                <div class="bottom margin comments">
                    <p class="no_margin text_info"><strong>fulano3</strong> {comment3}</p>
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