<script setup>
</script>

<template>
	<div class="ui-switch">
		<p class="ui-switch__title">Вход в аккаунт</p>
		<div class="ui-switch__container">
			<p class="ui-switch__status">Отключено</p>
			<label class="ui-switch__label">
				<input type="checkbox" class="ui-switch__input sr-only peer">
				<div class="ui-switch__toggle"></div>
			</label>
		</div>
	</div>
</template>


<style lang="scss">
.ui-switch
{
	display: flex;
	flex-direction: column;
	gap: 15px;
}

.ui-switch__title,
.ui-switch__status
{
	font-size: 15px;
	line-height: 18px;
}

.ui-switch__container
{
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 10px;
	padding: 10px 20px;
	border: 1px solid $grey-200;
	border-radius: 100px;
}

.ui-switch__label
{
	position: relative;
	cursor: pointer;
}

.ui-switch__toggle
{
	position: relative;
	width: 56px;
	height: 30px;
	border-radius: 100px;
	background-color: $grey-400;
	@include transition();
	
	&:after
	{
		content: '';
		display: block;
		width: 26px;
		height: 26px;
		background-color: $white;
		border-radius: 100px;
		position: absolute;
		top: 2px;
		left: 2px;

		@include transition();
	}
}

.ui-switch__input
{
	position: absolute;
	width: 1px;
	height: 1px;
	padding: 0;
	margin: -1px;
	overflow: hidden;
	border: 0;

	&:checked
	{
		& + .ui-switch__toggle
		{
			background-color: $black;

			&:after
			{
				background-color: $accent-color;
				transform: translateX(100%);
			}
		}
	}
}
</style>