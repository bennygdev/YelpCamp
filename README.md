# Yelpcamp

This is a final full-stack web project for Web Developer Bootcamp 2022 by Colt Steele on Udemy. This project uses NodeJS, ExpressJS, Mongoose, MongoDB and JavaScript. Along with other tools like Mapbox to map out the location, along with some security tools to protect the site from mongo injection and cross-site-scripting (XSS) such as Passport, JOI validation, Express Mongo Sanitize, Helmet and more. This project also uses a image hosting service otherwise known as cloudinary, a cloud based tool that can used to host and display images since MongoDB's BSON memory storage is too small to host images. Please take note that the security is still on a very baseline level but ultimately it should stop really common exploits and vulnerabilities from happening. I went ahead and also added in a search feature. Pagination is on my list of features to add, but that leaves it to another day.

Demo: [WIP](https://benny-yelpcamp.onrender.com/)https://benny-yelpcamp.onrender.com/

<br><br>
If you would like to host this on your machine, you will have to install all packages. You could either get a locally hosted or a cloud-hosted database at mongo atlas which hosts MongoDB servers for free. You can also seed your database with sample campgrounds if you would like to, thorugh ``node seeds/index.js``. You will also need to make a cloudinary account and include a .env file which will host all your personal information there. You could probably use this project as a baseline to add more features that are not added to this yet.
