<script setup>
</script>

<template>
	<div class="safety">
		<div class="safety__header">
			<div class="safety__header-point"></div>
			<h2 class="safety__header-title">Безопасность</h2>
		</div>

		<div class="safety__content">
		</div>
	</div>
</template>

<style lang="scss">
.safety__header
{
	display: flex;
	align-items: center;
	gap: 10px;
	border-bottom: 1px solid $grey-300;
	padding-bottom: 20px;
	margin-bottom: 20px;
}

.safety__header-point
{
	width: 20px;
	height: 20px;
	background-color: $accent-color;
	border-radius: 50%;
}

.safety__header-title
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

.safety__content
{
	display: flex;
	flex-direction: column;
	gap: 20px;
}
</style>
