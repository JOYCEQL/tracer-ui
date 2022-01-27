import { defineComponent, openBlock, createElementBlock, normalizeStyle, renderSlot } from "vue";
var Button_vue_vue_type_style_index_0_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main = defineComponent({
  name: "TButton",
  props: {
    color: {
      type: String
    }
  },
  emits: ["click"]
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: "t-button",
    onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event)),
    style: normalizeStyle({ background: _ctx.color })
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 4);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
Button.install = function(app) {
  app.component(Button.name, Button);
};
const install = function(Vue) {
  Vue.use(Button);
};
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
export { Button, install as default };
