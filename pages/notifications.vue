<script setup>
</script>

<template>
	<div class="notifications">
		<div class="notifications__header">
			<div class="notifications__header-point"></div>
			<h2 class="notifications__header-title">Уведомления</h2>
		</div>
		
		<div class="notifications__content">
			<section class="notifications__section">
				<h3 class="notifications__section-title">Тип уведомлений</h3>
				<div class="notifications__switches">
					<UiSwitch
						v-for="i in 6"
						:key="i"
					/>
				</div>
			</section>

			<section class="notifications__section">
				<h3 class="notifications__section-title">Способы получения уведомлений</h3>
				<div class="notifications__switches">
					<UiSwitch
						v-for="i in 3"
						:key="i"
					/>
				</div>
			</section>
		</div>
	</div>
</template>

<style lang="scss">
.notifications__header
{
	display: flex;
	align-items: center;
	gap: 10px;
	border-bottom: 1px solid $grey-300;
	padding-bottom: 20px;
	margin-bottom: 20px;
}

.notifications__header-point
{
	width: 20px;
	height: 20px;
	background-color: $accent-color;
	border-radius: 50%;
}

.notifications__header-title
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

.notifications__content
{
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.notifications__section
{
	padding: 15px;
	background: $white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 30px;

	@include mq($desktop)
	{
		padding: 20px;
		gap: 20px;
	}
}

.notifications__section-title
{
	font-size: 18px;
	line-height: 22px;
	margin: 0;

	@include mq($desktop)
	{
		font-size: 20px;
		line-height: 24px;
	}
}

.notifications__switches
{
	display: flex;
	flex-direction: column;
	gap: 20px;

	@include mq($desktop)
	{
		flex-direction: row;
		flex-wrap: wrap;
		gap: 40px;

		.ui-switch
		{
			gap: 10px;
			padding-right: 40px;

			&:not(:last-child) { border-right: 1px solid $grey-300; }
		}
	}
}
</style>
