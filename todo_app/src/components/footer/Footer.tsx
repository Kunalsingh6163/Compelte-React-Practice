
// Styling
const footerStyle = {
  backgroundColor: "#000080", // Dark Blue
  color: "white",
  padding: "20px",
  textAlign: "center",
  position: "relative",
  bottom: 0,
  width: "100%",
};

const contentStyle = {
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "wrap",
  maxWidth: "800px",
  margin: "auto",
};

const linkStyle = {
  color: "white",
  textDecoration: "none",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        <div>
          <h3>Company Name</h3>
          <p>1234 Example Street, Bengaluru, Karnataka, India</p>
          <p>Email: <a href="mailto:contact@example.com" style={linkStyle}>contact@example.com</a></p>
        </div>
        <div>
          <h4>Policy</h4>
          <a href="/privacy-policy" style={linkStyle}>Privacy Policy</a>
        </div>
        <div>
          <h4>Follow Us</h4>
          <a href="https://facebook.com" style={linkStyle}>Facebook</a> |{" "}
          <a href="https://twitter.com" style={linkStyle}>Twitter</a> |{" "}
          <a href="https://linkedin.com" style={linkStyle}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;