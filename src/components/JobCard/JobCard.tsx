import { Job } from "../../Contexts/JobContext";
import Detail from "../Detail/Detail";
import Filter from "../Filter/Filter";
import Styles from "./JobCard.module.css";
interface JobCardProps {
  job: Job;
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className={`${job.featured && Styles.border}  ${Styles.jobCard}`}>
      <div className={Styles.logo}>
        <img src={job.logo} alt="" />
      </div>
      <Detail job={job} />
      <span className={Styles.span}></span>
      <Filter job={job} />
    </div>
  );
};

export default JobCard;
