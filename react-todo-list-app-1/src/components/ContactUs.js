function ContactUs() {
    return (
      <>
        <p></p>
        <p>Contact Us</p>
        <p>{"msg"}</p>
        <div className="output"></div>
        <p></p>
        <div>
          <form>
            <label>* First Name: </label><input name="txtfirstname" type="text" maxLength={20}></input><br></br>
            <label>* Last Name: </label><input name="txtlastname" type="text" maxLength={20}></input><br></br>
            <label>* Email: </label><input name="txtemail" type="text"  maxLength={30}></input><br></br>
            <label>* Comment: </label><br></br>
            <textarea name="txtcomment" rows={5} cols={30}></textarea><p></p>
            <button>Submit</button>
            {"   "}
            <button>reset</button>
        </form>
      </div>
    </>
    );
  }
  
  export default ContactUs;
  