import React from 'react';
import resume from '../../assets/images/Robyn-Graham-Resume-9-24-2022.pdf'

function Resume() {
    return(
        <section>
          <div className='div-resume col-lg-6 container'>
          <h2>My Resume</h2>
          <div className='download'>
          <a href={resume} target="_blank" download rel="noreferrer"> <button className='btn btn-success  float-left'>Download Now</button></a>

          </div>
<p>
Robyn Graham  robyn@sitereworks.com  | Richmond, California<br />
Website Consulting: 	 https://www.sitereworks.com/ 
LinkedIn: 	        	 https://www.linkedin.com/in/robyn-graham-b067aa97/ 
Portfolio:	        	 https://robyng.github.io/my-portfolio-with-react/ 
Github Repo:             	 https://github.com/robyng 
Summary 
Professional Website Consultant with over 7 years experience of website development with a focus on affordable, yet effective, digital presence for small businesses and non profits. Recently completed Full Stack Coding Certificate from UC Berkeley, deepening knowledge in MongoDB, Express.js, React.js, Node.js and agile methodologies. Experience as a leader for team projects, setting goals and keeping to timelines with check-ins. Background in Journalism and a degree in Broadcast Communications & Digital Media from San Francisco State University. Currently building React projects with TypeScript and Styled Components with alumni.
Technical Skills
Git, Linux, File Transfer Protocol clients (FTP), Node.js, MySQL,  JavaScript ES6, HTML, CSS3, JSX, TypeScript, Bulma, Bootstrap, Semantic UI, Material UI, Styled Components, Photoshop, Adobe Illustrator, Wordpress, Drupal, DNS record pointing, cPanel management, photo optimizing, website transfers, Google Analytics, Search Engine Optimization (SEO) best practices and debugging code, MERN stack (MongoDB, Express.js, React.js and Node.js), Bitnami on Amazon Web Services (AWS) Lightsail, PHP to customize Wordpress themes and plugins.
Projects 
The Help Desk For Property Managers: https://rg-the-help-desk.herokuapp.com/ 
Repository: https://github.com/robyng/the-help-desk 
A ticketing service for property owners, managers and their tenants.
React.js app with virtual database using MongoDB
Login, logout authentication with JSON Web Tokens with logic for admins
Protect users info with bcrypt npm to hash passwords
Forms with photo uploads using Amazon Web Services
Ticket state that update ticket status with Bootstrap framework  styling
Holiday History Map https://robyng.github.io/Holiday-History-Map/
Repo: https://github.com/robyng/Holiday-History-Map 
Making use of Youtube API and a world holiday API to generate content to learn about different country’s holidays.
Use localStorage to save user’s recent country picks
Custom CSS styling on top of Bulma framework
Custom JavaScript to fetch APIs on button clicks
URL Regex Explained With Examples: https://www.sitereworks.com/url-regex-explained-with-examples/
https://gist.github.com/robyng/e4ff8614395719e0a3547be58e5a9c43 
Teaching and writing sample.
Published on Gist this is a good sample of how I write and explain complex problems.
Use of photos to explain complex Regular Expression
Experience
SiteReworks Website Consulting and Design:  Half Moon Bay & Richmond, CA 2015 - present
Consulted 100+ clients with projects ranging from implementing custom design changes to full website redesigns.
Known for saving clients time and money by switching to affordable hosting and optimizing digital storage 
Client Highlight #1: Burlingame SFO Chamber of Commerce - BurlingameChamber.org: Burlingame, CA 2015 - present
Implement software to index both their site and business directory for an inclusive search (AddSearch)
Client Highlight #2 BeachBreakEntertainment.com, Montara, CA 2020 - present
Build out brand on Squarespace fit it’s face paced environment (Outdoor movie theater during COVID)
Implement registration system for free events and design output for ticket checker
Client Highlight #3: Fog Fest Organizing Group - PacificCoastFogFest.com: Pacifica, CA 2018 - present
Act as coordinator with graphic designer, social media team and legal advisor
Present monthly reports to board of 10 including Google Analytics traffic changes, cost analysis on feature options, earnings from Parade registration with Stripe and security audits.
Use Indesign to make corrections to Festival Map
Client Highlight #4 CoastsideBuzz.com: Half Moon Bay, CA 2015 - present
This hyper-local feature news site has grown considerably since 2015 
Managed the website transfer when we changed hosts. 
Use Google Tag Manager to track plays on podcasts
Storage audit to remain in affordable hosting plan, offload 40 GB of assets
Plugin performance monitoring, working directly with plugin developers on bug reporting and troubleshooting
Work with ADA specialist to bring site up to Website Content Accessibility Guidelines (WCAG)
Create and maintain a 50+ page internal technical wiki with How-To guides
Pandora: Music Metadata Validator position: Oakland, CA Early 2017
use persistent identifiers to determine if songs are duplicate in database
 research labels, artists, and producers for to catch any errors
Education
UC Berkeley Extension 2021-2022
Full-Stack Web Development Certificate
Use of Javascript languages and frameworks for building Applications, frontend and backend.
San Francisco State University 
Bachelor of Arts in Broadcast and Electronic Communication Arts with focus in Digital Media, 2014
San Francisco Opera Media Department Internship, 2014
SonicSF: San Francisco Serial Storytelling Podcast Internship as Digital Media Producer, 2014
Skyline College 
Associate of Arts in English, 2011
College Newspaper: The Skyline View
Multimedia Editor: Created podcasts, videos, soundslides, managed blogs and website 
Experience with Audacity, GarageBand, FinalCut Pro and College Publisher
Feature Section Editor: Reported and planned content, designed newspaper using InDesign
</p>

          </div>
          
        </section>
    )
}

export default Resume;