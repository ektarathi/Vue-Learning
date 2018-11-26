<template>
  <div class="container">
    <div id="calculator">
      <input
        id="screen"
        v-model="message"
        type="text">
      <div class="buttons">
        <button
          class="button"
          @click="clear">{{ message == 0 ? 'AC' : 'C' }}</button>
        <button
          class="button"
          @click="inverse">+/-</button>
        <button
          class="button"
          @click="percentage">%</button>
        <button
          class="button"
          @click="operator('/')">/</button>
        <button
          class="button"
          @click="input('7')">7</button>
        <button
          class="button"
          @click="input('8')">8</button>
        <button
          class="button"
          @click="input('9')">9</button>
        <button
          class="button"
          @click="operator('*')">*</button>
        <button
          class="button"
          @click="input('4')">4</button>
        <button
          class="button"
          @click="input('5')">5</button>
        <button
          class="button"
          @click="input('6')">6</button>
        <button
          class="button"
          @click="operator('-')">-</button>
        <button
          class="button"
          @click="input('1')">1</button>
        <button
          class="button"
          @click="input('2')">2</button>
        <button
          class="button"
          @click="input('3')">3</button>
        <button
          class="button"
          @click="operator('+')">+</button>
        <button
          id="zero"
          class="button"
          @click="input('0')">0</button>
        <button
          class="button"
          @click="input('.')">.</button>
        <button
          class="button"
          @click="equal">=</button>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint brace-style: [2, "stroustrup"] */
/* eslint no-eval: 0 */
export default {
  data () {
    return {
      value: '',
      message: '0',
      equation: '',
      cal: ''
    }
  },
  methods: {
    input: function (num) {
      if (num === '.' && this.message.includes('.')) {
        return true
      }
      else if (this.message === '0') {
        this.message = num
        this.value = num
      }
      else {
        this.value += num
        this.message = this.value
      }
    },
    clear: function () {
      if (this.message === '0') {
        this.equation = ''
      }
      this.message = '0'
      this.value = ''
    },
    operator: function (opt) {
      this.cal = opt
      this.equation += this.value
      this.message = eval(this.equation).toString()
      this.equation = this.message
      this.equation += opt
      this.value = ''
      console.log(this.equation)
    },
    percentage: function () {
      this.equation = ''
      this.message = (this.message / 100).toString()
      this.value = this.message
    },
    inverse: function () {
      if (this.message === 0) {
        return false
      }
      this.equation = ''
      if (this.message[0] === '-') {
        this.message = this.message.substr(1)
      }
      else {
        this.message = '-' + this.message
      }
      this.value = this.message
    },
    equal: function () {
      if (this.equation === '') {
        return
      }
      if (this.cal !== '') {
        this.equation += this.message
      }
      this.message = eval(this.equation).toString()
      console.log((this.equation))
      this.value = ''
      this.cal = ''
      this.equation = this.message
    }
  }
}
</script>

<style lang="scss">
/* write SCSS here */
@import '../../../assets/scss/calculator.scss'

</style>
