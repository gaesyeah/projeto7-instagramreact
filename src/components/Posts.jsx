import Post from './Post';
import {post_OBJ} from '../data';

export default function Posts() {

    return (
        <div className="posts_container">
            {/* aqui eu usei somente um parametro para o props porque tem muitas propriedade nos objetos, seriam muitos parametros */}
            {post_OBJ.map(i => <Post dataPost={i}/>)}
        </div>
    );
}