<template>
  <div @click="action()"
      class="button"
      :class="{'primary': mode === 'high','secondary': mode === 'medium', 'third': mode === 'low'}">
        <span>{{value}}</span>
   </div>
</template>

<script>
export default {
  props: {
    value: String,
    mode: {
      type: String,
      default: 'high'
    }
  },
  methods: {
    action () {
      console.log('Dentro da action no Button')
      this.$emit('action')
    }
  }
}
</script>

<style>
/* Button */

.icon-button {
  margin: 5px;
  margin-right: 15px;
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: 0;
  background: #5f857b;
  color: #fff;
  box-shadow: 0px 3px 5px #333;
  cursor: pointer;
  outline: none;
}

.icon-button:active,
.button:active {
  box-shadow: inset 0px 3px 5px #333;
}

.icon-button:active .fas,
.button:active span {
  transform: translateY(1px);
}

.button {
  display: flex;
  align-items: center;
  justify-content: center;

  user-select: none;
  cursor: pointer;

  border-radius: 15px;
  width: 100px;
  height: 40px;
  font-variant: small-caps;
  box-shadow: 1px 2px 8px #333;
}

.primary {
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: animated-background 15s ease infinite;

  color: #fff;
}

.secondary {
  border: 1px solid green;
  background: #FFF;

  color: green
}

.third {
  box-shadow: none;
  background: transparent;

  color: blue
}

/* Animations */

@keyframes animated-background {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
