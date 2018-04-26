// // pages/calc/calc.js
// Page({

//   /**
//    * 页面的初始数据,
//    * 
//    */
//   data: {
//     idb: "back",
//     idc: "clear",
//     idt: "toggle",
//     idadd: "+",
//     id9: "9",
//     id8: "8",
//     id7: "7",
//     idj: "-",
//     id6: "6",
//     id5: "5",
//     id4: "4",
//     idx: "x",
//     id3: "3",
//     id2: "2",
//     id1: "1",
//     idiv: "÷",
//     id0: "0",
//     ide: "=",
//     screenData: "0",
//     operaSymbo: { "＋": "+", "－": "-", "×": "*", "÷": "/", ".": "." },
//     lastIsOperaSymbo: false,
//     iconType: 'waiting_circle',
//     iconColor: 'white',
//     arr: [],
//     logs: []
//   },

//   /**
//    * 生命周期函数--监听页面加载 也是页面初始化 options为页面跳转所带来的参数
//    */
//   onLoad: function (options) {

//   },

//   /**
//    * 生命周期函数--监听页面初次渲染完成
//    */
//   onReady: function () {

//   },

//   /**
//    * 生命周期函数--监听页面显示
//    */
//   onShow: function () {

//   },

//   /**
//    * 生命周期函数--监听页面隐藏
//    */
//   onHide: function () {

//   },

//   /**
//    * 生命周期函数--监听页面卸载
//    */
//   onUnload: function () {

//   },

//   /**
//    * 页面相关事件处理函数--监听用户下拉动作
//    */
//   onPullDownRefresh: function () {

//   },

//   /**
//    * 页面上拉触底事件的处理函数
//    */
//   onReachBottom: function () {

//   },

//   /**
//    * 用户点击右上角分享
//    */
//   onShareAppMessage: function () {
//     return {
//       title: '向东的第一个小程序应用',
//       path: '/page/user?id=123',
//       success: function (res) {
//         // 转发成功
//       },
//       fail: function (res) {
//         // 转发失败
//       }
//     }
//   },
//   // 定义我们的事件
//   clickBtn: function (event) {
//     // 获取到event事件的target 返回触发此事件的元素（事件的目标节点） 也就是我们绑定的id
//     // 根据点击不同的view获取对应的id值
//     console.log(this.data + "为了看this.data是什么东西")
//     let id = event.target.id;
//     // this.data.idb 是上面我们定义的数据 这里是es6写法
//     if (id == this.data.idb) { //退格-
//       let data = this.data.screenData; // data=0;
//       if (data == "0") {
//         return; //结束当前模块   推出函数
//       }
//       data = data.substring(0, data.length - 1) //取出字符 第一个参数是从第几位开始取  最后一位是第几位结束
//       if (data == "" || data == "-") {
//         data = 0;
//       }
//       // 想要修改数据 必须使用this.setData()
//       this.setData({ "screenData": data }) //现在就将的修改成了data的值
//       this.data.arr.pop(); //向arr数组里面删除返回最后一个函数
//       console.log(this.data.arr.pop() + "this.data.arr.pop()");
//     } else if (id == this.data.idc) { //清屏C
//       this.setData({ "screenData": "0" });
//       this.data.arr.length = 0;
//     } else if (id == this.data.idt) { //正负号
//       let data = this.data.screenData;//读取我们所有的输入内容的数组
//       if (data == "0") {
//         return;//退出函数
//       }
//       let firstWord = data.charAt(0)//返回指定位置的字符  这里是返回结果的第一个数
//       if (data == "-") {
//         data = data.substr(1); //抽取指定的内容 从第几个开始取
//         this.data.arr.shift();// 删除并返回 数组的第一个元素

//       } else {
//         data = "-" + data;
//         this.data.arr.unshift("-") //添加新项目 并返回长度
//       }
//       this.setData({ "screenData": data });
//     } else if (id = this.data.ide) {//等于=
//       let data = this.data.screenData;
//       if (data == "0") {
//         return;
//       }
//       let lastWord = data.charAt(data.length);//返回最后一位数字
//       if (isNaN(lastWord)) {//这个是判断是否是非数字的 如果是返回true 不是返回false
//         return;
//       }
//       let num = "";
//       let lastOperator = "";
//       let arr = this.data.arr;
//       let optarr = [];
//       for (let i in arr) { //for in循环  遍历数组
//         if (isNaN(arr[i]) == false || arr[i] == this.data.idd || arr[i] == this.data.idt) { //
//           num += arr[i];
//         } else {
//           lastOperator = arr[i];
//           optarr.push(num);
//           optarr.push(arr[i])
//           num = "";
//         }
//       }
//       optarr.push(Number(num)) //将对象转化为数字
//       let result = Number(optarr[0]) * 1.0;
//       console.log(result + "result");
//       for (let i = 0; i < optarr.length; i++) {
//         if (isNaN(optarr[i])) {
//           if (optarr[1] == this.data.idadd) {
//             result += Number(optarr[i + 1]);
//           } else if (optarr[1] == this.data.idj) {
//             result -= Number(optarr[i + 1]);
//           } else if (optarr[1] == this.data.idx) {
//             result *= Number(optarr[i + 1]);
//           } else if (optarr[1] == this.data.iddiv) {
//             result /= Number(optarr[i + 1]);
//           }
//         }
//       }
//       // 存储历史
//       this.data.logs.push(data + result);
//       wx.setStorageSync("calclogs", this.data.logs)
//       this.data.arr.length = 0;
//       this.data.arr.push(result);
//       this.setData({
//         "screenData": result + ""
//       })
//     } else {
//       if (this.data.operaSymbo[id]) { //如果是符号+-*/
//         if (this.data.lastIsOperaSymbo || this.data.screenData == "0") {
//           return;
//         }
//       }

