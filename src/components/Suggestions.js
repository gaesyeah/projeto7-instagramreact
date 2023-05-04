import Suggestion from './Suggestion';

export default function Suggestions() {

    const suggestion_OBJ = [
        {
            image: './assets/0_dog.webp',
            name: 'primeiro doguinho'
        },
        {
            image: './assets/1_dog.png',
            name: 'segundo doguinho'
        },
        {
            image: './assets/2_dog.webp',
            name: 'terceiro doguinho'
        },
        {
            image: './assets/3_dog.png',
            name: 'quarto doguinho'
        },
        {
            image: './assets/4_dog.png',
            name: 'quinto doguinho'
        }
    ]
    
    return (
        <div>

            <div class="suggestion">
                <p class="text_3">Sugestões para você</p>
                <p class="text_3 text_ver">Ver tudo</p>
            </div>

            <div>
                {suggestion_OBJ.map(i => <Suggestion image={i.image} name={i.name}/>)}
            </div>

        </div>
    );
}