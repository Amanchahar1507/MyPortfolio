import React from 'react'
import resumepic from '../images/resumepic2.jpeg';

const ResumeBuilderModal = () => {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header ">
            <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel">Resume Builder</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="m-auto py-1">
            <img src={resumepic} width={'100%'} height={'100%'} alt=''></img>
          </div>
          <div className="modal-footer">
            <div className="modal-dialog modal-dialog-scrollable">
              <h1 className='text-center'>Crypto Dashboaard App</h1>
              <h2>Project Description:</h2>
              <p>Cryptocurrency Dashboard is a web application that allows users to view cryptocurrency trends and their past price through graphical visualization.
                </p>
              <h2>The application will have the following features:</h2>
              <ul>
                <li>user can view data through dynamic graphs</li>
                <li>user can search cryptos.</li>
                <li>user can click on Duration buttons to view past prices and current prices of cryptos through graphs..</li>
                <li>Crypto Exchange: allows users to convert different crypto currencies into other currencies</li>
                <li>Sidebar indicates profit/loss percentage on 24 hour basis.</li>
              </ul>
              <h2>Technologies Used:</h2>
              <ul>
                <li>React: For building a dynamic and interactive user interface.</li>
                <li>Node.js: Enables server-side logic and API integrations.</li>
                <li>Tailwind CSS: Provides utility classes for rapid and responsive UI development.</li>
                <li>Express.js for creating the RESTful API</li>
                <li>CoinGeckoApi used for fetching crypto coin data .</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilderModal