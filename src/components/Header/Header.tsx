import { useJobs } from "../../Contexts/JobContext";
import FilterContainer from "../FilterContainer/FilterContainer";
import Styles from "./Header.module.css";

const Header = () => {
  const { isFiltered, setIsFiltered } = useJobs();
  return (
    <header className={Styles.header}>
      <div className={Styles.overlay}></div>
      {isFiltered && <FilterContainer setIsFiltered={setIsFiltered} />}
    </header>
  );
};

export default Header;
