// 'use client';

// import React, { useState } from 'react';
// import Layout from './components/Layout';
// import SearchBar from './components/SearchBar';
// import DataTable from './components/DataTable';

// const initialData = [
//   {
//     name: "John",
//     surname: "Doe",
//     passportNumber: "AB123456",
//     documentType: "Passport"
//   },
//   {
//     name: "Jane",
//     surname: "Smith",
//     passportNumber: "CD789012",
//     documentType: "ID Card"
//   },
//   {
//     name: "Michael",
//     surname: "Johnson",
//     passportNumber: "EF345678",
//     documentType: "Passport"
//   },
//   {
//     name: "Sarah",
//     surname: "Williams",
//     passportNumber: "GH901234",
//     documentType: "ID Card"
//   }
// ];

// /**
//  * The home page of the application, containing a search bar and a data table.
//  * The data table is filtered based on the search term.
//  */
// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [data] = useState(initialData);

//   const filteredData = data.filter(item =>
//     Object.values(item).some(value =>
//       value.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <Layout>
//       <div className="space-y-6">
//         <SearchBar 
//           searchTerm={searchTerm} 
//           onSearchChange={setSearchTerm}
//         />
//         <DataTable data={filteredData} />
//       </div>
//     </Layout>
//   );
// }


//////////////////// =========================================== ///////////////////////////////////
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { supabase } from './supabaseClient';
// import Layout from './components/Layout';
// import SearchBar from './components/SearchBar';
// import DataTable from './components/DataTable';

// export default function Home() {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const { data, error } = await supabase
//         .from('Foreign_Travel')
//         .select('*');
//       if (error) {
//         console.error('Error fetching data:', error);
//       } else {
//         setData(data);
//       }
//     };

//     fetchData();
//   }, []);

//   const filteredData = data.filter(item =>
//     Object.values(item).some(value =>
//       typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//   );

//   return (
//     <Layout>
//       <div className="space-y-6">
//         <SearchBar 
//           searchTerm={searchTerm} 
//           onSearchChange={setSearchTerm}
//         />
//         <DataTable data={filteredData} />
//       </div>
//     </Layout>
//   );
// }


//////////////////// =========================================== ///////////////////////////////////


'use client';

import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';
import Layout from './components/Layout';
import SearchBar from './components/SearchBar';
import DataTable from './components/DataTable';

interface TravelData {
  surname: string;
  otherName: string;
  passportNumber: string;
  'Type of travel document': string;
  // Add other fields as necessary
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState<TravelData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('Foreign_Travel')
        .select('*');
      if (error) {
        console.error('Error fetching data:', error);
      } else {
        setData(data as TravelData[]);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    Object.values(item).some(value =>
      typeof value === 'string' && value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <Layout>
      <div className="space-y-6">
        <SearchBar 
          searchTerm={searchTerm} 
          onSearchChange={setSearchTerm}
        />
        <DataTable data={filteredData} />
      </div>
    </Layout>
  );
}
