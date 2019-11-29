var grid = new Vue({
    el: '.grid',
    data: {
        food : food
    }
})

new Vue({
    el:'#orderButton',
    methods: {
        markDone: function() {
            new Vue ({
                el: '#confirmation',
                data: {
                    costumer: saveData()
                }
            })
        }
    }
})


