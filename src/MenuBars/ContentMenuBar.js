import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';
import './ContentMenuBar.css';
import TopMenuBar from './TopMenuBar';
import DataMenuBar from './DataMenuBar';
import StandingsMenuBar from './StandingsMenuBar';


function ContentMenuBar() {
    const [teams, setTeams] = useState([]);
    const [standings, setStandings] = useState([]);

    useEffect(() => {
        const fetchStandings = async () => {
            try {
                var teamsData = [];
                var standingsData = [];
                const response = await axios.get('/standings'); //'/standings'
                standingsData = response.data.records;
                setStandings(standingsData);
                teamsData = standingsData.map((record) => {return record.teamRecords}).flat();
                teamsData.sort((a, b) => {
                    if (a.team.name < b.team.name) {
                      return -1;
                    }
                    if (a.team.name > b.team.name) {
                      return 1;
                    }
                    return 0;
                });
                var logos = [
                    {teamName: "Anaheim Ducks",url: "https://content.sportslogos.net/logos/1/1736/full/1651_anaheim_ducks-primary-20141.png" },
                    {teamName: "Arizona Coyotes",url: "https://content.sportslogos.net/logos/1/5263/full/arizona_coyotes_logo_primary_2022_sportslogosnet-8273.png" },
                    {teamName: "Boston Bruins",url: "https://content.sportslogos.net/logos/1/3/full/boston_bruins_logo_primary_20083802.png" },
                    {teamName: "Buffalo Sabres",url: "https://content.sportslogos.net/logos/1/4/full/buffalo_sabres_logo_primary_20212495.png" },
                    {teamName: "Calgary Flames",url: "https://content.sportslogos.net/logos/1/5/full/calgary_flames_logo_primary_20212695.png" },
                    {teamName: "Carolina Hurricanes",url: "https://content.sportslogos.net/logos/1/6/full/carolina_hurricanes_logo_primary_20004386.png" },
                    {teamName: "Chicago Blackhawks",url: "https://content.sportslogos.net/logos/1/7/full/56.png" },
                    {teamName: "Colorado Avalanche",url: "https://content.sportslogos.net/logos/1/8/full/64.png" },
                    {teamName: "Columbus Blue Jackets",url: "https://content.sportslogos.net/logos/1/9/full/jhepegs329pc7ugyypebl28wg.png" },
                    {teamName: "Dallas Stars",url: "https://content.sportslogos.net/logos/1/10/full/dallas_stars_logo_primary_2022_sportslogosnet-4332.png" },
                    {teamName: "Detroit Red Wings",url: "https://content.sportslogos.net/logos/1/11/full/yo3wysbjtagzmwj37tb11u0fh.png" },
                    {teamName: "Edmonton Oilers",url: "https://content.sportslogos.net/logos/1/12/full/2728_edmonton_oilers-primary-2018.png" },
                    {teamName: "Florida Panthers",url: "https://content.sportslogos.net/logos/1/13/full/florida_panthers_logo_primary_20174924.png" },
                    {teamName: "Los Angeles Kings",url: "https://content.sportslogos.net/logos/1/14/full/2220_los_angeles_kings-primary-2020.png" },
                    {teamName: "Minnesota Wild",url: "https://content.sportslogos.net/logos/1/15/full/8810_minnesota_wild-primary-2014.png" },
                    {teamName: "Montreal Canadiens",url: "https://content.sportslogos.net/logos/1/16/full/montreal_canadiens_logo_primary_20001687.png" },
                    {teamName: "Nashville Predators",url: "https://content.sportslogos.net/logos/1/17/full/lvchw3qfsun2e7oc02kh2zxb6.png" },
                    {teamName: "New Jersey Devils",url: "https://content.sportslogos.net/logos/1/18/full/32tfs723a3bes0p0hb4hgcy1u.png" },
                    {teamName: "New York Islanders",url: "https://content.sportslogos.net/logos/1/19/full/3911_new_york_islanders-primary-2018.png" },
                    {teamName: "New York Rangers",url: "https://content.sportslogos.net/logos/1/20/full/new_york_rangers-primary_20006777.png" },
                    {teamName: "Ottawa Senators",url: "https://content.sportslogos.net/logos/1/21/full/1129_ottawa_senators-primary-2021.png" },
                    {teamName: "Philadelphia Flyers",url: "https://content.sportslogos.net/logos/1/22/full/161.png" },
                    {teamName: "Pittsburgh Penguins",url: "https://content.sportslogos.net/logos/1/24/full/pittsburgh_penguins_logo_primary_20177954.png" },
                    {teamName: "San Jose Sharks",url: "https://content.sportslogos.net/logos/1/26/full/san_jose_sharks-primary_20099429.png" },
                    {teamName: "Seattle Kraken",url: "https://content.sportslogos.net/logos/1/6740/full/seattle_kraken_logo_primary_20226314.png" },        
                    {teamName: "St. Louis Blues",url: "https://content.sportslogos.net/logos/1/25/full/187.png" },
                    {teamName: "Tampa Bay Lightning",url: "https://content.sportslogos.net/logos/1/27/full/tampa_bay_lightning_logo_primary_20124022.png" },
                    {teamName: "Toronto Maple Leafs",url: "https://content.sportslogos.net/logos/1/28/full/8761_toronto_maple_leafs-primary-2017.png" },
                    {teamName: "Vancouver Canucks",url: "https://content.sportslogos.net/logos/1/29/full/2084_vancouver_canucks-primary-2020.png" },
                    {teamName: "Vegas Golden Knights",url: "https://content.sportslogos.net/logos/1/6114/full/vegas_golden_knights_logo_primary_20185183.png" },
                    {teamName: "Washington Capitals",url: "https://content.sportslogos.net/logos/1/30/full/llrs2zxi127vkqgcsvfb.png" },
                    {teamName: "Winnipeg Jets",url: "https://content.sportslogos.net/logos/1/3050/full/z9qyy9xqoxfjn0njxgzoy2rwk.png" },
            
                ];
                var newTeams = [];
                teamsData.map((team, index)=>{
                    return newTeams.push({...team, ...logos[index]})
                });
                teamsData = newTeams;
                teamsData = teamsData.sort((a,b) => a.leagueRank - b.leagueRank);
                setTeams(teamsData  );
            } catch (error) {
                console.error(error);
            }
        };
    fetchStandings();
  }, []);
    return (
        <div className="content-menu-bar">
            <DataMenuBar teams={teams}/>
            <StandingsMenuBar standings={standings} teams={teams}/>
        </div>
    );
  }

export default ContentMenuBar;
