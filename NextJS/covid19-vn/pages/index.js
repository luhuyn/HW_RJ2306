import React from 'react';
import axios from 'axios';

function Home({ covidData }) {
  return (
    <div>
      <h1>COVID-19 Information in Vietnam</h1>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Confirmed Cases</th>
            <th>Active Cases</th>
            <th>Recovered Cases</th>
            <th>Deaths</th>
          </tr>
        </thead>
        <tbody>
          {covidData.map((data, index) => (
            <tr key={index}>
              <td>{data.Date}</td>
              <td>{data.Confirmed}</td>
              <td>{data.Active}</td>
              <td>{data.Recovered}</td>
              <td>{data.Deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const response = await axios.get('https://api.covid19api.com/total/country/vietnam');
    const covidData = response.data;
    return {
      props: {
        covidData,
      },
    };
  } catch (error) {
    console.error('Error fetching COVID-19 data:', error);
    return {
      props: {
        covidData: [],
      },
    };
  }
}

export default Home;
