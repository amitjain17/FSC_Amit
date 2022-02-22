
export default (data = [{ status: '', UserName: 'LOGIN' }, { Food: "" }], action) => {
    switch (action.type) {
        case "STATUS":
            console.log(((action.payload.response).split(" ")).slice(1).join(" "));
            const reply_status = (action.payload.response).split(" ");
            return [{ status: reply_status[0], UserName: ((action.payload.response).split(" ")).slice(1).join(" ") }, { ...data[1] }];
        case "SIGNUP":
            const reply_signUp = (action.payload.response).split(" ");
            return [{ status: reply_signUp[0], UserName: ((action.payload.response).split(" ")).slice(1).join(" ") }, { ...data[1] }];
        case "CREATE_FOOD":
            return [{ ...data[0] }, { Food: action.payload }]
        default:
            return data;
    }
}