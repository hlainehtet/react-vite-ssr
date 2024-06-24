const Home = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <header
        style={{
          backgroundColor: "#f8f9fa",
          padding: "10px 0",
          borderBottom: "1px solid #dee2e6",
        }}
      >
        <h1 style={{ margin: "0", fontSize: "2rem", color: "#343a40" }}>
          Simple React Page
        </h1>
      </header>
      <main style={{ marginTop: "20px" }}>
        <p style={{ fontSize: "1.2rem", color: "#6c757d" }}>
          This is a simple React component with inline CSS styling.
        </p>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            color: "#fff",
            backgroundColor: "#007bff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => alert("Button clicked!")}
        >
          Click Me
        </button>
      </main>
      <footer style={{ marginTop: "20px", color: "#adb5bd" }}>
        <p>&copy; 2024 Simple Page. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
