<template>
	<div class="skill_list">
		<div class="skills_web skill_content">
			<template v-for="(item,index) in skills_web">
				<progress-compontent :percent="item" :key="index"></progress-compontent>
			</template>
		</div>
		<div class="line"></div>
		<div class="skills_frame skill_content">
			<template v-for="(item,index) in skills_frame">
				<progress-compontent :percent="item" :key="index"></progress-compontent>
			</template>
		</div>
		<div class="line"></div>
		<div class="skills_ui skill_content">
			<template v-for="(item,index) in skills_ui">
				<progress-compontent :percent="item" :key="index"></progress-compontent>
			</template>
		</div>
		<div class="line"></div>
		<div class="skills_db skill_content">
			<template v-for="(item,index) in skills_db">
				<progress-compontent :percent="item" :key="index"></progress-compontent>
			</template>
		</div>
		<div class="line"></div>
		<div class="skills_java skill_content">
			<template v-for="(item,index) in skills_java">
				<progress-compontent :percent="item" :key="index"></progress-compontent>
			</template>
		</div>
		<div class="line"></div>
		<div class="skills_other skill_content">
			<template v-for="(item,index) in skills_other">
				<progress-compontent :percent="item" :key="index"></progress-compontent>
			</template>
		</div>
	</div>
</template>

<script>
import ProgressCompontent from "../components/ProgressCompontent";
export default {
	name: "Skills",
	components: {
		ProgressCompontent
	},
	data() {
		return {
			skills_web: [
				{
					name: "html",
					percent: 91
				},
				{
					name: "css",
					percent: 85
				},
				{
					name: "JavaScript",
					percent: 85
				},
				{
					name: "DOM",
					percent: 81
				},
				{
					name: "stylus",
					percent: 87
				},
				{
					name: "less",
					percent: 91
				},
				{
					name: "sass",
					percent: 81
				},
				{
					name: "nodejs",
					percent: 65
				}
			],
			skills_frame: [
				{
					name: "Vue",
					percent: 95
				},

				{
					name: "jQuery",
					percent: 91
				},
				{
					name: "uni-app",
					percent: 25
				}
			],
			skills_ui: [
				{
					name: "element Ui",
					percent: 88
				},
				{
					name: "echarts",
					percent: 95
				},
				{
					name: "bootstrap",
					percent: 81
				}
			],
			skills_db: [
				{
					name: "Oracle",
					percent: 9
				},
				{
					name: "MySQL",
					percent: 15
				}
			],
			skills_java: [
				{
					name: "Java",
					percent: 8
				}
			],
			skills_other: [
				{
					name: "Axure",
					percent: 15
				},
				{
					name: "微信小程序",
					percent: 21
				}
			]
		};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="less"  scoped>
.skill_list {
	.skill_content {
		width: 100%;
		margin: 1vh 0.8rem;
	}
	.line {
		width: 100%;
		border-bottom: 0.04rem solid white;
		margin: 0;
	}
}
</style>