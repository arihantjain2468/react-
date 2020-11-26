import Menu from './MenuComponent';
import Home from './HomeComponent';
// import { DISHES } from '../Shared/dishes';
// import { LEADERS } from '../Shared/leaders';
// import { PROMOTIONS } from '../Shared/promotions';
// import { COMMENTS } from '../Shared/comments';
import { Component } from 'react';
import Contact from './ContactComponent';
import Dishe from './DishDetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}
class Main extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     dishes: DISHES,
        //     comments: COMMENTS,
        //     leaders: LEADERS,
        //     promotions: PROMOTIONS
        //     selectedDish: null
        // };
    }
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }
    render() {
        const HomePage = () => {
            return (
                <Home dish={this.props//state
                    .dishes.filter((dish) => dish.featured)[0]}
                    promotion={this.props//state
                    .promotions.filter((promo) => promo.featured)[0]}
                    leader={this.props//state
                    .leaders.filter((lead) => lead.featured)[0]} />
            )
        }
        const DishWithId = ({ match }) => {
            console.log(match.params.dishId);
            return (
                <Dishe dish={this.props//state
                    .dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props//state
                    .comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
            );
        }
        return (
            <div>
                <Header />
                {/* <div className="container">
                    <div className="row">
                        <Menu dishes={this.state.dishes}
                            onClick={(dishId) => this.onDishSelect(dishId)} />
                    </div>
                    <Dishe dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div> */}
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path='/aboutus' component={() => <About leaders={this.props//state
                    .leaders} />} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props//state
                    .dishes} />} />
                    <Route path='/menu/:dishId' component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </div>
        );
    }
}
export default withRouter(connect(mapStateToProps)(Main));
