import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { Element} from 'react-scroll'
import './Main1.css';
import kamil from './Kamil.jpeg'
const Main1 = () => {
    return(
        <main class="l-main homedrop">
            <section className="home-flex"  id="home">
                <div class="home bd-grid">
                    <div className="home__data">
                    <Element name="Home" className="element"><h1 className="home__title">Hi,<br/>I'am <span className="home__title-color">Kamil</span><br/>Software developer</h1></Element>
                        <Element name="About" className="element"><a href="#" className="button">Learn more</a></Element>
                    </div>
                    <div class="home__social">
                        <a className="SocialIcons" href="https://google.com">
                        <AiFillGithub size="2.5rem" />
                        </a>
                        <a className="SocialIcons" href="https://google.com">
                            <AiFillInstagram size="2.5rem" />
                        </a>
                        <a className="SocialIcons" href="https://google.com">
                            <AiFillLinkedin size="2.5rem" />
                        </a>
                    </div>
                </div>
                <div className="home__img"> 
                    <img className="round" src={kamil} alt=""/>
                </div>
            </section>
        </main>
    );
}

export default Main1;