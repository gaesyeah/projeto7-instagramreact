import Suggestion from './Suggestion';
import {suggestion_OBJ} from '../data';

export default function Suggestions() {
    
    return (
        <>
            <div className="suggestion">
                <p className="text_3">Sugestões para você</p>
                <p className="text_3 text_ver">Ver tudo</p>
            </div>

            <div>
                {suggestion_OBJ.map(suggestion => <Suggestion dataSuggestion={suggestion}/>)}
            </div>
        </>
    );
}