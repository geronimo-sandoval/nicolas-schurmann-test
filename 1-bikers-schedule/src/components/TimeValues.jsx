import React from 'react';

const Timetable = ({ hours, status, bikers, onClick }) => {
	return (
		<tr>
			<td>{hours}</td>
			<td
				className={status ? 'active' : undefined + ' pointer'}
				onClick={() => onClick()}
			>{status && "SELECTED"}</td>
		</tr>
	)
}

export default Timetable;