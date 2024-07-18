<template>
	<div class="card">
		<!-- <div class="card-header">
			<slot name="card-header"></slot>
		</div> -->
		<div class="card-img__wrapper" v-if="imgUrl">
			<img class="card-img" :src="imgUrl" :alt="title" />
		</div>
		<span class="card-name">{{ name }}</span>
		<span class="card-title">{{ title }}</span>
		<!-- <div class="card-body">
			<slot name="card-body"></slot>
		</div> -->
		<div class="card-body">
			<slot name="body"></slot>

			<RouterLink v-if="link" :to="link" class="link" style="display: block; margin-top: 16px">
				See more
			</RouterLink>
		</div>
		<slot name="footer"></slot>
	</div>
</template>

<script>
	import { RouterLink } from 'vue-router';

	export default {
		props: {
			name: {
				type: String,
				required: true,
			},
			title: {
				type: String,
				required: true,
			},
			imgUrl: {
				type: String,
				required: false,
			},
			link: {
				type: String,
			},
		},
	};
</script>

<style lang="scss" scoped></style>
