import { chatRooms } from "../http";

class GetPrivateRoomByIdServices {
  execute(IdUsers: string[]) {
    const room = chatRooms.find(
      (room) =>
        room.IdUsers.includes(IdUsers[0]) && room.IdUsers.includes(IdUsers[1])
    );
    return room;
  }
}

export default new GetPrivateRoomByIdServices();
