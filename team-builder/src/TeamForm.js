import React from 'react'

function TeamForm(props) {
    return <div>
        <form>
            <input type="text" name="name" value={props.teamMember.name} placeholder="Name" /> <br />
            <input type="text" name="email" value={props.teamMember.email} placeholder="Email Address" /> <br />
            <input type="text" name="role" value={props.teamMember.role} placeholder="Role" /> <br />

            <button>Submit</button>
        </form>
    </div>
}

export default TeamForm