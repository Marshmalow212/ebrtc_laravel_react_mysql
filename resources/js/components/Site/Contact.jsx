import React, { Component } from 'react';
import { Jumbotron,Button } from 'reactstrap';
import Navbar from './Navbar';

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() { 
        return (  
            <div>
            <Navbar />
            <Jumbotron style={{paddingTop:'5rem'}}>
                <h1 className="display-3">Contact for Service</h1>
                <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <hr className="my-2" />
                <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                <p className="lead">
                <Button color="primary">Learn More</Button>
                </p>
            </Jumbotron>
            </div>
        );
    }
}
 
export default Contact;