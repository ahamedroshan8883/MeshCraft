import logo from "../../assets/Horizontalwithbgsmall.png";
import { FaSearch } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { gsap } from "gsap";
import "../NavBar/Navbar.css";
import { useEffect, useRef, useState } from "react";
import { BsPersonFill } from 'react-icons/bs';
import { RiLoginCircleFill } from "react-icons/ri";
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";

export default function Navbar() {
    let[isVisible,setIsVisible] = useState(true);
    const navItemsRef = useRef(null)
    const navIconsRef = useRef(null)
    let navbarRef = useRef(null);
    let lastScroll = useRef(window.scrollY);
    let[isOpenDD,setIsOpenDD] = useState(false);
    let[isOpenNav,setIsOpenNav] = useState(false);
    let [isScroll,setIsScroll] = useState(false);
    


    const handleScroll=()=>{
      if(window.scrollY>lastScroll.current){
        setIsVisible(false);
      }else{
        setIsVisible(true);
      }
      lastScroll.current=window.scrollY;
    }

    useEffect(()=>{
      const handleScrollEvent = ()=>{
        handleScroll();
        if(isVisible){
          gsap.to(navbarRef.current,{y:0,duration:0.1});
        }else{
          gsap.to(navbarRef.current,{y:"-110%",duration:0.1});
        }
      }
      window.addEventListener("scroll",handleScrollEvent);
      return ()=>{
      window.removeEventListener("scroll",handleScrollEvent);
      }
    },[isVisible])
    useEffect(()=>{

      // logo rising animation
    gsap.from('.logo', {
        opacity: 0,  // Start from 0 opacity
        x: 20,       // Start 20px right, move to original position
        duration: 1, // 1 second for the animation
        ease: "power1.out" // Optional easing for smoother animation
    });
    gsap.to('.logo', {
      opacity: 1,
      x: 0,
      duration: 1
    });

    // list items animation
    if(navItemsRef.current.children){
      gsap.from(navItemsRef.current.children, {
        opacity: 0,  // Start from 0 opacity
        x: -20,       // Start 20px right, move to original position
        duration: 1, // 1 second for the animation
        ease: "power1.out" // Optional easing for smoother animation
    });
    gsap.to(navItemsRef.current.children, {
      opacity: 1,
      x: 0,
      duration: 1
    });
    }
    if(navIconsRef.current.children){
      gsap.from(navIconsRef.current.children, {
        opacity: 0,  // Start from 0 opacity
        x: -20,       // Start 20px right, move to original position
        duration: 1, // 1 second for the animation
        ease: "power1.out" // Optional easing for smoother animation
    });
    gsap.to(navIconsRef.current.children, {
      opacity: 1,
      x: 0,
      duration: 1
    });
    }
    },[])
    const toggleDropdown = ()=>{
      setIsOpenDD(!isOpenDD);
      console.log(isOpenDD);
      
    }
    useEffect(()=>{
      if (isOpenDD) {
        gsap.to(".profileSection", {
            // height: "auto", // Let height expand automatically
            duration: 0.1,
            ease: "power2.out",
            opacity: 1,
            display: "block", // Make sure it's visible
        });
    } else {
        gsap.to(".profileSection", {
            // height: 0, // Collapse it to 0 height
            duration: 0.1,
            ease: "power2.in",
            opacity: 0, // Fade out the dropdown
            display: "none", // After collapsing, hide it completely
        });
    }
    },[isOpenDD])
    //this function is to handle the navbar action
const handleNavBackground =()=>{
  if(window.scrollY>50){
    setIsScroll(true);
  }else{
    setIsScroll(false);
  }
}
window.addEventListener("scroll",handleNavBackground);
    return (
        <>
        <div ref={navbarRef} className= {`fixed top-0 left-0 w-full z-20 backdrop-blur-md
        ${isScroll ? " sm:bg-gradient-to-r from-[#303030] via-[#333333] via-[#363636] via[#393939] to-[#3c3c3c] sm:shadow-custom" : ""}` 
                }>
          <div className="logo cursor-pointer  h-auto flex flex-col sm:flex-row items-center justify-between 
          sm:bg-none sm:px-5 lg:px-2 xl:px-8 max-lg:py-2 px-0">
            <a href="#" className="self-start sm:self-center">
              <img src={logo} alt="logo" className=" h-[40px] sm:h-[40px] lg:h-[50px]"/>
            </a>
            <nav
                className={`navbar transition-all sm:relative px-4 rounded-md  duration-300 ease-in-out flex items-center justify-between text-white transform 
                  ${isOpenNav ? "opacity-100 translate-y-0 h-[50vh]" : "opacity-0 -translate-y-full h-0 sm:h-full sm:opacity-100 sm:translate-y-0" }`}>
                    <ul className="navItems  text-sm lg:text-lg h-full justify-evenly  flex flex-col sm:flex-row  font-Montserrat font-medium cursor-pointer
                       "  ref={navItemsRef}>
                        <li className="lg:pr-14 sm:pr-5  hover:text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]">Home</li>
                        <li className="lg:pr-14 sm:pr-5  hover:text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]">About Us</li>
                        <li className="lg:pr-14 sm:pr-5  hover:text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]">Market</li>
                        <li className="lg:pr-14 sm:pr-5  hover:text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]">Services</li>
                        <li className="lg:pr-0 sm:pr-0  hover:text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]">Contact</li>
                        <span className="bar hidden border-b-4 border-orange-600 transition-all duration-500 ease z-30 sm:block absolute bg-none bottom-0 left-0 outline-none "></span>
                    </ul>
            </nav>
          <div>
          <ul className="navIcons text-white absolute sm:static top-0 right-2 py-4 list-none flex items-center gap-5" ref={navIconsRef} >
                        <li ><FaSearch className="bg-gradient-to-r from-[#2b006f] to-[#f56f49] bg-clip-text "/></li>
                        <li>
                          <button onClick={()=>{toggleDropdown();console.log(isOpenDD);
                          }}>
                            <FaUserAlt />
                          </button>
                          <div 
                          className="profileSection backdrop-blur-md w-[120px] rounded text-center 
                           shadow-profileBoxShadow opacity-0 hidden transition-all duration-500 ease-in-out absolute top-10 right-2" >
                            <ul className="cursor-pointer backdrop-blur-md font-Montserrat bg-none font-medium">
                              <li className="flex items-center justify-center py-2 px-1 
                              hover:text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]"><BsPersonFill className="text-white"/>&nbsp;Profile</li>
                              <li className="flex items-center justify-center py-2 px-1
                              hover:text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]" ><RiLoginCircleFill className="text-white"/>&nbsp;Login</li>
                            </ul>
                          </div>
                        </li>
                        <button onClick={()=>setIsOpenNav(!isOpenNav)}>
                          <li className="sm:hidden"  >{isOpenNav?<ImCross/>:<TiThMenu/>}</li>
                        </button>
                    </ul>
          </div>
          </div>
        </div>
            {/* <header>
                <nav ref={navbarRef} 
                  className={`navbar flex items-center justify-between text-white w-full box-border fixed top-0 left-0 z-10 transition transform duration-0.1 px-[10px] ease 
                  ${isScroll ? "visible bg-gradient-to-r from-[#303030] via-[#333333] via-[#363636] via[#393939] to-[#3c3c3c] shadow-custom" : ""}`}>
                    
                    <ul className="navItems lg:flex list-none gap-14 font-Montserrat font-medium cursor-pointer
                       relative flex max-sm::flex-col max-lg:flex-row"  ref={navItemsRef}>
                        <li>About Us</li>
                        <li>Market</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                    <ul className="navIcons list-none flex gap-10" ref={navIconsRef} >
                        <li><FaSearch /></li>
                        <li>
                          <button onClick={toggleDropdown} style={{background:"none",outline:"none",border:"none",color:"white"}}>
                            <FaUserAlt />
                          </button>
                          <div 
                          className="profileSection bg-[#333333] w-[120px] rounded absolute text-center left-[-110px] 
                          top-[25px] shadow-profileBoxShadow opacity-0 hidden transition-all duration-500 ease-in-out" >
                            <ul className="cursor-pointer font-Montserrat font-medium">
                              <li className="flex items-center justify-center py-2 px-1"><BsPersonFill />&nbsp;Profile</li>
                              <li className="flex items-center justify-center py-2 px-1" ><RiLoginCircleFill className="inline"/>&nbsp;Login</li>
                            </ul>
                          </div>
                        </li>
                    </ul>
                </nav>
            </header> */}
        </>
    );
};
