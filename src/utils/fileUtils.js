import { readdirSync, readFileSync } from 'fs';

let base_dir = './src/'

function parseFrontmatter(filePath) {
  try {
    const content = readFileSync(filePath, 'utf-8')
    if (!content.startsWith('---')) return null

    const end = content.indexOf('---', 3)
    if (end === -1) return null

    const yamlBlock = content.substring(3, end).trim()
    const frontmatter = {}
    for (const line of yamlBlock.split('\n')) {
      const idx = line.indexOf(':')
      if (idx === -1) continue
      const key = line.substring(0, idx).trim()
      let value = line.substring(idx + 1).trim()
      // strip surrounding quotes
      if ((value.startsWith('"') && value.endsWith('"')) ||
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1)
      }
      frontmatter[key] = value
    }
    return frontmatter
  } catch {
    return null
  }
}

function monthGroup(dateStr) {
  // date format: YYYY-MM-DD or YYYY-MM-DD HH:mm
  if (!dateStr) return null
  return dateStr.substring(0, 7) // "YYYY-MM"
}

export function getFileName(dir) {
  return readdirSync(base_dir.concat(dir))
}

// notes 目录：按 frontmatter date 分组，显示 title
export function folderLoader(dir) {
  const files = getFileName(dir).filter(f => f.endsWith('.md'))
  const entries = files.map(f => {
    const fm = parseFrontmatter(base_dir + dir + '/' + f)
    const name = f.slice(0, -3)
    if (fm && fm.date && fm.title) {
      return { date: fm.date, title: fm.title, group: monthGroup(fm.date), link: `/${dir}/${name}` }
    }
    // fallback: 无 frontmatter 时用文件名前7字符分组
    return { date: name, title: name, group: name.slice(0, 7), link: `/${dir}/${name}` }
  })

  // 按 group 分组
  const groups = {}
  for (const e of entries) {
    if (!groups[e.group]) {
      groups[e.group] = { text: e.group, items: [] }
    }
    groups[e.group].items.push({ text: e.title, link: e.link })
  }

  // 按 date 倒序排列（每组内 + 组之间）
  const list = Object.values(groups)
  for (const g of list) {
    g.items.sort((a, b) => {
      const da = entries.find(e => e.link === a.link)?.date || ''
      const db = entries.find(e => e.link === b.link)?.date || ''
      return db.localeCompare(da)
    })
  }
  list.sort((a, b) => b.text.localeCompare(a.text))
  return list
}

// java/linux 目录：直接用文件名
export function folderLoaderJava(dir) {
  const list = []
  getFileName(dir).forEach(e => {
    list.push({ text: e.slice(0, -3), link: `/${dir}/${e.slice(0, -3)}` })
  })
  return list
}
