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


