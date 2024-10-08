const local: App.I18n.Schema = {
  system: {
    title: 'Matrix 管理系统',
    updateTitle: '系统版本更新通知',
    updateContent: '检测到系统有新版本发布，是否立即刷新页面？',
    updateConfirm: '立即刷新',
    updateCancel: '稍后再说'
  },
  common: {
    action: '操作',
    add: '新增',
    addSuccess: '添加成功',
    backToHome: '返回首页',
    batchDelete: '批量删除',
    cancel: '取消',
    close: '关闭',
    check: '勾选',
    expandColumn: '展开列',
    columnSetting: '列设置',
    config: '配置',
    confirm: '确认',
    delete: '删除',
    deleteSuccess: '删除成功',
    confirmDelete: '确认删除吗？',
    edit: '编辑',
    warning: '警告',
    error: '错误',
    index: '序号',
    keywordSearch: '请输入关键词搜索',
    logout: '退出登录',
    logoutConfirm: '确认退出登录吗？',
    lookForward: '敬请期待',
    modify: '修改',
    modifySuccess: '修改成功',
    noData: '无数据',
    operate: '操作',
    pleaseCheckValue: '请检查输入的值是否合法',
    refresh: '刷新',
    reset: '重置',
    search: '搜索',
    switch: '切换',
    tip: '提示',
    trigger: '触发',
    update: '更新',
    updateSuccess: '更新成功',
    userCenter: '个人中心',
    yesOrNo: {
      yes: '是',
      no: '否'
    },
    pending: '进行中',
    success: '成功',
    fail: '失败',
    uplode: '点击上传'
  },
  request: {
    logout: '请求失败后登出用户',
    logoutMsg: '用户状态失效，请重新登录',
    logoutWithModal: '请求失败后弹出模态框再登出用户',
    logoutWithModalMsg: '用户状态失效，请重新登录',
    refreshToken: '请求的token已过期，刷新token',
    tokenExpired: 'token已过期'
  },
  theme: {
    themeSchema: {
      title: '主题模式',
      light: '亮色模式',
      dark: '暗黑模式',
      auto: '跟随系统'
    },
    grayscale: '灰色模式',
    colourWeakness: '色弱模式',
    layoutMode: {
      title: '布局模式',
      vertical: '左侧菜单模式',
      'vertical-mix': '左侧菜单混合模式',
      horizontal: '顶部菜单模式',
      'horizontal-mix': '顶部菜单混合模式',
      reverseHorizontalMix: '一级菜单与子级菜单位置反转'
    },
    recommendColor: '应用推荐算法的颜色',
    recommendColorDesc: '推荐颜色的算法参照',
    themeColor: {
      title: '主题颜色',
      primary: '主色',
      info: '信息色',
      success: '成功色',
      warning: '警告色',
      error: '错误色',
      followPrimary: '跟随主色'
    },
    scrollMode: {
      title: '滚动模式',
      wrapper: '外层滚动',
      content: '主体滚动'
    },
    page: {
      animate: '页面切换动画',
      mode: {
        title: '页面切换动画类型',
        'fade-slide': '滑动',
        fade: '淡入淡出',
        'fade-bottom': '底部消退',
        'fade-scale': '缩放消退',
        'zoom-fade': '渐变',
        'zoom-out': '闪现',
        none: '无'
      }
    },
    fixedHeaderAndTab: '固定头部和标签栏',
    header: {
      height: '头部高度',
      breadcrumb: {
        visible: '显示面包屑',
        showIcon: '显示面包屑图标'
      }
    },
    tab: {
      visible: '显示标签栏',
      cache: '缓存标签页',
      height: '标签栏高度',
      mode: {
        title: '标签栏风格',
        chrome: '谷歌风格',
        button: '按钮风格'
      }
    },
    sider: {
      inverted: '深色侧边栏',
      width: '侧边栏宽度',
      collapsedWidth: '侧边栏折叠宽度',
      mixWidth: '混合布局侧边栏宽度',
      mixCollapsedWidth: '混合布局侧边栏折叠宽度',
      mixChildMenuWidth: '混合布局子菜单宽度'
    },
    footer: {
      visible: '显示底部',
      fixed: '固定底部',
      height: '底部高度',
      right: '底部局右'
    },
    watermark: {
      visible: '显示全屏水印',
      text: '水印文本'
    },
    themeDrawerTitle: '主题配置',
    pageFunTitle: '页面功能',
    configOperation: {
      copyConfig: '复制配置',
      copySuccessMsg: '复制成功，请替换 src/theme/settings.ts 中的变量 themeSettings',
      resetConfig: '重置配置',
      resetSuccessMsg: '重置成功'
    }
  },
  route: {
    login: '登录',
    403: '无权限',
    404: '页面不存在',
    500: '服务器错误',
    home: '首页',
    agent: '代理管理',
    agent_account: '代理',
    'agent_test-order': '测试订单',
    'agent_manual-order': '手动下单',
    project: '项目管理',
    project_manage: '项目配置',
    'project_agent-level': '代理等级管理',
    project_tag: '投资分类标签管理',
    user: '用户管理',
    user_manage: '用户',
    record: '流水记录',
    record_unblock: '解锁记录',
    record_point: '积分记录',
    record_card: '点卡记录',
    record_reward: '收益记录',
    record_bonus: '分红收益来源',
    matrix: '矩阵管理',
    matrix_coin: '币种管理',
    manage: '系统管理',
    manage_system: '系统配置',
    manage_coin: '数据配置',
    manage_contract: '合约配置',
    manage_level: '升级条件和分红',
    manage_fee: '手续费配置',
    manage_user: '用户管理',
    'manage_user-detail': '用户详情',
    manage_role: '角色管理',
    manage_menu: '菜单管理',
    'multi-menu': '多级菜单',
    'multi-menu_first': '菜单一',
    'multi-menu_first_child': '菜单一子菜单',
    'multi-menu_second': '菜单二',
    'multi-menu_second_child': '菜单二子菜单',
    'multi-menu_second_child_home': '菜单二子菜单首页',
    exception: '异常页',
    exception_403: '403',
    exception_404: '404',
    exception_500: '500',
    plugin: '插件示例',
    plugin_copy: '剪贴板',
    plugin_charts: '图表',
    plugin_charts_echarts: 'ECharts',
    plugin_editor: '编辑器',
    plugin_editor_quill: '富文本编辑器',
    plugin_editor_markdown: 'MD 编辑器',
    plugin_icon: '图标',
    plugin_map: '地图',
    plugin_print: '打印',
    plugin_swiper: 'Swiper',
    plugin_video: '视频',
    plugin_barcode: '条形码',
    plugin_pinyin: '拼音',
    plugin_excel: 'Excel',
    plugin_pdf: 'PDF 预览',
    plugin_gantt: '甘特图',
    plugin_typeit: '打字机'
  },
  page: {
    login: {
      common: {
        loginOrRegister: '登录 / 注册',
        userNamePlaceholder: '请输入用户名',
        phonePlaceholder: '请输入手机号',
        codePlaceholder: '请输入验证码',
        passwordPlaceholder: '请输入密码',
        confirmPasswordPlaceholder: '请再次输入密码',
        codeLogin: '验证码登录',
        confirm: '确定',
        back: '返回',
        validateSuccess: '验证成功',
        loginSuccess: '登录成功',
        welcomeBack: '欢迎回来，{userName} ！'
      },
      pwdLogin: {
        title: '密码登录',
        rememberMe: '记住我',
        forgetPassword: '忘记密码？',
        register: '注册账号',
        otherAccountLogin: '其他账号登录',
        otherLoginMode: '其他登录方式',
        superAdmin: '超级管理员',
        admin: '管理员',
        user: '普通用户'
      },
      codeLogin: {
        title: '验证码登录',
        getCode: '获取验证码',
        reGetCode: '{time}秒后重新获取',
        sendCodeSuccess: '验证码发送成功',
        imageCodePlaceholder: '请输入图片验证码'
      },
      register: {
        title: '注册账号',
        agreement: '我已经仔细阅读并接受',
        protocol: '《用户协议》',
        policy: '《隐私权政策》'
      },
      resetPwd: {
        title: '重置密码'
      },
      bindWeChat: {
        title: '绑定微信'
      }
    },
    home: {
      branchDesc:
        '为了方便大家开发和更新合并，我们对main分支的代码进行了精简，只保留了首页菜单，其余内容已移至example分支进行维护。预览地址显示的内容即为example分支的内容。',
      greeting: '早安，{userName}, 今天又是充满活力的一天!',
      weatherDesc: '今日多云转晴，20℃ - 25℃!',
      projectCount: '项目数',
      message: '消息',
      downloadCount: '进行中的矩阵数',
      registerCount: '注册量',
      visitCount: '总矩阵数',
      turnover: '已结算的矩阵数',
      dealCount: '未启用的矩阵数',
      cardDataTitle: '矩阵数据',
      coinNumber: '支持的总币种数',
      coinDataTitle: '币种数据',
      tardeNumber: '支持的总交易对数',
      totalInvestmentAmount: '总投资金额（USDT）',
      totalReward: '总收益（USDT）',
      ongoingAmount: '进行中的金额（USDT）',
      withdrawnCash: '已提取的保证金（USDT）',
      undrawnCash: '未提取的保证金（USDT）',
      failedOrder: '卖单失败的笔数',
      moneyDataTitle: '出入金数据'
    },
    agent: {
      account: '账号',
      website: '网址',
      address: '用户地址',
      remark: '备注',
      matrix: '矩阵/仓位/logo',
      parts: '份数',
      actualAmount: '实际购买量',
      price: '价格 (U)',
      totalAmount: '总购买(U)',
      cash: '保证金',
      actualClaim: '实际收益',
      estimatedRevenue: '预计收益',
      surplus: '盈余',
      status: '状态',
      timeline: '时间节点',
      addTime: '添加时间',
      store: '仓位',
      amount: '数量',
      newOrder: '新增订单',
      orderId: '交易所订单号',
      type: '交易所标识',
      buySell: '订单方向',
      rise: '涨幅比例（绿涨红跌）',
      curPrice: '当前价格',
      buyStatus: '买入状态',
      sellStatus: '挂卖状态',
      buyTime: '挂买时间',
      sellPrice: '卖出价格',
      sellTime: '挂卖时间',
      shouldSell: '确认卖出吗？',
      sellOrder: '卖出订单',
      manualBuy: '手动下单',
      limitOrder: '限价单',
      marketOrder: '市价单',
      apiKey: '交易所ApiKey',
      inputKey: '请输入交易所ApiKey',
      tradePair: '交易所交易对'
    },
    matrix: {
      coinLebel: '币种名称',
      tradePair: '交易所交易对',
      logo: '币种图标',
      price: '币种价格',
      inputCoin: '请输入币种名称',
      inputPair: '请输入交易对',
      newCoin: '新增币种',
      editCoin: '编辑币种'
    },
    project: {
      level: '等级名称',
      price: '价格',
      newLevel: '新增等级',
      editLevel: '编辑等级',
      inputLevel: '请输入等级名称',
      drag: '拖拽',
      tagId: '标签ID',
      tagLabel: '标签名称',
      tagStatus: '状态',
      newTag: '新增标签',
      editTag: '编辑标签',
      inputTag: '请输入标签名称',
      projectName: '项目名称',
      projectLogo: '项目Logo',
      shareName: '分享界面名称',
      shareLogo: '分享界面Logo',
      swiper: '轮播图',
      newLogo: '新增项目',
      editLogo: '编辑项目',
      inputProject: '请输入项目名称',
      inputShare: '请输入分享界面名称'
    },
    record: {
      address: '用户地址',
      type: '类型',
      status: '状态',
      amount: '数量',
      actualAmount: '实际支付',
      createTime: '创建时间',
      finalTime: '完成时间',
      relatedOrders: '关联的订单',
      remark: '备注',
      time: '时间',
      unblockTitle: '解锁记录',
      pointTitle: '积分记录',
      cardTitle: '点卡记录',
      rewardTitle: '收益记录',
      bonusTitle: '分红收益来源',
      index: '序号'
    },
    user: {
      id: '用户ID',
      address: '用户地址',
      unblock: '是否解锁',
      proxyLevel: '代理等级',
      teamLevel: '团队等级',
      invsterAddress: '邀请人钱包地址',
      bondTime: '绑定关系时间',
      teamAmount: '团队业绩',
      point: '积分',
      card: '点卡',
      gridGain: '网格总收益/可领取',
      proxyGain: '代理总收益/可领取',
      teamGain: '团队总收益/可领取',
      unblockGain: '解锁收益/可领取',
      creactTime: '注册时间',
      newLevel: '新增等级',
      editLevel: '编辑等级',
      inputLevel: '请输入等级名称'
    },
    manage: {
      common: {
        status: {
          enable: '启用',
          disable: '禁用'
        }
      },
      role: {
        title: '角色列表',
        roleName: '角色名称',
        roleCode: '角色编码',
        roleStatus: '角色状态',
        roleDesc: '角色描述',
        menuAuth: '菜单权限',
        buttonAuth: '按钮权限',
        form: {
          roleName: '请输入角色名称',
          roleCode: '请输入角色编码',
          roleStatus: '请选择角色状态',
          roleDesc: '请输入角色描述'
        },
        addRole: '新增角色',
        editRole: '编辑角色'
      },
      user: {
        title: '用户列表',
        userName: '用户名',
        userGender: '性别',
        nickName: '昵称',
        userPhone: '手机号',
        userEmail: '邮箱',
        userStatus: '用户状态',
        userRole: '用户角色',
        form: {
          userName: '请输入用户名',
          userGender: '请选择性别',
          nickName: '请输入昵称',
          userPhone: '请输入手机号',
          userEmail: '请输入邮箱',
          userStatus: '请选择用户状态',
          userRole: '请选择用户角色'
        },
        addUser: '新增用户',
        editUser: '编辑用户',
        gender: {
          male: '男',
          female: '女'
        }
      },
      menu: {
        home: '首页',
        title: '菜单列表',
        id: 'ID',
        parentId: '父级菜单ID',
        menuType: '菜单类型',
        menuName: '菜单名称',
        routeName: '路由名称',
        routePath: '路由路径',
        pathParam: '路径参数',
        layout: '布局',
        page: '页面组件',
        i18nKey: '国际化key',
        icon: '图标',
        localIcon: '本地图标',
        iconTypeTitle: '图标类型',
        order: '排序',
        constant: '常量路由',
        keepAlive: '缓存路由',
        href: '外链',
        hideInMenu: '隐藏菜单',
        activeMenu: '高亮的菜单',
        multiTab: '支持多页签',
        fixedIndexInTab: '固定在页签中的序号',
        query: '路由参数',
        button: '按钮',
        buttonCode: '按钮编码',
        buttonDesc: '按钮描述',
        menuStatus: '菜单状态',
        form: {
          home: '请选择首页',
          menuType: '请选择菜单类型',
          menuName: '请输入菜单名称',
          routeName: '请输入路由名称',
          routePath: '请输入路由路径',
          pathParam: '请输入路径参数',
          page: '请选择页面组件',
          layout: '请选择布局组件',
          i18nKey: '请输入国际化key',
          icon: '请输入图标',
          localIcon: '请选择本地图标',
          order: '请输入排序',
          keepAlive: '请选择是否缓存路由',
          href: '请输入外链',
          hideInMenu: '请选择是否隐藏菜单',
          activeMenu: '请选择高亮的菜单的路由名称',
          multiTab: '请选择是否支持多标签',
          fixedInTab: '请选择是否固定在页签中',
          fixedIndexInTab: '请输入固定在页签中的序号',
          queryKey: '请输入路由参数Key',
          queryValue: '请输入路由参数Value',
          button: '请选择是否按钮',
          buttonCode: '请输入按钮编码',
          buttonDesc: '请输入按钮描述',
          menuStatus: '请选择菜单状态'
        },
        addMenu: '新增菜单',
        editMenu: '编辑菜单',
        addChildMenu: '新增子菜单',
        type: {
          directory: '目录',
          menu: '菜单'
        },
        iconType: {
          iconify: 'iconify图标',
          local: '本地图标'
        }
      },
      system: {
        config: '系统配置',
        exchangPriceSwitch: '是否启动交易所价格获取',
        syncNumber: '后台交易所订单状态每次同步数量',
        syncIterval: '后台交易所订单状态同步间隔（单位 分钟）',
        prepaidOrderExpiryTime: '预付订单【系统】过期时间（单位 秒）',
        contractExpiryTime: '预付订单【合约】过期时间（单位 秒）',
        orderExpiryTime: '交易所下单过期时间（单位 秒）',
        exchangeExpiryTime: '交易所交易过期时间（单位 秒）'
      },
      coin: {
        paidCoin: '解锁支付的币种',
        paidCoinNumber: '解锁支付的币种数量',
        coinType: '系统流通的币种',
        prohibitedTime: '禁止撤单时间（单位 分）',
        values: '每份的价值（usdt）',
        validation1: '转入合约比例验证1',
        validation2: '转入合约比例验证2',
        raise: '解锁支付的币种',
        normalCoin: '中性币种文案',
        payCoinText: '交易所支付的币种文案'
      },
      contract: {
        /** Unlocked topic hash */
        unblockHash: '解锁的话题Hash',
        /** Topic hash for usdt earnings */
        usdtEarnHash: 'usdt收益的话题Hash',
        /** Buy points topic hash */
        buyPointHash: '购买积分话题hash'
      },
      teamLevel: {
        /** Performance required for team level V5 */
        V5Yield: '团队等级V5所需业绩',
        /** Performance required for team level V4 */
        V4Yield: '团队等级V4所需业绩',
        /** Performance required for team level V3 */
        V3Yield: '团队等级V3所需业绩',
        /** Performance required for team level V2 */
        V2Yield: '团队等级V2所需业绩',
        /** Performance required for team level V1 */
        V1Yield: '团队等级V1所需业绩',
        /** Number of direct pushes from V4 required for team level V5 */
        V5Inviter: '团队等级V5所需V4的直推数',
        /** Number of direct pushes from V3 required for team level V4 */
        V4Inviter: '团队等级V4所需V3的直推数',
        /** Number of direct pushes from V2 required for team level V3 */
        V3Inviter: '团队等级V3所需V2的直推数',
        /** Number of direct pushes from V1 required for team level V2 */
        V2Inviter: '团队等级V2所需V1的直推数',
        /** Team V5 ratio */
        V5Ratio: '团队V5比例',
        /** Team V4 ratio */
        V4Ratio: '团队V4比例',
        /** Team V3 ratio */
        V3Ratio: '团队V3比例',
        /** Team V2 ratio */
        V2Ratio: '团队V2比例',
        /** Team V1 ratio */
        V1Ratio: '团队V1比例'
      },
      fee: {
        /** Spot Earnings Handling Charge */
        investFee: '现货收益手续费',
        /** Grid Revenue Handling Fee */
        gridFee: '网格收益手续费',
        /** Unlock the fixed currency given */
        unblockCoin: '解锁给的固定币种',
        /** Unlock the fixed number */
        unblockAmount: '解锁给的固定数量'
      }
    }
  },
  form: {
    required: '不能为空',
    userName: {
      required: '请输入用户名',
      invalid: '用户名格式不正确'
    },
    phone: {
      required: '请输入手机号',
      invalid: '手机号格式不正确'
    },
    pwd: {
      required: '请输入密码',
      invalid: '密码格式不正确，6-18位字符，包含字母、数字、下划线'
    },
    confirmPwd: {
      required: '请输入确认密码',
      invalid: '两次输入密码不一致'
    },
    code: {
      required: '请输入验证码',
      invalid: '验证码格式不正确'
    },
    email: {
      required: '请输入邮箱',
      invalid: '邮箱格式不正确'
    }
  },
  dropdown: {
    closeCurrent: '关闭',
    closeOther: '关闭其它',
    closeLeft: '关闭左侧',
    closeRight: '关闭右侧',
    closeAll: '关闭所有'
  },
  icon: {
    themeConfig: '主题配置',
    themeSchema: '主题模式',
    lang: '切换语言',
    fullscreen: '全屏',
    fullscreenExit: '退出全屏',
    reload: '刷新页面',
    collapse: '折叠菜单',
    expand: '展开菜单',
    pin: '固定',
    unpin: '取消固定'
  },
  datatable: {
    itemCount: '共 {total} 条'
  }
};

export default local;
