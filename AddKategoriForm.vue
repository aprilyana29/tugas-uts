<!-- AddKategoriForm.vue -->
<template>
  <div>
    <h2>Tambah Kategori</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="kategori">Nama Kategori:</label>
        <input type="text" id="kategori" v-model="kategori">
      </div>
      <div>
        <label for="keterangan">Keterangan:</label>
        <input type="text" id="keterangan" v-model="keterangan">
      </div>
      <button type="submit">Tambah</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      kategori: '',
      keterangan: ''
    };
  },
  methods: {
    submitForm() {
      const newKategori = {
        kategori: this.kategori,
        keterangan: this.keterangan
      };
      this.$emit('kategoriAdded', newKategori);
      this.resetForm();
    },
    resetForm() {
      this.kategori = '';
      this.keterangan = '';
    }
  }
};
</script>

<style scoped>
/* Styling untuk form tambah kategori */
</style>
