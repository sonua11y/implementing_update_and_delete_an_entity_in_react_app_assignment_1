import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateItem = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [door, setDoor] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    fetch(`http://localhost:8000/doors/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setDoor(data);
        setStatus(data.status);
      })
      .catch((err) => console.error("Error fetching door:", err));
  }, [id]);

  const handleUpdate = () => {
    fetch(`http://localhost:8000/doors/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    })
      .then((res) => res.json())
      .then(() => navigate("/")) // Navigate back to Home after update
      .catch((err) => console.error("Error updating door:", err));
  };

  return (
    <div>
      {door ? (
        <>
          <h2>Update {door.name}</h2>
          <label>
            Status:
            <select value={status} onChange={(e) => setStatus(e.target.value)}>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>
          </label>
          <button onClick={handleUpdate}>Save</button>
          <button onClick={() => navigate("/")}>Back to Home</button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default UpdateItem;
