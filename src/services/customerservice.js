import Api from '@/services/api'
export default {
  fetchCustomers () {
    return Api().get('/customers')
  },
  incrementUpvotes (id) {
    return Api().put(`/customers/${id}/vote`)
  }
}
