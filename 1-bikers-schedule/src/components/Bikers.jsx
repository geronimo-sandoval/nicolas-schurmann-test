import React from 'react';
import { Card } from 'react-bootstrap'
import BikersAvailable from './BikersAvailable';

const Bikers = ({ available, maxBiker }) => {
    return (
        <div className="text-center">
            <Card>
                <Card.Header>
                    <BikersAvailable
                        available={available}
                        max={maxBiker}
                    />
                </Card.Header>
            </Card>
        </div>
    )
}

export default Bikers;