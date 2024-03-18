import React from 'react'
import movie from '../images/movie.png';

const PopcornPeeksModal = () => {
  return (
    <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-dialog-centered modal-lg">
      <div className="modal-content">
        <div className="modal-header ">
          {/* <h1 className="modal-title fs-5 ms-auto" id="exampleModalLabel">Popcorn Peek</h1> */}
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="m-auto py-1">
          <img src={movie} style={{width:'100%'}}></img>
        </div>
        <div className="modal-footer">
          <div className="modal-dialog modal-dialog-scrollable">
            <h1 className='text-center'>Popcorn Peek</h1>
            <h2>Project Description:</h2>
            <p>PopcornPeek is a dynamic web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) that caters to the entertainment needs of users by allowing them to explore trending movies, TV shows, and anime. PopcornPeek is more than just a listing of entertainment content. It offers a deeper dive into each show, movie, or anime. Users can view trailers, read comprehensive descriptions, explore similar content, and access useful information such as age ratings, IMDb ratings, status, and more.</p>
            <p>One of the major challenges faced during the development of this project was handling API usage limitations. As movie information changes frequently, it was essential to provide users with the most recent data while dealing with the API's constraints. One solution was to leverage the power of IndexedDB, a low-level API for client-side storage of significant amounts of structured data. A system was implemented to save the received data from the API to IndexedDB. This data is refreshed once a day, ensuring the website provides users with current information without exceeding the API's call limit. This strategy not only maintains data freshness but also improves the application's performance, as a lot of the data can be served directly from the local IndexedDB storage, resulting in quicker load times and a smoother user experience.</p>
            <h2>The Application Features:</h2>
            <ul>
              <li><strong>Authentication:</strong> User accounts and authentication</li>
              <li><strong>Search:</strong> Allows users to search for their desired content by title</li>
              <li><strong>Personal Recommendations:</strong> Personalized recommendations appearing on user's homepage, curated based on the content they've saved</li>
              <li><strong>Save Functionality:</strong> Ability for users to save movies, shows, and anime they're interested in</li>
              <li><strong>Chat Bot:</strong> A Chatbot that can answer any queries about movies, shows, and anime</li>
            </ul>
            <h2>Technologies Used:</h2>
            <ul>
              <li><strong>MongoDB:</strong> A NoSQL database used for efficient data storage and retrieval.</li>
              <li><strong>Express.js:</strong> A back-end web application framework used for building the server-side logic.</li>
              <li><strong>React.js:</strong> A JavaScript library used for building dynamic and responsive user interfaces.</li>
              <li><strong>Node.js:</strong> A JavaScript runtime environment used for running the server-side code.</li>
              <li><strong>Bootstrap & React Bootstrap:</strong> CSS frameworks utilized for creating responsive and appealing design components.</li>
              <li><strong>TMDB API:</strong> Used for fetching detailed and updated information about movies and TV shows.</li>
              <li><strong>IMDB API & OMDB API:</strong> Used for pulling ratings data and other related information about movies and shows.</li>
              <li><strong>Kitsu API:</strong> Used for fetching data related to anime series.</li>
              <li><strong>OpenAI API:</strong> Integrated for powering the chatbot feature, enabling it to provide detailed answers about movies, shows, and anime.</li>
              <li><strong>GNews API:</strong> Used for fetching and displaying the latest news related to movies and shows on the website.</li>
            </ul>

            <h2>Project Requirements:</h2>
            <ul>
              <li>The application must be fully responsive and work seamlessly on both desktop and mobile devices.</li>
              <li>The application must implement user authentication, allowing users to create an account, log in, and maintain a personalized profile.</li>
              <li>The application must provide real-time search results for movies, TV shows, and anime.</li>
              <li>The application must offer personalized content recommendations based on the user's saved preferences.</li>
              <li>The application must allow users to save and manage their favorite movies, shows, and anime in their profiles.</li>
              <li>The application should integrate a chatbot that can answer user questions related to movies, shows, and anime.</li>
              <li>The application must adhere to good coding practices, follow a modular approach, and maintain clean and readable code.</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PopcornPeeksModal