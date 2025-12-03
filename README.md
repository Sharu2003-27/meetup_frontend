# Meetup App

A full-stack event management application where users can browse events, search by specific tags or titles, filter by event type, and view detailed information including speakers and venue details. Built with a React frontend, Express/Node backend, and MongoDB database.

---

## Demo Link

[Live Demo](https://meetup-frontend-xi.vercel.app/)  

---

## Quick Start

```
git clone https://github.com/Sharu2003-27/meetup_frontend.git
cd <meetup_frontend>
npm install
npm run dev 
```

## Technologies
- React JS
- CSS
- React Router
- Node.js
- Express
- MongoDB
- CORS

## Demo Video
Watch a walkthrough (5 minutes) of all major features of this app:
[Loom Video Link]()

## Features

### Event Listings
- Displays key details: Event Title, Date, and Type (Online/Offline)
- Visual thumbnails for every event
- responsive and user-friendly card layout

### Search and Filtering
- Filter: Dropdown to filter events by Type (Online, Offline, Both)
- Search: Real-time search functionality by Event Title and Tags

### Event Details
- Comprehensive Info: Topic, description, session timings, and detailed pricing
- Speakers: Section displaying speaker names, designations, and images
- Venue: Address details or link for online events
- Tags: Categorization tags (e.g., Marketing, Digital, Tech) displayed on the page

---

## API Reference

### **GET /events**<br>	 
List all events<br>	 
Sample Response:<br>
```[{ _id, title, date, eventType, thumbnail, ...}, ...]```

### **GET /events/:eventId**<br>	 	
Get details for a specific event<br>		
Sample Response:<br>
```{ _id, title, description, speakers, pricing, venue, ... }```

### **POST /events**<br> 	
Create a new event<br>	
Sample Response:<br>
```{ _id, title, message, ... }```

### **POST /events/:eventId/speakers**<br>  	
Add a speaker to an existing event<br> 	 
Sample Response:<br> 
```{ name, message, event, designation, imageUrl }```

## Contact
For bugs or feature requests, please reach out to sharayu.borude27@gmai.com