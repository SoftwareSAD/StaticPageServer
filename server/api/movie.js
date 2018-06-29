import MovieModel  from '../model/movies'
import { _dbError, _dbSuccess} from '../function/function'
import { Router } from 'express'
const router = Router();


/**
 * @desc 拉取首页正在热映电影列表函数
 * @param 无
 * @return 返回前10个热映电影
 * */

router.get('/getHomeHotMovies', async (req, res, next) => {
  console.log('########获取前10个热映电影#########');
  let page_length = 10;   // 获取前10个
  let MoviesArr = await MovieModel.find({}).limit(page_length).exec();
  let findMovies = [];
  for (let item of MoviesArr) {
    let ob = JSON.parse(JSON.stringify(item));
    findMovies.push(ob)
  }
  return _dbSuccess(res, '获取热映电影成功', findMovies)

});

/**
 * @desc 拉取首页待上映电影列表函数
 * @param 无
 * @return 返回前8个待上映电影
 * */

router.get('/getHomeReadyMovies', async (req, res, next) => {
  console.log('########获取前8个待上映电影#########');
  let page_length = 8;   // 获取前8个
  let MoviesArr = await MovieModel.find({}).limit(page_length).skip(10).exec();
  let findMovies = [];
  for (let item of MoviesArr) {
    let ob = JSON.parse(JSON.stringify(item));
    findMovies.push(ob)
  }
  return _dbSuccess(res, '获取待上映电影成功', findMovies)

});

/**
 * @desc 获取单个电影信息的函数
 * @param name: 电影中文名
 * @return 电影对象
 * */
router.get("/getSingleFilm", async (req, res, next) =>{
  let name = req.query.name;

  console.log('########拉取电影-' + name + '#########')
  let MoviesArr = await MovieModel.find({}).limit(1).skip(10).exec();
  let findMovies = {};
  for (let item of MoviesArr) {
    let ob = JSON.parse(JSON.stringify(item));
    findMovies = ob;
  }
  return _dbSuccess(res, '获取'+name+'成功', findMovies)
})


export default router
