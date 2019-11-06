import React from 'react';

function Team(props) {
    return (
        <>
            {props.team.map((teamMember, index) => (
                <div className='team' key={index}>
                    <h2>{teamMember.name}</h2>
                    <h3>{teamMember.role}</h3>
                    <h4>{teamMember.email}</h4>
                </div>
            ))}
        </>
    )
}

export default Team