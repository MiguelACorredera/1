# Face Recognition Attendance System with Engagement Detection

**Tier:** 3-Advanced

Attendance tracking in classrooms is time-consuming and prone to human error.
Presenz automates this process using real-time face recognition, detecting not
only who is present but also whether students are engaged — flagging behaviors
like phone usage and sleeping with snapshot evidence.

This project challenges the developer to combine computer vision, a real-time
web interface, and session-based reporting into a single cohesive system.

## User Stories

* User can start a live camera session that detects and recognizes faces in real time
* User can register student faces into the system before a session begins
* User views a live dashboard showing attendance status for each recognized student
* User can see flagged events (phone usage, sleeping) with timestamps and snapshot images
* User can export attendance records for a session as a CSV file
* Attendance is automatically marked absent when a flagged behavior is detected

## Bonus features

* User can set a minimum attendance threshold and receive an alert when a student falls below it
* User can view session history with per-student engagement scores over time
* User can support multiple classrooms with separate student rosters
* Admin can add or remove students from the system without restarting the server
* System sends an email or SMS notification to flagged students after a session

## Useful links and resources

* [OpenCV Haar Cascade face detection](https://docs.opencv.org/4.x/db/d28/tutorial_cascade_classifier.html)
* [LBPH face recognizer](https://docs.opencv.org/4.x/df/d25/classcv_1_1face_1_1LBPHFaceRecognizer.html)
* [YOLOv8 object detection](https://docs.ultralytics.com/)
* [Flask-SocketIO for real-time communication](https://flask-socketio.readthedocs.io/)
* [Head pose estimation with OpenCV](https://learnopencv.com/head-pose-estimation-using-opencv-and-dlib/)

## Example projects

* [Face Recognition Attendance System with Engagement Detection](https://github.com/nhsync/Face-Recognition-Attendance-System-With-Engagement-Detection)
