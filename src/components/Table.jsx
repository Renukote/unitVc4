export const Table = ({ props }) => {
  console.log("props in table", props);

  return (
    <table style={{ width: "fit-content", margin: "auto" }}>
      <thead>
        <tr>
          <th style={{ border: "1px solid black" }}>Company</th>
          <th style={{ border: "1px solid black" }}>Job</th>
          <th style={{ border: "1px solid black" }}>Salary</th>
          <th style={{ border: "1px solid black" }}>Location</th>
          <th style={{ border: "1px solid black" }}>Type</th>
          <th style={{ border: "1px solid black" }}>Description</th>
        </tr>
      </thead>
      <tbody>
        {props.map(
          ({ company, job, salary, location, type, description }, id) => (
            <tr key={id}>
              <td style={{ border: "1px solid black" }}>{company}</td>
              <td style={{ border: "1px solid black" }}>{job}</td>
              <td style={{ border: "1px solid black" }}>{salary}</td>
              <td style={{ border: "1px solid black" }}>{location}</td>
              <td style={{ border: "1px solid black" }}>{type}</td>
              <td style={{ border: "1px solid black" }}>{description}</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
};
