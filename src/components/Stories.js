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

    const story_children_ARRAY = [];

    for (let i = 0; i < story_chidren_OBJ.length; i++) {
        story_children_ARRAY.push(() => { //faço push de uma função que retorna um html, e executo essa função em cada iteração map abaixo
            return (
                <div class="storie_div">
                    <img class="storie_size" src="./assets/stories_background.jpg" />
                    <img class="storie_img_size" src={story_chidren_OBJ[i].image} />
                    <p>{story_chidren_OBJ[i].name}</p>
                </div>
            );
        });
    }
    //-------
    
    function Story({children}) {
        return <div>{children}</div>;
    }
//----------

    return (
        <div class="stories">

            <div class="stories_no_arrow">
                {story_children_ARRAY.map(i => <Story>{i()}</Story>)} 
            </div>

            <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>

        </div>
    );
}
