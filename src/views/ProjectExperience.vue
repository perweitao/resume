<template>
	<div class="project_content">
		<template v-for="(item, index) in projectList">
			<div class="project" :key="index">
				<div class="img_content">
					<img :src="item.img" alt />
				</div>
				<div class="message_content">
					<div class="name">{{item.name}}</div>
					<div class="company">{{item.company}}</div>
					<div class="describe">{{item.describe}}</div>
					<div class="skills">{{item.skills}}</div>
					<!-- <div class="persional">{{item.persional}}</div> -->
				</div>
			</div>
		</template>
	</div>
</template>

<script>
export default {
	name: "ProjectExperience",
	components: {},
	data() {
		return {
			projectList: [
				{
					name: "菜单系统",
					img: require("../assets/imgs/project/5.jpg"),
					company: "易恒健康",
					describe:
						"所有后台统一管理系统，现有项目整理，新项目快速开发",
					skills: "vue、vuex、axios、router、iframe、sass、rem等",
					persional: "独立开发"
				},
				{
					name: "双十一看板",
					img: require("../assets/imgs/project/2.jpg"),
					company: "易恒健康",
					describe: "公司双十一当天使用大屏看板",
					skills: "vue、axios、router、sass、rem等",
					persional: "独立开发"
				},
				{
					name: "ecmoho-chart",
					img: require("../assets/imgs/project/4.jpg"),
					company: "易恒健康",
					describe:
						"公司内部插件，通过npm install ecmoho-chart -S 安装使用",
					skills: "vue、webpack、echarts等",
					persional: "独立开发"
				},
				{
					name: "互联网医院",
					img: require("../assets/imgs/project/3.jpg"),
					company: "易恒健康",
					describe:
						"一款线上互联网医院项目、医患之间网上进行问诊、医生端开药方",
					skills: "vue、vuex、axios、router、Im即时通讯、rem等",
					persional:
						"患者端和医生端im即时通讯、医生端开处方、患者端样式调整、医生端问诊记录、患者端查询药物库等"
				},
				{
					name: "天津食品集团财务分析系统",
					img: require("../assets/imgs/project/1.png"),
					company: "安徽经邦软件技术有限公司",
					describe:
						"这是一款针对财务风险的发现、分析、防范系统，根据财务数据，指出存在风险以及预防措施。",
					skills:
						"vue、vuex、axios、router、sass、rem、Oracle、Java等",
					persional: "风险预警、风险制度、风险组织、预测模型"
				},
				// {
				// 	name: "11111",
				// 	img: require("../assets/imgs/project/5.jpg"),
				// 	company: "易恒健康",
				// 	describe: "",
				// 	skills: "",
				// 	persional: ""
				// }
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

<style  lang='less'  scoped>
.project_content {
	padding: 4rem 0rem 0rem 1.8rem;
	.project {
		cursor: pointer;
		float: left;
		width: 10.8rem;
		height: 6.8rem;
		margin: 0 0.4rem 0.4rem 0.4rem;
		.message_content {
			padding: 0.4rem;

			div {
				font-size: 0.64rem;
			}
			.name {
				color: rgb(14, 13, 13);
				font-size: 0.72rem;
				font-weight: 700;
				text-align: center;
			}
			.company {
				color: rgb(14, 13, 13);
				text-align: right;
			}
			.describe {
				color: rgb(14, 13, 13);
				text-indent: 1.28rem;
				margin-top: 0.3rem;
			}
			.skills {
				color: rgb(14, 13, 13);
				margin-top: 0.3rem;
			}
			// .persional {
			// }
		}
		.img_content {
			position: absolute;
			width: 10.8rem;
			height: 6.8rem;
			z-index: -1;
			img {
				width: 100%;
				opacity: 0.3;
				border-radius: 0.8rem;
				box-shadow: 5px 5px 5px  black;
			}
		}
	}
}
.project:hover {
	transform: scale(1.1);
}
</style>