import React, {Component} from 'react';
import { Link } from 'react-router';

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default  ">
                    <div className="container-fluid n1">
                        <div className="navbar-header">
                            <a className="navbar-brand text" href="#"><marquee><strong>Web</strong> Development</marquee></a>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav navbar-right">
                                {/* Change from a to Link */}
                                <li ><Link to="/" activeClassName="active ">Home</Link></li>
                                <li ><Link to="/cars" activeClassName="active ">Course</Link></li>
                                <li ><Link to="/about" activeClassName="active">About</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
                {/* <div className="footer footer-default">
                <div className="container-fluid bg-4  n1">
                    <div>
                        <h4>
                            Web Development
                        </h4>
                    </div>

                </div>
                </div>     */}
                <div className="container">
                    {this.props.children}
                </div>
 
                {/* <div className="footer footer-default">
                <div className="container-fluid bg-4  n1">
                    <div>
                        <h4>
                            Web Development
                        </h4>
                    </div>

                </div>
                </div>    */}
                
            
            </div>
            
        );
    }
}

export default Main