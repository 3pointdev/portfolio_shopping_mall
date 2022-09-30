import React from 'react';
import News from '../components/Index_News/News';
import Advertisement from '../components/Index_Advertisement/Advertisement';
import './index.css';

export default function Index() {
  return (
    <div className='index_container'>
      <Advertisement/>
      <News/>
    </div>
  );
}