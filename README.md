URL Shortener

A simple and secure URL Shortener built using Node.js, Express.js, and MongoDB.
The application allows authenticated users to create short URLs and access the original URLs through generated short IDs.

🚀 Features

1. User Authentication
User registration and login
Secure authentication using cookies/JWT
2. Authorization
Protected routes accessible only to authenticated users
User-specific URL management
3. URL Shortening
Convert long URLs into short, easy-to-share URLs
4. Short ID Generation
Automatically generates a unique short ID for every URL
5. MongoDB Database
Stores users and shortened URLs
6. Express.js Backend
RESTful routes and middleware-based architecture

    ********* Tech Stack *************
Node.js
Express.js
MongoDB
Mongoose
JWT / Cookies for authentication
Short ID generation for shortened URLs
   ********* Main Concepts *********
Authentication → Login → Authorization → Create Short URL
                                      ↓
                              Generate Short ID
                                      ↓
                                  MongoDB
                                      ↓
                              Redirect to URL
