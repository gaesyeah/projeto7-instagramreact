import Post from './Post';
import {post_OBJ} from '../data';

export default function Posts() {

    return (
        <div className="posts_container">
            {post_OBJ.map(post => <Post dataPost={post} key={post.user}/>)}
        </div>
    );
}