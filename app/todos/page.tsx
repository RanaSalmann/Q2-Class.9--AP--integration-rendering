"use client"
import axios from "axios"
import React, { useState, useEffect,  } from "react"; // Updated import for React and useState

export default function Todos() { // Renamed function to start with an uppercase letter
    const [todos, setTodos]= useState ([]) // Correct usage of useState
    const [file, setFile]= useState ([])
    const [loader, setLoader]= useState(false)
    const [update, setUpdate]= useState(false)
    useEffect(()=>{
        alert("Refetch Todos")
        getTodos()
        
    }, [update])

    const getTodos = async()=>{
        try {
            setLoader(true)
            const result = await axios.get('https://dummyjson.com/todos')
            console.log("data from API", result.data.todos)
            setTodos(result.data.todos)
        } catch (error) {
            console.log("error", error)
        }
        finally{
            setLoader(false)
        }
    }

        const reFetch =() =>{
            setUpdate(true)
        }
    return(
        <div><center>Todos:
            <button className="bg-red-500" onClick={getTodos}>Get Todos</button></center>
            <button className="bg-green-500" onClick={reFetch}>Refetch Todos</button>
   
           {loader && <h1>Please Wait page is loading...</h1>}
            {todos.map((todo)=>
            {
                return(
                    <div key={todo} className="flex justify-between items-center px-4 py-1">
                        <h1>{todo.id} - {todo.todo}</h1>
                        <img src="https://firebasestorage.googleapis.com/v0/b/artificial-409518.appspot.com/o/person-in-mask-girl-orange-smoke-hoodie-anonymous-smoke-6000x4000-6143.jpg?alt=media&token=71383e54-2de3-41d3-ab2b-b94be89e5295" width={300} height={500} />
 
                    </div>
                )
            })}
        </div>
    )
}