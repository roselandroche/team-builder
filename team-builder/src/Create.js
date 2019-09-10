import React from 'react'

function Create(props) {
    return <div>
        <form>
            <label>Add Team Member</label> <br />
            <input type="text" name="name" value={props.team.name} placeholder="Name" /> <br />
            <input type="text" name="email" value={props.team.email} placeholder="Email Address" /> <br />
            <input type="text" name="role" value={props.team.role} placeholder="Role" /> <br />

            <button>Submit</button>
        </form>
    </div>
}

export default Create