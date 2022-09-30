import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './category.css';
import { useEffect } from 'react';

export default function Category(props) {

  /**
   * 세부카테고리 핸들
   */
  const [openDepth, setOpenDepth] = useState(false);
  const [subMenuContents, setSubMenuContents] = useState('dummy');

  /**
   * 메인카테고리 리스트
   */
  const menuList = ['가구','뷰티','식품','전자기기','패션'];

  /**
   * 메인카테고리 영문 리스트
   */
  const menuListEng = ['furniture', 'beauty', 'foods', 'electronics', 'fashion'];

  /**
   * 메인카테고리 별 세부 카테고리 리스트
   */
  const subMenuList = {
    가구: ['거실가구', '침실가구', '주방가구', '수납가구', '서재,사무', '아동가구'],
    뷰티: ['스킨케어', '여성메이크업', '남성메이크업', '향수', '클렌징,필링', '헤어', '바디,네일'],
    식품: ['과일', '채소', '축산물', '수산물', '가공식품', '밀키트'],
    전자기기: ['생활가전', '주방가전', '계절가전', '세탁기,건조기', '컴퓨터', '디지털기기'],
    패션: ['여성의류', '여성신발', '여성가방', '남성의류', '남성신발', '남성가방', '잠옷,언더웨어', '쥬얼리', '패션잡화'],
    dummy: []
  };

  /**
   * 서브 카테고리 변경 핸들러 
   */
  const openSubMenuHandler = (e) => {
    e.preventDefault();
    setOpenDepth(true);
    setSubMenuContents(e.target.innerText);
  }

  /**
   * 메인 카테고리 선택 시 active class 추가 이벤트
   */
  useEffect(()=>{
    const selectCategory = document.querySelectorAll('.main_category_btn');
    const selectCategoryBox = document.querySelectorAll('.main_category_list_box');
    console.log(selectCategory[0].innerText);
    for(let i = 0; i < selectCategory.length; i++){
      if(selectCategory[i].innerText === subMenuContents){
        selectCategory[i].className += ' active';
        selectCategoryBox[i].className += ' active';
      }else{
        selectCategory[i].className = selectCategory[i].className.replace(' active','');
        selectCategoryBox[i].className = selectCategoryBox[i].className.replace(' active','');
      }
    }
  },[subMenuContents])
  
  /**
   * 메인 카테고리 생성 핸들러
   */
  let mainCategory = [];

  for(let i = 0; i < menuList.length; i++){
    mainCategory.push(
      <li key={i} className='main_category_list_box'>
        <a className={'main_category_btn ' + menuListEng[i]} href='/' onMouseOver={openSubMenuHandler}>
          <span>{menuList[i]}</span>
        </a>
      </li>
    )
  }

  /**
   * 서브 카테고리 생성
   */
  let subCategory = [];

  for(let i = 0; i < subMenuList[subMenuContents].length; i++){
    subCategory.push(
      <li key={subMenuContents+i}>
        <NavLink to={'/'+subMenuContents+'/'+subMenuList[subMenuContents][i]} className='sub_category_btn'>
          {subMenuList[subMenuContents][i]}
        </NavLink>
      </li>
    )
  }


  return (
    <>
      <div className={`category_container ${openDepth}`}>
        <div className='category_main_box'>
          <button className='category_close' onClick={e => {
            props.setOpenCategory(false);
          }}>X</button>
          <ul className='main_category_lists'>
            <h2>카테고리</h2>
            {mainCategory}
          </ul>
          <div className={`category_2depth_box ${openDepth}`}>
            <button className='sub_category_close' onClick={e => {
              setOpenDepth(false);
            }}>{'<'}</button>
            <ul className='sub_category_lists'>
              <h2>{subMenuContents}</h2>
              {subCategory}
            </ul>
          </div>
        </div>
      </div>
      <div className='open_category_background'/>
    </>
  )
}