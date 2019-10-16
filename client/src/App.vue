<template>
  <div id="app">
    <h1>Bookings Management</h1>
    <!-- component to show if updated is present -->
    <updated-form :booking="selectedBooking" v-if="selectedBooking" />
    <hotel-form />
    <hotel-grid :bookings="bookings" />
  </div>
</template>

<script>
import HotelForm from './components/HotelForm.vue';
import HotelGrid from './components/HotelGrid.vue';
import { eventBus } from './main.js';
import HotelService from './services/HotelService.js';
import UpdateForm from './components/UpdateForm.vue';

export default {
  name: 'app',
  data () {
    return {
      bookings: [],
      selectedBooking: null
    }
  },
  components: {
    'hotel-form': HotelForm,
    'hotel-grid': HotelGrid,
    'updated-form': UpdateForm
  },
  mounted(){
    this.fetchData();

    eventBus.$on('booking-added', booking => this.bookings.push(booking));



    eventBus.$on('booking-deleted', id => {
      const index = this.bookings.findIndex(booking => booking._id === id);
      this.bookings.splice(index, 1);
    });

    eventBus.$on('show-update-form', booking => {
      this.selectedBooking = booking
    })
    // eventBus.$on('booking-update', id => {
    //   const index = this.bookings.findIndex(booking => booking._id === id);
      // this.bookings.splice(index, 1);
      // this.bookings[index].check = updatedCheck;
  },
  methods: {
    fetchData(){
        HotelService.getBookings()
        .then(bookings => this.bookings = bookings);
    }
  }
}
</script>

<style>
html {
  height: 100%;
}

body {
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
h1 {
  display: flex;
  justify-content: center;
}
</style>
