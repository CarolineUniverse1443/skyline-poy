<script setup>
</script>

<template>
	<aside class="navigation-bar">
		<nav class="navigation-bar__nav">
			<NuxtLink to="/">
				Профиль
			</NuxtLink>
			<NuxtLink to="/safety">
				Безопасность
			</NuxtLink>
			<NuxtLink to="/notifications">
				Уведомления
			</NuxtLink>
		</nav>

		<NuxtLink to="#" class="navigation-bar__link">
			Удалить аккаунт
		</NuxtLink>
	</aside>
</template>


<style lang="scss">
.navigation-bar
{
	background-color: $main-color;
	padding: 15px 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;
	border-radius: 5px;

	a
	{
		display: block;
		font-size: 15px;
		line-height: 18px;
		width: fit-content;

		@include transition();
	}

	@include mq($tablet) { padding: 20px; }

	@include mq($desktop)
	{
		padding: 0;
		width: 172px;
		gap: 40px;
	}
}

.navigation-bar__nav
{
	display: flex;
	flex-direction: column;
	gap: 20px;

	a
	{
		color: $grey-600;
		display: flex;
		flex-direction: column;
		align-items: flex-start;

		&:hover { color: $black; }

		&.router-link-exact-active
		{
			background-color: $black;
			color: $accent-color;
			padding: 10px 20px;
			height: 38px;
			border-radius: 60px;
		}
	}
}

.navigation-bar__link
{
	color: $danger-color;
	cursor: pointer;

	&:hover { opacity: 0.7; }
}
</style>
