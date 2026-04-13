import React from 'react';
import '../Styles/Socialmedia.css';

const Sm = () => {
    return (
        <header className="sm" id='sm'>
                    <div className='title-wrapper'>
                    <i class="fa fa-linkedin" style={{ color: 'blue' }}></i>
                    <a href="https://www.linkedin.com/">LinkedIn</a>
                    </div>

                    <div className='title-wrapper'>
                    <i class="fa fa-instagram" style={{ color: 'black' }}></i>
                    <a href="https://www.linkedin.com/">Instagram</a>
                    </div>

                    <div className='title-wrapper'>
                    <i class="fa fa-whatsapp" style={{ color: 'rgb(20, 168, 42)' }}></i>
                    <a href="https://www.linkedin.com/">Whatsapp</a>
                    </div>

                    <div className='title-wrapper'>
                    <i class="fa fa-facebook" style={{ color: 'rgb(19, 129, 224)' }}></i>
                    <a href="https://www.linkedin.com/">Facebook</a>
                    </div>

            
        </header>
    );
};

export default Sm;