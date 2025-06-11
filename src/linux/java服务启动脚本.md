### JAVA服务启动脚本

```bash
#!/bin/sh

project_name=ruoyi-admin
# 启动 cmp bizsvc 服务


start(){
        jar_home=`pwd`
	nohup java -server -Xms2g -Xmx2g -jar $jar_home/$project_name.jar  > logs/$project_name.log --spring.config.location=conf/ 2>&1 &
	#sleep 100
	sleep 1
	javaps=`ps -ef | grep java | grep $jar_home`

	if [ -n "$javaps" ]; then
		psid=`echo $javaps | awk '{print $2}'`
	else
		psid=0
	fi
	echo "PID：$psid"
        echo "jar home: $jar_home"
	echo "$project_name already start"
}
# 停止 cmp bizsvc 服务
stop(){
        jar_home=`pwd`
        javaps=`ps -ef | grep java | grep $jar_home`

	 if [ -n "$javaps" ]; then
	  psid=`echo $javaps | awk '{print $2}'`
		echo "PID：$psid"
		kill $psid

                # 探测系统是否已退出
                while true; do
                  if ! kill -0 $psid 2>/dev/null; then
                    break
                  else
                    echo "等待进程 $psid 退出..."
                    sleep 1 # 每隔一秒检查一次
                  fi
                done
                echo "进程 $psid 已经停止"
	 


	 else
	  echo "jar home: $jar_home，服务没有启动！"
	 fi
        echo "jar home: $jar_home"
 echo "$project_name already stop"
}

case "$1" in
   'start')
     start
      ;;
   'stop')
     stop
     ;;
   'restart')
     stop
     start
     ;;
  *)
	 stop
	 start
     echo "stop & start"
	 ;;
esac
exit 0




```

