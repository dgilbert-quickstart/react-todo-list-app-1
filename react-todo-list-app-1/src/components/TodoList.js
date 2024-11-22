import { useEffect, useState } from "react";

//page level context state/data - all functions can access state/data
const todolist_array = [
  {id:1,name:"item one",completed:false},
  {id:2,name:"item two",completed:false},
  {id:3,name:"item three",completed:true},
  {id:4,name:"item four",completed:false},
  {id:5,name:"item five",completed:true},
  {id:6,name:"item six",completed:false},  
]

function TodoList(props) {

  const [msg, setMsg] = useState("");
  const [txtnewitem, setNewItem] = useState("");
  //component/function state/array - functions with Todolist can acess function array and page/context arrray
  const [todolist, setTodoList] = useState(todolist_array);

    useEffect((e)=>{

      //onComponent/page load 
      //ie: get data from api and update state/todolist

    },[]) //1. onpage load [], 2. page unload, 3. on state update [msg], 4. un page /refresh

    const handleAddNewItem = (e)=>{
      try {

        let _msg = "# handleAddNewItem"

        if(txtnewitem == null | txtnewitem.trim().length == 0){

          _msg = "# please enter a valid item"
          setMsg(_msg)
          return false; //stop button click 
        }
        
        _msg = "# new item added"
        setMsg(_msg)

        setNewItem("")

        console.log(_msg)
        console.log(txtnewitem)

      } catch (error) {
        
        let _msg = "# handleAddNewItem::error"
        setMsg(_msg)

        console.log(_msg)
        console.log(error)
      }
    }

    const displayItems = ()=>
    {
      return (
        <p>item</p>
      )
      //try/catch
    }

    return (
      <>
        <div className="container">
         <h4>{props.title}</h4>
         <div>
          <span>item: </span>
          <input type="text" value={txtnewitem} onChange={(e)=>setNewItem(e.target.value)} name="txtitemname" maxLength={25} placeholder="* add new item"></input>
          {" "}
          <button onClick={handleAddNewItem}>Add</button>
          {" "}
          <a href="#/" onClick={(e)=>{setNewItem(""); setMsg("")}}>reset</a>
        </div>
        <div>
          <p>{msg}</p>
        </div>
        <div>          
          <a href="#/">all</a> {" | "}
          <a href="#/">completed</a> {" | "}
          <a href="#/">in-completd</a>
        </div>
        <p></p>
        <div>          
          {todolist.map((item)=>
            <p key={item.id}>
              <>
                <input type="checkbox" checked={item.completed}/>{" "}
                <span>{item.name}</span> {" "}
                <button>x</button>              
              </>
            </p>
          )}          
         </div>
       </div>
      </>
    );
  }
  
  export default TodoList;
  

