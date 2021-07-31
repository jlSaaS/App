import { createRouter, createWebHistory } from 'vue-router'
const Home = () => import('../pages/home.vue')
const Exams = () => import('../layouts/exams.vue')
const ExamsAll = () => import('../pages/exams/exams-all.vue')
const ExamsOne = () => import('../pages/exams/exam.vue')
const Remediations = () => import('../layouts/remediations.vue')
const RemediationsAll = () => import('../pages/remediations/remediations-all.vue')
const RemediationsOne = () => import('../pages/remediations/remediation.vue')
const Reports = () => import('../layouts/reports.vue')
const ReportsAll = () => import('../pages/reports/reports-all.vue')
const ReportsOne = () => import('../pages/reports/report.vue')
const Profile = () => import('../pages/profile.vue')
const Settings = () => import('../pages/settings.vue')
const SignedOut = () => import('../pages/signed-out.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/exams',
    component: Exams,
    children: [
      {
        path: '',
        name: 'Exams',
        component: ExamsAll
      },
      {
        path: ':id',
        name: 'Exam',
        component: ExamsOne
      }
    ]
  },
  {
    path: '/remediations',
    component: Remediations,
    children: [
      {
        path: '',
        name: 'Remediations',
        component: RemediationsAll
      },
      {
        path: ':id',
        name: 'Remediation',
        component: RemediationsOne
      }
    ]
  },
  {
    path: '/reports',
    component: Reports,
    children: [
      {
        path: '',
        name: 'Reports',
        component: ReportsAll
      },
      {
        path: ':id',
        name: 'Report',
        component: ReportsOne
      }
    ]
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings
  },
  {
    path: '/signed-out',
    name: 'Signed Out',
    component: SignedOut
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
