/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
/*'use strict';
var socket = io();

var vm = new Vue({
  el: '#messaging',
  data: {
    food:food,
    orders: {},
    x: [],
    y:[]
      
  },
  created: function () {
    socket.on('initialize', function (data) {
      this.orders = data.orders;
    }.bind(this));

    socket.on('currentQueue', function (data) {
      this.orders = data.orders;
    }.bind(this));
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: event.clientX - 10 - offset.x,
                                           y: event.clientY - 10 - offset.y },
                                orderItems: ["Beans", "Curry"]
                              });
    },
      displayOrder: function(event) {
          this.x =  event.clientX - 10 - event.currentTarget.getBoundingClientRect().left;
          this.y = event.clientY - 10 - event.currentTarget.getBoundingClientRect().top;
      }
  }
});

/*var grid = new Vue({
    el: '.grid',
    data: {
        food : food
    }
});

new Vue({
    el:'#orderButton',
    data: {
        food: food
    },
    methods: {
        markDone: function() {
            // console.los("Button Clicked"),
            saveAndDisplay();
        }
    }
});  */
