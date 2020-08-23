/** Reducer that keeps track of the current size of the window*/
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