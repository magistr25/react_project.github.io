import React from "react";
import s from './ProfileInfo.module.css';
import {Preloader} from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img className={s.wallpaper} src = 'https://avatars.mds.yandex.net/i?id=847d069a6b20589b3c9361f07feea6c0b8855d95-8184297-images-thumbs&n=13' alt = ''/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <div>{props.profile.aboutMe}</div>
                <div>Мои соцсети: {Object.keys(props.profile.contacts).map(key => (
                    <div key={key}>{props.profile.contacts[key]}</div>
                ))}
                </div>
               <ProfileStatus status={'hello'}/>
            </div>


        </div>
    )
}

export default ProfileInfo
