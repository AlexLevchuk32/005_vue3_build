<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="card__wrapper" v-for="item in items" :key="item.id">
		<Card
			:name="`${item.lvl} lvl`"
			:title="item.title"
			:imgUrl="item.img"
			:link="`/${item.alias}`"
			style="margin-bottom: 20px">
			<!-- <template v-slot:card-header>
				{{ item.title }}
			</template> -->
			<!-- <template v-slot:card-body>
				{{ item.descr }}
			</template> -->

			<template v-slot:body>{{ item.descr }}</template>
			<template v-slot:footer>
				<div class="card-stats">
					<div v-for="(stat, index) in item.info" :key="index" class="one-third">
						<div class="stat">{{ stat.title }}</div>
						<div class="stat-value">{{ stat.value }}</div>
					</div>
				</div>
			</template>
		</Card>
	</div>
</template>

<script>
	import Card from '@/components/UI/Card.vue';
	import items from '@/seeders/items.js';

	export default {
		components: {
			Card,
		},

		data() {
			return {
				items: items,
			};
		},
	};
</script>
