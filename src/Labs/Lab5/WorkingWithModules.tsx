import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithModules() {
  const [module, setModule] = useState({
    id: "DS5610",
    name: "Introduction to Web Development",
    description: "Learn the basics of Web Development.",
    course: "Web Development"
  });

  return (
    <div id="wd-working-with-modules">
      <h3>Working With Modules</h3>
      <h4>Retrieving Module</h4>
      <a id="wd-get-module" className="btn btn-primary mb-3" href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a>
      <hr />
      <h4>Retrieving Module Name</h4>
      <a id="wd-get-module-name" className="btn btn-primary mb-3" href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a>
      <hr />
      <h4>Modifying Module</h4>
      <div className="mb-3 d-flex align-items-center">
        <input
          className="form-control me-2"
          id="wd-module-name"
          value={module.name}
          onChange={(e) => setModule({ ...module, name: e.target.value })}
        />
        <a id="wd-update-module-name" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module/name/${module.name}`}>
          Update Module Name
        </a>
      </div>
      <div className="mb-3 d-flex align-items-center">
        <input
          className="form-control me-2"
          id="wd-module-description"
          value={module.description}
          onChange={(e) => setModule({ ...module, description: e.target.value })}
        />
        <a id="wd-update-module-description" className="btn btn-primary" href={`${REMOTE_SERVER}/lab5/module/description/${module.description}`}>
          Update Module Description
        </a>
      </div>
      <hr />
      <div>
        <p>ID: {module.id}</p>
        <p>Name: {module.name}</p>
        <p>Description: {module.description}</p>
        <p>Course: {module.course}</p>
      </div>
    </div>
  );
}