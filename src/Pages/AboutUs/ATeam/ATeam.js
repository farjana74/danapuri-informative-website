import React from 'react';
import ATeamCard from '../ATeamCard/ATeamCard';
import './ATeam.css';

const ATeam = () => {
    return (
        <div className='container-fluid '>
            <div className="container pb-5">
                <h2 className='a-team-holder-title'>A TEAM</h2>
                <p className='a-team-holder-desc'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, <br /> sed diam nonumy eirmod tempor invidunt ut labore.</p>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2 g-4 py-4 px-4 a-team-card-holder">
                    <ATeamCard></ATeamCard>
                    <ATeamCard></ATeamCard>
                    <ATeamCard></ATeamCard>
                    <ATeamCard></ATeamCard>

                </div>
            </div>
        </div>
    );
};

export default ATeam;