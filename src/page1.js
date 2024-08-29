import React, { useState } from "react";
import QRCode from "react-qr-code";

const Page1 = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [link, setLink] = useState();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleGenerateQRCode = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("files", selectedFile);

    try {
      const response = await fetch("https://paula-be-production.up.railway.app/uploader", {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        console.log("QR Code generated:", result);
        setLink(`https://paula-be-production.up.railway.app${result.filePath}`)
        // Handle the result (e.g., display the QR code)
      } else {
        console.error("Failed to generate QR Code");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Inline styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    color: "#333",
    marginBottom: "20px",
  };

  const inputStyle = {
    marginBottom: "10px",
  };

  const buttonStyle = {
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#0056b3",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Generate QR Code</h1>
      <input type="file" onChange={handleFileChange} style={inputStyle} />
      <button
        onClick={handleGenerateQRCode}
        style={buttonStyle}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007BFF")}
      >
        Generate QR Code
      </button>
      {link && (
        <div
          style={{
            marginTop: "20px",
          }}
        >
          <QRCode value={link} />
        </div>
      )}
    </div>
  );
};

export default Page1;
