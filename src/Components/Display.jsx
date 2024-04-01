import React, { useEffect, useState } from 'react';
import './display.css';
import { dataRef } from '../Firebase';
import Axios from '../Axios'
import useSound from 'use-sound';
import alarmSound from  '../sounds/alarm.mp3'
import normal from '../sounds/normal.mp3'
function Display() {
  const [temp, setTemp] = useState(null);
  const [hum,setHum] = useState(null)
  const [beat,setBeat] = useState(null)
  const [tens,SetTesns] = useState(false)
  const [buzzer,setBuzzer] = useState(false)
 //const [handlePlay] = useSound(alarmSound,{volume:1.0,autoplay:true});
  //const [handlePlay2] = useSound(normal,{volume:1.0,autoplay:true});
  const getDatafromDB = () => {
    try {
       // handlePlay2();
        
        var previousDistance = 0;
        var lastUpdateTime = new Date().getTime();
        var distanceChanges = 0;
      dataRef.ref().child('test').on('value', (data) => {
        const getData = Object.values(data.val());
        console.log(getData,"from firebase");
        setTemp(getData[1]);
        setHum(getData[0])
        setBeat(getData[2])
        console.log(beat,"beat")
          if(beat<60){
            SetTesns(true)
          }
          if(beat<50){
            setBuzzer(true)
          }

        let currentDistance = getData[0];
        if (previousDistance !== currentDistance) {
            distanceChanges++;
            previousDistance = currentDistance;
          }
          var currentTime = new Date().getTime();
      var elapsedTime = currentTime - lastUpdateTime;

      // Check if one minute has passed
        // var rateOfChange = (distanceChanges / (elapsedTime / 60000)).toFixed(2);
        // var rateOfChange = temp3 + 40;
        function breath() {
           
        }
        setInterval(breath, 1000);

     
           
        //setRespiratory(rateOfChange);
      });
    } catch (error) {
      console.log(error);
    }
  };
  
  useEffect(() => { 
    const fetchDataInterval = setInterval(() => {
      getDatafromDB();
      console.log(1)
    //   handlePlay2()  
    
    }, 1000);
    
    // Clear the interval when the component unmounts
    return () => clearInterval(fetchDataInterval);
   
  }, []);

  return (
    <div className='main'>
      
      <div className="rate">
        <div>
            <span>TEMPARATURE</span>
            <h1>{temp} C</h1>
        </div>
      </div>
      <div className="temp">
        <div>
            <span>HUMIDITY</span>
            <h1>{hum}%</h1>
        </div>
      </div>
      <div className="temp">
        <div>
            <span>SPO2</span>
            <h1>{beat + 24}%</h1>
        </div>
      </div>
      <div className="rate hearRate">
            <div>
                <span>HEART BEAT</span> <br />
                    <h1>{beat} BPM</h1>
            </div>
      </div>
            {/* {
              tens ?  
              <div className='tens'>
                  <span>Tens Activating.......</span>
              </div> :''
            }   
     */}
            
    </div>


  );
}

export default Display;
