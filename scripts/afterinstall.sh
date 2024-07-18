#!/bin/bash
echo " `date` Starting After Install SH" >> /tmp/out.txt
sudo aws s3 cp s3://urbanwrk-config/.env /var/www/html/urbanwrk-website/ --region ap-south-1
cd /var/www/html/urbanwrk-website/
sudo npm i
sudo npm run build
sudo pm2 kill
sudo pm2 start npm --name "urbn" -- start
sudo service nginx restart
echo " `date` Ending After Install SH" >> /tmp/out.txt
