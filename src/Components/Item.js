import { Component } from 'react';

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        const com = this.props.i.map((commen) => {
            return (
                <div key={commen.id}>
                    <p>{commen.comment}<br />--{commen.author} ,{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', date: '2-digit' }).format(new Date(Date.parse(commen.date)))}</p>
                </div>
            );
        });
        return (
            <div>
                {com}
            </div>
        );
    }
}
export default Item;