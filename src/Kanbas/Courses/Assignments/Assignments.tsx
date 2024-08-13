import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store'; 
import { useNavigate } from 'react-router-dom';

const Assignments: React.FC = () => {
  const assignments = useSelector((state: RootState) => state.assignments.assignments);
  const navigate = useNavigate();

  const handleAddAssignment = () => {
    navigate('/assignment-editor');
  };

  const handleEditAssignment = (assignmentId: string) => {
    navigate(`/assignment-editor/${assignmentId}`);
  };

  return (
    <div>
      <h2>Assignments</h2>
      <button onClick={handleAddAssignment}>+ Assignment</button>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment._id} onClick={() => handleEditAssignment}>
            {assignment.name || assignment.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Assignments;
