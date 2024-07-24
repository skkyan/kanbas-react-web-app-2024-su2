import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFileImport, FaFileExport } from 'react-icons/fa';

export default function Grades() {
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2>Grades</h2>
        <div>
          <button className="btn btn-outline-primary me-2">
            <FaFileImport className="me-1" /> Import
          </button>
          <div className="btn-group">
            <button className="btn btn-outline-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              <FaFileExport className="me-1" /> Export
            </button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Export Option 1</a></li>
              <li><a className="dropdown-item" href="#">Export Option 2</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group w-50">
          <input type="text" className="form-control" placeholder="Search Students" />
          <button className="btn btn-outline-secondary">Apply Filters</button>
        </div>
        <div className="input-group w-50">
          <input type="text" className="form-control" placeholder="Search Assignments" />
        </div>
      </div>

      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Student Name</th>
            <th scope="col">A1 SETUP<br />Out of 100</th>
            <th scope="col">A2 HTML<br />Out of 100</th>
            <th scope="col">A3 CSS<br />Out of 100</th>
            <th scope="col">A4 BOOTSTRAP<br />Out of 100</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Jane Adams</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>92.18%</td>
            <td>66.22%</td>
          </tr>
          <tr>
            <td>Christina Allen</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Samreen Ansari</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Han Bao</td>
            <td>100%</td>
            <td>100%</td>
            <td><input type="text" className="form-control" defaultValue="88.03%" /></td>
            <td>98.99%</td>
          </tr>
          <tr>
            <td>Mahi Sai Srinivas Bobbili</td>
            <td>100%</td>
            <td>96.67%</td>
            <td>98.37%</td>
            <td>100%</td>
          </tr>
          <tr>
            <td>Siran Cao</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
            <td>100%</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}




