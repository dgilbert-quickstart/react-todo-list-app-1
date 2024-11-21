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
            <label>* Name: </label><input name="txtname" type="text" maxLength={20}></input><br></br>
            <label>* Email: </label><input name="txtemail" type="text"  maxLength={30}></input><br></br>
            <label> Phone: </label><input name="txtphone" type="text"  maxLength={15}></input><br></br>
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
  