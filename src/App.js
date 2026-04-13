import React from 'react';
import { useState, useEffect } from 'react';
import Airtable from 'airtable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Components/Gallery';
import NavCustom from './Components/Navbars';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import CarouselCustom from './Components/Carousal';
import ControlledCarousel from './Components/ControlledCarousel';
import Billboard from './Components/Billboard';
import LoadingScreen from './Components/Loading';
import NotFound from './Components/NotFound';
import WebTeam from './Components/WebTeam';
import Landing from './Components/Landing';
import Oppam from './Components/Oppam';
import '@splinetool/viewer';
import SplineAnimation from './Components/SplineAnimation';
import Epoch from './Components/Epoch';

function App() {
  const [galleryItems, setGallery] = useState([]);
  const [oppamLinks, setOppamLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingTimer, setLoadingTimer] = useState(true);
  const MINUTE_MS = 4000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingTimer(false);
    }, MINUTE_MS);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    var base = new Airtable({
      apiKey: 'patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e'
    }).base('app3s7iPWjKOvxwVy');

    // ── Gallery ──
    base('Gallery').select({
      maxRecords: 10,
      view: "Grid view"
    }).eachPage(function page(records, fetchNextPage) {

      const mapped = records.map(record => ({
        name: record.get('name'),
        description: record.get('description'),
        tag: record.get('tag'),
        imageUrl: record.get('imageUrl')?.[0]?.url ?? null,
      })).filter(item => item.imageUrl); // drop any records missing an image

      setGallery(prev => [...prev, ...mapped]);
      fetchNextPage();

    }, function done(err) {
      setLoading(false);
      if (err) { console.error(err); }
    });

    // ── Oppam links ──
    base('oppam links').select({
      view: 'Grid view',
      fields: ['semester', 'subject name', 'link'],
    }).eachPage((records, fetchNextPage) => {

      const semesterData = {};
      records.forEach(record => {
        const semester = record.get('semester');
        const name = record.get('subject name');
        const link = record.get('link');
        if (!semesterData[semester]) {
          semesterData[semester] = [];
        }
        semesterData[semester].push({ name, link });
      });

      const formattedData = Object.entries(semesterData).map(([semester, subItems]) => ({
        semester,
        subItems,
      }));

      setOppamLinks(formattedData);
      fetchNextPage();

    }, (err) => {
      if (err) { console.error(err); }
      else { setLoading(false); }
    });

  }, []);

  return (
    <div style={{ overflowX: 'hidden', maxWidth: '100vw' }}>
      <Router>
        <Routes>

          <Route path="/" element={
            (loading || loadingTimer) ? (
              <div className="loader-container">
                <LoadingScreen />
              </div>
            ) : (
              <div
                className="App"
                style={{ backgroundColor: '#0f0f0f', maxWidth: '100vw', overflowX: 'hidden' }}
              >
                <div id="top" style={{ height: 0 }} />
                <NavCustom className="sticky-nav" />
                <main>
                  <div className="wrapper-home">
                    <div className="animation">
                      <SplineAnimation />
                    </div>
                    <Landing />
                    <Epoch records={galleryItems} />
                    <div className="spacer" />
                    <Oppam records={oppamLinks} />
                    <div className="spacer" />
                    <Billboard />
                    <div className="spacer" />
                    <Gallery records={galleryItems} />
                    <div className="spacer" />
                  </div>
                </main>
                <Footer />
              </div>
            )
          } />

          <Route path="*" element={
            <div className="notfoundland">
              <NotFound />
            </div>
          } />

          <Route path="/loading" element={
            <div className="loader-container">
              <LoadingScreen />
            </div>
          } />

          <Route path="/team" element={
            <div className="notfoundland">
              <WebTeam />
            </div>
          } />

        </Routes>
      </Router>
    </div>
  );
}

export default App;