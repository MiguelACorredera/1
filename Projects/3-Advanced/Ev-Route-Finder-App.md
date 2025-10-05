# EV Route Finder

**Tier:** 3 - Advanced

A full-stack web application that helps electric vehicle (EV) owners plan efficient travel routes with nearby charging stations along the way.

### What is the purpose of this application?
The purpose of this application is to simplify long-distance EV travel by suggesting optimized routes and displaying compatible charging stations in real time. It allows users to log in, manage profiles, and save their preferred trips for future use.

### Are there any resources needed in order to complete the project?
Yes. You will need:
- Access to a **mapping API** (Google Maps, Mapbox, or Leaflet)
- A **charging station API** such as OpenChargeMap
- Backend services for authentication and route management (Django REST Framework)
- A database like PostgreSQL

---

## User Stories

- [ ] User can register and log in securely using email and password  
- [ ] User can view an input form for start and destination locations  
- [ ] User can see the calculated route between start and destination  
- [ ] User can view EV charging stations displayed along the route  
- [ ] User can click on a station to view details such as type, speed, and availability  
- [ ] User can save a route to their personal account for later use  
- [ ] User can view their previously saved routes  
- [ ] User can update their profile (vehicle info)  

---

## Bonus Features

- [ ] User can authenticate using Google or Mobile OTP (social login)  
- [ ] User can filter charging stations by speed, cost, or connector type  
- [ ] User can toggle between light and dark modes  
- [ ] User can view real-time station availability using live APIs  
- [ ] User can share or export saved routes  
- [ ] User can see range and charge predictions based on vehicle data  
- [ ] User can join a discussion/chat section powered by Django Channels  

---

## Useful Links and Resources

- [OpenChargeMap API](https://openchargemap.org/site)
- [Mapbox Directions API](https://docs.mapbox.com/api/navigation/directions/)
- [Google Maps Platform](https://developers.google.com/maps)
- [Django REST Framework](https://www.django-rest-framework.org/)
- [React Router Documentation](https://reactrouter.com/)
- [JWT Authentication in Django](https://django-rest-framework-simplejwt.readthedocs.io/en/latest/)

---

## Example Projects

- [EV Trip Planner (React + Django)](https://github.com/alanjds/evtripplanner)
- [Mapbox Navigation JS Example](https://github.com/mapbox/mapbox-navigation-js)
- [A Better Route Planner (ABRP)](https://abetterrouteplanner.com/)

---

## Live Demo

🔗 [View the live demo here](https://ev-route-finder.vercel.app/)
