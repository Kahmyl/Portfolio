import './Main1.css';
import {FaHtml5,FaCss3Alt,FaPhp} from 'react-icons/fa';
import { Element} from 'react-scroll'
import {DiJavascript} from 'react-icons/di';
const Main3 = () => {
    return(
        <main className="l-main">
           <section className="skills section" id="skills">
           <Element name="Skills" className="element"><h2 className="section-title">Skills</h2></Element>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Velit optio id vero amet, alias architecto consectetur error eum eaque sit.</p>
                        <div className="bbd">
                            <div className="skills__data">
                                <div className="skills__names">
                                    <FaHtml5 className="skill_icon" size="2rem" />
                                    <span className="skills__name">HTML5</span>
                                </div>
                            </div>
                        </div>
                        <div className="bbd">
                            <div className="skills__data">
                                <div className="skills__names">
                                    <FaCss3Alt className="skill_icon" size="2rem" />
                                    <span className="skills__name">CSS3</span>
                                </div>
                            </div>
                        </div>
                        <div className="bbd">
                            <div className="skills__data">
                                <div className="skills__names">
                                    <DiJavascript className="skill_icon" size="2rem" />
                                    <span className="skills__name">JAVASCRIPT</span>
                                </div>
                            </div>
                        </div>
                        <div className="bbd">
                            <div className="skills__data">
                                <div className="skills__names">
                                    <FaPhp className="skill_icon" size="2rem" />
                                    <span className="skills__name"> PHP</span>
                                </div>
                            </div>
                        </div>
                     </div>
                    <div>              
                        <img src="assets/img/work3.jpg" alt="" class="skills__img"/>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main3;