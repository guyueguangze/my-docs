## 项目地址 
`git@github.com:guyueguangze/my-docs.git`



## 拉取项目
` git clone git@github.com:guyueguangze/my-docs.git`


## 安装node_modules
`npm i`


## 运行项目
`npm run docs:dev`

# 添加文件
## 英文文档
![Alt text](/image/en.png)
## 中文文档
![Alt text](/image/zh.png)

# 新增文件后需要在 sidebar文件下添加侧边栏
![Alt text](/image/side.png)

# 侧边文件排序问题

![Alt text](/image/image-1.png)


## 添加文件后使用以下命令重启 不然侧边栏可能加载不出来
`npm run docs:clean-dev`



## 打包项目
`npm run docs:build`



## 部署项目 
直接push到master分支 等待几分钟即可