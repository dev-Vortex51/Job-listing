import { useJobs } from "../../Contexts/JobContext";
import FilteredBy from "../FilteredBy/FilteredBy";
import Styles from "./FilterContainer.module.css";

interface FilterContainerProps {
  setIsFiltered: (isFiltered: boolean) => void;
}

const FilterContainer = ({ setIsFiltered }: FilterContainerProps) => {
  const { setFilterBy, filterBy } = useJobs();
  const handleClear = () => {
    setFilterBy([]);
    setIsFiltered(false);
  };
  return (
    <div className={Styles.filterContainer}>
      <div className={Styles.wrap}>
        {filterBy.map((filter, index) => (
          <FilteredBy key={index} filter={filter} />
        ))}
      </div>
      <button onClick={handleClear}>Clear</button>
    </div>
  );
};

export default FilterContainer;
