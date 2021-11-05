import { Element} from 'react-scroll'
import './Main1.css';
import kamil from './Kamil.jpeg'
const Main2 = () => {
    return(
        <main className="l-main">
           <section className="about section " id="about">
                <Element name="About" className="element"><h2 className="section-title">About</h2></Element>

                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={kamil} alt=""/>
                    </div>
                    
                    <div>
                        <h2 className="about__subtitle">I'am Kamil</h2>
                        <p className="about__text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate cum expedita quo culpa tempora, assumenda, quis fugiat ut voluptates soluta, aut earum nemo recusandae cumque perferendis! Recusandae alias accusamus atque.</p>           
                    </div>                                   
                </div>
            </section>
        </main>
    );
}

export default Main2;