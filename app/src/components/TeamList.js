//Fetch data from: https://www.balldontlie.io/api/v1/games?seasons[]=2018&seasons[]=2017&team_ids[]=1
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getGames } from "../actions/index";
import VisitorTeam from "./VisitorTeam";
  const TeamList = (props) => {


    useEffect(() => {
        console.log(props.game)
        getGames();
      }, []);

       if(props.isFetched){
           return <h2>Loading...</h2>
       }
    return(
        
     <>

<h2>Visitor Team Data</h2>
    {props.game.map((item, i) => (
        
         <VisitorTeam key={i}team={item}></VisitorTeam>
        //  <h2 key={i}>{item.home_team.full_name}</h2>
    ))}
    {/* <h1>{props.game}</h1> */}
       <button onClick={ props.getGames } >Get Game Data</button>

      </>

    );
}

const mapStateToProps = (state) => {
    return {
        game: state.game,
        isFetching: state.isFetching
    }
}

// const mapDispatchToProps = { getGames };

export default connect(mapStateToProps, {getGames})(TeamList);