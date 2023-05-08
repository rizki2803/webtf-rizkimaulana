import { Routes, Route } from 'react-router-dom'
import User_table from '../Pages/User/User_table';
import Vendor_table from '../Pages/Vendor/Vendor_table';
import Barang_table from '../Pages/Barang/Barang_table';
import Invoice_table from '../Pages/Invoice/Invoice_table';
import Invoice_det_table from '../Pages/Invoicedet/Invoice_det_table';
import User_create from '../Pages/User/User_create';
import Vendor_create from '../Pages/Vendor/Vendor_create';
import Barang_create from '../Pages/Barang/Barang_create';
import Invoice_create from '../Pages/Invoice/Invoice_create';
import Invoice_det_create from '../Pages/Invoicedet/Invoice_det_create';
import User_edit from '../Pages/User/User_edit';
import Vendor_edit from '../Pages/Vendor/Vendor_edit';
import Barang_edit from '../Pages/Barang/Barang_edit';
import Invoice_edit from '../Pages/Invoice/Invoice_edit';
import Invoice_det_edit from '../Pages/Invoicedet/Invoice_det_edit';
import Dashboard from '../Pages/Dashboard';


function MyRouter() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user-tab" element={<User_table />} />
            <Route path="/user-create" element={<User_create />} />
            <Route path="/user-edit" element={<User_edit />} />
            <Route path="/vendor-tab" element={<Vendor_table />} />
            <Route path="/vendor-create" element={<Vendor_create />} />
            <Route path="/vendor-edit" element={<Vendor_edit />} />
            <Route path="/barang-tab" element={<Barang_table />} />
            <Route path="/barang-create" element={<Barang_create />} />
            <Route path="/barang-edit" element={<Barang_edit />} />
            <Route path="/invoice-tab" element={<Invoice_table />} /> 
            <Route path="/invoice-create" element={<Invoice_create />} />
            <Route path="/invoice-edit" element={<Invoice_edit />} />
            <Route path="/invoice_det-tab" element={<Invoice_det_table />} />
            <Route path="/invoice_det-create" element={<Invoice_det_create />} />
            <Route path="/invoice_det-edit" element={<Invoice_det_edit />} />
        </Routes>
    )
}

export default MyRouter;