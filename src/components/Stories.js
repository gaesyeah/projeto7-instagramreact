import Story from './Story';

export default function Stories() {

    const story_OBJ = [
        {
            image: './assets/0_number.png',
            name: 'Dona Maria'
        },
        {
            image: './assets/1_number.png',
            name: 'user one'
        },
        {
            image: './assets/2_number.png',
            name: 'user two'
        },
        {
            image: './assets/3_number.png',
            name: 'dev uber'
        },
        {
            image: './assets/4_number.png',
            name: 'user four'
        },
        {
            image: './assets/5_number.png',
            name: 'Jojofag Cult'
        },
        {
            image: './assets/6_number.png',
            name: 'user six'
        },
        {
            image: './assets/7_number.png',
            name: 'user seven'
        }
    ]

    return (
        <div class="stories">

            <div class="stories_no_arrow">
                {story_OBJ.map(i => <Story image={i.image} name={i.name}/>)} 
            </div>

            <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>

        </div>
    );
}
