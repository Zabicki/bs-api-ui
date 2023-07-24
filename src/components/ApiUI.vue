<template>
  <div class="container">
    <div class="action-container">
      <button class="action-button" @click="countEvents">Count Events</button>
      <div v-if="eventsCount !== null" class="response">
        Received events count: {{ eventsCount }}
      </div>
    </div>

    <div class="action-container">
      <button class="action-button" @click="startInvoicing">Start Invoicing</button>
      <div v-if="invoicingTime !== null" class="response">
        Invoicing process time: {{ invoicingTime }} seconds
      </div>
    </div>

    <div class="action-container">
      <button class="action-button" @click="startSynchronization">Start Synchronization</button>
      <div v-if="synchronizationTime !== null" class="response">
        Synchronization process time: {{ synchronizationTime }} seconds
      </div>
    </div>
  </div>
</template>


<style>
/* ... existing styles ... */

.container {
  display: flex;
  flex-direction: column;
}

.action-container {
  display: flex;
  align-items: center;  /* Vertically align items in the center */
  margin-bottom: 10px; /* Space between each button-response pair */
}

.action-button {
  margin-right: 20px;
  height: 50px;         /* Set a fixed height */
  width: 200px;         /* Set a fixed width */
  line-height: 50px;    /* Align text vertically in the center */
  text-align: center;   /* Center the button text horizontally */
  /* ... other existing styles ... */
}

.response {
  flex-grow: 1; /* Allow the response to take up the remaining horizontal space */
}

/* ... other styles ... */
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
      eventsCount: null,
      invoicingTime: null,
      synchronizationTime: null
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
        const response = await fetch(`${this.apiBase}/invoicing`, { method: "GET" });
        const data = await response.json();
        this.invoicingTime = data.processingTime;
      } catch (error) {
        console.error("Error starting invoicing:", error);
      }
    },

    async startSynchronization() {
      try {
        const response = await fetch(`${this.apiBase}/synchronization`, { method: "GET" });
        const data = await response.json();
        this.synchronizationTime = data.processingTime;
      } catch (error) {
        console.error("Error starting synchronization:", error);
      }
    }
  }
};
</script>