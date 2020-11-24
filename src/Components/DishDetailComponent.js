import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
//import Item from './Item';
import { Link } from 'react-router-dom';

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
            <div key={commen.id}>
                <p>{commen.comment}<br /></p>
                <p>--{commen.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', date: '2-digit' }).format(new Date(Date.parse(commen.date)))}</p>
            </div>
        );
    });
    return (
        <div>
            {com}
        </div>
    );
}
function RenderDish({ dish }) {
    return (
        <Card>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
            </CardBody>
        </Card>);
}

const Dishe = (props) => {
    //const dish = this.props.dish;
    console.log(props);
    if (props.dish != null) {
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
                        <p> <Item comments={props.comments} />
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