function TodoList(props) {
    return (
      <>
        <h4>{props.title}</h4>
        <div>
          <span>item: </span>
          <input type="text" name="txtitemname" maxLength={25} placeholder="* add new item"></input>
          {" "}
          <button>Add</button>
          {" "}
          <a href="#/">reset</a>
        </div>
        <div>
          <p>{" msg "}</p>
        </div>
        <div>          
          <a href="#/">all</a> {" | "}
          <a href="#/">completed</a> {" | "}
          <a href="#/">in-completd</a>
        </div>
        <p></p>
        <div>
          <p>
            {"[x] item one [x]"}
          </p>
          <p>
            {"[] item two [x]"}
          </p>
          <p>
            {"[x] item three [x]"}
          </p>
          <p>
            {"[] item four [x]"}
          </p>
        </div>
      </>
    );
  }
  
  export default TodoList;
  

