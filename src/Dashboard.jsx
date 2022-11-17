import React, { useState } from 'react'
import {Link} from 'react-router-dom'


const Dashboard = () => {


    const [todo, setTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [editId, setEditId] = useState(0)

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            const editTodo = todos.find((i) => i.id === editId)
            const updatedTodos = todos.map((t) =>
                t.id === editTodo.id
                    ? (t = { id: t.id, todo })
                    : { id: t.id, todo: t.todo }
            )
            setTodos(updatedTodos)
            setEditId(0)
            setTodo("")
            return;
        }

        if (todo !== '') {
            setTodos([{ id: `${todo}-${Date.now()}`, todo }, ...todos])
            setTodo('');
        }
    }

    const handleDelete = (id) => {
        const delTodo = todos.filter((to) => to.id !== id);
        setTodos([...delTodo])
    }

    const handleEdit = (id) => {
        const editTodo = todos.find((i) => i.id === id)
        setTodo(editTodo.todo)
        setEditId(id)
    }

    return (
        <div>
            <div className='auth-form-container'>


                <h1>Todo List</h1>

                <form className='todoForm'  onSubmit={handleSubmit}>
                    <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)} />
                    <button variant='contained' type='submit'>{editId ? "Edit" : "Go"}</button>
                


                <ul className='allTodos'>
                    {
                        todos.map((t) => (
                            <li className='singleTodo'>
                                <span className='todoText' key={t.id}>
                                    {t.todo}
                                </span>
                                
                                    <button variant='contained' onClick={() => handleEdit(t.id)}>edit</button>
                                    <button variant='contained' onClick={(() => handleDelete(t.id))}>delete</button>


                                
                            </li>


                        ))
                    }

                </ul>
                
                

                </form>

                <Link to='/'>Log Out</Link>


            </div>

        </div>
    )
}

export default Dashboard