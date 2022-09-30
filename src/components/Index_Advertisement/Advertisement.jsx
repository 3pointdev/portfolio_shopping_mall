import { NavLink } from "react-router-dom";
import ImageSlider, { Slide } from "react-auto-image-slider";
import './advertisement.css';
import Advertisement_01 from '../../data/advertisement/advertisement_dummy_1.jpg';
import Advertisement_02 from '../../data/advertisement/advertisement_dummy_2.jpg';
import Advertisement_03 from '../../data/advertisement/advertisement_dummy_3.jpg';
import Advertisement_04 from '../../data/advertisement/advertisement_dummy_4.jpg';
import Advertisement_05 from '../../data/advertisement/advertisement_dummy_5.jpg';

export default function Advertisement() {

  return (
    <div className='advertisement_container'>
      <ImageSlider effectDelay={500} autoPlayDelay={5000}>
        <Slide>
          <NavLink to='/ad_01'><img alt="Advertisement_image_01" src={Advertisement_01} /></NavLink>
        </Slide>
        <Slide>
          <NavLink to='/ad_02'><img alt="Advertisement_image_02" src={Advertisement_02} /></NavLink>
        </Slide>
        <Slide>
          <NavLink to='/ad_03'><img alt="Advertisement_image_03" src={Advertisement_03} /></NavLink>
        </Slide>
        <Slide>
          <NavLink to='/ad_04'><img alt="Advertisement_image_04" src={Advertisement_04} /></NavLink>
        </Slide>
        <Slide>
          <NavLink to='/ad_05'><img alt="Advertisement_image_05" src={Advertisement_05} /></NavLink>
        </Slide>
      </ImageSlider>
    </div>
  );
}