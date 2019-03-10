<template>
<div class="change-lang-select">
  <el-select v-model="value" :placeholder="curLang" size="mini" @change="setLang">
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>
</div>
</template>

<script>
  export default {
    data() {
      return {
        options: [{
          value: 'Русский',
          label: 'Русский'
        }, {
          value: 'English',
          label: 'English'
        }],
        value: ''
      }
    },
    computed: {
        curLang() {
            return localStorage.lang == 'en' ? 'English' : 'Русский';
        }
    },
    methods: {
        setLang(value) {
            value == 'Русский' ? localStorage.lang = 'ru' : localStorage.lang = 'en';
            this.$store.dispatch('setLang', localStorage.lang);
        }
    }
  }
</script>

<style>
.change-lang-select {
    position: absolute;
    top: 15px;
    width: 120px;
    right: 10px;
}
.el-select {
    padding: 0;
}
</style>