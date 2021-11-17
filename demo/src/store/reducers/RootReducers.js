const initState = {
    users: [
        {id: 1, name: 'Khuê Hồ'},
        {id: 2, name: 'Đình Trường'},
        {id: 3, name: 'Văn Tiến'}
    ],
    post: []
}

const RootReducers = (state = initState, action) => {

    switch (action.type) {
        case 'DELETE_USER':
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
            return {
                ...state, users
            };
        case 'ADD_USER':
            let id = Math.floor(Math.random() * 100);
            let user = {
                id: id,
                name: `name random ${id}`
            };
            return {
                ...state, users: [...state.users, user]
            };
        default:
            return state;
    }


}

export default RootReducers;
