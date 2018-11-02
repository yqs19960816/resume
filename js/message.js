!function () {
    var model = {
        //数据库初始化
        init: function () {
            var APP_ID = '4zHNWSnhPINGSrY7gu5e48yE-gzGzoHsz';
            var APP_KEY = 'khYqYi2eLoFfRwiRHsIEh5Fq';
            AV.init({
                appId: APP_ID,
                appKey: APP_KEY
            });
        },
        //获取数据
        fetch: function(){
            var query = new AV.Query('Message');
            return query.find()  //Promise对象
        },
        //上传数据
        save: function(name,content){
            //创建列表项为Message
            var Message = AV.Object.extend('Message');
            var message = new Message();
            //创建消息类型为content，内容值为content的值  保存
            return message.save({   //Promise对象
                'content': content,
                'name': name
            })
        }
    }
    var vivw = document.querySelector('section.message')
    var controller = {
        view: null,
        model: null,
        //页面初始化
        init: function (vivw,model) {
            this.view = vivw
            this.model = model
            this.messageList = vivw.querySelector('#messageList')
            this.form = vivw.querySelector('form')
            this.model.init()
            this.loadMessage()
            this.bindEvents()
        },
        //加载历史留言
        loadMessage: function () {
            //从数据库下载数据成功后渲染页面
            this.model.fetch().then((object) => {
                    let messageArray = object.map((item) => item.attributes)
                    messageArray.forEach((item) => {
                        let li = document.createElement('li')
                        li.textContent = `${item.name}: ${item.content}`
                        this.messageList.appendChild(li)
                    })
                })
        },
        //提交表单向数据库提交数据并自动更新评论
        saveMessage: function(){
            let myForm = this.form
            let content = myForm.querySelector('input[name=content]').value
            let name = myForm.querySelector('input[name=name]').value
                //上传数据更新页面
                this.model.save(name,content).then(function (object) {
                    alert('O_0留言成功~感谢你的光临！');
                    myForm.querySelector('input[name=content]').value = ""
                    myForm.querySelector('input[name=name]').value = ""
                    let li = document.createElement('li')
                    li.textContent = `${object.attributes.name}: ${object.attributes.content}`
                    this.messageList.appendChild(li)
                })
        },
        //监听表单提交事件
        bindEvents: function () {
            this.form.addEventListener('submit', (e)=> {
                e.preventDefault()
                this.saveMessage()
            })
        }
    }
    controller.init(vivw,model)
}.call()