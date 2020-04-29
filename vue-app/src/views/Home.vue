<template>
  <div>
    <app-card :title="msg" label1="Nasc" buttonValue="Home"/>
    <app-button value="Botão 2" mode="low" @action="teste()"/>
  </div>
</template>

<script>

export default {
  methods: {
    teste () {
      alert('Chamando dentro do Home')
    }
  },
  data () {
    return {
      msg: 'Batata'
    }
  }
}
</script>

<style>
</style>
