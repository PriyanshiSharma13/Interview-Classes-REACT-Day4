import React, { Component } from 'react'
import LifeCyclesB from './LifeCyclesB';

class LifeCyclesA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "haha"
      }
      console.log("LifecycleA constructor");
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleA getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("LifecycleA componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleA shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log("LifecycleA getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleA componentDidUpdate");
    }

    handleChange = () => {
        this.setState({
            name: "arrreyyy yaaar"
        })
    }

  render() {
    console.log("LifecycleA render");
    return (
      <div>
        <h3>I am Lifecycle A</h3>
        <button onClick={this.handleChange}>Change State</button>
        <LifeCyclesB />
      </div>
    )
  }
}

export default LifeCyclesA