import { Header } from "./components/Header/Header";
import { UserContextProvider } from "./context/UserContext";
import { Home } from "./pages/Home/Home";

export const App = () => {
  return (
    <div>
      <UserContextProvider>
        <Header />
        <Home />
      </UserContextProvider>
    </div>
  );
}

export default App;
