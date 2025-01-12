<script setup>
</script>

<template>
    <header class="header">
		<NuxtLink to="/" class="header__logo header__button">
			<IconsLogo class="header__logo-icon" />
		</NuxtLink>

		<div class="header__actions">
			<div class="header__lang header__button">
                <p class="header__lang-value">Eng</p>
				<IconsDownArrow class="header__down-arrow"/>
			</div>
            <div class="header__profile header__button">
				<div class="header__notification">
					<IconsNotificationBell class="header__notification-icon"/>
					<div class="header__notification-count">
						1
					</div>
				</div>
				<div class="header__person">
					<img src="/img/avatar.png" alt="user avatar" class="header__person-img"/>
					<p class="header__person-name">Andrew Smith</p>
					<IconsDownArrow class="header__down-arrow"/>
				</div>
			</div>  
		</div>
	</header>
</template>

<style lang="scss">
.header
{
	display: flex;
	justify-content: space-between;
	padding-block: 20px;
}

.header__button
{
	display: flex;
	justify-content: center;
	align-items: center;
	border: 1px solid $grey-200;
	height: 40px;

	@include mq($desktop)
	{
		height: 60px;
	}
}

.header__down-arrow
{
	@include mq($desktop)
	{
		width: 12px;
		height: 7px;
	}
}

.header__logo
{
	padding: 12.5px 22px;
	border-radius: 74px;

	@include mq($desktop)
	{
		padding: 20px 40px;

		.header__logo-icon
		{
			width: 110px;
			height: 20px;
			border-radius: 130px;
		}
	}
}

.header__actions
{
	display: flex;
	align-items: center;
	gap: 5px;

	@include mq($desktop) { gap: 10px; }
}

.header__lang
{
	gap: 3px;
	padding: 12.5px;
	text-transform: uppercase;
	border-radius: 96px;

	@include mq($desktop)
	{
		padding: 20px;
		gap: 9px;
	}
}

.header__lang-value
{
	font-size: 12px;
	line-height: 14.5px;
	font-weight: 500;

	@include mq($desktop)
	{
		font-size: 15px;
		line-height: 18px;
	}
}

.header__profile
{
	gap: 11px;
	padding-block: 5px;
	padding-inline: 5px 10px;
	border-radius: 68px;

	@include mq($desktop)
	{
		gap: 20px;
		padding-block: 10px;
		padding-inline: 10px 20px;
	}
}

.header__notification
{
	position: relative;
	cursor: pointer;
	display: flex;
	width: 30px;
	height: 30px;
	justify-content: center;
	align-items: center;
	background-color: $grey-100;
	border-radius: 50%;

	@include mq($desktop)
	{
		width: 40px;
		height: 40px;
	}
}

.header__notification-icon
{
	@include mq($desktop)
	{
		width: 17px;
		height: 20px;
	}
}

.header__notification-count
{
	position: absolute;
	top: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 6px;
	line-height: 6px;
	font-weight: 600;
	background: $accent-color;
	border-radius: 50%;
	padding: 4px 6px;
	width: 15px;
	height: 15px;

	@include mq($desktop)
	{
		font-size: 8px;
		line-height: 8px;
		width: 20px;
		height: 20px;
	}
}

.header__person
{
	display: flex;
	align-items: center;
	gap: 6px;
}

.header__person-img
{
	width: 30px;
	height: 30px;
	border-radius: 50%;
	background: $accent-color;

	@include mq($desktop) { margin-right: 5px; }
}

.header__person-name
{
	display: none;
	font-weight: 500;
	font-size: 15px;
	line-height: 18px;

	@include mq($desktop) { display: block; }
}
</style>