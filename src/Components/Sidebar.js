import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
        return (
            <div>
                <aside className="main-sidebar sidebar-dark-primary elevation-4">
                    <a href="../../index3.html" className="brand-link">
                        <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                        <span className="brand-text font-weight-light">JOBTEST</span>
                    </a>
                    <div className="sidebar">

                        <div className="form-inline">
                            <div className="input-group" data-widget="sidebar-search">
                                <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-sidebar">
                                        <i className="fas fa-search fa-fw" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <nav className="mt-2">
                            <li className="nav-header">EXAMPLES</li>
                            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                                <li className="nav-item">
                                    <a href="/user-tab" className="nav-link">
                                        <i className="nav-icon fas fa-th" />
                                        <p>
                                            User
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/vendor-tab" className="nav-link">
                                        <i className="nav-icon far fa-image" />
                                        <p>
                                            Vendor
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/barang-tab" className="nav-link">
                                        <i className="nav-icon fas fa-columns" />
                                        <p>
                                            Barang
                                        </p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/invoice-tab" className="nav-link">
                                        <i className="nav-icon fas fa-file" />
                                        <p>Invoice</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="/invoice_det-tab" className="nav-link">
                                        <i className="nav-icon fas fa-ellipsis-h" />
                                        <p>Invoice Detail</p>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </aside>
            </div>
        );
    }
}

export default Sidebar;