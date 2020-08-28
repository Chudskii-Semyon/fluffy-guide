import React from 'react';
import { Menu } from 'antd';
import { DingtalkOutlined, SettingOutlined } from '@ant-design/icons';
import { Link, useLocation } from '@reach/router';

const navigationItemsConfigs = [
  {
    label: 'Battle',
    path: '/dashboard/battle',
    icon: <DingtalkOutlined />,
  },
  {
    label: 'Configure Army',
    path: '/dashboard/army',
    icon: <SettingOutlined />,
  },
];

const NavigationMenu = () => {
  const { pathname } = useLocation();

  return (
    <Menu theme="dark" mode="inline" defaultSelectedKeys={[pathname]}>
      {navigationItemsConfigs.map(({ icon, path, label }) => (
        <Menu.Item key={path} icon={icon}>
          <Link to={path}>
            {label}
          </Link>
        </Menu.Item>
      ))}
    </Menu>
  );
};

export default NavigationMenu;
