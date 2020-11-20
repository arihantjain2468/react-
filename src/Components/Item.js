import { Component } from 'react';

class Item extends Component{
constructor(props){
    super(props);
    this.state={

    };
}
render(){
    const com= this.props.i.map((commen) => {
        return (
            <div key={commen.id}>
                <p>{commen.comment}<br/>--{commen.author} , {commen.date}</p>
            </div>
        );
    });
    return(
          <div>
              {com}
          </div>
    );
    }
}
export default Item;