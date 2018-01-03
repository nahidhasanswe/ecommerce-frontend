export const ROUTES = [
  { path: '/mypage/dashboard', title: 'Dashboard', icon: 'dashboard', children: null },
  { path: '#order', id: 'order', title: 'Order Management', icon: 'card_giftcard', children: [
    {path: 's', title: 'Current Order', icon: 'widgets'},
    {path: 's', title: 'Order History', icon: 'history'},
    {path: 's', title: 'Periodic Order', icon: 'schedule'},
    {path: 's', title: 'Causal Order', icon: 'shopping_basket'},
  ]},
  // { path: '#component', id: 'component', title: 'Component', icon: 'apps', children: [
  //     {path: 'sg', title: 'Product Management', icon: 'PT'},
  //     {path: 'sg', title: 'Order Management', icon: 'P'},
  //     {path: 'dsg', title: 'Customer Management', icon: 'W'},
  //   ]},
  { path: 'notification', title: 'Points', icon: 'control_point_duplicate', children: null }
];
