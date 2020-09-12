function windowSizeReducer(state = {windowSize : window.innerWidth}, action){
    switch (action.type) {
        case "RESIZE":
            return{
                windowSize: action.payload
            };
        default: return state;
    }
}

export default windowSizeReducer;