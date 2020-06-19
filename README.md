# Gambit challenge

## Explanation
 
 The back-end made with Node.js watches changes made to the text file, parses it and sends as a json string to the front-end via websocket. 
Simple front-end made with React shows data from the server in real time, in a html-table.


## To run

## First 

Navigate to "challenge"-folder on commandline and run
`npm install`

## then 

`npm run dev` or `node main.js`

then go to *http://localhost/3003*


### note

You can see the table in the front-end change by changing something in 'readings.txt' and saving the file.
**important** The date must be modified or the front-end might not get the changes.


