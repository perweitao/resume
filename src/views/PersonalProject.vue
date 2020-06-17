<template>
	<div class="personal_project">
		<div class="project_net">
			<div class="name"></div>
			<div class="picture" title="github" @click="managementG">
				<img src="../assets/imgs/github.png" alt />
			</div>
			<div class="picture" title="博客园" @click="managementB">
				<img src="../assets/imgs/博客园.png" alt />
			</div>
			<div class="picture" title="有道云笔记" @click="managementY">
				<img src="../assets/imgs/有道云笔记.png" alt />
			</div>
		</div>
		<div class="project_per">
			<div class="name"></div>
			<div class="management_system_content">
				<div class="management_system" @click="managementJ">后台管理系统模板</div>

				<div class="github" title="github" @click="managementGt">
					<!-- <div>源码</div> -->
					<img src="../assets/imgs/github.png" alt />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "PersonalProject",
	components: {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {
		managementJ() {
			window.open("http://118.25.8.80:8880/", "_blank");
		},
		managementG() {
			window.open("https://github.com/doingSomethingGood", "_blank");
		},
		managementB() {
			window.open("https://www.cnblogs.com/doing-good/", "_blank");
		},

		managementY() {
			window.open(
				"https://www.cnblogs.com/doing-good/p/13125091.html",
				"_blank"
			);
		},
		managementGt() {
			window.open(
				"https://github.com/doingSomethingGood/managementSystem",
				"_blank"
			);
		}
	}
};
</script>

<style  lang='less' scoped>
.personal_project {
	padding: 0.8rem;
	.project_net {
		margin-top: 6.6rem;
		display: flex;
		align-items: center;
		justify-content: center;

		.picture {
			background: rgba(255, 255, 255, 0.4);
			border-radius: 0.4rem;
			width: 1.6rem;
			height: 1.6rem;
			margin: 0 0.8rem;
			cursor: pointer;
			img {
				width: 100%;
			}
		}
	}
	.project_per {
		margin-top: 8rem;
		.management_system_content {
			display: flex;
			align-items: center;
			justify-content: center;
			.management_system {
				font-size: 0.72rem;
				text-align: center;

				cursor: pointer;
			}
			.github {
				width: 1.2rem;
				height: 1.2rem;
				margin: 0 0.8rem;
				font-size: 0.64rem;
				display: flex;
				cursor: pointer;
				img {
					width: 100%;
				}
			}
		}
	}
}
</style>