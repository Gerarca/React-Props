import React, { Component } from 'react';

class Task extends Component{
    
    StyleCompleted(){
        return{
            fontSize: '40px',
            color: this.props.task.done ? 'green' : 'Red',
            textDecoration: 'none',
            padding:  '20px'
        }
    }
      
    render(){

        const {task} = this.props;

        return(
            <div style={ this.StyleCompleted() } >
                {task.title} - 
                {task.description} - 
                {task.done} - 
                {task.id} 
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)} />
                <button style={btnDelete}  onClick={this.props.deleteTask.bind(this, task.id)}> 
                    Delete X               
                </button>       
            </div>
           
        )
    }
}

const btnDelete = {
    fontsize: '18px',
    background: '#ea2027',
    color:'#fff',
    border: 'none',
    borderBottomLeftRadius: '40px',
    borderBottomRightRadius: '40px',
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',
    cursor: 'pointer',
    padding: '30px',
    marginLeft: '10px'
}

export default Task;