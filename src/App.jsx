import React, { useState } from "react";
import StudentCard from "./Studentcard";
import SearchBar from "./SearchBar";
import "./App.css";

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
  const [students, setStudents] = useState(initialstudents);
  const [search, setSearch] = useState("");

  const handleDelete = (roll) => {
    setStudents(students.filter((s) => s.roll !== roll));
  };

  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.roll.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header>
        <div className="container">
          <div className="grid navbar-grid">
            <div className="Logo">
              <h1>Students</h1>
            </div>

            <ul className="navbar-menu">
              <li>Home</li>
              <li>About</li>
              <li>Country</li>
              <li>Contact</li>
            </ul> 

            <div className="ham-menu"></div>
          </div>
        </div>
      </header>

      {/* ✅ StudentCard rendering with your own CSS */}
      <div className="student-list-wrapper">
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />

        <ul className="student-list grid-four-cols">
          {filteredStudents.map((s) => (
            <StudentCard key={s.roll} student={s} onDelete={() => handleDelete(s.roll)} />
          ))}
        </ul>

      </div>
    </>
  );
}
