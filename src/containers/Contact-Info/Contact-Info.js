import React, { Component } from 'react';
import Button from '../../components/UI/Button/Button';

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
        }
    };

    onOrderBtnClicked = () => {
        debugger;
    }

    render() {
        return (
            <div>
                <h4>Enter Your Data</h4>
                <hr/>
                <input type="text" placeholder="Enter your name" />
                <input type="text" placeholder="Enter your Email" />
                <input type="text" placeholder="Enter Phone" />
                <input type="text" placeholder="Address Line 1" />
                <input type="text" placeholder="State" />
                <input type="text" placeholder="Country" />
                <input type="text" placeholder="Zipcode" />
                <hr/>
                <Button btnType="Success" onButtonClicked={this.onOrderBtnClicked}>ORDER</Button>
            </div>
        );
    }
}

export default ContactInfo;