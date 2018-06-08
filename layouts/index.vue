<template>
  <div>
    <navbar/>
    <top/>
    <plan/>
    <hours/>
    <facility/>
    <access/>
    <nuxt/>
    <bottom/>
  </div>
</template>

<script>
  import Navbar from '~/components/Navbar.vue'
  import Top from '~/components/index/Top.vue'
  import Plan from '~/components/index/Plan.vue'
  import Hours from '~/components/index/Hours.vue'
  import Facility from '~/components/index/Facility.vue'
  import Access from '~/components/index/Access.vue'
  import Bottom from '~/components/Bottom.vue'

  export default {
    components: {
      Navbar,
      Top,
      Plan,
      Hours,
      Facility,
      Access,
      Bottom
    }
  }
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}

.site-nav
{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  margin: 2rem 0;
  text-decoration: none;
  margin-bottom: 3rem
}

.site-title
{
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 600;
  font-size: 3.5rem;
  color: #35495e;
  letter-spacing: 1px;
  margin-left: 1.5rem;
}

.site-logo
{
  width: 200px;
  height: 200px
}
</style>
