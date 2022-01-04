<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      class="px-6"
      height="144"
      fixed
      app
      elevation="10"
    >
      <v-container>
        <v-layout justify-center align-center>
          <img :src="require('~/static/logo.svg')" height="32px" width="32px" />
          <span class="ml-2 name">{{ $t('title') }}</span
          >&nbsp;
          <span class="mr-2 secondaryTitle">{{
            $t('secondaryTitle').toUpperCase()
          }}</span>
          <v-spacer />
          <v-spacer />
          <v-btn
            v-if="!isMobile"
            :x-large="!isMobile"
            class="mx-4 text--secondary"
            href="https://github.com/fuchsvomwalde/job-application"
            target="_blank"
            depressed
          >
            <img src="~/static/github.svg" class="mr-3" />
            {{ $t('viewOnGH') }}
          </v-btn>
          <v-menu transition="scale-transition" origin="top center">
            <template v-slot:activator="{ on }">
              <v-btn :small="isMobile" fab depressed v-on="on">
                <v-icon v-if="!isMobile">mdi-translate</v-icon>
                <v-icon v-if="isMobile">mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                @click="onSetNewLocale($i18n.locale === 'de' ? 'en' : 'de')"
              >
                <v-list-item-title>
                  {{ $t($i18n.locale === 'de' ? 'switch2en' : 'switch2de') }}
                </v-list-item-title>
              </v-list-item>
              <v-list-item
                v-if="isMobile"
                href="https://github.com/fuchsvomwalde/job-application"
                target="_blank"
              >
                <v-list-item-title>
                  {{ $t('viewOnGH') }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-layout>
      </v-container>
    </v-app-bar>
    <v-content>
      <nuxt />
      <v-footer class="white--text">
        <v-container>
          <v-layout justify-start align-center>
            <span>&copy; 2022</span>
            <v-spacer></v-spacer>
            <span class="handscript start">{{ $t('sloganBeforeHeart') }}</span>
            <v-img
              class="mx-1 flex-grow-0 heartbeat"
              :src="require('~/static/icon-heart.svg')"
              height="24"
              width="24"
              contain
            >
            </v-img>
            <span class="handscript end">{{ $t('sloganAfterHeart') }}</span>
            <v-spacer v-if="!isMobile"></v-spacer>
          </v-layout>
        </v-container>
      </v-footer>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false,
      clipped: false
    }
  },
  mounted() {
    // set initial locale
    this.setHTMLLocale(this.$i18n.locale)

    // reigster resize handler
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onSetNewLocale(lang) {
      // switch Vue locale
      this.$parent.$i18n.locale = lang

      // switch HTML doc locale
      this.setHTMLLocale(lang)

      // switch vuetify locale
      this.$vuetify.lang.current = lang
    },
    onResize() {
      this.isMobile = window.innerWidth <= 600
    },
    setHTMLLocale(lang) {
      document.querySelector('html').setAttribute('lang', lang)
    }
  }
}
</script>

<style scoped lang="scss">
$break-small: 600px;

// HEADER
.name,
.secondaryTitle {
  color: rgb(12, 52, 75);
  user-select: none;
  font-size: 18px;
  font-family: 'Open Sans';
  white-space: nowrap;
  &.name {
    letter-spacing: 0px;
    font-weight: 400;
  }
  &.secondaryTitle {
    letter-spacing: 1.5px;
    font-weight: 700;
  }
}

// FOOTER
footer.v-footer {
  background: #082333;
  @media screen and (max-width: $break-small) {
    font-size: 10px;
  }
  .handscript {
    font-family: 'Indie Flower', cursive;
    letter-spacing: 1.5px;
    &.start {
      text-align: right;
    }
    &.end {
      text-align: left;
    }
  }
  .heartbeat {
    animation: heartbeat 1s infinite ease-in-out;
  }
}
@keyframes heartbeat {
  0% {
    transform: scale(0.75);
  }
  10% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(1);
  }
  40% {
    transform: scale(0.75);
  }
  60% {
    transform: scale(1);
  }
  80% {
    transform: scale(0.75);
  }
  100% {
    transform: scale(0.75);
  }
}
</style>

<i18n>
{
  "en": {
    "secondaryTitle": "Portfolio",
    "title": "Jascha A. Quintern",
    "switch2en": "Switch to EN",
    "switch2de": "Switch to DE",
    "viewOnGH": "View on GitHub",
    "sloganBeforeHeart": "An application made with",
    "sloganAfterHeart": "by Jascha A. Quintern"
  },
  "de": {
    "secondaryTitle": "Portfolio",
    "title": "Jascha A. Quintern",
    "switch2en": "Umschalten auf EN",
    "switch2de": "Umschalten auf DE",
    "viewOnGH": "Auf GitHub ansehen",
    "sloganBeforeHeart": "Eine Bewerbung gemacht mit Liebe",
    "sloganAfterHeart": "von Jascha A. Quintern"
  }
}
</i18n>
