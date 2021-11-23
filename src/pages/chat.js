import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router"
import { ChatList, Layout, MessageList } from "../components"

export const ChatPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const listener = ({code}) => {
            if(code === "Escape") {
                navigate("/chat")
            }
        };

        document.addEventListener("keydown", listener);

        return () => document.removeEventListener("keydown", listener);
    }, [navigate])


    return (
        <>
        <Routes>
            <Route
                path="/"
                element={
                    <Layout chats={<ChatList />} messages={<h1>Выберите чат</h1>} />
                }
            />
            <Route
                path="/:roomId"
                element={
                    <Layout chats={<ChatList />} messages={<MessageList />} />
                }
            />
        </Routes>
        </>
    )




}