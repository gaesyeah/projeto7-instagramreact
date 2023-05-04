import Story from './Story';

export default function Stories() {

    const story_chidren_OBJ = [
        {
            image: './assets/0_number.png',
            name: 'zero'
        },
        {
            image: './assets/1_number.png',
            name: 'um'
        },
        {
            image: './assets/2_number.png',
            name: 'dois'
        },
        {
            image: './assets/3_number.png',
            name: 'três'
        },
        {
            image: './assets/4_number.png',
            name: 'quatro'
        },
        {
            image: './assets/5_number.png',
            name: 'cinco'
        },
        {
            image: './assets/6_number.png',
            name: 'seis'
        },
        {
            image: './assets/7_number.png',
            name: 'sétimo'
        }
    ]

    return (
        <div class="stories">

            <div class="stories_no_arrow">
                {story_chidren_OBJ.map(i => <Story image={i.image} name={i.name}/>)} 
            </div>

            <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>

        </div>
    );
}
