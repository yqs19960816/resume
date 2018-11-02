APP_ID = '4zHNWSnhPINGSrY7gu5e48yE-gzGzoHsz';
var APP_KEY = 'khYqYi2eLoFfRwiRHsIEh5Fq';

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
});

let myForm = document.querySelector('#postMessageForm')
//向数据库提交数据并自动添加评论
myForm.addEventListener('submit',function(e){
    e.preventDefault()
    let content = myForm.querySelector('input[name=content]').value
    let name = myForm.querySelector('input[name=name]').value
    //创建列表项为Message
    var Message = AV.Object.extend('Message');
    var message = new Message();
    //创建消息类型为content，内容值为content的值  保存
    message.save({
        'content': content,
        'name': name
        //保存成功提醒
      }).then(function(object) {
        alert('O_0留言成功~感谢你的光临！');
        // window.location.reload();
        myForm.querySelector('input[name=content]').value = ""
        myForm.querySelector('input[name=name]').value = ""
        let li = document.createElement('li')
        li.textContent = `${object.attributes.name}: ${object.attributes.content}`
        document.querySelector('#messageList').appendChild(li)
      })
})
//从数据库下载数据并渲染页面
var query = new AV.Query('Message');
query.find()
.then(function (messages) {
let messageArray = messages.map((item)=>item.attributes)
messageArray.forEach((item)=>{
       let li = document.createElement('li')
       li.textContent = `${item.name}: ${item.content}`
       document.querySelector('#messageList').appendChild(li)
   })
})

