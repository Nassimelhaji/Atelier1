import React, { useState, useEffect } from 'react';
import axios from 'axios';


function ListUsers() {

    const [tabUsers, setTabUSers] = useState([]);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => setTabUSers(res.data))
        .catch(err => console.log(err))
    }, []);

    // const[tabUsers2, setTabUSers2] = useState([]);

    // useEffect(() => {
    //     fetch("https://jsonplaceholder.typicode.com/users")
    //     .then(res => setTabUSers2(res.data))
    //     .catch(err => console.log(err))
    // }, []);


    return (

        <div>
            <h1>Users1</h1>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tabUsers.map( (data, i) => (
                            <tr key = {i}>
                                <th scope="row">{data.id}</th>
                                <td>{data.name}</td>
                                <td>{data.username}</td>
                                <td>{data.email}</td>
                                <td>{data.address.city}</td>
                                <td>{data.address.geo.lng}</td>
                            </tr>
                        )

                        )
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ListUsers;