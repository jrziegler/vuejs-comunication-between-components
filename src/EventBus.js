import Vue from 'vue'

export default new Vue({
    methods: {
        setSelectedUser(user) {
            this.$emit('userSelected', user)
        },
        onSelectedUser(callback) {
            this.$on('userSelected', callback)
        }
    }
})