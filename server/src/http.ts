import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
    credentials: true,
  },
});

export interface User {
  id: string;
  name: string;
}
export interface Message {
  to: string;
  text: string;
  roomID: string;
}
export interface ChatRoom {
  IdUsers: string[];
  IdChatRoom: string;
}
export const users: User[] = [];
export const messages: Message[] = [];
export const chatRooms: ChatRoom[] = [];
export { server, io };
