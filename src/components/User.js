import { useState } from 'react';

export default function User() {

    let [userName, setUserName] = useState('Sign in');
    let [userPhoto, setUserPhoto] = useState('./assets/user.webp')

    return (
        <div class="first">

            <div class="left_part">
                <img 
                    class="img_margin_first" 
                    onClick={() => setUserPhoto(prompt('Mande o link da sua foto'))} 
                    src={!userPhoto ? './assets/user.webp' : userPhoto} 
                />
                <div class="text_part">
                    <div class="row">
                        <p class="text_bold">{!userName ? 'Sign in' : userName}</p>
                        <ion-icon onClick={() => setUserName(prompt('Qual o seu nome?'))} class="pen" name="pencil-sharp"></ion-icon>
                    </div>
                </div>
            </div>
            
        </div>
    );
}