<script setup>
// data
const switches = ref([
	{
		idx: 0,
		title: 'Вход в аккаунт',
		checked: false,
		type: 'action',
	},
	{
		idx: 1,
		title: 'Пополнение баланса',
		checked: false,
		type: 'action',
	},
	{
		idx: 2,
		title: 'Платежи',
		checked: false,
		type: 'action',
	},
	{
		idx: 3,
		title: 'Перевод',
		checked: false,
		type: 'action',
	},
	{
		idx: 4,
		title: 'Вывод',
		checked: false,
		type: 'action',
	},
	{
		idx: 5,
		title: 'Оплата услуг',
		checked: false,
		type: 'action',
	},
	{
		idx: 6,
		title: 'SMS',
		checked: false,
		type: 'method',
	},
	{
		idx: 7,
		title: 'Email',
		checked: false,
		type: 'method',
	},
	{
		idx: 8,
		title: 'Push-уведомления',	
		checked: false,
		type: 'method',
	},
]);

const notificationsActions = switches.value.filter(item => item.type === 'action');
const notificationsMethods = switches.value.filter(item => item.type === 'method');

// methods
const getSavedSwitchStatuses = (switches) =>
{
	switches.forEach(el =>
	{
		const switchStatus = localStorage.getItem('switch' + el.idx);
		if (switchStatus !== null)
			el.checked = !!switchStatus;
	});
};

const changeSwitchChecked = (idx) =>
{
	switches.value[idx].checked = !switches.value[idx].checked;
	localStorage.setItem('switch' + idx, switches.value[idx].checked);
};

// mounted
onMounted(() =>
{
	getSavedSwitchStatuses(switches.value);
});
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
						v-for="item in notificationsActions"
						:key="item.idx"
						:idx="item.idx"
						:title="item.title"
						:checked="item.checked"
						@change="changeSwitchChecked"
					/>
				</div>
			</section>

			<section class="notifications__section">
				<h3 class="notifications__section-title">Способы получения уведомлений</h3>
				<div class="notifications__switches">
					<UiSwitch
						v-for="item in notificationsMethods"
						:key="item.idx"
						:idx="item.idx"
						:title="item.title"
						:checked="item.checked"
						@change="changeSwitchChecked"
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
