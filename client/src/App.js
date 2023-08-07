import { HashRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import {AuthorLogin, Bio, Books, Contact, Home, SingleBook, Support} from "./pages"
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkLogin } from "./redux/loginSlice";

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(checkLogin());
  })
  return (
      <div className="App">
      {/* Using Hash Router since this app will be running off  */}
      <HashRouter>
        <NavBar/>
        <Routes>
          {/* Home route */}
          <Route
            path="/"
            element={<Home/>}
          />
          {/* Bio route */}
          <Route
            path="/bio"
            element={<Bio/>}
          />
          {/* Books route */}
          <Route
            path="/books"
            element={<Books/>}
          />
          {/* Contact Route */}
          <Route
            path="/contact"
            element={<Contact/>}
          />
          {/* Single Book Route */}
          <Route
            path="/singleBook"
            element={<SingleBook/>}
          />
          {/* Support Route */}
          <Route
            path="/support"
            element={<Support/>}
          />
          <Route
            path="/authorLogin"
            element={<AuthorLogin/>} 
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
