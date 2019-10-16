<template>

  <div class="update_form">
    <h3> {{booking.name}} </h3>
    <h3> {{booking.email}} </h3>
    <form id="booking-form" v-on:submit="handleSubmit">
      <h2>Update Checked in Status</h2>
      <div class="formWrap">
        <label for="check">Status:</label>
        <input type="radio" name="check" value="checked-in">Checked-in<br>
        <input type="radio" name="check" value="checked-out">Checked-out<br>
      </div>
      <input type="submit" value="Save" id="save"/>

    </form>
  </div>
</template>

<script>
import {eventBus} from '../main.js';
import HotelService from '../services/HotelService.js';
export default {
  name: 'updated-form',
  props: ['booking'],
  methods: {
    handleSubmit(event){
			event.preventDefault();

			const info = {
				name: this.name,
				email: this.email,
				check: this.check
			};
    },

    // handleUpdate(booking) {
    //   eventBus.$emit('show-update-form', booking)
      // HotelService.updateBooking(id)
      // .then(response => eventBus.$emit('booking-update', id));

  }
}
</script>

<style lang="css" scoped>
.update_form{
  position: absolute;
  margin-left: 78%;
  margin-top: 1%;
  margin-right: 10px;
}
</style>
