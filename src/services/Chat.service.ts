import axios from "axios";

class ChatService{
    static async getComments() {
        const apiUrl: string = 'https://jsonplaceholder.typicode.com/';
        return await axios.get(`${apiUrl}/comments?_limit=10`);
    }

}

export default ChatService;