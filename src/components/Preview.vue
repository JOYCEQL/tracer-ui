

<template>
  <div class="doc-preview">
    <section>
      <slot></slot>
    </section>
    <div v-show="codeVisible" class="source-code">
      <pre class="language-html"><code class="language-html">{{ previewSourceCode }}</code></pre>
    </div>
    <div class="preview-bottom">
      <span name="code" @click="showSourceCode">查看代码</span>
    </div>
  </div>
</template>

<script>


const isDev = import.meta.env.MODE === 'development';

export default {
  props: {
    /** 组件名称 */
    compName: {
      type: String,
      default: '',
      require: true,
    },
    /** 要显示代码的组件 */
    demoName: {
      type: String,
      default: '',
      require: true,
    },
  },
  data() {
    return {
      sourceCode: '',
      codeVisible: false,
    };
  },
  computed: {
    previewSourceCode() {
      return this.sourceCode.replace(/'\.\.\/\.\.\/index'/g, ``);
    },
  },
  async mounted() {
    if (this.compName && this.demoName) {
      if (isDev) {
        this.sourceCode = (
        // 加注释为让rollup正常动态引入组件
          await import(/* @vite-ignore */ `../../packages/${this.compName}/example/${this.demoName}.vue?raw`)
        ).default;
      } else {
        this.sourceCode = await fetch(`/packages/${this.compName}/example/${this.demoName}.vue`).then((res) => res.text());
      }
    }
    await this.$nextTick();
    Prism.highlightAll();

  },
  methods: {
    async copyCode() {
      // this.$copyText(this.sourceCode);
    },
    showSourceCode() {
      this.codeVisible = !this.codeVisible;
    },
  },
};
</script>

<style lang="less">
pre {
  line-height: 0;
}
.doc-preview {
  border: 4px;
  border: 1px dashed var(--doc-color-border);
  padding: 10px;
  border-bottom: 1px dashed var(--doc-color-border);
  section {
    margin: 15px 0px;
  }
}


.language-html {
  margin: 0;
  padding: 0 15px;
}
.preview-bottom {
  cursor: pointer;
  height: 40px;
  line-height: 40px;
  display: flex;
  color: var(--doc-color-text);
  justify-content: center;
  align-items: center;
  border-top: 1px dashed var(--doc-color-border);
}
</style>
