# 垃圾识别精灵 — 微信小程序

#### 介绍

这是一款个人开发的微信小程序，集 文字查询、语音识别、拍照识别其垃圾分类的小工具，可以使用微信扫码下方二维码立即体验哦。

觉得还不错的话，点个 star 以示鼓励吧，如有问题请进 QQ 交流群讨论：737798561 或者可以加我微信好友。

<!-- <img src="https://images.gitee.com/uploads/images/2019/0730/130939_1e21447e_1277461.jpeg" width="300"  align=center /> -->

<!-- <img src="https://images.gitee.com/uploads/images/2019/0927/141027_4b404d3b_1277461.jpeg" width="300"  align=center /> -->


#### 部分预览图，详情请扫描上方小程序码体验


| 首页 | 分类页 | 分类详情 | 搜索页 |
| :--------: | :--------:| :--: |:--:|
| <img src="https://images.gitee.com/uploads/images/2019/0730/125242_4777d3fa_1277461.png" width="300"  align=center />|<img src="https://images.gitee.com/uploads/images/2019/0730/125250_8275848e_1277461.png" width="300"  align=center />|<img src="https://images.gitee.com/uploads/images/2019/0730/125301_35954171_1277461.png" width="300"  align=center />|<img src="https://images.gitee.com/uploads/images/2019/0730/125317_7272a96b_1277461.png" width="300"  align=center />|

| 语音识别 | 挑战赛 | 挑战赛等级 | 挑战赛详情 |
| :--------: | :--------:| :--: |:--:|
| <img src="https://images.gitee.com/uploads/images/2019/0730/125349_348ed5a1_1277461.png" width="300"  align=center />|<img src="https://images.gitee.com/uploads/images/2019/0730/125325_0eac19a1_1277461.png" width="300"  align=center />|<img src="https://images.gitee.com/uploads/images/2019/0730/125333_20a7ed64_1277461.png" width="300"  align=center />|<img src="https://images.gitee.com/uploads/images/2019/0730/125341_350f0101_1277461.png" width="300"  align=center />|

#### 介绍
前端：微信小程序 采用 [uni-app](https://uniapp.dcloud.io/) 开发框架，`uni-app` 是一个使用 [Vue.js](https://vuejs.org/) 开发所有前端应用的框架，开发者编写一套代码，可发布到iOS、Android、H5、以及各种小程序（微信/支付宝/百度/头条/QQ/钉钉）等多个平台。

后端：采用 SpringBoot 2 构建后端服务，才  Swagger2 构建 Restful风格接口文档，数据库采用 Mysql ,使用 [Mybatis-Plus](https://mybatis.plus/) 做数据访问层。

语音识别和图像识别 采用 百度智能云平台服务。


#### 安装教程

1. 开发需要准备相关的 IDE和  JDK8 开发环境 , 前端开发 `uni-app` 需要 下载 [Hbuilder](https://www.dcloud.io/hbuilderx.html) ,后端开发 需要下载 `Eclipse` 或` IDEA`。
2. 其中的 语音识别和图像识别 功能使用百度智能云平台服务，需要注册登录拥有自己的应用 (有5万次调用 api 的免费使用量)，在 后端 `afterend` 的 `uniapp-api` 当中的配置文件里面需要进行配置 `appid`、`apikey`、`secretkey`。
3. 数据库准备，创建一个 名称为 `garbageSort` 的数据库，把跟目录下 `garbagesort.sql`数据库文件进行导入进去即可。
4. 后端启动：第一步、在 `afterend` 目录下找到 `uniapp-ap`i 模块，把配置文件 `application.yml.example` 的 example 后缀去掉，命名为 `application.yml。第二步、在 application.yml` 中配置好 数据库相关信息 和 上述 百度请求 api 管理的配置信息即可。 第三步、运行 `UniappApiApplication` ，启动后端服务，可以访问 http://localhost:8899/wx/doc.html 查看接文档
5. 前端启动：在 Hbuilder 中打开目录 `frontend` ，在运行菜单中 点击 `运行到小程序模拟器` —> `微信开发者工具`,或者 使用 微信开发者工具 打开  `forntend` -> `unpackage` -> `dis`t -> `dev` -> `mp-weixin`,即可运行微信小程序。（二次开发的时候在 Hbuilder 中修改文件，保存后可以到微信开发者工具看预览效果）

#### 技术栈

| 技术      |    名称| 版本|  官网|
| :--------: | :--------:| :--: |:--:|
| uni-app |  基于 vue 的跨端框架   | 2.1.0.20190713 |https://uniapp.dcloud.io/|
| vuejs | 渐进式 JavaScript 框架 |--|https://cn.vuejs.org/|
| SpringBoot |   Java 开源应用框架    |2.1.6.RELEASE|https://spring.io/projects/spring-boot|
|Mybatis-Plus|    Mybatis 增强工具    |3.0.6|https://mybatis.plus/|
|       swagger2       |时间选择器|     2.8.0      |https://swagger.io/|
| swagger-bootstrap-ui |swagger 增强UI实现|     1.8.8      |https://github.com/xiaoymin/Swagger-Bootstrap-UI|

#### 有收获可以请作者喝咖啡哟
If the project is very helpful to you, you can buy the author a cup of coffee.
如果这个项目对您有帮助，请作者喝杯咖啡吧。☕

|支付宝      |    微信|
| :--------: | :--------:|
| <img src="https://images.gitee.com/uploads/images/2019/0909/165504_f02dc52b_1277461.jpeg " width="300"  align=center />|<img src="https://images.gitee.com/uploads/images/2019/0909/165444_ab4377b4_1277461.jpeg " width="300"  align=center />|