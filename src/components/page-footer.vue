<template>
  <div class="tablet-blobs pt flex-align-items-stretch">
    <div class="tablet-blob-1 desktop-blob-1-3">
      <img
        class="sponsor mb"
        src="../../public/img/logo-mtes-mef.svg"
      >

      <div class="blobs">
        <div class="blob-1-3">
          <img
            class="sponsor mb"
            src="../../public/img/logo-fabriquenumerique.svg"
          >
        </div>
        <div class="blob-2-3">
          <p class="h6 color-neutral">
            Camino est un service numérique de l’Etat incubé à la Fabrique
            numérique du Ministère de la Transition écologique et solidaire,
            membre du réseau d’incubateurs
            <a
              href="http://beta.gouv.fr"
            >
              beta.gouv.fr
            </a>
          </p>
        </div>
      </div>
    </div>

    <div class="tablet-blob-1-2 desktop-blob-1-3">
      <ul class="list-prefix text-decoration-none">
        <li>
          <router-link to="/a-propos#contact">
            Contact
          </router-link>
        </li>
        <li>
          <router-link to="/a-propos">
            À propos
          </router-link>
        </li>
        <li>
          <router-link to="/cgu">
            CGU
          </router-link>
        </li>
        <li>
          <router-link to="/mentions-legales">
            Mentions légales
          </router-link>
        </li>
        <li>
          <router-link to="/accessibilite">
            Accessibilité
          </router-link>
        </li>
        <li>
          <router-link to="/contribution">
            Contribution
          </router-link>
        </li>
        <li>
          <router-link to="/statistiques">
            Statistiques
          </router-link>
        </li>
        <li>
          <a
            href="https://trello.com/b/cwXWMqGz/camino-roadmap-ouverte"
            target="_blank"
            rel="noopener noreferrer"
          >
            Roadmap
          </a>
        </li>
        <li>
          <a
            href="http://api.camino.beta.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            API (GraphQL)
          </a>
        </li>
        <li>
          <a
            href="http://flux.camino.beta.gouv.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flux géographiques
          </a>
        </li>
      </ul>
    </div>

    <div class="tablet-blob-1-2 desktop-blob-1-3 flex flex-direction-column">
      <NewsletterForm />
      <ul class="list-prefix text-decoration-none">
        <li>
          <a
            href="http://www.mineralinfo.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            MineralInfo
          </a>
        </li>
        <li>
          <a
            href="http://www.minergies.fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Minergies
          </a>
        </li>
      </ul>

      <p class="h5 flex-bottom">
        <a
          href="https://github.com/MTES-MCT/camino-ui/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none"
        >
          UI v.{{ versions.ui }}
        </a>|
        <a
          href="https://github.com/MTES-MCT/camino-api/releases"
          target="_blank"
          rel="noopener noreferrer"
          class="text-decoration-none"
        >
          API v.{{ versions.api }}
        </a>
      </p>
    </div>
  </div>
</template>

<script>
import NewsletterForm from './footer/newsletter-form.vue'

export default {
  components: {
    NewsletterForm
  },

  computed: {
    versions() {
      return this.$store.state.versions
    }
  }
}
</script>
