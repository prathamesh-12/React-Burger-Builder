import React, { Component } from 'react';

import Auxillary from '../../hoc/auxillary';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import './Layout.css';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        isShowSideDrawer: false
    }

    toggleSideDrawer = () => {
        if(this.state.isShowSideDrawer) {
            this.setState({isShowSideDrawer: false});
        } else {
            this.setState({isShowSideDrawer: true});
        }
    }

    render() {
        return (
            <Auxillary>
                {/* <div>toolbar, sidebar and Backdrop</div> */}
                <Toolbar toggleSideDrawer={this.toggleSideDrawer} isShow={this.props.isShowSideDrawer}></Toolbar>
                <SideDrawer toggleSideDrawer={this.toggleSideDrawer} isShow={this.state.isShowSideDrawer}/>
                <main className="content">
                    {this.props.children}
                </main>
            </Auxillary>
        );
    }
}



export default Layout;