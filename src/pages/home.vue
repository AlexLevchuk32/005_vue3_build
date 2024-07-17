<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="card__wrapper" v-for="item in items" :key="item.id">
		<Card :name="`${item.lvl} lvl`" :title="item.title" :imgUrl="item.img">
			<!-- <template v-slot:card-header>
				{{ item.title }}
			</template> -->
			<!-- <template v-slot:card-body>
				{{ item.descr }}
			</template> -->

			{{ item.descr }}
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
