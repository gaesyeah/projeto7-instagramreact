export default function NavBar() {
    return (
        <>
            <header className="top_bar_mobile">
                <div className="top_bar_mobile_fixed">
                    <ion-icon className="left" name="logo-instagram"></ion-icon>
                    <img className="img_size" src="./assets/logo.png" />
                    <ion-icon className="right" name="paper-plane-outline"></ion-icon>
                </div>
            </header>

            <header className="top_bar">
                <div className="top_bar_fixed">
                    <div className="left top_bar_lateral">
                        <ion-icon name="logo-instagram"></ion-icon>
                        <hr />
                        <img className="img_size" src="./assets/logo.png" />
                    </div>
                    <input className="top_bar_center" type="text" placeholder="Pesquisar" />
                    <div className="right top_bar_lateral">
                        <ion-icon name="paper-plane-outline"></ion-icon>
                        <ion-icon name="compass-outline"></ion-icon>
                        <ion-icon className="heart" name="heart-outline"></ion-icon>
                        <ion-icon name="person-outline"></ion-icon>
                    </div>
                </div>
            </header>
        </>
    );
}