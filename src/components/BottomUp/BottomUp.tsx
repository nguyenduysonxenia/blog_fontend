import React,{useState} from 'react'
import PropTypes from 'prop-types'
import './BottomUp.scss'
function BottomUp(props: any) {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    }
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <div onClick={scrollToTop} className={`Bottom_up ${visible ? 'display_BottomUp' : ''}`}>
       <i className="fas fa-angle-up"></i>
    </div>
  )
}

BottomUp.propTypes = {

}

export default BottomUp

