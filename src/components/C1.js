import React, { useEffect, useState } from "react";
import { FaUserCircle, FaUser, FaUserSecret } from "react-icons/fa"; // Import the User icons

function UserTable() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        if (Array.isArray(data)) {
          setUserData(data);
        } else if (data.users && Array.isArray(data.users)) {
          setUserData(data.users);
        } else {
          console.error("Invalid data structure in API response");
        }

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getRandomIcon = () => {
    const icons = [FaUserCircle, FaUser, FaUserSecret]; // Define your set of icons here
    const randomIndex = Math.floor(Math.random() * icons.length);
    const RandomIcon = icons[randomIndex];
    return <RandomIcon size={24} />;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>User Data</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Sno</th>
            <th style={styles.tableHeader}>Profile Pic</th>
            <th style={styles.tableHeader}>First Name</th>
            <th style={styles.tableHeader}>Last Name</th>
            <th style={styles.tableHeader}>Gender</th>
            <th style={styles.tableHeader}>Email</th>
            <th style={styles.tableHeader}>Username</th>
            <th style={styles.tableHeader}>Domain</th>
            <th style={styles.tableHeader}>IP</th>
            <th style={styles.tableHeader}>University</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, index) => (
            <tr key={index}>
              <td style={styles.tableCell}>{index + 1}</td>
              <td style={styles.tableCell}>{getRandomIcon()}</td>
              <td style={styles.tableCell}>{user.firstName}</td>
              <td style={styles.tableCell}>{user.lastName}</td>
              <td style={styles.tableCell}>{user.gender}</td>
              <td style={styles.tableCell}>{user.email}</td>
              <td style={styles.tableCell}>{user.username}</td>
              <td style={styles.tableCell}>{user.domain}</td>
              <td style={styles.tableCell}>{user.ip}</td>
              <td style={styles.tableCell}>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
const styles = {
  container: {
    background: "black",
    color: "white",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    margin: "20px",
  },
  header: {
    fontSize: "24px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  tableHeader: {
    padding: "8px 12px",
    border: "1px solid white",
    background: "#555",
    fontWeight: "bold",
  },
  tableCell: {
    padding: "8px 12px",
    border: "1px solid white",
  },
};

export default UserTable;
