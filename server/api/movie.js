import MovieModel  from '../model/movies'
import { _dbError, _dbSuccess} from '../function/function'
import { Router } from 'express'
import CinemaModel from "../model/cinema";
const router = Router();


/**
 * @desc 拉取首页正在热映电影列表函数
 * @param 无
 * @return 返回前10个热映电影
 * */

router.get('/getHomeHotMovies', async (req, res, next) => {
  console.log('########获取前10个热映电影#########');
  let page_length = 10;   // 获取前10个
  let MoviesArr = await MovieModel.find({online_time: {$regex: '2018-06'}}).exec();
  let findMovies = [];
  let YiArr = []    // 单位：亿
  let WanArr = []   // 单位：万
  for (let item of MoviesArr) {
    let movie_price = item.movie_total_price
    if (movie_price.indexOf('亿') != -1) {
      let YiStr = item.movie_total_price.split('亿')[0]
      let YiNum = Number(YiStr)
      YiArr.push(YiNum)
    } else if (movie_price.indexOf('万') != -1) {
      let WanStr = item.movie_total_price.split('万')[0]
      let WanNum = Number(WanStr)
      WanArr.push(WanNum)
    }
  }
  function compare(value1, value2) {
    return value2 - value1
  }
  YiArr.sort(compare)
  // console.log(YiArr)
  WanArr.sort(compare)
  // console.log(WanArr)
  for (var i = 0; i < page_length; i++) {
    if (i < YiArr.length) {
      let price = String(YiArr[i]) + '亿'
      console.log(price)
      let Arr = await MovieModel.find({movie_total_price: price, online_time: {$regex: '2018-06'}}).exec();
      for (let item of Arr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
    } else {
      let price = String(WanArr[i - YiArr.length]) + '万'
      let Arr = await MovieModel.find({movie_total_price: price, online_time: {$regex: '2018-06'}}).exec();
      for (let item of Arr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
    }
  }
  // for (var i = 0; i < findMovies.length; i++) {
  //   console.log(findMovies[i].movie_total_price)
  // }
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
  let MoviesArr = await MovieModel.find({movie_total_price: '暂无'}).limit(page_length).exec();
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
  MovieModel.find({movie_name: name})
  .then(function (resDb) {
    return _dbSuccess(res, '获取电影成功', resDb)
  })
  .catch(function (err) {
    return _dbError(res, err)
  })
});

/**
 * @desc 获取单个电影信息的函数
 * @param src: 电影图片链接
 * @return 电影对象
 * */
router.get("/getFilmByImg", async (req, res, next) =>{
  let img = req.query.src
  console.log('########通过图片链接' + img +'拉取电影#########')
  if (img.indexOf('@') != -1) {
    img = img.split('@')[0]
  }
  MovieModel.find({img: {$regex: img, $options: 'i'}})
  .then(function (resDb) {
    return _dbSuccess(res, '获取电影成功', resDb)
  })
  .catch(function (err) {
    return _dbError(res, err)
  })
});



/**
 * @desc 根据电影类型查询电影
 * @param key: 电影类型
  currentPage: 当前是第几页
 * @return 返回30个电影
 * */

router.get('/getMoviesByType', async (req, res, next) => {
  console.log('########根据电影类型查询电影#########');
  let page_length = 30;   // 获取30个
  let key = req.query.type;
  let page = req.query.currentPage;
  let count = (page - 1) * page_length;
  if (key == '全部') {
    let MoviesArr = await MovieModel.find({}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  } else {
    let MoviesArr = await MovieModel.find({movie_type: {$regex: key}}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  }
});

/**
 * @desc 根据国家查询电影
 * @param   country: 国家
        currentPage: 当前是第几页
 * @return 返回30个电影
 * */

router.get('/getMoviesByCountry', async (req, res, next) => {
  console.log('########根据国家查询电影#########');
  let page_length = 30;   // 获取30个
  let key = req.query.country
  let page = req.query.currentPage
  let count = (page - 1) * page_length
  if (key == '全部') {
    let MoviesArr = await MovieModel.find({}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  } else if (key == '日韩') {
    let MoviesArr = await MovieModel.find({$or:[{country:{$regex: '日本'}},{country:{$regex: '韩国'}}]}).limit(page_length).skip(count).exec();
    // let MoviesArr = await MovieModel.find({country: {$or:['日本', '韩国']}}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  } else if (key == '欧洲') {
    let MoviesArr = await MovieModel.find({$or:[{country:{$regex: '法国'}},{country:{$regex: '意大利'}},{country:{$regex: '西班牙'}}]}).limit(page_length).skip(count).exec();
    // let MoviesArr = await MovieModel.find({country: {$or:['法国', '意大利', '西班牙']}}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  } else if (key == '其他') {
    let MoviesArr = await MovieModel.find({$or:[{country:{$regex: '泰国'}},{country:{$regex: '俄罗斯'}},{country:{$regex: '澳大利亚'}}, {country:{$regex: '伊朗'}}]}).limit(page_length).skip(count).exec();
    // let MoviesArr = await MovieModel.find({country: {$or:['泰国', '俄罗斯', '澳大利亚', '伊朗']}}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  } else {
    if (key == '大陆') {
      key = '大陆'
    }
    let MoviesArr = await MovieModel.find({country: {$regex: key}}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  }
});

/**
 * @desc 根据时间查询电影
 * @param   online_time: 上映时间
            currentPage: 当前是第几页
 * @return 返回30个电影
 * */

router.get('/getMoviesByDate', async (req, res, next) => {
  console.log('########根据时间查询电影#########');
  let page_length = 30;   // 获取30个
  let key = req.query.online_time
  let page = req.query.currentPage
  let count = (page - 1) * page_length
  if (key == '全部') {
    let MoviesArr = await MovieModel.find({}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  } else if (key == '2018'){
    let MoviesArr = await MovieModel.find({online_time: {$regex: key}}).limit(page_length).skip(count).exec();
    let findMovies = [];
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', findMovies)
  } else if (key == '2011-2017') {
    for (var year = 2011; year <= 2017; year++) {
      let MoviesArr = await MovieModel.find({online_time: {$regex: String(year)}}).limit(page_length).skip(count).exec();
      let findMovies = [];
      for (let item of MoviesArr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
      return _dbSuccess(res, '获取电影成功', findMovies)
    }
  } else if (key == '2000-2010') {
    for (var year = 2000; year <= 2010; year++) {
      let MoviesArr = await MovieModel.find({online_time: {$regex: String(year)}}).limit(page_length).skip(count).exec();
      let findMovies = [];
      for (let item of MoviesArr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
      return _dbSuccess(res, '获取电影成功', findMovies)
    }
  } else if (key == '90年代') {
    for (var year = 1990; year < 2000; year++) {
      let MoviesArr = await MovieModel.find({online_time: {$regex: String(year)}}).limit(page_length).skip(count).exec();
      let findMovies = [];
      for (let item of MoviesArr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
      return _dbSuccess(res, '获取电影成功', findMovies)
    }
  } else if (key == '80年代') {
    for (var year = 1980; year < 1990; year++) {
      let MoviesArr = await MovieModel.find({online_time: {$regex: String(year)}}).limit(page_length).skip(count).exec();
      let findMovies = [];
      for (let item of MoviesArr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
      return _dbSuccess(res, '获取电影成功', findMovies)
    }
  } else if (key == '70年代') {
    for (var year = 1970; year < 1980; year++) {
      let MoviesArr = await MovieModel.find({online_time: {$regex: String(year)}}).limit(page_length).skip(count).exec();
      let findMovies = [];
      for (let item of MoviesArr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
      return _dbSuccess(res, '获取电影成功', findMovies)
    }
  } else if (key == '更早') {
    for (var year = 1900; year < 1970; year++) {
      let MoviesArr = await MovieModel.find({online_time: {$regex: String(year)}}).limit(page_length).skip(count).exec();
      let findMovies = [];
      for (let item of MoviesArr) {
        let ob = JSON.parse(JSON.stringify(item));
        findMovies.push(ob)
      }
      return _dbSuccess(res, '获取电影成功', findMovies)
    }
  }
});

/**
 * @desc 按照热度对电影排序：只对2018年的电影排序，热度用票房衡量
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getHotSortedMovies', async (req, res, next) => {
  console.log('########按照热度对电影排序#########');
  let page_length = 30;   // 获取30个
  let page = req.query.currentPage
  console.log(page);
  let count = (page - 1) * page_length
  let MoviesArr = await MovieModel.find({online_time: {$regex: '2018'}}).exec();
  let findMovies = [];
  let YiArr = []    // 单位：亿
  let WanArr = []   // 单位：万
  for (let item of MoviesArr) {
    let movie_price = item.movie_total_price
    if (movie_price.indexOf('亿') != -1) {
      let YiStr = item.movie_total_price.split('亿')[0]
      let YiNum = Number(YiStr)
      YiArr.push(YiNum)
    } else if (movie_price.indexOf('万') != -1) {
      let WanStr = item.movie_total_price.split('万')[0]
      let WanNum = Number(WanStr)
      WanArr.push(WanNum)
    }
  }
  function compare(value1, value2) {
    return value2 - value1
  }
  YiArr.sort(compare)
  WanArr.sort(compare)
  let storeMovie = []
  for (var i = 0; i < (YiArr.length + WanArr.length); i++) {
    if (i < YiArr.length) {
      let price = String(YiArr[i]) + '亿'
      let Arr = await MovieModel.find({movie_total_price: price}).exec();
      for (let item of Arr) {
        let ob = JSON.parse(JSON.stringify(item));
        storeMovie.push(ob)
      }
    } else {
      let price = String(WanArr[i - YiArr.length]) + '万'
      let Arr = await MovieModel.find({movie_total_price: price}).exec();
      for (let item of Arr) {
        let ob = JSON.parse(JSON.stringify(item));
        storeMovie.push(ob)
      }
    }
  }
  for (var i = count; i < count + page_length; i++) {
    findMovies.push(storeMovie[i])
  }
  return _dbSuccess(res, '获取热映电影成功', findMovies)
});

/**
 * @desc 按照评价对电影排序：只对2018年的电影排序，评分作为衡量标准
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getEvalSortedMovies', async (req, res, next) => {
  console.log('########按照评价对电影排序#########');
  let page_length = 30;   // 获取30个
  let page = req.query.currentPage
  let count = (page - 1) * page_length
  let MoviesArr = await MovieModel.find({online_time: {$regex: '2018'}}).exec();
  let starArr = []
  let findMovies = []
  for (let item of MoviesArr) {
    let movie_star = item.movie_star
    if (movie_star.indexOf('.') != -1) {
      let starNum = Number(movie_star)   // 把评分转为数字
      starArr.push(starNum)
    }
  }
  function compare(value1, value2) {
    return value2 - value1
  }
  starArr.sort(compare)
  for (var i = count; i < count + page_length; i++) {
    let Arr = await MovieModel.find({movie_star: String(starArr[i])}).exec();
    for (let item of Arr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
  }
  return _dbSuccess(res, '获取高分电影成功', findMovies)
});

/**
 * @desc 按照时间对电影排序：对所有电影进行排序
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getOnlineSortedMovies', async (req, res, next) => {
  console.log('########按照时间对电影排序#########');
  let page_length = 30;   // 获取30个
  let page = req.query.currentPage
  let count = (page - 1) * page_length
  let MoviesArr = await MovieModel.find({}).sort({online_time: -1}).exec();
  let findMovies = [];
  for (let item of MoviesArr) {
    let ob = JSON.parse(JSON.stringify(item));
    findMovies.push(ob)
  }
  return _dbSuccess(res, '获取时间排序电影成功', findMovies)
});

/**
 * @desc 获取经典影片：对所有电影排序，评分作为衡量标准
 * @param currentPage: 当前是第几页
 * @return 返回30项
 * */

router.get('/getOldGoodMovies', async (req, res, next) => {
  console.log('########获取经典电影#########');
  let page_length = 30;   // 获取30个
  let page = req.query.currentPage
  let count = (page - 1) * page_length
  let MoviesArr = await MovieModel.find({}).exec();
  let starArr = []
  let findMovies = []
  for (let item of MoviesArr) {
    let movie_star = item.movie_star
    if (movie_star.indexOf('.') != -1) {
      let starNum = Number(movie_star)   // 把评分转为数字
      starArr.push(starNum)
    }
  }
  function compare(value1, value2) {
    return value2 - value1
  }
  starArr.sort(compare)
  for (var i = count; i < count + page_length; i++) {
    let Arr = await MovieModel.find({movie_star: String(starArr[i])}).exec();
    for (let item of Arr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
  }
  return _dbSuccess(res, '获取经典高分电影成功', findMovies)
});

/**
 * @desc 获取指定顺序地区等限制的电影列表
 * @param sortID: 排序方式（热门、时间等）-> 按时间排序时让未上映电影排在前面
 *
 * @return 电影对象数组
 * */
router.get('/getFilmList', async (req, res, next) => {
  console.log('########获取指定限制的电影列表#########');
  //let currentPage = req.query.currentPage;  //当前页面
  let page_length = 30;   // 每页30个
  let sortID = req.query.sortID;  //排序方式
  let page = req.query.currentPage
  //let count = (page - 1) * page_length;
  console.log(sortID);
  let findMovies = [];
  if(sortID == 1){
    //console.log('Yes');
    let MoviesArr = await MovieModel.find({online_time: {$regex: '2018'}}).limit(page_length).exec();
    console.log(MoviesArr.length);

    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
  }
  else if(sortID == 2){
    //console.log('Yes');
    let MoviesArr = await MovieModel.find({movie_total_price: '暂无'}).limit(page_length).exec();
    console.log(MoviesArr.length);

    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
  }
  else if(sortID == 3){
    //console.log('Yes');
    let page_length = 30;   // 获取30个
    let count = (page - 1) * page_length
    let MoviesArr = await MovieModel.find({movie_star: {$lt: String(10)}}).collation({"locale": "zh", numericOrdering:true}).sort({movie_star: -1}).limit(30).exec();
    console.log(MoviesArr.length)
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
  }
  else{
    console.log('Yes');
    let page_length = 30;   // 获取30个
    let count = (page - 1) * page_length
    let MoviesArr = await MovieModel.find({movie_name: {$regex: sortID}}).limit(page_length).exec();
    //let MoviesArr = await MovieModel.find({movie_star: {$regex: /^\d+(\.\d+)?$/}}).sort({movie_star: -1}).limit(60).exec()
    console.log(MoviesArr.length)
    for (let item of MoviesArr) {
      let ob = JSON.parse(JSON.stringify(item));
      findMovies.push(ob)
    }
  }
    // let MoviesArr = await MovieModel.find({}).limit(page_length).skip(10).exec();
  return _dbSuccess(res, '获取指定限制的电影列表', findMovies)
});

/**
 * @desc 根据所有条件查询电影
 * @param   online_time: 上映时间
                country: 国家
                   type: 电影类型
            currentPage: 当前是第几页
 * @return 返回30个电影
 * */

// 根据年份筛选
 function searchByYear(inputArr, year) {
  let outputArr = []
  let startYear = 1950
  let endYear = 2025
  if (year == '2018') {
    startYear = 2018
    endYear = 2018
  } else if (year == '2011-2017') {
    startYear = 2011
    endYear = 2017
    console.log(startYear)
  } else if (year == '2000-2010') {
    startYear = 2000
    endYear = 2010
  } else if (year == '90年代') {
    startYear = 1990
    endYear = 1999
  } else if (year == '80年代') {
    startYear = 1980
    endYear = 1989
  } else if (year == '70年代') {
    startYear = 1970
    endYear = 1979
  } else if (year == '更早') {
    startYear = 1950
    endYear = 1969
  }
  for (var i = 0; i < inputArr.length; i++) {
    for (var j = startYear; j <= endYear; j++) {
      if (inputArr[i].online_time.indexOf(String(j)) != -1) {
        outputArr.push(inputArr[i])
        //console.log('Yes')
      }
    }
    console.log(inputArr)
  }
  return outputArr
 }

// 根据类型筛选
 function searchByType(inputArr, type) {
  let outputArr = []
  for(var i = 0; i < inputArr.length; i++) {
    if (inputArr[i].movie_type.indexOf(type) != -1) {
      outputArr.push(inputArr[i])
    }
  }
  return outputArr
 }

// 根据国家筛选
 function searchByCountry(inputArr, country) {
   console.log('国家')
  let outputArr = []
  if (country == '全部') {
    for(var i = 0; i < inputArr.length; i++) {
      outputArr.push(inputArr[i])
    }
  } else if (country == '美国') {
    for(var i = 0; i < inputArr.length; i++) {
      console.log('美国')
      if (inputArr[i].country.indexOf('美国') != -1) {
        outputArr.push(inputArr[i])
      }
    }
  } else if (country == '英国') {
    for (var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('英国') != -1) {
        outputArr.push(inputArr[i])
      }
    }
  } else if (country == '大陆') {
    for(var i = 0; i < inputArr.length; i++) {
      console.log('大陆')
      if (inputArr[i].country.indexOf('大陆') != -1) {
        outputArr.push(inputArr[i])
      }
    }
  } else if (country == '日韩') {
    for(var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('日本') != -1 || inputArr[i].country.indexOf('韩国') != -1) {
        outputArr.push(inputArr[i])
      }
    }
  } else if (country == '欧洲') {
    for(var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('意大利') != -1 || inputArr[i].country.indexOf('西班牙') != -1 ||
       inputArr[i].country.indexOf('德国') != -1 || inputArr[i].country.indexOf('波兰') != -1) {
        outputArr.push(inputArr[i])
      }
    }
  } else if (country == '其他') {
    for(var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf('泰国') != -1 || inputArr[i].country.indexOf('俄罗斯') != -1 ||
       inputArr[i].country.indexOf('澳大利亚') != -1 || inputArr[i].country.indexOf('伊朗') != -1) {
        outputArr.push(inputArr[i])
      }
    }
  } else {
    for(var i = 0; i < inputArr.length; i++) {
      if (inputArr[i].country.indexOf(country) != -1) {
        outputArr.push(inputArr[i])
      }
    }
  }
  console.log('Yes')
  console.log(outputArr.length)
  return outputArr
 }

router.get('/getMoviesByAll', async (req, res, next) => {
  console.log('########根据全部条件查询电影#########');
  let page_length = 30;   // 获取30个
  let online_time = req.query.online_time
  let country = req.query.country
  let type = req.query.type
  let page = req.query.currentPage
  let count = (page - 1) * page_length
  if (country == '全部') {  // 根据上映时间和类型搜索
    let MoviesArr = await MovieModel.find({movie_type: {$regex: type}}).exec();
    let findMovies = searchByYear(MoviesArr, online_time)
    let result = []
    for (var i = count; i < count + page_length && i < findMovies.length; i++) {
      let ob = JSON.parse(JSON.stringify(findMovies[i]));
      result.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', result)
  } else if (online_time == '全部') {   // 根据国家和类型搜索
    console.log('Yes');
    let MoviesArr = await MovieModel.find({movie_type: {$regex: type}}).exec();
    console.log(MoviesArr.length);
    let findMovies = searchByCountry(MoviesArr, country)
    console.log(findMovies.length)
    let result = []
    for (var i = count; i < count + page_length && i < findMovies.length; i++) {
      let ob = JSON.parse(JSON.stringify(findMovies[i]));
      result.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', result)
  } else if (type == '全部') {   // 根据国家和上映时间搜索
    let MoviesArr = await MovieModel.find({country:{$regex: country}}).exec();
    let findMovies = searchByYear(MoviesArr, online_time)
    console.log(findMovies)
    let result = []
    for (var i = count; i < count + page_length && i < findMovies.length; i++) {
      let ob = JSON.parse(JSON.stringify(findMovies[i]));
      result.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', result)
  } else {   // 根据国家、类型和上映时间搜索
    let MoviesArr1 = await MovieModel.find({movie_type: {$regex: type}}).exec(); // 按照类型的搜索结果
    let MoviesArr2 = searchByYear(MoviesArr1, online_time) // 按照时间、类型的搜索结果
    let findMovies = searchByCountry(MoviesArr2, country)  // 按照国家、时间、类型的搜索结果
    let result = []
    for (var i = count; i < count + page_length && i < findMovies.length; i++) {
      let ob = JSON.parse(JSON.stringify(findMovies[i]));
      result.push(ob)
    }
    return _dbSuccess(res, '获取电影成功', result)
  }
})

export default router
