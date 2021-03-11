import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import male from '../../images/male.png'
import female from '../../images/female.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHistory,faFlag,faFutbol,faVenusMars} from '@fortawesome/free-solid-svg-icons'
import { ExternalLink } from 'react-external-link';
import facebook from '../../images/Facebook.png'
import twetter from '../../images/Twitter.png'
import youtube from '../../images/YouTube.png'

import './LeagueDetail.css'
const LeagueDetail = () => {
    const{idLeague} = useParams()
    const[details,setDetails] = useState([])
    const {strLeague,intFormedYear,strCountry,strSport,strGender,strDescriptionEN,strFacebook,strTwitter,strYoutube} = details
    const fbLink = `https://${strFacebook}`
    const tweetLink = `https://${strTwitter}`
    const ytLink = `https://${strYoutube}`
    useEffect(()=>{
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`)
        .then(res => res.json())
        .then(data => setDetails(data.leagues[0]))
    },[idLeague])
    let gender = strGender && strGender.toLowerCase()

    return (
        <>
        <div className="color">
            <Header></Header>
            <div className="text-center picture">
                <img className="imageSize" src={details.strBadge} alt=""/>
            </div>

            <div className="container cardDetails mt-5">
                    <div className="row">
                        <div className="col-md-9">
                            <h1>{strLeague}</h1>
                            <h6><FontAwesomeIcon icon={faHistory} /> Formed: {intFormedYear}</h6>
                            <h6><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h6>
                            <h6><FontAwesomeIcon icon={faFutbol} /> Type: {strSport}</h6>
                            <h6><FontAwesomeIcon icon={faVenusMars} /> Gender: {strGender}</h6>
                        </div>
                        <div className="col-md-3 ">
                            {
                                gender && gender === "male"? (<img className="img" src={male} alt=""/>)
                                : (<img className="img" src={female} alt=""/>)
                            }
                        </div>
                    </div>
                </div>
            <div className="container my-5 font">
                <p>{strDescriptionEN}</p>
            </div>
        </div>
        <div className="d-flex justify-content-center">
            <footer>
            <ExternalLink href = {fbLink}>
            <span>
                <img className="icon" src={facebook} alt="..."/>{" "}
            </span>
            </ExternalLink>

            <ExternalLink href = {tweetLink}>
                <span>
                    <img className="icon" src={twetter} alt="..."/>{" "}
                </span>
            </ExternalLink>

            <ExternalLink href = {ytLink}>
                <span>
                    <img className="icon" src={youtube} alt="..."/>{" "}
                </span>
            </ExternalLink>
            </footer>
            
        </div>
        </>
        
    );
};

export default LeagueDetail;