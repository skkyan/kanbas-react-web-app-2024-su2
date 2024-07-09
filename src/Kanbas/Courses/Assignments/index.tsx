export default function Assignments() {
    return (
      <div id="wd-assignments">
        <input id="wd-search-assignment"
               placeholder="Search for Assignments" />
        <button id="wd-add-assignment-group">+ Group</button>
        <button id="wd-add-assignment">+ Assignment</button>
        <h3 id="wd-assignments-title">
          ASSIGNMENTS 40% of Total <button>+</button>
        </h3>
        <ul id="wd-assignment-list">
          <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A1 - ENV + HTML
              </a>
              <ul className="wd-content">
                  <li className="wd-content-item">Multiple Modules | Not available until May 6 at 12:00 am |</li>
                  <li className="wd-content-item">Due May 13 at 11:59pm|100pts</li>
                </ul>
        </li>
        <li className="wd-assignment-list-item">
        <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A2 - CSS + BOOTSTRAP
              </a>
              <ul className="wd-content">
                  <li className="wd-content-item">Multiple Modules | Not available until May 13 at 12:00 am |</li>
                  <li className="wd-content-item">Due May 20 at 11:59pm|100pts</li>
                </ul>
                <li className="wd-assignment-list-item">
            <a className="wd-assignment-link"
              href="#/Kanbas/Courses/1234/Assignments/123">
              A3 - JAVASCRIPT + REACT
              </a>
              <ul className="wd-content">
                  <li className="wd-content-item">Multiple Modules | Not available until May 20 at 12:00 am |</li>
                  <li className="wd-content-item">Due May 27 at 11:59pm|100pts</li>
                </ul>
        </li>
        </li>
      </ul>
    </div>
);}
  