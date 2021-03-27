import { Link } from "react-router-dom";
import { motion as m } from "framer-motion";

function Navbar() {
  return (
    <div className="nav">
      <div className="leftNav">
        <button className="logo">
          Cocktail.<span>com</span>
        </button>
      </div>
      <div className="rightNav">
        <Link to="/" className="buttons">
          <m.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Home
          </m.button>
        </Link>
        <Link to="/search" className="buttons">
          <m.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Search
          </m.button>
        </Link>
        <Link to="/random" className="buttons">
          <m.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Random Cocktail
          </m.button>
        </Link>
        <Link to="/about" className="buttons">
          <m.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            About
          </m.button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
