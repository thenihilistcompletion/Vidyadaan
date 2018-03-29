import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar as Navbar} from './components/navbar.jsx'
import {CardList} from './components/lists.jsx'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'

import {Link} from 'react-router-dom'
import './main.css'
class App extends React.Component {
    render() {
        return (
            <div className="container-fluid fill">
            <Navbar />
            <div className="row d-flex justify-content-center">
                <div className="col-md-3">
                <Link to='/math'><Card>
                    <CardBody>
                    <CardTitle>Math</CardTitle>
                    </CardBody>
                </Card>
                </Link>
                </div>
                <div className="col-md-3">
                <Link to='/science'>
                <Card>
                    
                    <CardBody>
                    <CardTitle>Science</CardTitle>
                    </CardBody>
                    
                </Card>
                </Link>
                </div>
                <div className="col-md-3">
                <Link to='/social'>
                <Card>
                    <CardBody>
                    <CardTitle>Social</CardTitle>
                    </CardBody>
                </Card>
                </Link>
                </div>
            </div>
            
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))