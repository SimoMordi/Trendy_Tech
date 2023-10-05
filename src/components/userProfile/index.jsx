

import './index.css'

const UserProfile = () => {

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    // }
    // const handleChange = () => {
    //   if (e.target.value ???) {
    //     return (e.target.value);
    //   }
    // }

  return (

    <div>
        
        <h1 id='userProfile'>UserProfile</h1>

      <form className="user" >
        <label htmlFor="title">
          Title
        </label>
        <input type="text" value="" />

        <label htmlFor="author">
          Author
        </label>
        <input type="text" value="" />

        <label htmlFor="pages">
          Pages
        </label>
        <input type="number" value="" />
        <button>Submit</button>
      </form>
      
       
       
    </div>
  )
}

export default UserProfile