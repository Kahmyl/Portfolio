import { projects } from '../constants/constants';
import { Element} from 'react-scroll'
import './Main1.css';
const Main4 = () => {
    return(
      <main className="l-main">
        <section className="skills section" id="skills">
          <Element name="Projects" className="element"><h2 className="section-title">Projects</h2></Element>
          <div className="work-layout">
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
              <div className="work-card">
                <img src="img_avatar.png" alt="Avatar" style={{width: "100%"}}/>
                <div className="work-container">
                  <h4><b>John Doe</b></h4>
                  <p>Architect & Engineer</p>
                </div>
              </div>
          </div>
        </section>
      </main>
    )
}

export default Main4;