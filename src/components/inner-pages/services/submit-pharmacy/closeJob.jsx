"use client";
import React, { useState } from 'react';

const CloseJobForm = () => {
	const [formData, setFormData] = useState({
		pharmacy_name: '',
		pharmacy_address: '',
		phone_number: '',
		ticket_id: '',
	});
	const [message, setMessage] = useState('');
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage('');

		try {
			const response = await fetch('https://jobboardfunction-68d2afeb6762.herokuapp.com/closeJob', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});
			const result = await response.json();
			setMessage(result.message);
			setFormData({
				pharmacy_name: '', pharmacy_address: '555', phone_number: '', ticket_id: ''
			});
			window.location.href = result.url;
		} catch (error) {
			console.error('Error:', error);
			setMessage('Error submitting ticket.');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container" style={styles.container}>
			<h1 style={styles.heading}>Close Job</h1>
			<form onSubmit={handleSubmit} style={styles.form}>
				<input
					type="text"
					name="ticket_id"
					value={formData.ticket_id}
					onChange={handleChange}
					placeholder="Job ID"
					required
					style={styles.input}
				/>
				<button type="submit" style={styles.button} disabled={loading}>
					{loading ? 'Submitting...' : 'Submit'}
				</button>
			</form>
			{message && <div style={styles.message}>{message}</div>}
		</div>
	);
};

const styles = {
	container: {
		background: '#ffffff',
		padding: '20px',
		borderRadius: '8px',
		boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
		width: '100%',
		maxWidth: '450px',
		textAlign: 'left',
		margin: 'auto',
		marginTop: '50px'
	},
	heading: {
		textAlign: 'center',
		color: '#004069',
		fontSize: '2rem',
		whiteSpace: 'normal',
		paddingTop: '20px',
		paddingBottom: '10px',
		lineHeight: '1.5'
	},
	form: {
		display: 'flex',
		flexDirection: 'column'
	},
	input: {
		marginBottom: '8px',
		// padding: '8px',
		border: '1px solid #ccc',
		borderRadius: '4px',
		width: '100%',
		height: '100%',
		boxSizing: 'border-box'
	},
	button: {
		padding: '10px',
		background: '#28a745',
		border: 'none',
		color: 'white',
		cursor: 'pointer',
		borderRadius: '8px',
		width: '100%',
		fontSize: '16px'
	},
	message: {
		marginTop: '10px',
		color: '#004069',
		// textAlign: 'center'
	}
	// body: {
	// 	font-family: Arial, sans-serif,
	// 	display: flex,
	// 	justify-content: center,
	// 	align-items: center,
	// 	height: 100vh,
	// 	margin: 0,
	// 	color: #333
	// }
};

export default CloseJobForm;

