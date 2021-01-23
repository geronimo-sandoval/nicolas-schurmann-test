import React from 'react';
import Badge from 'react-bootstrap/Badge'

const BikersAvailable = ({ available, max }) => {
    return (
        <div>
            <h4>
                BIKERS AVAILABLE:
            </h4>
            <h2>
                <Badge variant={available ? 'success' : 'danger'}>
                    {available}/{max}
                </Badge>
            </h2>
            {!available &&
                <h4 className="text-danger">
                    Bikers not available, please try later
                </h4>
            }
        </div>
    )
}

export default BikersAvailable;