import { messages } from "../http";

interface SendMessageDTO {
  to: string;
  msg: string;
  IdChatRoom: string;
}

class SendMessageServices {
  execute({ msg, IdChatRoom, to }: SendMessageDTO) {
    messages.push({ to, text: msg, roomID: IdChatRoom });
  }
}
export default new SendMessageServices();
