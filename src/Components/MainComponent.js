import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './Components/MenuComponent'
import { DISHES } from './Shared/dishes'
import { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES
        };
    }
    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Reisotorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} />
            </div>
        );
    }
}
export default App;
