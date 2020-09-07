function coursesEltReducer(state = {elt: 0}, action){
    switch (action.type) {
        case "ELT":
            return{
                elt: action.payload
            };
        case "QUIT":
            return{
                elt: 0
            };
        default: return state;
    }
}

export default coursesEltReducer;