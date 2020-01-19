<template>
  <div class="content">
    <section class="first pa-0">
      <v-parallax
        class="py-12"
        :src="require('~/static/parallax-bgr.svg')"
        height="auto"
      >
        <v-container>
          <h1 class="my-2 text--primary">{{ $t('about') }}</h1>
          <p class="my-8 text--secondary">{{ getI18n(intro, $i18n.locale) }}</p>
          <v-row justify="center">
            <v-expansion-panels popout flat>
              <v-expansion-panel v-for="(argument, i) in args" :key="i">
                <v-expansion-panel-header hide-actions>
                  <template v-slot="{ open }">
                    <img :src="argument.icon" class="mr-4 flex-grow-0" />
                    <span class="panel-header text--secondary">
                      {{ getI18n(argument.title, $i18n.locale) }}
                    </span>
                    <v-spacer></v-spacer>
                    <img
                      src="~/static/arrow-down.svg"
                      :class="{
                        'panel-action': true,
                        open: open
                      }"
                    />
                  </template>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="small py-2 text--secondary">
                    {{ getI18n(argument.text, $i18n.locale) }}
                  </p>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-parallax>
    </section>
    <section class="second">
      <v-container>
        <h2 class="mb-12">{{ $t('portfolio') }}</h2>
        <v-layout row justify-center align-start wrap>
          <v-flex
            v-for="(project, i) in portfolio"
            :key="i"
            class="px-2 pb-4"
            xs12
            sm6
            md4
          >
            <v-card class="project-card" width="auto" flat>
              <v-img
                class="white--text align-end"
                :gradient="
                  `to bottom, ${hexToRgbA(
                    project.gradientColor,
                    0
                  )}, ${hexToRgbA(project.gradientColor, 0.2)}, ${hexToRgbA(
                    project.gradientColor,
                    0.8
                  )}`
                "
                height="200px"
                :src="project.src"
              >
                <v-card-title>
                  <h3>
                    {{ getI18n(project.title, $i18n.locale) }}
                  </h3>
                </v-card-title>
                <v-card-subtitle class="white--text">{{
                  getI18n(project.timeframe, $i18n.locale)
                }}</v-card-subtitle>
              </v-img>
              <v-card-text class="text--primary">
                <p class="small pa-0 ma-0 text--secondary">
                  {{ getI18n(project.text, $i18n.locale) }}
                </p>
              </v-card-text>
              <v-card-actions
                ><v-spacer></v-spacer>
                <v-menu transition="scale-transition" origin="top center">
                  <template v-slot:activator="{ on }">
                    <v-btn color="accent" text v-on="on"
                      >{{ $t('explore')
                      }}<v-icon small right>mdi-open-in-new</v-icon></v-btn
                    >
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(link, index) in project.links"
                      :key="index"
                      :href="link.href"
                      target="_blank"
                    >
                      <v-list-item-title>{{
                        getI18n(link.title, $i18n.locale)
                      }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
    <section class="third">
      <v-container>
        <h2 class="white--text mb-12">
          {{ $t('links') }}
        </h2>
        <v-layout row justify-center align-start wrap>
          <v-flex
            v-for="(profile, i) in profiles"
            :key="i"
            class="px-2 pb-4"
            xs12
            sm6
            md4
          >
            <v-card
              :color="profile.color"
              :href="profile.href"
              target="_blank"
              dark
              ripple
            >
              <div class="d-flex flex-no-wrap justify-space-between">
                <div>
                  <v-card-title>
                    <h3>
                      {{ getI18n(profile.title, $i18n.locale)
                      }}<v-icon right>mdi-open-in-new</v-icon>
                    </h3>
                  </v-card-title>
                  <v-card-subtitle>{{
                    getI18n(profile.subtitle, $i18n.locale)
                  }}</v-card-subtitle>
                </div>
                <v-avatar class="ma-3" size="125" tile>
                  <v-img :src="profile.img"></v-img>
                </v-avatar>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>

<script>
import hexToRgbA from '~/utils/color'
// import Logo from '~/components/Logo.vue'
// import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  components: {
    // Logo,
    // VuetifyLogo
  },
  data: () => ({
    intro: {
      de:
        'Dies ist keine gewöhnliche Bewerbung auf die Rolle eines Lead Designers. Ihr werdet hier keine sonst üblichen Dribble Portfolios oder klassischen Designstudien finden. Also was soll das ganze? Seit nun über 5 Jahren arbeite ich in einer hybriden Rolle aus Designer und Entwickler mit Gesamtverantwortung über beide Bereiche. Ihr könnt mich als Möglichen Bewerber für eine reine Designer-, wie auch eine reine Entwickler-Rolle betrachten, doch ich möchte euch hier meinen Mehrwert als Designer mit starkem Tech-Hintergrund darlegen und euch so auch einen Einblick geben wie ich gerne meine Rolle bei Prisma interpretieren würde.',
      en:
        "This is not an ordinary application for the role of Lead Designer. You won't find any of the usual dribble portfolios or classic design studies here. So what's the point? For over 5 years now I have been working in a hybrid role of designer and developer with overall responsibility for both areas. You can consider me as a possible candidate for a designer-only role as well as a developer-only role, but I would like to show you my added value as a designer with a strong tech background and give you an insight into how I would like to interpret my role at Prisma."
    },
    args: [
      {
        title: {
          de: 'Pragmatisches Design mit Liebe',
          en: 'Pragmatic design with love'
        },
        icon: require('~/static/love.svg'),
        text: {
          de:
            'Ich will ganz transparent zu euch sein, ich habe keinen akademischen Hintergrund im Design-Bereich. All meine kreativen Fertigkeiten und mein Wissen über Design-Prozesse habe ich mir über zwei Jahrzehnte rein autodidaktisch und innerhalb der Praxis angeeignet. Alle für ein Unternehmen und die Produktentwicklung wichtigen Bestandteile gehören jedoch zu meinem Grundlagenwissen. Angefangen von der Aufgabe aus Unternehmenswerten eine klare und markante Designsprache zu schaffen, über Design-Guides für digitale- wie analoge Inhalte, UI Mockups, hinzu kreativen Schaffungsprozessen wie Design-Thinking sind mir keine Erfahrung ausgeblieben. Was mich in allen Tätigkeiten hierbei stets begleitet hat ist klarer Pragmatismus, dabei bevorzuge ich die Möglichkeit früh und öfter über Ergebnisse zu iterieren als ein Design im Stillen zu lange zu perfektionieren. Prismas Designsprache hat mich in Vergangenheit in besonderem Maße durch seine Einfachheit und Klarheit angesprochen, nein wirklich ich liebe es. Das Richtige Maß an Kontinuität und Evolution durch stetiges Hinterfragen zu finden ist eine der spannenden Herausforderungen die mich reizen.',
          en:
            "I want to be completely transparent to you, I have no academic background in design. All my creative skills and my knowledge of design processes I have acquired over two decades purely autodidactically and within practice. However, all components that are important for a company and product development are part of my basic knowledge. Starting with the task of creating a clear and distinctive design language based on corporate values, design guides for digital and analogue content, UI mockups, and creative creation processes such as design thinking, are part of my experience. What has always accompanied me in all my activities is clear pragmatism, and I prefer the possibility of iterating on results early and more often than silently perfecting a design for too long. Prisma's design language has appealed to me in the past especially through its simplicity and clarity, no really I love it. Finding the right degree of continuity and evolution through constant questioning is one of the exciting challenges that appeal to me."
        }
      },
      {
        title: {
          de: 'Enge Verzahnung von Design und Entwicklung',
          en: 'Close integration of design and development'
        },
        icon: require('~/static/intersection.svg'),
        text: {
          de:
            'Anders als bei der Erstellung von Design-Templates für Powerpoint oder die Gestaltung für den Print-Bereich ist die Kollaboration zwischen Design und Entwicklung für die Produktentwicklung besonders von Bedeutung. Zu Wissen welche Möglichkeiten mit einem Web-Framework gegeben sind und wie Web-Entwicklung funktioniert ist von erheblichem Vorteil um nicht nur liebevolle sondern auch technisch durchdachte UI-Kompenenten und/oder Webdesigns zu entwerfen. In meinen 3 Jahren bei PulseShift habe ich parallel als Auftragsentwickler UI-Komponenten gebaut. Von Designern schlecht durchdachte Komponenten, vernachlässigte Randfälle und wenig Verständnis für die Web-Entwicklung waren Hauptursachen für hohe Entwicklungs- und Testaufwände. Ich kenne den Prozess bereits von beiden Seiten, meine UI Mockup entstehen daher meistens bereits mit dem Code zur Umsetzung in Gedanken.',
          en:
            'In contrast to the creation of design templates for PowerPoint or the design for print, the collaboration between design and development is particularly important for product development. Knowing which possibilities are given with a web framework and how web development works is of considerable advantage to create not only delightful but also technically well thought-out UI components and/or web designs. During my 3 years at PulseShift I have been building UI components as a contract developer. Components poorly thought out by designers, overlooked edge cases and little understanding of web development were the main reasons for high development and testing efforts. I already know the process from both sides, so my UI mockups are usually created with the code for implementation in mind.'
        }
      },
      {
        title: {
          de: 'Über eine gute Integration hinaus: Design-Systeme und mehr.',
          en: 'Beyond good integration – Design-Systems and more'
        },
        icon: require('~/static/integration.svg'),
        text: {
          de:
            'Adobe XD, aber auch Sketch/Figma/etc. in Kombination mit Zeplin haben die Schnittstelle zwischen Design und Entwicklung bereits nachhaltig verändert. Der Übergang wird reibungsfreier und ist besser integriert als je zu vor. Diese Schnittstelle noch weiter zu denken und zu optimieren ist ein Bereich der mich auf besondere Art und Weise  reizt. Design-Systeme sind hierbei eine von vielen neuen Domänen um diesen Bedarf zu adressieren. Design-Systeme sind nicht zu verwechseln mit Design-Guides oder Component-Libraries sondern beschreiben eine technische Implementierung eines Design-Guides. Dies kann in Form einer Mikroservice API sein, oder eines low-level SDK zur Component Entwicklung. Ziel ist immer das selbe; die Produktentwicklung zu beschleunigen und real-time Rollouts von Design-Update zu ermöglichen. Dies soll ein Beispiel von vielen sein dessen Mehrwert und Potenziale ich gerne langfristig bei Prisma ergründen würde.',
          en:
            'Adobe XD, but also Sketch/Figma/etc. in combination with Zeplin have already changed the interface between design and development. The transition is smoother and better integrated than ever before. To think this interface even further and to optimize it is an area that appeals to me in a special way. Design systems are one of many new domains to address this need. Design systems are not to be confused with design guides or component libraries but describe a technical implementation of a design guide. This can be in the form of a microservice API, or a low-level SDK for component development. The goal is always the same; to accelerate product development and enable real-time rollouts of design updates. This is just one of many examples of the added value and potential I would like to explore in the long term with Prisma.'
        }
      }
    ],
    profiles: [
      {
        title: { de: 'LinkedIn', en: 'LinkedIn' },
        subtitle: {
          de:
            'Finde die bisherigen Stationen meines Lebens, haupt- wie ehrenamtliche.',
          en:
            'Find the stations of my life so far, both full-time and voluntary.'
        },
        href: 'https://de.linkedin.com/in/jascha-a-quintern-0290ba91',
        color: 'accent',
        img: require('~/static/cv.svg')
      },
      {
        title: { de: 'GitHub', en: 'GitHub' },
        subtitle: {
          de:
            'Leider befindet sich nur ein Bruchteil meines Schaffens auf GitHub. Dennoch viel Spaß beim durchstöbern meiner unterschiedlichsten kleinen Nebenprojekte.',
          en:
            'Unfortunately only a fraction of my work is on GitHub. But have fun browsing through my various little side projects.'
        },
        href: 'https://github.com/fuchsvomwalde',
        color: 'secondary',
        img: require('~/static/code.svg')
      },
      {
        title: { de: 'Homepage', en: 'Homepage' },
        subtitle: {
          de:
            'Meine digitale Spaß-Visitenkarte: Eine Linkliste verschiedener Onlineprofile.',
          en:
            'My digital fun business card: A link list of different online profiles.'
        },
        href: 'https://jascha-quintern.de/',
        color: 'success',
        img: require('~/static/website.svg')
      }
    ],
    portfolio: [
      {
        title: { de: 'PulseShift', en: 'PulseShift' },
        src: require('~/static/bgr_purple.jpg'),
        gradientColor: 'primary',
        timeframe: { de: '2016-2019', en: '2016-2019' },
        text: {
          de:
            'Als Mitgründer von PulseShift war ich verantwortlich für alle Design und Frontend-Themen unserer Cloud-Lösungen: UI/UX Konzeption und Design sowie Architektur und Implementierung des technischen Frontends. Da PulseShift nun Bestandteil der CAMELOT MC ist, existieren hier nur sehr eingeschränkt öffentlich zugängliche Ressourcen. Eine Demo Anwendung unseres Kernproduktes und ein nicht in Produktion gegangenes Mockup stehen jedoch zur Verfügung um einen Ausschnitt meiner Tätigkeiten aus diesen dreieinhalb Jahre zu erhalten.',
          en:
            'As co-founder of PulseShift, I was responsible for all design and front-end topics of our cloud solutions: UI/UX conception and design as well as architecture and implementation of the technical frontend. Since PulseShift is now part of CAMELOT MC, there are only very limited public resources available here. However, a demo application of our core product and a mockup that has not gone into production are available to get an impression of my activities during these three and a half years.'
        },
        showtext: false,
        links: [
          {
            title: {
              de: 'Umfrage App (React-App im Demo-Mode)',
              en: 'Survey App (react-app in demo-mode)'
            },
            href:
              'https://gold.pulseshift.com/feedback/#?mockdata=true&currentIndex=0'
          },
          {
            title: {
              de: 'Dashboard App (XD mockups)',
              en: 'Dashboard App (XD mockups)'
            },
            href:
              'https://xd.adobe.com/view/a374d196-82a5-47d4-7e94-3788014d7aaa-d545/'
          }
        ]
      },
      {
        title: { de: 'Eeezy', en: 'Eeezy' },
        src: require('~/static/bgr_pattern.svg'),
        gradientColor: 'warning',
        timeframe: { de: '2019', en: '2019' },
        text: {
          de:
            'Eeezy ist das Startup eines Bekannten gewesen (ein Nebenprojekt), für dessen Frontend-Team ich Mockups auf Basis von Material UI erstellen sollte. Da hier sehr kurzfristig Resultate angefragt wurden stand bei dieser Arbeit keine individuelle CI sondern purer Pragmatismus im Vordergrund. Die verlinkten Mockups sind in nur 11 Stunden entstanden.',
          en:
            'Eeezy was the startup of a friend of mine (a side project), for whose frontend team I was supposed to create mockups based on Material UI. Since results were requested at very short notice, this work was not characterized by an individual CI but by pure pragmatism. The linked mockups were created in just 11 hours.'
        },
        showtext: false,
        links: [
          {
            title: { de: 'Adobe XD Mockups', en: 'Adobe XD Mockups' },
            href:
              'https://xd.adobe.com/view/59a13cec-6071-4ab0-78d9-89ca7f28f72c-2f90/'
          },
          {
            title: {
              de: 'Aktuelle App (implementiert von eeezy)',
              en: 'Current App (implemented by eeezy)'
            },
            href: 'https://eeezy.com/start'
          }
        ]
      },
      {
        title: { de: 'Climathon', en: 'Climathon' },
        src: require('~/static/bgr_earth.svg'),
        gradientColor: 'primary',
        timeframe: { de: '2019', en: '2019' },
        text: {
          de:
            'Der Climathon ist ein Hackathon und war ein ehrenamtliches Projekt innerhalb meiner Vereinsaktivitäten von Hackerstolz e.V. Die komplette Design-Identity des Mannheimer Climathon Events wurde von mir gestaltet und umgesetzt. Neben hier nicht verlinkten Ressourcen wie selbstgestalteten Teilnehmerbeuteln, Badges und anderen Print-Medien lag der Schwerpunkt auf der Event Landing Page. Da alle Arbeiten ehrenamtlich umgesetzt wurden, lag auch hier der Fokus nicht auf Perfektion, sondern auf Pragmatismus.',
          en:
            'The Climathon is a hackathon and was a voluntary project within my club activities of Hackerstolz e.V. The complete design identity of the Mannheim Climathon Event was designed and implemented by me. Apart from resources not linked here, such as custom participant bags, badges and other print media, the major part was the event landing page. As all work was done on a voluntary basis, the focus was not on perfection but on pragmatism.'
        },
        showtext: false,
        links: [
          {
            title: { de: 'Adobe XD Mockups', en: 'Adobe XD Mockups' },
            href:
              'https://xd.adobe.com/view/f6f21131-259a-4a5f-62bc-28d529bd1d55-80c3/?hints=off'
          },
          {
            title: {
              de: 'Landing Page (Vue-App)',
              en: 'Landing Page (vue-app)'
            },
            href: 'https://climathon.hackerstolz.de/# '
          },
          {
            title: { de: 'GitHub Projekt', en: 'GitHub Project' },
            href: 'https://github.com/hackerstolz/climathon-spa'
          }
        ]
      }
    ]
  }),
  methods: {
    getI18n(i18nObj, lang) {
      if (i18nObj && typeof i18nObj[lang] === 'string') {
        return i18nObj[lang]
      }
      return ''
    },
    hexToRgbA(themeColor, alpha) {
      const hex = this.$vuetify.theme.isDark
        ? this.$vuetify.theme.themes.dark[themeColor]
        : this.$vuetify.theme.themes.light[themeColor] || '#000000'

      return hexToRgbA(hex, alpha)
    }
  }
}
</script>

