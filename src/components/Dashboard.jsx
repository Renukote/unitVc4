import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Table } from "./Table";

export const Dashboard = () => {
  const { token } = useSelector((state) => ({ token: state.login.token }));
  const [filter, setFilter] = useState("");
  const [localJobData, setLocalJobData] = useState([]);
  const navigate = useNavigate();

  let { jobData } = useSelector((state) => ({ jobData: state.allJobs.jobs }));
  console.log("jobData in dashboard", jobData);

  useEffect(() => {
    setLocalJobData(jobData);
    if (token.length === 0) navigate("/login");
  }, []);

  const filterJobs = () => {
    let filteredJobs = jobData.filter(({ job }) => {
      if (job === filter) return true;
      else return false;
    });

    console.log("filtered jobs", filteredJobs);
    setLocalJobData(filteredJobs);
  };

  const sortLocalData = () => {
    let sortedJobs = localJobData.sort((b, a) => {
      console.log("salaries in sort", +b.salary);
      return +b.salary - +a.salary;
    });

    // This is just for the app to rerender, it serves no other purpose
    sortedJobs = [...sortedJobs, { sorted: true }];

    console.log("sorted jobs", sortedJobs);
    setLocalJobData(sortedJobs);
  };

  return (
    <>
      {" "}
      <h1>Welcome to the Dashboard</h1>
      {localJobData.length === 0 ? (
        <h1>0 jobs available</h1>
      ) : (
        <>
          <Table props={localJobData} key="table" />
          <div>
            <input
              type="text"
              placeholder="Enter job role"
              onChange={(e) => {
                setFilter(e.target.value);
              }}
            />
            <button
              onClick={() => {
                filterJobs();
              }}
            >
              Filter
            </button>
            <button
              onClick={() => {
                sortLocalData();
              }}
            >
              Sort By Salary
            </button>
          </div>
        </>
      )}
    </>
  );
};
