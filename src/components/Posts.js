import Post from './Post';

export default function Posts() {

    const post_OBJ = [
        {
            user_img: './assets/3_number.png',
            user: 'dev uber',
            image: './assets/perdi.png',
            user_comment: 'quarto doguinho',
            comment_img: './assets/3_dog.png',
            title: 'meu cliente ai',
            N_comments: '276',
            comment1: 'eu ai',
            comment2: 'perdi tudo',
            comment3: 'gente e aqui que pede comida online?'
        },
        {
            user_img: './assets/1_number.png',
            user: 'Dona Maria',
            image: './assets/video_pausado.png',
            user_comment: 'quinto doguinho',
            comment_img: './assets/4_dog.png',
            title: 'ó que fofo gente',
            N_comments: '7',
            comment1: 'oxe, ta travado pra vcs tmb?',
            comment2: 'acho que seu celular queimou',
            comment3: 'bonitinhooo, mas ele ta parado pq? ta doente? deu pena dele'
        },
        {
            user_img: './assets/5_number.png',
            user: 'Jojofag Cult',
            image: './assets/jojo.jpg',
            user_comment: 'primeiro doguinho',
            comment_img: './assets/0_dog.webp',
            title: 'saudades bob esponja',
            N_comments: '5',
            comment1: 'oxe quem é essa?',
            comment2: 'ss sdds',
            comment3: 'oi gente'
        }
    ]

    return (
        <div class="posts_container">
            {post_OBJ.map(i => <Post user_img={i.user_img} user={i.user} image={i.image} comment_img={i.comment_img} user_comment={i.user_comment} likes={i.likes} title={i.title} N_comments={i.N_comments} comment1={i.comment1} comment2={i.comment2} comment3={i.comment3}/>)}
        </div>
    );
}