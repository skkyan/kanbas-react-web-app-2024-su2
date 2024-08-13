import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment } from './reducer';
import { useNavigate, useParams } from 'react-router-dom';
import { RootState } from '../../store'; 
interface Assignment {
  _id?: string;
  title: string;
  course: string;
  name?: string;
  description?: string;
  points?: number;
  dueDate?: string;
  availableFromDate?: string;
  availableUntilDate?: string;
}

export default function AssignmentEditor({ dialogTitle }: { dialogTitle: string }) {
  const { assignmentId } = useParams<{ assignmentId: string }>();
  const assignments = useSelector((state: RootState) => state.assignments.assignments);
  const [assignment, setAssignment] = useState<Assignment>({
    title: '',
    course: '',
    name: '',
    description: '',
    points: 0,
    dueDate: '',
    availableFromDate: '',
    availableUntilDate: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (assignmentId) {
      const existingAssignment = assignments.find((a) => a._id === assignmentId);
      if (existingAssignment) {
        setAssignment(existingAssignment);
      }
    }
  }, [assignmentId, assignments]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAssignment((prevAssignment) => ({
      ...prevAssignment,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (assignmentId) {
      dispatch(updateAssignment({ ...assignment, _id: assignmentId }));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate('/assignments');
  };

  const handleCancel = () => {
    navigate('/assignments');
  };

  return (
    <div id="wd-add-assignment-dialog" className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="staticBackdropLabel">
              {dialogTitle}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div className="modal-body">
            <input
              className="form-control"
              name="name"
              value={assignment.name}
              placeholder="Assignment Name"
              onChange={handleChange}
            />
            <textarea
              className="form-control mt-2"
              name="description"
              value={assignment.description}
              placeholder="Assignment Description"
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="number"
              name="points"
              value={assignment.points}
              placeholder="Points"
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="date"
              name="dueDate"
              value={assignment.dueDate}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="date"
              name="availableFromDate"
              value={assignment.availableFromDate}
              onChange={handleChange}
            />
            <input
              className="form-control mt-2"
              type="date"
              name="availableUntilDate"
              value={assignment.availableUntilDate}
              onChange={handleChange}
            />
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleCancel}>
              Cancel
            </button>
            <button onClick={handleSave} type="button" data-bs-dismiss="modal" className="btn btn-danger">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
