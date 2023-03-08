import Navbar from "./components/Navbar/Navbar";
import RegisterPage from "./pages/RegisterPage";
import UseMemoPage from "./pages/UseMemoPage";
import UseCallbackPage from "./pages/UseCallbackPage";
import LifeCycleHooksPage from "./pages/LifeCycleHooksPage";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import AboutUs from "./pages/AboutUs";
import ItemPage from "./pages/ItemPage";
import StaticHomePage from "./pages/StaticHomePage";
import HomePage from "./pages/HomePage";
const App = () => {
  return (
    <div className="container">
      <header>
        <Navbar isDark={true} />
      </header>
      <main className="mt-2">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/statichomepage" element={<StaticHomePage />} />
          <Route path="/registerpage" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/lifecyclehookspage" element={<LifeCycleHooksPage />} />
          <Route path="/usecallbackpage" element={<UseCallbackPage />} />
          <Route path="/usememopage" element={<UseMemoPage />} />
          <Route path="/item/:id" element={<ItemPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <footer></footer>
    </div>
  );
};

export default App;
