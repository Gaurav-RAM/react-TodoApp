import React, { Component } from 'react'

export class TaskList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            
        }
    }
    
    editTask(ed) {
      console.log("element=============>", ed)
      //console.log("items:"+this.state.task);
      this.props.editTask(ed);
  
      // this.setState({
      //   task: items.filter(item => item.key !== key),
      //   currentTask: {
      //     text
      //   }
      // });
    }
  

    handleDelete(e){
      console.log("element=============>", e)
      this.props.handleDelete(e);
        
    }
    // componentDidUpdate(){
    //     console.log("inside task list",this.props.taskList)
    // }
    
    render() {
        return (
            <div className="box2">
            
                {/* {this.props.taskList.map((element,i)=>{
                   return <div key={i}>{element}<button className="button2" onClick={this.removeTask}>x</button></div>
                   
                })} */}

                
          {this.props.tasklist.map((element,i)=>{
            console.log("index", i);
            console.log("element", element);
            return(  <div className="row" key={i}>
                <div>
              <p className="box4">{element.task}<button onClick={() => this.handleDelete(element)} className="button2">x</button>  <button onClick={() => this.editTask(element)} className="button3">Edit</button></p>

              </div>
              </div>
          
            )
          
          })}
                </div>

        )
    }
}

export default TaskList
