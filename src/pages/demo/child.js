import React from 'react';

export default class Life extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          count: 0,
        };
    }
    componentWillMount(){
        console.log("componentWillMount");
    }

    componentDidMount(){
        console.log("componentDidMount");
    }

    componentWillReceiveProps(newProps){
        console.log("componentWillReceiveProps:"+newProps.name);
    }
    //调用setState就会更新shouldComponentUpdate
    shouldComponentUpdate(){
        console.log("shouldComponentUpdate");
        return true
    }

    componentWillUpdate(){
        console.log("componentWillUpdate");
    }

    componentDidUpdate(){
        console.log("componentDidUpdate");
    }

    render() {
        return <div>
            <p>这里是子组件</p>
            <p>{this.props.name}</p>
        </div>
        
    }
}