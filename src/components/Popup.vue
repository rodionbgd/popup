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

  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },

  emits: {
    ok: null,
    close: null,
  },

  mounted() {
    document.addEventListener("keydown", this.closeByEsc);
  },

  beforeUnmount() {
    document.addEventListener("keydown", this.closeByEsc);
  },

  methods: {
    close() {
      this.$emit("close");
    },

    confirm() {
      this.$emit("ok");
    },

    closeByEsc(e) {
      if (this.isOpen && e.code === "Escape") {
        this.close();
      }
    },
  },
};
</script>
