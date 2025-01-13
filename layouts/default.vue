<script setup>
</script>

<template>
	<div class="container">
		<HeaderSection />
		<main>
			<div class="lk__container">
				<NavigationBar />

				<div class="lk__content">
					<slot />
				</div>
			</div>
		</main>
	</div>
</template>

<style lang="scss">
.lk__container
{
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 20px;

	@include mq($desktop)
	{
		flex-direction: row;
		gap: 33px;
		background-color: $main-color;
		border-radius: 10px;
		padding: 20px;
	}
}

.lk__content
{
	background-color: $main-color;
	width: 100%;
	border-radius: 5px;
	padding: 15px 10px;
	margin-bottom: 20px;

	@include mq($tablet) { padding: 20px; }
	@include mq($desktop) { padding: 0; }
}
</style>
