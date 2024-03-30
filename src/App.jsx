import './App.css'

function App() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // console.log(event.target);
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    const user = {name,email}

    fetch('http://localhost:5000/users',{
      method: 'POST',
      headers:{
        'content-type':'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(res => res.json())
    .then(data=> {
      console.log(data);
      if(data.insertedId){
        alert('Users added successfully');
        form.reset();
      }
    })
  }

  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <br />
        <input type="email" name="email" />
        <br />
        <input type="submit" name="Submit" />
      </form>
    </>
  )
}

export default App
