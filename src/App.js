import "./App.scss";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Detail from "./pages/detail/Detail";
import Catalog from "./pages/Catalog";
import PageNotFound from "./components/pageNotFound/PageNotFound";
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category/search/:keyword" element={<Catalog />} />
        <Route path="/:category/:id" element={<Detail />} />
        <Route path="/:category" element={<Catalog />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
