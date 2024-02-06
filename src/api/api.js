import axios from 'axios'

const apiCall = async (data) => {
    let pagesize = data.pagesize
    let page = data.page
    let fromDate = data.fromDate
    let toDate = data.toDate
    const url = `https://api.stackexchange.com/2.3/tags?page=${page}&pagesize=${pagesize}&fromdate=${fromDate}&todate=${toDate}&order=desc&sort=popular&site=stackoverflow`
    let response = await axios.get(url)
    if (response) return response.data
    else return 'error Found'
}

export default apiCall
