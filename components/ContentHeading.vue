<script setup>
// props
const props = defineProps({
	title: { type: String, default: 'Мой профиль <3' },
});
</script>

<template>
	<div class="content-heading">
		<div class="content-heading__point"></div>
		<h2 class="content-heading__title">
			{{ title }}
		</h2>
	</div>
</template>


<style lang="scss">
.content-heading
{
	display: flex;
	align-items: center;
	gap: 10px;
	border-bottom: 1px solid $grey-300;
	padding-bottom: 20px;
	margin-bottom: 20px;
}

.content-heading__point
{
	width: 20px;
	height: 20px;
	background-color: $accent-color;
	border-radius: 50%;
}

.content-heading__title
{
	font-size: 15px;
	line-height: 18px;
	font-weight: 400;
	margin-bottom: 0;

	@include mq($desktop)
	{
		font-size: 20px;
		line-height: 24px;
	}
}
</style>