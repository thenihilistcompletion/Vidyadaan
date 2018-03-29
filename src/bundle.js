import React from 'react'
import {render} from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import {NavBar as Navbar} from './components/navbar.jsx'
import {CardList} from './components/lists.jsx'
import {Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle} from 'reactstrap'
import history from './history'
import {Link, Router, Switch, Route} from 'react-router-dom'
import './main.css'

const Subjects = () => (
    <div className="row d-flex justify-content-center">
                <div className="col-md-2">
                <Link to='/6'><Card>
                    <CardBody>
                    <CardTitle>Class 6<sup>th</sup></CardTitle>
                    </CardBody>
                </Card>
                </Link>
                </div>
                <div className="col-md-2">
                <Link to='/7'>
                <Card>
                    
                    <CardBody>
                    <CardTitle>Class 7<sup>th</sup></CardTitle>
                    </CardBody>
                    
                </Card>
                </Link>
                </div>
                <div className="col-md-2">
                <Link to='/8'>
                <Card>
                    <CardBody>
                    <CardTitle>Class 8<sup>th</sup></CardTitle>
                    </CardBody>
                </Card>
                </Link>
                </div>
                <div className="col-md-2">
                <Link to='/9'>
                <Card>
                    <CardBody>
                    <CardTitle>Class 9<sup>th</sup></CardTitle>
                    </CardBody>
                </Card>
                </Link>
                </div>
                <div className="col-md-2">
                <Link to='/10'>
                <Card>
                    <CardBody>
                    <CardTitle>Class 10<sup>th</sup></CardTitle>
                    </CardBody>
                </Card>
                </Link>
                </div>
            </div>
)

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid fill">
            <Navbar />
            <Router history={history}>
                <Switch>
                    <Route exact path='/' render={() => <Subjects />}/>
                    <Route path='/:subject?' render={props => <CardList subject={props.match.params.subject}/>} />
                </Switch>
            </Router>
            
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))