import { Fragment, useState } from 'react';
import { Col, Table } from 'react-bootstrap'
import { generateBikers, generateHours } from '../utilities/generateUtilities';
import TimeValues from './TimeValues';
import Bikers from './Bikers';

// Max number of bikers available to scale the app
const maxBikers = 8;

// 24 hours time in seconds
// [480 / 60 = 8|08:00am], [1230 / 60 = 20.5|08:00pm]
const hoursGenerated = generateHours(480, 1230, 30);

// Generate 8 bikers status buttons
const bikersGenerated = generateBikers(maxBikers);

const TableContainer = () => {
	const [bikersAvailable, setBikersAvailable] = useState(maxBikers);
	const [bikers, setBikers] = useState([]);

	const handleClick = (i) => {
		if (!bikers.includes(i) && bikers.length < maxBikers) {
			setBikers([...bikers, i]);
			setBikersAvailable(bikersAvailable - 1);
		} else if (bikers.includes(i)) {
			setBikers(bikers.filter((n) => n !== i));
			setBikersAvailable(bikersAvailable + 1);
		}
	}

	return (
		<Fragment>
			<Col xs={6}>
				<Table className="timetable text-center" striped bordered hover size="sm">
					<thead>
						<tr>
							<th>Hour</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{hoursGenerated.map((hour, index) =>
							/**
							 * Note for Mr. Nicolas: 
							 * Normally I would use a different identifier to 
							 * process all this information (I mean key={} for example), but considering 
							 * that the values are static, I saw no need to 
							 * do so and that "index" values would be enough for this task.
							 */
							<TimeValues
								key={index}
								hours={hour}
								bikers={(index + 1)}
								status={bikers.includes(index + 1)}
								onClick={() => handleClick(index + 1)}
							/>
						)}
					</tbody>
				</Table>
			</Col>

			<Col xs={6}>
				<Bikers
					bikers={bikersGenerated}
					available={bikersAvailable}
					maxBiker={maxBikers}
				/>
			</Col>
		</Fragment>
	);
}

export default TableContainer;
