import axios from "axios";

export default class UserService {
    static async getAll() {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            return response.data;
        } catch (event) {
            console.log(event);
        }
    }
}