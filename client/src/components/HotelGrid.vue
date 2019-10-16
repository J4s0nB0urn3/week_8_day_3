<template>
  <div class="booking-grid">
    <div v-for="booking in bookings">
      <h2>{{booking.name}}</h2>
      <h3>{{booking.email}}</h3>
      <h3>{{booking.check}}</h3>
      <button v-on:click="handleDelete(booking._id)">Delete Booking</button>
      <button v-on:click="handleUpdate(booking)">Update Booking</button>
    </div>
  </div>
</template>

<script>

import {eventBus} from '../main.js'
import HotelService from '../services/HotelService.js'
// import HotelForm from './HotelForm.js'

export default {
  name: 'hotel-grid',
  props: ['bookings'],
  methods: {
    handleDelete(id) {
      HotelService.deleteBooking(id)
      .then(response => eventBus.$emit('booking-deleted', id));
    },
    // handleUpdate(id, payload) {
    //   HotelService.updateBooking(id, payload)
    //   .then(response => eventBus.$emit('booking-update', id));
    handleUpdate(booking) {
      eventBus.$emit('show-update-form', booking)
    },
  }
}
</script>



  <style lang="css" scoped>

    .booking-grid {
      background-color: #d9f8fa;
      padding: 20px;
      margin:20px;

    }
  </style>
