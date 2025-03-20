import { useEffect, useState } from "react";
import { Link } from "react-router-dom";  // ✅ Import Link

function Home() {
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/doors")  // Fetch from backend
      .then((res) => res.json())
      .then((data) => setDoors(data))
      .catch((err) => console.error("Error fetching doors:", err));
  }, []);

  return (
    <div>
      <h1>Doors List</h1>
      {doors.map((door) => (
        <div key={door.id}>
          <h3>{door.name}</h3>
          <p>Status: {door.status}</p>
          <Link to={`/update/${door.id}`}>  {/* ✅ Link for updating a door */}
            <button>Update</button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
