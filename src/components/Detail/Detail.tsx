import { Job } from "../../Contexts/JobContext";
import Styles from "./Detail.module.css";
interface DetailProps {
  job: Job;
}

const Detail = ({ job }: DetailProps) => {
  return (
    <div className={Styles.container}>
      <div className={Styles.detail}>
        <h1>{job.company}</h1>
        {job.new && <p className={Styles.new}>NEW!</p>}
        {job.featured && <p className={Styles.featured}>FEATURED</p>}
      </div>
      <p className={Styles.position}>{job.position}</p>
      <div className={Styles.contractDetails}>
        <p>{job.postedAt}</p>
        <span>&#8226;</span>
        <p>{job.contract}</p>
        <span>&#8226;</span>
        <p>{job.location}</p>
      </div>
    </div>
  );
};

export default Detail;
