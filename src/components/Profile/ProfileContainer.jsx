import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profilePageReduser";
import {Redirect, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";



export class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId);
        }


    render() {

        return (


                <Profile {...this.props} profile={this.props.profile}/>


        )
    }


}




let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})







export default compose(

    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)