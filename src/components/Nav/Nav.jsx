import { useState } from "react";
import { NavLink } from "react-router-dom";
import Category from "./Category/Category";
import './nav.css';

export default function Nav() {
  /**
   *  
   */
  const searchSubmitHandler = (e) => {
    e.preventDefault();
  }

  const [openCategory, setOpenCategory] = useState(false);

  const openCategoryHandler = (e) => {
    e.preventDefault();
    setOpenCategory(!openCategory);
  }

  const [searchBody,setSearchBody] = useState('');

  const inputValueHandler = (e) => {
    setSearchBody(e.target.value);
  }

  return (
    <>
      <nav className="nav_container">
        <div className="nav_menu_bar">
          <a href="/" className="category nav_btn" onClick={openCategoryHandler}><span>카테고리</span></a>
          <NavLink to='/new_product' className="nav_btn">신상품</NavLink>
          <NavLink to='/discount_product' className="nav_btn">할인상품</NavLink>
          <NavLink to='/login' className="nav_btn">로그인</NavLink>
          <NavLink to='/join' className="nav_btn">회원가입</NavLink>
          <div className="search_container">
            <form onSubmit={searchSubmitHandler}>
              <input className="search_input_text" type='text' value={searchBody} onChange={inputValueHandler}/>
              <input className="search_input_submit" type='submit' value=''/>
            </form>
          </div>
        </div>
      </nav>
      {openCategory && <Category setOpenCategory={setOpenCategory}/>}
    </>
  )
}