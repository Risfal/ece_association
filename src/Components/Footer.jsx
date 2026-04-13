import React from 'react';
import { MDBFooter, MDBContainer, MDBCol, MDBRow, MDBIcon } from 'mdb-react-ui-kit';
import '../Styles/Footer.css';
function Footer() {
  return (
    <MDBFooter className='text-center text-lg-start text-muted'style={{ backgroundColor: 'inherit', color: 'white'}}>
      <MDBContainer className='p-4'style={{paddingBottom: "0"}}>
      <MDBRow className='mt-3' >
      <section className='d-flex justify-content-center  p-4 border-bottom'style={{ color: 'white' }} >
      {/* <MDBCol size="auto">
      <div className='webteam'>
        <span>The web team:</span>
        <a  target="_blank" rel="noreferrer" href='team' className='me-4 text-reset'>
            <MDBIcon color='grey' fas icon='users' />
          </a>
        </div>
      </MDBCol> 
      when adding webteam component add "justify-content-lg-between" to classname of section
      */}
      
      <MDBCol size="auto">
        <div  id="contacts">
          <a  target="_blank" rel="noreferrer" href='https://www.instagram.com/ec_association_cet/' className='me-4 text-reset' style={{marginLeft: "1.5rem"}}>
            <MDBIcon color='grey' fab icon='instagram' />
          </a>
          <a  target="_blank" rel="noreferrer" href='https://www.cet.ac.in/ece/' className='me-4 text-reset'>
            <MDBIcon icon='globe' />
          </a>
          <a  target="_blank" rel="noreferrer" href='https://app.ktu.edu.in' className='me-4 text-reset'>
            <MDBIcon color='grey' icon='graduation-cap' />
          </a>
        </div>
        </MDBCol>
      </section>
      </MDBRow>
      </MDBContainer>
      
    </MDBFooter>
  );
}
export default Footer;