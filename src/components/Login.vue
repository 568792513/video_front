<template>
	<div class="login">
		<div class="login-box">
			<div class="title">欢迎使用</div>
			<div class="content">
				<el-form :model="loginForm" :rules="rules" ref="loginForm">
					<el-form-item prop="username">
					    <el-input placeholder="请输入工号"></el-input>
					</el-form-item>
					<el-form-item prop="password">
					    <el-input type="password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item class="btn-row">
					    <el-button type="primary" :loading="isSubmit" class="fullWitch">登 录</el-button>
					</el-form-item>
				</el-form>
			</div>
		</div>
	</div>
</template>
<script type="text/ecmascript-6">
	export default {
	  name: 'login',
		data() {
			return {
			}
		},
		methods: {
		}
	};
</script>
<style scoped>
</style>
