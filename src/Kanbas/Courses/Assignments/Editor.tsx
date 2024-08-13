import "bootstrap/dist/css/bootstrap.min.css";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="container mt-4">
      <div className="mb-3">
        <label htmlFor="wd-name" className="form-label">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" className="form-control" />
      </div>

      <div className="mb-3">
        <label htmlFor="wd-description" className="form-label">Description</label>
        <textarea id="wd-description" className="form-control">
        The assignment is available online

Submit a link to the landing page of your Web application running on Netlify.

The landing page should include the following:

Your full name and section
Links to each of the lab assignments
Link to the Kanbas application
Links to all relevant source code repositories
The Kanbas application should include a link to navigate back to the landing page.
        </textarea>
      </div>

      <table className="table">
        <tbody>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-points" className="form-label">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} className="form-control" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-group" className="form-label">Assignment Group:</label>
            </td>
            <td>
              <select id="wd-group" className="form-control">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-display-grade-as" className="form-label">Display Grade as:</label>
            </td>
            <td>
              <select id="wd-display-grade-as" className="form-control">
                <option value="Percentage">Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-submission-type" className="form-label">Submission Type:</label>
            </td>
            <td>
              <select id="wd-submission-type" className="form-control">
                <option value="Online">Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label>Online Entry Options:</label>
            </td>
            <td>
              <div className="form-check">
                <input type="checkbox" name="text-entry" id="wd-TextEntry" className="form-check-input" />
                <label htmlFor="wd-TextEntry" className="form-check-label">Text Entry</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="website-url" id="wd-website-url" className="form-check-input" />
                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="media-recordings" id="wd-media-recordings" className="form-check-input" />
                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="student-annotation" id="wd-student-annotation" className="form-check-input" />
                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
              </div>
              <div className="form-check">
                <input type="checkbox" name="file-upload" id="wd-file-upload" className="form-check-input" />
                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
              </div>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-assign-to" className="form-label">Assign to:</label>
            </td>
            <td>
              <input type="text" placeholder="anyone" id="wd-assign-to" className="form-control" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-due-date" className="form-label">Due:</label>
            </td>
            <td>
              <input type="date" id="wd-due-date" value="2024-05-13" className="form-control" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-available-from" className="form-label">Available from:</label>
            </td>
            <td>
              <input type="date" id="wd-available-from" value="2024-05-06" className="form-control" />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top" className="col-2">
              <label htmlFor="wd-available-until" className="form-label">Available until:</label>
            </td>
            <td>
              <input type="date" id="wd-available-until" value="2024-05-20" className="form-control" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

  