import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { FaUserGraduate } from "react-icons/fa6";
import "../Styles/Oppam.css";

export default function NestedList({ records }) {
  const [openIndices, setOpenIndices] = React.useState([]);

  const handleClick = (index) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <div className="oppam">
      {/* ── Hero Header ── */}
      <div className="top">
        <div className="oppam-hero-title">
          <FaUserGraduate className="oppam-icon" />
          <h1><span>OPPAM</span></h1>
        </div>
        <h3>Academic Assistance</h3>
        <p>
          An initiative by students of EC department,<br />
          College of Engineering Trivandrum
        </p>
      </div>

      <div className="oppam-hero-divider" />

      {/* ── List Content ── */}
      <div className="content">
        <div className="oppam-list-wrapper">
          <List
            sx={{ width: "100%", bgcolor: "transparent" }}
            component="nav"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Previous Year Question Papers
              </ListSubheader>
            }
          >
            {records.map((mainItem, index) => (
              <div key={index}>
                <ListItemButton onClick={() => handleClick(index)}>
                  <ListItemText primary={`Semester ${mainItem.semester}`} />
                  {openIndices.includes(index) ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>

                <Collapse in={openIndices.includes(index)} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    {mainItem.subItems.map((subItem, subIndex) => (
                      <ListItemButton
                        key={subIndex}
                        component="a"
                        href={subItem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ListItemText primary={subItem.name} />
                      </ListItemButton>
                    ))}
                  </List>
                </Collapse>
              </div>
            ))}
          </List>
        </div>
      </div>
    </div>
  );
}