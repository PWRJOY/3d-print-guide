<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'
import { onMounted, watch } from 'vue'
import { useRoute } from 'vitepress'

const { Layout } = DefaultTheme
const route = useRoute()

const DEFAULT_WIDTH = 248
const MIN_WIDTH = 200
const MAX_WIDTH = 420

let dragging = false
let startX = 0
let startW = DEFAULT_WIDTH

function currentWidth(): number {
  const raw = getComputedStyle(document.documentElement).getPropertyValue('--vp-sidebar-width')
  const v = parseInt(raw, 10)
  return Number.isFinite(v) && v > 0 ? v : DEFAULT_WIDTH
}

function applyWidth(w: number) {
  document.documentElement.style.setProperty('--vp-sidebar-width', `${Math.round(w)}px`)
}

function updateResizerVisibility() {
  const resizer = document.querySelector('.vp-sidebar-resizer') as HTMLElement | null
  if (!resizer) return
  // 移动端抽屉模式（<960px）由 CSS 隐藏；这里处理“页面无侧边栏”的情况（如首页）
  const hasSidebar = !!document.querySelector('.VPSidebar')
  resizer.style.display = hasSidebar ? '' : 'none'
}

function initResizer() {
  // 恢复上次拖拽保存的宽度
  try {
    const saved = localStorage.getItem('vp-sidebar-width')
    if (saved) {
      const w = Math.min(Math.max(parseInt(saved, 10) || DEFAULT_WIDTH, MIN_WIDTH), MAX_WIDTH)
      if (w !== DEFAULT_WIDTH) applyWidth(w)
    }
  } catch {
    /* localStorage 不可用时忽略 */
  }

  // 注入拖拽手柄（fixed 定位，位置随 --vp-sidebar-width 变量变化，与路由无关）
  if (!document.querySelector('.vp-sidebar-resizer')) {
    const el = document.createElement('div')
    el.className = 'vp-sidebar-resizer'
    el.title = '拖动调整侧边栏宽度，双击恢复默认'
    document.body.appendChild(el)
  }

  // 事件委托挂在 document 上，SPA 路由切换后依然有效
  document.addEventListener('pointerdown', (e) => {
    const t = e.target as HTMLElement
    if (!t.closest('.vp-sidebar-resizer')) return
    dragging = true
    startX = e.clientX
    startW = currentWidth()
    document.body.classList.add('vp-resizing')
    e.preventDefault()
  })

  document.addEventListener('pointermove', (e) => {
    if (!dragging) return
    const max = Math.min(MAX_WIDTH, Math.round(window.innerWidth * 0.45))
    const w = Math.min(Math.max(startW + (e.clientX - startX), MIN_WIDTH), max)
    applyWidth(w)
  })

  document.addEventListener('pointerup', () => {
    if (!dragging) return
    dragging = false
    document.body.classList.remove('vp-resizing')
    try {
      localStorage.setItem('vp-sidebar-width', String(currentWidth()))
    } catch {
      /* 忽略 */
    }
  })

  // 双击手柄恢复默认宽度
  document.addEventListener('dblclick', (e) => {
    const t = e.target as HTMLElement
    if (!t.closest('.vp-sidebar-resizer')) return
    applyWidth(DEFAULT_WIDTH)
    try {
      localStorage.setItem('vp-sidebar-width', String(DEFAULT_WIDTH))
    } catch {
      /* 忽略 */
    }
  })

  updateResizerVisibility()
}

onMounted(initResizer)

// 路由切换后侧边栏可能消失（如首页），同步手柄显示状态
watch(
  () => route.path,
  () => {
    setTimeout(updateResizerVisibility, 0)
  }
)
</script>

<template>
  <Layout />
</template>
