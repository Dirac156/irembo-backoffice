// import React from 'react';

// interface DataRow {
//   name: string;
//   surname: string;
//   passportNumber: string;
//   documentType: string;
//   status?: string; // Added status property
// }

// interface DataTableProps {
//   data: DataRow[];
// }

// const DataTable = ({ data }: DataTableProps) => {
//   const statuses = ['Pending', 'Approved', 'Rejected', 'In Progress', 'Completed']; // Predefined statuses

//   const handleStatusChange = (index: number, newStatus: string) => {
//     data[index].status = newStatus; // Update the status for the corresponding row
//   };

//   return (
//     <div className="bg-white rounded-lg shadow-md overflow-hidden">
//       <table className="w-full border-collapse">
//         <thead style={{ backgroundColor:'#e6f2ff' }}>
//           <tr>
//             <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Name</th>
//             <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Surname</th>
//             <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Passport Number</th>
//             <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Document Type</th>
//             <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {Array.isArray(data) && data.map((row, index) => (
//             <tr 
//               key={index} 
//               style={{ backgroundColor: index % 2 === 0 ? '#f7fbff' : 'white' }}
//               className="hover:bg-[#e6f2ff] transition-colors"
//             >
//               <td className="p-4 border-b">{row.name}</td>
//               <td className="p-4 border-b">{row.surname}</td>
//               <td className="p-4 border-b">{row.passportNumber}</td>
//               <td className="p-4 border-b">{row.documentType}</td>
//               <td className="p-4 border-b">
//                 <select 
//                   value={row.status}
//                   onChange={(e) => handleStatusChange(index, e.target.value)} 
//                   className="border rounded p-2"
//                 >
//                   {statuses.map((status, statusIndex) => (
//                     <option key={statusIndex} value={status}>{status}</option>
//                   ))}
//                 </select>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DataTable;


import React from 'react';

interface DataRow {
  Surname: string;
  otherName: string;
  Passportnumber: string;
  type_of_travel_document: string;
  status?: string; // Added status property
}

interface DataTableProps {
  data: DataRow[];
}

const DataTable = ({ data }: DataTableProps) => {
  const statuses = ['Pending', 'Approved', 'Rejected', 'In Progress', 'Completed']; // Predefined statuses

  const handleStatusChange = (index: number, newStatus: string) => {
    data[index].status = newStatus; // Update the status for the corresponding row
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <table className="w-full border-collapse">
        <thead style={{ backgroundColor:'#e6f2ff' }}>
          <tr>
            <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Surname</th>
            <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Other Name</th>
            <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Passport Number</th>
            <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Document Type</th>
            <th style={{ color:'#004080' }} className="text-left p-4 font-semibold border-b">Status</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(data) && data.map((row, index) => (
            <tr 
              key={index} 
              style={{ backgroundColor: index % 2 === 0 ? '#f7fbff' : 'white' }}
              className="hover:bg-[#e6f2ff] transition-colors"
            >
              <td className="p-4 border-b">{row.Surname}</td>
              <td className="p-4 border-b">{row.otherName}</td>
              <td className="p-4 border-b">{row.Passportnumber}</td>
              <td className="p-4 border-b">{row.type_of_travel_document}</td>
              <td className="p-4 border-b">
                <select 
                  value={row.status}
                  onChange={(e) => handleStatusChange(index, e.target.value)} 
                  className="border rounded p-2"
                >
                  {statuses.map((status, statusIndex) => (
                    <option key={statusIndex} value={status}>{status}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
