// src/app/(login)/not-found.tsx



"use client";

import * as React from 'react';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

export default function Login() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!isMounted) return null;

  return (
    <Container
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#7209b7",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div
        className="logincontainer"
        style={{
          height: "auto",
          width: "75vh",
          backgroundColor: "#470673",
          borderRadius: "5rem",
          boxShadow: "20px 20px 15px -3px rgba(0,0,0,0.25)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <Stack spacing={2} direction="column" alignItems="center">
          <div
            style={{
              width: "100%", // Full width
              boxShadow: "20px 20px 15px -3px rgba(0,0,0,0.25)", // Same shadow as buttons
              borderRadius: "8px", // Optional: Rounded corners
              overflow: "hidden", // To contain the input styles
            }}
          >
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "#1976d2", // Blue background color
                  color: "white", // Text color
                  height: "40px", // Set the height for the input
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976d2", // Border color
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976d2", // Border color on hover
                  },
                  "& .MuiInputBase-input": {
                    color: "white", // Input text color
                    display: "flex",
                    alignItems: "center", // Center vertically
                    padding: "0 14px", // Horizontal padding
                  },
                },
              }}
            />
          </div>
          <div
            style={{
              width: "100%", // Full width
              boxShadow: "20px 20px 15px -3px rgba(0,0,0,0.25)", // Same shadow as buttons
              borderRadius: "8px", // Optional: Rounded corners
              overflow: "hidden", // To contain the input styles
            }}
          >
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              InputProps={{
                sx: {
                  bgcolor: "#1976d2", // Blue background color
                  color: "white", // Text color
                  height: "40px", // Set the height for the input
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976d2", // Border color
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1976d2", // Border color on hover
                  },
                  "& .MuiInputBase-input": {
                    color: "white", // Input text color
                    display: "flex",
                    alignItems: "center", // Center vertically
                    padding: "0 14px", // Horizontal padding
                  },
                },
              }}
            />
          </div>
          <Button variant="contained">Login</Button>
          <Button variant="contained" onClick={handleClickOpen}>
            Request Access
          </Button>
        </Stack>

        {/* Dialog Form for Request Access */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Request Access</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your email to request access.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="outlined"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleClose}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </Container>
  );
}
