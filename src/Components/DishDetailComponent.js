import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
//import Item from './Item';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../Shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

// class Dishe extends Component {

//     componentDidMount() {
//         console.log('DishDetail component componentDidMount is invoked');
//     }
//     componentDidUpdate() {
//         console.log('DishDetail component componentDidUpdate is invoked');
//     }
//     render() {
//         console.log('DishDetail component render is invoked');

function Item(props) {
    const com = props.comments.map((commen) => {
        return (
            <Fade in>
            <li key={commen.id}>
                <p>{commen.comment}</p>
                <p>--{commen.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', date: '2-digit' }).format(new Date(Date.parse(commen.date)))}</p>
            </li>
            </Fade>
        );
    });
    return (
        <div>
            <Stagger in>
            {com}
            </Stagger>
            <CommentForm dishId={props.dishId} postComment={props.postComment} />
        </div>
    );
}
function RenderDish({ dish }) {
    return (
        <FadeTransform
        in
        transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
        }}>
        <Card>
            <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>
        </FadeTransform>
        );
}

const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }
    handleSubmit(values) {
        // console.log('Current State is: ' + JSON.stringify(//this.state
        //     values));
        // alert('Current State is: ' + JSON.stringify(//this.state
        //     values));
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
    }
    render() {
        return (
            <div>
                <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span>  Submit Comment</Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <div className="form-group">
                                <Label htmlFor="rating" >Rating</Label>
                                <Control.select model=".rating" name="rating" import="Select..."
                                    className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </Control.select>
                            </div>

                            <div className="form-group">
                                <Label htmlFor="Authorname" >Your Name</Label>
                                <Control.text model=".authorname" id="authorname" name="authorname"
                                    placeholder="Your Name"
                                    className="form-control"
                                    validators={{
                                        minLength: minLength(3), maxLength: maxLength(15)
                                    }}
                                />
                                <Errors
                                    className="text-danger"
                                    model=".authorname"
                                    show="touched"
                                    messages={{
                                        minLength: 'Must be greater than 2 characters',
                                        maxLength: 'Must be 15 characters or less'
                                    }}
                                />
                            </div>
                            <div className="form-group">
                                <Label htmlFor="comment">Comment</Label>
                                <Control.textarea model=".comment" id="comment" name="comment"
                                    rows="6"
                                    className="form-control" />
                            </div>
                            <div className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                    </Button>
                            </div>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const Dishe = (props) => {
    //const dish = this.props.dish;
    console.log(props);
    if (props.isLoading) {
        return (
            <div className="container">
                <div classname="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div classname="row">
                    <h4>{this.props.errMess}</h4>
                </div>
            </div>
        );
    }
    else if (props.dish != null) {
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <RenderDish dish={props.dish} />
                        {/* <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card> */}
                    </div>
                    <div className="col-12 col-md-5 m-3">
                        <p><strong>Comments</strong><br /></p>
                        <p> <Item comments={props.comments}
                            postComment={props.postComment}
                            dishId={props.dish.id} />
                        </p>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div></div>
        );
    }

}
//}
export default Dishe;