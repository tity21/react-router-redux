const PrevState = {
    dataList: []
}
const Reducer = (state = PrevState, action) => {
    const { type, payload } = action
    switch (type) {
        // case DATA:
        //     return { ...state, dataList: payload }//{ ...state, dataList: [...payload] }
        default:
            return state
    }

}
export default Reducer