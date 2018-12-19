<template>
  <div class="hero">
    <h3 class="vue-title"><i class="fa fa-list" style="padding: 3px"></i>{{messagetitle}}</h3>
    <div id="app1">
      <v-client-table :columns="columns" :data="customers" :options="customers">
        <a slot="increase" slot-scope="props" class="fa fa-hand-o-left fa-2x" @click="increase(props.row._id)"></a>
      </v-client-table>
    </div>
  </div>
</template>

<script>
import CustomerService from '@/services/customerservice'
import Vue from 'vue'
import VueTables from 'vue-tables-2'

Vue.use(VueTables.ClientTable, {compileTemplates: true, filterByColumn: true})

export default {
  name: 'Customers',
  data () {
    return {
      messagetitle: ' Customers List ',
      customers: [],
      errors: [],
      columns: ['_id', 'customers_id', 'customers_name', 'phone', 'email', 'upvotes', 'increase'],
      options: {
        perPage: 10,
        headings: {
          _id: 'ID',
          customers_id: 'Customer ID',
          customers_name: 'Customer Name',
          phone: 'Phone',
          email: 'Email',
          upvotes: 'Upvotes'
        }
      }
    }
  },
  // Fetches Donations when the component is created.
  created () {
    this.loadCustomers()
  },
  methods: {
    loadCustomers: function () {
      CustomerService.fetchCustomers()
        .then(response => {
          // JSON responses are automatically parsed.
          this.customers = response.data
          console.log(this.donations)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    },
    increase: function (id) {
      CustomerService.incrementUpvotes(id)
        .then(response => {
          // JSON responses are automatically parsed.
          this.loadCustomers()
          console.log(response)
        })
        .catch(error => {
          this.errors.push(error)
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  #app1 {
    width: 60%;
    margin: 0 auto;
  }
  .vue-title {
    margin-top: 30px;
    text-align: center;
    font-size: 45pt;
    margin-bottom: 10px;
  }
</style>
