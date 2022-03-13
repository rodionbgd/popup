<template>
  <button @click="openPopup">Open window</button>
  <Popup
    :is-open="isPopupOpen"
    @ok="popupConfirmed"
    @close="isPopupOpen = false"
  >
    You opened the modal.
    <template #actions="{ confirm }">
      Write
      <input
        type="text"
        :placeholder="$options.CONFIRMATION_TEXT"
        v-model="confirmation"
      />
      &nbsp;
      <button :disabled="!isConfirmationCorrect" @click="confirm">Ok</button>
    </template>
  </Popup>
</template>

<script>
import Popup from "./components/Popup.vue";

export default {
  components: { Popup },

  CONFIRMATION_TEXT: "CONFIRM",

  data() {
    return {
      isPopupOpen: false,
      confirmation: "",
    };
  },

  computed: {
    isConfirmationCorrect() {
      return this.confirmation === this.$options.CONFIRMATION_TEXT;
    },
  },

  methods: {
    openPopup() {
      this.isPopupOpen = true;
      this.confirmation = "";
    },

    popupConfirmed() {
      alert("Confirmed");
      this.isPopupOpen = false;
    },
  },
};
</script>

<style scoped></style>
