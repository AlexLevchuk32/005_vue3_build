<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="card__wrapper" v-for="item in items" :key="item.id">
		<Card :name="`${item.lvl} lvl`" :title="item.title">
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

	export default {
		components: {
			Card,
		},

		data() {
			return {
				items: [
					{
						id: 1,
						title: 'Archer',
						descr: 'Archer Archer Archer Archer',
						lvl: 4,
					},
					{
						id: 2,
						title: 'Wizard',
						descr: 'Wizard Wizard Wizard Wizard',
						lvl: 2,
					},
				],
			};
		},
	};
</script>
