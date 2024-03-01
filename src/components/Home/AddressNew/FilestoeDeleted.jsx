// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MyForm from './MyForm';
// import AddressFirebase from './AddressFirebase';

// const FilestoeDeleted = () => {
//     const [addresses, setAddresses] = useState([]);

//     const handleAddressAdded = (newAddress) => {
//         setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
//     };

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="" element={<AddressFirebase onAddressAdded={handleAddressAdded} />} />
//                 <button>sxx</button>
//                 <Route path="/my/from" element={<MyForm addresses={addresses} />} />
//                 <div>
//                     <h1>haajsjsk</h1>
//                 </div>
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default FilestoeDeleted;

// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import MyForm from './MyForm';
// import AddressFirebase from './AddressFirebase';

// const FilestoeDeleted = () => {
//     const [addresses, setAddresses] = useState([]);

//     const handleAddressAdded = (newAddress) => {
//         setAddresses((prevAddresses) => [...prevAddresses, newAddress]);
//     };

//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<AddressFirebase onAddressAdded={handleAddressAdded} />} />
//                 <Route path="/my/form" element={<MyForm addresses={addresses} />} />
//             </Routes>
//         </BrowserRouter>
//     );
// }

// export default FilestoeDeleted;