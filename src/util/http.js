import axios from 'axios';
import router from '../router'
import { Loading, Message } from 'element-ui'
import { Toast, MessageBox } from 'mint-ui'
// axios 配置
axios.defaults.timeout = 60000;
axios.defaults.baseURL = '';
// var loadinginstace
// http request 拦截器
axios.interceptors.request.use(
  config => {

    return config

  }, error => {
    if (localStorage.sid && localStorage.Token && localStorage.tokenCode) {
      Message.error({
        message: '加载超时'
      })
    } else {
      if (localStorage.sid) {
        router.push("/login");
      } else {
        router.push("/XZcaizhong");
      }
    }

    return Promise.reject(error)
  }
);


// http response 拦截器
axios.interceptors.response.use(
  response => {// 响应成功关闭loading
    console.log('拦截器 MsgType:' + response.data.MsgType)
    console.log('拦截器 Msg:' + response.data.Msg)
    console.log(response);
    if (localStorage.tab == 'lishi') {

    } else {

    }
    if (response.data.MsgType === 1 && response.data.Msg != null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: false,
      })
    } else if (response.data.MsgType === 2 && response.data.Msg != null) {
      if (localStorage.tab == 'shujufenxi') {

      } else {
        MessageBox({
          title: '提示',
          message: response.data.Msg,
          showCancelButton: true,
          confirmButtonText: '去购买',
          cancelButtonText: '知道了',
          callback: (action, instance, done) => {
            if (action === 'confirm') {
              router.push({
                path: '/buy'
              })
            } else {

            }
          },
        }).then(action => {

        })
      }
    } else if (response.data.MsgType === 3 && response.data.Msg != null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '联系客服',
        cancelButtonText: '知道了',
        callback: (action, instance, done) => {
          if (action === 'confirm') {
            alert('联系客服')
          } else {

          }
        },
      }).then(action => {

      })
    } else if (response.data.MsgType === 4 && response.data.Msg != null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '了解详情',
        cancelButtonText: '知道了',
        callback: (action, instance, done) => {
          if (action === 'confirm') {
            alert('了解详情')
          } else {

          }
        },
      }).then(action => {

      })
    } else if (response.data.MsgType === 5 && response.data.Msg != null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '去升级',
        cancelButtonText: '知道了',
        callback: (action, instance, done) => {
          if (action === 'confirm') {
            router.push({
              path: '/buy'
            })
          } else {

          }
        },
      }).then(action => {

      })
    } else if (response.data.MsgType === 6 && response.data.Msg != null) {
      window.location.href = response.data.Msg;
    } else if (response.data.MsgType === 7 && response.data.Msg != null) {
      MessageBox({
        title: '提示',
        message: response.data.Msg,
        showCancelButton: true,
        confirmButtonText: '去分享',
        cancelButtonText: '知道了',
        callback: (action, instance, done) => {
          if (action === 'confirm') {
            router.push({
              path: '/planShare'
            })
          } else {

          }
        },
      }).then(action => {

      })
    } else if (response.data.Msg != null && response.data.Msg != "") {
      Toast({
        message: response.data.Msg,
        position: 'bottom',
        duration: 2000
      })
    }


    if (response.data.Code === 'PushedOffLine') {
      router.push({
        path: "/login"
      })
    } else {
      return response
    }
  }, error => {
    // loadinginstace.close()
    if (localStorage.sid && localStorage.Token && localStorage.tokenCode) {
      Message.error({
        message: '加载超时'
      })
    } else {
      if (localStorage.sid) {
        router.push("/login");
      } else {
        router.push("/XZcaizhong");
      }
    }
    return Promise.reject(error)
  }
);

export default axios;

/**
 * fetch 请求方法
 * @param url
 * @param params
 * @returns {Promise}
 */
export function fetch(url, params = {}) {

  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data);
      })
      .catch(err => {
        reject(err)
      })
  })
}

/**
 * post 请求方法
 * @param url
 * @param data
 * @returns {Promise}
 */
export function post(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * patch 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function patch(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

/**
 * put 方法封装
 * @param url
 * @param data
 * @returns {Promise}
 */
export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
  })
}

