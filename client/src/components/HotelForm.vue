<template>
	<form id="booking-form" v-on:submit="handleSubmit">
		<h2>Add a Booking</h2>
		<div class="formWrap">
			<label for="name">Name:</label>
			<input type="text" id="name" v-model="name" required/>
		</div>
		<div class="formWrap">
			<label for="email">E-mail:</label>
			<input type="email" id="email" v-model="email" required/>
		</div>
		<div class="formWrap">
			<label for="check">Status:</label>
      <input v-model="check" type="radio" name="check" value="checked-in">Checked-in<br>
      <input v-model="check" type="radio" name="check" value="checked-out">Checked-out<br>
		</div>

		<input type="submit" value="Save" id="save"/>
	</form>
</template>

<script>
import { eventBus } from '../main';
import HotelService from '../services/HotelService';

export default {
	name: "hotel-form",
	data(){
		return {
			name: "",
			email: "",
			check: ""
		}
	},
	methods: {
		handleSubmit(event){
			event.preventDefault();

			const info = {
				name: this.name,
				email: this.email,
				check: this.check
			};

			HotelService.postBooking(info)
			.then(booking => {
					eventBus.$emit('booking-added', booking);
			});
		}
	}
}
</script>

<style lang="css" scoped>
h2 {
	margin: 10px 0;
	padding: 0;
}

form {
	width: 75%;
	margin: 0 auto;
  text-align: center;
	background: rgba(255, 255, 255, 0.7);
	padding: 20px;
	margin-bottom: 40px;
}

label {
	min-width: 100px;
	display: inline-block;
}

.formWrap {
	margin-bottom: 10px;
  display: flex;
  align-content: space-around;
}

input {
  margin-left: 10px;
  margin-right: 10px;
}
</style>
