import React from 'react';
import {
    Button, ListGroup, ListGroupItem, Collapse,
    Modal, ModalHeader, ModalBody, ModalFooter
} from 'reactstrap';
import classes from './classes'
class CardList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            classes: classes[props.subject]
        }

    }

    render() {
        let { subject } = this.props
        console.log(subject);

        return (

            <ListGroup>
                <ListGroupItem active>{subject}</ListGroupItem>
                {this.state.classes.map(d => {
                    return (
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
            collapse: false,
            modal: false,
            modalContent: ''
        }
        this.click = this.click.bind(this)
        this.launch = this.launch.bind(this)
        this.toggle = this.toggle.bind(this)
    }
    click(e, c) {
        this.setState({ collapse: !this.state.collapse })
    }
    launch(k) {
        let { cl } = this.props
        this.setState({
            modal: !this.state.modal,
            modalContent: { link: cl.links[k], title: cl.content[k] }
        })
    }
    toggle() {
        this.setState({
            modal: !this.state.modal,
            modalContent: ''
        })
    }
    render() {

        let { collapse, modalContent } = this.state
        console.log(collapse);
        let { cl } = this.props
        return (
            <ListGroupItem onClick={e => this.click(e, 6)} className="main-list-item">
                {this.props.cl.title}
                <Collapse isOpen={collapse}>
                    <ListGroup style={{
                        margin: '10px'
                    }}>
                        {cl.content.map((d, k) => (
                            <ListGroupItem key={k} onClick={e => {
                                e.stopPropagation()
                                this.launch(k)
                            }
                            }>
                                {d}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                </Collapse>
                <Modal className='myModal' isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>{modalContent.title}</ModalHeader>
                    <ModalBody>
                        <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', width: '100%', height: '100%' }}>
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                flexDirection: 'row',
                                width: '100%',
                                height: '100%'
                            }}>
                                <iframe
                                    src={modalContent.link}
                                    frameBorder="0"
                                    width="640"
                                    height="389"
                                    allowFullScreen="true"
                                ></iframe>
                            </div>
                        </div>

                    </ModalBody>

                </Modal>
            </ListGroupItem>
        )
    }
}


export { CardList }
