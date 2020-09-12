import React, { Component } from 'react';
import { Link } from 'react-router';
class Home extends Component {
    render(){
        return (
        <div className="container">
            <div><h1 className="hh1">
                        ......WEB <br/>..............DEVELOPMENT</h1></div>
             <div className="row">
            <div className="col-lg-8 ">
               
                    
                        <br/>
                    <img className="i1 " src="https://images.pexels.com/photos/3182773/pexels-photo-3182773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Web development" />

                </div>

           
            <div className="col-lg-4">

               <div className="jumbotron ii">
                   <p>A Simple Guide For Web Development</p>
               </div>
    <br/>
    <br/>

               <div className="jumbotron ii">
                   <p>This is very basic for all.<Link to="/cars" activeClassName="active ">For more</Link></p>
               </div>
                
               
 
 
                

                </div>
            
            </div>
            <br/>
            <br/>
            <br/>

            <div className="container ">
            <div className="jumbotron ">
            <div className="row">
                
                    <div className="col-md-4 col-sm-4">
                        <div className="panel panel-default">
                        <div className="panel-heading">

                        <img className="i2 img-responsive " src="https://catalin.red/dist/uploads/2011/01/css3-html5-logo-initial.png" />
                        <div className="panel-body text-center">
                        <Link to="/cars" activeClassName="active "> <p>HTML5</p> </Link>

                        </div>
                        
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="panel panel-default">
                        <div className="panel-heading">

                        <img className="i2 img-responsive " src="https://cdn.freebiesupply.com/logos/thumbs/2x/css3-logo.png" />
                        <div className="panel-body text-center">
                        <Link to="/cars" activeClassName="active "><p>CSS</p></Link>

                        </div>
                        
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="panel panel-default">
                        <div className="panel-heading">

                        <img className="i2 img-responsive" src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/082014/js1_0.png?itok=9fCD5b30" />
                        <div className="panel-body text-center">
                        <Link to="/cars" activeClassName="active "> <p>JavaScript</p> </Link>

                        </div>
                        
                        </div>
                        </div>
                    </div>

                </div>
                <br/>
                <hr className="i3"></hr>
                <br/>

                <div className="row">
                
                <div className="col-md-4 col-sm-4">
                        <div className="panel panel-default">
                        <div className="panel-heading">

                        <img className="i2 img-responsive" src="https://i.pinimg.com/originals/f3/47/70/f34770503b90f26ea389f557500ff825.png" />
                        <div className="panel-body text-center">
                        <Link to="/cars" activeClassName="active "> <p>ReactJS</p> </Link>

                        </div>
                        
                        </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4">
                        <div className="panel panel-default">
                        <div className="panel-heading">

                        <img className="i2 img-responsive single-gallery-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png" />
                        <div className="panel-body text-center">
                        <Link to="/cars" activeClassName="active "><p>NodeJS</p> </Link>

                        </div>
                        
                        </div>
                        </div>
                    </div>
                    

                </div>
            </div>




            
            </div>
            {/* <div className="footer footer-default">
                <div className="container-fluid bg-4 n1">

                    <div className="jumbotron">
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

export default Home