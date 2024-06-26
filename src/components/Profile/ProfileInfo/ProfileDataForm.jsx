import React from "react";
import s from './ProfileInfo.module.css';
import {createField, Input, TextArea} from "../../common/formsControls/formsControls";
import {reduxForm} from "redux-form";




const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>save</button>
        </div>
        <div>
            <b>Full Name</b>: {createField("Full Name", "fullName", [], Input)}
        </div>
        <div>
            <b>Looking for a job</b>: {createField("", "lookingForAJob", [], Input, {type: "checkbox"})}
        </div>
        <div>
            <b>My professional skills</b>: {createField("My professional skills", "lookingForAJobDescription", [], TextArea)}
        </div>
        <div>
            <b>About me</b>: {createField("About me", "aboutMe", [], TextArea)}
        </div>
        <div>
            <b>Contacts</b>: {Object.keys(profile.contacts).map(key=> {
                return <div className={s.contact}>
                    <b>{key}:</b>{createField(`${key}`, `contacts.${key}`, [], Input)}
                </div>;
        })}
        </div>

    </form>
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);
export default ProfileDataFormReduxForm;
