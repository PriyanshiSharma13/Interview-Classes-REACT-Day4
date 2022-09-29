import React, { Component } from 'react'

class LifeCyclesB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        name: "haha"
      }
      console.log("LifecycleB constructor");
    }

    static getDerivedStateFromProps(props,state) {
        console.log("LifecycleB getDerivedStateFromProps");
        return null
    }

    componentDidMount() {
        console.log("LifecycleB componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("LifecycleB shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevStates) {
        console.log("LifecycleB getSnapshotBeforeUpdate");
        return null;
    }

    componentDidUpdate() {
        console.log("LifecycleB componentDidUpdate");
    }

  render() {
    console.log("LifecycleB render");
    return (
      <div>
        <h3>I am LifecycleB</h3>
      </div>
    )
  }
}

export default LifeCyclesB