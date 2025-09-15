<template>
  <vee-form :validation-schema="schema" validate-on-change="true">
    <div class="center">
      <img src="/src/assets/images/logo.png" alt="Introlines cargo" />
    </div>
    <h4>{{ title }} Login</h4>
    <div class="form-items-container">
      <alert v-show="error" class="my-4">
        {{ error }}
      </alert>
      <div class="form-label">
        <label for="email">Email</label>
        <vee-field id="email" name="email" type="email" placeholder="Email" />
        <div class="error">
          <vee-error-message name="email" as="p" />
        </div>
      </div>
      <div class="form-input-label">
        <label for="password">Password</label>
        <vee-field id="password" name="password" type="password" placeholder="Password" />
        <div class="error">
          <vee-error-message name="password" as="p" />
        </div>
      </div>
      <Button type="submit" class="my-1 mb-4">Login</Button>
    </div>
  </vee-form>
</template>
<script>
import { loginSchema } from '@/validations';
import Button from '@/components/common/button.vue';
import Alert from '@/components/common/alert.vue';
import { Form as VeeForm, Field as VeeField, ErrorMessage as VeeErrorMessage } from 'vee-validate';
export default {
  name: 'LoginForm',
  components: { Button, Alert, VeeForm, VeeField, VeeErrorMessage },
  props: {
    title: {
      type: String,
      required: true
    },
    error: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      schema: loginSchema
    };
  }
};
</script>
<style lang="scss" scoped>
form {
  min-width: 24rem;
  min-height: 25rem;
  padding: 1.2rem 2.4rem;
  border-radius: 0.5rem;
  background: #ffffff;
  box-shadow: 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 0 #0000, 0 1px 3px 0 rgba(0, 0, 0, 0.1),
    0 1px 2px -1px rgba(0, 0, 0, 0.1);
  > div > img {
    margin: 0 auto;
    width: 100px;
    height: 100px;
  }
  h4 {
    text-align: center;
  }
  .form-items-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2;
  }
}
</style>
