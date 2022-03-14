<template>
  <div class="box" v-if="isOpen">
    <div class="modal-container" @click="close">
      <div class="modal" @click.stop>
        <h1 class="modal__title">Cookies</h1>
        <div class="modal__text">
          <img
            width="30"
            src="https://cdn-icons-png.flaticon.com/512/1047/1047711.png"
            alt="cookies-img"
          />
          <span> Confirm eating a cookie</span>
        </div>
        <slot name="actions" :close="close" :confirm="confirm"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Popup",

  data() {
    return {
      isOpen: false,
    };
  },

  confirmedPopupPromise: null,
  mounted() {
    document.addEventListener("keydown", this.closeByEsc);
  },

  beforeUnmount() {
    document.addEventListener("keydown", this.closeByEsc);
  },

  methods: {
    open() {
      let resolve;
      const popupPromise = new Promise((ok) => {
        resolve = ok;
      });
      this.isOpen = true;
      this.$options.confirmedPopupPromise = { resolve };
      return popupPromise;
    },

    confirm() {
      this.$options.confirmedPopupPromise.resolve(true);
      this.isOpen = false;
    },

    close() {
      this.$options.confirmedPopupPromise.resolve(false);
      this.isOpen = false;
    },

    closeByEsc(e) {
      if (this.isOpen && e.code === "Escape") {
        this.close();
      }
    },
  },
};
</script>
