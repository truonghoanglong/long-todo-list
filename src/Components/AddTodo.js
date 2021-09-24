import React from 'react';
import {toast } from 'react-toastify';
class AddTodo extends React.Component {
   
    state={
        title:"",
    }

    handleOnChangTitle = (e) =>{
        this.setState({
            title: e.target.value,
        })
    }

    handleOnClickTodo = (e) => {
        e.preventDefault()
        
        if(!this.state.title){
            toast.error('Xin đừng bỏ trống')
        }else{
            let todo = {
                id:Math.floor(Math.random()*100),
                title: this.state.title,
            }

            this.props.addNewTodo(todo)

            this.setState({
                title:''
            })
            toast.success('Thêm mới thành công')
        }
        
    }

    

    render() {
        let {title} = this.state
        return (
            <>
                <form>
                    <input 
                        type="text" 
                        value={title}
                        onChange={(e)=>this.handleOnChangTitle(e)}

                    />

                    <button className='add'
                        onClick={(e)=>this.handleOnClickTodo(e)}
                    >Create</button>
                </form>
            </>
        )
    }
}

export default AddTodo ;