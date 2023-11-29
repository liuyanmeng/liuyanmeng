// 函数组件
// 快捷键Ctrl+Win+i 添加注释
import React, { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom'
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}
// getItem('栏目 1', '/page1', <PieChartOutlined />),
// getItem('栏目 2', '/page2', <DesktopOutlined />),
// getItem('User', 'sub1', <UserOutlined />, [
//   getItem('Tom', '3'),
//   getItem('Bill', '4'),
//   getItem('Alex', '5'),
// ]),
// getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
// getItem('Files', '9', <FileOutlined />),
const items: MenuItem[] = [
  {
    label: '栏目1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: '栏目2',
    key: '/page2',
    icon: <DesktopOutlined />,
  },
  {
    label: '栏目3',
    key: 'page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目3-1',
        key: '/page3/page301',
      },
      {
        label: '栏目3-2',
        key: '/page3/page302',
      },
      {
        label: '栏目3-3',
        key: '/page3/page303',
      }
    ]
  },
  {
    label: '栏目4',
    key: 'page4',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目3-1',
        key: '/page3/page301',
      },
      {
        label: '栏目3-2',
        key: '/page3/page302',
      },
      {
        label: '栏目3-3',
        key: '/page3/page303',
      }
    ]
  },
  {
    label: '栏目5',
    key: 'page5',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目3-1',
        key: '/page3/page301',
      },
      {
        label: '栏目3-2',
        key: '/page3/page302',
      },
      {
        label: '栏目3-3',
        key: '/page3/page303',
      }
    ]
  }
];
function MenuView() {
  // const [xxx, setXxx] = useState('')
  // 路由跳转
  const navigateTo = useNavigate()
  // 拿到页面路径栏上的路由路径
  const currentRouter = useLocation()
  // console.log('---------',currentRouter)
  useEffect(() => {
    navigateTo('/page1')
    console.log('MenuView函数组件来咯')
  }, [])
  const menuClick = (e: { key: string }) => {
    console.log('点击了', e.key)
    // 编程式导航路由跳转
    navigateTo(e.key)
  }

  // 拿着currentRouter.pathname 跟items数组的每一项的children的key值进行对比，如果找到了相等，就要他的上一级的key
  // 拿着这个key给到openKeys数组的元素，作为初始值

  let firstOpenKeys: string = "";
  // 进行对比
  function findKey(obj: { key: string }) {
    return obj.key === currentRouter.pathname
  }
  for (let i = 0; i < items.length; i++) {
   if(items[i]!['children'] && items[i]!['children'].length>1 && items[i]!['children'].find(findKey)){
    firstOpenKeys = items[i]!.key as string
    break;
   }

  }

  // if(items[i]?['children'] && items[i]?['children'].length>1 && items[i]?['children'].find(item => item.key === currentRouter.pathname)){
  // 定义展开收起数组
  const [openKeys, setOpenKeys] = useState([firstOpenKeys]);
  console.log('firstOpenKeys',firstOpenKeys)
  // 展开收起
  const handOnOpenChange = (e: string[]) => {
    setOpenKeys([e[e.length - 1]])
    console.log(e)
  }

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={[currentRouter.pathname]}
      mode="inline"
      items={items}
      onClick={menuClick}
      onOpenChange={handOnOpenChange}
      openKeys={openKeys}
    />
  )
}

export default MenuView