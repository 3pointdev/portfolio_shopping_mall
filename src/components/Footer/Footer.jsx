import React from 'react';
import './footer.css'

export default function Footer() {
  return (
    <div className='footer'>
      <p className='introduce-page'>This homepage only for Jang Jun-Su personal resume.</p>
      <div className='contact'>
        <div>
          <span>E-mail :</span><a href='mailto:motors3996@gmail.com'>motors3996@gmail.com</a>
        </div>
        <div>
          <span>tel :</span><a href='tel:+821063333996'>010-6333-3996</a>
        </div>
      </div>
    </div>
  );
}