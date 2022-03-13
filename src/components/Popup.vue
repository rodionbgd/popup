<template>
  <div v-if="isOpen" class="backdrop" @click="close">
    <div class="popup" @click.stop>
      <h1>Attention</h1>
      <hr />
      <slot></slot>
      <hr />
      <div class="footer">
        <slot name="actions" :close="close" :confirm="confirm"> </slot>
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

<style scoped>
.popup {
  top: 50px;
  padding: 20px;
  left: 50%;
  transform: translateX(-50%);
  position: fixed;
  z-index: 10;
  background-color: white;
}

.backdrop {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}
</style>
