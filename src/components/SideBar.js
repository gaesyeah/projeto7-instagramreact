import User from './User';
import Suggestions from './Suggestions';

export default function SideBar() {
    return (
        <div class="side_bar">
            <div class="side_bar_fixed">

            <User />
            <Suggestions />

            <div class="desc">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            </div>
            <div class="desc">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>

            </div>
        </div>
    );
}