<style scoped lang="scss">
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

h1 {
  font-size: 48px;
  line-height: 1.12;
  font-weight: 700;
  letter-spacing: -0.5px;
}
h2 {
  font-weight: 700;
  font-size: 32px;
  line-height: 1.12;
  letter-spacing: -0.01em;
}
h3 {
  font-weight: 700;
  font-size: 24px;
  line-height: 1.28;
  letter-spacing: -0.01em;
}
p {
  font-size: 20px;
  font-weight: normal;
  line-height: 1.6;
  &.small {
    line-height: 1.6;
    font-size: 16px;
  }
}

.panel-header {
  line-height: 1.2;
  font-size: 20px;
  font-weight: 600;
}
.panel-action {
  transition: all 0.2s ease-in-out;
  transform: rotate(0deg);
  flex-grow: 0;
  &.open {
    transform: rotate(180deg);
  }
}

.project-card {
  box-shadow: rgba(8, 35, 51, 0.03) 0px 0px 2px,
    rgba(8, 35, 51, 0.05) 0px 3px 6px;
}
</style>

<i18n>
{
  "en": {
    "about": "Readme",
    "links": "Stalk me on...",
    "portfolio": "Portfolio",
    "explore": "Explore Resources"
  },
  "de": {
    "about": "Liesmich",
    "links": "Stalkt mich auf...",
    "portfolio": "Portfolio",
    "explore": "Ressourcen Erkunden"
  }
}
</i18n>
