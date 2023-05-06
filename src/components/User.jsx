import { useState } from 'react';

export default function User() {

    let [userName, setUserName] = useState('Sign in');
    let [userPhoto, setUserPhoto] = useState('./assets/user.webp');

    return (
        <div className="first">

            <div className="left_part">
                <img
                    onClick={() => setUserPhoto(prompt('Mande o link da sua foto'))} 
                    src={!userPhoto ? './assets/user.webp' : userPhoto} 
                    className="img_margin_first"
                    data-test="profile-image"
                />
                <div className="text_part">
                    <div className="row">
                        <p 
                            data-test="name" 
                            className="text_bold">
                            {!userName ? 'Sign in' : userName}
                        </p>
                        <ion-icon
                            onClick={() => setUserName(prompt('Qual o seu nome?'))}
                            name="pencil-sharp"
                            className="pen"
                            data-test="edit-name"
                        ></ion-icon>
                    </div>
                </div>
            </div>
            
        </div>
    );
}