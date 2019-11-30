/*jslint es5:true, indent: 2 */
/*global Vue, io */
/* exported vm */
'use strict';
var socket = io();

var vm = new Vue({
  el: '#messaging',
  data: {
    food:food,
    orders: {},
      x: -20,
      y: 0
  },
  methods: {
    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },
    addOrder: function (event) {
      displayCostumer();
      displayOrder();
      socket.emit("addOrder", { orderId: this.getNext(),
                                details: { x: this.x,
                                           y: this.y},
                                costumerInfo: createCostumer(),
                                orderItems: orderItems(), 
                                });
    },
    displayOrder: function (event) {        
        this.x =  event.clientX - 10 - event.currentTarget.getBoundingClientRect().left;
        this.y = event.clientY - 10 - event.currentTarget.getBoundingClientRect().top;
    }
  }
});
