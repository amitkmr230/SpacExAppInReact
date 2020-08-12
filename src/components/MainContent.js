import React, {useState, useEffect} from 'react';
import Axios from 'axios';

function MainContent(props) {

    const [data, setData] = useState([]);
    const [loading, setloading] = useState(true);

    // ALL 
    useEffect(() => {
        Axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
        .then(res => {
            setData(res.data)
            setloading(false)
        })
        .catch(err => console.log(err))
    }, [])

    // BY YEAR 
    useEffect(() => {
        setData(props.buttonClick)
    }, [props.buttonClick])

    // BY SUCCESSFUL LAUNCH 
    useEffect(() => {
        setData(props.successfulLaunch)
    }, [props.successfulLaunch])

    // BY FAILED LAUNCH 
    useEffect(() => {
        setData(props.dataByFailureLaunch)
    }, [props.dataByFailureLaunch])

    // BY SUCCESSFUL LAND 
    useEffect(() => {
        setData(props.dataChangeOnSuccessfulLand)
    }, [props.dataChangeOnSuccessfulLand])

    // BY FAILED LAND 
    useEffect(() => {
        setData(props.dataByFailureLand)
    }, [props.dataByFailureLand])

    return (
        <React.Fragment>
            {loading ? <h1 className="text-center loadingText">Loading Data... Please Wait!!!</h1> : 
            <div className="row actualContent">
            {
            data.map(eachData => {
                return (
                    <div className="col-3" key={eachData.flight_number}>                
                        <div className="card" style={{"width": "auto"}}>
                            <div className="container">
                                <img className="card-img-top" src={eachData.links.mission_patch_small} alt="rocket pic" />
                                <div className="card-body">
                                <h6 className="card-title missionName">{eachData.mission_name} #{eachData.flight_number}</h6>
                                <h6 className="card-title"><span className="details">Mission Ids: </span><span className="dynamicData">{(eachData.mission_id.length === 0) ? "NA" : eachData.mission_id.join()}</span></h6>
                                <h6 className="card-title"><span className="details">Launch Year: </span><span className="dynamicData">{eachData.launch_year}</span></h6>
                                <h6 className="card-title"><span className="details">Successful Launch: </span><span className="dynamicData">{eachData.launch_success ? "True" : "False"}</span></h6>
                                <h6 className="card-title"><span className="details">Successful Landing: </span><span className="dynamicData">{(eachData.rocket.first_stage.cores[0].land_success === null) ? 'NA': eachData.rocket.first_stage.cores[0].land_success ? 'True' : 'False'}</span></h6>
                            </div>
                        </div>                            
                    </div>
                    </div>
                    
                )
            }
            )
            } 
            </div>
            }
        </React.Fragment>
    )
}

export default MainContent
