import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import AuthProvider from "./contextProvider/AuthProvider";
import SidebarProvider from "./contextProvider/SidebarContext";
import "./index.css";
import router from "./route/Route";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <SidebarProvider>
          <RouterProvider router={router} />
        </SidebarProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
