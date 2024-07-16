<template>
	<div class="card">
		<span class="card-name">{{ name }}</span>
		<span class="card-title">{{ title }}</span>
		<div class="card-body">card-body</div>
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
		},
	};
</script>

<style lang="scss" scoped></style>
