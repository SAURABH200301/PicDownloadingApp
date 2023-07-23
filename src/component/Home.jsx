import Navbar from "./Navbar";
import classes from './Home.module.css'
import Search from "./Search";

function Home() {
  return (
    <div className="">
      <div className={`${classes.nav}`}>
        <Navbar />
      </div>
      <Search />
    </div>
  );
}

export default Home;
