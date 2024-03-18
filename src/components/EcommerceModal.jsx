import React from 'react';
// Replace with the actual import path for your placeholder image
// import placeholderImage from '../images/placeholder.png';
import ecomVideo from '../images/Ecommerce-vid.webm'
const EcommerceProjectModal = () => {
  return (
    <div className="modal fade" id="ecommerce" tabIndex="-1" aria-labelledby="ecommerceModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
         
          <video controls preload="auto">
              <source src={ecomVideo} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          <div className="modal-footer">
            <div className="modal-dialog modal-dialog-scrollable">
              <h1 className='text-center'>E-commerce Platform</h1>
              <h2>Project Description:</h2>
              <p>This E-commerce platform is a full-stack project designed to provide a seamless online shopping experience. Developed using Next.js, React, and MongoDB, it features a comprehensive storefront and an admin page. The admin access is secured with a password (0000), allowing administrators to manage products and orders efficiently. Tailored for both vendors and customers, this platform stands out with its intuitive design and robust functionality.</p>
              <p>A significant challenge in this project was integrating the admin functionalities with the store. The goal was to enable subscribed users to post products. However, due to complexities, a password-protected admin system was implemented as an interim solution, ensuring secure and efficient management of the store's inventory and orders.</p>
              <h2>The Application Features:</h2>
              <ul>
                <li><strong>Admin Access:</strong> Secure admin page for product and order management, accessible through a password.</li>
                <li><strong>User-Friendly Storefront:</strong> A responsive and intuitive shopping interface powered by Next.js and Tailwind UI.</li>
                <li><strong>Product Management:</strong> Seamless addition, modification, and removal of products by administrators.</li>
                <li><strong>Payment Integration:</strong> Integrated Stripe for secure and reliable payment processing.</li>
                <li><strong>User Authentication:</strong> Robust user authentication system managed by NextAuth.</li>
                <li><strong>Responsive Design:</strong> Tailored to provide an excellent user experience on both desktop and mobile devices.</li>
              </ul>
              <h2>Technologies Used:</h2>
              <ul>
                <li><strong>Next.js:</strong> The React framework for production-grade applications.</li>
                <li><strong>React:</strong> For building a dynamic and interactive user interface.</li>
                <li><strong>MongoDB:</strong> A NoSQL database for efficient data storage and retrieval.</li>
                <li><strong>Tailwind UI:</strong> A utility-first CSS framework for rapid UI development.</li>
                <li><strong>Stripe:</strong> For secure online payment processing.</li>
                <li><strong>NextAuth:</strong> For authentication and authorization.</li>
                <li><strong>Node.js:</strong> Server-side JavaScript runtime environment.</li>
              </ul>
              <h2>Project Requirements:</h2>
              <ul>
                <li>The platform must be fully responsive, ensuring a seamless shopping experience across various devices.</li>
                <li>Admin access should be secure and restricted, with password protection.</li>
                <li>Efficient management of product listings and orders through the admin interface.</li>
                <li>Implementation of secure payment processing with Stripe.</li>
                <li>User authentication system to manage customer accounts and preferences.</li>
                <li>The application must adhere to modern web development best practices, with a focus on performance and scalability.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceProjectModal;
