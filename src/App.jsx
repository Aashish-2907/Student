// App.jsx
import React, { useState } from "react";
import StudentCard from "./Studentcard";
import { Box } from "@mui/material";
import SearchBar from "./SearchBar";

const initialstudents = [
  { name: "Aman Sharma", roll: "CSE101", address: "Patna, Bihar", email: "aman.sharma@example.com" },
  { name: "Priya Singh", roll: "CSE102", address: "Delhi, India", email: "priya.singh@example.com" },
  { name: "Rohit Kumar", roll: "CSE103", address: "Mumbai, Maharashtra", email: "rohit.kumar@example.com" },
  { name: "Neha Verma", roll: "CSE104", address: "Kolkata, West Bengal", email: "neha.verma@example.com" },
  { name: "Vikash Raj", roll: "CSE105", address: "Lucknow, Uttar Pradesh", email: "vikash.raj@example.com" },
  { name: "Simran Kaur", roll: "CSE106", address: "Chandigarh, Punjab", email: "simran.kaur@example.com" },
  { name: "Arjun Mehta", roll: "CSE107", address: "Jaipur, Rajasthan", email: "arjun.mehta@example.com" },
  { name: "Sneha Gupta", roll: "CSE108", address: "Bhopal, Madhya Pradesh", email: "sneha.gupta@example.com" },
  { name: "Karan Patel", roll: "CSE109", address: "Ahmedabad, Gujarat", email: "karan.patel@example.com" },
  { name: "Anjali Mishra", roll: "CSE110", address: "Varanasi, Uttar Pradesh", email: "anjali.mishra@example.com" }
];

export default function App() {
  const [students,setStudents]=useState(initialstudents);

  const [search, setSearch] = useState("");
  const handleDelete =(roll) => {
    setStudents(students.filter(s=>s.roll!==roll));
  }

  const filteredStudents = students.filter(
    s =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.roll.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <Box>
        <Box sx={{ p: 2, backgroundColor: "#f5f5f5" }}>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
        </Box>     

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "center" }}>
            {filteredStudents.map((s) => (
            <StudentCard key={s.roll} student={s} onDelete={() => handleDelete(s.roll)} />
            ))}
        </Box>
        </Box>
    </Box>
    
    
    // <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", p: 2, gap: 2, backgroundColor: "#f5f5f5" }}>
    //   {students.map((s, i) => (
    //     <Studentcard key={i} student={s} onDelete={()=>handleDelete(s.roll)} />
    //   ))}
    // </Box>
  );
}
