import React from 'react';
import {Card,Button} from 'react-bootstrap'
import {Link, useHistory} from 'react-router-dom'
import './Leagues.css'

const Leagues = (props) => {
    const {strLeague,strSport,idLeague} = props.league 
    const history = useHistory()
    const handleClick = (idLeague) => {
        history.push(`/league/${idLeague}`)
    }  
    return (
        <div className="col-md-3 mx-4 mt-3">
            <Card>
                <Card.Body>
                    <Card.Title className="text-center">{strLeague}</Card.Title>
                    <Card.Text className="text-center">Type: {strSport}</Card.Text>
                    <Link to={`/league/${idLeague}`}>
                        <div className="text-center">
                            <Button onClick={()=>handleClick(idLeague)} variant="primary">Details</Button>
                        </div>
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Leagues;