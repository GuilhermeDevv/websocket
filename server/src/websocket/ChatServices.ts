import { io, users } from "../http";
import CreateUserServices from "../services/CreateUserServices";
import GetAllUserServices from "../services/GetAllUserServices";
import RemoveUserServices from "../services/RemoveUserServices";
import CreatePrivateRoomServices from "../services/CreatePrivateRoomServices";
import GetPrivateRoomByIdServices from "../services/GetPrivateRoomByIdServices";
import SendMessageServices from "../services/SendMessageServices";
import GetMessageServices from "../services/GetMessageServices";

io.on("connection", (socket) => {
  console.log("Socket connected", socket.id);

  // quando o usuário se conectar, adiciona ele na lista de usuários
  socket.on("start", (name: string) => {
    CreateUserServices.execute({ name, id: socket.id });
  });

  // envia continuamente a lista de usuários para todos os usuários conectados
  socket.on("get_Users_on", async (callback) => {
    const data = await GetAllUserServices.execute();
    callback(data);
  });

  // quando o usuário desconectar, remove ele da lista de usuários e atualiza a lista de usuários para todos os usuários conectados
  socket.on("disconnect", async () => {
    console.log("Socket disconnected", socket.id);
    await RemoveUserServices.execute(socket.id);
  });

  // cria uma sala privada entre dois usuários
  socket.on("create_private_Room", async (IdUsers: string[], callback) => {
    const exist = GetPrivateRoomByIdServices.execute(IdUsers);
    if (exist) {
      callback(exist);
      return;
    }
    const room = await CreatePrivateRoomServices.execute(IdUsers);

    callback(room);
  });

  // salva uma mensagem para uma sala privada
  socket.on("send_message", (data: { msg: string; roomChatId: string }) => {
    SendMessageServices.execute({
      to: socket.id,
      msg: data.msg,
      IdChatRoom: data.roomChatId,
    });
  });

  // envia continuamente as mensagens para uma sala privada
  socket.on("get_messages_on", (IdChatRoom: string, callback) => {
    const messages = GetMessageServices.execute(IdChatRoom);
    callback(messages);
  });
});
