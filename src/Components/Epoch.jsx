import React, { useState, useRef } from "react";
import "../Styles/Epoch.css";

// Import your images
import Epoch1 from "../Epoch1.jpeg";
import Epoch2 from "../Styles/Epoch2.jpeg"; 
import Epoch3 from "../Epoch1.jpeg";
import Epoch4 from "../Epoch1.jpeg";
import Epoch5 from "../Epoch1.jpeg";

const EPOCHS = [
  { 
    img: Epoch1, 
    name: "Placement Talk",   
    tag: "Session 2",
    date: "Tuesday, 14 April 2026 | 7PM",
    mode: "Online",
    speakers: [
      { name: "Diya Rose Thomas", role: "Digital Design Intern, Analog Devices" },
      { name: "Keshav Balakrishnan", role: "Design Verification Intern, Analog Devices" }
    ],
    joinLink: "https://meet.google.com/dwd-kpmf-uvi"
  },
  { img: Epoch2, name: "Epoch I",   tag: "Session 1" },
  { img: Epoch3, name: "Epoch III", tag: "Session 3" },
  { img: Epoch4, name: "Epoch IV",  tag: "Session 4" },
  { img: Epoch5, name: "Epoch V",   tag: "Session 5" },
];

const latest  = EPOCHS[0];
const older   = EPOCHS.slice(1);
const PER_PAGE = 3;

function Epoch() {
  const [page, setPage] = useState(0);
  const trackRef = useRef(null);
  const totalPages = Math.ceil(older.length / PER_PAGE);

  const goTo = (p) => {
    const next = (p + totalPages) % totalPages;
    setPage(next);
    if (trackRef.current) {
      const cardW = (trackRef.current.querySelector(".epoch-old-card")?.offsetWidth ?? 0) + 16;
      trackRef.current.style.transform = `translateX(-${next * PER_PAGE * cardW}px)`;
    }
  };

  return (
    <div className="epoch-wrap">
      <h1 className="epoch-title">EPOCH</h1>
      <p className="epoch-subtitle">Electronics Placement &amp; Outcome Competency Hub</p>

      {/* ── Featured row ── */}
      <div className="epoch-featured">

        {/* Left: info card */}
        <div className="epoch-feat-content">
          <div className="epoch-feat-header">
            <span className="epoch-tag">{latest.tag}</span>
            <h2 className="epoch-feat-name">{latest.name}</h2>
          </div>
          
          <p className="epoch-feat-lead">
            A structured Placement &amp; Skill Development bench constituted with faculty
            advisors and student coordinators to design, conduct and monitor holistic
            placement readiness across the department.
          </p>

          {/* ── Cinematic Session Details ── */}
          {(latest.speakers || latest.date) && (
            <div className="epoch-feat-session-details" style={{ 
              backgroundColor: "rgba(255,255,255,0.02)", 
              border: "1px solid var(--epoch-border)",
              padding: "24px", 
              borderRadius: "16px", 
              margin: "20px 0",
              display: "flex",
              flexDirection: "column",
              gap: "18px",
              boxShadow: "inset 0 0 20px rgba(0, 240, 255, 0.05)"
            }}>
              {latest.speakers && latest.speakers.length > 0 && (
                <div className="epoch-speakers">
                  <h3 style={{ margin: "0 0 16px 0", fontSize: "14px", color: "var(--epoch-accent)", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                    🎙️ Guest Speakers
                  </h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                    {latest.speakers.map((speaker, idx) => (
                      <li key={idx} style={{ fontSize: "15px", color: "var(--epoch-text)" }}>
                        <strong style={{ fontWeight: "600", letterSpacing: "0.03em", display: "block" }}>{speaker.name}</strong>
                        <span style={{ color: "var(--epoch-muted)", fontSize: "13px" }}>{speaker.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {(latest.date || latest.mode) && (
                <div className="epoch-session-meta" style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "16px",
                  borderTop: "1px solid var(--epoch-border)",
                  fontSize: "14px"
                }}>
                  <div style={{ color: "var(--epoch-text)" }}>
                    📅 <strong>{latest.date}</strong>
                  </div>
                  <div style={{ color: "var(--epoch-accent)", textTransform: "uppercase", fontSize: "11px", letterSpacing: "0.1em", fontWeight: "700" }}>
                    {latest.mode}
                  </div>
                </div>
              )}

              {latest.joinLink && (
                <a 
                  href={latest.joinLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="epoch-join-btn"
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "var(--epoch-accent)",
                    color: "#080808",
                    padding: "12px 20px",
                    borderRadius: "8px",
                    textDecoration: "none",
                    fontWeight: "800",
                    fontSize: "14px",
                    marginTop: "8px",
                    transition: "all 0.3s ease",
                    boxShadow: "0 0 15px rgba(0, 240, 255, 0.3)"
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 0 25px rgba(0, 240, 255, 0.5)";
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 0 15px rgba(0, 240, 255, 0.3)";
                  }}
                >
                  🔗 Join Live Session
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right: full poster image */}
        <div className="epoch-feat-img">
          <div className="epoch-feat-img-top">
            <img src={latest.img} alt={latest.name} />
          </div>
          <div className="epoch-feat-img-label">
            <div className="epoch-feat-img-label-dot" />
            <span>{latest.name} · {latest.tag}</span>
          </div>
        </div>
      </div>

      {/* ── Carousel ── */}
      <div className="epoch-carousel">
        <div className="epoch-track-wrap">
          <div className="epoch-track" ref={trackRef}>
            {older.map((epoch) => (
              <div key={epoch.name} className="epoch-old-card">
                <div className="epoch-old-img-wrap">
                  <div className="epoch-card-img-top">
                    <img src={epoch.img} alt={epoch.name} />
                  </div>
                </div>
                <div className="epoch-old-info">
                  <div className="epoch-old-name">{epoch.name}</div>
                  <div className="epoch-old-tag">{epoch.tag}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="epoch-nav">
          <button className="epoch-nav-btn" onClick={() => goTo(page - 1)} aria-label="Previous">‹</button>
          <div className="epoch-dots">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                className={`epoch-dot${i === page ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>
          <button className="epoch-nav-btn" onClick={() => goTo(page + 1)} aria-label="Next">›</button>
        </div>
      </div>
    </div>
  );
}

export default Epoch;