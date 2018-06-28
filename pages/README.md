# PAGES

This directory contains your Application Views and Routes.
The framework reads all the `*.vue` files inside this directory and create the router of your application.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/routing).

---

##all-news
getAllNews():
1. param: currentPage(int 当前是第几页，规定每10个项为一页,共30页)
2. return: 返回第n页的全部数据（allnewsdata是一个数组，每个项为一个object
3. 
``` bash
e.g.
allnewsdata: [{
    cover_img_src: string,
    url: string,
    title: string,  
    date: string,
    abstract: string
}]
```
---

##all-videos
getAllVideos():
1. param: currentPage(int 当前是第几页，规定每15个项为一页，共20页)
2. return: 返回第n页的全部数据（allvideosdata是一个数组，每个项为一个object
3. 
``` bash
e.g.
allvideodata: [{
    url: string,
    title: string,  
    cover_img_src: string,
    view_count: string
}]
```
 
 ---

##hot-news
getHotNews():
1. param: 无
2. return: 返回前6项资讯和视频
``` bash
e.g.
newsdata: [
{
    url: string,
    title: string,  
    cover_img_src: string,
    view_count: string
}，
{
    url: string,
    title: string,  
    cover_img_src: string,
    view_count: string
}，
...]
videodata: [
{
    url: string,
    title: string,  
    cover_img_src: string,
    view_count: string
}，
...]

```

---

##login

login():
1. param: cellphone, password
2. return: 10 / 20 是否用户存在

##register():
1. param: cellphone, username, password
2. return: 10（注册成功）；20（用户已存在）

---

##movies
getMovies():
1. param: currentPage(int 当前是第几页，规定每30个项为一页,共50页)
2. return: 返回第n页的全部数据（allmoviesdata是一个数组，每个项为一个object
3. 
``` bash
e.g.
moviesdata: [
{
    film_name: String,            //电影名（例如 "侏罗纪世界2"）
    country: String,              //国家（例如 "美国"）
    time: String,                 //电影时长（例如 "150"，以分钟为单位）
    online_time: String,          //上映时间（例如 "2018-05-23"）
    score: String,                //用户评分（例如 "8.3"）
    box_office: String,           //票房（例如"8952.32", 以万为单位）
    img_src: String,              //电影图片路径
    tags: Array,                  //(例如 ["动作", "冒险", "科幻"], 数组中每个元素都是表示标签的string)
    introduction: String,         //电影简介
    director: Array,              //导演列表，数组中每个元素是一个表示人的object，每个object有2个属性name、img_src，例如:
}，
{
    film_name: String,            //电影名（例如 "侏罗纪世界2"）
    country: String,              //国家（例如 "美国"）
    time: String,                 //电影时长（例如 "150"，以分钟为单位）
    online_time: String,          //上映时间（例如 "2018-05-23"）
    score: String,                //用户评分（例如 "8.3"）
    box_office: String,           //票房（例如"8952.32", 以万为单位）
    img_src: String,              //电影图片路径
    tags: Array,                  //(例如 ["动作", "冒险", "科幻"], 数组中每个元素都是表示标签的string)
    introduction: String,         //电影简介
    director: Array,              //导演列表，数组中每个元素是一个表示人的object，每个object有2个属性name、img_src，例如:
}，
...]

##cinemas
getCinemas():
1. param: currentPage(int 当前是第几页，规定每10个项为一页,共10页)
2. return: 返回第n页的全部数据（allcinemasdata是一个数组，每个项为一个object
3. 
``` bash
e.g.
cinemasdata: [
{
    name: string,  
	type: string,
	distriction: string,
	address: string,
	movies_on: Array,
	movies_price: Array
}，
{
    url: string,
    name: string,  
	type: string,
	distriction: string,
	address: string,
	movies_on: Array,
	movies_price: Array
}，
...]


