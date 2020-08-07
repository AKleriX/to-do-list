import * as axios from "axios";


// Получение promise от сервера
const getInitialState = () => {
    return axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5");
}

export default getInitialState;