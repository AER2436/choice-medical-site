import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// ---- Custom Explorer sort function ----
// Quartz uses `file === null` => folder, `file !== null` => file
// https://quartz.jzhao.xyz/features/explorer
const explorerSortFn = (a: any, b: any) => {
  // Custom order for top-level folders (by displayName)
  const folderOrder: Record<string, number> = {
    "Choice Medical": 10,
    "Billing Tips": 20,
    "Insurances": 30,
    "Checklists": 40,
    "Catalogs": 50,
    "PAP": 60,
    "Oxygen": 70,
    "Wheelchairs": 80,
    "Recertification_Revalidation": 90,
    "Clippings": 100,
  }

  const isFolderA = a.file == null
  const isFolderB = b.file == null

  const getRank = (node: any): number => {
    if (node.file == null) {
      const name = node.displayName ?? node.name ?? ""
      return folderOrder[name] ?? 9999 // folders not in list go after your custom ones
    }
    // files always after folders
    return 1_000_000
  }

  // Put folders (ranked) before files
  const rankDiff = getRank(a) - getRank(b)
  if (rankDiff !== 0) return rankDiff

  // Same rank → alphabetical by displayName
  const nameA = (a.displayName ?? a.name ?? "").toLowerCase()
  const nameB = (b.displayName ?? b.name ?? "").toLowerCase()
  return nameA.localeCompare(nameB, undefined, {
    numeric: true,
    sensitivity: "base",
  })
}

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
      "Discord Community": "https://discord.gg/cRFFHYye7t",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.DailyTip(),
    Component.ConditionalRender({
      component: Component.Breadcrumbs(),
      condition: (page) => page.fileData.slug !== "index",
    }),
    // Component.ArticleTitle(),
    // Component.ContentMeta(),
    Component.TagList(),
  ],
  left: [
    // Component.PageTitle(),
    // Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
        { Component: Component.ReaderMode() },
      ],
    }),
    Component.Explorer({
      sortFn: explorerSortFn,
    }),
  ],
  right: [
    // Component.Graph(),
    // Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Flex({
      components: [
        {
          Component: Component.Search(),
          grow: true,
        },
        { Component: Component.Darkmode() },
      ],
    }),
    Component.Explorer({
      sortFn: explorerSortFn,
    }),
  ],
  right: [],
}

