# How to Add a Team Member

To add a team member to your project, follow these steps:

1. **Add the Team Member's Image to the static/Img Folder:**
   Place the team member's image in the `static/Img` folder.

   
2. **Create a Markdown File for the Team Member's Details:**
   Create a Markdown file (e.g., TeamMemberDetails.md) inside the `src/pages/teamInfo` folder for the team member's details.


3. **Open the `TeamMember.js` File:**
   Open the `TeamMember.js` file located in the same folder.


4. **Add a New Object to the `members` Array:**
   Add a new object to the `members` array in `TeamMember.js` with the following fields:

   {
     name: 'Team Member Name',
     role: 'Team Member Role',
     imageUrl: 'Img/TeamMemberImage.jpg',
     twitterUrl: 'URL to Team Member Twitter profile (optional)',
     linkedinUrl: 'URL to Team Member LinkedIn profile (optional)',
     details: 'teamInfo/TeamMemberDetails.md'
   },


5. **Save All Changes:**
Save all changes to the files.

6. **Verify the Addition:**
After completing these steps, the new team member should be added to the team list on the website with the specified details and image.

