<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<carousel :settings="settings" :breakpoints="breakpoints">
		<slide class="card__wrapper" v-for="item in items" :key="item.id">
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
		</slide>

		<template #addons>
			<navigation />
			<!-- <pagination /> -->
		</template>
	</carousel>
</template>

<script>
	import Card from '@/components/UI/Card.vue';
	import items from '@/seeders/items.js';
	import 'vue3-carousel/dist/carousel.css';
	import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

	export default {
		components: {
			Card,
			Carousel,
			Slide,
			// Pagination,
			Navigation,
		},

		data() {
			return {
				items: items,

				settings: {
					itemsToShow: 1,
					wrapAround: true,
					snapAlign: 'center',
				},
				breakpoints: {
					300: {
						itemsToShow: 1,
					},
					700: {
						itemsToShow: 1,
					},
				},
			};
		},
	};
</script>
