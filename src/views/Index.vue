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
			// console.log(params);
		}
	}
};
</script>

<style lang="less"  scoped>
.content_all {
	height: 100vh;
	overflow: hidden;
	// opacity: .2;
	// background: url("../assets/imgs/background.jpg");
	background: #87b0a5;
	// z-index: -1;

	.content_avatar {
		width: 10rem;
		height: 3.2rem;
		margin: 0.4rem;
		padding: 0.4rem;
		border-radius: 0.8rem;
		box-shadow: 10px 10px 5px  black;
		background: rgba(162, 162, 247, 0.404);
		display: flex;
		align-items: center;
		.avatar {
			width: 3.2rem;
			height: 3.2rem;

			img {
				width: 100%;
				border-radius: 1.6rem;
			}
		}
		.message {
			padding: 0.4rem;
			.name {
				font-size: 0.8rem;
				margin: 0.4rem 0;
			}
			.email {
				font-size: 0.56rem;
			}
		}
	}
	.content_center{
		width: 50vw;
		height: 60vh;
		position:absolute;
		top: 47%;
		left: 50%;
		transform: translate(-50%,-50%);
		background: rgba(110, 110, 138, 0.4);
		border-radius: 1.6rem;
		box-shadow: 5px 5px 5px  black;
		padding: 0.4rem;
	}
	.content_list {
		position: absolute;
		top: 40%;
		right: 1%;
		.list_item {
			width: 3.2rem;
			border: 0.04rem solid rgb(255, 255, 255);
			color: rgb(236, 255, 167);
			cursor: pointer;
			font-weight: 700;
			border-radius: 0.4rem;
			box-shadow: 5px 5px 5px  black;
			font-size: 0.64rem;
			height: 0.8rem;
			text-align: center;
			line-height: 0.8rem;
			padding: 0.32rem;
			margin: 0.32rem;
		}
	}
}
.active_color {
	background: rgba(248, 169, 51, 0.5);
}
</style>