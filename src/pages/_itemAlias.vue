<template>
	<div class="wrapper-persone">
		<div v-if="item">
			<img :src="item.img" :alt="item.descr" />
			<h1 class="title" style="color: #fff">{{ item.title }}</h1>
			<p>{{ item.descr }}</p>

			<div class="card-stats">
				<div v-for="(stat, index) in item.info" :key="index" class="one-third">
					<div class="stat">{{ stat.title }}</div>
					<div class="stat-value">{{ stat.value }}</div>
				</div>
			</div>

			<div>
				<RouterLink to="/" class="btn btnPrimary">Back to home</RouterLink>
			</div>
		</div>
	</div>
</template>

<script>
	import items from '@/seeders/items.js';
	import { RouterLink } from 'vue-router';

	export default {
		data() {
			return {
				item: null,
			};
		},

		created() {
			const alias = this.$route.params.itemAlias;
			const item = items.find((el) => el.alias === alias);

			this.item = item;
		},
	};
</script>

<style scoped>
	.wrapper-persone {
		text-align: center;
	}

	.card-stats {
		margin: 30px 0;
		border-radius: 14px;
	}
</style>
