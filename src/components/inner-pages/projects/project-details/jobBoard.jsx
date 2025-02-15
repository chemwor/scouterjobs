"use client"
import React, {useEffect, useState} from "react";
import {
	Grid, Card, CardContent, Typography, Button,
	Dialog, DialogTitle, DialogContent, TextField,
	DialogActions, Container, Box
} from "@mui/material";


const JobBoardGrid = () => {
	const [open, setOpen] = useState(false);
	const [confirmationOpen, setConfirmationOpen] = useState(false);
	const [selectedItem, setSelectedItem] = useState(null);
	const [email, setEmail] = useState("");
	const [confirmEmail, setConfirmEmail] = useState("");
	const [isMatch, setIsMatch] = useState(false);

	const [data, setData] = useState([]);
	const [message, setMessage] = useState('');

	// Fetch data from backend API (replace with your API endpoint)
	useEffect(() => {
		fetch("https://jobboardfunction-68d2afeb6762.herokuapp.com/getJobs") // Backend API
			.then((response) => response.json())
			.then((data) => setData(data));
	}, []);

	// 🔹 Open the dialog with card info
	const handleOpenDialog = (item) => {
		setSelectedItem(item);
		setEmail("");
		setConfirmEmail("");
		setIsMatch(false);
		setOpen(true);
	};

	// 🔹 Close the email entry dialog
	const handleCloseDialog = () => {
		setOpen(false);
	};

	// 🔹 Check if emails match
	const handleEmailChange = (e) => {
		setEmail(e.target.value);
		setIsMatch(e.target.value === confirmEmail);
	};

	const handleConfirmEmailChange = (e) => {
		setConfirmEmail(e.target.value);
		setIsMatch(e.target.value === email);
	};

	// 🔹 Handle form submission
	const handleSubmit = async () => {
		if (!isMatch) return;

		// Simulate sending data (Replace with actual API call)
		// console.log("Sending email:", email);
		// console.log("Card Information:", selectedItem);

		const submitData = {
			email: email,
			job_id: selectedItem.job_id
		};

		console.log("Sending email:", submitData.email);
		console.log("Card Information:", submitData.job_id)

		try {
			const response = await fetch('https://jobboardfunction-68d2afeb6762.herokuapp.com/claimJob', {
				method: 'POST',
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(submitData)
			});
			const result = await response.json();
			setMessage(result.message);
		} catch (error) {
			console.error('Error:', error);
			setMessage('Error submitting job claim.');
		} finally {
			// Close the email input dialog
			setOpen(false);

			// Show the confirmation dialog
			setConfirmationOpen(true);
		}

	};

	return (
		<Container sx={{ mt: 4 }}>
			<Grid container spacing={3}>
				{data.map((item) => (
					<Grid item xs={12} sm={6} md={4} key={item.id}>
						<Card sx={{ p: 2, boxShadow: 3 }}>
							<CardContent>
								<Typography variant="h6" fontWeight="bold">
									{item.job_description}
								</Typography>
								<Button
									variant="contained"
									color="primary"
									sx={{ mt: 2 }}
									onClick={() => handleOpenDialog(item)}
								>
									Claim Job
								</Button>
							</CardContent>
						</Card>
					</Grid>
				))}
			</Grid>

			{/* 🔹 Email Input Dialog */}
			<Dialog open={open} onClose={handleCloseDialog}>
				<DialogTitle>Enter Your Email</DialogTitle>
				<DialogContent>
					<TextField
						label="Email"
						fullWidth
						height
						margin="dense"
						type="email"
						value={email}
						onChange={handleEmailChange}
					/>
					<TextField
						label="Confirm Email"
						fullWidth
						margin="dense"
						type="email"
						value={confirmEmail}
						onChange={handleConfirmEmailChange}
						error={email !== confirmEmail && confirmEmail !== ""}
						helperText={email !== confirmEmail && confirmEmail !== "" ? "Emails do not match" : ""}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleCloseDialog} color="secondary">
						Cancel
					</Button>
					<Button onClick={handleSubmit} color="primary" disabled={!isMatch}>
						Submit
					</Button>
				</DialogActions>
			</Dialog>

			{/* 🔹 Confirmation Dialog */}
			<Dialog open={confirmationOpen} onClose={() => setConfirmationOpen(false)}>
				<DialogTitle>Check Your Email</DialogTitle>
				<DialogContent>
					<Typography>Your request has been submitted successfully!</Typography>
					<Typography>Check your email for further information.</Typography>
				</DialogContent>
				<DialogActions>
					<Button onClick={() => setConfirmationOpen(false)} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</Container>
	);
};



// import React, { useEffect, useState } from "react";
// import {Grid, Card, CardContent, Typography, Container, Button} from "@mui/material";
//
// const JobBoardGrid = () => {
// 	const [data, setData] = useState([]);
//
// 	// Fetch data from backend API (replace with your API endpoint)
// 	useEffect(() => {
// 		fetch("https://jobboardfunction-68d2afeb6762.herokuapp.com/getJobs") // Backend API
// 			.then((response) => response.json())
// 			.then((data) => setData(data));
// 	}, []);
//
// 	// 🔹 Local mock data for testing
// 	const mockData = [
// 		{ id: 1, name: "Medicine: Advil  Dosage: None in city: Chicago in state: Ga", email: "alice@example.com" },
// 		{ id: 2, name: "Medicine: Advil  Dosage: None in city: Atlanta in state: Ga", email: "bob@example.com" },
// 		{ id: 3, name: "Medicine: Advil  Dosage: None in city: New York in state: Ga", email: "charlie@example.com" },
// 		{ id: 4, name: "Medicine: Advil  Dosage: None in city: Boston in state: Ga", email: "david@example.com" },
// 		{ id: 5, name: "Medicine: Advil  Dosage: None in city: Miami in state: Ga", email: "emma@example.com" },
// 		{ id: 6, name: "Medicine: Advil  Dosage: None in city: Denver in state: Ga", email: "frank@example.com" },
// 	];
//
// 	const handleButtonClick = (id, name) => {
// 		alert(`Viewing details for ${name} (ID: ${id})`);
// 	};
//
// 	return (
// 		<Container sx={{ mt: 4 }}>
// 			<Grid container spacing={3}>
// 				{data.map((item) => (
// 					<Grid item xs={12} sm={6} md={4} key={item.id}>
// 						<Card sx={{ p: 2, boxShadow: 3 }}>
// 							<CardContent>
// 								<Typography variant="h6" fontWeight="bold">
// 									{item.job_description}
// 								</Typography>
// 								<Button
// 									variant="contained"
// 									color="primary"
// 									sx={{ mt: 2 }}
// 									onClick={() => handleButtonClick(item.id, item.name)}
// 								>
// 									Claim Job
// 								</Button>
// 							</CardContent>
// 						</Card>
// 					</Grid>
// 				))}
// 			</Grid>
// 		</Container>
// 	);
// };

export default JobBoardGrid;


