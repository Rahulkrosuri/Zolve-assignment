import React, { useState } from 'react';
import '../App.css'
import apiCall from '../api/api';
import ChartComponent from './chart';

const FirstComponent = () => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [pageSize, setPageSize] = useState(10);
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
        const data = {
            page: page,
            pagesize: pageSize,
            fromDate: fromDate,
            toDate: toDate
        }
      const res = await apiCall(data)
      console.log(res)
      setData(res.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      {/* Input fields */}
      <form className='formSubmit' onSubmit={handleSubmit}>
        <div className='inputData'>
          <label>
            From Date:
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
          </label>
        </div>
        <div className='inputData'>
          <label>
            To Date:
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
          </label>
        </div>
        <div className='inputData'>
          <label>
            Page Size:
            <input type="number" value={pageSize} onChange={(e) => setPageSize(e.target.value)} />
          </label>
        </div>
        <div className='inputData'>
          <label>
            Page:
            <input type="number" value={page} onChange={(e) => setPage(e.target.value)} />
          </label>
        </div>

        {/* Submit button */}
        <button className='submit' type="submit">Submit</button>
      </form>

      {/* Display data */}
      {data.length ? 
        <div className='chart'>
        <ChartComponent data={data}/>
      </div> : <></>  
    }
      
    </div>
  );
};

export default FirstComponent;
