import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Recipe from './Recipe';
import { removeItem,addQuantity,subtractQuantity } from './actions/cartActions'
import './style/Cart.css'
class Cart extends Component{

    //to remove the item completely
    handleRemove = (id)=>{
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id)=>{
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id)=>{
        this.props.subtractQuantity(id);
    }

    render(){
              
        let addedItems = this.props.items.length ?
            (  
                this.props.items.map(item=>{
                    return(
                        <li className="collection-item avatar" style={{display:"flex", margin:"1rem"}} key={item.id}>
                                    <div className="item-img"> 
                                        <img src={item.img} alt={item.img}/>
                                    </div>
                                
                                    <div className="item-desc" style={{width:"100%"}}>
                                        <b><span className="title">{item.title}</span></b>
                                        <p>{item.desc}</p>
                                        <p><b>Price: ₹ {item.price}</b></p> 
                                        <p>
                                            <b>Quantity: {item.quantity}</b> 
                                        </p>
                                        <div className="add-remove">
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAddQuantity(item.id)}}>arrow_drop_up</i></Link>
                                            <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleSubtractQuantity(item.id)}}>arrow_drop_down</i></Link>
                                        </div>
                                        <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleRemove(item.id)}}>Remove</button>
                                    </div>
                               </li>                        
                    )
                })
            ):

             (
                <p style={{display:"flex",alignItems:"center", justifyContent:"center"}}>Your Cart is Empty</p>
             )
       return(
            <div className="container">
                <div className="cart">
                    <h5>Your Cart:</h5>
                    <ul className="collection">
                        {addedItems}
                    </ul>
                </div>
                <Recipe/>
            </div>
       )
    }
}

const mapStateToProps = (state)=>{
    return{
        items: state.addedItems,
        //addedItems : state.addedItems
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        removeItem: (id)=>{dispatch(removeItem(id))},
        addQuantity: (id)=>{dispatch(addQuantity(id))},
        subtractQuantity: (id)=>{dispatch(subtractQuantity(id))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)