import Blog from "./components/pages/Blog/Blog";
import Home from "./components/pages/Home/Home";
import WrongAddress from './components/WrongAddress/WrongAddress.js';
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
          <Route path="*" element={<WrongAddress />} />
          <Route path="/" element={<Home/>}/>
          <Route path="/blog" element={<Blog/>}/>
      </Routes>
    </>
  );
}
