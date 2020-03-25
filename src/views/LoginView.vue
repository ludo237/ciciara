<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-1/3">
      <BasePanel title="Ciciara Real Time Chat">
        <template #body>
          <BaseForm ref="form" submit-text="login" @submit="login">
            <template #content>
              <BaseInput
                name="username"
                v-model="username"
                icon="user"
                required
              />
              <BaseInput
                type="password"
                name="password"
                icon="lock"
                v-model="password"
                required
              />
            </template>
          </BaseForm>
        </template>
      </BasePanel>
    </div>
  </div>
</template>

<script>
import BasePanel from "@/components/base/BasePanel.vue";
import BaseForm from "@/components/base/BaseForm.vue";
import BaseInput from "@/components/base/BaseInput.vue";

export default {
  name: "LoginView",

  components: {
    BasePanel,
    BaseForm,
    BaseInput
  },

  data: () => ({
    username: "",
    password: "",
  }),

  methods: {
    login() {
      console.log("login action here");

      setTimeout(() => {
        this.$refs.form.changeState("submitted");
      }, 3000);
    }
  }
}
</script>
