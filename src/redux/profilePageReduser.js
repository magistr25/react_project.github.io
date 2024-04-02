const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initislState =  {
    posts: [
        {id: '1', message: 'Hi! How are uou?', likesCount: 12},
        {id: '2', message: 'It`s my first post', likesCount: 11},
        {id: '3', message: 'Blabla', likesCount: 3},
        {id: '4', message: 'dada', likesCount: 11},

    ],
    newPostText: 'it-kamasutra',

}
export const profilePageReduser = (state = initislState, action) => {
    switch (action.type) {

        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        }

        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }
        }
        default:
            return state
    }

}
export const addPostActionCreator = ()=> ({type:ADD_POST})

export const updateNewPostTextActionCreator = (text)=>
    ({type:UPDATE_NEW_POST_TEXT, newText: text})