import React from 'react';
import { useState, useEffect } from 'react';
import Airtable from 'airtable';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from '.Gallery';
import NavCustom from './Components/Navbars';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Styles/App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
//import "mdbreact/dist/css/mdb.css";
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


function App() {
  const [carousalItems, setCarousal] = useState([]);
  const [galleryItems, setGallery] = useState([]);
  const [oppamLinks,setOppamLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingTimer, setLoadingTimer] = useState(true);
  const MINUTE_MS = 4000;

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoadingTimer(false);
    }, MINUTE_MS);

    // This represents the unmount function, in which you need to clear your timeout to prevent memory leaks.
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    var base = new Airtable({ apiKey: 'patEIftf6ErouVFwc.f3085100c905da7b0bf5336990947424495795a0b4b0c4ec735384678ca7021e' }).base('app3s7iPWjKOvxwVy');
    base('Gallery').select({
      maxRecords: 10,
      view: "Grid view"
    }).eachPage(function page(galleryItems, fetchNextPage) {
      const updatedGalleryItems = [...galleryItems, ...galleryItems.map(record => ({
        name: record.get('name'),
        description: record.get('description'),
        tag: record.get('tag'),
        imageUrl: record.get('imageUrl')[0].url
      }))];

      setGallery(updatedGalleryItems);
      fetchNextPage();

    }, function done(err) {
      setLoading(false);
      if (err) { console.error(err); return; }
    });

    base('oppam links').select({
      // Adjust the table name and view as necessary
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
      
      // Convert the object into an array of objects with 'semester' and 'subItems' keys
      const formattedData = Object.entries(semesterData).map(([semester, subItems]) => ({
        semester,
        subItems,
      }));
  
      setOppamLinks(formattedData);
      console.log(formattedData);
      fetchNextPage();
    }, (err) => {
      if (err) {
        console.error(err);
      } else {
        setLoading(false);
      }
    });
    
    
  }, []);

  return (
<div>
<Router>
  <Routes>
    <Route path="/" element=
  {(loading || loadingTimer) ? (
    <div className="loader-container">
      <LoadingScreen />
    </div>
  ) : (
    <div className="App" style={{ backgroundColor: '#0f0f0f', maxWidth: '100vw' }}>
      <div id="top" style={{ height: 0 }} />
      <NavCustom className="sticky-nav"></NavCustom>
      <main>

              <div className='wrapper_home'>
              <div className='animation'>
            {/* <spline-viewer url="https://prod.spline.design/dpANmJDAzIP5EdUd/scene.splinecode"></spline-viewer> */}
            <SplineAnimation></SplineAnimation>
        </div>
                <Landing></Landing>
                {/* <CarouselCustom records={carousalItems} /> */}
                {/* <ControlledCarousel records={galleryItems}></ControlledCarousel> */}
                <div className='spacer'></div>
                <Oppam records = {oppamLinks}></Oppam>
                <div className='spacer'></div>
                <Billboard></Billboard>
                <div className='spacer'></div>
                <Gallery records={galleryItems} />
                <div className='spacer'></div>
              </div>
            
      </main>
      <Footer />
    </div>
  )}
 />
<Route path="*" exact={true} element={
  <div className="notfoundland">
<NotFound/>
</div>
} />
<Route path="/loading" exact={true} element={
  <div className="loader-container">
    <LoadingScreen />
  </div>} />
  <Route path="/team" exact={true} element={
    <div className="notfoundland">
    <WebTeam/>
    </div>} />
</Routes>

</Router>
</div>

  );
}

export default App;

