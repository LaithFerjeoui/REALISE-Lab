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

1. Open the file `publication.js` under `Add Publication Or Team Member`.
2. Add an object like the following example:

```
   {
     id: 1,
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
A publication entry having a non-empty `project` value will be displayed under both the `/publications` and the `/<project-name>` pages, there's no need to add two entries in two separate places for a given publication
3. In case the publications' resources will be placed directly in the project's file system instead of placing its link (the `pdfPathHref` value for example), make sure to place the given file under `static/publications`
4. Save the `publication.js` file and there you have it

# How to Add a Team Member

To add a team member to your project, follow these steps:

1. **Add the Team Member's Image to the static/Img Folder:**
   Place the team member's image in the `static/Img` folder.

   
2. **Create a Markdown File for the Team Member's Details:**
   Create a Markdown file (e.g., TeamMemberDetails.md) inside the `src/pages/teamInfo` folder for the team member's details.


3. **Open the `TeamMember.js` File:**
   Open the `TeamMember.js` file located in the same folder.


4. **Add a New Object to the `members` Array:**
   Add a new object to the `members` array in `TeamMember.js` under `Add Publication Or Team Member` with the following fields:

```
   {
     name: 'Team Member Name',
     role: 'Team Member Role',
     imageUrl: 'Img/TeamMemberImage.jpg',
     twitterUrl: 'URL to Team Member Twitter profile (optional)',
     linkedinUrl: 'URL to Team Member LinkedIn profile (optional)',
     details: 'teamInfo/TeamMemberDetails.md'
   },
```


5. **Save All Changes:**
Save all changes.

6. **Verify the Addition:**
After completing these steps, the new team member should be added to the team list on the website with the specified details and image.

