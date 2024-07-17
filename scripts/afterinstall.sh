#!/bin/bash
sudo npm i
sudo npm run build
sudo pm2 kill
sudo pm2 start npm --name "urbn" -- start
sudo service nginx restart
echo " `date` Ending After Install SH" >> /tmp/out.txt
