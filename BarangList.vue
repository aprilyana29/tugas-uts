<template>
    <div>
      <h2>Daftar Barang</h2>
      <ul>
        <li v-for="barang in barangList" :key="barang.barangId">
          {{ barang.nama_barang }} - {{ barang.harga }} - {{ barang.jumlah }}
          <button @click="deleteBarang(barang.barangId)">Hapus</button>
        </li>
      </ul>
      <AddBarangForm @barangAdded="fetchBarang"/>
    </div>
  </template>
  
  <script>
  import AddBarangForm from './AddBarangForm'
  
  export default {
    components: {
      AddBarangForm
    },
    props: {
      kategoriId: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        barangList: []
      };
    },
    async mounted() {
      this.fetchBarang();
    },
    methods: {
      async fetchBarang() {
        this.barangList = await this.$axios.$get(`/kategori/${this.kategoriId}/barang`);
      },
      async deleteBarang(id) {
        await this.$axios.$delete(`/kategori/${this.kategoriId}/barang/${id}`);
        this.fetchBarang();
      }
    }
  }
  </script>
  