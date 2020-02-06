import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';
import Aux from '../auxillary';
import './ErrorHandling.css';


const errorHandler = (WrapperErrorComponent, axios) => {
    
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount() {

            axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            })

            axios.interceptors.response.use(resp => resp, error => {
                this.setState({error: error});
            })
        }

        onModalCloseHandler = () => {
            this.setState({error: null});
        }

        render() {
            return (
                <Aux>
                    <Modal isShow={this.state.error} closeModal={this.onModalCloseHandler}>
                        <div className="ErrorMessage">
                            {this.state.error ? this.state.error.message : "Something Went Wrong!!"}
                        </div>
                    </Modal>
                    <WrapperErrorComponent {...this.props}/>
                </Aux>
            );
        }
    }
}

export default errorHandler;