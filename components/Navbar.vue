<template>
  <nav 
    class="navbar is-dark is-fixed-top"
    role="navigation" 
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <div class="navbar-item">Cybelien</div>
      <div
        :class="{'is-active': $store.state.isMenuActive}"
        class="navbar-burger"
        data-target="navMenu"
        @click="$store.commit('toggleMenu')"
      >
        <span/>
        <span/>
        <span/>
      </div>
    </div><!-- navbar-brand END -->
    <div
      id="navMenu"
      :class="{'is-active': $store.state.isMenuActive}"
      class="navbar-menu"
    >
      <div class="navbar-end">
        <a
          href="#top"
          class="navbar-item"
        >
          Top
        </a>

        <a
          href="#plan"
          class="navbar-item"
        >
          Plan
        </a>
        
        <a
          href="#hours"
          class="navbar-item"
        >
          Hours
        </a>

        <a
          href="#facility"
          class="navbar-item"
        >
          facility
        </a>
      </div>
    </div><!-- navbar-menu END -->
  </nav>
</template>

<script>
export default {
  data: () => {
    return {isMenuActive: false}
  },
  methods: {
    toggleMenu () {
      this.isMenuActive = !this.isMenuActive
    }
  }
}
</script>
