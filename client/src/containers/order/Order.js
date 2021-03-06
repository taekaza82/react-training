import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Axios from "axios";

class Order extends Component {

    constructor(props) {
		super(props);
        this.state = { orders: "" };
        //this.delOrder = this.delOrder.bind(this);
	}
    
    componentDidMount() {
        Axios.get("http://localhost:3001/orders").then(
            res => {
                this.setState({orders : res.data});
            }
        )
    }

    delOrder(order){
        Axios.delete("http://localhost:3001/orders/" + order.id).then(
            res => {
                Axios.get("http://localhost:3001/orders").then(
                    res => {
                        this.setState({orders : res.data});
                    }
                )
            }
        )
    }

    showOrder() {
        return this.state.orders && this.state.orders.map(order => {
            const date = new Date(order.orderedDate);
            return (
                <div className="col-md-3">
                    <hr/>
                    <p className="text-right">
                        <button className="btn btn-danger btn-sm title" onClick={() => this.delOrder(order)}>X</button>
                    </p>
                    <h5>วันที่ {date.toLocaleDateString()} {date.toLocaleTimeString()}</h5>
                    <ul>
                        {order.orders && order.orders.map(
                            record => {
                                return (
                                    <li>
                                        {record.product.productName} x {record.quantity} = {record.product.unitPrice * record.quantity}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                    <p className="title">ยอดรวม {order.totalPrice}</p>
                </div>
            )
        })
    }

    render() {
		return (
			<div>
				<Header />
                    <div className="container-fluid">
                        <h1>รายการสั่งซื้อ</h1>
                        <div className="row">
                            {this.showOrder()}
                        </div>

                    </div>
				<Footer company="Olanlab" email="olan@olanlab.com" />
			</div>
		);
	}
    
}

export default Order;