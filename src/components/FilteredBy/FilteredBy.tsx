import { useJobs } from "../../Contexts/JobContext";
import Styles from "./FilteredBy.module.css";

interface FilterProps {
  filter: string;
}

const FilteredBy = ({ filter }: FilterProps) => {
  const { setFilterBy, setIsFiltered } = useJobs();

  const removeFilter = () => {
    setFilterBy((prevFilters) => {
      const updatedFilters = prevFilters.filter((item) => item !== filter);
      if (updatedFilters.length === 0) {
        setIsFiltered(false);
      }
      return updatedFilters;
    });
  };

  return (
    <div className={Styles.wrap}>
      <p>{filter}</p>
      <span onClick={removeFilter} className={Styles.close}>
        &times;
      </span>
    </div>
  );
};

export default FilteredBy;
