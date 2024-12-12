import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <>
      <AuthProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>
      </AuthProvider>
    </>
  );
}

export default App;
