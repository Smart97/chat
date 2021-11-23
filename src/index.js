import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import ReactDOM from "react-dom";
import { ChatPage, ProfilePage } from "./pages";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const light = createTheme({
  theme: {
    color: "#fff",
  },
});

const dark = createTheme({
  theme: {
    color: "#000",
  },
});

ReactDOM.render(
  <ThemeProvider theme={light}>
    <BrowserRouter>
      <Routes>
        <Route path="/chat/*" element={<ChatPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<h1>404</h1>} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById("root")
);
{/* <Layout
          header={<Header />}
          chats={<ChatList />}
          messages={<MessageList />}
        /> */}