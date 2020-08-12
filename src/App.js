import React, {useState} from 'react';
import './App.css';
import FilterContainer from './components/FilterContainer';
import MainContent from './components/MainContent';
import Axios from 'axios';

function App() {

  const [dataByYear, setDataByYear] = useState([]);
  const [dataBySuccessfulLaunch, setDataBySuccessfulLaunch] = useState([]);
  const [dataByFailedLaunch, setdataByFailedLaunch] = useState([]);
  const [dataBySuccessfulLand, setDataBySuccessfulLand] = useState([]);
  const [dataByFailedLand, setdataByFailedLand] = useState([]);

  // BY YEAR 
  const dataChangeOnClickByYear = (e) => {
    const year = e.target.value
    console.log(year)
    Axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
        .then(res => {
          setDataByYear(res.data.filter(each => each.launch_year === year))
          console.log(res.data.filter(each => each.launch_year === year))
        })
        .catch(err => console.log(err))
    }

    // BY SUCCESSFUL LAUNCH 
    const dataChangeOnSuccessfulLaunch = () => {
      Axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
          .then(res => {
            setDataBySuccessfulLaunch(res.data.filter(each => each.launch_success === true))
            console.log(res.data.filter(each => each.launch_success === true))
          })
          .catch(err => console.log(err))
      }

    // BY FAILED LAUNCH 
    const dataByFailureLaunch = () => {
      Axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
          .then(res => {
            setdataByFailedLaunch(res.data.filter(each => each.launch_success === false))
            console.log(res.data.filter(each => each.launch_success === false))
          })
          .catch(err => console.log(err))
      }

      // BY SUCCESSFUL LAND 
    const dataChangeOnSuccessfulLand = () => {
      Axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
          .then(res => {
            setDataBySuccessfulLand(res.data.filter(each => each.rocket.first_stage.cores[0].land_success === true))
            console.log(res.data.filter(each => each.rocket.first_stage.cores[0].land_success === true))
          })
          .catch(err => console.log(err))
      }

    // BY FAILED LAND 
    const dataByFailureLand = () => {
      Axios.get('https://api.spaceXdata.com/v3/launches?limit=100')
          .then(res => {
            setdataByFailedLand(res.data.filter(each => each.rocket.first_stage.cores[0].land_success === false))
            console.log(res.data.filter(each => each.rocket.first_stage.cores[0].land_success === false))
          })
          .catch(err => console.log(err))
      }
    

  return (
    <React.Fragment>
      <div className="container">
        <h1 className="mt-2 mb-5">SpacEx Launch Programs</h1>
        <div className="row mb-4">
          <div className="col-md-2 col-xs-12">
            <div className="filterContainer">
              <FilterContainer buttonClick={dataChangeOnClickByYear} dataBySuccessfulLaunch={dataChangeOnSuccessfulLaunch} dataByFailureLaunch={dataByFailureLaunch} dataChangeOnSuccessfulLand={dataChangeOnSuccessfulLand} dataByFailureLand={dataByFailureLand} />
            </div>
          </div>
          <div className="col-md-10 col-xs-12">
            <MainContent buttonClick={dataByYear} successfulLaunch={dataBySuccessfulLaunch} dataByFailureLaunch={dataByFailedLaunch} dataChangeOnSuccessfulLand={dataBySuccessfulLand} dataByFailureLand={dataByFailedLand} />
          </div>
        </div>
        <h5 className="text-center">Developed by: Amit Mahapatra</h5>
      </div>
    </React.Fragment>
  );
}

export default App;
