import axios from 'axios'

export default {
    getEmployees: function(amount){
        return axios.get(`https://randomuser.me/api/?results=${amount}&nat=us`)
    }
}