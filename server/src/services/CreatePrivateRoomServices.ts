import { chatRooms } from "../http";

class CreatePrivateRoomServices {
  async execute(IdUsers: string[]) {
    const hash = Math.random().toString(36).substr(2, 9);
    const data = { IdUsers, IdChatRoom: hash };
    chatRooms.push(data);
    return data;
  }
}

export default new CreatePrivateRoomServices();
