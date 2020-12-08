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
import {
    //addComment
    postComment, fetchDishes, fetchComments, fetchPromos, fetchLeaders, postFeedback
} from '../Redux/ActionCreators';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { InitialFeedback } from '../Redux/forms';

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions
    }
}
const mapDispatchToProps = dispatch => ({
    //addComment:
    postFeedback: (feedback) => dispatch(postFeedback(feedback)),
    postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
    fetchDishes: () => { dispatch(fetchDishes()) },
    resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
    fetchComments: () => dispatch(fetchComments()),
    fetchPromos: () => dispatch(fetchPromos()),
    fetchLeaders: () => dispatch(fetchLeaders())
});

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
    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
        this.props.fetchLeaders();
    }

    render() {
        const HomePage = () => {
            return (
                // <Home dish={this.props //state
                //     //.dishes
                //     .dishes.dishes.filter((dish) => dish.featured)[0]}
                //     dishesLoading={this.props.dishes.isLoading}
                //     dishesErrMess={this.props.dishes.errMess}
                //     promotion={this.props//state
                //     .promotions.promotions.filter((promo) => promo.featured)[0]}
                //     leader={this.props//state
                //     .leaders.filter((lead) => lead.featured)[0]} />
                <Home
                    dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                    dishesLoading={this.props.dishes.isLoading}
                    dishErrMess={this.props.dishes.errMess}
                    promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                    promoLoading={this.props.promotions.isLoading}
                    promoErrMess={this.props.promotions.errMess}
                    leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
                    leaderLoading={this.props.leaders.isLoading}
                    leaderErrMess={this.props.leaders.errMess}
                />
            )
        }
        const DishWithId = ({ match }) => {
            console.log(match.params.dishId);
            return (
                // <Dishe dish={this.props//state
                //     //.dishes
                //     .dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                //     isLoading={this.props.dishes.isLoading}
                //     ErrMess={this.props.dishes.errMess}
                //     comments={this.props//state
                //         .comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                //     addComment={this.props.addComment} />
                <Dishe dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    isLoading={this.props.dishes.isLoading}
                    errMess={this.props.dishes.errMess}
                    comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                    commentsErrMess={this.props.comments.errMess}
                    postComment={this.props.postComment}
                />
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

                <TransitionGroup>
                    <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
                        <Switch location={this.props.location}>
                            <Route path="/home" component={HomePage} />
                            <Route path='/aboutus' component={() => <About 
                                leaders={this.props//state
                                .leaders.leaders} 
                                leaderLoading={this.props.leaders.isLoading}
                                leaderErrMess={this.props.leaders.errMess} />} />
                            <Route exact path="/menu" component={() => <Menu dishes={this.props//state
                                .dishes} />} />
                            <Route path='/menu/:dishId' component={DishWithId} />
                            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} postFeedback={this.props.postFeedback} />} />
                            <Redirect to="/home" />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
                <Footer />
            </div >
        );
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
