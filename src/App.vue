<template>
  <button
    type="button"
    class="link-1"
    id="m1-c"
    @click="openPopup"
    :class="{ 'opacity-50': isPopupOpen }"
    :disabled="isPopupOpen"
  >
    Open
  </button>
  <Popup
    :is-open="isPopupOpen"
    @ok="popupConfirmed"
    @close="isPopupOpen = false"
  >
    You opened the modal.
    <template #actions="{ confirm }">
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
      this.isPopupOpen = false;
    },
  },
};
</script>

<style scoped></style>
