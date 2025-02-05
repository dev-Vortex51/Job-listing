import { useJobs } from "../../Contexts/JobContext";
import JobCard from "../JobCard/JobCard";
import Styles from "./AppLayout.module.css";

const AppLayout = () => {
  const { jobs, filterBy } = useJobs();

  const filteredJobs = jobs.filter((job) => {
    if (filterBy.length === 0) return true;

    const jobTags = [job.role, job.level, ...job.languages, ...job.tools];

    return filterBy.every((filter) => jobTags.includes(filter));
  });

  return (
    <div className={Styles.app}>
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
      ) : (
        <p>No jobs match the selected filters.</p>
      )}
    </div>
  );
};

export default AppLayout;
