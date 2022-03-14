<template>
  <button
    type="button"
    class="link-1"
    id="m1-c"
    @click="popupConfirmed"
    :class="{ 'opacity-50': isPopupOpen }"
    :disabled="isPopupOpen"
  >
    Open
  </button>
  <Popup ref="popup">
    <template #actions="{ close, confirm }">
      <input
        class="modal__btn"
        type="text"
        :placeholder="$options.CONFIRMATION_TEXT"
        v-model="confirmation"
      />
      &nbsp;
      <button
        class="modal__btn"
        :class="{ 'opacity-50': !isConfirmationCorrect }"
        :disabled="!isConfirmationCorrect"
        @click="confirm"
      >
        Ok &rarr;
      </button>
      <button class="modal__btn link-2" @click="close"></button>
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
    async popupConfirmed() {
      this.isPopupOpen = true;
      this.confirmation = "";

      const result = await this.$refs.popup.open();
      this.isPopupOpen = false;
      if (result) {
        alert("Stop eating!");
      }
    },
  },
};
</script>

<style scoped></style>
