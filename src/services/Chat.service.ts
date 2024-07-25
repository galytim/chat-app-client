import axios, { AxiosResponse } from "axios";
import { IChat } from "../interfaces/chat";

class ChatService {
  static async getComments(): Promise<AxiosResponse<IChat[]>> {
    const apiUrl: string = "https://jsonplaceholder.typicode.com/";
    return await axios.get(`${apiUrl}/comments?_limit=10`);
  }
}

export default ChatService;
