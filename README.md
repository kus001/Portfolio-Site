# [Portfolio Website](https://kush-suthar.vercel.app/)

This is my personal portfolio website designed to showcase my hardware engineering, PCB design, and software projects. Built with React, Tailwind CSS, and Vite, it uses a clean windowed layout where you click through the navbar to switch between 
sections like my projects, about me, experience, and contact info.

The reason I chose to make a personal website for Hackclub Horizons was that I had a lot of projects made, but no real way to show them. That was the reason why I decided to make a portfolio website

For context, I had very little experience in web dev, which was mainly done during my grade 10 CS course (mainly p5.js, and some basic HTML/CSS/JS). So, to understand and learn how these frameworks worked, I followed a tutorial. The particular tutorial I followed 
was from [PedroTech](https://www.youtube.com/watch?v=cIYdiRDFWQw). 

This tutorial was especially helpful because it taught me how a lot of websites are made and taught me skills that I could use for my other projects. One of the projects these skills were used in was our school's robotics club's website, 
which had Design/Electrical/Software lessons that were created by the execs to be used as teaching material for everyone. 

## Motivation

Before this project, I had built several robotics and PCB hardware projects, but I didn't have a centralized place to showcase them. I wanted to build a portfolio for **Hack Club Horizons** to share my work with the community. 

Coming into this, my web development background was limited to basic HTML/CSS/JS and p5.js from my 10th-grade CS class. To learn modern web development frameworks, I followed a tutorial by [PedroTech](https://www.youtube.com/watch?v=cIYdiRDFWQw) 
to grasp component structure, state management, and Tailwind styling. The skills I learned while building this site directly helped me contribute to my school robotics club's educational website!

## 📸 Screenshots

| Home Page | About Me |
| :---: | :---: |
| <img width="2150" alt="Home page" src="https://github.com/user-attachments/assets/5739ed67-45b0-482a-a6a8-b247eae4f002" /> | <img width="2180" alt="About page" src="https://github.com/user-attachments/assets/c0ab6205-6cf1-4178-babc-4a4ae1406af9" /> |

| Projects Page | Experience Page |
| :---: | :---: |
| <img width="2137" alt="Projects page" src="https://github.com/user-attachments/assets/89d732cd-3e78-4951-b25a-3231a614191b" /> | <img width="2143" alt="Experience page" src="https://github.com/user-attachments/assets/90a2b4cd-d06d-4039-b1e9-83c8272b8802" /> |

| Contact Page |
| :---: |
| <img width="2134" alt="Contact page" src="https://github.com/user-attachments/assets/3481e8d9-64aa-47e1-af38-02d845888716" /> |

## How it works

My website was initially made as a React single-page website, where you had to scroll down to each element. 

Instead of this, I used React's `useState()` to give it a windowed layout where the navbar brought you to different pages. In `app.jsx`, I initialized the different sections using `activeSection`, kind of like the routes on a map.

In navbar.jsx, I passed `setActiveSection` so the navigation buttons could update the route when they are clicked. Additionally, `navbar.jsx` manages its own isolated states `isScrolled` and `isMobileMenuOpen` using `useEffect`
to handle background glassmorphism changes and the navbar on mobile!

And lastly, all the styling is present in `index.css`.

## Tech Stack

Front end:
- React.js
- Vite
- Tailwind CSS
- Javascript

Icons:
- React Icons

Tools: 
- npm
- git

## Deployment

Live site: [kush-suthar.vercel.app](https://kush-suthar.vercel.app/)

## AI

Some AI was used to assist with page navigation and certain styling to make the website run and look smoother.
