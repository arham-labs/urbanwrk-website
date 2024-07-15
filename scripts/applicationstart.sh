#!/bin/bash
echo " `date` Starting Application Install SH" >> /tmp/out.txt
if [ "$DEPLOYMENT_GROUP_NAME" == "stage" ]
then
    echo "starting Cloudwatch agent for $DEPLOYMENT_GROUP_NAME" >> /tmp/nginx.txt
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -m ec2 -a stop
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:AmazonCloudWatch-stage-sodamama-admin-api-web -s
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -m ec2 -a start    
fi
if [ "$DEPLOYMENT_GROUP_NAME" == "uat" ]
then
    echo "starting Cloudwatch agent for $DEPLOYMENT_GROUP_NAME" >> /tmp/nginx.txt
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -m ec2 -a stop
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:AmazonCloudWatch-uat-sodamama-admin-api-web -s
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -m ec2 -a start    
fi
if [ "$DEPLOYMENT_GROUP_NAME" == "prod" ]
then
    echo "starting Cloudwatch agent for  $DEPLOYMENT_GROUP_NAME" >> /tmp/nginx.txt
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -m ec2 -a stop
    sudo /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -a fetch-config -m ec2 -s -c ssm:AmazonCloudWatch-prod-sodamama-admin-api-web -s
    /opt/aws/amazon-cloudwatch-agent/bin/amazon-cloudwatch-agent-ctl -m ec2 -a start
fi
echo " `date` Ending Application Install SH" >> /tmp/out.txt
