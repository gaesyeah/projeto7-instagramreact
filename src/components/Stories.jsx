import Story from './Story';
import {story_OBJ} from '../data';

export default function Stories() {

    return (
        <div className="stories">

            <div className="stories_no_arrow">
                {story_OBJ.map(story => <Story dataStory={story} key ={story.name}/>)} 
            </div>

            <ion-icon className="arrow" name="chevron-forward-circle"></ion-icon>

        </div>
    );
}
