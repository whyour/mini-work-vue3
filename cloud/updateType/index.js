// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const db = cloud.database()

  return db.collection('types').where({
    _id: event._id,
    openId: event.openId
  }).update({
    data: {
      name: event.name,
      price: event.price
    }
  })
}