/**
 * Namespace Api
 *
 * All backend api type
 */
declare namespace Api {
  namespace Common {
    /** common params of paginating */
    interface PaginatingCommonParams {
      /** current page number */
      current: number;
      /** page size */
      size: number;
      /** total count */
      total: number;
    }

    /** common params of paginating query list data */
    interface PaginatingQueryRecord<T = any> extends PaginatingCommonParams {
      records: T[];
    }

    /** common search params of table */
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /**
     * enable status
     *
     * - "1": enabled
     * - "2": disabled
     */
    type EnableStatus = '1' | '2';

    /**
     * unblock status
     *
     * - "1": pending
     * - "2": success
     * - "3": fail
     */
    type UnblockStatus = '1' | '2' | '3';

    /** common record */
    type CommonRecord<T = any> = {
      /** record id */
      id: number;
      /** record creator */
      createBy: string;
      /** record create time */
      createTime: string;
      /** record updater */
      updateBy: string;
      /** record update time */
      updateTime: string;
      /** record status */
      status: EnableStatus | null;
    } & T;
  }

  /**
   * namespace Auth
   *
   * backend api module: "auth"
   */
  namespace Auth {
    interface LoginToken {
      token: string;
      refreshToken: string;
    }

    interface UserInfo {
      userId: string;
      userName: string;
      roles: string[];
      buttons: string[];
    }
  }

  /**
   * namespace Route
   *
   * backend api module: "route"
   */
  namespace Route {
    type ElegantConstRoute = import('@elegant-router/types').ElegantConstRoute;

    interface MenuRoute extends ElegantConstRoute {
      id: string;
    }

    interface UserRoute {
      routes: MenuRoute[];
      home: import('@elegant-router/types').LastLevelRouteKey;
    }
  }

  /**
   * namespace RecordManage
   *
   * backend api module: "RecordManage"
   */
  namespace RecordManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** Unblock */
    type Unblock = Common.CommonRecord<{
      /** user address */
      address: string;
      /** user pay amount */
      amount: number;
      /* pay time */
      time: string;
    }>;

    /* point number */
    type Point = Common.CommonRecord<{
      /** user address */
      address: string;
      /** user pay amount */
      amount: number;
      /* order type */
      type: string;
      /** user pay amount */
      remark: string;
      /* pay time */
      time: string;
    }>;

    /* point card */
    type Card = Common.CommonRecord<{
      /** user address */
      address: string;
      /* order type */
      type: string;
      /** user pay amount */
      amount: number;
      /** user pay amount */
      remark: string;
      /* pay time */
      time: string;
    }>;

    /* reward */
    type Reward = Common.CommonRecord<{
      /** user address */
      address: string;
      /** reward type */
      type: string;
      /** user pay amount */
      amount: number;
      /* add time */
      createTime: string;
      /* pay time */
      finalTime: string;
    }>;

    /* bonus 用户地址，类型（团队收益/代理收益/网格加权收益/投资收益/），数量，时间。关联的订单（来自于哪个订单给到的收益）。 */
    type Bonus = Common.CommonRecord<{
      /** user address */
      address: string;
      /** reward type */
      type: string;
      /** user pay amount */
      amount: number;
      /* add time */
      createTime: string;
      /* related Orders */
      relatedOrders: string;
    }>;

    /** Unblock Record */
    type UnblockRecord = Common.PaginatingQueryRecord<Unblock>;

    /** Point Record */
    type PointRecord = Common.PaginatingQueryRecord<Point>;

    /** Card Record */
    type CardRecord = Common.PaginatingQueryRecord<Card>;

    /** Reward Record */
    type RewardRecord = Common.PaginatingQueryRecord<Reward>;

