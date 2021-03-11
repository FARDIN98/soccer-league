import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import './Home.css'
import Leagues from '../Leagues/Leagues';

const Home = () => {
    const [league,setLeague] = useState([])
    useEffect(()=>{
        fetch("https://www.thesportsdb.com/api/v1/json/1/all_leagues.php")
        .then(res => res.json())
        .then((data) => {
            const allLeagues = data.leagues
            const leagues15 = allLeagues.slice(0,15)
            setLeague(leagues15)
        })
    },[])
    return (
        
        <>
        <h3 className="startingStyle d-flex align-items-center justify-content-center">Soccer Championship</h3>
        <div className="style">
        <div className="container ">
            <div className="row ">
            {
                league.map(league => <Leagues league = {league} key = {league.idLeague}></Leagues>)
            }
            </div>
        </div>
        </div>
        </>
    );
};

export default Home;