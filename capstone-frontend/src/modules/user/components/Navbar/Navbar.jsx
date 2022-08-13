import React from 'react';
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineSearch,
} from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { API_URL } from '../../../../utils/constants';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [active, setActive] = React.useState(false);
  const innerHeight = window.innerHeight - 74;

  React.useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
    return () => window.removeEventListener('scroll', changeNavbarColor);
  }, []);

  function changeNavbarColor() {
    if (window.scrollY >= innerHeight) {
      setActive(true);
    } else {
      setActive(false);
    }
  }
  const [result, setResult] = React.useState([]);
    const [text, setText] = React.useState('');
    const [selectedValue, setselectedValue] = React.useState('');
    const history = useHistory();
    var disable = document.getElementById("disable");
    var inputtext = document.getElementById("inputtext");
    const searchHandle = async (event) =>{
        let key = event.target.value;
        let result = await fetch(`${API_URL}/search/${key.charAt(0).toUpperCase() + key.slice(1)}`);
        result = await result.json();
        if(result){
          setResult(result.result);
        }
       if(key === '') {
         setResult([])
       }
       disable.style.display="block";
       setText(event.target.value);
      }
    
      const handleClick = (event, key) => {
        // var selectBox = document.getElementById("selectBox");
        
        // var selectedValue = selectBox?.options[selectBox.selectedIndex]?.value;
        // setselectedValue(`${key}`);
        setTimeout(() => {
          history.push(`/blog/${key}`)
        }, 500);
        var selectBox = document.getElementById("selectbox");
        console.log(selectBox); 
        disable.style.display="none";
           }

  
  return (
    <div
      className={
        active ? classnames(styles.container, styles.active) : styles.container
      }
    >
      <div className={styles.wrapper}>
        <div className={styles.logo}><Link to='/'><img src="https://res.cloudinary.com/dkhvcn7i6/image/upload/v1660358763/Logo/Vagary-white_pir3pp.png" /></Link></div>
        <div className={styles.menuContainer}>
          <div className={styles.hamburgermenu}>
          <input id="menutoggle" type="checkbox" />
    <label className={styles.menubtn} htmlFor="menutoggle">
    <div className={styles.topbun}></div>
  <div className={styles.meat}></div>
  <div className={styles.bottombun}></div>
    </label>
          <ul className={styles.menu}>
            <li className={styles.menuitem}>
              <Link to='/explore'>explore</Link>
            </li>
            <li className={styles.menuitem}>
              <Link to='/blog'>blog</Link>
            </li>
            <li className={styles.menuitem}>
              <Link to='/about'>about</Link>
            </li>
            <li className={styles.menuitem}>
              <Link to='/booking'>booking</Link>
            </li>
          </ul>
          </div>
        </div>
        <div className={styles.social}>
        <a href="https://www.instagram.com/"><AiOutlineInstagram /></a>
          <a href="https://twitter.com/home"><AiOutlineTwitter /></a>
          <a href="https://www.facebook.com/"><FaFacebookF /></a>
          <div className={styles.searchbox}>


          
<button className={styles.btnsearch}>  <AiOutlineSearch/>
</button> 
  <input id="inputtext" type="text" className={styles.inputSearch} placeholder="Type to Search..."
    onChange={searchHandle}
  />
  <div id="disable">
  {result && result.map((suggestion,i) =>
  <div id="selectbox" onClick={event => handleClick(event, suggestion._id)} key={i}>{suggestion.location}</div>
  )}
  </div>
  {/* <select value={selectedValue} id='selectBox' onChange={changeFun} className={styles.suggestion} >
    <option >{'Please select'}</option>
      {result.map((item, index) => (
      <>
        <option value={item._id}>{item.location}</option>
      </>
       ))}
  </select> */}
</div> 
        </div>
      </div>
    </div>
  );
}