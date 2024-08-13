import { useParams } from "react-router";
import * as db from "../../Database";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BsGripVertical } from "react-icons/bs";

export default function Assignments() {
  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="input-group mb-3">
        <input id="wd-search-assignment"
               className="form-control"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group" className="btn btn-outline-secondary">+ Group</button>
        <button id="wd-add-assignment" className="btn btn-outline-secondary">+ Assignment</button>
      </div>
      <h3 id="wd-assignments-title" className="d-flex justify-content-between align-items-center">
        ASSIGNMENTS 40% of Total
        <button className="btn btn-outline-secondary btn-sm">+</button>
      </h3>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th scope="col">Assignment</th>
            <th scope="col">Details</th>
            <th scope="col">Due Date</th>
            <th scope="col">Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                <BsGripVertical className="me-2 fs-3" />
                A1 - ENV + HTML
                <LessonControlButtons />
              </a>
            </td>
            <td>Multiple Modules | Not available until May 6 at 12:00 am</td>
            <td>May 13 at 11:59pm</td>
            <td>100pts</td>
          </tr>
          <tr>
            <td>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                <BsGripVertical className="me-2 fs-3" />
                A2 - CSS + BOOTSTRAP
                <LessonControlButtons />
              </a>
            </td>
            <td>Multiple Modules | Not available until May 13 at 12:00 am</td>
            <td>May 20 at 11:59pm</td>
            <td>100pts</td>
          </tr>
          <tr>
            <td>
              <a className="wd-assignment-link" href="#/Kanbas/Courses/1234/Assignments/123">
                <BsGripVertical className="me-2 fs-3" />
                A3 - JAVASCRIPT + REACT
                <LessonControlButtons />
              </a>
            </td>
            <td>Multiple Modules | Not available until May 20 at 12:00 am</td>
            <td>May 27 at 11:59pm</td>
            <td>100pts</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
