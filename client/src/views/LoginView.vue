<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-1/3">
      <BasePanel title="Ciciara Real Time Chat">
        <template #body>
          <BaseForm ref="form" submit-text="login" @submit="performLogin">
            <template #content>
              <BaseInput
                name="username"
                v-model="username"
                icon="user"
                required
              />
              <BaseSelect
                name="room"
                :options="rooms"
                v-model="room"
                icon="comments"
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
import { mapActions } from "vuex";
import BasePanel from "@/components/base/BasePanel.vue";
import BaseForm from "@/components/base/BaseForm.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";


export default {
  name: "LoginView",

  components: {
    BasePanel,
    BaseForm,
    BaseInput,
    BaseSelect
  },

  data: () => ({
    username: "",
    room: "",
    rooms: [
      { value: 1, text: "lounge" },
      { value: 2, text: "board" }
    ]
  }),

  sockets: {
    welcome(message) {
      console.log(message);
    }
  },

  methods: {
    performLogin() {
      this
        .login({ username: this.username, channel: this.channel })
        .then(() => { console.log("promise done") })
        .finally(() => this.$refs.form.changeState("submitted"))
    },

    ...mapActions(["login"])
  }
}
</script>
