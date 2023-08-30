import { messages } from "../http";

class GetMessageServices {
  execute(IdChatRoom: string) {
    const messagesRoom = messages.filter(
      (message) => message.roomID === IdChatRoom
    );
    return messagesRoom;
  }
}
export default new GetMessageServices();
