import React from "react";
import s from "./Dialogs.module.css"
import DialogItem from './DialogItem/DialogItem'
import Message from "./Message/Message";


const Dialogs = (props) => {


    let dialogsElements = props.dialogsPage.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m=><Message message={m.message} id={m.id}/>)

    let newMessageElement = React.createRef();
    let addMessage = ()=>{
        props.addMessage();

    }

    let onMessageChange=()=>{
        let text = newMessageElement.current.value;
        props.updateNewPostMessage(text);

    }

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>


            < div className={s.messages}>

                {messagesElements}
            </div>

            <div>
                <div>
                    <textarea ref = {newMessageElement} value={props.dialogsPage.newMessageText} onChange={onMessageChange}></textarea>

                </div>
                <div>
                    <button onClick={addMessage}>addPost</button>
                </div>

            </div>

        </div>

    )
}
export default Dialogs