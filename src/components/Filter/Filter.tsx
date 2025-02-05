import { Job, useJobs } from "../../Contexts/JobContext";
import Styles from "./Filter.module.css";

interface FilterProps {
  job: Job;
}

const Filter = ({ job }: FilterProps) => {
  const { filterBy, setFilterBy, setIsFiltered } = useJobs();

  const handleFilterClick = (filter: string) => {
    if (!filterBy.includes(filter)) {
      setFilterBy([...filterBy, filter]);
      setIsFiltered(true);
    }
  };

  return (
    <div className={Styles.container}>
      <p onClick={() => handleFilterClick(job.role)}>{job.role}</p>
      <p onClick={() => handleFilterClick(job.level)}>{job.level}</p>

      {job.languages.map((lang, index) => (
        <p key={index} onClick={() => handleFilterClick(lang)}>
          {lang}
        </p>
      ))}

      {job.tools.map((tool, index) => (
        <p key={index} onClick={() => handleFilterClick(tool)}>
          {tool}
        </p>
      ))}
    </div>
  );
};

export default Filter;
