import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../Shared/baseUrl';

function RenderMenuItem({ dish, onClick
}) {
    return (
        <Card
        //onClick={() => onClick(dish.id)}
        >   <Link to={`/menu/${dish.id}`}>
                <CardImg src={baseUrl + dish.image} alt={dish.name} />
                <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                </CardImgOverlay>
            </Link>
        </Card>
    );
}
//second way of implementing functional component
const Menu = (props) => {
    const menu = props.//dishes
        dishes.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <RenderMenuItem dish={dish}
                    // onClick={props.onClick}
                    />
                </div>
            );
        });
    if (props.dishes.isLoading) {
        return (
            <div className="container">
                <div classname="row">
                    <Loading />
                </div>
            </div>
        );
    }
    else if (props.dishes.errMess) {
        return (
            <div className="container">
                <div classname="row">
                    <div className="col-12">
                        <h4>{props.dishes.errMess}</h4>
                    </div>
                </div>
            </div>
        );
    }
    else
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Menu</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    {menu}
                </div>
            </div>
        );
}

// import Dishe from './DishDetailComponent';
// class Menu extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//  selectedDish: null
// dishes: [
//     {
//         id: 0,
//         name: 'Uthappizza',
//         image: 'assets/images/uthappizza.png',
//         category: 'mains',
//         label: 'Hot',
//         price: '4.99',
//         description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
//     },
//     {
//         id: 1,
//         name: 'Zucchipakoda',
//         image: 'assets/images/zucchipakoda.png',
//         category: 'appetizer',
//         label: '',
//         price: '1.99',
//         description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
//     },
//     {
//         id: 2,
//         name: 'Vadonut',
//         image: 'assets/images/vadonut.png',
//         category: 'appetizer',
//         label: 'New',
//         price: '1.99',
//         description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
//     },
//     {
//         id: 3,
//         name: 'ElaiCheese Cake',
//         image: 'assets/images/elaicheesecake.png',
//         category: 'dessert',
//         label: '',
//         price: '2.99',
//         description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
//     }
// ],
//     }
//     console.log('Menu component constructor is invoked');
// }
// componentDidMount(){
//     console.log('Menu component componentDidMount is invoked');
// }
// onDishSelect(dish) {
//     this.setState({ selectedDish: dish });
// }

// renderDish(dish) {
//     if (dish != null) {
//         return (
//             <Card>
//                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//                 <CardBody>
//                     <CardTitle>{dish.name}</CardTitle>
//                     <CardText>{dish.description}</CardText>
//                 </CardBody>
//             </Card>
//         );
//     } else {
//         return (
//             <div></div>
//         );
//     }
// }
// render() {
//     const menu = this.props.dishes.map((dish) => {
//         return (
//             <div key={dish.id} className="col-12 col-md-5 m-1">
//                 {/* <Media tag="li">
//                         <Media left middle>
//                             <Media object src={dish.image} alt={dish.name} />
//                         </Media>
//                         <Media body className="ml-5">
//                             <Media heading>{dish.name}</Media>
//                             <p>{dish.description}</p>
//                         </Media>
//                     </Media> */}
//                 <Card onClick={() => this.props.onClick(dish.id)}
//                 //{() => this.onDishSelect(dish)}
//                 >
//                     <CardImg src={dish.image} alt={dish.name} />
//                     <CardImgOverlay>
//                         <CardTitle>{dish.name}</CardTitle>
//                     </CardImgOverlay>
//                 </Card>
//             </div>
//         );
//     });
//     console.log('Menu component render is invoked');

//     return (

//         <div className="container">
//             <div className="row">
//                 {/* <Media list> */}
//                 {menu}
//                 {/* </Media> */}
//             </div>
//             {/* <div className="row "> 
//                      {this.renderDish(this.state.selectedDish)} 
//                         <Dishe dish={this.state.selectedDish} />  
//                  </div> */}
//         </div>
//     );
// }
// }
export default Menu;