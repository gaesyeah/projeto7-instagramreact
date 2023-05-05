import Post from './Post';
import {post_OBJ} from '../data';

export default function Posts() {

    return (
        <div class="posts_container">
            {post_OBJ.map(i => <Post user_img={i.user_img} user={i.user} image={i.image} comment_img={i.comment_img} user_comment={i.user_comment} likes={i.likes} title={i.title} N_comments={i.N_comments} comment1={i.comment1} comment2={i.comment2} comment3={i.comment3}/>)}
        </div>
    );
}