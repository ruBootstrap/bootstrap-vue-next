import {defineConfig} from 'vitepress'
import Icons from 'unplugin-icons/vite'
import markdownItClass from '@toycode/markdown-it-class'
import {demoContainer} from './plugins/demo-container'
import Components from 'unplugin-vue-components/vite'
import {BootstrapVueNextResolver} from 'bootstrap-vue-next'

const title = 'BootstrapVueNext'
const description = 'Быстро и легко интегрируйте компоненты Bootstrap v5 с Vue 3'
const baseUrl = '/'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title,
  description,
  base: baseUrl,
  srcDir: 'src',
  // TODO fix & remove this
  ignoreDeadLinks: true,
  head: [
    ['link', {rel: 'icon', type: 'image/x-icon', href: `${baseUrl}favicon.ico`}],
    ['meta', {property: 'og:title', name: 'og:title', content: title}],
    ['meta', {property: 'og:description', name: 'og:description', content: description}],
    ['meta', {property: 'twitter:card', name: 'twitter:card', content: 'summary'}],
    ['meta', {property: 'twitter:title', name: 'twitter:title', content: title}],
    ['meta', {property: 'twitter:description', name: 'twitter:description', content: description}],
  ],
  vite: {
    plugins: [
      Icons(),
      Components({
        globs: ['components/*.vue', 'docs/**/demo/*.vue'],
        dts: true,
        include: [/\.vue$/, /\.vue\?vue/, /\.md$/, /\.ts$/],
        resolvers: [BootstrapVueNextResolver()],
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      }) as any,
    ],
  },
  locales: {
    root: {
      label: 'Russian',
      lang: 'ru',
    },
  },
  appearance: false,
  sitemap: {
    hostname: `https://next.bootstrap-vue.ru${baseUrl}`,
  },
  themeConfig: {
    search: {
      provider: 'local',
    },
  },
  markdown: {
    config: (md) => {
      md.use(markdownItClass, {table: ['table', 'table-striped']})
      md.use(demoContainer, 'src')
    },
    headers: true,
  },
})
