import { useEffect, useState } from "react";

function TodoList(props) {

  const [msg, setMsg] = useState("");
  const [txtnewitem, setNewItem] = useState("");

    useEffect((e)=>{


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

        console.log(_msg)
        console.log(txtnewitem)

      } catch (error) {
        
        let _msg = "# handleAddNewItem::error"
        setMsg(_msg)

        console.log(_msg)
        console.log(error)
      }
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
          <p>
            <>
              <input type="checkbox" checked={true}/>{" "}
              <span>item one</span> {" "}
              <button>x</button>              
            </>
          </p>
          <p>
            <>
              <input type="checkbox" checked={false}/>{" "}
              <span>item two</span> {" "} 
              <button>x</button>              
            </>
          </p>
          <p>
            <>
              <input type="checkbox" checked={true}/>{" "}
              <span>item three</span> {" "}
              <button>x</button>              
            </>
          </p>
          <p>
            <>
              <input type="checkbox" checked={false}/>{" "}
              <span>item four</span> {" "}
              <button>x</button>              
            </>
          </p>
         </div>
       </div>
      </>
    );
  }
  
  export default TodoList;
  

