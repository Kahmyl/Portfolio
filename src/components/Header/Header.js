import { GiKnot } from 'react-icons/gi';
import { Link } from 'react-scroll'
import './Header.css';
const Header = () => {
    return(
        <div className="Container">
            <div className="Div1">
                <div className="Link1">
                    <Link activeClass="active"
                    className="Home"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55}>
                       <GiKnot size="3rem" /><span>Kamil</span>
                    </Link>
                </div>
            </div>
            <div className="Div2">
                <div className="Link2">
                    <Link activeClass="active"
                    className="Home"
                    to="Home"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55} 
                    >
                       Home
                    </Link>
                </div>
                <div className="Link2">
                    <Link activeClass="active"
                    className="About"
                    to="About"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55} 
                    >
                       About
                    </Link>
                </div>
                <div className="Link2">
                    <Link activeClass="active"
                    className="Skills"
                    to="Skills"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55} 
                    >
                       Skills
                    </Link>
                </div>
                <div className="Link2">
                    <Link activeClass="active"
                    className="Projects"
                    to="Projects"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55} 
                    >
                       Projects
                    </Link>
                </div>
                <div className="Link2">
                    <Link activeClass="active"
                    className="Contact"
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    offset={-55} 
                    >
                       Contact
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;