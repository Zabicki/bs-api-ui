<template>
  <div>
    <button class="action-button" @click="countEvents">Count Events</button>
    <button class="action-button" @click="startInvoicing">Start Invoicing</button>
    <button class="action-button" @click="startSynchronization">Start Synchronization</button>

    <div class="events-count" v-if="eventsCount !== null">
      <h3>Events count: {{ eventsCount }}</h3>
    </div>
  </div>
</template>

<style>
  .action-button {
    display: inline-block; /* Display buttons side by side */
    height: 50px;          /* Set the height of the button */
    line-height: 50px;     /* Align text vertically in the center */
    padding: 0 20px;       /* Add some horizontal padding to each button */
    margin-right: 10px;    /* Add some spacing to the right of each button */
    border-radius: 5px;    /* Optional: add a border radius for aesthetics */
    /* Other button styles can be added here */
  }
</style>

<script>
export default {
  props: {
    apiBase: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      eventsCount: null
    };
  },
  methods: {
    async countEvents() {
      try {
        const response = await fetch(`${this.apiBase}/count`);
        const data = await response.json();
        this.eventsCount = data.count;
      } catch (error) {
        console.error("Error fetching event count:", error);
      }
    },
    async startInvoicing() {
      try {
        await fetch(`${this.apiBase}/invoicing`, { method: "GET" });
      } catch (error) {
        console.error("Error starting invoicing:", error);
      }
    },
    async startSynchronization() {
      try {
        await fetch(`${this.apiBase}/synchronization`, { method: "GET" });
      } catch (error) {
        console.error("Error starting synchronization:", error);
      }
    }
  }
};
</script>