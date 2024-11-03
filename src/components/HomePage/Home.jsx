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
      <section id="homePage" className="flex -z-10 flex-col items-center h-full justify-center bg-homebg">
        <Navbar />
        <ul className="box-area absolute overflow-hidden w-full h-full top-0 left-0">
          <li className="w-[80px] h-[80px] sm:w-[70px] sm:h-[70px] absolute sm:top-[130px] sm:left-[25%] top-[130px] left-[10%] block animate-[animate_20s_linear_infinite]">
            <img src={shape1} alt="shape" />
          </li>
          <li className="w-[60px] h-[60px] absolute top-[140px] left-[80%] sm:top-[120px] sm:w-[50px] sm:h-[50px] sm:left-[60%] block animate-[animate_20s_linear_infinite]">
            <img src={shape2} alt="shape" />
          </li>
          <li className="w-[90px] h-[90px] absolute top-[350px] left-[65%] sm:top-[270px] sm:left-[60%] block animate-[animate_20s_linear_infinite]">
            <img src={shape3} alt="shape" />
          </li>
          <li className="w-[90px] h-[90px] absolute top-[100px] left-[40%] sm:top-[60px] sm:w-[100px] sm:h-[100px] block animate-[animate_20s_linear_infinite]">
            <img src={shape4} alt="shape" />
          </li>
          <li className="w-[60px] h-[60px] absolute top-[350px] left-[15%] sm:left-[20%] sm:top-[300px] block animate-[animate_20s_linear_infinite]">
            <img src={shape5} alt="shape" />
          </li>
          <li className="w-[100px] h-[100px] absolute top-[270px] left-[34%] sm:top-[300px]  block animate-[animate_20s_linear_infinite]">
            <img src={shape6} alt="shape" />
          </li>
        </ul>
        <div className="mainContent z-10 h-[75vh] w-full justify-center flex items-center">
          <h1 className="text-3xl md:text-7xl  font-Oswald font-semibold text-white">Welcome to&nbsp;
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fbb040] via-[#f46728] to-[#ed1c24]" >
              MeshCraft
            </span>
          </h1>
        </div>
        <div className=" bg-white z-10 rounded-tl-3xl rounded-tr-3xl w-full 
        model-type-icons box-border  h-[30vh] px-1 py-4 flex flex-wrap justify-center gap-1 sm:gap-16">
          {software.map(item=>
            <div className="software-det flex flex-col items-center " key={item.name}>
              <div className="img hover:saturate-50 cursor-pointer" >
                <img src={item.image} className="h-5 w-5 sm:w-12 sm:h-12"  alt={item.name} />
              </div>
              <div>
                <p className="text-center text-[0.6rem] sm:text-sm w-[70px] font-Montserrat font-medium">{item.name}</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
