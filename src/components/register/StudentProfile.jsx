import React, { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  Box,
} from '@mui/material';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';


const StudentProfile = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [gender, setGender] = useState('');
  const [grade, setGrade] = useState('');
  const [status, setStatus] = useState('');

  return (
    <Box sx={{ p: 3, zIndex: 0 }}  >
      <Typography variant="h6" gutterBottom>Student Profile</Typography>

      <TextField
        id="student-name"
        label="Student Name"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <Typography variant="subtitle1" gutterBottom>Date of Birth</Typography>
      <DatePicker
   
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        style={{ opacity: '1 !important' }}
        customInput={<TextField fullWidth variant="outlined" />}
        
      />

      <FormControl fullWidth sx={{ mb: 2, mt: 2 }}  >
        <InputLabel id="gender-select-label">Gender</InputLabel>
        <Select
          labelId="gender-select-label"
          id="gender-select"
          value={gender}
          label="Gender"
          onChange={(e) => setGender(e.target.value)}
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
        </Select>
      </FormControl>

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="grade-select-label">Select a Grade</InputLabel>
        <Select
          labelId="grade-select-label"
          id="grade-select"
          value={grade}
          label="Grade"
          onChange={(e) => setGrade(e.target.value)}
        >
          <MenuItem value="PreSchool">PreSchool</MenuItem>
          <MenuItem value="Kindergarten">Kindergarten</MenuItem>
          <MenuItem value="Grade 1">Grade 1</MenuItem>
          <MenuItem value="Grade 2">Grade 2</MenuItem>
          <MenuItem value="Grade 3">Grade 3</MenuItem>
          <MenuItem value="Grade 4">Grade 4</MenuItem>
          <MenuItem value="Grade 5">Grade 5</MenuItem>
          <MenuItem value="Grade 6">Grade 6</MenuItem>
          <MenuItem value="Elementary">Elementary</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="previous-school"
        label="Previous School"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="previous-grade-select-label">Select Previous Grade</InputLabel>
        <Select
          labelId="previous-grade-select-label"
          id="previous-grade-select"
          value={grade}
          label="Grade"
          onChange={(e) => setGrade(e.target.value)}
        >
          <MenuItem value="PreSchool">PreSchool</MenuItem>
          <MenuItem value="Kindergarten">Kindergarten</MenuItem>
          <MenuItem value="Grade 1">Grade 1</MenuItem>
          <MenuItem value="Grade 2">Grade 2</MenuItem>
          <MenuItem value="Grade 3">Grade 3</MenuItem>
          <MenuItem value="Grade 4">Grade 4</MenuItem>
          <MenuItem value="Grade 5">Grade 5</MenuItem>
          <MenuItem value="Grade 6">Grade 6</MenuItem>
          <MenuItem value="Elementary">Elementary</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="parent-guardian"
        label="Parent / Guardian"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="home-address"
        label="Home Address"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="home-phone"
        label="Home Phone"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="email-address"
        label="Email Address"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="business-address"
        label="Business Address"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="occupation"
        label="Occupation"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="work-phone"
        label="Work Phone"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel id="status-select-label">Select Parent Status</InputLabel>
        <Select
          labelId="status-select-label"
          id="status-select"
          value={status}
          label="Status"
          onChange={(e) => setStatus(e.target.value)}
        >
          <MenuItem value="Married">Married</MenuItem>
          <MenuItem value="Living Together">Living Together</MenuItem>
          <MenuItem value="Separated">Separated</MenuItem>
          <MenuItem value="Widowed">Widowed</MenuItem>
        </Select>
      </FormControl>

      <TextField
        id="emergency-contact"
        label="Emergency Contact"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />

      <TextField
        id="relationship"
        label="Relationship"
        fullWidth
        variant="outlined"
        sx={{ mb: 2 }}
      />
    </Box>
  );
};

export default StudentProfile;
