#!/bin/sh

LOG_FILE="/var/log/gitbook_deploy.log"

date >> "$LOG_FILE"
echo "Start deployment" >>"$LOG_FILE"
cd /home/FE-interview/
echo "pulling source code..." >> "$LOG_FILE"
git pull
echo "Finished." >>"$LOG_FILE"
echo >> $LOG_FILE