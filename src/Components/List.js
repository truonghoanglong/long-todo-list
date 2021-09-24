import React from 'react';
import AddTodo from './AddTodo';
import {toast } from 'react-toastify';


class List extends React.Component {
    state={
        listTodos:[
            {id:'abc' , title:'Playing game'},
            {id:'abc2' , title:'Coding'},
            {id:'abc3' , title:'play football'}
        ],
        editTodo:{}
    }

      addNewTodo= (todo) => {
          this.setState({
              listTodos:[...this.state.listTodos , todo]
          })
      }

      handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success('Xóa Thành Công')
    }

    handleEditTodo = (todo) => {
        let {editTodo,listTodos} =  this.state
        let isEmptyObject = Object.keys(editTodo).length === 0;

        //save
        if(isEmptyObject === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos]

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));
            
            listTodosCopy[objIndex].title = editTodo.title

            this.setState({
                listTodos:listTodosCopy,
                editTodo:''
            })
            toast.success('Thay đổi thành công')
            return;
        }

        //edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnchangTodo = (e) => {
        let editTodoCopy= {...this.state.editTodo};
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    

    render() {

        let {listTodos,editTodo}= this.state;

        let isEmptyObject = Object.keys(editTodo).length === 0;
        console.log(isEmptyObject);
        return(
            <>
                
                <AddTodo addNewTodo={this.addNewTodo} />

                <h1>Hello-Todo-List</h1>

                {listTodos && listTodos.length > 0 &&
                    listTodos.map((item,index)=>{
                        return(
                            <div className="list-todo" key={item.id}>

                                {isEmptyObject === true ? 

                                <div className="todo-child" >{item.title}</div>
                                :
                                <>
                                    {editTodo.id === item.id ?
                                        <span>
                                            <input autoFocus  className="inputTodo" type="text" value={editTodo.title} 
                                                onChange={(e)=>this.handleOnchangTodo(e)}
                                            />
                                        </span>
                                    :
                                         <div>{item.title}</div>
                                    }
                                </>
                                
                                }
                                <div className="todo-icon">
                                    <span
                                            onClick={()=>this.handleEditTodo(item)}
                                        >
                                        {isEmptyObject === false && editTodo.id === item.id ? 
                                            <i class='bx bx-save save'></i>
                                        :
                                            <i className='bx bx-pencil edit'
                                                
                                            ></i>
                                        }
                                    
                                    </span>

                                    <span
                                         onClick={()=>this.handleDeleteTodo(item)}
                                    >
                                    
                                    <i className='bx bx-trash delete'></i></span>
                                </div>
                            </div>
                        )
                    })
                }
                
                
                
            </>
            
        )
    }
}

export default List;