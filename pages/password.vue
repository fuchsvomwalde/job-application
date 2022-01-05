<template>
  <div class="content">
    <section class="first max-height pa-0">
      <v-container class="container max-height">
        <v-text-field
          class="pw-input"
          v-model="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          name="input"
          :label="$t('input')"
          :error="error"
          :hint="error ? $t('wrongPassword') : ''"
          @click:append="show = !show"
        />
        <v-btn color="primary" depressed x-large @click="loginUser()">
          {{ $t('button') }}
        </v-btn>
      </v-container>
    </section>
  </div>
</template>

<script>
export default {
  components: {},
  data: () => ({
    password: '',
    show: false,
    error: false,
    isAuthorised: false
  }),
  computed: {
    redirectPath() {
      const path = this.$route.query.previousPath
      return path || this.localePath('/')
    }
  },
  mounted() {
    this.isAuthorised = this.$passwordProtect.isAuthorised()
  },
  methods: {
    loginUser() {
      this.$passwordProtect.authorise(this.password)
      this.isAuthorised = this.$passwordProtect.isAuthorised()
      this.error = !this.isAuthorised

      if (this.isAuthorised) {
        this.$router.push(this.redirectPath)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  height: calc(100% - 60px);
}
section {
  padding: 144px 0;
  &.first {
    background: linear-gradient(rgb(355, 255, 255) 0%, rgb(239, 243, 245) 80%);
  }
  &.second {
    background: linear-gradient(rgb(239, 243, 245) 0%, rgb(244, 248, 250) 100%);
  }
  &.third {
    background: linear-gradient(180deg, #0c344b 0%, #295166 100%);
  }
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
.pw-input {
  margin-right: 16px;
}
.max-height {
  height: 100%;
}
</style>

<i18n>
{
  "en": {
    "input": "Password",
    "button": "Submit",
    "wrongPassword": "The entered password is not correct."
  },
  "de": {
    "input": "Passwort",
    "button": "Bestätigen",
    "wrongPassword": "Das eingegebene Password ist nicht korrekt."
  }
}
</i18n>
