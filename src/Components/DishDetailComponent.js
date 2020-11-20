import { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import Item from './Item';
class Dishe extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {

        const dish = this.props.dish;

        if (dish != null) {
            return (
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        <Card>
                            <CardImg width="100%" src={dish.image} alt={dish.name} />
                            <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                    <div className="col-12 col-md-5 m-3">
                        <p><strong>Comments</strong><br />
                            <Item i={dish.comments} />
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div></div>
            );
        }

    }
}
export default Dishe;