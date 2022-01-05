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
                        'flex-grow-0': true,
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
                  )}, ${hexToRgbA(project.gradientColor, 0.4)}, ${hexToRgbA(
                    project.gradientColor,
                    0.95
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
              <v-card-actions v-if="project.links.length > 0"
                ><v-spacer></v-spacer>
                <v-menu transition="scale-transition" origin="top center">
                  <template v-slot:activator="{ on }">
                    <v-btn color="accent" text v-on="on"
                      >{{ $t('explore')
                      }}<v-icon small right
                        >mdi-arrow-down-drop-circle-outline</v-icon
                      ></v-btn
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
        'Ich bin Softwareentwickler, UI/UX-Designer und Tech-Unternehmer. Ich strebe nach lebenslangem Lernen, Teamarbeit, Technologie und kreativem Ausdruck. Aus diesem Grund liegen meine Stärken und Talente in den unterschiedlichen Kombinationen dieser Leidenschaften, von Konzepterstellung, über Design hinzu technischer Produktentwicklung.',
      en:
        'I am a software developer, UI/UX designer and tech entrepreneur. I strive for lifelong learning, teamwork, technology, and creative expression. For this reason, my strengths and talents lie in the various combinations of these passions, from concept creation, to design, to technical product development.'
    },
    args: [
      {
        title: {
          de: 'Meine Vorstellung von Designprozessen',
          en: 'My idea of design processes'
        },
        icon: require('~/static/love.svg'),
        text: {
          de:
            'In meiner aktuellen Rolle als technischer Projektmanager, Softwarearchitekt, Entwickler und User Experience-Spezialist bei osapiens unterstütze ich meine Kollegen dabei, Produkte zu entwickeln, die unsere Kunden begeistern. Zu meinen Aufgaben gehört es, Teams aufzubauen und zu unterstützen, unsere UI/UX-Designstrategie mitzugestalten, Softwareentwicklungsprozesse zu optimieren und an der Fullstack-Entwicklung unserer mehr-mandantenfähigen Cloud-Anwendungen mitzuwirken. Über die Jahre als UX-Designer und Design Lead habe ich mir eine klare Meinung geschaffen, wie Designprozesse in einem Unternehmen implementiert und gelebt werden sollten. Eine erste wichtige Grundlage, ist das Schaffen einer unverwechselbaren Designsprache und UX-Strategie, sodass daraus Design-Guides für digitale und analoge Inhalte, UI-Komponentenbibliotheken und Blaupausen für kreative Gestaltungsprozesse abgeleitet werden können. Der kreative Gestaltungsprozess sollte dabei den Endbenutzer stets im Fokus haben, wichtig hierbei ist insb. die Möglichkeit in kurzen Iterationen neue Prototypen (bspw. als Mockup oder Anwendung mit Mockdaten) zu validieren und unkompliziert Feedback einzuholen. Dies gelingt nur, wenn Design- und Entwicklungsprozesse gut miteinander abgestimmt sind. Ich ziehe die Möglichkeit vor, frühzeitig und öfter zu über Ergebnisse zu iterieren, als ein Design zu lange in Ruhe zu perfektionieren (ein MVP darf weh tun).',
          en:
            'In my current role as a technical project manager, software architect, developer and user experience specialist at osapiens, I support my colleagues in developing products that delight our customers. My responsibilities include building and supporting teams, helping shape our UI/UX design strategy, optimizing software development processes, and contributing to the fullstack development of our multi-tenant cloud applications. Over the years as a UX designer and design lead, I have created a clear opinion of how design processes should be implemented and lived in an organization. A first important foundation, is to create a distinctive design language and UX strategy, so that design guides for digital and analog content, UI component libraries and blueprints for creative design processes can be derived from it. The creative design process should always focus on the end user, and it is particularly important to be able to validate new prototypes (e.g., as mockups or applications with mock data) in short iterations and to obtain uncomplicated feedback. This is only possible if design and development processes are well coordinated. I prefer the possibility to iterate on results early and more often than to spend too long perfecting a design (an MVP is allowed to hurt).'
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
            'Anders als bei der Erstellung von Design-Templates für Powerpoint oder die Gestaltung für den Print-Bereich ist die Kollaboration zwischen Design und Entwicklung für die Produktentwicklung besonders von Bedeutung. Zu Wissen welche Möglichkeiten mit einem Frontend-Framework (Web- und/oder Native) gegeben sind ist von erheblichem Vorteil um nicht nur liebevolle sondern auch technisch durchdachte Mockups und Designs zu entwerfen. Von Designern schlecht durchdachte Komponenten, vernachlässigte Randfälle und wenig Verständnis für die technische Entwicklung sind Ursachen für hohe Entwicklungs- und Testaufwände. Als Designer und Entwickler kenne ich den Prozess bereits von beiden Seiten, meine Mockups entstehen daher mit gleichzeitigen Gedanken an die technische Implementierung. Darüberhinaus bin ich mit Tools, Methoden und Werkzeugen vertraut um das Design- und Entwicklungsteam eng miteinander zu verbinden (bspw. via Figma und Storybook).',
          en:
            'Unlike the creation of design templates for PowerPoint or the design for print, the collaboration between design and development is particularly important for product development. Knowing which possibilities are given with a frontend framework (web and/or native) is of considerable advantage to create not only loving but also technically well thought-out mockups and designs. Components poorly thought out by designers, neglected edge cases and little understanding of technical development are causes for high development and testing efforts. As a designer and developer I already know the process from both sides, so my mockups are created with simultaneous thoughts about the technical implementation. Furthermore, I am familiar with tools, methods and tools to closely connect the design and development team (e.g. via Figma and Storybook).'
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
            'Adobe XD, Figma und co. haben die Kollaboration zwischen Design und Entwicklung bereits nachhaltig verändert. Ich interessiere mich neben den etablierten Brot- und Butter Aufgaben der Design- und Entwicklungs-Abteilung insbesondere über erweiterte Möglichkeiten beide Bereiche zu integrieren und somit die Produktentwicklung auf das nächste Level zu heben. Hierzu zählen: 1. automatisiertes A/B Testing von Funktionen und Darstellungsvarianten, 2. Entwicklung von Design-Systemen in Form einer Mikroservice API für Design-Tokens, oder eines low-level SDKs zur UI Komponenten Entwicklung, mit dem Ziel echtzeit Rollouts von Design-Updates zu ermöglichen, 3. Erhebung von Benutzungsdaten und Benutzerfeedback zur Erstellung von Metriken (bspw. NPS Score)',
          en:
            'Adobe XD, Figma, and others have already changed the way design and development collaborate. Besides the established bread and butter tasks of the design and development department, I am especially interested in extended possibilities to integrate both areas and thus to lift product development to the next level. These include: 1. automated A/B testing of features and display variants, 2. development of design systems in the form of a microservice API for design tokens, or a low-level SDK for UI component development, with the goal of enabling real-time rollouts of design updates, 3. collection of user data and user feedback for the creation of metrics (e.g. NPS score).'
        }
      }
    ],
    profiles: [
      {
        title: { de: 'LinkedIn', en: 'LinkedIn' },
        subtitle: {
          de:
            'Auf LinkedIn findest du meinen Lebenslauf und weitere Angaben meines beruflichen Werdegangs.',
          en:
            'On LinkedIn you can find my resume and other details of my professional career.'
        },
        href: 'https://de.linkedin.com/in/jascha-a-quintern-0290ba91',
        color: 'accent',
        img: require('~/static/cv.svg')
      },
      {
        title: { de: 'GitHub', en: 'GitHub' },
        subtitle: {
          de:
            'Ein kleiner Ausschnitt meines Schaffens ist auch auf GitHub zu finden.',
          en: 'A small part of my work can also be found on GitHub.'
        },
        href: 'https://github.com/fuchsvomwalde',
        color: 'secondary',
        img: require('~/static/code.svg')
      },
      {
        title: { de: 'Homepage', en: 'Homepage' },
        subtitle: {
          de: 'Eine Linkliste verschiedener Onlineprofile.',
          en: 'A link list of different online profiles.'
        },
        href: 'https://jascha-quintern.de/',
        color: 'success',
        img: require('~/static/website.svg')
      }
    ],
    portfolio: [
      {
        title: { de: 'osapiens', en: 'osapiens' },
        src: require('~/static/osapiens.jpg'),
        gradientColor: '#000000',
        timeframe: { de: '2020-2022', en: '2020-2022' },
        text: {
          de:
            'Bei osapiens sind meine Aufgaben der Aufbau und die Unterstützung von Teams, die Erstellung unserer UI/UX-Designstrategie sowie abgeleiteter Design-Sokumente und -Bibliotheken, die Optimierung von Softwareentwicklungsprozessen und die Beteiligung an der Mockup-Erstellung sowie Fullstack-Entwicklung unserer mehr-mandantenfähigen Cloud-Anwendungen. Programme und Technologien mit denen ich hierbei arbeite sind: osapiens Cloud-Technologie, REST, TypeScript, React, Storybook, React-Native, Webpack, Material UI, Electron, Node, Adobe XD und Figma.',
          en:
            'At osapiens, my responsibilities are to build and support teams, create our UI/UX design strategy and derived design documents and libraries, optimize software development processes, and participate in mockup creation and fullstack development of our multi-tenant cloud applications. Programs and technologies I work with here are: osapiens cloud technology, REST, TypeScript, React, Storybook, React-Native, Webpack, Material UI, Electron, Node, Adobe XD and Figma.'
        },
        showtext: false,
        links: [
          {
            title: {
              de: 'Work Samples (FigJam)',
              en: 'Work Samples (FigJam)'
            },
            href:
              'https://www.figma.com/file/Ru4HmIfK1i0wZtUDmEa0Ux/osapiens-Portfolio'
          }
        ]
      },
      {
        title: { de: 'PulseShift & CAMELOT MC', en: 'PulseShift & CAMELOT MC' },
        src: require('~/static/bgr_purple.jpg'),
        gradientColor: 'primary',
        timeframe: { de: '2016-2020', en: '2016-2020' },
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
          },
          {
            title: {
              de:
                'Vortrag: Die Zukunft der Mitarbeiterbefragung @ UX-DAY CONFERENCE 2016 (Aufzeichnung auf YouTube)',
              en:
                'Lecture: The future of the employee survey @ UX-DAY CONFERENCE 2016 (recording on YouTube)'
            },
            href: 'https://youtu.be/VA4adJF3BTE'
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
            'Eeezy war ein E-Mobility Startup, für dessen Frontend-Team ich als Freelancer Mockups auf Basis von Material UI erstellen sollte. Da hier sehr kurzfristig Resultate angefragt wurden stand bei dieser Arbeit keine individuelle CI sondern Pragmatismus im Vordergrund. Die verlinkten Mockups sind in 11 Stunden entstanden.',
          en:
            'Eeezy was an e-mobility startup for whose frontend team I was asked to create mockups based on Material UI as a freelancer. Since results were requested at very short notice, the focus of this work was not on an individual CI but on pragmatism. The linked mockups were created in 11 hours.'
        },
        showtext: false,
        links: [
          {
            title: { de: 'Adobe XD Mockups', en: 'Adobe XD Mockups' },
            href:
              'https://xd.adobe.com/view/59a13cec-6071-4ab0-78d9-89ca7f28f72c-2f90/'
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
            'Der Climathon ist ein Hackathon und war ein ehrenamtliches Projekt innerhalb meiner Vereinsaktivitäten von Hackerstolz e.V. Die komplette Design-Identity des Mannheimer Climathon Events wurde von mir gestaltet und als Nuxt-Anwendung umgesetzt. Neben selbstgestalteten Teilnehmerbeuteln, Badges und anderen Print-Medien lag der Schwerpunkt auf der Event Landing Page. Da alle Arbeiten ehrenamtlich umgesetzt wurden, lag der Fokus nicht auf Perfektion, sondern auf Pragmatismus.',
          en:
            'The Climathon is a hackathon and was a voluntary project within my club activities of Hackerstolz e.V. The complete design identity of the Mannheim Climathon Event was designed and implemented as nuxt application by me. Apart from resources, such as custom participant bags, badges and other print media, the major part was the event landing page. As all work was done on a voluntary basis, the focus was not on perfection but on pragmatism.'
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
    "about": "README",
    "links": "Links & More",
    "portfolio": "Portfolio",
    "explore": "Explore Resources"
  },
  "de": {
    "about": "README",
    "links": "Links & Mehr",
    "portfolio": "Portfolio",
    "explore": "Ressourcen Erkunden"
  }
}
</i18n>
