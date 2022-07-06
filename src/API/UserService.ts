import axios from "axios";

export default class UserService {
    static async getAll(limit = 3, page = 1) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;
    }

    static async getUserById(id: number) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id);
        return response;
    }
}