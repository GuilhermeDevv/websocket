"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { Container, Content, Input } from "./styles";

export function RegisterComponent() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();
  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && inputRef.current?.value) {
      router.push("/chat");
      window.localStorage.setItem("name", inputRef.current.value);
    }
  }

  return (
    <Container>
      <Content>
        <h1>REGISTRO</h1>
        <Input
          placeholder="Digite seu nome"
          ref={inputRef}
          onKeyDown={(event: React.KeyboardEvent<HTMLInputElement>) =>
            handleKeyDown(event)
          }
        />
      </Content>
    </Container>
  );
}
