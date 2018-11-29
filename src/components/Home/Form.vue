<template>
  <div class="form">
    <h1>Vue JS Form</h1>
    <vue-form
      ref="form"
      :model = "form"
      :rules = "formRules"
      style="width: 100%;"
      label-width="150px">
      <vue-form-item
        field="email"
        label="Email">
        <vue-input
          v-model="form.email"
          style="width: 100%"/>
      </vue-form-item>
      <vue-form-item
        field="password"
        label="Password">
        <vue-input
          v-model="form.password"/>
      </vue-form-item>
      <vue-form-item
        field="delivery"
        label="Delivery">
        <vue-radio
          v-model="form.delivery"
          value="1">Radio 1
        </vue-radio>
        <vue-radio
          v-model="form.delivery"
          value="2">Radio 2
        </vue-radio>
      </vue-form-item>
      <vue-form-item
        field="city"
        label="City">
        <vue-select
          v-model="form.city"
          :data="options"
          placeholder="Select">
          <vue-option
            v-for="i in options"
            :key="i.value"
            :value="i.value"
            :label="i.label"/>
        </vue-select>
      </vue-form-item>
      <vue-form-item
        field="terms"
        label="Terms">
        <vue-checkbox
          v-model="form.terms">I'm agree
        </vue-checkbox>
      </vue-form-item>
      <vue-form-item>
        <vue-button
          @click="onReset">Reset
        </vue-button>
        <vue-button
          type="success"
          @click="onSubmit">Submit
        </vue-button>
      </vue-form-item>
    </vue-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      options: [ { label: 'City 1', value: 1 }, { label: 'City 2', value: 2 } ],
      form: {
        email: '',
        password: '',
        terms: false,
        delivery: '',
        city: ''
      },
      formRules: {
        email: [
          { required: true, message: 'Email is required' },
          { type: 'email', message: 'Email is not correct' }
        ],
        password: [
          { required: true, message: 'Password is required' },
          { min: 3, message: 'Password length must be greater than 3 characters' }
        ],
        terms: [
          { pattern: /true/, message: 'Terms is required' }
        ],
        delivery: [
          { required: true, message: 'Delivery is required' }
        ],
        city: [
          { required: true, message: 'City is required' }
        ]
      }
    }
  },
  methods: {
    async onSubmit () {
      try {
        await this.$refs.form.validate()
      } catch (err) {
        console.warn('Form is not valid')
      }
    },
    onReset () {
      for (let i in this.form) {
        i === 'terms' ? this.form[i] = false : this.form[i] = ''
      }
      this.$refs.form.resetValidation()
    }
  }
}
</script>

<style lang="scss">
/* write SCSS here */
@import '../../../assets/scss/form.scss'

</style>
