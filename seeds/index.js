const mongoose = require('mongoose');
const cities = require('./cities');
const {places, descriptors  } = require('./seedHelpers')
const Campground = require('../models/campground');

mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp')

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log('Database connected');
});

const sample = array => array[Math.floor(Math.random() * array.length)]

const seedDB =  async() => {
    await Campground.deleteMany({});
    for(let i = 0; i < 300; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const camp = new Campground({
          // your author/user id
            author: "648e9925ab7f326437f76958",
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quis, aliquid quia odio praesentium ut quos deleniti. Quae, expedita, eaque vitae, vel blanditiis ab exercitationem quasi quam sapiente veniam quod!',
            price,
            geometry: {
              type: "Point", 
              coordinates: [
                cities[random1000].longitude,
                cities[random1000].latitude,
              ]
            },
            images: [
                {
                  url: 'https://res.cloudinary.com/dabz20iht/image/upload/v1687089076/YelpCamp/f6z0mxa0zsvh5fxvpwud.jpg',
                  filename: 'YelpCamp/f6z0mxa0zsvh5fxvpwud'
                },
                {
                  url: 'https://res.cloudinary.com/dabz20iht/image/upload/v1687089076/YelpCamp/iqbxcldjs5kfn7e87hqj.jpg',
                  filename: 'YelpCamp/iqbxcldjs5kfn7e87hqj'
                }
              ]
              
        })
        await camp.save();
    }
}

seedDB().then(() => {
    mongoose.connection.close();
})