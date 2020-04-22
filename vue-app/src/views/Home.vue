<template>
  <div><Card :title="msg" label1="Nasc"/></div>
</template>

<script>
import Card from '../components/Card'

export default {
  components: {
    Card
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
