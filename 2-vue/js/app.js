new Vue({
    el: '#app',
    data: {
        query: ''
    },
    methods: {
        onSubmit(e) {
            
        },
        onReset() {
            this.query = ''
            debugger
        },
        onKeyup() {
            if(!this.query.length) this.onReset()
        }
    }
})