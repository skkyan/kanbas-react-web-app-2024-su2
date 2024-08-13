import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });

  const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`;

  return (
    <div id="wd-working-with-objects">
      <h3>Working With Objects</h3>
      <h4>Retrieving Objects</h4>
      <a id="wd-get-assignment" className="btn btn-primary mb-3" href={`${ASSIGNMENT_API_URL}`}>
        Get Assignment
      </a>
      <hr />
      <h4>Retrieving Properties</h4>
      <a id="wd-retrieve-assignment-title" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/assignment/title`}>
        Get Title
      </a><hr/>
      <h4>Modifying Properties</h4>
      <div className="mb-3 d-flex align-items-center">
        <input
          className="form-control me-2"
          id="wd-assignment-title"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
        />
        <a id="wd-update-assignment-title" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
          Update Title
        </a>
      </div>
      <div className="mb-3 d-flex align-items-center">
        <input
          className="form-control me-2"
          id="wd-assignment-score"
          type="number"
          value={assignment.score}
          onChange={(e) => setAssignment({ ...assignment, score: parseInt(e.target.value) })}
        />
        <a id="wd-update-assignment-score" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
          Update Score
        </a>
      </div>
      <div className="mb-3 d-flex align-items-center">
        <input
          className="form-check-input me-2"
          id="wd-assignment-completed"
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
        <label htmlFor="wd-assignment-completed" className="form-check-label me-2">
          Completed
        </label>
        <a id="wd-update-assignment-completed" className="btn btn-primary" href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}>
          Update Completed
        </a>
      </div>
      <hr />
      <div>
        <p>ID: {assignment.id}</p>
        <p>Title: {assignment.title}</p>
        <p>Description: {assignment.description}</p>
        <p>Due: {assignment.due}</p>
        <p>Completed: {assignment.completed.toString()}</p>
        <p>Score: {assignment.score}</p>
      </div>
    </div>
  );
}
