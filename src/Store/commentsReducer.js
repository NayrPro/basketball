const comments = []

for(let i=0; i<45; i++){
    comments.push([])
}

const INITIAL_STATE = {
    comments: comments,
    username: "",
    comment: ""
}

function commentsReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "CMT":
            return{
                ...state,
                comment: action.payload
            };
        case "USER":
            return{
                ...state,
                username: action.payload
            };
        case "CMTS":
            return{
                ...state,
                comments: action.payload
            };
        default: return state;
    }
}

export default commentsReducer;