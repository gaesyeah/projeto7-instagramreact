import Story from './Story';
import {story_OBJ} from '../data';

export default function Stories() {

    return (
        <div class="stories">

            <div class="stories_no_arrow">
                {story_OBJ.map(i => <Story dataStory={i}/>)} 
            </div>

            <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>

        </div>
    );
}
