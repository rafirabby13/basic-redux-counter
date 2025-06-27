const logger = (state:any) => (next:any) => (action:any) => {
    console.log(state.getState())
    console.log(action)
    next(action)
}

export default logger