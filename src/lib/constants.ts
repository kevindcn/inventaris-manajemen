// src/lib/constants.ts
export const INVENTORY_STATUS = {
  IN_STOCK: "IN_STOCK",
  LOW_STOCK: "LOW_STOCK",
  OUT_OF_STOCK: "OUT_OF_STOCK",
} as const

export const WAREHOUSE_LOCATIONS = [
  { id: 1, name: "Gudang Utama", code: "WH-01" },
  { id: 2, name: "Gudang Barat", code: "WH-02" },
  { id: 3, name: "Gudang Timur", code: "WH-03" },
] as const

export const PRODUCT_CATEGORIES = [
  "Electronics",
  "Clothing",
  "Furniture",
  "Food",
  "Office Supplies",
] as const
