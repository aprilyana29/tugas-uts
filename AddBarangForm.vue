<!-- AddBarangForm.vue -->
<template>
  <div>
    <h2>Tambah Barang</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="namaBarang">Nama Barang:</label>
        <input type="text" id="namaBarang" v-model="namaBarang">
      </div>
      <div>
        <label for="harga">Harga:</label>
        <input type="number" id="harga" v-model.number="harga">
      </div>
      <div>
        <label for="jumlah">Jumlah:</label>
        <input type="number" id="jumlah" v-model.number="jumlah">
      </div>
      <button type="submit">Tambah</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      namaBarang: '',
      harga: null,
      jumlah: null
    };
  },
  methods: {
    submitForm() {
      const newBarang = {
        nama_barang: this.namaBarang,
        harga: this.harga,
        jumlah: this.jumlah
      };
      this.$emit('barangAdded', newBarang);
      this.resetForm();
    },
    resetForm() {
      this.namaBarang = '';
      this.harga = null;
      this.jumlah = null;
    }
  }
};
</script>

<style scoped>
/* Styling untuk form tambah barang */
</style>
