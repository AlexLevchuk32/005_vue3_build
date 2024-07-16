<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<h1>Hello Home</h1>
	<p>Edit me</p>
	<div class="card__wrapper" v-for="item in items" :key="item.id">
		<Card :name="`${item.lvl} lvl`" :title="item.title" />
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
