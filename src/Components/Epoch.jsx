import React, { useState, useRef } from "react";
import "../Styles/Epoch.css";

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
      { name: "Keshav Balakrishnan", role: "Design Verification Intern, Analog Devices" },
    ],
    joinLink: "https://meet.google.com/dwd-kpmf-uvi",
  },
  {
    img: Epoch2,
    name: "Epoch I",
    tag: "Session 1",
    description: "Kickoff session introducing EPOCH's mission, structure, and placement roadmap for the department.",
  },
  {
    img: Epoch3,
    name: "Epoch III",
    tag: "Session 3",
    description: "Deep dive into resume building, LinkedIn optimization, and personal branding for tech roles.",
  },
  {
    img: Epoch4,
    name: "Epoch IV",
    tag: "Session 4",
    description: "Mock interview practice and aptitude preparation with peer and mentor feedback.",
  },
  {
    img: Epoch5,
    name: "Epoch V",
    tag: "Session 5",
    description: "Panel discussion on internship experiences and navigating the campus recruitment process.",
  },
];

const latest = EPOCHS[0];
const older = EPOCHS.slice(1);
const PER_PAGE = 3;

function Epoch() {
  const [page, setPage] = useState(0);
  const trackRef = useRef(null);
  const totalPages = Math.ceil(older.length / PER_PAGE);

  const goTo = (p) => {
    const next = (p + totalPages) % totalPages;
    setPage(next);
    if (trackRef.current) {
      const cardW =
        (trackRef.current.querySelector(".epoch-old-card")?.offsetWidth ?? 0) + 16;
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

          {(latest.speakers || latest.date) && (
            <div className="epoch-session-box">

              {latest.speakers && latest.speakers.length > 0 && (
                <div className="epoch-speakers">
                  <h3 className="epoch-speakers-title">🎙️ Guest Speakers</h3>
                  <ul className="epoch-speakers-list">
                    {latest.speakers.map((speaker, idx) => (
                      <li key={idx} className="epoch-speaker-item">
                        <strong className="epoch-speaker-name">{speaker.name}</strong>
                        <span className="epoch-speaker-role">{speaker.role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {(latest.date || latest.mode) && (
                <div className="epoch-session-meta">
                  <div className="epoch-session-date">
                    📅 <strong>{latest.date}</strong>
                  </div>
                  <div className="epoch-session-mode">{latest.mode}</div>
                </div>
              )}

              {latest.joinLink && (
                <a
                  href={latest.joinLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="epoch-join-btn"
                >
                  🔗 Join Live Session
                </a>
              )}
            </div>
          )}
        </div>

        {/* Right: poster image */}
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
                  {epoch.description && (
                    <p className="epoch-old-desc">{epoch.description}</p>
                  )}
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