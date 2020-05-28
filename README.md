# Example for Essential Accessibility

This project is my test response for the Full Stack Developer role.

I took some liberty in making some choices that might make it easier to demonstrate certain concepts i.e. I put the quote and form in separate columns to show responsivity.

I also enjoyed looking into some accessibility concepts like the screen reader text and took the liberty of adding aria-labels where I thought it would show the purpose of an html element. I learned that SVG content is scalable without any reduction in visual quality, which is helpful for people with less than 20/20 vision. I experimented with some techniques that I learned about to make SVG content as accessible as possible (i.e. providing a title, using an anchor tag to make it focusable, giving the anchor a role)

To run, complete the steps below. 

------------------------------
Prerequisites:
------------------------------

You must have git, node and npm installed to load this project.

------------------------------
Additional Notes:
------------------------------

I used HTML5, node version v8.11.3 and npm version 5.6.0 for development. The version of angular used was 1.6.4. Unfortunately, I didn't have the time over the last couple of days to ramp in a new version of angular, and I have worked in < 2 Angular a lot.

------------------------------
Installation steps
------------------------------
------------------------------
1) Check out the source code
------------------------------

In a unix terminal window:

i) Run the following command, to check out the project to a root project directory:

git clone https://github.com/rakkatak/essential-test.git

ii) Note the directory where the essential-test project has been checked out to. This will be referred to as **essential-test-home** for the remaining steps.

------------------------------
2) Run the node server
------------------------------

The **essential-test-home**/node_server directory node_server contains the contents of the node server. 

To test, in the same unix terminal window:

i) Navigate to **essential-test-home**/node_server

ii) Execute: npm install

iii) Execute: node index.js

Note: Please keep this terminal window open for the send button to work 

------------------------------
3) Load the application
------------------------------

In your file explorer:

i) Navigate to **essential-test-home**

ii) Double click index.html to open in Chrome

Test and enjoy :D
