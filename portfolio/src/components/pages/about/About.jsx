import { useState } from "react";

export default function About() {
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <div>
      <div className="card">
        <div className="card-content">
          <h6 className="mt-bottom">
            <strong>ABOUT ME</strong>
          </h6>
          <p className="grey-text">
            I’m a postgraduate in Computer Applications with expertise in
            frontend development, specializing in React.js and JavaScript. I’m
            passionate about building user-friendly web applications and enjoy
            contributing to innovative projects. With a strong focus on
            continuous learning and hands-on experience, I’m always eager to
            grow as a web developer and bring creative ideas to life.
          </p>
        </div>
        <div className="card-action">
          <h6>
            <strong>PERSONAL INFO</strong>
          </h6>
          <div className="row mt">
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Address:</strong> Bijnor, UP, 246725
              </p>
              <p>
                <strong>Email:</strong>
                <span
                  onClick={() => handleCopy("ainaali408@gmail.com")}
                  onMouseEnter={() => setHovered(true)} // Show Copy button on hover
                  onMouseLeave={() => setHovered(false)} // Hide Copy button when mouse leaves
                  style={{
                    cursor: "pointer",
                    color: "blue",
                    position: "relative",
                  }}
                >
                  ainaali408@gmail.com
                  {hovered && !copied && (
                    <span
                      style={{
                        position: "absolute",
                        top: "0",
                        right: "-30px",
                        backgroundColor: "#0072b1",
                        color: "white",
                        padding: "5px",
                        borderRadius: "5px",
                        cursor: "pointer",
                        opacity: copied ? 0.6 : 1,
                        transition: "opacity 0.3s",
                      }}
                    >
                      {copied ? "Copied!" : "Copy"}
                    </span>
                  )}
                </span>
              </p>
              <p>
                <strong>Phone:</strong> 9837938462
              </p>
            </div>
            <div className="col xl6 l6 m6 s12">
              <p>
                <strong>Language</strong> - English/Hindi
              </p>
              <p>
                <strong>LinkedIn:</strong>
                <a
                  href="https://linkedin.com/in/contactainaali/"
                  target="_blank"
                  style={{
                    textTransform: "none",
                    color: "#0072b1", // LinkedIn blue color
                    textDecoration: "none",
                  }}
                >
                  linkedin.com/in/contactainaali/
                </a>
              </p>
              <p>
                <strong>GitHub:</strong>
                <a
                  href="https://github.com/ainaali408"
                  target="_blank"
                  style={{
                    textTransform: "none",
                    color: "#0072b1", // LinkedIn blue color
                    textDecoration: "none",
                  }}
                >
                  github.com/ainaali408
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
