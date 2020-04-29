<template>
  <div class="content">
    <app-card title="Teste" label1="Nascimento" buttonValue="Clients" @action="buttonAction()"/>
    <div>
      <div class="table-header">
        <div>Nome</div>
        <div>Nascimento</div>
        <div>Profissão</div>
      </div>
      <div class="table-body" v-for="p in pessoas" v-bind:key="p.id">
        <span>{{p.nome}}</span>
        <span>{{p.nascimento}}</span>
        <span>{{p.profissao}}</span>
        <div>
          <span class="fas fa-edit" @click="edit(p)"></span>
          <span class="fas fa-trash" @click="remove(p)"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      nome: '',
      nascimento: '',
      profissao: '',
      id: 0,
      editId: 9999,
      pessoas: []
    }
  },
  methods: {
    buttonAction () {
      console.log('Ação realizada pelo component Clients.vue')
    },
    save () {
      var pessoa
      if (this.editId < this.id) {
        pessoa = this.pessoas.find(p => p.id === this.editId)
        var pessoaIndex = this.pessoas.indexOf(pessoa)
        pessoa.nome = this.nome
        pessoa.nascimento = this.nascimento
        pessoa.profissao = this.profissao
        this.pessoas[pessoaIndex] = pessoa
        this.editId = 9999
      } else {
        pessoa = {
          id: this.id,
          nome: this.nome,
          nascimento: this.nascimento,
          profissao: this.profissao
        }
        this.pessoas.push(pessoa)
        this.id = this.id + 1
      }
      this.nome = ''
      this.nascimento = ''
      this.profissao = ''
      console.log(this.pessoas)
    },
    remove (pessoa) {
      this.pessoas.splice(this.pessoas.indexOf(pessoa), 1)
    },
    edit (pessoa) {
      this.editId = pessoa.id
      this.nome = pessoa.nome
      this.nascimento = pessoa.nascimento
      this.profissao = pessoa.profissao
    },
    close () {
      this.mostrarCartao = false
    }
  }
}
</script>

<style>
.content {
    margin: 40px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

/* Table */

.table-header,
.table-body {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  padding: 5px 0px;
}

/* .table-body {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    align-items: center;
    padding: 5px 0px;
} */

/* Media Querys (Responsividade) */

@media only screen and (max-width: 1380px) {
  .content {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
