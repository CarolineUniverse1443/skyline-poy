<script setup>
</script>

<template>
	<div class="profile">
		<div class="profile__header">
			<div class="profile__header-point"></div>
			<h2 class="profile__header-title">Мой профиль</h2>
		</div>

		<div class="profile__content">
			<section class="profile__section">
				<div class="profile__section-heading">
					<div class="profile__person">
						<img class="profile__person-img" src="/img/avatar.png" alt="user avatar"/>
						<span class="profile__person-name">Andrew Smith</span>
					</div>
					<button class="profile__edit-button">
						<IconsEditPencil />
					</button>
				</div>
			</section>
	
			<section class="profile__section profile__section--kyc">
				<div class="profile__section-heading">
					<h3 class="profile__section-title">KYC</h3>
					<button class="profile__verify-button">
						Пройти верификацию
					</button>
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Статус</h4>
					<p class="profile__section-text">Не пройден</p>	
				</div>
			</section>

			<section class="profile__section">
				<div class="profile__section-heading">
					<h3 class="profile__section-title">Личные данные</h3>
					<button class="profile__edit-button">
						<IconsEditPencil />
					</button>
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Имя</h4>
					<p class="profile__section-text">Андрей</p>	
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Фамилия</h4>
					<p class="profile__section-text">Смит</p>	
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Дата рождения</h4>
					<p class="profile__section-text">06.04.1980</p>	
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Контактная информация</h4>
					<p class="profile__section-text">Example@gmail.com</p>	
				</div>
			</section>

			<section class="profile__section">
				<div class="profile__section-heading">
					<h3 class="profile__section-title">Адрес проживания</h3>
					<button class="profile__edit-button">
						<IconsEditPencil />
					</button>
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Страна</h4>
					<p class="profile__section-text">Россия</p>	
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Город</h4>
					<p class="profile__section-text">Владикавказ</p>	
				</div>
				<div class="profile__section-block">
					<h4 class="profile__section-subtitle">Улица</h4>
					<p class="profile__section-text">Проспект Мира 1</p>	
				</div>
			</section>
		</div>
	</div>
</template>

<style lang="scss">
.profile__header
{
	display: flex;
	align-items: center;
	gap: 10px;
	border-bottom: 1px solid $grey-300;
	padding-bottom: 20px;
	margin-bottom: 20px;
}

.profile__header-point
{
	width: 20px;
	height: 20px;
	background-color: $accent-color;
	border-radius: 50%;
}

.profile__header-title
{
	font-size: 15px;
	line-height: 18px;
	font-weight: 400;
	margin-bottom: 0;
}

.profile__content
{
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.profile__section
{
	padding: 15px;
	background: $white;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	gap: 15px;

	&--kyc { gap: 10px; }
}

.profile__section-heading
{
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.profile__section-title
{
	font-size: 18px;
	line-height: 22px;
	margin: 0;
}

.profile__section-subtitle
{
	letter-spacing: normal;
	font-weight: 400;
	font-size: 15px;
	line-height: 18px;
	color: $grey-700;
	margin-bottom: 10px;
}

.profile__section-text
{
	font-size: 15px;
	line-height: 18px;
}

.profile__person
{
	display: flex;
	align-items: center;
	gap: 10px;
}

.profile__person-img
{
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background: $accent-color;
}

.profile__person-name
{
	font-size: 15px;
	line-height: 18px;
}

.profile__edit-button
{
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	border: 1px solid $grey-200;
	border-radius: 50%;
}

.profile__verify-button
{
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 13.5px 10px;
	border: none;
	border-radius: 10px;
	background-color: $black;
	color: $white;
	font-size: 15px;
	line-height: 18px;
	@include transition();

	&:hover
	{
		background-color: $white;
		color: $black;
	}
}
</style>
