import FilmModel  from '../model/film'
import  VideoModel from '../model/videos'
import { _dbError, _dbSuccess} from '../function/function'
import { Router } from 'express'
const router = Router();

/**
 * @desc 拉取正在热映电影列表函数
 * @param page: int, 当前是第几页，规定每10个项为一页，共30页
 * @return 返回第n页的全部数据（返回一个数组，每个项为一个object）
 * */
/*
router.get('/getHotFilmList', async (req, res, next) => {
    let page = req.query.currentPage
    console.log('########拉取第' + page + '页资讯#########')
    if (!page) {
      _dbError(res)
      console.log('errror')
      return false
    }
    let page_length = 10   // 每10项为一页
    let count = (page - 1) * page_length
    let newsArr = await NewsModel.find({}).limit(page_length).skip(count).exec()
    let findNews = []
    for (let item of newsArr) {
      let ob = JSON.parse(JSON.stringify(item))
      findNews.push(ob)
    }
    return _dbSuccess(res, '获取新闻成功', findNews)
  }
)

*/
/**
 * @desc 拉取首页正在热映电影列表函数
 * @param 无
 * @return 返回前10个热映电影
 * */

router.get('/getHomeHotFilms', async (req, res, next) => {
  console.log('########获取前10个热映电影#########')
  let page_length = 10;   // 获取前10个
  let filmsArr = await FilmModel.find({}).limit(page_length).exec()
  let findFilms = []
  for (let item of filmsArr) {
    let ob = JSON.parse(JSON.stringify(item))
    findFilms.push(ob)
  }
  return _dbSuccess(res, '获取热映电影成功', findFilms)

});

export default router
