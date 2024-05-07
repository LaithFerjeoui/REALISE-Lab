# Building website locally
## prerequisites
In order to build the webste locally, make sure to have node version ```v20.12.0``` and npm version ```10.5.0```. Check [this](https://nodejs.org/en/download) documentation to obtain the adequate installation setup for your environment.
## building project locally
Clone this Github repo and open the terminal in the root path of the project. Run the following commands:
```
npm install
npm run build
npm run serve
```
# How to Add a Publication

To add a publication, follow these steps:

1. Open the file `publication.js` under `content`.
2. Add an object like the following example:

```
   {
     title: "The role of library versions in Developer-ChatGPT conversations",
     venue: "MSR 2024 Mining Challenge, 2024",
     authors: "Rachna Raj, Diego Elias Costa",
     pdfPathHref: "https://arxiv.org/pdf/2311.07786.pdf",
     githubLink: "",
     datasetLink: "",
     presentationLink: "",
     year: 2024,
     type: "Conferences",
     project:"dependency-management"
   },
```
The values that `type` can have are `Conferences`, `Journals`, or `Thesis`.
The values that `project` can have are `dependency-management`, `performance-engineering`, `se4ai`, or empty.
A publication entry having a non-empty `project` value will be displayed under both the `/publications` and the `/<project-name>` pages, there's no need to add two entries in two separate places for a given publication.
If a given link does not exist, provide an empty string to its associated attribute. For example, if a given publication does not have a presentation link, the value corresponding to `presentationLink` is `""`
3. In case the publications' resources will be placed directly in the project's file system instead of placing its link (the `pdfPathHref` value for example), make sure to place the given file under `static/publications`
4. Save the `publication.js` file

# How to Add a Team Member

To add a team member to your project, follow these steps:

1. **Add the Team Member's Image to the static/img Folder:**
   Place the team member's image in the `static/img` folder.

   
2. **Create a Markdown File for the Team Member's Details:**
   Create a Markdown file (e.g., `TeamMemberDetails.md`) inside the `src/pages/teamInfo` folder for the team member's details. Please find the MD syntax documentation [here](https://www.markdownguide.org/basic-syntax/). You can cutomize your page as you see fit.


3. **Open the `TeamMember.js` File:**
   Open the `TeamMember.js` file located in the same folder.


4. **Add a New Object to the `members` Array:**
   Add a new object to the `members` array in `TeamMember.js` under `content` with the following fields:

```
   {
     name: 'Team Member Name',
     role: 'Team Member Role',
     imageUrl: 'Img/TeamMemberImage.jpg (can be left empty to display default photo)',
     twitterUrl: 'URL to Team Member Twitter profile',
     linkedinUrl: 'URL to Team Member LinkedIn profile',
     details: 'teamInfo/TeamMemberDetails.md'
   },
```


5. **Save All Changes:**
Save all changes.

6. **Verify the Addition:**
After completing these steps, the new team member should be added to the team list on the website with the specified details and image.

# How to add a partner
1. **(Optional) Add partner logo picture**
Add the logo image under `static/img`. Note that you can put an image link from the internet instead of having the image in the project file system. The image width:height ratio has to be 5:2 to fit in a presentable way. Also, make sure to have white background removed for esthetic purposes.

2. **Add partner details**
In `content/Partners.js`, add an object in the partners array following this example:
```
    {
      name: 'FRQ - Nature et technologies',
      collaboration_topics: 'performance engineering, dependency management, SE4AI',
      imagePath: 'Img/frqnt-logo.png',
      link: 'https://frq.gouv.qc.ca/nature-et-technologies/'
    },
```

3. **Save the changes**

Make sure to save the changes

# How to Add a News Page
1. Write the MD/MDX file of the news. The following is a basic example :

---
slug: url-slug
title: POST TITLE
tags: [example-tag-1, example-tag-2]
---
```
HERE GOES THE SUMMARY OF THE POST THAT IS SUPPOSED TO SHOW AS THE PREVIEW

USE A `<!--` `truncate` `-->` COMMENT TO LIMIT BLOG POST SIZE IN THE LIST VIEW

<!--truncate-->

HERE GOES THE CONTENT OF THE POST
```

2. Place the file under `blog`

# How to Add a News entry to the main page

1. Make sure to have added the post as described earlier

2. Under `content/HomeNews.js`, in the given array, add an entry similar to this one :

```
    {
        title: 'This is an example news preview',
        description: 'You should really read this post',
        href:"<href>"    
    },
```

# How to Add an event

The events page is written as an MD file under `src/pages/events.md` so it can be structure using the according syntax (no JS arrays usage).

# How to add a web page

Under `src/pages`, add the correspondant MD of JSX file with the adequate content and a web page with the path having the same name as the created file will be added to the website once changes are oushed to a production setting.