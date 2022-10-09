# Cleaning Company Website using Next JS as a Static Site Generator

This is the English version of the brochure website for the cleaning company _Profireiniger Estera GmbH_ in Vienna. It uses Next.js as a static site generator to generate the website content from Markdown files.
**At the time of writing, this project is still a work-in-progress.**


## MVP
I designed the German version of the website as a flat HTML/CSS site using vanilla Bootstrap and some JS at [profireiniger.at](https://profireiniger.at)

In this project, I use the existing design as the basis for the templates. The content is stored in a folder as Markdown files. The application reads the MD files and - using gray-matter - converts them into the necessary HTML elements. These are passed to the components with the respective templates. The application then renders the teasers for the content on the index page and renders the detail pages.

In the original MVP, there will be two page templates:
- **Index** - This page has a menubar and a carousel silder on the top. It features five more sections:
	1. **Services Overview** - These are teasers with thumbnail images and a short summary for each service offered by the company. Clicking on them opens the respective detail page.
	2. **Promotion** - This is a differently styled section that advertises the currently prioritized promotion. At the start it will be cleaning services for AirBnB apartments.
	3. **Company Contact Information** - This section provides all the company contact details like office address, email addresses, phone number and a call-to-action (contact the company for a non-binding offer based on individual requirements).
	4. **Embedded Google Map** - This section embeds the physical office address as a Google Map.
	5. **Legal Notice** - This is the obligatory legal notice with the website owner and the responsible contacts as per the requirement of Austrian law.

- **Content Page** - This page describes a service delivered by the company in detail. It features:
	1. A **header image**
	2. A long form **description of the service** with a call-to-action.
	3. A sidebar with a **list of the other services**.

Both pages have a **menubar** with the logo, a dropdown menu with links to all services and a search field, as well as a **footer** with the copyright information and a sitemap for the most relevant sections.

## Editing Content
The content is stored in the _content_ folder as Markdown files. These can be edited by users as they please and are the basis for the content on the services pages.
The services content files have the following structure:
- A header with the title, the summary, the path to the thumbnail image used in the teaser, the URL slug (the filename without the MD file extension), the author, the date and other meta data.
- The main body of the content with titles, paragraphs and lists.

Images are stored in the public folder in **logos** and **photos**.

## Installing, Running and Building the Site

### Installing the Application
You  will need to first install [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/) to install the application. Once you have installed their latest versions, you can install the app by running:
``npm install``

### Running the Site Locally
The site can be previewed by running:
``npm run dev``

This will run the site on `http://localhost:3000`

### Building the Static Site
To build the static site, run:
`npm start`

This will generate the static site in the directory `build`. Upload the files to a server of your choice.

## Tech Stack
This project uses the following tech stack:
- [next.js](https://nextjs.org/)
- [boostrap](https://getbootstrap.com/)
- [gray-matter](https://www.npmjs.com/package/gray-matter)
- [marked](https://www.npmjs.com/package/marked)
- [next-sitemap](https://www.npmjs.com/package/next-sitemap)
- [next-seo](https://www.npmjs.com/package/next-seo)

For the translation and editing of the German-language content currently on [profireiniger.at](https://profireiniger.at) the following tools were used:
- [obsidian.md](https://obsidian.md/) - To edit and format the Markdown content.
- [translate.google.com](https://translate.google.com/) - To translate original text from German to English.
- [grammarly](https://app.grammarly.com/) - For grammar and spelling.
- [unsplash](https://unsplash.com) - For stock photos.

The graphics and logo were cropped, touched up and/or created using:
- [Affinity Photo](https://affinity.serif.com/en-gb/photo/) - Photo editing.
- [Affinity Designer](https://affinity.serif.com/en-gb/designer/) - Logo design.

## Special Thanks
This project is based on the work of [Rajdeep Singh](https://medium.com/@officialrajdeepsingh)
His excellent tutorial for building a static blog can be found at: [Build the static blog with Next.js and Markdown](https://medium.com/nextjs/build-the-static-blog-with-next-js-and-markdown-59576c75fbf2)
Check out his work on React and NextJS.

## Original Concept Sketch
I made this project for the purveyor of cleaning services in Vienna, [Profireiniger Estera GmbH](https://profireiniger.at), as part of the frontend developer course at [Boolean.co.uk](https://boolean.co.uk/)
Please find the original concept sketch below:
![Concept Sketch](/concept/concept-sketch.jpg)
