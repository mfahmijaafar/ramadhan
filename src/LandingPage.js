import React from 'react';
import { useState, useEffect } from 'react'
import './LandingPage.css';
import solat from './solat.jpg';


function LandingPage() {
  const [time, setTime] = useState(Date.now());
  const [seconds, setSeconds] = useState(null);
  const [minutes, setMinutes] = useState(null);
  const [hour, setHour] = useState(null);
  const [days, setDays] = useState(null);
  const [daysToRamadan, setDaysToRamadan] = useState(null);
  const click = () =>{console.log('clicked')}

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000);
    var currentTime = new Date();
    var currentSeconds = currentTime.getSeconds();
    var currentMinutes = currentTime.getMinutes();
    var currentHour = currentTime.getHours();
    var currentMonth = currentTime.getMonth();
    var targetDate = new Date(2023, 2, 22); // month is 0-indexed
    var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

    var nextMonth;
    // determine if the current month is December (11)
    if (currentMonth === 11) {
      nextMonth = new Date(currentTime.getFullYear() + 1, 0, 1);
    } else {
      nextMonth = new Date(currentTime.getFullYear(), currentMonth + 1, 1);
    }
    // get the difference in milliseconds between the current time and the start of the next month
    var difference = nextMonth - currentTime;

    setDays(Math.floor(difference / (1000 * 60 * 60 * 24)))
    setSeconds(60 - currentSeconds)
    setMinutes(60 - currentMinutes)
    setHour(24 - currentHour)
    setDaysToRamadan(Math.round((targetDate - currentTime) / oneDay))

  }, [time]);

  return (
    <div className="App">
      <p>Hi Assalamualaikum kawan-kawan. Apa khabar anda hari ini?</p>
      <p>Kawan-kawan, dalam kesibukan kita dengan urusan didunia ni..</p>
      <p>Hanya tinggal <b>{seconds}</b> saat lagi untuk kita tinggalkan minit ini.</p>
      <p>Dan kita ada <b>{minutes}</b> minit lagi untuk ke jam yang seterusnya.</p>
      <p>Sedar tak sedar, kita punyai kurang <b>{hour}</b> jam lagi sebelum hari yang baru akan berganti.</p>
      <p>Dan <b>{days}</b> hari lagi sebelum bulan ini bakalan berakhir tuan tuan..</p>
      <p>Ketahuilah bahawa hanya kurang lebih <span className="num">{daysToRamadan}</span> hari lagi, Ramadhan bakal menemui kita.</p>
      <p>Jom sama -sama berselawat, dan tingkatkan amalan kita ya...</p>
      <p>Jom lakukan persediaan dengan lebih rapi menggunakan aplikasi web diari ramadhan dibawah!</p>
      <img className="gambar" src={solat}/><br/>
      <button className='btnz' onClick={click}>Diari Ramadhan 2023</button>
    </div>
  );
}

export default LandingPage;