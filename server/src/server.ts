import { server } from "./http";
import "./websocket/ChatServices";

server.listen(4000, () => console.log("Server is running!"));

export { server };
