
export default (data = [{ status: '', UserName: 'LOGIN' }], action) => {
    switch (action.type) {
        case "STATUS":
            console.log(((action.payload.response).split(" ")).slice(1).join(" "));
            const reply_status = (action.payload.response).split(" ");
            return [{ status: reply_status[0], UserName: ((action.payload.response).split(" ")).slice(1).join(" ") }];
        case "SIGNUP":
            const reply_signUp = (action.payload.response).split(" ");
            return [{ status: reply_signUp[0], UserName: ((action.payload.response).split(" ")).slice(1).join(" ") }];
        default:
            return data;
    }
}