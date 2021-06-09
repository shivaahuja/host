import React, { useEffect, useState} from 'react';




function Fahrkosten () {

    const[startTime, setStarttime] = useState();
    const[endTime, setEndtime] = useState();
    const[dauerInMin, setDauerInMin] = useState(0);
    const[dauerInSec, setDauerInSec] = useState(0);
    const[cost, setCost] = useState(0);
    const[startTime2, setStarttime2] = useState(new Date());
    const[endTime2, setEndtime2] = useState(new Date());
    const[startButtonState, setStartButtonState] = useState(true);
    const[endButtonState, setEndButtonState] = useState(true);
    const[startTripState, setStartTripState] = useState(true);
    const[initialCost, setInitialCost] = useState(0);
    const[singleButtonState, setSingleButtonState] = useState(false);
    var preis = Math.ceil(dauerInMin*cost+ initialCost).toFixed(2);
    const currentTrip = [startTime, endTime, preis];
    const localStorageContent = [localStorage.getItem('Trips')];
    var allTrips = [];
    
    

    function startTripTime(){
        setStarttime2(new Date())
        setStarttime(new Date().toLocaleTimeString())
        setStartButtonState(true)
        setEndButtonState(false)
        setSingleButtonState(true)
       
    }

    function endTripTime(){
        setEndtime2(new Date())
        setEndtime(new Date().toLocaleTimeString())
        setDauerInSec((Math.abs(endTime2-startTime2)/(1000))%60);
        setDauerInMin((Math.abs(endTime2-startTime2)/(1000 * 60))%60);
        
        setEndButtonState(true)
        setStartTripState(false)
        

    }

    function startNewTrip(){
        setStartButtonState(false)
        setStartTripState(true)
        setStarttime()
        setEndtime()
        setDauerInMin(0)
        setDauerInSec(0)
        setSingleButtonState(false)
        
    }

    function addMin(){
        setDauerInMin(dauerInMin+ 5)
        console.log(dauerInMin)
    }

    function saveTrip(){
        allTrips.push(currentTrip)
        
        localStorage.setItem('Trips',(allTrips))
        console.log(allTrips)
    }

    function changePriceTo1(){
        setCost(1)
        setStartButtonState(false)
        setInitialCost(1)
    }

    function changePriceTo2(){
        setCost(2)
        setStartButtonState(false)
        setInitialCost(2)
    }

    function changePriceTo3(){
        setCost(3)
        setStartButtonState(false)
        setInitialCost(3)
    }

    function formatTime(time){
        return time < 10 ? `0${time}` : time;
    }
    

    return (
      
        <div className="formbody">
            
                <div className="Scooter1">
                    <input onClick={changePriceTo1} type="radio" id="scooter1" value="style1"  name="scootertype" disabled={singleButtonState} />
                    <label id="scooter1" htmlFor="scooter1">scooter1</label>
                </div>
                <div className="Scooter2">
                    <input onClick={changePriceTo2} type="radio" id="scooter2" value="style2" name="scootertype" disabled={singleButtonState} />
                    <label htmlFor="scooter2">scooter2</label>
                </div>
                <div className="Scooter3">
                    <input onClick={changePriceTo3} type="radio" id="scooter3" value="style3" name="scootertype" disabled={singleButtonState} />
                    <label htmlFor="scooter3">scooter3</label>
                </div>
            
                <div className="clr"></div>
                
        
            
                
                
                <div className="clr"></div>

                <div className="information">               
                <h1>Fahrkosten: {preis}€ </h1>

                   {/* <p1>Current time{time}</p1> */}
                    <p id='p1' value='p1'>Start time: {startTime}</p>
                    <p id='p2'>End time: {endTime}</p>
                    <p id='p3'>Trip Time: {formatTime(dauerInMin.toFixed(0))}:{formatTime(dauerInSec.toFixed(0))} </p>
                    <p id='p4'>Cost per Minute: {cost} €</p>
            </div>
  
                                      
        </div>
            )
        }



export default Fahrkosten;
