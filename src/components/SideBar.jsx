import User from './User';
import Suggestions from './Suggestions';

export default function SideBar() {
    return (
        <div className="side_bar">
            <div className="side_bar_fixed">

            <User />
            <Suggestions />

            <div className="desc">
                <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •Termos • Localizações • Contas mais relevantes • Hashtags • Idioma</p>
            </div>
            <div className="desc">
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
            </div>

            </div>
        </div>
    );
}