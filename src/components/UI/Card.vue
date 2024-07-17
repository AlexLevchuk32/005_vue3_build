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
		<slot></slot>
	</div>
</template>

<script>
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
		},
	};
</script>

<style lang="scss" scoped></style>
