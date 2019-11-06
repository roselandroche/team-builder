import React, { useState } from 'react'

function Create(props) {
    const initialMember = {name: "", email: "", role: ""};
    const [newMember, setNewMember] = useState(initialMember);

    const handleChange = event => {
        setNewMember({
            ...newMember,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (!newMember.name || !newMember.email || !newMember.role) {
            alert('Incomplete Information. Please fill out all fields.')
        } else {
            props.setTeam([newMember, ...props.team]);
            resetForm();
        }
    };

    const resetForm = () => {
        setNewMember(initialMember)
    };

    return <div>
        <form onSubmit={handleSubmit}>
            <label>Add Team Member</label> <br />
            <input type="text" name="name" value={newMember.name} placeholder="Name" onChange={handleChange}/> <br />
            <input type="text" name="email" value={newMember.email} placeholder="Email Address" onChange={handleChange}/> <br />
            <input type="text" name="role" value={newMember.role} placeholder="Role" onChange={handleChange}/> <br />

            <button type="submit">Submit</button>
            <button type="button" onClick={resetForm}>Reset</button>
        </form>
    </div>
}

export default Create