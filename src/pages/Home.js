import axios from "axios";
// import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Day } from "../components/Day.js";

function Home(props) {
  const path = '/api/tasks/filter/student/1'
  const url = `${process.env.REACT_APP_API_ORIGIN}${path}`;
  const [tasks, setTasks] = useState(null);
  const [weekday, setWeekday] = useState('月');
  useEffect(() => {
    axios.get(url).then((response) => {
      setTasks(response.data);
    });
  }, []);
  if (!tasks) return 'loading...';

  function changeDay(day) {
    setWeekday(day);
  }

  return (
    <>
      <nav>
        <button onClick={() => {changeDay('月')}} className='monday'>月</button>
        <button onClick={() => {changeDay('火')}} className='tuesday'>火</button>
        <button onClick={() => {changeDay('水')}} className='wednesday'>水</button>
        <button onClick={() => {changeDay('木')}} className='thursday'>木</button>
        <button onClick={() => {changeDay('金')}} className='friday'>金</button>
        <button onClick={() => {changeDay('土')}} className='saturday'>土</button>
      </nav>
      <Day weekday={weekday} tasks={tasks}/>
    </>
  );
}

export default Home;