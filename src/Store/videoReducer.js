const INITIAL_STATE = {
    display : "none",
    url : "",
    autoplay : "", 
    index : 0
}

function videoReducer(state = INITIAL_STATE, action){
    switch (action.type) {
        case "DISPLAY":
            return{
                ...state,
                display: action.payload
            };
        case "URL":
            return{
                ...state,
                url: action.payload
            };
        case "AUTOPLAY":
            return{
                ...state,
                autoplay: action.payload
            };
        case "INDEX":
            return{
                ...state,
                index: action.payload
            };    
        default: return state;
    }
}

export default videoReducer;