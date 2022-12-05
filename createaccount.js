function CreateAccount(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');

  return (
    <div class="createcard">
      <P>CreateAccount</P>
    {/* <Card class="createcard"
      bgcolor="primary"
      header="Create Account"
      status={status}
      body={show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    /> */}
    <status>{status}</status>
    <body class="body">{show ? 
        <CreateForm setShow={setShow}/> : 
        <CreateMsg setShow={setShow}/>}
    </body>
    </div>
    
  )
}

// const [error, setError] = React.useState({});
//   const validation = (value) => {
//     let error = {};
//     if (!value.name.match(/^[a-zA-Z]/)) {
//       error.name = "Numbers not accepted!";
//     }
//     if (!value.name) {
//       error.name = "Name is required!";
//     }
//     if (!value.email) {
//       error.email = "Email is required!";
//     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) {
//       error.email = "Email is invalid!";
//     }
//     if (!value.password) {
//       error.password = "Password is required!";
//     } else if (value.password.length < 6) {
//       error.password = "Password must be more than six character!";
//     }
//     return error;
//   };

//   const handleChange = (e) => {
//     e.preventDefault();
//     setValue({ ...value, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setError(validation(value));
//   };

//   const submit = () => {
//     if (!value.name.match(/^[a-zA-Z]/)) return;
//     if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value.email)) return;
//     if (value.password.length < 6) return;
//     alert("Account Successfully Created");
//     ctx.users.push({
//       name: value.name,
//       email: value.email,
//       password: value.password,
//       balance: 0
//     });
//     setUpdate(false);
//     handle();
//   };

function CreateMsg(props){
  return(<>
    <h5>Your Account has been created Successfully</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => props.setShow(true)}>Add another account</button>
  </>);
}

function CreateForm(props){
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');  

  function handle(){
    console.log(name,email,password);
    const url = `/account/create/${name}/${email}/${password}`;
    (async () => {
        var res  = await fetch(url);
        var data = await res.json();    
        console.log(data);        
    })();
    props.setShow(false);   
  }   
  return (<>
    <p class="Par">Create Account</p>
    Name<br/>
    <input type="input" 
      className="form-control" 
      placeholder="Enter name" 
      value={name} 
      onChange={e => setName(e.currentTarget.value)} /><br/>

    Email address<br/>
    <input type="email" 
      className="form-control" 
      placeholder="Enter email" 
      value={email} 
      
      onChange={e => setEmail(e.currentTarget.value)}/><br/>

    Password<br/>
    <input type="password" 
      className="form-control" 
      placeholder="Enter password" 
      value={password} 
      onChange={e => setPassword(e.currentTarget.value)}/><br/>

    <button type="submit" 
      className="btn btn-dark" 
      disabled={!name || !email || !password}
      onClick={handle}>Create Account</button>
  </>);
}