import React from "react";

const Profile = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      background: "#f4f6f8",
    },
    card: {
      width: "300px",
      background: "white",
      borderRadius: "15px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
      fontFamily: "Arial",
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
    },
    name: {
      fontSize: "22px",
      fontWeight: "bold",
      margin: "10px 0 5px",
    },
    role: {
      color: "gray",
      fontSize: "14px",
      marginBottom: "15px",
    },
    button: {
      padding: "10px 15px",
      background: "#4f46e5",
      color: "white",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <img
          style={styles.image}
          src="https://i.pravatar.cc/150?img=12"
          alt="profile"
        />

        <div style={styles.name}>Kapil Jivtode</div>
        <div style={styles.role}>React Developer 💻</div>

        <button style={styles.button}>Follow</button>
      </div>
    </div>
  );
};

export default Profile;