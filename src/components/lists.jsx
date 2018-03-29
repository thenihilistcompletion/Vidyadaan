import React from 'react';
import {
     Button, ListGroup, ListGroupItem, Collapse
} from 'reactstrap';

class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classes :[{
                title: 6,
                content: [
                    'PPT 1',
                    'PPT 2',
                    'PPT 3',
                    'PPT 4',
                    'PPT 5',
                    'PPT 6',
                    'PPT 7',
                    'PPT 8'
                ]
            }, {
                title: 7,
                content: [
                    'PPT 1',
                    'PPT 2',
                    'PPT 3',
                    'PPT 4',
                    'PPT 5',
                    'PPT 6',
                    'PPT 7',
                    'PPT 8'
                ]
            }, {
                title: 8,
                content: [
                    'PPT 1',
                    'PPT 2',
                    'PPT 3',
                    'PPT 4',
                    'PPT 5',
                    'PPT 6',
                    'PPT 7',
                    'PPT 8'
                ]
            }, {
                title: 9,
                content: [
                    'PPT 1',
                    'PPT 2',
                    'PPT 3',
                    'PPT 4',
                    'PPT 5',
                    'PPT 6',
                    'PPT 7',
                    'PPT 8'
                ]
            }, {
                title: 10,
                content: [
                    'PPT 1',
                    'PPT 2',
                    'PPT 3',
                    'PPT 4',
                    'PPT 5',
                    'PPT 6',
                    'PPT 7',
                    'PPT 8'
                ]
            }]
        }
        
    }
    
    render() {
        return (

            <ListGroup>
            {this.state.classes.map(d => {
                return(
                    <CardListItem key={d.title} cl={d} />
                )
            })}
            </ListGroup>

        )
    }
}
class CardListItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            collapse: false
        }
        this.click = this.click.bind(this)
    }
    click(e, c) {
        this.setState({collapse: !this.state.collapse})
    }
    render() {
        let {collapse} = this.state
        console.log(collapse);
        let {cl} = this.props
        return (
            <ListGroupItem onClick={e => this.click(e, 6)} className="main-list-item">
                Class {this.props.cl.title}<sup>th</sup>
                <Collapse isOpen={collapse}>
                    <ListGroup>
                        {cl.content.map(d => (
                            <ListGroupItem onClick={e => e.stopPropagation()}>
                                {d}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Collapse>
            </ListGroupItem>
        )
    }
}


export { CardList }
