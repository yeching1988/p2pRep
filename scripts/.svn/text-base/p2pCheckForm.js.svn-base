$(function() {
	$(".navbar-right li").on("click", function() {
		$(this).addClass("active").siblings("li").removeClass("active");
	});
	//文档加载完毕调用tooltip()显示工具提示
	$('[data-toggle="tooltip"]').tooltip();
	//-----------------------会员登录----------------------------------------------------
	//使用bootstrapvalidator验证表单
	$('#loginForm')
		.bootstrapValidator({
			message: 'This value is not valid', //全局的消息提示
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok', //显示验证成功时的小图标
				invalid: 'glyphicon glyphicon-remove', //显示验证失败时的小图标
				validating: 'glyphicon glyphicon-refresh' //等待验证的图标
			},
			//验证表单字段
			fields: {
				username: {
					message: 'The username is not valid', //当前字段的提示信息
					validators: {
						notEmpty: {
							message: '必填信息，用户名不能为空'
						},
						stringLength: {
							min: 6,
							max: 18,
							message: '用户名长度为6到18位'
						},
						/*remote: {
						    url: 'remote.php',
						    message: 'The username is not available'
						},*/
						regexp: {
							regexp: /^[a-zA-Z0-9_]+$/,
							message: '用户名必须是大小写英文字母、数字、下划线组成'
						}
					}
				},
				//密码
				inputPassword1: {
					validators: {
						notEmpty: {
							message: '密码长度不能为空'
						},
						stringLength: {
							min: 6,
							max: 18,
							message: '用户名长度为6到18位'
						},
					}
				}

			}
		})
		//前端静态验证后向后端发送AJAX请求
		.on('success.form.bv', function(e) {
			// 阻止表单默认提交行为
			e.preventDefault();
			// 获取事件源
			var $form = $(e.target);
			// 获取验证插件bootstrapValidator
			//		            $.get(url, [data], [callback], [type])
			//			            url:待载入页面的URL地址
			//						data:待发送 Key/value 参数。
			//						callback:载入成功时回调函数。
			//						type:返回内容格式，xml, html, script, json, text, _default。
			var bv = $form.data('bootstrapValidator');
			// 发送AJAX请求到后端 
			var sendData = $form.serialize();
			$.get("./server/loginCheck.json", sendData, function(result) {
				console.log("服务器将返回的数据是：", result);
				//{isSuccess: true, message: "恭喜你，用户注册成功！"}
				//根据服务器返回结果处理前台数据
				if(result.isSuccess) {
					//验证通过
					//alert(result.message);
					//消息提示文字
					$("#loginCont").text(result.message);
					//添加提示图标
					$("#loginIcon").addClass("glyphicon-ok");
					//显示模态框
					$("#loginMsg").modal('show');
					//页面倒计时效果并跳转
					var timeNum = 5;
					$("#timeoutNum").html("等待<b>" + timeNum + "</b>秒后跳转到登录页面！！！");
					var timeId = setInterval(function() {
						timeNum--;
						$("#timeoutNum").html("等待<b>" + timeNum + "</b>秒后跳转到登录页面！！！");
						if(timeNum == 0) {
							clearInterval(timeId);
							location.href = "person.html";
						}
					}, 1000);
				} else {
					//验证失败
					//alert(result.message);
					//消息提示文字
					$("#loginCont").text(result.message);
					//添加提示图标
					$("#loginIcon").addClass("glyphicon-remove");
					//显示模态框
					$("#loginMsg").modal('show');
				}
			}, 'json');
		});
		//-----------------------会员注册----------------------------------------------------
		//使用bootstrapvalidator验证表单
	$('#registerForm')
		.bootstrapValidator({
			message: 'This value is not valid', //全局的消息提示
			feedbackIcons: {
				valid: 'glyphicon glyphicon-ok', //显示验证成功时的小图标
				invalid: 'glyphicon glyphicon-remove', //显示验证失败时的小图标
				validating: 'glyphicon glyphicon-refresh' //等待验证的图标
			},
			//验证表单字段
			fields: {
				username: {
					message: 'The username is not valid', //当前字段的提示信息
					validators: {
						notEmpty: {
							message: '必填信息，用户名不能为空'
						},
						stringLength: {
							min: 6,
							max: 18,
							message: '用户名长度为6到18位'
						},
						/*remote: {
						    url: 'remote.php',
						    message: 'The username is not available'
						},*/
						regexp: {
							regexp: /^[a-zA-Z0-9_]+$/,
							message: '用户名必须是大小写英文字母、数字、下划线组成'
						}
					}
				},
				//密码
				inputPassword1: {
					validators: {
						notEmpty: {
							message: '密码长度不能为空'
						},
						stringLength: {
							min: 6,
							max: 18,
							message: '用户名长度为6到18位'
						},
					}
				},
				//确认密码
				inputPassword2: {
					validators: {
						notEmpty: {
							message: '密码长度不能为空'
						},
						stringLength: {
							min: 6,
							max: 18,
							message: '用户名长度为6到18位'
						},
						//两次密码是否相同
						identical: {
							field: 'inputPassword1',
							message: '两次输入密码不一致'
						}
					}
				}
			}
		})
		//前端静态验证后向后端发送AJAX请求
		.on('success.form.bv', function(e) {
			// 阻止表单默认提交行为
			e.preventDefault();
			// 获取事件源
			var $form = $(e.target);
			// 获取验证插件bootstrapValidator
			//		            $.get(url, [data], [callback], [type])
			//			            url:待载入页面的URL地址
			//						data:待发送 Key/value 参数。
			//						callback:载入成功时回调函数。
			//						type:返回内容格式，xml, html, script, json, text, _default。
			var bv = $form.data('bootstrapValidator');
			// 发送AJAX请求到后端 
			var sendData = $form.serialize();
			$.get("./server/userCheck.json", sendData, function(result) {
				console.log("服务器将返回的数据是：", result);
				//{isSuccess: true, message: "恭喜你，用户注册成功！"}
				//根据服务器返回结果处理前台数据
				if(result.isSuccess) {
					//验证通过
					//alert(result.message);
					//消息提示文字
					$("#regMsgCont").text(result.message);
					//添加提示图标
					$("#regMsgIcon").addClass("glyphicon-ok");
					//显示模态框
					$("#regMsg").modal('show');
					//页面倒计时效果并跳转
					var timeNum = 5;
					$("#timeoutNum").html("等待<b>" + timeNum + "</b>秒后跳转到登录页面！！！");
					var timeId = setInterval(function() {
						timeNum--;
						$("#timeoutNum").html("等待<b>" + timeNum + "</b>秒后跳转到登录页面！！！");
						if(timeNum == 0) {
							clearInterval(timeId);
							location.href = "login.html";
						}
					}, 1000);
				} else {
					//验证失败
					//alert(result.message);
					//消息提示文字
					$("#regMsgCont").text(result.message);
					//添加提示图标
					$("#regMsgIcon").addClass("glyphicon-remove");
					//显示模态框
					$("#regMsg").modal('show');
				}
			}, 'json');
		});
})