/*
 * Main and demo navigation arrays
 *
 * 'to' attribute points to the route name, not the path url
 */

export default {
  main: [
    {
      name: "Dashboard",
      to: "dashboard",
      icon: "fa fa-chart-line",
    },
    {
      name: "Báo cáo BĐS",
      icon: "fa fa-house",
      subActivePaths: "/real-estate-report",
      sub: [
        {
          name: "Aum",
          icon: "fa fa-bars",
          to: "aum",
          sub: [
            {
              name: "Tổng quan",
              icon: "fa fa-clipboard",
              to: "aum-overview",
            },
            {
              name: "Tập khách hàng",
              icon: "fa fa-user",
              to: "aum-user-collection",
            },
            {
              name: "Chi tiết",
              icon: "fa fa-clipboard",
              to: "aum-detail",
            }
          ]
        },
        {
          name: "Giao dịch",
          icon: "fa fa-arrow-right",
          to: "transaction",
        },
        {
          name: "Chuyển đổi",
          icon: "fa fa-arrows-rotate",
          to: "moving",
        },
      ],
    },
  ],
};
