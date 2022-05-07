# AUTOMATED ATTENDANCE SYSTEM

#### TEAM : INCOGNITO
#### TEAM MEMBERS : 
#### 20PC16 - HARISH NARAYAN B
#### 20PC22 - NAVIN KRISHNA T
#### 20PC37 - VETRIVEL M D

NOTE : Two repositories are used for the project. One for the frontend and another for the backend. Their links are given below.<br>
FRONTEND : https://github.com/Vetrivel-Hari/Automatic-Attendance-System-Frontend-.git <br>
BACKEND : https://github.com/Vetrivel-Hari/Automatic-Attendance-System-Backend-.git <br>

## SOLUTION PROPOSED
The objective of the solution is to reduce proxying, reduce time and effort taken to record the attendance.
The above mentioned objective is achieved by :
<ul>
  <li>Verifying and authenticating the student identity</li>
  <li>Veryfing the current location of the student</li>
</ul>
<b> Verification and authentication of student identity </b> is achieved using the <b> facial recognition </b> of the student along with
their roll number. <br>
<b> Student's current location </b> is verified by collecting their current <b> latitude </b> and <b> longitude </b> coordinates. <br>

## FRONTEND

### WORKING
This repo contains the react application that handles the working of frontend in the automated attendance system. Users need to enter
their roll numbers and capture a picture. These details along with location and timestamp is sent to the backend. The details of the
location is fetched using the geolocation api available in react.

### APIs USED
<ul>
  <li>React - Geolocation</li>
  <li>React - Webcam</li>
</ul>

### TOOLS USED
<ul>
  <li>ReactJS</li>
</ul>

### DEPLOYMENT - VERCEL
Hosted Link : https://aas-vetrivel-hari.vercel.app/ <br>
NOTE : Only few roll numbers along with their respective images are stored in the databse for development purposes. For testing use the roll numbers 20PC16, 20PC22 and 20PC37, but still it requires facial recognition for attendance.

### FUTURE UPDATES
Dedicated web app for faculty, so that any classroom or attendance changes can be recorded manually.