//       let sd = this.data.screenData;
//       let data;
//       if (sd == 0) {
//         data = id;
//       } else {
//         data = sd + id;
//       }
//       this.setData({ "screenData": data });
//       this.data.arr.push(id);

//       if (this.data.operaSymbo[id]) {
//         this.setData({ "lastIsOperaSymbo": true });
//       } else {
//         this.setData({ "lastIsOperaSymbo": false });
//       }

//     }
//   },
//   history:function(){
//     wx.navigateTo({
//       url: '../history/history',
//     })
//   }
// })



Page({
  data: {
    idb: "back",
    idc: "clear",
    idt: "toggle",
    idadd: "＋",
    id9: "9",
    id8: "8",
    id7: "7",
    idj: "－",
    id6: "6",
    id5: "5",
    id4: "4",
    idx: "×",
    id3: "3",
    id2: "2",
    id1: "1",
    iddiv: "÷",
    id0: "0",
    idd: ".",
    ide: "＝",
    screenData: "0",
    operaSymbo: { "＋": "+", "－": "-", "×": "*", "÷": "/", ".": "." },
    lastIsOperaSymbo: false,
    iconType: 'waiting_circle',
    iconColor: 'white',
    arr: [],
    logs: []
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  clickBtn: function (event) {
    let  id = event.target.id;
    if (id == this.data.idb) {  //退格←
     let data = this.data.screenData;
      if (data == "0") {
        return;
      }
      data = data.substring(0, data.length - 1);
      if (data == "" || data == "－") {
        data = 0;
      }
      this.setData({ "screenData": data });
      this.data.arr.pop();
    } else if (id == this.data.idc) {  //清屏C
      this.setData({ "screenData": "0" });
      this.data.arr.length = 0;
    } else if (id == this.data.idt) {  //正负号+/-
      let  data = this.data.screenData;
      if (data == "0") {
        return;
      }
      let  firstWord = data.charAt(0);
      if (data == "－") {
        data = data.substr(1);
        this.data.arr.shift();
      } else {
        data = "－" + data;
        this.data.arr.unshift("－");
      }
      this.setData({ "screenData": data });
    } else if (id == this.data.ide) {  //等于＝
      let  data = this.data.screenData;
      if (data == "0") {
        return;
      }
      //eval是js中window的一个方法，而微信页面的脚本逻辑在是在JsCore中运行，JsCore是一个没有窗口对象的环境，所以不能再脚本中使用window，也无法在脚本中操作组件                 
      //let  result = eval(newData);           

      let  lastWord = data.charAt(data.length);
      if (isNaN(lastWord)) {
        return;
      }

      let  num = "";

      let  lastOperator = "";
      let  arr = this.data.arr;
      let  optarr = [];
      for (let  i in arr) {
        if (isNaN(arr[i]) == false || arr[i] == this.data.idd || arr[i] == this.data.idt) {
          num += arr[i];
        } else {
          lastOperator = arr[i];
          optarr.push(num);
          optarr.push(arr[i]);
          num = "";
        }
      }
      optarr.push(Number(num));
      let  result = Number(optarr[0]) * 1.0;
      console.log(result);
      for (let  i = 1; i < optarr.length; i++) {
        if (isNaN(optarr[i])) {
          if (optarr[1] == this.data.idadd) {
            result += Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idj) {
            result -= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.idx) {
            result *= Number(optarr[i + 1]);
          } else if (optarr[1] == this.data.iddiv) {
            result /= Number(optarr[i + 1]);
          }
        }
      }
      //存储历史记录
      this.data.logs.push(data + result);
      wx.setStorageSync("calclogs", this.data.logs);

      this.data.arr.length = 0;
      this.data.arr.push(result);

      this.setData({ "screenData": result + "" });
    } else {
      if (this.data.operaSymbo[id]) { //如果是符号+-*/
        if (this.data.lastIsOperaSymbo || this.data.screenData == "0") {
          return;
        }
      }

      let  sd = this.data.screenData;
      let  data;
      if (sd == 0) {
        data = id;
      } else {
        data = sd + id;
      }
      this.setData({ "screenData": data });
      this.data.arr.push(id);

      if (this.data.operaSymbo[id]) {
        this.setData({ "lastIsOperaSymbo": true });
      } else {
        this.setData({ "lastIsOperaSymbo": false });
      }
    }
  },
  history: function () {
    wx.navigateTo({
      url: '../history/history'
    })
  }
})