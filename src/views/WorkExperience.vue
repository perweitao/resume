<template>
	<div>
		<el-carousel  type="card" height="350px" trigger="click" :autoplay="authPlay">
			<el-carousel-item v-for="(company, index) in companys" :key="index">
				<div class="company_message">
					<div class="company_name">{{company.name}}</div>
					<div class="work_time">工作时间：{{company.time}}</div>
					<div class="compamy_describe">公司描述：{{company.describe}}</div>
					<div class="compamy_address">公司位置：{{company.address}}</div>
					<div class="compamy_work">
						<div class="work_title">主要工作：</div>
						<div class="company_content">
							<template v-for="(item, index) in company.work">
								<div class="work" :key="item">{{index+1}}、{{item}}</div>
							</template>
						</div>
					</div>
				</div>
			</el-carousel-item>
		</el-carousel>
	</div>
</template>

<script>
export default {
	name: "WorkExperience",
	components: {},
	data() {
		return {
			companys: [
				{
					name: "易恒健康",
					describe: "电商相关公司",
					address:'上海',
					time: "2019.9-至今",
					work: [
						"负责公司所有平台后台管理系统开发",
						"推广系统开发",
						"供应链系统开发",
						"菜单系统开发",
						"商城小程序开发",
						"部分产品设计，原型图设计"
					]
				},
				{
					name: "安徽经邦软件技术有限公司",
					describe: "财务分析、风险管控",
					address:'安徽-合肥',
					time: "2018.5-2019.8",
					work: [
						"负责江苏农垦集团公司财务系统开发",
						"北京首创集团财务分析系统",
						"担任项目4组组长",
						"天津食品集团等风控系统开发",
						"公司产品开发"
					]
				},
				{
					name: "合肥优益互动网络科技有限公司",
					describe: "h5游戏开发",
					address:'安徽-合肥',
					time: "2017.5-2018.4",
					work: ["负责前端游戏功能实现"]
				}
			],
			authPlay:false
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
.company_message {
	padding: 0.8rem;
	border-radius: 0.4rem;
	.company_name {
		font-size: 0.8rem;
		text-align: center;
		font-weight: 700;
		margin-bottom: 0.8rem;
	}
	.work_time {
		font-size: 0.7rem;
		margin-bottom: 0.8rem;
	}
	.compamy_describe {
		font-size: 0.7rem;
		margin-bottom: 0.8rem;
	}
	.compamy_address{
		font-size: 0.7rem;
		margin-bottom: 0.8rem;
	}
	.compamy_work {
		font-size: 0.7rem;
		margin-bottom: 0.8rem;
		display: flex;
		// .work_title {
		// 	// width: 4rem;
		// }
		.company_content {
			.work {
				font-size: 0.7rem;
				margin-bottom: 0.4rem;
			}
		}
	}
}

// .el-carousel__item h3 {
// 	color: #475669;
// 	font-size: 0.56rem;
// 	opacity: 0.75;
// 	line-height: 8rem;
// 	margin: 0;
// }
.el-carousel__item{
	border-radius: 0.4rem;
	background-color: rgba(255, 240, 153, 0.745);
}

// .el-carousel__item:nth-child(2n) {
// 	background-color: rgba(247, 246, 244, 0.658);
// }

// .el-carousel__item:nth-child(2n + 1) {
// 	background-color: rgba(255, 240, 153, 0.745);
// }
</style>