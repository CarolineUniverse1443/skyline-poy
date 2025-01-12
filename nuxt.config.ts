// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-11-01',
	devtools: { enabled: true },
	css: ['~/assets/scss/main.scss'],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
					additionalData: `@use "@/assets/scss/helpers/_variables.scss" as *;  @use "@/assets/scss/helpers/_mixins.scss" as *;`,
					silenceDeprecations: ['import'],
				},
			},
		},
	},
})
