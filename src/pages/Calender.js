import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import './Calender.css';


function Calendar() {

  return (
    <div className="App">
        <div className='row justify-content-center'>
            <div className="col-1 tblHeader">
                <p className='txtHeader'>Isnin</p>
            </div>
            <div className="col-1 tblHeader">
                <p className='txtHeader'>Selasa</p>
            </div>
            <div className="col-1 tblHeader">
                <p className='txtHeader'>Rabu</p>
            </div>
            <div className="col-1 tblHeader">
                <p className='txtHeader'>Khamis</p>
            </div>
            <div className="col-1 tblHeader">
                <p className='txtHeader'>Jumaat</p>
            </div>
            <div className="col-1 tblHeader">
                <p className='txtHeader'>Sabtu</p>
            </div>
            <div className="col-1 tblHeader">
                <p className='txtHeader'>Ahad</p>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className="col-1 tblContent">
                <p className='txtDate'>29 Syaaban</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>30 Syaaban</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>1 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>2 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>3 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>4 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>5 Ramadhan</p>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className="col-1 tblContent">
                <p className='txtDate'>6 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>7 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>8 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>9 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>10 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>11 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>12 Ramadhan</p>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className="col-1 tblContent">
                <p className='txtDate'>13 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>14 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>15 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>16 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>17 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>18 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>19 Ramadhan</p>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className="col-1 tblContent">
                <p className='txtDate'>20 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>21 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>22 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>23 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>24 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>25 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>26 Ramadhan</p>
            </div>
        </div>
        <div className='row justify-content-center'>
            <div className="col-1 tblContent">
                <p className='txtDate'>27 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>28 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>29 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>30 Ramadhan</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>1 Syawal</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>2 Syawal</p>
            </div>
            <div className="col-1 tblContent">
                <p className='txtDate'>3 Syawal</p>
            </div>
        </div>
    </div>
  );
}

export default Calendar;