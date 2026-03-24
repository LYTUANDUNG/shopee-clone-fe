// Removed BreadcrumbItemData import to fix tsc lint error

export interface ProductAttribute {
  label: string;
  value: string;
}

export interface SizeTableColumn {
  label: string;
  subLabel?: string;
}

export interface SizeTableRow {
  size: string;
  measurements: (string | number)[];
}

export interface SizeGuideData {
  columns: SizeTableColumn[];
  rows: SizeTableRow[];
}

export interface ProductDescriptionProps {
  description?: string;
  categories?: { label: string; to?: string }[];
  attributes?: ProductAttribute[];
  showSizeInput?: boolean;
  sizeGuide?: SizeGuideData;
}
