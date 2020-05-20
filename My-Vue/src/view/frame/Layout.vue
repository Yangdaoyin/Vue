<template>
<div style="width: 1520px">
  <yang-head-page></yang-head-page>
  <MyTest></MyTest>
  <yang-footer-page></yang-footer-page>
</div>
</template>

<script>
    import YangHeadPage from "../../components/yang-head-page";
    import MyTest from "../myTest";
    import YangFooterPage from "../../components/yang-footer-page";
    export default {
        name: "Layout.vue",
      components: {YangFooterPage, MyTest, YangHeadPage}
    }
</script>

<style scoped>

</style>
