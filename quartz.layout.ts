import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import type { Options as ExplorerOptions } from "./quartz/components/Explorer"

// ---- Custom Explorer sort function ----
const explorerSortFn: ExplorerOptions["sortFn"] = (a, b) => {
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

  const getFolderRank = (node: any): number => {
    if (!node.isFolder) return 1_000_000 // files always after folders
    const name = node.displayName ?? ""
    return folderOrder[name] ?? 9_999 // anything not listed goes after your custom ones
  }

  // If both are folders: use rank, then alphabetical as tiebreaker
  if (a.isFolder && b.isFolder) {
    const rankDiff = getFolderRank(a) - getFolderRank(b)
    if (rankDiff !== 0) return rankDiff

    const nameA = (a.displayName ?? "").toLowerCase()
    const nameB = (b.displayName ?? "").toLowerCase()
    return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: "base" })
  }

  // If one is folder and one is file: folders first
  if (a.isFolder && !b.isFolder) return -1
  if (!a.isFolder && b.isFolder) return 1

  // Both files: alphabetical by displayName
  const nameA = (a.displayName ?? "").toLowerCase()
  const nameB = (b.displayName ?? "").toLowerCase()
  return nameA.localeCompare(nameB, undefined, { numeric: true, sensitivity: "base" })
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