    /** Bonus Record */
    type BonusRecord = Common.PaginatingQueryRecord<Bonus>;
  }

  /**
   * namespace AgentManage
   *
   * backend api module: "agentManage"
   */
  namespace AgentManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** user */
    type User = Common.CommonRecord<{
      /** user address */
      address: string;
      /** user website */
      website: string;
      /** remark */
      remark: string;
    }>;

    /** level */
    type Level = Common.CommonRecord<{
      /** user address */
      level: string;
      /** user website */
      price: number;
    }>;

    /** order */
    type Order = Common.CommonRecord<{
      /** user address */
      address: string;
      /** ordier id */
      orderId: string;
      /** order type */
      type: string;
      /** buy-sell */
      buySell: string;
      /** buy sell number */
      amount: string;
      /** order price */
      price: string;
      /** order rise fall */
      rise: string;
      /** order current price */
      curPrice: string;
      /** order buy status */
      buyStatus: string;
      /** order sell status */
      sellStatus: string;
      /** order create time */
      buyTime: string;
      /** order sell price */
      sellPrice: string;
      /** order sell time */
      sellTime: string;
    }>;

    /** user search params */
    type UserSearchParams = CommonType.RecordNullable<
      Pick<Api.AgentManage.User, 'address' | 'website' | 'remark'> & CommonSearchParams
    >;

    /** level search params */
    type UserLevelSearchParams = CommonType.RecordNullable<
      Pick<Api.AgentManage.Level, 'level' | 'price'> & CommonSearchParams
    >;

    /** user list */
    type UserList = Common.PaginatingQueryRecord<User>;

    /** user list */
    type UserLevel = Common.PaginatingQueryRecord<Level>;

    /** manual order */
    type OrderList = Common.PaginatingQueryRecord<Order>;
  }

  /**
   * namespace MatrixManage
   *
   * backend api module: "MatrixManage"
   */
  namespace MatrixManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** coin */
    type Coin = Common.CommonRecord<{
      /** coin name */
      label: string;
      /** trade pair */
      tradePair: string;
      /* logo */
      logo: string;
      /** coin price */
      price: string;
    }>;

    /** level search params */
    type UserLevelSearchParams = CommonType.RecordNullable<
      Pick<Api.AgentManage.Level, 'level' | 'price'> & CommonSearchParams
    >;

    /** coin list */
    type CoinList = Common.PaginatingQueryRecord<Coin>;
  }

  /**
   * namespace UserManage
   *
   * backend api module: "userManage"
   */
  namespace UserManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** user */
    type User = Common.CommonRecord<{
      /** user address */
      address: string;
      /** user block */
      unblock: boolean;
      /** proxy level */
      proxyLevel: string;
      /** team level */
      teamLevel: string;
      /** invster address */
      invsterAddress: string;
      /** bond time */
      bondTime: string;
      /** team amount */
      teamAmount: number;
      /* points */
      point: number;
      /* card */
      card: number;
      /* grid gain */
      gridGain: number;
      /* proxy gain */
      proxyGain: number;
      /* team gain */
      teamGain: number;
      /* unblock gain */
      unblockGain: number;
      /* creact time */
      creactTime: string;
    }>;

    /** user search params */
    type UserSearchParams = CommonType.RecordNullable<
      Pick<Api.UserManage.User, 'teamLevel' | 'proxyLevel' | 'point' | 'card'> & CommonSearchParams
    >;

    /** user list */
    type UserList = Common.PaginatingQueryRecord<User>;
  }

  /**
   * namespace ProjectManage
   *
   * backend api module: "projectManage"
   */
  namespace ProjectManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** user */
    type User = Common.CommonRecord<{
      /** user address */
      address: string;
      /** user website */
      website: string;
      /** remark */
      remark: string;
    }>;

    /** level */
    type Tag = Common.CommonRecord<{
      /** user address */
      label: string;
    }>;

    type Swiper = {
      /* swiper id */
      id: number;
      /* swiper image */
      image: string;
      /* swiper link */
      link: string;
    };

    /** project */
    type Project = Common.CommonRecord<{
      /** project name */
      projectName: string;
      /** project logo */
      projectLogo: string;
      /** share name */
      shareName: string;
      /** project logo */
      shareLogo: string;
      /* swiper image */
      swiper: any[];
      /* swiper link */
      link: any[];
    }>;

    /** user search params */
    type UserSearchParams = CommonType.RecordNullable<
      Pick<Api.ProjectManage.User, 'address' | 'website' | 'remark'> & CommonSearchParams
    >;

    /** level search params */
    type InvestmentTagSearchParams = CommonType.RecordNullable<
      Pick<Api.ProjectManage.Tag, 'id' | 'label' | 'status'> & CommonSearchParams
    >;

    /** user list */
    type UserList = Common.PaginatingQueryRecord<User>;

    /** Investment Tag */
    type InvestmentTag = Common.PaginatingQueryRecord<Tag>;

    /** project */
    type ProjectList = Common.PaginatingQueryRecord<Project>;
  }

  /**
   * namespace TestOrder
   *
   * backend api module: "testOrder"
   */
  namespace TestOrder {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    type Matrix = {
      id: number;
      logo: string;
      store: number;
    };

    /** Order */
    type Order = Common.CommonRecord<{
      /** user address */
      address: string;
      /** matrix */
      matrix: Matrix;
      /** parts */
      parts: number;
      /** actual purchase amount */
      actualAmount: number;
      /** price */
      price: number;
      /** total purchase amount */
      totalAmount: number;
      /** earnest money */
      cash: number;
      /** actual claim revenue */
      actualClaim: number;
      /** estimated revenue */
      estimatedRevenue: number;
      /** surplus */
      surplus: number;
      /** timeline */
      timeline: string;
      /** add Time */
      addTime: string;
    }>;

    /** user search params */
    type OrderSearchParams = CommonType.RecordNullable<
      Pick<Api.TestOrder.Order, 'address' | 'parts' | 'price' | 'cash' | 'addTime'> & CommonSearchParams
    >;

    /** order list */
    type OrderList = Common.PaginatingQueryRecord<Order>;
  }

  /**
   * namespace SystemManage
   *
   * backend api module: "systemManage"
   */
  namespace SystemManage {
    type CommonSearchParams = Pick<Common.PaginatingCommonParams, 'current' | 'size'>;

    /** role */
    type Role = Common.CommonRecord<{
      /** role name */
      roleName: string;
      /** role code */
      roleCode: string;
      /** role description */
      roleDesc: string;
    }>;

    /** role search params */
    type RoleSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.Role, 'roleName' | 'roleCode' | 'status'> & CommonSearchParams
    >;

    /** role list */
    type RoleList = Common.PaginatingQueryRecord<Role>;

    /** all role */
    type AllRole = Pick<Role, 'id' | 'roleName' | 'roleCode'>;

    /**
     * user gender
     *
     * - "1": "male"
     * - "2": "female"
     */
    type UserGender = '1' | '2';

    /** user */
    type User = Common.CommonRecord<{
      /** user name */
      userName: string;
      /** user gender */
      userGender: UserGender | null;
      /** user nick name */
      nickName: string;
      /** user phone */
      userPhone: string;
      /** user email */
      userEmail: string;
      /** user role code collection */
      userRoles: string[];
    }>;

    /** user search params */
    type UserSearchParams = CommonType.RecordNullable<
      Pick<Api.SystemManage.User, 'userName' | 'userGender' | 'nickName' | 'userPhone' | 'userEmail' | 'status'> &
        CommonSearchParams
    >;

    /** user list */
    type UserList = Common.PaginatingQueryRecord<User>;

    /**
     * menu type
     *
     * - "1": directory
     * - "2": menu
     */
    type MenuType = '1' | '2';

    type MenuButton = {
      /**
       * button code
       *
       * it can be used to control the button permission
       */
      code: string;
      /** button description */
      desc: string;
    };

    /**
     * icon type
     *
     * - "1": iconify icon
     * - "2": local icon
     */
    type IconType = '1' | '2';

    type MenuPropsOfRoute = Pick<
      import('vue-router').RouteMeta,
      | 'i18nKey'
      | 'keepAlive'
      | 'constant'
      | 'order'
      | 'href'
      | 'hideInMenu'
      | 'activeMenu'
      | 'multiTab'
      | 'fixedIndexInTab'
      | 'query'
    >;

    type Menu = Common.CommonRecord<{
      /** parent menu id */
      parentId: number;
      /** menu type */
      menuType: MenuType;
      /** menu name */
      menuName: string;
      /** route name */
      routeName: string;
      /** route path */
      routePath: string;
      /** component */
      component?: string;
      /** iconify icon name or local icon name */
      icon: string;
      /** icon type */
      iconType: IconType;
      /** buttons */
      buttons?: MenuButton[] | null;
      /** children menu */
      children?: Menu[] | null;
    }> &
      MenuPropsOfRoute;

    /** menu list */
    type MenuList = Common.PaginatingQueryRecord<Menu>;

    type MenuTree = {
      id: number;
      label: string;
      pId: number;
      children?: MenuTree[];
    };

    /**
     * Exchange Price Switch
     *
     * - true: "open"
     * - false: "close"
     */
    type ExchangePriceSwitch = boolean;

    /** order */
    type Order = Common.CommonRecord<{
      /** ExchangePriceSwitch */
      exchangPriceSwitch: ExchangePriceSwitch;
      /** the number of back-office exchange order statuses to be synchronised at a time */
      syncNumber: number;
      /** exchange order status synchronisation intervals. */
      syncIterval: number;
      /** prepaid order system expiration time */
      prepaidOrderExpiryTime: number;
      /** Precautionary order contract expiry time */
      contractExpiryTime: number;
      /** exchange order expiration time */
      orderExpiryTime: number;
      /** exchange expiration time. */
      exchangeExpiryTime: number;
    }>;

    /** coin */
    type Coin = Common.CommonRecord<{
      /** paid coin name */
      paidCoin: string;
      /** paid coin number */
      paidCoinNumber: number;
      /** Coins circulating in the system */
      coinType: string;
      /** Prohibited Time for Withdrawal of Orders */
      prohibitedTime: number;
      /** Value per share (usdt) */
      values: number;
      /** Percentage of contracts transferred Validation1 */
      validation1: number;
      /** Percentage of contracts transferred Validation2 */
      validation2: number;
      /** Increase in the current price of the platform */
      raise: string;
      /** Neutral coin copy */
      normalCoin: string;
      /** paid coin copy */
      payCoinText: string;
    }>;

    /** contract */
    type Contract = Common.CommonRecord<{
      /** Unlocked topic hash */
      unblockHash: string;
      /** Topic hash for usdt earnings */
      usdtEarnHash: string;
      /** Buy points topic hash */
      buyPointHash: string;
    }>;

    /** team level */
    type TeamLevel = Common.CommonRecord<{
      /** Performance required for team level V5 */
      V5Yield: number;
      /** Performance required for team level V4 */
      V4Yield: number;
      /** Performance required for team level V3 */
      V3Yield: number;
      /** Performance required for team level V2 */
      V2Yield: number;
      /** Performance required for team level V1 */
      V1Yield: number;
      /** Number of direct pushes from V4 required for team level V5 */
      V5Inviter: number;
      /** Number of direct pushes from V3 required for team level V4 */
      V4Inviter: number;
      /** Number of direct pushes from V2 required for team level V3 */
      V3Inviter: number;
      /** Number of direct pushes from V1 required for team level V2 */
      V2Inviter: number;
      /** Team V5 ratio */
      V5Ratio: number;
      /** Team V4 ratio */
      V4Ratio: number;
      /** Team V3 ratio */
      V3Ratio: number;
      /** Team V2 ratio */
      V2Ratio: number;
      /** Team V1 ratio */
      V1Ratio: number;
    }>;

    /** fee */
    type Fee = Common.CommonRecord<{
      /** Spot Earnings Handling Charge */
      investFee: number;
      /** Grid Revenue Handling Fee */
      gridFee: number;
      /** Unlock the fixed currency given */
      unblockCoin: string;
      /** Unlock the fixed number */
      unblockAmount: number;
    }>;
  }
}
