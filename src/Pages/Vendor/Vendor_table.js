
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';

const baseURL = "http://localhost:8000/api/vendor";


export default function Vendor_table() {

    const [vendors, setVendors] = useState([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {

            setVendors(response.data);
        });
    }, []);

    if (!vendors) return null;

    var VendorDetails;
    VendorDetails = vendors.map((vendor, index) => {
        return (
            <tr key={vendor.oid}>
                <td>{vendor.vendor_code}</td>
                <td>{vendor.vendor_nama}</td>
                <td>{vendor.vendor_alamat}</td>
                <td>{vendor.vendor_tlp}</td>
                <td>{vendor.vendor_contact}</td>
                <td>
                    <button>Delete</button>
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
                                <h1>Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <button className='btn btn-success btn-sm'>ADD Vendor</button>
                                    </div>
                                    <div class="card-body">
                                        <table id="example1" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Tlp</th>
                                                    <th>Contact</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                               {VendorDetails}
                                            </tbody>
                                            <tfoot>
                                                <tr>
                                                    <th>Code</th>
                                                    <th>Nama</th>
                                                    <th>Alamat</th>
                                                    <th>Tlp</th>
                                                    <th>Contact</th>
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

