
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


function User_table() {
    
    const [user, setUsers] = useState([]);
    
    useEffect(() => {

        axios.get('http://localhost:8000/api/user').then(res => {
            console.log(res)
            setUsers(res.data.user);
        });

    }, [])

    var userDetails = "";

    userDetails = user.map( (item, index) => {
        return (
            <tr key={index}>
                <td>{item.user_code}</td>
                <td>{item.user_nama}</td>
                <td>{item.user_alamat}</td>
                <td>
                    <Link to="/Vendor-tab" className="btn btn-success">Edit</Link>
                </td>
            </tr>
        )
    });

    return (
        <div>
            <div className="content-wrapper">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Data User</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <div class="card">
                                    <div class="card-header">
                                    <button className='btn btn-success btn-sm'>ADD User</button>
                                    </div>

                                    <div class="card-body">
                                        <table id="example1" class="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {userDetails}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Action</th>
                                                </tr>
                                            </tfoot>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default User_table;