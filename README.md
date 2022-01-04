# ktpumd.github.io

Website for Kappa Theta Pi at the University of Maryland

**DEV PRACTICES**:

- When making a commit, please write the message in the following format: '[SemYear] Message'. For example, '[Fall21] Update Rush Events'
- Please use the "dev" branch for development and only merge with the "master" branch after receiving approval from the Director of Technology!



**INSTRUCTIONS TO UPDATE WEBSITE BEFORE RUSH**:


- Go to the "get_involved_students.html" file
- Around line 135, there are sections of code labelled "CURRENT RUSH DESCRIPTION", "RUSH IS OVER DESCRIPTION", and "RUSH SCHEDULE TABLE"
- Make sure "RUSH IS OVER DESCRIPTION" is commented out and the other sections are uncommented
- There is a hyperlink to our interest form, make sure it is updated to the most recent interest form and link
- Update the Rush Schedule Table with the updated semester's rush schedule (follow the existing table set up and just update event names, times, and locations)
- Update the semester of rush in the header (should be around line 133)



**INSTRUCTIONS TO UPDATE AFTER RUSH**:


- Go to the "get_involved_students.html" file
- Around line 135, there are sections of code labelled "CURRENT RUSH DESCRIPTION", "RUSH IS OVER DESCRIPTION", and "RUSH SCHEDULE TABLE"
- Uncomment "RUSH IS OVER DESCRIPTION" section and comment out the other sections



**INSTRUCTIONS TO UPDATE MEMBERSHIP AT THE END OF EVERY SEMESTER**:


- Update the brother pictures in the directory "assets/img/brothers"
    - First, add headshots for each of member of the new pledge class
    - All of these pictures should MUST the naming convention "First_Last.jpg" (for example, the headshot of the new brother John Smith should be named "John_Smith.jpg")
    - Also, remove any headshots of any brothers who have graduated ot permanently left KTP
- Modify the list of members in "assets/js/membersList.js"
    - There are 3 sections for E-Board, Brothers, and Alumni
    - Add the new brothers to the brothers list section (order does not matter)
    - Adjust the E-Board and move new E-Board members to their positions and old E-Board members to the brothers or alumni section (a person should not appear in both the E-Board and Brothers section)
    - Finally, move any graduating brothers to the Alumni section and add them to the appropriate pledge class (you may have to add a new section for a pledge class, make sure the pledge classses are in the correct order)
    - Most importantly, PLEASE STICK TO THE FORMAT ESTABLISHED
- Double check everything and then commit and push

