<!-- KategoriList.vue -->
<template>
    <div>
      <ul>
        <li v-for="kategori in kategoriList" :key="kategori.kategoriId">
          <h2>{{ kategori.kategori }}</h2>
          <p>{{ kategori.keterangan }}</p>
  
          <!-- Form tambah barang -->
          <AddBarangForm @barangAdded="tambahBarang(kategori.kategoriId, $event)" />
  
          <!-- Daftar barang -->
          <BarangList
            :barangList="kategori.barang"
            @deleteBarang="deleteBarang(kategori.kategoriId, $event)"
          />
  
          <!-- Tombol hapus kategori -->
          <button @click="deleteKategori(kategori.kategoriId)">Hapus Kategori</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import AddBarangForm from '~/components/AddBarangForm.vue';
  import BarangList from '~/components/BarangList.vue';
  
  export default {
    components: {
      AddBarangForm,
      BarangList
    },
    props: {
      kategoriList: {
        type: Array,
        required: true
      }
    },
    methods: {
      deleteKategori(kategoriId) {
        this.$emit('deleteKategori', kategoriId);
      },
      tambahBarang(kategoriId, newBarang) {
        this.$emit('tambahBarang', { kategoriId, newBarang });
      },
      deleteBarang(kategoriId, barangId) {
        this.$emit('deleteBarang', { kategoriId, barangId });
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styling untuk komponen KategoriList */
  </style>
  