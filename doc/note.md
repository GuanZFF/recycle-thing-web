### 记录了相关的重要信息

#### git重新刷新.gitignore文件
- git rm -r --cached .
- git add .
- git commit -m "update .gitignore"


#### nginx部分相关配置

```text
server {
        listen       80 default_server;
        listen       [::]:80 default_server;
        server_name  _;
        root         /usr/share/nginx/html;

	    index index.html

        # Load configuration files for the default server block.
        include /etc/nginx/default.d/*.conf;

        location / {
		try_files $uri $uri/ @router;
		index index.html;
        }

	    location @router {
                rewrite ^.*$ /index.html last;
        }

        error_page 404 /404.html;
            location = /40x.html {
        }

        error_page 500 502 503 504 /50x.html;
            location = /50x.html {
        }
    }
```