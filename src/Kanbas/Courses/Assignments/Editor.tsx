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
                <label htmlFor="wd-select-one-genre"> Assignment Group: </label><br/>
                <select id="wd-select-one-genre">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            </select><br/>
                <label htmlFor="wd-select-one-genre"> Display Grade as: </label><br/>
                <select id="wd-select-one-genre">
                <option value="Percentage">Percentage</option>
            </select><br/>
                <label htmlFor="wd-select-one-genre"> Submission Type: </label><br/>
                <select id="wd-select-one-genre">
                <option value="Online">Online</option>
            </select><br/>
            <label>Online Entry Options:</label><br/>

<input type="checkbox" name="check-genre" id="wd-Text Entry"/>
<label htmlFor="wd-Text Entry">Text Entry</label><br/>

<input type="checkbox" name="check-genre" id="wd-Website URL"/>
<label htmlFor="wd-Website URL">Website URL</label><br/>

<input type="checkbox" name="check-genre" id="wd-media-recordings"/>
<label htmlFor="wd-media-recordings">Media Recordings</label><br/>

<input type="checkbox" name="check-genre" id="wd-student-annotation"/>
<label htmlFor="wd-student-annotation">Student Annotation</label><br/>

<input type="checkbox" name="check-genre" id="wd-file-upload"/>
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
  