import React from 'react';

function FilterContainer(props) {

    return (
        <React.Fragment>
            <h5>Filter</h5>
            <p className="text-center filterTitle">Launch Year</p>
            <hr />
            <div className="row">
                <div className="col-6">

                    <input type="button" className="box" value="2006" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2008" onClick={props.buttonClick}/> 
                    <input type="button" className="box" value="2010" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2012" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2014" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2016" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2018" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2020" onClick={props.buttonClick}/>
                    
                </div>
                <div className="col-6">

                    <input type="button" className="box" value="2007" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2009" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2011" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2013" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2015" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2017" onClick={props.buttonClick}/>
                    <input type="button" className="box" value="2019" onClick={props.buttonClick}/>
                    
                </div>                                           
            </div>  
            <p className="text-center filterTitle">Successful Launch</p>
            <hr />
            <div className="row">
                <div className="col-6">
                    <input type="button" className="box" value="True" onClick={props.dataBySuccessfulLaunch}/>
                </div>
                <div className="col-6">
                    <input type="button" className="box" value="False" onClick={props.dataByFailureLaunch}/>
                </div>
            </div>  
            <p className="text-center filterTitle">Successful Landing</p>
            <hr />
            <div className="row">
                <div className="col-6">
                    <input type="button" className="box" value="True" onClick={props.dataChangeOnSuccessfulLand}/>
                </div>
                <div className="col-6">
                    <input type="button" className="box" value="False" onClick={props.dataByFailureLand}/>
                </div>                    
            </div>               
        </React.Fragment>
    )
}

export default FilterContainer
