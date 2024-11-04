import Navbar from "../NavBar/Navbar";
import "../HomePage/Home.css";
import blender from "../../assets/SoftwareLogo/Blender.png"
import maya from "../../assets/SoftwareLogo/Maya.png";
import santer from "../../assets/SoftwareLogo/Santer.png";
import unity from "../../assets/SoftwareLogo/Unity3D.png"
import unrealEngine from "../../assets/SoftwareLogo/UnrealEngine.png"
import shape1 from "../../assets/Background shapes/1-removebg-preview.png"
import shape2 from "../../assets/Background shapes/2-removebg-preview.png"
import shape3 from "../../assets/Background shapes/3-removebg-preview.png"
import shape4 from "../../assets/Background shapes/4-removebg-preview.png"
import shape5 from "../../assets/Background shapes/5-removebg-preview.png"
import shape6 from "../../assets/Background shapes/6-removebg-preview.png"
import shape7 from "../../assets/Background shapes/7-removebg-preview.png"
import shape8 from "../../assets/Background shapes/8-removebg-preview.png"
import shape9 from "../../assets/Background shapes/9-removebg-preview.png"



export default function Home() {
  let software = [
    {
      name:"Blender",
      image:blender
    },
    {
      name:"Maya",
      image:maya
    },
    {
      name:"Unity",
      image:unity
    },
    {
      name:"Unreal Engine",
      image:unrealEngine
    },{
      name:"Substance Painter",
      image:santer
    }
]
  return (
    <>
    {/* landing page section
    <span className="fade absolute z-10 top-[0px] w-[60vw] left[100px] sm:top-[-100px] sm:left-[-200px] contents-[' '] blur-3xl 
    bg-[radial-gradient(circle,rgba(244,103,40,0.4),rgba(187,68,52,0.4),rgba(125,44,48,0.4),rgba(64,26,33,0.4),rgba(0,0,0,0.4))] bg-opacity-20 h-[300px] z-51 rounded-full "></span>
    <span className="fade z-10 absolute bottom-[-5px] w-[50vw] lg:w-[80vh] right-[150px] contents-[''] blur-3xl bg-opacity-20 h-[300px] bg-custom-gradient z-51 rounded-full "></span> */}
    {/* <span className="fase absolute bottom-[0] left-[300px] contents-['hiii'] blur-3xl bg-opacity-50 h-[300px] w-[200px] bg-[#f46728] z-51 rounded-full "></span> */}
      <section id="homePage" className="flex -z-10 flex-col h-full bg-homebg">
        <Navbar />
        <div className="mainContent relative z-10 h-[75vh] w-full justify-center flex items-center">
        <ul className="box-area -z-20 overflow-hidden w-full h-full absolute left-0 top-0">
          {/* 1 */}
          <li className="absolute w-[25vw] h-[25vw] sm:w-[13vw] sm:h-[13vh] sm:top-[25vh] sm:left-[7vw] top-[10vh] left-[10vw] opacity-50 block">
            <img src={shape9} alt="shape" />
          </li>
          {/* 2 */}
          <li className="absolute w-[20vw] h-[20vh] top-[10vh] left-[75vw] sm:w-[12vw] sm:h-[12vh] sm:top-[25vh] sm:left-[80vw] opacity-50 block">
            <img src={shape7} alt="shape" />
          </li>
          {/* 3 */}
          <li className="absolute w-[20vw] h-[20vw] top-[55vh] left-[75vw] sm:w-[10vw] sm:h-[10vh] sm:left-[70vw] sm:top-[45vh] opacity-50 block">
            <img src={shape3} alt="shape" />
          </li>
          {/* 4 */}
          <li className="absolute w-[30vw] h-[30vw] top-[15vh] left-[40vw] sm:w-[15vw] sm:h-[15vh] sm:top-[15vh] opacity-50 block">
            <img src={shape4} alt="shape" />
          </li>
          {/* 5 */}
          <li className="absolute w-[20vw] h-[20vw] top-[55vh] left-[22vw] sm:h-[11vh] sm:w-[11vw] sm:left-[20vw] sm:top-[45vh] opacity-50 block">
            <img src={shape5} alt="shape" />
          </li>
          {/* 6 */}
          <li className="absolute w-[15vw] h-[15vw] top-[42vh] left-[30vw] sm:h-[12vh] sm:w-[12vw] sm:left-[37vw] sm:top-[55vh] opacity-50 block">
            <img src={shape6} alt="shape" />
          </li>
          {/* 7 */}
          <li className="absolute w-[15vw] h-[15vw] top-[45vh] left-[60vw] sm:w-[12vw] sm:h-[12vh] sm:top-[55vh] sm:left-[55vw] md:w-[7vw] md:h-[7vw] opacity-50 block">
            <img src={shape8} alt="shape" />
          </li>
        </ul>

          <h2 className="text-3xl md:text-5xl font-Oswald font-semibold text-white">Welcome to&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]" >
              MeshCraft
            </span>
          </h2>
        </div>
        <div className=" bg-white z-10 rounded-tl-3xl rounded-tr-3xl w-full 
        model-type-icons box-border  h-[30vh] py-4 flex flex-wrap justify-center sm:gap-16">
          {software.map(item=>
            <div className="software-det h-10 flex flex-col items-center " key={item.name}>
              <div className="img hover:saturate-50 cursor-pointer" >
                <img src={item.image} className="h-5 w-5 sm:w-12 sm:h-12"  alt={item.name} />
              </div>
              <div>
                <p className="text-center text-[0.6rem] sm:text-sm w-[50px] font-Montserrat font-medium">{item.name}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
