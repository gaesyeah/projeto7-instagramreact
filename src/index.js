import ReactDOM from 'react-dom';

function App() {
    return (
        <div class="page">

            <div class="top_bar_mobile">
                <div class="top_bar_mobile_fixed">
                    <ion-icon class="left" name="logo-instagram"></ion-icon>
                    <img class="img_size" src="./assets/logo.png" />
                    <ion-icon class="right" name="paper-plane-outline"></ion-icon>
                </div>
            </div>

            <div class="top_bar">
                <div class="top_bar_fixed">
                    <div class="left top_bar_lateral">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <hr />
                        <img class="img_size" src="./assets/logo.png" />
                    </div>
                    <input class="top_bar_center" type="text" placeholder="Pesquisar" />
                    <div class="right top_bar_lateral">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon class="heart" name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="ALL_side_bar">
                <div class="ALL">
                    <div class="stories">
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie1</p>
                        </div>
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie2</p>
                        </div>
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie3</p>
                        </div>
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie4</p>
                        </div>
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie5</p>
                        </div>
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie6</p>
                        </div>
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie7</p>
                        </div>
                        <div class="storie_div">
                            <img class="storie_size" src="./assets/stories_background.jpg" />
                            <img class="storie_img_size" src="./assets/storie_generico.png" />
                            <p>storie8</p>
                        </div>
                        <ion-icon class="arrow" name="chevron-forward-circle"></ion-icon>
                    </div>
                    <div class="posts_container">
                        <div class="post">
                            <div class="post_top">
                                <div class="post_top_left">
                                    <img class="icon" src="./assets/storie_generico.png" />
                                    <p>titulo genérico</p>
                                </div>
                                <div class="post_top_down_right">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>
                            <img class="post_img_size" src="./assets/perdi.png" />
                            <div class="post_bottom_container">
                                <div class="post_bottom">
                                    <div class="post_down_left">
                                        <ion-icon class="heart" name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div class="post_top_down_right">
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="left_full bottom likes_info">
                                    <img class="left small_img" src="./assets/storie_generico.png" />
                                    <p class="text_info">
                                        Curtido por <strong>algúem aí</strong> e <strong>outras 654.865 pessoas</strong>
                                    </p>
                                </div>
                                <p class="bottom margin text_info"><strong>titulo genérico</strong> meu cliente ai</p>
                                <p class="bottom margin text_info see_comments"><strong>Veja todos os 35 comentários</strong></p>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano1</strong> eu ai</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano2</strong> perdi tudo</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano3</strong> gente e aqui que pede comida online?</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="send_comment">
                                    <input type="text" placeholder="Add a comment..."></input>
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post_top">
                                <div class="post_top_left">
                                    <img class="icon" src="./assets/storie_generico.png" />
                                    <p>titulo genérico</p>
                                </div>
                                <div class="post_top_down_right">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>
                            <video class="post_img_size" controls>
                                <source src="./assets/video.mp4" type="video/mp4" />
                                <source src="./assets/video.ogg" type="video/ogg" />
                            </video>
                            <div class="post_bottom_container">
                                <div class="post_bottom">
                                    <div class="post_down_left">
                                        <ion-icon class="heart" name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div class="post_top_down_right">
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="left_full bottom likes_info">
                                    <img class="left small_img" src="./assets/storie_generico.png" />
                                    <p class="text_info">
                                        Curtido por <strong>algúem aí</strong> e <strong>outras 654.865 pessoas</strong>
                                    </p>
                                </div>
                                <p class="bottom margin text_info"><strong>titulo genérico</strong> ó que fofo gente</p>
                                <p class="bottom margin text_info see_comments"><strong>Veja todos os 35 comentários</strong></p>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano1</strong> oxe, ta mutado pra vcs tmb?</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano2</strong> acho que seu celular queimou</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano3</strong> aqui tmb</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="send_comment">
                                    <input type="text" placeholder="Add a comment..."></input>
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                        <div class="post">
                            <div class="post_top">
                                <div class="post_top_left">
                                    <img class="icon" src="./assets/storie_generico.png" />
                                    <p>titulo genérico</p>
                                </div>
                                <div class="post_top_down_right">
                                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                                </div>
                            </div>
                            <img class="post_img_size" src="./assets/jojo.jpg" />
                            <div class="post_bottom_container">
                                <div class="post_bottom">
                                    <div class="post_down_left">
                                        <ion-icon class="heart" name="heart-outline"></ion-icon>
                                        <ion-icon name="chatbubble-outline"></ion-icon>
                                        <ion-icon name="paper-plane-outline"></ion-icon>
                                    </div>
                                    <div class="post_top_down_right">
                                        <ion-icon name="bookmark-outline"></ion-icon>
                                    </div>
                                </div>
                                <div class="left_full bottom likes_info">
                                    <img class="left small_img" src="./assets/storie_generico.png" />
                                    <p class="text_info">
                                        Curtido por <strong>algúem aí</strong> e <strong>outras 654.865 pessoas</strong>
                                    </p>
                                </div>
                                <p class="bottom margin text_info"><strong>titulo genérico</strong> saudades bob esponja</p>
                                <p class="bottom margin text_info see_comments"><strong>Veja todos os 35 comentários</strong></p>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano1</strong> oxe quem é essa?</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano2</strong> ss sdds</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="bottom margin comments">
                                    <p class="no_margin text_info"><strong>fulano3</strong> oi gente</p>
                                    <ion-icon class="mini_heart" name="heart-outline"></ion-icon>
                                </div>
                                <div class="send_comment">
                                    <input type="text" placeholder="Add a comment..."></input>
                                    <button>Send</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="side_bar">
                    <div class="side_bar_fixed">
                        <div class="first">
                            <div class="left_part">
                                <img class="img_margin_first" src="./assets/storie_generico.png" />
                                <div class="text_part">
                                    <div class = "row">
                                        <p class="text_bold">USER_NAME</p>
                                        <ion-icon class ="pen" name="pencil-sharp"></ion-icon>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="suggestion">
                            <p class="text_3">Sugestões para você</p>
                            <p class="text_3 text_ver">Ver tudo</p>
                        </div>
                        <div>
                            <div class="others">
                                <div class="left_part">
                                    <img class="img_margin_others" src="./assets/storie_generico.png" />
                                    <div class="text_part">
                                        <div class="text_part_column">
                                            <p class="text_bold">nome genérico</p>
                                            <p class="text_2">segue você</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="right_part">
                                    <p class="text_3 text_seguir">seguir</p>
                                </div>
                            </div>
                            <div class="others">
                                <div class="left_part">
                                    <img class="img_margin_others" src="./assets/storie_generico.png" />
                                    <div class="text_part">
                                        <div class="text_part_column">
                                            <p class="text_bold">nome genérico</p>
                                            <p class="text_2">segue você</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="right_part">
                                    <p class="text_3 text_seguir">seguir</p>
                                </div>
                            </div>
                            <div class="others">
                                <div class="left_part">
                                    <img class="img_margin_others" src="./assets/storie_generico.png" />
                                    <div class="text_part">
                                        <div class="text_part_column">
                                            <p class="text_bold">nome genérico</p>
                                            <p class="text_2">segue você</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="right_part">
                                    <p class="text_3 text_seguir">seguir</p>
                                </div>
                            </div>
                            <div class="others">
                                <div class="left_part">
                                    <img class="img_margin_others" src="./assets/storie_generico.png" />
                                    <div class="text_part">
                                        <div class="text_part_column">
                                            <p class="text_bold">nome genérico</p>
                                            <p class="text_2">segue você</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="right_part">
                                    <p class="text_3 text_seguir">seguir</p>
                                </div>
                            </div>
                            <div class="others">
                                <div class="left_part">
                                    <img class="img_margin_others" src="./assets/storie_generico.png" />
                                    <div class="text_part">
                                        <div class="text_part_column">
                                            <p class="text_bold">nome genérico</p>
                                            <p class="text_2">segue você</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="right_part">
                                    <p class="text_3 text_seguir">seguir</p>
                                </div>
                            </div>
                        </div>
                        <div class="desc">
                            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
                        </div>
                        <div class="desc">
                            <p>© 2021 INSTAGRAM DO FACEBOOK</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bottom_bar_mobile">
                <div class="bottom_bar_mobile_fixed">
                    <ion-icon class="left" name="home-sharp"></ion-icon>
                    <ion-icon name="search-sharp"></ion-icon>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <ion-icon class="heart" name="heart-outline"></ion-icon>
                    <ion-icon class="right" name="person-outline"></ion-icon>
                </div>
            </div>

        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.root'));