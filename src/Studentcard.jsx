import data from './assets/data.json'
// import { UserCard } from 'react-ui-cards';
import { Card, CardContent, Typography, CardActions, Button } from "@mui/material";

export default function StudentCard({student,onDelete}) {
    return(
        <Card sx={{ maxWidth: 300, m: 1, borderRadius: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6" component="div">
          {student.name}
        </Typography>
        <Typography color="text.secondary">{student.roll}</Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          {student.address}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {student.email}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="error" onClick={onDelete}>Delete</Button>
        {/* <Button size="small">Edit</Button> */}
      </CardActions>
    </Card>
    )
}

