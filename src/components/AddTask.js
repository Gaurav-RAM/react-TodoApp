import React, { Component } from 'react'

export class AddTask extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             task: ''
        }
        
    }
    handleChange = (event) =>{
        this.setState({task: event.target.value});
    }
    taskAdd = () =>{
        
        this.props.addTask(this.state.task);
        this.setState({task: ''});
        }
       
        
    
    render() {
        return (
            <div className="container">
            <div className="container1">
                <div className="input">
                <input className="inputText" type="text" value={this.state.task} onChange={this.handleChange} />
                </div>
                <div className="btn">
                    <button className="btn1" onClick={this.taskAdd}> Add Task</button>
                </div>
            </div>
            {/* <div className="box">
              
            </div> */}
            </div>
            
        )
    }
}

export default AddTask
