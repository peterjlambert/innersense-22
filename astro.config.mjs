// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";
import storyblok from "@storyblok/astro";
import { loadEnv } from 'vite';

const env = loadEnv(import.meta.env.MODE, process.cwd(), 'STORYBLOK');

export default defineConfig({
	integrations: [
		react(),
		svelte(),
		storyblok({
			accessToken:
				import.meta.env.MODE === 'development'
				? env.STORYBLOK_PREVIEW_TOKEN
				: env.STORYBLOK_PUBLIC_TOKEN,
			components: {
				// Add your components here
				Button: 'storyblok/ButtonLink',
				Card: 'storyblok/Card',
				ContentBlock: 'storyblok/ContentBlock',
				Hero: 'storyblok/Hero',
				RelatedContent: 'storyblok/RelationGrid',
				Treatment: 'storyblok/Treatment',
				Page: 'storyblok/Page'
			},
			apiOptions: {
				// Choose your Storyblok space region 
				region: 'eu',
			},
		}),
	],
})