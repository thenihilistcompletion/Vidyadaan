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
)

class App extends React.Component {
    render() {
        return (
            <div className="container-fluid fill">
            <Navbar />
            <Router history={history}>
                <Switch>
                    <Route exact path='/' render={() => <Subjects />}/>
                    <Route path='/:subject?' render={props => <CardList subject={props.match.params.value}/>} />
                </Switch>
            </Router>
            
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))