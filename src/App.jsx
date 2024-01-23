import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="cont">
        <Link to="/login">
          <button className="login-btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
        </Link>
      </div>
    </>
  )
}

export default App;
