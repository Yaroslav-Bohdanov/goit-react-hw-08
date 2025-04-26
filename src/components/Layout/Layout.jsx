import { Outlet } from "react-router-dom";
import AppBar from "./AppBar";

export default function Layout() {
  return (
    <div>
      <AppBar />
      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}
