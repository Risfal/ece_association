import "../Styles/Billboard.css";
import Airtable from "airtable";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { FcHighPriority } from "react-icons/fc";

const Billboard = () => {
  const [billboardItems, setBillboardItems] = useState([]);
  const [offset, setOffset] = useState(0);
  const [length, setLength] = useState(0);
  const pageLength = 5;
  const [note, setNote] = useState(-1);

  useEffect(() => {
    const base = new Airtable({
      apiKey: "patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e",
    }).base("app3s7iPWjKOvxwVy");

    base("Billboard")
      .select({ view: "Grid view", maxRecords: 100 })
      .eachPage(
        (records, fetchNextPage) => {
          const items = records.map((record) => ({
            id: record.id,
            description: record.get("description"),
            date: record.get("date"),
            text: record.get("text"),
          }));
          setLength(items.length);
          setBillboardItems(items.reverse());
          fetchNextPage();
        },
        (err) => { if (err) console.error(err); }
      );
  }, []);

  const fetchNextPage = () => {
    if (offset + pageLength <= length) setOffset(offset + pageLength);
  };
  const fetchPrevPage = () => {
    if (offset - pageLength >= 0) setOffset(offset - pageLength);
  };
  const handleToggle = (index) => setNote(index === note ? -1 : index);

  return (
    <div className="billboard">
      {/* Title */}
      <div className="billboard-title">
        <FcHighPriority size={18} />
        Notifications
        <FcHighPriority size={18} />
      </div>

      {/* List */}
      <div className="wrapper-billboard">
        <div className="billboard-container">
          <div className="bills">
            {billboardItems.slice(offset, offset + pageLength).map((record, index) => (
              <div className="bill-wrapper" key={record.id}>
                {/* Row */}
                <div className="bill" onClick={() => handleToggle(index)}>
                  <div className="bill_desc">{record.description}</div>
                  <div className="bill_date">{record.date}</div>
                  <div>
                    {index === note ? <FaChevronUp size={11} /> : <FaChevronDown size={11} />}
                  </div>
                </div>

                {/* Expanded content */}
                {index === note && (
                  <div className="big-notification">
                    <Card className="current-note">{record.text}</Card>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="pageit">
            <div className="btn" onClick={fetchPrevPage} title="Previous">
              <GoChevronLeft />
            </div>
            <div className="btn" onClick={fetchNextPage} title="Next">
              <GoChevronRight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Billboard;