<template>
	<div class="progress">
		<span class="progress_name">{{percent.name}}：</span>
		<div class="progress_percent">
			<el-progress :stroke-width="10" :percentage="percent.percent" :color="customColors"></el-progress>
		</div>
	</div>
</template>

<script>
export default {
	name: "ProgressCompontent",
	components: {},
	data() {
		return {
			customColors: [
				{ color: "#f56c6c", percentage: 20 },
				{ color: "#e6a23c", percentage: 40 },
				{ color: "rgb(92, 184, 122)", percentage: 60 },
				{ color: "rgb(92, 184, 122)", percentage: 80 },
				{ color: "rgb(92, 184, 122)", percentage: 100 }
			]
		};
	},
	props: {
		percent: {
			type: Object,
			default: () => {}
		}
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style  lang="less"  scoped>
.progress {
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	.progress_name {
		width: 20%;
		font-size: 0.72rem;
		text-align: right;
		display: inline-block;
		color: white;
	}
	.progress_percent {
		display: inline-block;
		width: 80%;
	}
}
</style>