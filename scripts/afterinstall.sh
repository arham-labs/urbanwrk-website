#!/bin/bash
# echo " `date` Starting After Install SH" >> /tmp/out.txt
# if [ "$DEPLOYMENT_GROUP_NAME" == "stage" ]
# then
#     echo "downloading $DEPLOYMENT_GROUP_NAME stage" >> /tmp/nginx.txt
#     aws s3 cp s3://sodamama-application/stage/.env /var/www/html/api/sodamama-backend/ --region eu-west-2
#     cd /var/www/html/stage/api/sodamama-backend
# fi
# if [ "$DEPLOYMENT_GROUP_NAME" == "uat" ]
# then
#     echo "downloading $DEPLOYMENT_GROUP_NAME uat" >> /tmp/nginx.txt
#     aws s3 cp s3://sodamama-application/uat/.env /var/www/html/uat/api/sodamama-backend/ --region eu-west-2
#     cd /var/www/html/uat/api/sodamama-backend
# fi
# if [ "$DEPLOYMENT_GROUP_NAME" == "prod" ]
# then
#     echo "downloading $DEPLOYMENT_GROUP_NAME Prod" >> /tmp/nginx.txt
#     sudo aws s3 cp s3://sodamama-application/prod/.env /var/www/html/api/sodamama-backend/ --region eu-west-2
#     cd /var/www/html/api/sodamama-backend
# fi
# sudo composer install
# sudo composer require --with-all-dependencies league/flysystem-aws-s3-v3 "^1.0"
# sudo php artisan key:generate
# sudo php artisan optimize
# sudo php artisan migrate
# php artisan l5:generate
# sudo service nginx restart


sudo npm i
sudo npm run build
sudo pm2 kill
sudo pm2 start npm --name "urbn" -- start
sudo service nginx restart
echo " `date` Ending After Install SH" >> /tmp/out.txt
