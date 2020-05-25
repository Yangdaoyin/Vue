<template>
<div style="width: 1520px">
  <yang-head-page></yang-head-page>
  <my-test></my-test>
  <yang-footer-page></yang-footer-page>
</div>
</template>

<script>
    import YangHeadPage from "../../components/yang-head-page";
    import MyTest from "../myTest";
    import YangFooterPage from "../../components/yang-footer-page";
    import UserForm from "../user/userForm";
    export default {
        name: "Layout.vue",
      components: {UserForm, YangFooterPage, MyTest, YangHeadPage}
    }
</script>
