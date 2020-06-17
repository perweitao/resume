<template>
	<div class="personal_content">
		<div class="personal_message">
			<div class="avatar">
				<img src="../assets/imgs/avatar.jpg" alt />
			</div>
			<div class="message">
				<div class="age breath_class">27</div>
				<div class="education breath_class">本科</div>
				<div class="address breath_class">上海</div>
				<div class="status breath_class">在职</div>
			</div>
			<div class="text">如果不努力前行，怎么对得起过去受过的罪</div>
			<div class="line"></div>

			<div class="personal_des">
				<p>我叫曹伟涛</p>
				<p>3年前端工作经验</p>
				<!-- <p>在技术快速迭代的现在，只有不断汲取新知识，才能端好前端的饭碗</p> -->
				<p>978217648@qq.com</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Personal",
	components: {},
	data() {
		return {};
	},
	computed: {},
	watch: {},
	created() {},
	mounted() {},
	methods: {}
};
</script>

<style lang="less"  scoped>
.personal_content {
	.personal_message {
		position: relative;
		.avatar {
			position: absolute;
			top: -1.76rem;
			left: 17.84rem;
			// left: 50%;
			// transform: translate(-50%, -50%);
			width: 2.8rem;
			height: 2.8rem;
			img {
				width: 100%;
				border-radius: 1.4rem;
			}
		}
		.message {
			position: absolute;
			left: 50%;
			transform: translate(-50%, 96%);
			display: flex;
			width: 20rem;
			height: 2.8rem;
			align-items: center;
			justify-content: space-around;
			.age,
			.education,
			.address,
			.status {
				width: 2rem;
				height: 2rem;
				border-radius: 1rem;
				line-height: 2rem;
				text-align: center;
				font-size: 0.64rem;
				font-weight: 700;
				border: 0.04rem solid rgba(59, 235, 235, 1);
			}
			.age {
			}
			.education {
			}
			.address {
			}
			.status {
			}
		}
		.text {
			position: absolute;
			left: 50%;
			top: 6.64rem;
			width: 50vw;
			text-align: center;
			transform: translate(-50%);
			font-size: 1.2rem;
			font-weight: 700;
			color: rgb(255, 255, 255);
		}
		.line {
			width: 50vw;
			border-bottom: 0.04rem solid white;
			position: absolute;
			// left: 50%;
			top: 8rem;
			// transform: translate(-50%);
		}
		.personal_des {
			position: absolute;
			// left: 50%;
			top: 9.6rem;
			// transform: translate(-50%);
			p {
				font-size: 0.8rem;
				display: inline-block;
				width: 50vw;
				text-align: center;
				line-height: 1.6rem;
				height: 1.6rem;
				color: cornsilk;;
			}
		}
	}
}

.breath_class {
	-webkit-animation-timing-function: ease-in-out;
	-webkit-animation-name: breathe;
	-webkit-animation-duration: 1500ms;
	-webkit-animation-iteration-count: infinite;
	-webkit-animation-direction: alternate;
}

@keyframes breathe {
	0% {
		opacity: 0.5;
		box-shadow: 0 0.04rem 0.08rem rgba(255, 255, 255, 0.1);
	}
	100% {
		opacity: 1;
		border: 0.04rem solid rgba(59, 235, 235, 1);
		box-shadow: 0 0.04rem 1.2rem rgba(59, 255, 255, 1);
	}
}
</style>