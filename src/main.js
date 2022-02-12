// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import axios from 'axios'

Vue.config.productionTip = false


// Пример №1
var app = new Vue({
    el: '#app',
    data: {
      message: 'Привет, Vue!'
    }
  })


// Пример №2
var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
    }
  })


// Пример №3
var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true
    }
  })


// Пример №4
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Изучить JavaScript' },
      { text: 'Изучить Vue' },
      { text: 'Создать что-нибудь классное' }
    ]
  }
})


// Пример №5
var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Привет, Vue.js!'
  },
  // для компоненты мы можем загеристрировать
  // набор функций, и вызывать их для этой компоненты
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})





// ========================================
//     Взаимодействие с API
// ========================================
let config = {
  api_vps_url : 'http://localhost:8000/api/v1/vps'
}

// Пример №1
// Компонента имеет метод, этот метод подписан на нажатие кнопки,
// метод обращается к API и получает список всех записей о VPS.
// Список записей выводится в цикле.
var api1 = new Vue({
  el: '#api-1',

  data: {
    vps_list: null
  },

  methods: {
    // обращение к API и получение всех VPS
    getAllVps: function () {
        axios
          .get(config.api_vps_url)
          .then(response => (this.vps_list = response.data));
      }
    }
})


// Пример №2
// обращение к API и меняет статус выбранной VPS
var api2 = new Vue({
  el: '#api-2',

  data: {
    vps: null,
    status: null,
    response: null,
    uid: "21c75906-7e3c-489c-aaeb-ea2cf05b9e2a"
  },

  activated() {
    axios
     .get(config.api_vps_url + '/' + this.uid)
     .then(response => (this.vps = response.data))
     .catch(error => console.log(error));
  },

  methods: {
      changeVpsStatus: function (status) {
        axios
          .put(config.api_vps_url + '/' + this.uid, { status: status })
          .then(response => (this.response = response.data),this.vps.status = status)
          .catch(error => console.log(error));
    }
  }
})







































































//
