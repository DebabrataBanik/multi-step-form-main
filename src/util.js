import ArcadeIcon from './assets/images/icon-arcade.svg'
import AdvancedIcon from './assets/images/icon-advanced.svg'
import ProIcon from './assets/images/icon-pro.svg'

export const PLAN = {
  arcade: {
    title: 'Arcade',
    icon: ArcadeIcon,
    monthly: 9,
    yearly: 90
  },
  advanced: {
    title: 'Advanced',
    icon: AdvancedIcon,
    monthly: 12,
    yearly: 120
  },
  pro: {
    title: 'Pro',
    icon: ProIcon,
    monthly: 15,
    yearly: 150
  }
}

export const ADDONS = {
  online: {
    title: 'Online service',
    desc: 'Access to multiplayer games',
    monthly: 1,
    yearly: 10
  },
  storage: {
    title: 'Larger storage',
    desc: 'Extra 1TB of cloud save',
    monthly: 2,
    yearly: 20
  },
  customize: {
    title: 'Customizable Profile',
    desc: 'Custom theme on your profile',
    monthly: 2,
    yearly: 20
  }
}