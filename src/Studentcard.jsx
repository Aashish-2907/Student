import data from './assets/data.json'
// import { UserCard } from 'react-ui-cards';
// import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';




// import { NavLink } from "react-router-dom";

export default function StudentCard({ student, onDelete }) {
  const { name, roll, address, email } = student;

  return (
    <li className="student-card card">
      <div className="container-card bg-white-box">
        <div className="studentInfo">
          <p className="card-title">
            {name.length > 12 ? name.slice(0, 12) + "..." : name}
          </p>
          <p>
            <span className="card-description">Roll:</span> {roll}
          </p>
          <p>
            <span className="card-description">Address:</span> {address}
          </p>
          <p>
            <span className="card-description">Email:</span> {email}
          </p>

          <div className="button-group">
            
            <button className="btn delete" onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
