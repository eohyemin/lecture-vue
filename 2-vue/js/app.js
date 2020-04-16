import SearchModel from './models/SearchModel.js'

new Vue({
    el: '#app',
    data: {
        query: '',
        submitted: false,
        searchResult: []
    },
    methods: {
        onSubmit(e) {
            this.search();
        },
        onReset() {
            this.query = ''
        },
        onKeyup() {
            if(!this.query.length) this.onReset()
        },
        search() {
            SearchModel.list().then(data => {
                this.submitted = true
                this.searchResult = data
            })
        }
    }
})