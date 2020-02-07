import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';
import './Contact-Info.css';
import axios_orders from '../../axios-orders';

class ContactInfo extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        address: {
            addressLine1: '',
            state: '',
            country: '',
            zip: ''
        },
        isDisplaySpinner: false,
        price: 0
    };

    onOrderBtnClicked = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);

        this.setState({isDisplaySpinner: true});
        const orderData = {
            ingredients: this.state.ingredients,
            price: this.state.price,
            customer: {
                name: 'Prats Nims',
                email: 'prats@gmail.com',
                phone: '4085122139',
                address: {
                    addressLine1: '50 Oak Blf',
                    state: 'CT',
                    country: 'US',
                    zip: '06001'
                }
            },
            deliveryMethod: 'Fast'
        };

        axios_orders.post("/orders.json", orderData)
            .then(respData => {
                this.setState({isDisplaySpinner: false});
                this.props.history.push("/");
            })
            .catch(errData => {
                console.log(errData);
                this.setState({isDisplaySpinner: false});
            });
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div className="form-wrapper">
                <hr/>
                <h4>Enter Your Data</h4>
                <hr/>
                <form className="contact-form">
                    <input type="text" placeholder="Enter your name" />
                    <input type="text" placeholder="Enter your Email" />
                    <input type="text" placeholder="Enter Phone" />
                    <input type="text" placeholder="Address Line 1" />
                    <input type="text" placeholder="State" />
                    <input type="text" placeholder="Country" />
                    <input type="text" placeholder="Zipcode" />
                    <div>
                        <Button btnType="Success" onButtonClicked={this.onOrderBtnClicked}>ORDER</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default ContactInfo;