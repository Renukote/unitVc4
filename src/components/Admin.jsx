import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newJobPost } from "../features/jobPosting/actionCreators";

export const Admin = () => {
  const [company, setCompany] = useState("");
  const [job, setJob] = useState("");
  const [salary, setSalary] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [posted, setPosted] = useState(false);
  const dispatch = useDispatch();

  const { jobData } = useSelector((state) => ({
    jobData: state.allJobs.jobs,
  }));

  console.log("job data in admin page", jobData);

  const handleSubmit = (e) => {
    e.preventDefault();

    setPosted(false);

    const jobDetails = {
      company,
      job,
      salary,
      location,
      description,
      type,
    };

    console.log("jobDetails obj", jobDetails);

    dispatch(newJobPost(jobDetails));

    setPosted(true);
  };

  // a job has company name, job title, salary range, job description, location, job type (remote) and anything extra you want to add
  return (
    <>
      <h1>Welcome to the admin page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="company"
          placeholder="Name of the company"
          onChange={(e) => {
            setCompany(e.target.value);
          }}
        />
        <input
          type="text"
          name="job"
          placeholder="Post a new job"
          onChange={(e) => {
            setJob(e.target.value);
          }}
        />
        <input
          type="text"
          name="salary"
          placeholder="Enter salary"
          onChange={(e) => {
            setSalary(e.target.value);
          }}
        />
        <input
          type="text"
          name="description"
          placeholder="Job description"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          type="text"
          name="type"
          placeholder="Job type"
          onChange={(e) => {
            setType(e.target.value);
          }}
        />
        <input
          type="text"
          name="location"
          placeholder="Job location"
          onChange={(e) => {
            setLocation(e.target.value);
          }}
        />
        <input type="submit" value="Post" />
      </form>

      {posted ? <h1>Job Posted</h1> : null}
    </>
  );
};
