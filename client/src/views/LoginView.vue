<template>
  <div class="flex justify-center items-center h-full">
    <div class="w-1/3">
      <BasePanel title="Ciciara Real Time Chat">
        <template #body>
          <ServerStatus class="text-sm" />

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
                v-model="room"
                icon="comments"
                :options="rooms"
                :option-label="room => room.name"
                :option-key="room => room.id"
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
import { mapActions, mapState } from "vuex";
import ServerStatus from "@/components/ServerStatus.vue";
import BasePanel from "@/components/base/BasePanel.vue";
import BaseForm from "@/components/base/BaseForm.vue";
import BaseInput from "@/components/base/BaseInput.vue";
import BaseSelect from "@/components/base/BaseSelect.vue";

export default {
  name: "LoginView",

  components: {
    ServerStatus,
    BasePanel,
    BaseForm,
    BaseInput,
    BaseSelect
  },

  data: () => ({
    username: "",
    room: ""
  }),

  methods: {
    performLogin() {
      this.login({ username: this.username, room: this.room })
        .then(({ data: { user, room } }) => {
          this.$socket.client.emit("room:join", { user: user.username, room });
          this.$router.push({ name: "room", params: { room: this.room } });
        })
        .finally(() => this.$refs.form.changeState("submitted"));
    },

    ...mapActions(["login"])
  },

  computed: {
    ...mapState(["user", "rooms"])
  }
};
</script>
