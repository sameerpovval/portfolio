import { motion } from "framer-motion";
import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";




const Contact = () => {
 
  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="bg-black-100 flex-[0.75] rounded-2xl p-8"
      >
        <Header useMotion={false} {...config.contact} />
        <div>
          <div style={{color:"skyblue", marginBottom:"10px"}}>
           <a href="mailto:sameerpa2003@gmail.com">sameerpa2003@gmail.com</a>
          </div>
          <div style={{display:"flex",justifyContent:"space-around",width:"30%"}}>
            <span><FaPhoneSquareAlt/></span>
           <span>8138030828</span>
          </div>
          <div style={{marginTop:"20px", display:"flex", justifyContent:"space-around", width:"30%"}}>
            <span>
            <Link to={'https://github.com/sameerpovval'}><FaGithub size={30}/></Link>
            </span>
            <span>
            <Link to={'https://www.linkedin.com/in/sameer-pa-5b05a82b4/'}><FaLinkedin size={30}/></Link>
            </span>
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
