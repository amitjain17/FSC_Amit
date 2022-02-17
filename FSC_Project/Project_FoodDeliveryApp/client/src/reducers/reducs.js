
export default (data = [], action) => {
    switch (action.type) {
        case "STATUS":
            return action.status;
        default:
            return data;
    }
}