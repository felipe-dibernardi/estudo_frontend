<template>
  <div class="card" v-if="mostrarCartao">
    <div class="card-title">
      <span>{{title}}</span>
      <span class="fas fa-times" @click="close()"></span>
    </div>
    <div class="card-content">
      <input id="nome" v-model="nome" name="nome" class="input" type="text" placeholder="Nome" />
      <input
        id="nascimento"
        v-model="nascimento"
        name="nascimento"
        class="input"
        type="text"
        :placeholder="label1"
      />
      <input
        id="profissao"
        v-model="profissao"
        name="profissao"
        class="input"
        type="text"
        placeholder="Profissão"
      />
    </div>
    <div class="card-button">
      <app-button @action="save()" :value="buttonValue" mode="low" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mostrarCartao: true
    }
  },
  props: {
    title: String,
    label1: String,
    buttonValue: String
  },
  methods: {
    save () {
      console.log('Salvando dentro do card')
    },
    action () {
      console.log('Emitindo ação dentro do card')
      this.$emit('action')
    }
  }
}
</script>

<style>
/* Input */

.input {
  border: 0;
  border-bottom: 2px solid grey;
  padding-top: 15px;
  padding-left: 15px;
  padding-bottom: 10px;
  font-size: 16px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  background: #eee;
}

.input:focus {
  outline: none;
  border-bottom: 2px solid #5eba7d;
  background: #fff;
}

/* Card */

.card {
  width: 250px;
  height: 400px;
  background: lightgray;
  box-shadow: 5px 5px 10px #333;
  border-radius: 20px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 60px 280px 60px;
  /* transition: height 500ms ease; */
}

.card .input,
.card .button {
  opacity: 1;
  /* transition: opacity 500ms ease 150ms; */
}

/* .card:hover {
    height: 400px;
    transition: height 500ms ease;
} */

/* .card:hover .input, .card:hover .button {
    opacity: 1;
    transition: opacity 500ms ease 300ms;
} */

.card-title {
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  margin-left: 25px;
  margin-top: 15px;
  font-size: 20px;
  font-variant: small-caps;
}

.card-title .fas {
  float: right;
  margin-right: 25px;
  cursor: pointer;
}

.card-content {
  display: grid;
  align-items: center;
  justify-items: center;
}

.card-button {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;

  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
