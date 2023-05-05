import Suggestion from './Suggestion';
import {suggestion_OBJ} from '../data';

export default function Suggestions() {
    
    return (
        <div>

            <div class="suggestion">
                <p class="text_3">Sugestões para você</p>
                <p class="text_3 text_ver">Ver tudo</p>
            </div>

            <div>
                {suggestion_OBJ.map(i => <Suggestion dataSuggestion={i}/>)}
            </div>

        </div>
    );
}