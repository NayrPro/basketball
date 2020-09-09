function videoOptionsReducer(state = {option: "description"}, action){
    switch (action.type) {
        case "DESCRIPTION":
            return{
                option: "description"
            };
        case "COMMENTS":
            return{
                option: "comments"
            };
        default: return state;
    }
}

export default videoOptionsReducer;