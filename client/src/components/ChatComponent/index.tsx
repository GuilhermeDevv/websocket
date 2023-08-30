"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import io from "socket.io-client";
import { isNullishCoalesce } from "typescript";
import {
  UsersContainer,
  Container,
  Content,
  FirstLatter,
  InfoUser,
  Input,
  User,
  ChatOpenContainer,
  Chat,
  HeaderChat,
} from "./styles";

interface User {
  id: string;
  name: string;
}
export interface ChatRoom {
  IdUsers: string[];
  IdChatRoom: string;
}
export interface Message {
  to: string;
  text: string;
  roomID: string;
}

const socket = io("http://localhost:4000");

export function ChatComponent() {
  const router = useRouter();
  const [users, setUsers] = useState<User[]>();
  const [userSelected, setUserSelected] = useState<User>();
  const [viewChat, setSetViewChat] = useState(false);
  const [roomChatId, setRoomChatId] =useState<string>();
  const inputSubmitMsg = useRef<HTMLInputElement>(null);
  const [msg, setMsg] = useState<Message[]>();

  useEffect(() => {
    const username = window.localStorage.getItem("name");
    if (!username) {
      router.push("/");
      return;
    }
    socket.emit("start", username);
    window.localStorage.removeItem("name");
  }, []);

  if (roomChatId) {
    socket.emit("get_messages_on", roomChatId, (data: Message[]) => {
      setMsg(data);
    });
  }
  socket.emit("get_Users_on", (users: User[]) => {
    const usersOnline = users.filter((user) => user.id !== socket.id);
    setUsers(usersOnline);
  });

  return (
    <Container>
      <Content>
        <h1>Usuários online</h1>
        <Input placeholder="Digite o nome do usuário" />
        <UsersContainer>
          {users &&
            users.map((user) => {
              return (
                <User
                  key={user.id}
                  onClick={() => {
                    setUserSelected(user);
                    setSetViewChat(true);
                    socket.emit(
                      "create_private_Room",
                      [user.id, socket.id],
                      (data: ChatRoom) => {
                        setRoomChatId(data.IdChatRoom);
                      }
                    );
                  }}>
                  <FirstLatter>{user.name.charAt(0)}</FirstLatter>
                  <InfoUser>
                    <strong>{user.name}</strong>
                    <span>teste</span>
                  </InfoUser>
                </User>
              );
            })}
        </UsersContainer>
        <ChatOpenContainer viewChat={viewChat}>
          <HeaderChat
            onClick={() => {
              setSetViewChat(false);
            }}>
            <AiOutlineArrowLeft size={26} />
            <User>
              <FirstLatter>
                {userSelected && userSelected.name.charAt(0)}
              </FirstLatter>
              <InfoUser>
                <strong>{userSelected && userSelected.name}</strong>
              </InfoUser>
            </User>
          </HeaderChat>
          <Chat>
            <div>
              {msg &&
                msg.map((message) => {
                  return (
                    <span
                      key={message.roomID}
                      className={message.to === socket.id ? "mine" : ""}>
                      {message.text}
                    </span>
                  );
                })}
            </div>
          </Chat>
          <Input
            type="text"
            placeholder="O que deseja enviar"
            ref={inputSubmitMsg}
            onKeyDown={(e: any) => {
              if (e.key === "Enter") {
                const msg = inputSubmitMsg.current?.value;
                socket.emit("send_message", { msg, roomChatId });
                inputSubmitMsg.current!.value = "";
              }
            }}
          />
        </ChatOpenContainer>
      </Content>
    </Container>
  );
}
