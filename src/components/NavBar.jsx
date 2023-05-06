export default function NavBar() {
    return (
        <>
            <header class="top_bar_mobile">
                <div class="top_bar_mobile_fixed">
                    <ion-icon class="left" name="logo-instagram"></ion-icon>
                    <img class="img_size" src="./assets/logo.png" />
                    <ion-icon class="right" name="paper-plane-outline"></ion-icon>
                </div>
            </header>

            <header class="top_bar">
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
            </header>
        </>
    );
}