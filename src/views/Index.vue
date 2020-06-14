<template>
	<div class="content_all">
		<div class="content_avatar">
			<div class="avatar">
				<img src="../assets/imgs/avatar.jpg" alt />
			</div>
			<div class="message">
				<div class="name">曹伟涛</div>
				<div class="email">978217648@qq.com</div>
			</div>
		</div>
		<div class="content_center">
			<template v-if="activeTemplate === 'Personal'">
				<personal></personal>
			</template>
			<template v-else-if="activeTemplate === 'Skills'">
				<skills></skills>
			</template>
			<template v-else-if="activeTemplate === 'WorkExperience'">
				<work-experience></work-experience>
			</template>
			<template v-else-if="activeTemplate === 'ProjectExperience'">
				<project-experience></project-experience>
			</template>
			<template v-else-if="activeTemplate === 'PersonalProject'">
				<personal-project></personal-project>
			</template>
			<template v-else-if="activeTemplate === 'SelfEvaluation'">
				<self-evaluation></self-evaluation>
			</template>
		</div>
		<div class="content_list">
			<template v-for="(item, index) in listData">
				<div
					class="list_item"
					:class="activeTemplate===item.key ? 'active_color': ''"
					:key="index"
					@click="templteClick(item)"
				>{{item.name}}</div>
			</template>
		</div>
	</div>
</template>

<script>
import Personal from "./Personal";
import PersonalProject from "./PersonalProject";
import ProjectExperience from "./ProjectExperience";
import SelfEvaluation from "./SelfEvaluation";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
export default {
	name: "Index",
	components: {
		Personal,
		PersonalProject,
		ProjectExperience,
		SelfEvaluation,
		Skills,
		WorkExperience
	},
	data() {
		return {
			listData: [
				{
					key: "Personal",
					name: "个人信息"
				},
				{
					key: "Skills",
					name: "专业技能"
				},
				{
					key: "WorkExperience",
					name: "工作经验"
				},
				{
					key: "ProjectExperience",
					name: "项目经验"
				},
				{
					key: "PersonalProject",
					name: "个人项目"
				},
				{
					key: "SelfEvaluation",
					name: "自我评价"
				}
			],
			activeTemplate: "Personal"
		};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		templteClick(params) {
			let _this = this;
			_this.activeTemplate = params.key;
			console.log(params);
		}
	}
};
</script>

<style lang="less">
.content_all {
	height: 100vh;
	overflow: hidden;
	// opacity: .2;
	background: url("../assets/imgs/background.jpg");
	// z-index: -1;

	.content_avatar {
		width: 300px;
		height: 100px;
		margin: 10px;
		padding: 10px;
		border-radius: 20px;
		background: rgba(164, 164, 255, 0.7);
		display: flex;
		align-items: center;
		.avatar {
			width: 80px;
			height: 80px;

			img {
				width: 100%;
				border-radius: 40px;
			}
		}
		.message {
			padding: 10px;
			.name {
				font-size: 28px;
				margin: 16px 0;
			}
			.email {
				font-size: 20px;
			}
		}
	}
	.content_list {
		position: absolute;
		top: 40%;
		right: 1%;
		.list_item {
			width: 80px;
			border: 1px solid rgb(255, 255, 255);
			color: rgb(236, 255, 167);
			cursor: pointer;
			font-weight: 700;
			border-radius: 10px;
			font-size: 16px;
			height: 20px;
			text-align: center;
			line-height: 20px;
			padding: 8px;
			margin: 8px;
		}
	}
}
.active_color {
	background: rgba(248, 169, 51, 0.5);
}
</style>