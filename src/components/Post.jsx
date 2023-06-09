import { useState } from 'react';

export default function Post(props) {
    const {user_img, user, image, user_comment, N_likes, comment_img, title, N_comments, comment1, comment2, comment3} = props.dataPost;
    
    let [savePost, setSavePost] = useState('bookmark-outline');
    let [userLike, setUserLike] = useState('not');
    let [likes, setLikes] = useState(N_likes);
    let [iconLikes, setIconLikes] = useState('heart-outline');
    let [styleLikes, setStyleLikes] = useState('black');

    let [likeAnimation, setLikeAnimation] = useState('heart');
    let [toggleHide, setToggleHide] = useState(false);

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

    function heartAnimation() {
        setToggleHide(true);
        setTimeout(() => setLikeAnimation('heartAnimation'), 0);
        setTimeout(() => (setLikeAnimation('heart'), setToggleHide(false)), 500);
    }

    return (
        <div className="post" data-test="post">
            <div className="post_top">
                <div className="post_top_left">
                    <img className="icon" src={user_img} />
                    <p>{user}</p>
                </div>
                <div className="post_top_down_right">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div id='heartDiv'>
                <img
                    onDoubleClick={userLike === 'not' ? (()=> (changeLikes(), heartAnimation())) : undefined}
                    className="post_img_size"
                    src={image}
                    data-test="post-image"
                />
                {toggleHide && <ion-icon id={likeAnimation} name="heart"></ion-icon>}
            </div>
            <div className="post_bottom_container">
                <div className="post_bottom">
                    <div className="post_down_left">
                        <ion-icon
                            onClick={changeLikes}
                            id={styleLikes}
                            name={iconLikes}
                            data-test="like-post"
                        ></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div className="post_top_down_right">
                        <ion-icon
                            onClick={savePost === 'bookmark-outline' ? () => setSavePost('bookmark') : () => setSavePost('bookmark-outline')}
                            name={savePost}
                            id="hover"
                            data-test="save-post"
                        ></ion-icon>
                    </div>
                </div>
                <div className="left_full bottom likes_info">
                    <img className="left small_img" src={comment_img} />
                    <p data-test="likes-number" className="text_info">
                        Curtido por <strong>{user_comment}</strong> {likes >= 1 ? <span>e <strong>outras {likes} pessoas</strong></span> : undefined}
                    </p>
                </div>
                <p className="bottom margin text_info"><strong>{user}</strong> {title}</p>
                <p className="bottom margin text_info see_comments"><strong>Veja todos os {N_comments} comentários</strong></p>
                <div className="bottom margin comments">
                    <p className="no_margin text_info"><strong>fulano1</strong> {comment1}</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="bottom margin comments">
                    <p className="no_margin text_info"><strong>fulano2</strong> {comment2}</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="bottom margin comments">
                    <p className="no_margin text_info"><strong>fulano3</strong> {comment3}</p>
                    <ion-icon name="heart-outline"></ion-icon>
                </div>
                <div className="send_comment">
                    <input type="text" placeholder="Add a comment..."></input>
                    <button>Send</button>
                </div>
            </div>
        </div>
    );
}