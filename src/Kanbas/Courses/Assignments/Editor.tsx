export default function AssignmentEditor() {
    return (
      <div id="wd-assignments-editor">
        <label htmlFor="wd-name">Assignment Name</label>
        <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
        <textarea id="wd-description">
          The assignment is available online Submit a link to the landing page of
        </textarea>
        <br />
        <table>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" value={100} /><br/>
            </td>
            </tr>
                <label htmlFor="wd-group"> Assignment Group: </label><br/>
                <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select><br/>
                <label htmlFor="wd-display-grade-as"> Display Grade as: </label><br/>
                <select id="wd-display-grade-as">
                <option value="Percentage">Percentage</option>
            </select><br/>
                <label htmlFor="wd-submission-type"> Submission Type: </label><br/>
                <select id="wd-submission-type">
                <option value="Online">Online</option>
            </select><br/>
            <label>Online Entry Options:</label><br/>

<input type="checkbox" name="text-entry" id="wd-Text Entry"/>
<label htmlFor="wd-Text Entry">Text Entry</label><br/>

<input type="checkbox" name="website-url" id="wd-website-url"/>
<label htmlFor="wd-website-url">Website URL</label><br/>

<input type="checkbox" name="media-recordings" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>

<input type="checkbox" name="student-annotation" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Annotation</label><br/>

<input type="checkbox" name="file-upload" id="wd-file-upload"/>
<label htmlFor="wd-file-upload">File-Uploads</label><br/>

<label htmlFor="wd-assign-to"> Assign Assign to: </label>
<input type="Assign Assign to"
      placeholder="anyone"
      id="wd-assign-to"/><br/>

<label htmlFor="wd-due-date"> Due: </label>
<input type="date"
      id="wd-due-date"
      value="2024-05-13"/><br/>

      <label htmlFor="wd-available-from"> available-from: </label>
<input type="date"
      id="wd-available-from"
      value="2024-05-06"/>

      <label htmlFor="wd-available-until"> available-until: </label>
<input type="date"
      id="wd-available-until"
      value="2024-05-20"/><br/>
          {/* Complete on your own */}
        </table>
      </div>
  );}
  