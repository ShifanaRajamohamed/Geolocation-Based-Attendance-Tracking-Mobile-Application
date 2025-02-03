# Geolocation-Based-Attendance-Tracking-Mobile-Application
Automated employee attendance tracking system using Bluetooth Low Energy (BLE) and Geolocation

This mobile application aims automates employee attendance tracking using a combination of Bluetooth Low Energy (BLE) technology and geolocation-based tracking. The application aims to securely log check-ins and check-outs through Bluetooth beacons placed in office premises and manual geolocation-based entries for offsite work. This system ensures automated ,accuracy and tamper-proof records, using rolling codes and token-based authentication.

TECHNICAL APPROACH:
Users can log in through our mobile app and receive a unique token linked to their mobile device and account. A Bluetooth beacon in office sends packets with rolling codes, and the mobile app continuously listens
for these. Upon receiving a packet, the app sends out a response packet hashed with the token, rolling code, and timestamp.The beacon then receives the response packet to record a check-in. This process repeats
at constant intervals.If noresponse is received, a check-out is recorded.
Since our system uses rolling codes, the response cannot be recorded and replicated. Only the server and mobile app know the token, ensuring the response cannot be duplicated.
If the user logs in on a different mobile device, the previous token is deactivated.For manual entry, the user can validate their offsite location using GPS. All check-ins and check-outs are stored in a single database, accessible through an admin panel.

FEASIBILITY AND VIABILITY:
Cost-effective and widely supported by smartphones.
very easy to adapt
SQLite can handle real-time syncing and secure data storage .

Challenges:
Bluetooth Interference
GPS Accuracy

Solutions:
Proper beacon placement helps to mitigate Bluetooth Interference.

IMPACT AND BENEFITS:
Automated Attendance: Eliminates manual entry for in-office check-ins, boosting efficiency and minimizing errors.
Tamper-Proof Records: Rolling codes, token-based authentication, and encryption ensure privacy and protection from unauthorized access.

Real-Time Data: Immediate synchronization ensures up-to-date and reliable attendance records.
